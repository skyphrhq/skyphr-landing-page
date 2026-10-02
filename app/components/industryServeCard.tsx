import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { IndustryServeCardInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function IndustryServeCard({ data, index, className }: IndustryServeCardInterface) {
  return (
    <article
      className={twMerge(
        "group relative h-full overflow-hidden border border-(--border-color) bg-(--about-us-card-bg) p-5 sm:p-6 lg:p-7 transition-colors duration-300 hover:border-(--cta-button-background) hover:bg-(--root-white-color)",
        COMMON_BORDER_RADIUS,
        className,
      )}>
      {/* Brand accent line that grows on hover, keeps the card text-first without an icon */}

      <span className="font-inter text-xs font-semibold tracking-widest text-(--cta-button-background) card-text-reveal">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="pt-4 font-instrument-sans text-lg font-bold text-(--text-main-color) md:text-xl card-text-reveal">
        {data.title}
      </h3>

      <p className="pt-3 font-instrument-sans text-sm leading-6 text-(--text-secondary-color) md:text-base md:leading-7 card-text-reveal">
        {data.description}
      </p>
    </article>
  );
}

export default IndustryServeCard;
