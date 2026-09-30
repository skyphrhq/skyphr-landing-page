import { SkyVoiceWaveBarsInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

const BAR_COUNT = 13;

// Negative delays start every bar mid-cycle, so the equaliser looks random instead of pulsing in sync
const BAR_DELAYS = Array.from({ length: BAR_COUNT }, (_, index) => `${((index * 37) % 11) * -0.09}s`);

function SkyVoiceWaveBars({ tone, isActive, className }: SkyVoiceWaveBarsInterface) {
  return (
    <div
      aria-hidden="true"
      className={twMerge(
        "skyai-voice-bars mt-2.5 flex h-6.5 items-center gap-0.75",
        tone === "sky" ? "skyai-voice-bars-sky" : "skyai-voice-bars-caller",
        isActive && "is-active",
        className,
      )}>
      {BAR_DELAYS.map((delay, index) => (
        <span key={index} style={{ animationDelay: delay }} />
      ))}
    </div>
  );
}

export default SkyVoiceWaveBars;
