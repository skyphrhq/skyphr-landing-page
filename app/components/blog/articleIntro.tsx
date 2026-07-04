import type { SectionSchema } from "@/types/type";

type ArticleIntroProps = {
  tags: string;
  newsletterTitle: string;
  newsletterDescription: string;
  firstParagraph: string;
  secondParagraph: string;
};

export const UIComponent = ({ firstParagraph, secondParagraph }: ArticleIntroProps) => {
  return (
    <section className="mx-auto w-full gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
      <div className="w-full flex space-y-5 font-inter text-sm leading-7 text-(--text-secondary-color) md:text-base">
        <p>{firstParagraph}</p>
      </div>
    </section>
  );
};

export const Schema: SectionSchema = {
  tags: { type: "STRING", required: true },
  newsletterTitle: { type: "STRING", required: true },
  newsletterDescription: { type: "TEXTAREA", required: true },
  firstParagraph: { type: "TEXTAREA", required: true },
  secondParagraph: { type: "TEXTAREA", required: true },
};
