import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { OurProcessCardInterface } from "@/app/utils/interface/common.interface";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function OurProcessCard({ imageOptions, title, description, label }: OurProcessCardInterface) {
  return (
    <div
      className={twMerge("w-full h-full bg-(--about-us-card-bg) p-2.5 md:p-4 overflow-hidden", COMMON_BORDER_RADIUS)}>
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full h-fit">
          <Image
            alt={imageOptions?.alt}
            src={imageOptions?.imagePath}
            width={imageOptions?.width}
            height={imageOptions?.height}
            loading={imageOptions?.loading || "lazy"}
            className={twMerge("w-full object-cover object-center", imageOptions?.className, COMMON_BORDER_RADIUS)}
          />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-2.5 md:gap-5 px-2 md:px-4 pb-4">
          {label && (
            <span className="text-xs font-medium font-inter px-3 py-1 rounded-full bg-(--primary-color)/10 text-(--primary-color) border border-(--primary-color)/20">
              {label}
            </span>
          )}
          <span className="text-lg md:text-xl lg:text-2xl font-semibold text-(--text-main-color) font-instrument-sans">
            {title}
          </span>
          <p className="text-sm max-w-120 text-(--text-main-color) font-normal font-inter">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default OurProcessCard;
