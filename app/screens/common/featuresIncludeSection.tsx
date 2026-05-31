"use client";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { FeaturesIncludeSectionProps } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

function FeaturesIncludeSection({ data, classNames }: FeaturesIncludeSectionProps) {
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
      <div className="skyphr-container grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16 xl:gap-20">
        <div className="lg:sticky lg:top-30">
          {data.header.title.map((titleRow, rowIndex) => (
            <h2
              className="flex flex-wrap items-center gap-2 font-instrument-sans text-[32px] font-bold leading-tight text-(--text-main-color) md:text-[42px] xl:text-[52px]"
              key={rowIndex}>
              {titleRow.map((chunk, index) => (
                <span
                  className={twMerge(
                    "font-instrument-sans reveal-text-animation",
                    chunk.variant === "italic" && "font-playfair-display italic font-semibold",
                    chunk.classNames,
                  )}
                  key={index}>
                  {chunk.text}
                </span>
              ))}
            </h2>
          ))}

          {data.header.description?.map((description, index) => (
            <p
              className="mt-5 max-w-140 font-instrument-sans text-base leading-7 text-(--text-secondary-color) md:text-lg"
              key={index}>
              {description.map((chunk, chunkIndex) => (
                <span className={twMerge(chunk.classNames)} key={chunkIndex}>
                  {chunk.text}
                </span>
              ))}
            </p>
          ))}
        </div>

        <div
          className={twMerge(
            "border border-(--border-color) bg-(--root-white-color) p-4 md:p-6",
            COMMON_BORDER_RADIUS,
          )}>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {data.features.map((feature) => (
              <li
                key={feature}
                className={twMerge(
                  "flex min-h-15 items-center gap-3 border border-(--border-color) bg-(--active-hover-link-bg) px-4 py-3 reveal-animation",
                  COMMON_BORDER_RADIUS,
                )}>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-(--root-white-color) text-(--cta-button-background)">
                  <FaCheck aria-hidden="true" className="size-3" />
                </span>

                <span className="font-instrument-sans text-sm font-semibold leading-5 text-(--text-main-color) md:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FeaturesIncludeSection;
