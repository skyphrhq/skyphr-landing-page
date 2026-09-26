"use client";

import ProcessStepCard from "@/app/components/processStepCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { DevelopmentProcessSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function DevelopmentProcessSection({ data, classNames }: DevelopmentProcessSectionInterface) {
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
      <div className="skyphr-container flex items-stretch flex-col gap-10 lg:flex-row lg:gap-16 xl:gap-20">
        <div className="lg:sticky top-30 self-start w-full lg:w-1/2">
          {data.header.title.map((titleRow, rowIndex) => (
            <h2
              className="flex flex-wrap items-center gap-2 font-instrument-sans font-bold leading-tight text-(--text-main-color) text-[28px] md:text-3xl lg:text-[32px] xl:text-[45px]"
              key={rowIndex}>
              {titleRow.map((chunk, index) => (
                <span
                  className={twMerge(
                    "font-instrument-sans",
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

        <div className="grow w-full lg:w-1/2">
          <ol className="space-y-7">
            {data.steps.map((step, index) => (
              <ProcessStepCard
                key={`${step.title}-${index}`}
                step={step}
                index={index}
                isLastStep={index === data.steps.length - 1}
                contentClassName="reveal-animation"
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProcessSection;
