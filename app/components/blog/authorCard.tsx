import type { SectionSchema } from "@/types/type";

type AuthorCardProps = {
  name: string;
  title: string;
  bio: string;
};

export const UIComponent = ({ name, title, bio }: AuthorCardProps) => {
  return (
    <section className="mx-auto w-full">
      <div className="mx-auto rounded-lg border border-(--border-color) bg-white p-6 shadow-[0_20px_60px_rgba(15,15,15,0.08)]">
        <div className="flex items-start gap-4">
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#edeaff] text-sm font-bold text-[#5b45f4]">
            {name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </div>
          <div>
            <h2 className="font-instrument-sans text-lg font-bold text-(--text-main-color)">{name}</h2>
            <p className="font-inter text-xs font-semibold text-(--text-secondary-color)">{title}</p>
            <p className="mt-3 font-inter text-sm leading-6 text-(--text-secondary-color)">{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Schema: SectionSchema = {
  name: { type: "STRING", required: true },
  title: { type: "STRING", required: true },
  bio: { type: "TEXTAREA", required: true },
};
