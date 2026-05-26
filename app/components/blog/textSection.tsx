import type { SectionSchema } from "@/types/type";

type TextSectionProps = {
  heading: string;
  content: string;
};

export const UIComponent = ({ heading, content }: TextSectionProps) => {
  return (
    <section className="mx-auto w-full">
      <h2 className="font-instrument-sans text-2xl font-bold tracking-tight text-(--text-main-color) md:text-3xl">
        {heading}
      </h2>
      <p className="mt-4 font-inter text-sm leading-7 text-(--text-secondary-color) md:text-base">{content}</p>
    </section>
  );
};

export const Schema: SectionSchema = {
  heading: { type: "STRING", required: true },
  content: { type: "TEXTAREA", required: true },
};
