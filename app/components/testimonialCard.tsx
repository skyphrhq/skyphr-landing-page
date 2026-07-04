import QuoteIcon from "@/app/assets/svg/quote.svg";
import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { ClientTestimonialCardInterface } from "@/app/utils/interface/common.interface";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function TestimonialCard({ data }: { data: ClientTestimonialCardInterface }) {
  return (
    <div className="w-full h-fit">
      <div
        className={twMerge(
          "w-full bg-(--about-us-card-bg) border border-(--border-color) p-4.5 md:p-6",
          COMMON_BORDER_RADIUS,
        )}>
        <div className="w-full flex flex-col md:flex-row items-stretch justify-start gap-8">
          <div className="aspect-450/635 rounded-lg">
            <Image
              alt={data.imageOptions.alt}
              title={data.imageOptions.alt}
              src={data.imageOptions.imagePath}
              width={data.imageOptions.width}
              height={data.imageOptions.height}
              loading={data.imageOptions.loading || "lazy"}
              className={twMerge("w-full h-full object-cover object-top", data.imageOptions.className)}
            />
          </div>
          <div className="w-full relative">
            <div className="w-full h-full flex flex-col items-start justify-center gap-6 md:gap-10 relative z-10">
              <div className="flex items-start justify-start">
                <span className="text-xl md:text-2xl text-(--text-secondary-color) font-instrument-sans font-semibold text-pretty">
                  {`"${data.quote}"`}
                </span>
              </div>
              <span className="w-full h-px bg-(--text-secondary-color)"></span>
              <div className="w-full flex flex-col items-start justify-start gap-0.5">
                <span className="block text-base sm:text-lg md:text-xl text-(--root-black-color) font-instrument-sans font-semibold">
                  {data.name}
                </span>
                <span className="block text-xs sm:text-sm text-(--text-secondary-color) font-inter font-normal">
                  {data.role}
                </span>
              </div>
            </div>
            <Image
              src={QuoteIcon}
              alt="Quote Icon"
              title="Quote Icon"
              width={280}
              height={225}
              className="absolute top-0 right-0 hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
