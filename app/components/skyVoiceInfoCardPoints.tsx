import { SkyVoiceInfoCardPointsInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyVoiceInfoCardPoints({ points, className }: SkyVoiceInfoCardPointsInterface) {
  return (
    <ul className={twMerge("skyai-voice-line-border mt-6 self-start border-t", className)}>
      {points.map((point) => (
        <li
          key={point}
          className="skyai-voice-line-border flex items-center gap-3 border-t py-3 text-[14.5px] leading-normal text-(--skyai-voice-body) first:border-t-0 last:pb-0">
          <span aria-hidden="true" className="size-1.5 flex-none rounded-full bg-(--cta-button-background)" />
          {point}
        </li>
      ))}
    </ul>
  );
}

export default SkyVoiceInfoCardPoints;
