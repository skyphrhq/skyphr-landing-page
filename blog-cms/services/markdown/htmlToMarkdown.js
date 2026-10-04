// Converts the HTML produced by the rich text editor into markdown.
// Dependency free on purpose: the input is editor output, not arbitrary web pages.
const VOID_TAGS = new Set(["br", "hr", "img", "input", "col", "meta", "link", "wbr"]);
const RAW_TEXT_TAGS = new Set(["script", "style"]);
const SKIPPED_TAGS = new Set(["script", "style", "head", "title", "colgroup", "iframe", "svg", "button", "input"]);
const BLOCK_TAGS = new Set([
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ul",
    "ol",
    "li",
    "blockquote",
    "pre",
    "hr",
    "table",
    "div",
    "section",
    "article",
    "figure",
    "figcaption",
    "header",
    "footer",
    "main",
]);
const NAMED_ENTITIES = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
    ndash: "–",
    mdash: "—",
    hellip: "…",
    lsquo: "‘",
    rsquo: "’",
    ldquo: "“",
    rdquo: "”",
    copy: "©",
    reg: "®",
    trade: "™",
    middot: "·",
    bull: "•",
};
export function decodeEntities(text) {
    return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z][a-z0-9]*);/gi, (match, entity) => {
        if (entity[0] === "#") {
            const code = entity[1].toLowerCase() === "x" ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
            return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : match;
        }
        return NAMED_ENTITIES[entity.toLowerCase()] ?? match;
    });
}
function parseAttributes(source) {
    const attrs = {};
    const pattern = /([^\s=/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
    let match;
    while ((match = pattern.exec(source))) {
        attrs[match[1].toLowerCase()] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? "");
    }
    return attrs;
}
export function parseHtml(html) {
    const root = { kind: "element", tag: "#root", attrs: {}, children: [] };
    const stack = [root];
    const tagPattern = /<!--[\s\S]*?-->|<!doctype[^>]*>|<\/([a-z][a-z0-9]*)\s*>|<([a-z][a-z0-9]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>/gi;
    let cursor = 0;
    let match;
    const pushText = (raw) => {
        if (raw)
            stack[stack.length - 1].children.push({ kind: "text", text: decodeEntities(raw) });
    };
    while ((match = tagPattern.exec(html))) {
        pushText(html.slice(cursor, match.index));
        cursor = tagPattern.lastIndex;
        const [, closingTag, openingTag, rawAttrs] = match;
        if (closingTag) {
            const tag = closingTag.toLowerCase();
            const openIndex = stack.map((node) => node.tag).lastIndexOf(tag);
            // A closing tag with no matching opener is ignored
            if (openIndex > 0)
                stack.length = openIndex;
            continue;
        }
        if (!openingTag)
            continue;
        const tag = openingTag.toLowerCase();
        const element = { kind: "element", tag, attrs: parseAttributes(rawAttrs || ""), children: [] };
        stack[stack.length - 1].children.push(element);
        if (VOID_TAGS.has(tag) || /\/\s*$/.test(rawAttrs || ""))
            continue;
        if (RAW_TEXT_TAGS.has(tag)) {
            const closeIndex = html.toLowerCase().indexOf(`</${tag}`, cursor);
            cursor = closeIndex === -1 ? html.length : closeIndex;
            tagPattern.lastIndex = cursor;
        }
        stack.push(element);
    }
    pushText(html.slice(cursor));
    return root.children;
}
function textContent(node) {
    if (node.kind === "text")
        return node.text;
    if (node.tag === "br")
        return "\n";
    return node.children.map(textContent).join("");
}
function isBlock(node) {
    return node.kind === "element" && BLOCK_TAGS.has(node.tag);
}
function containsBlock(node) {
    return node.kind === "element" && node.children.some((child) => isBlock(child) || containsBlock(child));
}
function escapeText(text) {
    return text.replace(/[\\*`[\]<]/g, "\\$&").replace(/_/g, (underscore, index, escaped) => {
        const isIntraword = /[\p{L}\p{N}]/u.test(escaped[index - 1] || "") && /[\p{L}\p{N}]/u.test(escaped[index + 1] || "");
        return isIntraword ? underscore : "\\_";
    });
}
// Stops a paragraph line from being read as a heading, quote, list item or rule
function escapeLineStart(line) {
    return line.replace(/^(#{1,6}(?:\s|$)|>|[-+](?:\s|$)|-{3,}\s*$|={3,}\s*$)/, "\\$1").replace(/^(\d+)([.)]\s)/, "$1\\$2");
}
export function toSitePath(url) {
    return url.trim().replace(/^(?:\.\/)?public(?=\/)/, "");
}
function formatUrl(url) {
    return url.trim().replace(/\s/g, "%20").replace(/\(/g, "%28").replace(/\)/g, "%29");
}
export function renderImage(url, alt = "") {
    const sitePath = toSitePath(url || "");
    if (!sitePath)
        return "";
    const safeAlt = alt.replace(/\s+/g, " ").trim().replace(/[\\[\]]/g, "\\$&");
    return `![${safeAlt}](${formatUrl(sitePath)})`;
}
function wrapInline(content, marker) {
    const match = content.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!match || !match[2])
        return content;
    // Whitespace goes outside the markers, otherwise the emphasis does not parse
    return `${match[1]}${marker}${match[2]}${marker}${match[3]}`;
}
function renderInlineCode(node) {
    const code = textContent(node).replace(/\s+/g, " ");
    if (!code.trim())
        return "";
    const longestRun = Math.max(0, ...(code.match(/`+/g) || []).map((run) => run.length));
    const fence = "`".repeat(longestRun + 1);
    const padding = code.startsWith("`") || code.endsWith("`") ? " " : "";
    return `${fence}${padding}${code}${padding}${fence}`;
}
function renderInline(nodes, insideTable = false) {
    return nodes
        .map((node) => {
        if (node.kind === "text")
            return escapeText(node.text.replace(/\s+/g, " "));
        if (SKIPPED_TAGS.has(node.tag))
            return "";
        switch (node.tag) {
            case "br":
                return insideTable ? " " : "\\\n";
            case "strong":
            case "b":
                return wrapInline(renderInline(node.children, insideTable), "**");
            case "em":
            case "i":
                return wrapInline(renderInline(node.children, insideTable), "*");
            case "s":
            case "del":
            case "strike":
                return wrapInline(renderInline(node.children, insideTable), "~~");
            case "code":
                return renderInlineCode(node);
            case "img":
                return renderImage(node.attrs.src || "", node.attrs.alt || "");
            case "a": {
                const label = renderInline(node.children, insideTable);
                const href = (node.attrs.href || "").trim();
                if (!href || !label.trim())
                    return label;
                return wrapInline(label, "\u0000").replace("\u0000", "[").replace("\u0000", `](${formatUrl(href)})`);
            }
            default:
                return renderInline(node.children, insideTable);
        }
    })
        .join("");
}
function tidyInline(content) {
    return content
        .split("\n")
        .map((line) => line.trim().replace(/ {2,}/g, " "))
        .join("\n")
        .replace(/^(?:\\?\n)+/, "")
        .replace(/(?:\\?\n)+$/, "")
        .trim();
}
function renderParagraph(nodes) {
    return tidyInline(renderInline(nodes)).split("\n").map(escapeLineStart).join("\n");
}
function indent(text, width) {
    const padding = " ".repeat(width);
    return text
        .split("\n")
        .map((line, index) => (index === 0 || !line ? line : padding + line))
        .join("\n");
}
function renderList(list) {
    const ordered = list.tag === "ol";
    const start = Number.parseInt(list.attrs.start || "1", 10);
    let counter = Number.isFinite(start) ? start : 1;
    const items = list.children
        .filter((child) => child.kind === "element" && child.tag === "li")
        .map((item) => {
        const marker = ordered ? `${counter++}. ` : "- ";
        const blocks = renderBlockList(item.children);
        // A nested list sits directly under its parent text; other blocks get a blank line
        let body = "";
        blocks.forEach((block, index) => {
            if (index > 0)
                body += block.isList ? "\n" : "\n\n";
            body += block.markdown;
        });
        return marker + indent(body, marker.length);
    });
    return items.join("\n");
}
function renderCodeBlock(pre) {
    const codeElement = pre.children.find((child) => child.kind === "element" && child.tag === "code");
    const language = (codeElement?.attrs.class || pre.attrs.class || "").match(/(?:language|lang)-([\w+#.-]+)/)?.[1] || "";
    const code = textContent(pre).replace(/\r\n?/g, "\n").replace(/^\n+|\n+$/g, "");
    const longestRun = Math.max(2, ...(code.match(/^\s*`{3,}/gm) || []).map((run) => run.trim().length));
    const fence = "`".repeat(longestRun + 1);
    return `${fence}${language}\n${code}\n${fence}`;
}
function renderTable(table) {
    const rows = [];
    const collectRows = (node) => {
        node.children.forEach((child) => {
            if (child.kind !== "element")
                return;
            if (child.tag === "tr")
                rows.push(child);
            else if (child.tag !== "table")
                collectRows(child);
        });
    };
    collectRows(table);
    const cells = rows
        .map((row) => row.children
        .filter((child) => child.kind === "element" && (child.tag === "th" || child.tag === "td"))
        .map((cell) => renderInline(flattenToInline(cell.children), true)
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\|/g, "\\|")))
        .filter((row) => row.length > 0);
    if (cells.length === 0)
        return "";
    const columnCount = Math.max(...cells.map((row) => row.length));
    const toLine = (row) => `| ${Array.from({ length: columnCount }, (_, index) => row[index] || "").join(" | ")} |`;
    return [toLine(cells[0]), toLine(Array(columnCount).fill("---")), ...cells.slice(1).map(toLine)].join("\n");
}
// Table cells cannot hold blocks, so block children are joined with a space
function flattenToInline(nodes) {
    return nodes.flatMap((node, index) => {
        if (node.kind === "element" && (isBlock(node) || containsBlock(node))) {
            const separator = index > 0 ? [{ kind: "text", text: " " }] : [];
            return [...separator, ...flattenToInline(node.children)];
        }
        return [node];
    });
}
function renderBlockList(nodes) {
    const blocks = [];
    let inlineRun = [];
    const push = (markdown, isList = false) => {
        if (markdown.trim())
            blocks.push({ markdown, isList });
    };
    const flushInlineRun = () => {
        push(renderParagraph(inlineRun));
        inlineRun = [];
    };
    nodes.forEach((node) => {
        if (node.kind === "text" || (!isBlock(node) && !containsBlock(node))) {
            inlineRun.push(node);
            return;
        }
        flushInlineRun();
        if (SKIPPED_TAGS.has(node.tag))
            return;
        const heading = node.tag.match(/^h([1-6])$/);
        if (heading) {
            // "#" is reserved for the post title, so rich text headings start at "##"
            const level = Math.max(2, Number(heading[1]));
            const text = tidyInline(renderInline(flattenToInline(node.children))).replace(/\\?\n/g, " ");
            if (text)
                push(`${"#".repeat(level)} ${text}`);
            return;
        }
        switch (node.tag) {
            case "p":
                push(renderParagraph(node.children));
                return;
            case "ul":
            case "ol":
                push(renderList(node), true);
                return;
            case "blockquote": {
                const quote = renderBlockList(node.children)
                    .map((block) => block.markdown)
                    .join("\n\n");
                push(quote
                    .split("\n")
                    .map((line) => (line ? `> ${line}` : ">"))
                    .join("\n"));
                return;
            }
            case "pre":
                push(renderCodeBlock(node));
                return;
            case "hr":
                push("---");
                return;
            case "table":
                push(renderTable(node));
                return;
            default:
                blocks.push(...renderBlockList(node.children));
        }
    });
    flushInlineRun();
    return blocks;
}
export function htmlToMarkdown(html) {
    if (typeof html !== "string" || !html.trim())
        return "";
    return renderBlockList(parseHtml(html))
        .map((block) => block.markdown)
        .join("\n\n")
        .trim();
}
