import { SkyVoiceOrbSkeletonInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

// Loading state for the Spline orb: a shimmering grey circle in the same spot and size as the sphere
// (inset 16.5% of the square canvas), so nothing shifts when the scene fades in
function SkyVoiceOrbSkeleton({ className }: SkyVoiceOrbSkeletonInterface) {
  return (
    <span
      aria-hidden="true"
      className={twMerge("skyai-voice-orb-skeleton absolute inset-[16.5%] overflow-hidden rounded-full", className)}
    />
  );
}

export default SkyVoiceOrbSkeleton;
