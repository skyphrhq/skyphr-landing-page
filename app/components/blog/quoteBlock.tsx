import type { SectionSchema } from "@/types/type";

type QuoteBlockProps = {
  quote: string;
  author: string;
};

export const UIComponent = ({ quote, author }: QuoteBlockProps) => {
  return (
    <section className="mx-auto w-full">
      <figure className="rounded-lg border-l-4 border-[#5b45f4] bg-(--about-us-card-bg) p-6 md:p-8">
        <blockquote className="font-playfair-display text-xl italic leading-8 text-(--text-main-color) md:text-2xl">
          “{quote}”
        </blockquote>
        <figcaption className="mt-4 font-inter text-xs font-bold uppercase tracking-[0.16em] text-[#5b45f4]">
          {author}
        </figcaption>
      </figure>
    </section>
  );
};

export const Schema: SectionSchema = {
  quote: { type: "TEXTAREA", required: true },
  author: { type: "STRING", required: true },
};
