import { SkyVoiceInfoCardInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

// Four subgrid rows (icon, title, paragraph, bottom block), so every row of cards lines up its titles, paragraphs and
// bottom blocks even when the copy lengths differ. The parent grid must leave rows to auto (no fixed grid-rows).
function SkyVoiceInfoCard({ data, children, className }: SkyVoiceInfoCardInterface) {
  return (
    <article
      className={twMerge(
        // Same flat look and hover as the SkyAI service cards: plain border, no shadow, lavender + dark border on hover
        "row-span-4 grid grid-rows-subgrid gap-0 rounded-[20px] border border-(--border-color) bg-(--root-white-color) p-6.5 font-instrument-sans transition-[translate,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-(--root-black-color) hover:bg-(--skyai-lavender-bg) motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8",
        className,
      )}>
      <span
        aria-hidden="true"
        className="grid size-11 place-items-center rounded-[13px] bg-(--skyai-lavender-soft) text-xl text-(--cta-button-background)">
        {data.icon}
      </span>
      <h3 className="mt-6 text-[19px] leading-snug font-semibold tracking-[-0.02em] text-(--text-main-color) sm:text-xl">
        {data.title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-[1.6] text-(--skyai-voice-muted)">{data.description}</p>
      {children}
    </article>
  );
}

export default SkyVoiceInfoCard;
