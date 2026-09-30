import SkyVoiceLanguageChip from "@/app/components/skyVoiceLanguageChip";
import { SkyVoiceLanguageSelectorInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyVoiceLanguageSelector({ data, activeCode, onChange, className }: SkyVoiceLanguageSelectorInterface) {
  return (
    // Chips and link share one wrapping row, so on narrow cards they drop to new lines instead of overflowing
    <div className={twMerge("flex flex-wrap items-center gap-x-3 gap-y-2", className)}>
      <div role="group" aria-label={data.label} className="flex flex-wrap gap-1.5">
        {data.options.map((language) => (
          <SkyVoiceLanguageChip
            key={language.code}
            language={language}
            isSelected={language.code === activeCode}
            onSelect={onChange}
          />
        ))}
      </div>
      <a
        href={data.demoLink.href}
        target={data.demoLink.target}
        rel={data.demoLink.rel}
        className="font-instrument-sans text-xs text-(--skyai-voice-muted) underline-offset-2 transition-colors duration-200 hover:text-(--cta-button-background) hover:underline focus-visible:text-(--cta-button-background) focus-visible:underline focus-visible:outline-none motion-reduce:transition-none">
        {data.demoLink.label}
      </a>
    </div>
  );
}

export default SkyVoiceLanguageSelector;
