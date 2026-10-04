import { SkyVoiceCallFlowScrubberMarkInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyVoiceCallFlowScrubberMark({ time, isDone, isFirst, isLast }: SkyVoiceCallFlowScrubberMarkInterface) {
  return (
    <span className="relative size-5">
      {/* The first mark is always passed or active, so its "done" layer is shown statically; GSAP drives the rest */}
      <span className="skyai-voice-flow-dot relative block size-5 rounded-full">
        <span
          className={twMerge(
            "skyai-voice-flow-dot-done absolute -inset-0.5 rounded-full",
            isFirst ? "opacity-100" : "opacity-0",
          )}
        />
        {isLast && <span className="skyai-voice-flow-dot-complete absolute -inset-0.5 rounded-full opacity-0" />}
      </span>
      {/* The end labels align to the track ends so they never poke out of the panel */}
      <small
        className={twMerge(
          "absolute top-7.5 hidden whitespace-nowrap font-instrument-sans text-xs font-semibold tabular-nums transition-colors duration-300 motion-reduce:transition-none sm:block",
          isFirst ? "left-0" : isLast ? "right-0" : "left-1/2 -translate-x-1/2",
          isDone ? "text-(--cta-button-background)" : "text-(--skyai-voice-subtle)",
        )}>
        {time}
      </small>
    </span>
  );
}

export default SkyVoiceCallFlowScrubberMark;
