import { ABOUT_US_CARD_ANIMATION_CLASS } from "@/app/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { AboutUsCardInterface } from "@/app/utils/interface/common.interface";
import { FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

function AboutUsInfoCard({ data, className }: AboutUsCardInterface) {
  const { icon, count, label, direction } = data;
  return (
    <div
      className={twMerge(
        "w-full h-full bg-(--about-us-card-bg) p-5 md:p-10",
        ABOUT_US_CARD_ANIMATION_CLASS(direction),
        className,
        COMMON_BORDER_RADIUS,
      )}>
      <div className="flex flex-col items-start justify-start gap-8">
        <div className="w-10 h-10 min-w-10 min-h-10 md:w-14 md:min-w-14 md:min-h-14 md:h-14 rounded-full flex items-center justify-center bg-(--root-white-color)">
          {icon}
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-instrument-sans text-(--text-main-color) flex items-center justify-center gap-1">
            <span>{count}</span>
            <FaPlus className="text-sm sm:text-base lg:text-lg text-(--text-secondary-color)" />
          </span>
          <p className="text-sm sm:text-base lg:text-lg font-medium font-instrument-sans text-(--text-secondary-color)">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsInfoCard;
