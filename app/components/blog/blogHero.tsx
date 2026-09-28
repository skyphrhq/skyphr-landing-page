import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import type { CMSImageData, SectionSchema } from "@/types/type";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type BlogHeroProps = {
  title: string;
  excerpt: string;
  authorName: string;
  authorRole: string;
  publishedAt: string;
  image?: CMSImageData;
};

export const UIComponent = ({ title, excerpt, authorName, authorRole, publishedAt, image }: BlogHeroProps) => {
  return (
    <header className="w-full pt-23 lg:pt-36">
      <div className="mx-auto w-full">
        <h1 className="mt-5 max-w-4xl font-instrument-sans text-4xl lg:text-5xl xl:text-[62px] 2xl:text-[72px] font-bold leading-10 lg:leading-15 xl:leading-20 tracking-tight text-(--text-main-color) ">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl font-inter text-sm leading-7 text-(--text-secondary-color) md:text-base">
          {excerpt}
        </p>
        <div className="mt-8 flex items-center gap-4 border-t border-(--border-color) pt-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5b45f4] text-sm font-bold text-white">
            {authorName
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </div>
          <div>
            <p className="font-instrument-sans text-sm font-bold text-(--text-main-color)">{authorName}</p>
            <p className="font-inter text-xs text-(--text-secondary-color)">
              {[authorRole, publishedAt].filter(Boolean).join(" · ")}
            </p>
          </div>
        </div>
      </div>
      {/* Posts saved before the image field existed have no image, so it's optional here */}
      {image?.url && (
        <div className={twMerge("mt-8 w-full overflow-hidden bg-(--about-us-card-bg)", COMMON_BORDER_RADIUS)}>
          {/* Hero image is the LCP element, so load it eagerly */}
          <Image
            src={image.url}
            alt={image.alt || title}
            title={image.alt || title}
            width={image.width}
            height={image.height}
            loading="eager"
            fetchPriority="high"
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </header>
  );
};

export const Schema: SectionSchema = {
  title: { type: "TEXTAREA", required: true },
  excerpt: { type: "TEXTAREA", required: true },
  authorName: { type: "STRING", required: true },
  authorRole: { type: "STRING", required: true },
  publishedAt: { type: "STRING", required: true },
  image: { type: "IMAGE", required: true, alt: true },
};
