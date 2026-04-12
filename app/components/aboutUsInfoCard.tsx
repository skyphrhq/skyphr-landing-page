import { ABOUT_US_CARD_ANIMATION_CLASS } from "@/app/utils/constants/animation.constant";
import { FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { AboutUsCardInterface } from "../utils/interface/common.interface";

function AboutUsInfoCard({ data, className }: AboutUsCardInterface) {
  const { icon, count, label, direction } = data;
  return (
    <div
      className={twMerge(
        "w-full h-full bg-(--about-us-card-bg) p-10 rounded-lg",
        ABOUT_US_CARD_ANIMATION_CLASS(direction),
        className,
      )}>
      <div className="flex flex-col items-start justify-start gap-8">
        <div className="w-14 min-w-14 min-h-14 h-14 rounded-full flex items-center justify-center bg-(--root-white-color)">
          {icon}
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-4xl font-bold font-instrument-sans text-(--text-main-color) flex items-center justify-center gap-1">
            <span>{count}</span>
            <FaPlus className="text-lg text-(--text-secondary-color)" />
          </span>
          <p className="text-lg font-medium font-instrument-sans text-(--text-secondary-color)">{label}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsInfoCard;
