import { readFile } from "fs/promises";
import { notFound } from "next/navigation";
import path from "path";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{
    slug?: string[];
  }>;
};

export async function getMarkDownFilePath(slug?: string[]) {
  const safeSlug = slug?.length ? slug.join("/") : "home";

  if (safeSlug.includes("..")) {
    return null;
  }
  return path.join(process.cwd(), "app", "content", "markdown", `${safeSlug}.md`);
}

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;

  const markdownPath = await getMarkDownFilePath(slug);

  if (!markdownPath) {
    notFound();
  }

  try {
    const markdown = await readFile(markdownPath, "utf-8");

    return new Response(markdown, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
        Vary: "Accept",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    notFound();
  }
}
