import type { SectionSchema } from "@/types/type";

type FeaturedVisualProps = {
  label: string;
};

export const UIComponent = ({ label }: FeaturedVisualProps) => {
  return (
    <section className="mx-auto w-full">
      <div className="relative flex w-full aspect-16/6 min-h-52 items-center justify-center overflow-hidden rounded-lg bg-[#4f3ff0] md:min-h-72">
        <div className="absolute -left-10 top-8 h-44 w-44 rounded-full border border-white/10 md:h-72 md:w-72" />
        <div className="absolute right-10 top-10 h-36 w-36 rounded-full bg-white/5 blur-2xl md:h-64 md:w-64" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_42%)]" />
        <p className="relative font-instrument-sans text-5xl font-bold tracking-tight text-white/28 md:text-8xl">
          {label}
        </p>
      </div>
    </section>
  );
};

export const Schema: SectionSchema = {
  label: { type: "STRING", required: true },
};
