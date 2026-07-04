import CommonContactUsForm from "@/app/components/commonContatcUsForm";
import HeroBgAbstract from "@/app/components/heroBgAbstract";
import { HireHeroSection } from "@/app/utils/interface/data.interface";
import { twMerge } from "tailwind-merge";

function CommonHirePageHeroSection({ data }: { data: HireHeroSection }) {
  return (
    <div className="w-full h-auto relative overflow-hidden">
      <HeroBgAbstract />
      <div className="skyphr-container relative z-11 h-auto pt-32! pb-15!  xl:pt-45! xl:pb-35 overflow-hidden flex flex-col lg:flex-row items-stretch justify-between gap-10">
        <div className="w-full lg:w-[50%] flex flex-col justify-center max-w-150">
          <h1 className="mt-3 font-instrument-sans text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-(--text-main-color) leading-[1.3]">
            {data.header.title.map((titleRow, rowIndex) => (
              <span className="block" key={rowIndex}>
                {titleRow.map((chunk, chunkIndex) => (
                  <span
                    className={twMerge(
                      chunk.variant === "italic" && "italic font-semibold font-playfair-display",
                      chunk.classNames,
                    )}
                    key={chunkIndex}>
                    {chunk.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <div className="w-full flex flex-col items-start justify-start gap-5 pt-5">
            {data.header?.description?.map((description, index) => (
              <p
                className="max-w-2xl text-pretty text-start mx-auto text-sm sm:text-base lg:text-lg reveal-text-animation text-(--text-main-color)"
                key={index}>
                {description?.map((chunk, chunkIndex) => {
                  return (
                    <span className={twMerge(chunk?.classNames)} key={chunkIndex}>
                      {chunk.text}
                    </span>
                  );
                })}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {data.highlights.map((highlight) => (
              <div className="flex items-center gap-3" key={highlight}>
                <div className="w-2.5 h-2.5 min-w-2.5 rounded-full bg-(--root-black-color)" />
                <span className="text-base font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[50%] lg:max-w-160">
          <div className="contact-card bg-(--root-white-color) rounded-lg md:rounded-xl lg:rounded-2xl border border-(--border-color) p-4 md:p-8 h-full relative">
            <CommonContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonHirePageHeroSection;
