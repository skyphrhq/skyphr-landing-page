import Button from "@/app/components/common/button";
import { SectionSchema } from "@/types/type";

type BlogsSideBarProps = {
  tags: string;
  newsletterTitle: string;
  newsletterDescription: string;
};
export const UIComponent = ({ tags, newsletterTitle, newsletterDescription }: BlogsSideBarProps) => {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
      <div>
        <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-(--text-secondary-color)">
          Tags
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.split(",").map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-(--border-color) px-3 py-1 text-xs font-medium text-(--text-secondary-color)">
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-lg bg-(--text-main-color) p-5 text-white">
        <p className="font-instrument-sans text-xl font-bold">{newsletterTitle}</p>
        <p className="mt-2 font-inter text-sm leading-5 text-white/70">{newsletterDescription}</p>
        <Button className="mt-4 w-full rounded-md bg-[#5b45f4] px-4 py-2.5 text-base font-bold text-white">
          Subscribe
        </Button>
      </div>
    </aside>
  );
};

export const Schema: SectionSchema = {
  tags: { type: "STRING", required: true },
  newsletterTitle: { type: "STRING", required: true },
  newsletterDescription: { type: "TEXTAREA", required: true },
};
