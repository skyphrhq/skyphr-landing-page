import { SkyVoiceCallFlowBubbleInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyVoiceCallFlowBubble({ message, delay, className }: SkyVoiceCallFlowBubbleInterface) {
  const isSky = message.speaker === "sky";

  return (
    <div
      data-flow-delay={delay}
      className={twMerge(
        "relative max-w-[92%] rounded-[20px] px-4.5 py-3.5 font-instrument-sans text-[15px] leading-[1.55]",
        isSky
          ? "skyai-voice-bubble-sky self-end rounded-br-md text-(--root-white-color)"
          : "self-start rounded-bl-md bg-(--skyai-navy)/5 text-(--text-main-color)",
        className,
      )}>
      <span className="mb-1 block text-xs font-semibold opacity-70">{message.name}</span>
      {message.text}
    </div>
  );
}

export default SkyVoiceCallFlowBubble;
