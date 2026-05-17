"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import OurProcessCard from "@/app/components/ourProcessCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { OurProcessSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function getLgGridStyle(gridStyle?: string) {
  if (gridStyle === "col-span-3") return "lg:col-span-3";
  if (gridStyle === "col-span-2") return "lg:col-span-2";
  return "lg:col-span-1";
}

function OurProcessSection({ data, classNames }: OurProcessSectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;
      const titleSec = gsap.utils.toArray(".reveal-text-animation");
      const getTitleAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "5% 80%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);

      // Now We will Write the GSAP Code to for the card reveal Animation.

      const revealCard = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "20% 80%",
        end: "bottom top",
      });
      gsap.fromTo(revealCard, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );
  return (
    <div
      className={twMerge("w-full h-full py-15! md:py-20! xl:py-30! overflow-hidden @container", classNames)}
      ref={containerRef}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data.header} />
        <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {data?.steps?.map((item, index) => (
            <div
              key={index}
              className={twMerge("reveal-animation col-span-1 md:col-span-2", getLgGridStyle(item?.gridStyle))}>
              <OurProcessCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProcessSection;
