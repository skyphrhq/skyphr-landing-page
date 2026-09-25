import { SkyAiProcessStepInterface } from "@/app/utils/interface/common.interface";
import { HiCheckCircle } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

// Dividers per position: stacked with top borders on mobile, 2 × 2 on tablet, 4 columns from lg
const STEP_DIVIDER_CLASSES = [
  "pt-0 md:pt-0 md:pr-8 lg:pr-6 xl:pr-8",
  "border-t md:border-t-0 md:border-l md:pt-0 md:pl-8 lg:px-6 xl:px-8",
  "border-t lg:border-t-0 lg:border-l md:pr-8 lg:pt-0 lg:px-6 xl:px-8",
  "border-t md:border-l lg:border-t-0 md:pl-8 lg:pt-0 lg:pl-6 xl:pl-8",
];

function SkyAiProcessStep({ step, index, deliverablesLabel, className }: SkyAiProcessStepInterface) {
  return (
    <li
      className={twMerge(
        "flex flex-col border-(--border-color) py-10 md:py-12 lg:py-0",
        STEP_DIVIDER_CLASSES[index % STEP_DIVIDER_CLASSES.length],
        className,
      )}>
      {/* Decorative: the <ol> already conveys the order */}
      <span
        aria-hidden="true"
        className="block font-instrument-sans font-bold leading-none tracking-tight text-[56px] lg:text-[72px] text-transparent [-webkit-text-stroke:1.5px_var(--skyai-periwinkle-light)] select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="font-instrument-sans text-[22px] xl:text-2xl leading-tight font-bold text-(--text-main-color) pt-5">
        {step.title}
      </h3>

      <p className="font-instrument-sans text-[15px] leading-[1.55] text-(--text-secondary-color) pt-3">
        {step.description}
      </p>

      <p className="font-instrument-sans text-xs font-semibold uppercase tracking-[0.12em] text-(--text-secondary-color) pt-7">
        {deliverablesLabel}
      </p>

      <ul className="flex flex-col gap-2.5 pt-4">
        {step.deliverables.map((deliverable) => (
          <li
            key={deliverable}
            className="flex items-start gap-2.5 font-instrument-sans text-[15px] text-(--text-main-color)">
            <HiCheckCircle aria-hidden="true" className="shrink-0 text-lg text-(--cta-button-background)" />
            <span className="-mt-0.5">{deliverable}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default SkyAiProcessStep;
