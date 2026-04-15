import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { OurProcessCardInterface } from "../utils/interface/common.interface";

function OurProcessCard({ imageOptions, title, description }: OurProcessCardInterface) {
  return (
    <div className="w-full h-fit bg-(--about-us-card-bg) p-4 overflow-hidden rounded-xl">
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full h-fit">
          <Image
            alt={imageOptions?.alt}
            src={imageOptions?.imagePath}
            width={imageOptions?.width}
            height={imageOptions?.height}
            loading={imageOptions?.loading || "lazy"}
            className={twMerge("rounded-lg w-full", imageOptions?.className)}
          />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-5 px-4 pb-4">
          <span className="text-2xl font-semibold text-(--text-main-color) font-instrument-sans">{title}</span>
          <p className="text-sm max-w-120 text-(--text-main-color) font-normal font-inter">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default OurProcessCard;
