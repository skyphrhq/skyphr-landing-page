import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { BlogCardInterface } from "../utils/interface/common.interface";
import CTAButton from "./common/ctaButton";

function BlogCard({ imageOptions, title, description, label, date }: BlogCardInterface) {
  return (
    <div className="group/blog-card w-full h-full bg-(--root-white-color) rounded-2xl overflow-hidden transition-colors duration-300 flex flex-col gap-3 cursor-pointer relative border border-(--border-color)">
      <div className="w-full grow p-5 flex flex-col gap-5 relative z-5">
        {date && (
          <span className="w-fit text-sm font-inter font-normal text-(--text-main-color) border border-(--text-main-color)/25 px-4 py-1.5 rounded-full">
            {date}
          </span>
        )}

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-(--text-main-color) font-instrument-sans leading-tight">{title}</h3>
          <p className="text-sm text-(--text-main-color)/65 font-inter font-normal leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden rounded-xl flex-1 aspect-video min-h-65 max-h-65">
        <Image
          alt={imageOptions.alt}
          src={imageOptions.imagePath}
          width={imageOptions.width}
          height={imageOptions.height}
          loading={imageOptions.loading || "lazy"}
          className={twMerge("w-full h-full object-cover aspect-video min-h-65 max-h-65", imageOptions.className)}
        />
        <span className="block w-full h-full bg-black/20 backdrop-blur-[2px] absolute top-0 left-0 opacity-0 group-hover/blog-card:opacity-90 transition-all duration-300 rounded-xl"></span>

        {label && (
          <span className="absolute top-4 left-4 text-xs font-medium font-inter px-3 py-1.5 rounded-full bg-(--root-white-color) backdrop-blur-sm text-(--root-black-color) border border-(--root-black-color)">
            {label}
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover/blog-card:translate-y-0 transition-transform duration-400 ease-out p-4">
          <CTAButton btnStyle="CTA_PRIMARY" className="w-full min-w-0 justify-center">
            Read the Complete Insight
          </CTAButton>
        </div>
      </div>

      <span className="bg-(--bg-blue-shade) block w-125 h-125 min-w-125 min-h-125 blur-[100px] absolute -top-[50%] left-0 rotate-180 opacity-0 transition-all duration-300 group-hover/blog-card:opacity-20 z-1"></span>
    </div>
  );
}

export default BlogCard;
