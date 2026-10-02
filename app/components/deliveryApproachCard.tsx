import { DeliveryApproachCardInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function DeliveryApproachCard({ data, index, className }: DeliveryApproachCardInterface) {
  return (
    <li
      className={twMerge(
        "group relative flex items-start gap-4 p-5 sm:gap-6 sm:p-6 lg:p-7 transition-colors duration-300 hover:bg-(--about-us-card-bg)",
        className,
      )}>
      {/* Brand accent bar that grows on hover, ties the row to its number marker */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-(--cta-button-background) transition-transform duration-300 group-hover:scale-y-100"
      />

      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-(--border-color) bg-(--root-white-color) font-inter text-xs font-semibold text-(--text-main-color) transition-colors duration-300 group-hover:border-(--cta-button-background) group-hover:bg-(--cta-button-background) group-hover:text-(--root-white-color)">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex flex-col gap-2">
        <h3 className="font-instrument-sans text-lg font-bold text-(--text-main-color) md:text-xl">{data.title}</h3>
        <p className="font-instrument-sans text-sm leading-6 text-(--text-secondary-color) md:text-base md:leading-7">
          {data.description}
        </p>
      </div>
    </li>
  );
}

export default DeliveryApproachCard;
