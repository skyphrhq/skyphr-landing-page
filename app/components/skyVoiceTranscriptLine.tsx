import { FormatCallTime } from "@/app/utils/helpers/helper";
import { SkyVoiceTranscriptLineInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyVoiceTranscriptLine({ line, name, lang, enterDelayMs }: SkyVoiceTranscriptLineInterface) {
  const isSky = line.speaker === "sky";

  return (
    <div
      className="skyai-voice-enter font-instrument-sans"
      style={enterDelayMs ? { animationDelay: `${enterDelayMs}ms` } : undefined}>
      <div className="flex items-center gap-2 text-xs">
        <span
          aria-hidden="true"
          className={twMerge("size-1.5 rounded-full bg-(--skyai-voice-idle)", isSky && "skyai-voice-line-dot-sky")}
        />
        <b className={twMerge("font-semibold text-(--text-main-color)", isSky && "text-(--cta-button-background)")}>
          {name}
        </b>
        <time dateTime={`PT${line.timestamp}S`} className="tabular-nums text-(--skyai-voice-subtle)">
          {FormatCallTime(line.timestamp)}
        </time>
      </div>
      {/* Hidden from screen readers while typing, so the live region announces each line once, when it's complete */}
      <p
        lang={lang}
        aria-hidden={line.isTyping || undefined}
        className="mt-1.5 pl-3.5 text-[14.5px] leading-[1.55] text-(--skyai-voice-body)">
        {line.text}
        {line.isTyping && <span aria-hidden="true" className="skyai-voice-caret" />}
      </p>
    </div>
  );
}

export default SkyVoiceTranscriptLine;
