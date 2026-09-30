"use client";
import BlogListingCard from "@/app/components/blogListingCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { BlogListingSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function BlogListingSection({ data, posts, classNames }: BlogListingSectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const cardElements = gsap.utils.toArray(".reveal-animation");
      const cardAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: containerRef.current, start: "top 80%" });
      gsap.fromTo(cardElements, cardAnimation.FROM, cardAnimation.TO);
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={twMerge("relative w-full h-auto bg-(--root-white-color)", COMMON_SECTION_PADDING, classNames)}>
      <div className="pt-10!">
        <div className="skyphr-container">
          {/* The listing title is the page's only <h1>; CommonSectionHeader renders <h2> rows, so it isn't reused here */}
          <div className="w-full flex flex-col items-center text-center pb-10 md:pb-15">
            <h1 className="font-instrument-sans text-4xl lg:text-5xl xl:text-[62px] 2xl:text-[72px] font-bold text-(--text-main-color)">
              {data.header.title.map((titleRow, rowIndex) => (
                <span key={rowIndex} className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
                  {titleRow.map((chunk, index) => (
                    <span
                      key={index}
                      className={twMerge(
                        chunk.variant === "italic" && "italic font-playfair-display text-(--cta-button-background)",
                        chunk.classNames,
                      )}>
                      {chunk.text.trim()}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            {data.header.description?.map((description, index) => (
              <p
                key={index}
                className="max-w-2xl pt-4 text-pretty font-inter text-sm sm:text-base lg:text-lg text-(--text-secondary-color)">
                {description.map((chunk) => chunk.text).join(" ")}
              </p>
            ))}
          </div>

          {posts.length ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              {posts.map((post) => (
                <BlogListingCard
                  key={post.slug}
                  data={post}
                  readMoreLabel={data.readMoreLabel}
                  featuredLabel={data.featuredLabel}
                />
              ))}
            </div>
          ) : (
            <p className="text-center font-inter text-base text-(--text-secondary-color)">{data.emptyStateLabel}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogListingSection;
