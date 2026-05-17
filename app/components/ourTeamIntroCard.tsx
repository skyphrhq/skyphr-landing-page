import QuoteIcon from "@/app/assets/svg/quote.svg";
import { OurTeamMembersDataArrayInterface } from "@/app/utils/interface/common.interface";
import Image from "next/image";
import Link from "next/link";

function OurTeamIntroCard({ data }: { data: OurTeamMembersDataArrayInterface }) {
  return (
    <div className="w-full h-fit">
      <div className="w-full bg-(--about-us-card-bg) rounded-lg md:rounded-xl border border-(--border-color) p-4.5 md:p-6">
        <div className="w-full flex flex-col md:flex-row items-stretch justify-start gap-8">
          <div className="aspect-450/635 rounded-lg">
            <Image
              alt={data.imageOptions.alt}
              src={data.imageOptions.imagePath}
              width={data.imageOptions.width}
              height={data.imageOptions.height}
              loading={data.imageOptions.loading || "lazy"}
              className="w-full h-full object-cover object-top rounded-lg"
            />
          </div>
          <div className="w-full relative">
            <div className="w-full h-full flex flex-col items-start justify-center gap-6 md:gap-10 relative z-10">
              <div className="flex items-start justify-start">
                <span className="text-xl md:text-2xl text-(--text-secondary-color) font-instrument-sans font-semibold text-pretty">
                  {data.description}
                </span>
              </div>
              <span className="w-full h-px bg-(--text-secondary-color)"></span>
              <div className="w-full flex items-end justify-between">
                <div className="w-full flex flex-col items-start justify-start">
                  <span className="block text-base sm:text-lg md:text-xl text-(--root-black-color) font-instrument-sans font-semibold">
                    {data.name}
                  </span>
                  <span className="block text-xs sm:text-sm text-(--text-secondary-color) font-inter font-normal">
                    {data.role}
                  </span>
                </div>
                <div className="flex items-center justify-start">
                  {data?.social?.map((socialMedia, index) => {
                    return (
                      <Link
                        key={index}
                        href={socialMedia.url}
                        aria-label={socialMedia.ariaLabel}
                        title={socialMedia.title}
                        target={socialMedia.target}
                        rel={socialMedia.rel}
                        className="group w-10 h-10 flex items-center justify-center rounded-full border border-(--border-color,) text-(--text-main-color) hover:text-(--root-white-color) hover:bg-(--root-black-color) transition-all duration-300">
                        {socialMedia.icon}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <Image src={QuoteIcon} alt="Quote Icon" width={280} height={225} className="absolute top-0 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeamIntroCard;
