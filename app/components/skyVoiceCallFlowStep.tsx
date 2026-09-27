import { SkyVoiceCallFlowStepInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyVoiceCallFlowStep({ step, isActive, isPast, onSelect }: SkyVoiceCallFlowStepInterface) {
  const isReached = isActive || isPast;

  return (
    <li className={twMerge("skyai-voice-flow-step relative rounded-[20px]", isActive && "skyai-voice-raised")}>
      <button
        type="button"
        onClick={onSelect}
        aria-current={isActive ? "step" : undefined}
        className="flex w-full cursor-pointer gap-3 rounded-[20px] px-3.5 pt-4 pb-5 text-left focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--cta-button-background) sm:gap-4 sm:px-5 sm:pt-4.5 sm:pb-5.5">
        <span
          className={twMerge(
            "inline-grid h-6.5 min-w-12 flex-none place-items-center rounded-full px-2.5 font-instrument-sans text-[12.5px] font-semibold tabular-nums transition-colors duration-300 motion-reduce:transition-none",
            isReached
              ? "bg-(--skyai-lavender-soft) text-(--cta-button-background)"
              : "bg-(--skyai-navy)/4 text-(--skyai-voice-subtle)",
          )}>
          {step.time}
        </span>
        <span className="flex flex-col pt-0.5 font-instrument-sans">
          <strong
            className={twMerge(
              "text-[17px] font-semibold tracking-[-0.01em] transition-colors duration-300 motion-reduce:transition-none",
              isReached ? "text-(--text-main-color)" : "text-(--skyai-voice-subtle)",
            )}>
            {step.title}
          </strong>
          {/* Height and opacity are animated by SkyVoiceCallFlowSteps (inline); the classes only cover the first paint */}
          <span className={twMerge("skyai-voice-flow-step-body block overflow-hidden", !isActive && "h-0 opacity-0")}>
            <span className="block pt-1.5 text-[14.5px] leading-[1.55] text-(--skyai-voice-muted)">
              {step.description}
            </span>
          </span>
        </span>
      </button>

      {/* Progress line, inside the card padding. The fill is moved only by the section's master timeline.
          It fades in when the step becomes active and hides instantly when it stops being active, so a reset never shows. */}
      <span
        aria-hidden="true"
        className={twMerge(
          "pointer-events-none absolute inset-x-3.5 bottom-2 h-0.5 overflow-hidden rounded-full bg-(--cta-button-background)/10 sm:inset-x-5",
          isActive ? "opacity-100 transition-opacity duration-300 motion-reduce:transition-none" : "opacity-0",
        )}>
        <span
          className="skyai-voice-flow-step-line block size-full rounded-full bg-(--cta-button-background)"
          style={{ transform: "translateX(-100%)" }}
        />
      </span>
    </li>
  );
}

export default SkyVoiceCallFlowStep;
