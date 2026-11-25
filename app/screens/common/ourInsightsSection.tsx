"use client";
import BlogListingCard from "@/app/components/blogListingCard";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { OurInsightsSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function OurInsightsSection({ data, posts, classNames }: OurInsightsSectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const titleSec = gsap.utils.toArray(".reveal-text-animation");
      const getTitleAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);

      // Now We will write the GSAP code for the Card Reveal Animation.
      const revealCard = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 50%",
        end: "bottom top",
      });
      gsap.fromTo(revealCard, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );

  return (
    <div
      className={twMerge("w-full h-full bg-(--about-us-card-bg)",COMMON_SECTION_PADDING, classNames)}
      ref={containerRef}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data.header} />
        {/* Same card as /blog (it carries the reveal-animation class); swipeable row below lg, three columns from lg */}
        <div className="w-full flex flex-row overflow-y-hidden overflow-x-auto snap-x snap-mandatory items-stretch justify-start lg:grid lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <BlogListingCard
              key={post.slug}
              data={post}
              readMoreLabel={data.readMoreLabel}
              featuredLabel={data.featuredLabel}
              className="min-w-[85%] sm:min-w-[60%] lg:min-w-0 snap-start"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurInsightsSection;
