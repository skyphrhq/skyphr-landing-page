import type { SectionSchema } from "@/types/type";

type BlogHeroProps = {
  title: string;
  excerpt: string;
  authorName: string;
  authorRole: string;
  publishedAt: string;
};

export const UIComponent = ({ title, excerpt, authorName, authorRole, publishedAt }: BlogHeroProps) => {
  return (
    <header className="w-full pt-30 pb-8 md:pt-36 md:pb-12">
      <div className="mx-auto w-full">
        <h1 className="mt-5 max-w-4xl font-instrument-sans text-3xl lg:text-5xl xl:text-7xl font-bold leading-10 lg:leading-15 xl:leading-20 tracking-tight text-(--text-main-color) ">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl font-inter text-sm leading-7 text-(--text-secondary-color) md:text-base">
          {excerpt}
        </p>
        <div className="mt-8 flex items-center gap-4 border-t border-(--border-color) pt-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5b45f4] text-sm font-bold text-white">
            {authorName
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </div>
          <div>
            <p className="font-instrument-sans text-sm font-bold text-(--text-main-color)">{authorName}</p>
            <p className="font-inter text-xs text-(--text-secondary-color)">
              {authorRole} · {publishedAt}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Schema: SectionSchema = {
  eyebrow: { type: "STRING", required: true },
  title: { type: "TEXTAREA", required: true },
  excerpt: { type: "TEXTAREA", required: true },
  authorName: { type: "STRING", required: true },
  authorRole: { type: "STRING", required: true },
  publishedAt: { type: "STRING", required: true },
};
