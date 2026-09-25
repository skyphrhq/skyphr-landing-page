import { SkyAiStatusPillInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyAiStatusPill({ label, tone, pulse }: SkyAiStatusPillInterface) {
  const dotColor = tone === "green" ? "bg-emerald-500" : "bg-(--cta-button-background)";

  return (
    <span
      className={twMerge(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-instrument-sans text-sm font-semibold",
        tone === "green" ? "bg-emerald-50 text-emerald-700" : "bg-(--skyai-lavender-soft) text-(--cta-button-background)",
      )}>
      <span className="relative flex size-2">
        {pulse && <span aria-hidden="true" className={twMerge("skyai-live-pulse absolute inset-0 rounded-full", dotColor)} />}
        <span className={twMerge("relative size-2 rounded-full", dotColor)} />
      </span>
      {label}
    </span>
  );
}

export default SkyAiStatusPill;
