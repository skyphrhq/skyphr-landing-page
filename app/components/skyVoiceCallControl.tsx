import { SkyVoiceCallControlInterface } from "@/app/utils/interface/common.interface";
import { LuPhone, LuPhoneOff, LuRotateCcw } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

// One button that changes role (start / end / replay), so keyboard focus stays on it between phases
function SkyVoiceCallControl({ phase, labels, onStart, onEnd }: SkyVoiceCallControlInterface) {
  const control = {
    idle: {
      label: labels.start,
      ariaLabel: labels.startAria,
      icon: <LuPhone className="size-5.5" />,
      className: "skyai-voice-call-start",
      onClick: onStart,
    },
    live: {
      label: labels.end,
      ariaLabel: labels.endAria,
      icon: <LuPhoneOff className="size-5.5" />,
      className: "skyai-voice-call-end",
      onClick: onEnd,
    },
    ended: {
      label: labels.replay,
      ariaLabel: labels.replayAria,
      icon: <LuRotateCcw className="size-5" />,
      className: "skyai-voice-call-replay",
      onClick: onStart,
    },
  }[phase];

  return (
    <div className="mt-1.5 flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={control.onClick}
        aria-label={control.ariaLabel}
        className={twMerge(
          "grid size-15 cursor-pointer place-items-center rounded-full border-0 text-(--root-white-color) transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--cta-button-background) motion-reduce:transition-none",
          control.className,
        )}>
        <span aria-hidden="true">{control.icon}</span>
      </button>
      <span aria-hidden="true" className="font-instrument-sans text-xs text-(--skyai-voice-muted)">
        {control.label}
      </span>
    </div>
  );
}

export default SkyVoiceCallControl;
