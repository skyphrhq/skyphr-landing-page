"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import SkyVoiceWhoForCta from "@/app/components/skyVoiceWhoForCta";
import SkyVoiceWhoForDetail from "@/app/components/skyVoiceWhoForDetail";
import SkyVoiceWhoForIndex from "@/app/components/skyVoiceWhoForIndex";
import { gsap, ScrollTrigger } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { SkyVoiceWhoForSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useSyncExternalStore } from "react";
import { twMerge } from "tailwind-merge";

// Below xmd (991px) the details become an accordion under the rows
const STACKED_QUERY = "(max-width: 990.98px)";
const subscribeToStacked = (onChange: () => void) => {
  const mediaQuery = window.matchMedia(STACKED_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
};
const getStacked = () => window.matchMedia(STACKED_QUERY).matches;
const getServerStacked = () => false;

const ROW_REVEAL = { y: 16, opacity: 0 };

function SkyVoiceWhoForSection({ data, classNames }: SkyVoiceWhoForSectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const isStacked = useSyncExternalStore(subscribeToStacked, getStacked, getServerStacked);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const titleSec = gsap.utils.toArray(".reveal-text-animation");
      const getTitleAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: container,
        start: "top 80%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);

      // Only loop the greeting waveform while the section is on screen
      ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => setIsInView(self.isActive),
      });

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Once, when 30% of the section is in view: header, rows, detail, then the CTA bar.
        // The desktop detail column doesn't exist in the stacked layout, so only animate what's there.
        const timeline = gsap.timeline({ scrollTrigger: { trigger: container, start: "30% bottom", once: true } });
        timeline.fromTo(
          ".skyai-voice-who-reveal-header",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 },
        );
        timeline.fromTo(
          ".skyai-voice-who-row",
          ROW_REVEAL,
          { y: 0, opacity: 1, duration: 0.6, ease: "expo.out", stagger: 0.06 },
          "-=0.45",
        );
        if (container.querySelector(".skyai-voice-who-reveal-detail")) {
          timeline.fromTo(
            ".skyai-voice-who-reveal-detail",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4",
          );
        }
        timeline.fromTo(
          ".skyai-voice-who-reveal-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3",
        );
      });
    },
    // Re-run on a layout switch so the entrance targets the elements that exist now
    { scope: containerRef, dependencies: [isStacked], revertOnUpdate: true },
  );

  return (
    <div
      ref={containerRef}
      id={data.id}
      className={twMerge(
        "relative w-full h-auto scroll-mt-20 bg-(--about-us-card-bg)",
        COMMON_SECTION_PADDING,
        classNames,
      )}>
      <div className="skyphr-container">
        <CommonSectionHeader
          header={data.header}
          className="pb-10! md:pb-16!"
          headerParentClass="tracking-tight"
          descriptionClass="max-w-170 text-(--skyai-voice-muted)"
        />

        <div className="mx-auto max-w-295">
          <div
            className={twMerge(
              "skyai-voice-panel grid grid-cols-1 gap-5 p-3  xmd:grid-cols-[0.85fr_1.15fr] xmd:p-5",
              COMMON_BORDER_RADIUS,
            )}>
            {/* Desktop: the CTA sits under the list and fills the space left beside the (taller) detail column */}
            <div className="flex flex-col gap-5">
              <SkyVoiceWhoForIndex
                data={data}
                activeIndex={activeIndex}
                isStacked={isStacked}
                isAnimating={isInView}
                onSelect={setActiveIndex}
              />
              {!isStacked && (
                <SkyVoiceWhoForCta data={data.cta} isCompact className="skyai-voice-who-reveal-cta mt-auto" />
              )}
            </div>

            {/* All details share one grid cell, so the column is always as tall as the tallest one: no height jump on switch */}
            {!isStacked && (
              <div className="skyai-voice-who-reveal-detail grid">
                {data.industries.map((industry, index) => (
                  <SkyVoiceWhoForDetail
                    key={industry.id}
                    industry={industry}
                    labels={data.labels}
                    isActive={index === activeIndex}
                    isAnimating={isInView}
                    tabId={`who-for-tab-${industry.id}`}
                    panelId={`who-for-panel-${industry.id}`}
                    className="[grid-area:1/1]"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="xl:px-10">
            {isStacked && <SkyVoiceWhoForCta data={data.cta} className="skyai-voice-who-reveal-cta mt-5" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkyVoiceWhoForSection;
