import formidable from "formidable";
import fs from "fs/promises";
import path from "path";
import { processImage } from "../scripts/imageProcessor.js";
import { loadManifest } from "../scripts/loadManifest.js";
import { loadManifestByLabel } from "../scripts/loadManifestByLabel.js";
export function viteApiPlugin() {
    return {
        name: "vite-api-plugin",
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                await handleApiRequests(req, res, next);
            });
        },
        configurePreviewServer(server) {
            server.middlewares.use(async (req, res, next) => {
                await handleApiRequests(req, res, next);
            });
        },
    };
}
async function handleApiRequests(req, res, next) {
    if (!req.url) {
        return next();
    }
    const url = new URL(req.url, "http://localhost");
    // ===== GET /api/manifest/config/schema =====
    if (req.method === "GET" && url.pathname === "/api/manifest/config/schema") {
        try {
            const page = url.searchParams.get("page");
            if (!page) {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 400;
                return res.end(JSON.stringify({
                    success: false,
                    error: "Missing page parameter",
                }));
            }
            const manifestConfig = await loadManifest();
            const pageManifestConfig = manifestConfig.find((item) => item.label === page);
            const sectionConfig = [];
            pageManifestConfig?.sections?.map((item) => {
                sectionConfig.push({
                    name: item.name,
                    schema: item.schema,
                });
            });
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            return res.end(JSON.stringify({
                success: true,
                data: {
                    useWebP: pageManifestConfig?.useWebp,
                    sections: sectionConfig,
                },
            }));
        }
        catch (error) {
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 500;
            return res.end(JSON.stringify({
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
            }));
        }
    }
    if (req.method === "GET" && url.pathname === "/api/content/get") {
        try {
            const label = url.searchParams.get("label");
            if (!label) {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 400;
                return res.end(JSON.stringify({
                    success: false,
                    error: "Missing label parameter",
                }));
            }
            const slug = url.searchParams.get("slug");
            if (!slug) {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 400;
                return res.end(JSON.stringify({
                    success: false,
                    error: "Missing slug parameter",
                }));
            }
            const manifestConfig = await loadManifestByLabel(label);
            const CONTENT_DIR = path.resolve(process.cwd(), manifestConfig.outDir);
            await fs
                .readFile(path.join(CONTENT_DIR, `${slug}.json`), "utf-8")
                ?.then((content) => {
                const data = JSON.parse(content);
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 200;
                return res.end(JSON.stringify({
                    success: true,
                    data: data,
                }));
            })
                .catch(() => {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 400;
                return res.end(JSON.stringify({
                    success: false,
                    message: "No Such Content Found",
                }));
            });
            return;
        }
        catch (error) {
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 500;
            return res.end(JSON.stringify({
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
            }));
        }
    }
    if (req.method === "POST" && url.pathname === "/api/content/save") {
        try {
            const label = url.searchParams.get("label");
            if (!label) {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 400;
                return res.end(JSON.stringify({
                    success: false,
                    error: "Missing label parameter",
                }));
            }
            const chunks = [];
            for await (const chunk of req) {
                chunks.push(chunk);
            }
            const body = Buffer.concat(chunks).toString();
            const data = JSON.parse(body);
            const { slug, content } = data;
            if (!slug || !content) {
                res.statusCode = 400;
                return res.end(JSON.stringify({ success: false, error: "Missing slug or content" }));
            }
            const manifestConfig = await loadManifestByLabel(label);
            const CONTENT_DIR = path.resolve(process.cwd(), manifestConfig.outDir);
            await fs.mkdir(CONTENT_DIR, { recursive: true });
            await fs.writeFile(path.join(CONTENT_DIR, `${slug}.json`), JSON.stringify(content, null, 2));
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            return res.end(JSON.stringify({
                success: true,
                message: "Content saved successfully",
            }));
        }
        catch (error) {
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 500;
            return res.end(JSON.stringify({
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
            }));
        }
    }
    if (req.method === "POST" && url.pathname == "/api/upload/single/image") {
        try {
            const label = url.searchParams.get("label");
            if (!label) {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 400;
                return res.end(JSON.stringify({
                    success: false,
                    error: "Missing label parameter",
                }));
            }
            const incomingFormData = formidable({ multiples: false, keepExtensions: true });
            incomingFormData.parse(req, async (error, fields, files) => {
                if (error) {
                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    return res.end(JSON.stringify({ success: false, error: error.message }));
                }
                const file = files.file?.[0];
                const schemaField = fields.schema?.[0];
                const schema = schemaField ? JSON.parse(schemaField) : null;
                const useWebP = fields.useWebP?.[0] === "true";
                const sectionType = fields.sectionType?.[0] || "";
                if (!file) {
                    res.setHeader("Content-Type", "multipart/form-data");
                    res.statusCode = 400;
                    return res.end(JSON.stringify({
                        success: false,
                        message: "No file provided",
                    }));
                }
                if (!schema) {
                    res.setHeader("Content-Type", "multipart/form-data");
                    res.statusCode = 400;
                    return res.end(JSON.stringify({
                        success: false,
                        message: "No schema provided",
                    }));
                }
                const fileBuffer = await fs.readFile(file.filepath);
                const uploadedImage = await processImage(fileBuffer, file.originalFilename || file.newFilename, schema, useWebP, label, sectionType);
                if (!uploadedImage.success || !uploadedImage?.data) {
                    res.setHeader("Content-Type", "multipart/form-data");
                    res.statusCode = 400;
                    return res.end(JSON.stringify({
                        success: false,
                        message: uploadedImage.message,
                    }));
                }
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                return res.end(JSON.stringify({
                    success: true,
                    data: uploadedImage.data,
                }));
            });
            return;
        }
        catch (error) {
            res.setHeader("Content-Type", "multipart/form-data");
            res.statusCode = 500;
            return res.end(JSON.stringify({
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
            }));
        }
    }
    if (req.method === "DELETE" && url.pathname === "/api/upload/single/image") {
        try {
            const label = url.searchParams.get("label");
            const targetPath = url.searchParams.get("path");
            if (!label) {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 400;
                return res.end(JSON.stringify({
                    success: false,
                    error: "Missing label parameter",
                }));
            }
            if (!targetPath) {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 400;
                return res.end(JSON.stringify({
                    success: false,
                    error: "Missing path parameter",
                }));
            }
            const manifestConfig = await loadManifestByLabel(label);
            const allowedDirs = Object.values(manifestConfig?.assets || {}).map((dir) => path.resolve(process.cwd(), dir));
            const absoluteTarget = path.resolve(process.cwd(), targetPath);
            const isWithinAllowedDir = allowedDirs.some((dir) => absoluteTarget === dir || absoluteTarget.startsWith(dir + path.sep));
            if (!isWithinAllowedDir) {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 403;
                return res.end(JSON.stringify({
                    success: false,
                    error: "Path is outside of the allowed asset directories",
                    details: {
                        receivedPath: targetPath,
                        resolvedTarget: absoluteTarget,
                        allowedDirs,
                        cwd: process.cwd(),
                    },
                }));
            }
            await fs.rm(absoluteTarget, { force: true });
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            return res.end(JSON.stringify({
                success: true,
                message: "Image deleted successfully",
            }));
        }
        catch (error) {
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 500;
            return res.end(JSON.stringify({
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
            }));
        }
    }
    if (req.method === "GET" && url.pathname === "/api/listing/blogs/get") {
        try {
            const manifestConfig = await loadManifestByLabel("blog");
            const CONTENT_DIR = path.resolve(process.cwd(), manifestConfig.outDir);
            const files = await fs.readdir(CONTENT_DIR).catch((error) => {
                if (error?.code === "ENOENT")
                    return [];
                throw error;
            });
            const blogs = await Promise.all(files.map(async (file) => {
                const content = await fs.readFile(path.join(CONTENT_DIR, file), "utf-8");
                return { ...JSON.parse(content)?.listing, filename: file.replace(".json", "") };
            }));
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            return res.end(JSON.stringify({
                success: true,
                data: blogs,
            }));
        }
        catch (error) {
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 500;
            return res.end(JSON.stringify({
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
            }));
        }
    }
    next();
}
