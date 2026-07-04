import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { OurServiceCardDataArrayInterface } from "@/app/utils/interface/data.interface";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import CtaServiceButton from "./common/ctaServiceBtn";

function OurServiceCardComponent({
  data,
  cardStyle = "sticky",
  wrapperClassNames,
  innerWrapperClassNames,
}: {
  data: OurServiceCardDataArrayInterface;
  cardStyle?: "solid" | "sticky";
  wrapperClassNames?: string;
  innerWrapperClassNames?: string;
}) {
  return (
    <div
      className={twMerge(
        "h-fit z-10 flex items-center justify-center overflow-hidden",
        data?.className,
        cardStyle === "sticky" ? "sticky z-10" : "relative! inset-0!",
        wrapperClassNames,
        COMMON_BORDER_RADIUS,
      )}
      style={{ background: data?.style?.baseColor }}>
      <div
        className={twMerge(
          "w-full h-full flex flex-col md:flex-row gap-5 md:gap-0 items-stretch justify-between @container",
          innerWrapperClassNames,
        )}>
        <div className="md:w-1/2 grow">
          <div className="w-full h-full py-5 px-4 md:p-5 lg:p-10 @container">
            <div className="space-y-5 md:space-y-7">
              <span className="text-[20px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[34px] inline-block font-bold font-instrument-sans text-(--root-black-color)">
                {data?.title}
              </span>
              <p className="text-sm sm:text-base lg:text-lg font-normal font-inter text-(--text-main-color)">
                {data?.description}
              </p>
              <div className="w-fit">
                <CtaServiceButton href={data?.ctaButton?.href} label={data?.ctaButton?.label} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={twMerge("w-full md:w-1/2", COMMON_BORDER_RADIUS)}
          style={{ background: data?.style?.darkColor }}>
          <div className="w-full h-full min-w-full! max-w-full! md:p-5 lg:p-10">
            <Image
              src={data?.imageOptions.imagePath}
              alt={data?.imageOptions.alt}
              title={data?.imageOptions.alt}
              width={data?.imageOptions.width}
              height={data?.imageOptions.height}
              className={twMerge(
                "object-cover w-full h-full min-w-full! max-w-full!",
                data?.imageOptions.className,
                COMMON_BORDER_RADIUS,
              )}
              loading={data?.imageOptions?.loading ? data?.imageOptions?.loading : "lazy"}
              style={{ minWidth: `${data?.imageOptions?.width}px`, minHeight: `${data?.imageOptions?.height}px` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServiceCardComponent;
