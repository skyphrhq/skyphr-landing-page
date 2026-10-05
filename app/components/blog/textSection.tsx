import type { SectionSchema } from "@/types/type";

type TextSectionProps = {
  heading: string;
  content: string;
};

export const UIComponent = ({ heading, content }: TextSectionProps) => {
  return (
    <section className="mx-auto w-full">
      {heading && (
        <h2 className="font-instrument-sans text-2xl font-bold tracking-tight text-(--text-main-color) md:text-3xl pb-4">
          {heading}
        </h2>
      )}

      {/* skyphr-blog-rich-text (app/styles/blogRichText.css) restores paragraph spacing, empty lines, lists etc. */}
      <div
        className="skyphr-blog-rich-text font-inter text-base text-(--text-secondary-color) lg:text-lg xl:text-xl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
};

export const Schema: SectionSchema = {
  heading: { type: "STRING", required: false },
  content: { type: "RICH_TEXT", required: true },
};
