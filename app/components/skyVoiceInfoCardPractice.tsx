import { SkyVoiceInfoCardPracticeInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

// Fills the card's last subgrid row: labels line up across the row and every box ends at the card bottom
function SkyVoiceInfoCardPractice({ label, text, className }: SkyVoiceInfoCardPracticeInterface) {
  return (
    <div className={twMerge("mt-6 flex flex-col", className)}>
      <span className="block text-[12.5px] font-medium text-(--skyai-voice-subtle)">{label}</span>
      <p className="mt-2 flex-1 rounded-xl border-l-2 border-(--cta-button-background) bg-(--skyai-voice-bg-mid) px-3.5 py-3 text-sm leading-normal text-(--skyai-voice-body)">
        {text}
      </p>
    </div>
  );
}

export default SkyVoiceInfoCardPractice;
