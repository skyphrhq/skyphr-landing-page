"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import SkyAiServiceCard from "@/app/components/skyAiServiceCard";
import SkyAiServiceCtaCard from "@/app/components/skyAiServiceCtaCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { SkyAiServicesSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function SkyAiServicesSection({ data, classNames }: SkyAiServicesSectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const titleElements = gsap.utils.toArray(".reveal-text-animation");
      const titleAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom top",
      });
      gsap.fromTo(titleElements, titleAnimation.FROM, titleAnimation.TO);

      const revealElements = gsap.utils.toArray(".reveal-animation");
      const revealAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 35%",
        end: "bottom top",
      });
      gsap.fromTo(revealElements, revealAnimation.FROM, revealAnimation.TO);
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      id={data.id}
      className={twMerge(
        "w-full h-auto scroll-mt-20 bg-linear-to-b from-(--skyai-lavender-bg) to-(--root-white-color)",
        COMMON_SECTION_PADDING,

        classNames,
      )}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data?.header} className="px-0!" />

        {/* 3 × 2 on desktop, 2 columns on tablet, 1 on mobile; auto-rows-fr keeps every card the same height */}
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
          {data.cards.map((card) => (
            <SkyAiServiceCard key={card.title} card={card} />
          ))}
          {data.ctaCard && <SkyAiServiceCtaCard data={data.ctaCard} />}
        </div>
      </div>
    </div>
  );
}

export default SkyAiServicesSection;
