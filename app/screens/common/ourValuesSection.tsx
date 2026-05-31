"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import OurValueCommonCard from "@/app/components/ourValueCommonCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { OurValuesSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function OurValuesSection({ data, classNames }: OurValuesSectionInterface) {
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

      // Now We will write the code for the Card reveal animation on scroll time
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
    <div className={twMerge("w-full h-auto", COMMON_SECTION_PADDING, classNames)} ref={containerRef}>
      <CommonSectionHeader header={data?.header} />
      <div className="skyphr-container">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.valuesCards?.map((item, index) => (
            <div key={index} className={`reveal-animation`}>
              <OurValueCommonCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurValuesSection;
