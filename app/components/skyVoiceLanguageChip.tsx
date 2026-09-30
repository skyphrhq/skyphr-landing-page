import { SkyVoiceLanguageChipInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyVoiceLanguageChip({ language, isSelected, onSelect, className }: SkyVoiceLanguageChipInterface) {
  return (
    <button
      type="button"
      lang={language.code}
      aria-pressed={isSelected}
      onClick={() => onSelect(language.code)}
      className={twMerge(
        "cursor-pointer rounded-full border px-3 py-1 font-instrument-sans text-xs leading-normal font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--cta-button-background) motion-reduce:transition-none",
        isSelected
          ? "border-(--cta-button-background) bg-(--cta-button-background) text-(--root-white-color)"
          : "border-(--skyai-lavender-border) bg-(--root-white-color) text-(--skyai-voice-muted) hover:border-(--cta-button-background) hover:text-(--cta-button-background)",
        className,
      )}>
      {language.label}
    </button>
  );
}

export default SkyVoiceLanguageChip;
