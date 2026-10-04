import { SkyVoiceOrbPlaceholderInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

// Static fallback for the Spline orb when WebGL isn't available (SkyVoiceOrbSkeleton covers loading).
// The sphere fills ~67% of the square canvas, so the circle is inset 16.5% to line up with it.
function SkyVoiceOrbPlaceholder({ className }: SkyVoiceOrbPlaceholderInterface) {
  return (
    <span
      aria-hidden="true"
      className={twMerge("skyai-voice-orb-placeholder absolute inset-[16.5%] rounded-full", className)}
    />
  );
}

export default SkyVoiceOrbPlaceholder;
