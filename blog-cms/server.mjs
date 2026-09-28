// Serves the prebuilt blog CMS locally, plus its /api/* routes. Dev-only: blog-cms is excluded from the Next build and Vercel upload.
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { viteApiPlugin } from "./services/api/vite-api-plugin.js";

const PORT = Number(process.env.CMS_PORT) || 5175;
const ROOT = fileURLToPath(new URL(".", import.meta.url));
// The site's public/ folder: uploaded images live in public/blog/images/
const PUBLIC_ROOT = fileURLToPath(new URL("../public/", import.meta.url));

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

// The CMS API ships as a Vite plugin. Hand it a minimal `server.middlewares.use` so we can reuse its
// request handler here without running a full Vite server.
let apiHandler = null;
viteApiPlugin().configureServer({ middlewares: { use: (handler) => (apiHandler = handler) } });

const sendJson = (res, statusCode, body) => {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
};

const serveStatic = (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url ?? "/", "http://localhost").pathname);

  // An /api/* route the plugin didn't handle must answer JSON, never the SPA's index.html
  if (pathname.startsWith("/api/")) {
    sendJson(res, 404, { success: false, error: `No CMS API route for ${req.method} ${pathname}` });
    return;
  }

  // Only the built UI is public; the CMS server source (services/, *.mjs) is not
  if (pathname.startsWith("/services/") || pathname.endsWith(".mjs")) {
    res.writeHead(404).end();
    return;
  }

  // The CMS saves image urls as "./public/blog/images/x.webp" and previews them as-is, so the browser asks for
  // ".../public/blog/images/x.webp" (relative to whatever CMS route is open). Serve those from the site's public/.
  const publicIndex = pathname.indexOf("/public/");
  const baseDir = publicIndex === -1 ? ROOT : PUBLIC_ROOT;
  const relativePath = publicIndex === -1 ? pathname : pathname.slice(publicIndex + "/public/".length);

  // normalize() + the prefix check blocks "../" escapes out of the served folder
  let filePath = normalize(join(baseDir, relativePath));

  if (!filePath.startsWith(baseDir)) {
    res.writeHead(403).end();
    return;
  }

  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    // A missing file (image, script...) is a real 404; answering with index.html shows up as a broken image
    if (extname(pathname)) {
      res.writeHead(404).end();
      return;
    }

    // SPA fallback: unknown routes load index.html so client-side routing works on refresh
    filePath = join(ROOT, "index.html");
  }

  res.writeHead(200, { "Content-Type": MIME_TYPES[extname(filePath)] ?? "application/octet-stream" });
  createReadStream(filePath).pipe(res);
};

const server = createServer(async (req, res) => {
  try {
    await apiHandler(req, res, () => serveStatic(req, res));
  } catch (error) {
    console.error("[blog-cms] request failed:", error);
    if (!res.headersSent) {
      sendJson(res, 500, { success: false, error: error instanceof Error ? error.message : "Unknown error" });
    }
  }
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`[blog-cms] port ${PORT} is already in use. Stop the other process (lsof -i :${PORT}) and retry.`);
  } else {
    console.error("[blog-cms] failed to start:", error);
  }
  process.exit(1);
});

server.listen(PORT, () => {
  console.log(`[blog-cms] running at http://localhost:${PORT}`);
});
