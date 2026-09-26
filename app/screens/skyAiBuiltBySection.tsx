"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import SkyAiLensCard from "@/app/components/skyAiLensCard";
import SkyAiNetworkLines from "@/app/components/skyAiNetworkLines";
import SkyAiServiceCtaCard from "@/app/components/skyAiServiceCtaCard";
import SkyAiSkyAgentCard from "@/app/components/skyAiSkyAgentCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { SkyAiBuiltBySectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function SkyAiBuiltBySection({ data, classNames }: SkyAiBuiltBySectionInterface) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const titleSec = gsap.utils.toArray(".reveal-text-animation");
      const getTitleAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);

      const cardTextRevel = gsap.utils.toArray(".card-text-reveal");
      const { FROM, TO } = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 50%",
        end: "bottom top",
      });
      gsap.fromTo(cardTextRevel, FROM, TO);
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      id={data.id}
      className={twMerge(
        "relative w-full h-auto scroll-mt-20 overflow-hidden bg-linear-to-br from-(--skyai-night-start) to-(--skyai-night-end)",
        COMMON_SECTION_PADDING,
        classNames,
      )}>
      <div aria-hidden="true" className="skyai-dot-grid absolute inset-0 pointer-events-none" />
      <SkyAiNetworkLines color="var(--root-white-color)" lineOpacity={0.18} dotOpacity={0.5} />
      {/* Soft periwinkle glow behind the Sky card */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[min(1300px,180vw)] h-[70%] pointer-events-none bg-[radial-gradient(closest-side,rgba(105,116,226,0.35),transparent)]"
      />

      <div className="skyphr-container relative z-20">
        <CommonSectionHeader header={data?.header} className="px-0!" headerParentClass="text-(--root-white-color)"  descriptionClass="text-(--root-white-color)"/>

        <SkyAiSkyAgentCard data={data.skyCard} />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.6fr_1fr] gap-4 lg:gap-6 pt-4 lg:pt-6">
          <SkyAiLensCard data={data.lensCard} />
          <SkyAiServiceCtaCard data={data.ctaCard} variant="frosted" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default SkyAiBuiltBySection;
