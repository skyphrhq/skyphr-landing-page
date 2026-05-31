"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { WhatWeBuildSectionProps } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function WhatWeBuildSection({ data, classNames }: WhatWeBuildSectionProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const titleElements = gsap.utils.toArray(".reveal-text-animation");
      const titleAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
      });
      gsap.fromTo(titleElements, titleAnimation.FROM, titleAnimation.TO);

      const revealElements = gsap.utils.toArray(".reveal-animation");
      const revealAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 65%",
        end: "bottom top",
      });
      gsap.fromTo(revealElements, revealAnimation.FROM, revealAnimation.TO);
    },
    { scope: containerRef },
  );
  return (
    <section ref={containerRef} className={twMerge("w-full h-auto", COMMON_SECTION_PADDING, classNames)}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data.header} className="" />

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card, index) => {
            return (
              <div key={card.title} className="reveal-animation">
                <div
                  className={twMerge(
                    "group h-full border border-(--border-color) bg-(--root-white-color) p-5 transition-transform duration-300 hover:-translate-y-1 md:p-7",
                    COMMON_BORDER_RADIUS,
                  )}>
                  <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-(--border-color) bg-(--active-hover-link-bg)">
                    <span className="font-instrument-sans text-sm font-bold text-(--text-main-color)">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-instrument-sans text-xl font-bold text-(--text-main-color) md:text-[22px]">
                    {card.title}
                  </h3>

                  <p className="mt-3 font-instrument-sans text-sm leading-6 text-(--text-secondary-color) md:text-base md:leading-7">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatWeBuildSection;
