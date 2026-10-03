import SkyphrIconWhiteLogo from "@/app/assets/logo/skyphr-icon-white-logo.webp";
import SkyVoiceWaveBars from "@/app/components/skyVoiceWaveBars";
import { SkyVoiceCallPartyInterface } from "@/app/utils/interface/common.interface";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function SkyVoiceCallParty({ participant, tone, avatar, isSpeaking, activityLabels }: SkyVoiceCallPartyInterface) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span
        aria-hidden="true"
        className={twMerge(
          "grid size-13 place-items-center rounded-full sm:size-16",
          tone === "sky"
            ? "skyai-voice-avatar-sky font-playfair-display text-[28px] italic sm:text-[32px]"
            : "skyai-voice-avatar-caller",
        )}>
        {tone === "sky" ? (
          <Image src={SkyphrIconWhiteLogo} width={30} height={30} alt="Sky, Skyphr's AI voice agent"
            title="Sky, Skyphr's AI voice agent"
          />
        ) : (
          <> {avatar}</>
        )}
      </span>
      <strong className="mt-2.5 font-instrument-sans text-base font-semibold text-(--text-main-color)">
        {participant.name}
      </strong>
      <small className="font-instrument-sans text-[12.5px] text-(--skyai-voice-muted)">{participant.role}</small>
      <SkyVoiceWaveBars tone={tone} isActive={isSpeaking} />
      <span className="mt-1 font-instrument-sans text-xs text-(--skyai-voice-muted)">
        {isSpeaking ? activityLabels.speaking : activityLabels.listening}
      </span>
    </div>
  );
}

export default SkyVoiceCallParty;
