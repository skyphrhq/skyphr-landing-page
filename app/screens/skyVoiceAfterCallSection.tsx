"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import SkyVoiceInfoCard from "@/app/components/skyVoiceInfoCard";
import SkyVoiceInfoCardPoints from "@/app/components/skyVoiceInfoCardPoints";
import SkyVoiceIntegrationCard from "@/app/components/skyVoiceIntegrationCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { SkyVoiceAfterCallSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function SkyVoiceAfterCallSection({ data, classNames }: SkyVoiceAfterCallSectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // Same reveal as the other sections (COMMON_SCROLL_TRIGGER_ANIMATION): header, then the cards when their grid
      // reaches view, then the integrations block on its own. Skipped with reduced motion.
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const titleAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: container, start: "top 70%" });
        gsap.fromTo(gsap.utils.toArray(".reveal-text-animation"), titleAnimation.FROM, titleAnimation.TO);

        const cardAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({
          trigger: ".skyai-voice-after-call-cards",
          start: "top 80%",
        });
        gsap.fromTo(
          gsap.utils.toArray(".skyai-voice-after-call-cards .reveal-animation"),
          cardAnimation.FROM,
          cardAnimation.TO,
        );

        const integrationAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({
          trigger: ".skyai-voice-integrations",
          start: "top 80%",
        });
        gsap.fromTo(
          gsap.utils.toArray(".skyai-voice-integrations .reveal-animation"),
          integrationAnimation.FROM,
          integrationAnimation.TO,
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      id={data.id}
      className={twMerge(
        "relative w-full h-auto scroll-mt-20 bg-(--root-white-color)",
        COMMON_SECTION_PADDING,
        classNames,
      )}>
      <CommonSectionHeader
        header={data.header}
        className="pb-10! md:pb-16!"
        headerParentClass="tracking-tight"
        descriptionClass="max-w-140 text-(--skyai-voice-muted)"
      />

      <div className="skyphr-container">
        <div className="skyai-voice-after-call-cards mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card) => (
            <SkyVoiceInfoCard key={card.title} data={card} className="reveal-animation">
              <SkyVoiceInfoCardPoints points={card.points} />
            </SkyVoiceInfoCard>
          ))}
        </div>
      </div>

      <div className="skyphr-container">
        <div className="skyai-voice-integrations mx-auto mt-16 md:mt-20">
          <div className="reveal-animation skyai-voice-line-border flex flex-col gap-2 border-b pb-6 font-instrument-sans md:flex-row md:items-end md:justify-between md:gap-6">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-(--text-main-color)">
              {data.integrations.title}
            </h3>
            <p className="text-[15px] text-(--skyai-voice-muted) text-end max-w-130">{data.integrations.description}</p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.integrations.items.map((integration) => (
              <SkyVoiceIntegrationCard key={integration.name} data={integration} className="reveal-animation" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkyVoiceAfterCallSection;
