import SkyVoiceCallFlowScrubberMark from "@/app/components/skyVoiceCallFlowScrubberMark";
import { SkyVoiceCallFlowScrubberInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

// Marks are spaced evenly (not by real seconds, or 0:00 and 0:03 would overlap); the times are labels only.
// The fill is moved by the section's GSAP timeline (xPercent), which keeps its rounded end and never overflows the track.
function SkyVoiceCallFlowScrubber({ steps, activeIndex, className }: SkyVoiceCallFlowScrubberInterface) {
  return (
    <div aria-hidden="true" className={twMerge("relative h-5 sm:h-12", className)}>
      {/* Inset by half a dot (10px) so the first and last dot centres sit exactly on the track ends */}
      <div className="skyai-voice-flow-track absolute inset-x-2.5 top-2 h-1 overflow-hidden rounded-full">
        <span
          className="skyai-voice-flow-fill block size-full rounded-full"
          style={{ transform: "translateX(-100%)" }}
        />
      </div>
      <div className="absolute inset-x-0 top-0 flex justify-between">
        {steps.map((step, index) => (
          <SkyVoiceCallFlowScrubberMark
            key={step.time}
            time={step.time}
            isDone={index <= activeIndex}
            isFirst={index === 0}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default SkyVoiceCallFlowScrubber;
