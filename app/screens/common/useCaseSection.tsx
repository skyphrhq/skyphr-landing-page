"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { UseCaseSectionProps } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function UseCaseSection({ data, classNames }: UseCaseSectionProps) {
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
        <CommonSectionHeader header={data.header} className="px-0!" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <div key={item.title} className="reveal-animation">
              <div
                className={twMerge(
                  "group h-full border border-(--border-color) bg-(--root-white-color) p-5 transition-transform duration-300 hover:-translate-y-1",
                  COMMON_BORDER_RADIUS,
                )}>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="flex size-10 items-center justify-center rounded-full border border-(--border-color) bg-(--active-hover-link-bg) font-instrument-sans text-xs font-bold text-(--text-main-color)">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-instrument-sans text-lg font-bold text-(--text-main-color) md:text-xl">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-3 font-instrument-sans text-sm leading-6 text-(--text-secondary-color) md:text-base md:leading-7">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCaseSection;
