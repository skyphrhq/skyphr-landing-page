"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import SkyAiChallengeCard from "@/app/components/skyAiChallengeCard";
import SkyAiChallengeCtaCard from "@/app/components/skyAiChallengeCtaCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { SkyAiChallengesSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function SkyAiChallengesSection({ data, classNames }: SkyAiChallengesSectionInterface) {
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
        "relative w-full h-auto scroll-mt-20 overflow-hidden bg-(--skyai-lavender-bg)",
        COMMON_SECTION_PADDING,
        classNames,
      )}>
      {/* Soft lavender glow behind the heading */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[min(1100px,170vw)] h-120 pointer-events-none bg-[radial-gradient(closest-side,rgba(105,116,226,0.16),transparent)]"
      />

      <div className="skyphr-container relative">
        <CommonSectionHeader header={data?.header} className="px-0!" />

        {/* 2 × 2 from tablet up, 1 column on mobile; auto-rows-fr keeps every card the same height */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-4 lg:gap-6">
          {data.cards.map((card, index) => (
            <SkyAiChallengeCard key={card.title} card={card} index={index} />
          ))}
        </div>

        {data.ctaCard && <SkyAiChallengeCtaCard data={data.ctaCard} />}
      </div>
    </div>
  );
}

export default SkyAiChallengesSection;
