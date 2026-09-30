import fs from "fs/promises";
import path from "path";
import { renderIndexLine, renderPostMarkdown, replaceIndexBlock, sortPosts, } from "./renderMarkdown.js";
export function isMarkdownEnabled(manifest) {
    return !!manifest.markdown;
}
// Slug must be a plain file name so it can't escape the markdown directory
function assertSafeSlug(slug) {
    if (!slug || slug !== path.basename(slug) || slug.startsWith(".")) {
        throw new Error(`Invalid slug for markdown export: "${slug}"`);
    }
}
function postFilePath(manifest, slug) {
    assertSafeSlug(slug);
    return path.join(path.resolve(process.cwd(), manifest.markdown.outDir), `${slug}.md`);
}
// Skips the write when nothing changed, so an unchanged save leaves the file alone
async function writeIfChanged(filePath, content) {
    const existing = await fs.readFile(filePath, "utf-8").catch(() => null);
    if (existing === content)
        return;
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, content, "utf-8");
}
/** Every saved post, in the order the CMS lists them (newest first). */
export async function readAllPosts(contentDir) {
    const files = await fs.readdir(contentDir).catch((error) => {
        if (error?.code === "ENOENT")
            return [];
        throw error;
    });
    const posts = await Promise.all(files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => {
        const content = JSON.parse(await fs.readFile(path.join(contentDir, file), "utf-8"));
        return { slug: file.slice(0, -".json".length), content };
    }));
    return sortPosts(posts);
}
async function writePostMarkdown(manifest, slug, content) {
    await writeIfChanged(postFilePath(manifest, slug), renderPostMarkdown(content, manifest.sections, slug));
}
export async function regenerateMarkdownIndex(manifest) {
    if (!manifest.markdown)
        return;
    const indexFile = path.resolve(process.cwd(), manifest.markdown.indexFile);
    const posts = await readAllPosts(path.resolve(process.cwd(), manifest.outDir));
    const lines = posts.map((post) => renderIndexLine(post, manifest.markdown.urlBase));
    const existing = await fs.readFile(indexFile, "utf-8").catch((error) => {
        if (error?.code === "ENOENT")
            return "";
        throw error;
    });
    await writeIfChanged(indexFile, replaceIndexBlock(existing, lines));
}
/** Save / publish: writes the post file and refreshes the index. */
export async function syncPostMarkdown(manifest, slug, content) {
    if (!manifest.markdown)
        return;
    await writePostMarkdown(manifest, slug, content);
    await regenerateMarkdownIndex(manifest);
}
/** Delete / unpublish / slug rename: removes the post file and refreshes the index. */
export async function removePostMarkdown(manifest, slug) {
    if (!manifest.markdown)
        return;
    await fs.rm(postFilePath(manifest, slug), { force: true });
    await regenerateMarkdownIndex(manifest);
}
/** Rebuilds every post file and the index from the saved JSON files. */
export async function regenerateAllMarkdown(manifest) {
    if (!manifest.markdown) {
        throw new Error('Markdown export is not configured. Add a "markdown" block to the manifest config.');
    }
    const posts = await readAllPosts(path.resolve(process.cwd(), manifest.outDir));
    for (const post of posts) {
        await writePostMarkdown(manifest, post.slug, post.content);
    }
    await regenerateMarkdownIndex(manifest);
    return { posts: posts.length };
}
/** Runs a markdown task without letting it fail the request. Returns the warning to report, if any. */
export async function runMarkdownTask(task) {
    try {
        await task();
        return undefined;
    }
    catch (error) {
        const reason = error instanceof Error ? error.message : "Unknown error";
        console.error("Markdown export failed:", error);
        return `Markdown export failed: ${reason}`;
    }
}
