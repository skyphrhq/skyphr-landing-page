import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { ParseBlogTable } from "@/app/utils/helpers/blogContent";
import type { SectionSchema } from "@/types/type";
import { twMerge } from "tailwind-merge";

type ComparisonTableProps = {
  heading: string;
  table: string;
};

export const UIComponent = ({ heading, table }: ComparisonTableProps) => {
  const [headerRow, ...bodyRows] = ParseBlogTable(table ?? "");

  if (!headerRow) return null;

  return (
    <section className="mx-auto w-full">
      {heading && (
        <h2 className="font-instrument-sans text-2xl font-bold tracking-tight text-(--text-main-color) md:text-3xl pb-4">
          {heading}
        </h2>
      )}

      {/* Scrolls sideways on small screens instead of squashing the columns */}
      <div className={twMerge("w-full overflow-x-auto border border-(--border-color)", COMMON_BORDER_RADIUS)}>
        <table className="w-full min-w-xl border-collapse text-left font-inter text-sm md:text-base">
          <thead className="bg-(--about-us-card-bg)">
            <tr>
              {headerRow.map((cell, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-4 py-3 md:px-5 md:py-4 font-instrument-sans font-bold text-(--text-main-color)">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-(--border-color)">
                {/* The first column names what each row compares, so it's the row's header */}
                {row.map((cell, cellIndex) =>
                  cellIndex === 0 ? (
                    <th
                      key={cellIndex}
                      scope="row"
                      className="px-4 py-3 md:px-5 md:py-4 font-semibold text-(--text-main-color) align-top">
                      {cell}
                    </th>
                  ) : (
                    <td key={cellIndex} className="px-4 py-3 md:px-5 md:py-4 text-(--text-secondary-color) align-top">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export const Schema: SectionSchema = {
  heading: { type: "STRING", required: false },
  // One row per line, first row = column headings; separate cells with tabs (paste from Docs / Word) or "|"
  table: { type: "TEXTAREA", required: true },
};
