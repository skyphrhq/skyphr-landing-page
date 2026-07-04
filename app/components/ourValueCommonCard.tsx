import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { OurValueCardInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function OurValueCommonCard({ icon, title, description, bgColor }: OurValueCardInterface) {
  return (
    <div
      className={twMerge(
        "w-full h-full border border-(--text-secondary-color) p-5 md:p-10 flex flex-col gap-8 justify-start overflow-hidden",
        COMMON_BORDER_RADIUS,
      )}
      style={{ backgroundColor: bgColor }}>
      <div
        className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-lg"
        style={{ backgroundColor: "white", color: "black" }}>
        {icon}
      </div>

      <div className="w-full">
        <h3 className="font-instrument-sans text-[20px] md:text-[26px] lg:text-[28px] font-bold mb-3 text-(--root-black-color)">
          {title}
        </h3>
        <p className="font-instrument-sans text-sm sm:text-base lg:text-lg font-normal text-(--text-main-color) leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default OurValueCommonCard;
