// Parsers for the plain-text fields of blog CMS blocks. The CMS has no table or repeatable-list editor, so tables and FAQs
// are pasted into a TEXTAREA. Shared by the blocks in app/components/blog/ and the blog JSON-LD (app/utils/seo/schema.ts).
// Type imports only: the CMS bundles the blocks (and so this file) on its own, outside Next.
import type { FaqCommonCardData } from "@/app/utils/interface/data.interface";

// A markdown table's separator row, e.g. "|---|:---:|"
const TABLE_DIVIDER_ROW_PATTERN = /^[\s|:-]+$/;

// One row per line, the first row is the header. Cells are split by tabs (a table copied from Google Docs / Word) or "|"
export const ParseBlogTable = (value: string): string[][] => {
  const rows = value
    .split(/\r?\n/)
    .filter((line) => line.trim() && !TABLE_DIVIDER_ROW_PATTERN.test(line))
    .map((line) => {
      const cells = line.includes("\t") ? line.split("\t") : line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|");
      return cells.map((cell) => cell.trim());
    });

  const columnCount = Math.max(0, ...rows.map((row) => row.length));
  // Copying a table drops the header's empty corner cell, so a short header row is padded at the start
  return rows.map((row, index) => {
    const padding = Array<string>(columnCount - row.length).fill("");
    return index === 0 ? [...padding, ...row] : [...row, ...padding];
  });
};

// The first line is the question and the lines under it its answer. A new question starts after a blank line,
// or at a line ending in "?" once the current question has an answer (pasted FAQs often lose their blank lines)
export const ParseBlogFaqs = (value: string): FaqCommonCardData[] => {
  const faqs: { question: string; answer: string[] }[] = [];
  let isAfterBlankLine = false;

  for (const rawLine of value.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) {
      isAfterBlankLine = true;
      continue;
    }

    const current = faqs.at(-1);
    if (!current || (current.answer.length && (isAfterBlankLine || line.endsWith("?")))) {
      faqs.push({ question: line, answer: [] });
    } else {
      current.answer.push(line);
    }
    isAfterBlankLine = false;
  }

  return faqs
    .filter((faq) => faq.answer.length)
    .map((faq) => ({ question: faq.question, answer: faq.answer.join("\n") }));
};
