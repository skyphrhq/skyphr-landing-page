import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { ProcessStepCardInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

// "numbered": gray card with a step number and a timeline line to the next card (development process)
// "icon": white card with an icon box instead of the number, no timeline line
function ProcessStepCard({
  step,
  index,
  isLastStep,
  variant = "numbered",
  icon,
  className,
  contentClassName,
}: ProcessStepCardInterface) {
  const stepNumber = String(index + 1).padStart(2, "0");
  const isIconVariant = variant === "icon";

  return (
    <li
      className={twMerge(
        "relative flex gap-4 px-4 py-5 sm:gap-5 ",
        isIconVariant
          ? "bg-(--root-white-color) border border-(--skyai-lavender-border) sm:px-6 sm:py-6"
          : "bg-(--about-us-card-bg)",
        COMMON_BORDER_RADIUS,
        className,
      )}>
      {isIconVariant ? (
        <div className="relative flex shrink-0 flex-col items-center">
          <span
            aria-hidden="true"
            className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-(--skyai-lavender-soft) text-(--cta-button-background) [&>svg]:size-5 relative z-30">
            {icon}
          </span>

          {!isLastStep && (
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-11 z-20 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-(--cta-button-background) sm:top-12"
            />
          )}
        </div>
      ) : (
        <div className="relative flex shrink-0 flex-col items-center">
          <span className="relative z-30 flex size-11 items-center justify-center rounded-full border border-(--border-color) bg-(--root-white-color) font-instrument-sans text-sm font-bold text-(--text-main-color) sm:size-12">
            {stepNumber}
          </span>

          {!isLastStep && (
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-11 z-20 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-(--border-color) sm:top-12"
            />
          )}
        </div>
      )}

      <div className={twMerge("min-w-0 pb-1", contentClassName)}>
        <h3 className="font-instrument-sans text-lg font-bold leading-snug text-(--text-main-color) md:text-xl">
          {step.title}
        </h3>
        <p className="mt-2 font-instrument-sans text-sm leading-6 text-(--text-secondary-color) md:text-base md:leading-7">
          {step.description}
        </p>
        {step?.list && (
          <div className="mt-3">
            <span className="font-instrument-sans font-semibold text-sm leading-6 text-(--text-main-color) md:text-base md:leading-7">
              {step.list?.title}
            </span>
            <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              {step.list.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 font-inter text-sm leading-5 text-(--text-secondary-color)">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-(--cta-button-background)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
}

export default ProcessStepCard;
