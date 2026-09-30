import { htmlToMarkdown, renderImage } from "./htmlToMarkdown.js";
export const INDEX_START_MARKER = "<!-- cms:posts:start -->";
export const INDEX_END_MARKER = "<!-- cms:posts:end -->";
const PLACEHOLDER_PATTERN = /\{\{\s*([\w.-]+)\s*\}\}/g;
const FENCE_PATTERN = /^\s*(`{3,}|~{3,})/;
function oneLine(value) {
    return typeof value === "string" || typeof value === "number" ? String(value).replace(/\s+/g, " ").trim() : "";
}
function getValue(data, key) {
    if (key in data)
        return data[key];
    return key.split(".").reduce((current, part) => {
        return current && typeof current === "object" ? current[part] : undefined;
    }, data);
}
function inferFieldType(value) {
    if (Array.isArray(value))
        return "ARRAY";
    if (typeof value === "boolean")
        return "BOOLEAN";
    if (value && typeof value === "object")
        return "url" in value ? "IMAGE" : "UNKNOWN";
    return "STRING";
}
/** Markdown for one field value. An empty string means the field has nothing to render. */
export function renderFieldValue(value, type) {
    if (value === undefined || value === null)
        return "";
    switch (type || inferFieldType(value)) {
        case "STRING":
        case "TEXTAREA":
        case "NUMBER":
            return typeof value === "string" || typeof value === "number" ? String(value).replace(/\r\n?/g, "\n").trim() : "";
        case "RICH_TEXT":
            return typeof value === "string" ? htmlToMarkdown(value) : "";
        case "IMAGE": {
            const image = typeof value === "string" ? { url: value } : value;
            return typeof image.url === "string" ? renderImage(image.url, typeof image.alt === "string" ? image.alt : "") : "";
        }
        case "ARRAY":
        case "ARRAY_OF_STRINGS":
        case "LIST":
            if (!Array.isArray(value))
                return "";
            return value
                .map(oneLine)
                .filter(Boolean)
                .map((item) => `- ${item}`)
                .join("\n");
        default:
            // BOOLEAN, JSON_EDITOR and anything unknown has no markdown form
            return "";
    }
}
/** Collapses blank line runs and trims line ends, leaving fenced code untouched. */
export function normalizeMarkdown(markdown) {
    const lines = [];
    let openFence = null;
    for (const rawLine of markdown.replace(/\r\n?/g, "\n").split("\n")) {
        const fence = rawLine.match(FENCE_PATTERN)?.[1];
        if (openFence) {
            lines.push(rawLine);
            if (fence && fence[0] === openFence[0] && fence.length >= openFence.length)
                openFence = null;
            continue;
        }
        if (fence)
            openFence = fence;
        const line = rawLine.trimEnd();
        if (!line && (lines.length === 0 || lines[lines.length - 1] === ""))
            continue;
        lines.push(line);
    }
    while (lines.length > 0 && lines[lines.length - 1] === "")
        lines.pop();
    return lines.join("\n");
}
/** Renders one section template. A line whose placeholder resolves to nothing is dropped. */
export function renderTemplate(template, data = {}, schema = {}) {
    const lines = [];
    for (const line of template.replace(/\r\n?/g, "\n").split("\n")) {
        const keys = [...line.matchAll(PLACEHOLDER_PATTERN)].map((match) => match[1]);
        if (keys.length === 0) {
            lines.push(line);
            continue;
        }
        const values = new Map(keys.map((key) => [key, renderFieldValue(getValue(data, key), schema[key]?.type)]));
        if ([...values.values()].some((value) => !value))
            continue;
        const prefix = line.slice(0, line.search(PLACEHOLDER_PATTERN));
        const isQuotePrefix = /^\s*(?:>\s?)+$/.test(prefix);
        const isHeadingPrefix = /^#{1,6}\s+$/.test(prefix);
        lines.push(line.replace(PLACEHOLDER_PATTERN, (_, key) => {
            let value = values.get(key);
            // "## {{richText}}" must not turn into "## ## Heading"
            if (isHeadingPrefix)
                value = value.replace(/^#{1,6}\s+/, "");
            // Keeps every line of a multi-line value inside the quote
            if (isQuotePrefix) {
                value = value
                    .split("\n")
                    .map((valueLine, index) => (index === 0 ? valueLine : (prefix.trimEnd() + " " + valueLine).trimEnd()))
                    .join("\n");
            }
            return value;
        }));
    }
    return normalizeMarkdown(lines.join("\n"));
}
function yamlString(value) {
    return `"${oneLine(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
// Keeps the first "# " heading, demotes any later one and adds the fallback when there is none
function ensureSingleTitle(body, fallbackTitle) {
    let openFence = null;
    let hasTitle = false;
    const lines = body.split("\n").map((line) => {
        const fence = line.match(FENCE_PATTERN)?.[1];
        if (openFence) {
            if (fence && fence[0] === openFence[0] && fence.length >= openFence.length)
                openFence = null;
            return line;
        }
        if (fence) {
            openFence = fence;
            return line;
        }
        if (!/^#\s/.test(line))
            return line;
        if (hasTitle)
            return `#${line}`;
        hasTitle = true;
        return line;
    });
    if (hasTitle || !fallbackTitle)
        return lines.join("\n");
    return `# ${fallbackTitle}\n\n${lines.join("\n")}`;
}
export function renderPostMarkdown(content, sections, slug = "") {
    const renderedSections = (content.sections || [])
        .map((section) => {
        const sectionConfig = sections.find((item) => item.name === section.type);
        if (!sectionConfig || typeof sectionConfig.markdown !== "string")
            return "";
        return renderTemplate(sectionConfig.markdown, section.data || {}, sectionConfig.schema || {});
    })
        .filter(Boolean);
    const fallbackTitle = oneLine(content.listing?.title) || oneLine(content.seo?.title) || slug;
    const body = normalizeMarkdown(ensureSingleTitle(renderedSections.join("\n\n"), fallbackTitle));
    const frontMatter = [
        "---",
        `title: ${yamlString(content.seo?.title)}`,
        `description: ${yamlString(content.seo?.description)}`,
        "---",
    ].join("\n");
    return `${frontMatter}\n\n${body}\n`;
}
// Accepts DD-MM-YYYY (the format the blog uses) and anything Date can parse
function dateToTimestamp(date) {
    if (typeof date !== "string" || !date.trim())
        return null;
    const dayFirst = date.trim().match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
    const timestamp = dayFirst ? Date.UTC(Number(dayFirst[3]), Number(dayFirst[2]) - 1, Number(dayFirst[1])) : Date.parse(date);
    return Number.isNaN(timestamp) ? null : timestamp;
}
/** Newest first. Posts without a date come last, and ties are ordered by slug. */
export function sortPosts(posts) {
    return [...posts].sort((a, b) => {
        const aTime = dateToTimestamp(a.content.listing?.date);
        const bTime = dateToTimestamp(b.content.listing?.date);
        if (aTime !== bTime) {
            if (aTime === null)
                return 1;
            if (bTime === null)
                return -1;
            return bTime - aTime;
        }
        return a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0;
    });
}
export function renderIndexLine(post, urlBase) {
    const listing = post.content.listing || {};
    const title = oneLine(listing.title).replace(/[\\[\]]/g, "\\$&") || post.slug;
    const description = oneLine(listing.description);
    const meta = [oneLine(listing.authorName), oneLine(listing.date)].filter(Boolean).join(", ");
    let line = `- [${title}](${urlBase.replace(/\/+$/, "")}/${post.slug})`;
    if (description)
        line += `: ${description}`;
    if (meta)
        line += ` (${meta})`;
    return line;
}
/** Replaces the text between the two markers. Everything outside them is kept as is. */
export function replaceIndexBlock(existing, lines) {
    const block = [INDEX_START_MARKER, ...lines, INDEX_END_MARKER].join("\n");
    const start = existing.indexOf(INDEX_START_MARKER);
    const end = existing.indexOf(INDEX_END_MARKER, start + INDEX_START_MARKER.length);
    if (start !== -1 && end !== -1) {
        return existing.slice(0, start) + block + existing.slice(end + INDEX_END_MARKER.length);
    }
    const head = existing.replace(/\r\n?/g, "\n").trimEnd();
    return `${head ? `${head}\n\n` : ""}${block}\n`;
}
