import QuoteIcon from "@/app/assets/svg/quote.svg";
import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { OurTeamMembersDataArrayInterface } from "@/app/utils/interface/common.interface";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

function OurTeamIntroCard({ data }: { data: OurTeamMembersDataArrayInterface }) {
  return (
    <div className="w-full h-fit">
      <div
        className={twMerge(
          "w-full bg-(--root-white-color) border border-(--border-color) p-4.5 md:p-6",
          COMMON_BORDER_RADIUS,
        )}>
        <div className="w-full flex flex-col md:flex-row items-stretch justify-start gap-8">
          <div className="md:w-[45%] aspect-450/635 rounded-lg">
            <Image
              alt={data.imageOptions.alt}
              title={data.imageOptions.alt}
              src={data.imageOptions.imagePath}
              width={data.imageOptions.width}
              height={data.imageOptions.height}
              loading={data.imageOptions.loading || "lazy"}
              className="w-full h-full object-cover object-top rounded-lg"
            />
          </div>
          <div className="w-full relative">
            <div className="w-full h-full flex flex-col items-start justify-between gap-8 md:gap-12 relative z-10">
              <div className="pt-10">
                <div className="relative w-full pl-10 sm:pl-14 md:pl-16 xl:pl-20">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -top-2 md:-top-4 select-none font-playfair-display font-bold leading-none text-[64px] sm:text-[80px] md:text-[96px] xl:text-[150px] text-(--cta-button-background) opacity-15">
                    &ldquo;
                  </span>
                  {data?.description?.map((description, index) => (
                    <p
                      className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[50px] leading-[1.15] tracking-tight text-(--root-black-color) font-instrument-sans font-bold text-pretty"
                      key={index}>
                      {description?.map((chunk, chunkIndex) => (
                        <span key={chunkIndex}>
                          <span
                            className={twMerge(
                              "font-instrument-sans reveal-text-animation",
                              chunk?.variant === "italic" &&
                                "italic font-bold font-playfair-display tracking-normal text-(--cta-button-background)",
                              chunk?.classNames,
                            )}>
                            {chunk.text.trim()}
                          </span>
                          {chunkIndex < description.length - 1 && " "}
                        </span>
                      ))}
                      <span
                        aria-hidden="true"
                        className="inline-block align-top ml-3 md:ml-4 -mt-1 h-[0.6em] select-none font-playfair-display font-bold leading-none text-[64px] sm:text-[80px] md:text-[96px] xl:text-[150px] text-(--cta-button-background) opacity-15">
                        &rdquo;
                      </span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <span className="h-px w-full bg-(--text-secondary-color) block"></span>
                <div className="w-full flex flex-col gap-6 md:gap-8 pt-5">
                  <div className="w-full flex items-center justify-between gap-4">
                    <div className="flex flex-col items-start justify-start gap-1">
                      <span className="block text-lg sm:text-xl md:text-2xl text-(--root-black-color) font-instrument-sans font-bold">
                        {data.name}
                      </span>
                      <span className="block text-sm sm:text-base text-(--text-secondary-color) font-inter font-normal">
                        {data.role}
                      </span>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                      {data?.social?.map((socialMedia, index) => {
                        return (
                          <Link
                            key={index}
                            href={socialMedia.url}
                            aria-label={socialMedia.ariaLabel}
                            title={socialMedia.title}
                            target={socialMedia.target}
                            rel={socialMedia.rel}
                            className="w-12 h-12 md:w-14 md:h-14 shrink-0 flex items-center justify-center rounded-full bg-(--cta-button-background) text-(--root-white-color) text-xl md:text-2xl hover:bg-(--root-black-color) hover:scale-105 transition-all duration-300">
                            {socialMedia.icon}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={QuoteIcon}
              alt="Quotation mark icon"
              title="Quotation mark icon"
              width={280}
              height={225}
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeamIntroCard;
