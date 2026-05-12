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
        "h-fit z-10 rounded-lg md:rounded-xl flex items-center justify-center overflow-hidden",
        data?.className,
        cardStyle === "sticky" ? "sticky z-10" : "relative! inset-0!",
        wrapperClassNames,
      )}
      style={{ background: data?.style?.baseColor }}>
      <div
        className={twMerge(
          "w-full h-full flex flex-col md:flex-row gap-5 md:gap-0 items-stretch justify-between @container",
          innerWrapperClassNames,
        )}>
        <div className="grow">
          <div className="w-full h-full py-5 px-4 md:p-10 @container">
            <div className="space-y-5 md:space-y-7">
              <h1 className="text-2xl lg:text-4xl font-bold font-instrument-sans text-(--root-black-color)">
                {data?.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-(--text-main-color)">
                {data?.description}
              </p>
              <div className="w-fit">
                <CtaServiceButton href={data?.ctaButton?.href} label={data?.ctaButton?.label} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-fit h-fit @max-md:rounded-t-lg" style={{ background: data?.style?.darkColor }}>
          <div className="w-full h-full md:p-10">
            <Image
              src={data?.imageOptions.imagePath}
              alt={data?.imageOptions.alt}
              width={data?.imageOptions.width}
              height={data?.imageOptions.height}
              className={twMerge(
                "rounded-lg object-cover w-full h-full @max-md:min-w-full! @max-md:max-w-full!",
                data?.imageOptions.className,
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
