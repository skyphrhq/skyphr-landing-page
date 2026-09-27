"use client";
import SkyVoiceWhoForDetail from "@/app/components/skyVoiceWhoForDetail";
import SkyVoiceWhoForIndexRow from "@/app/components/skyVoiceWhoForIndexRow";
import { gsap } from "@/app/lib/gsap";
import { PrefersReducedMotion } from "@/app/utils/helpers/helper";
import { SkyVoiceWhoForIndexInterface } from "@/app/utils/interface/common.interface";
import { useGSAP } from "@gsap/react";
import { Fragment, KeyboardEvent, useRef } from "react";
import { twMerge } from "tailwind-merge";

// Room left above a row scrolled into view, so it clears the fixed navbar
const SCROLL_OFFSET_PX = 96;

function SkyVoiceWhoForIndex({
  data,
  activeIndex,
  isStacked,
  isAnimating,
  onSelect,
  className,
}: SkyVoiceWhoForIndexInterface) {
  const listRef = useRef<HTMLDivElement>(null);
  const hasMountedRef = useRef(false);
  // Only a user's pick should scroll the page, not the first render or a layout switch
  const shouldScrollRef = useRef(false);

  useGSAP(
    () => {
      const isInstant = !hasMountedRef.current || PrefersReducedMotion();
      hasMountedRef.current = true;
      const duration = isInstant ? 0 : 0.3;

      // Active row: white card in, grey tile -> blue gradient, arrow slides in from the left. The rest reverse.
      gsap.utils.toArray<HTMLElement>(".skyai-voice-who-row").forEach((row, index) => {
        const isActive = index === activeIndex;
        const tweenVars = { duration, ease: "power2.out", overwrite: true };
        gsap.to(row.querySelector(".skyai-voice-who-row-card"), { ...tweenVars, opacity: isActive ? 1 : 0 });
        gsap.to(row.querySelector(".skyai-voice-who-row-tile"), { ...tweenVars, opacity: isActive ? 1 : 0 });
        gsap.to(row.querySelector(".skyai-voice-who-row-icon"), {
          ...tweenVars,
          color: isActive ? "var(--root-white-color)" : "var(--skyai-voice-subtle)",
        });
        gsap.to(row.querySelector(".skyai-voice-who-row-name"), {
          ...tweenVars,
          color: isActive ? "var(--text-main-color)" : "var(--skyai-voice-body)",
        });
        gsap.to(row.querySelector(".skyai-voice-who-row-arrow"), {
          ...tweenVars,
          opacity: isActive ? 1 : 0,
          x: isActive ? 0 : -6,
          duration: isInstant ? 0 : 0.35,
        });
      });

      if (!isStacked) return;

      // Accordion: open the active detail to its natural height, close the rest
      const scrollTarget = shouldScrollRef.current ? listRef.current?.querySelectorAll("[role='tab']")[activeIndex] : null;
      shouldScrollRef.current = false;

      gsap.utils.toArray<HTMLElement>(".skyai-voice-who-accordion").forEach((accordion, index) => {
        const isActive = index === activeIndex;
        gsap.to(accordion, {
          height: isActive ? "auto" : 0,
          duration: isInstant ? 0 : 0.45,
          ease: "power3.out",
          overwrite: true,
          onComplete: isActive
            ? () => {
                // GSAP ends on pixels; back to auto so the panel still fits if its text rewraps
                gsap.set(accordion, { height: "auto" });
                if (!scrollTarget) return;
                const { top, bottom } = scrollTarget.getBoundingClientRect();
                const isOffScreen = top < SCROLL_OFFSET_PX || bottom > window.innerHeight;
                if (isOffScreen) {
                  gsap.to(window, {
                    duration: isInstant ? 0 : 0.6,
                    ease: "power2.inOut",
                    scrollTo: { y: scrollTarget, offsetY: SCROLL_OFFSET_PX },
                  });
                }
              }
            : undefined,
        });
      });
    },
    { scope: listRef, dependencies: [activeIndex, isStacked] },
  );

  const selectIndustry = (index: number) => {
    shouldScrollRef.current = true;
    onSelect(index);
  };

  // Tabs pattern: arrows move between industries (and select them), Home/End jump to the ends
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = data.industries.length - 1;
    const nextIndex = {
      ArrowDown: index === lastIndex ? 0 : index + 1,
      ArrowRight: index === lastIndex ? 0 : index + 1,
      ArrowUp: index === 0 ? lastIndex : index - 1,
      ArrowLeft: index === 0 ? lastIndex : index - 1,
      Home: 0,
      End: lastIndex,
    }[event.key];
    if (nextIndex === undefined) return;

    event.preventDefault();
    selectIndustry(nextIndex);
    listRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']")[nextIndex]?.focus();
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={data.labels.tablist}
      aria-orientation="vertical"
      className={twMerge("flex flex-col gap-1", className)}>
      {data.industries.map((industry, index) => {
        const isActive = index === activeIndex;
        const tabId = `who-for-tab-${industry.id}`;
        const panelId = `who-for-panel-${industry.id}`;

        return (
          <Fragment key={industry.id}>
            <SkyVoiceWhoForIndexRow
              industry={industry}
              isActive={isActive}
              tabId={tabId}
              panelId={panelId}
              onSelect={() => selectIndustry(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            />
            {/* Below xmd the detail opens right under its row. Height is GSAP's; the class only covers the first paint. */}
            {isStacked && (
              <div className={twMerge("skyai-voice-who-accordion overflow-hidden", !isActive && "h-0")}>
                <div className="pt-2 pb-3">
                  <SkyVoiceWhoForDetail
                    industry={industry}
                    labels={data.labels}
                    isActive={isActive}
                    isAnimating={isAnimating}
                    tabId={tabId}
                    panelId={panelId}
                  />
                </div>
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default SkyVoiceWhoForIndex;
