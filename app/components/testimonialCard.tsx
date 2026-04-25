import QuoteIcon from "@/app/assets/quote.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { ClientTestimonialCardInterface } from "../utils/interface/common.interface";

function TestimonialCard({ data }: { data: ClientTestimonialCardInterface }) {
  return (
    <div className="w-full h-fit">
      <div className="w-full bg-(--about-us-card-bg) rounded-xl border border-(--border-color) p-6">
        <div className="w-full flex items-stretch justify-start gap-8">
          <div className="aspect-450/635 rounded-lg">
            <Image
              alt={data.imageOptions.alt}
              src={data.imageOptions.imagePath}
              width={data.imageOptions.width}
              height={data.imageOptions.height}
              loading={data.imageOptions.loading || "lazy"}
              className={twMerge("w-full h-full object-cover object-top", data.imageOptions.className)}
            />
          </div>
          <div className="w-full relative">
            <div className="w-full h-full flex flex-col items-start justify-center gap-10 relative z-10">
              <div className="flex items-start justify-start">
                <span className="text-2xl text-(--text-secondary-color) font-instrument-sans font-semibold text-pretty">
                  {`"${data.quote}"`}
                </span>
              </div>
              <span className="w-full h-px bg-(--text-secondary-color)"></span>
              <div className="w-full flex flex-col items-start justify-start">
                <span className="block text-xl text-(--root-black-color) font-instrument-sans font-semibold">
                  {data.name}
                </span>
                <span className="block text-sm text-(--text-secondary-color) font-inter font-normal">{data.role}</span>
              </div>
            </div>
            <Image src={QuoteIcon} alt="Quote Icon" width={280} height={225} className="absolute top-0 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
