import { SkyVoiceCallFlowPillInterface } from "@/app/utils/interface/common.interface";
import { LuCheck } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

function SkyVoiceCallFlowPill({ label, delay, className }: SkyVoiceCallFlowPillInterface) {
  return (
    <div
      data-flow-delay={delay}
      className={twMerge(
        "inline-flex h-8.5 items-center gap-1.75 self-center rounded-full border border-(--skyai-voice-success-border) bg-(--skyai-voice-success-bg) px-3.5 font-instrument-sans text-[13px] font-semibold text-(--skyai-voice-green)",
        className,
      )}>
      <LuCheck aria-hidden="true" className="size-3.5" />
      {label}
    </div>
  );
}

export default SkyVoiceCallFlowPill;
