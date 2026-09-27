"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import SkyVoiceInfoCard from "@/app/components/skyVoiceInfoCard";
import SkyVoiceInfoCardPractice from "@/app/components/skyVoiceInfoCardPractice";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { SkyVoiceTrustSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function SkyVoiceTrustSection({ data, classNames }: SkyVoiceTrustSectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // Same reveal as the other sections (COMMON_SCROLL_TRIGGER_ANIMATION): header, then the six principles when
      // their grid reaches view. Skipped with reduced motion.
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const titleAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: container, start: "top 70%" });
        gsap.fromTo(gsap.utils.toArray(".reveal-text-animation"), titleAnimation.FROM, titleAnimation.TO);

        const cardAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: ".skyai-voice-trust-cards", start: "top 80%" });
        gsap.fromTo(gsap.utils.toArray(".reveal-animation"), cardAnimation.FROM, cardAnimation.TO);
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      id={data.id}
      className={twMerge("relative w-full h-auto scroll-mt-20 bg-(--about-us-card-bg)", COMMON_SECTION_PADDING, classNames)}>
      <CommonSectionHeader
        header={data.header}
        isSingleHeading
        className="pb-10! md:pb-16!"
        headerParentClass="tracking-tight"
        descriptionClass="max-w-140 text-(--skyai-voice-muted)"
      />

      <div className="skyphr-container">
        <div className="skyai-voice-trust-cards mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.principles.map((principle) => (
            <SkyVoiceInfoCard key={principle.title} data={principle} className="reveal-animation">
              <SkyVoiceInfoCardPractice label={data.practiceLabel} text={principle.practice} />
            </SkyVoiceInfoCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkyVoiceTrustSection;
