import SparkleIcon from "@/app/components/common/sparkleIcon";
import { SkyAiSectionBadgeInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyAiSectionBadge({ label, icon, className }: SkyAiSectionBadgeInterface) {
  return (
    <span
      className={twMerge(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 bg-(--skyai-lavender-soft) font-instrument-sans text-sm md:text-[15px] font-semibold text-(--cta-button-background)",
        className,
      )}>
      {icon ? (
        <span aria-hidden="true" className="flex shrink-0 [&>svg]:size-3.5 md:[&>svg]:size-4">
          {icon}
        </span>
      ) : (
        <SparkleIcon className="size-3.5 md:size-4 shrink-0" />
      )}
      {label}
    </span>
  );
}

export default SkyAiSectionBadge;
