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
    <section
      ref={containerRef}
      className={twMerge("w-full h-auto bg-(--about-us-card-bg)", COMMON_SECTION_PADDING, classNames)}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data.header} className="px-0!" />

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card, index) => {
            return (
              <div key={card.title} className="reveal-animation">
                <div
                  className={twMerge(
                    "group h-full border border-(--border-color) bg-(--root-white-color) p-5 md:p-7 relative overflow-hidden group",
                    COMMON_BORDER_RADIUS,
                  )}>
                  <div className="w-full h-full relative z-10">
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
                    {card?.list && (
                      <div className="mt-3">
                        <span className="font-instrument-sans font-semibold text-sm leading-6 text-(--text-main-color) md:text-base md:leading-7">
                          {card.list?.title}
                        </span>
                        <ul className="mt-2 flex flex-col gap-2">
                          {card.list.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 font-inter text-sm leading-5 text-(--text-secondary-color)">
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-(--cta-button-background)" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <span className="bg-(--bg-blue-shade) flex absolute top-0 left-0 w-full h-full opacity-10 group-hover:opacity-20 transition-all"></span>
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
