"use client";
import BlogCard from "@/app/components/blogCard";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { OurInsightsSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function OurInsightsSection({ data, classNames }: OurInsightsSectionInterface) {
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
    <div className={twMerge("w-full h-full bg-(--about-us-card-bg) py-30", classNames)} ref={containerRef}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data.header} />
        <div className="w-full grid grid-cols-3 gap-6">
          {data.blogsData.slice(0, 3).map((item, index) => (
            <div key={index} className="col-span-1 reveal-animation">
              <BlogCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurInsightsSection;
