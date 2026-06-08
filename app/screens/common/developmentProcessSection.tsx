"use client";

import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
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
      <div className="skyphr-container grid items-stretch grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
        <div className="lg:sticky top-30 self-start">
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

        <div className="grow">
          <ol className="space-y-7">
            {data.steps.map((step, index) => {
              const stepNumber = String(index + 1).padStart(2, "0");
              const isLastStep = index === data.steps.length - 1;

              return (
                <li
                  key={`${step.title}-${stepNumber}`}
                  className={twMerge(
                    "relative flex gap-4 bg-(--about-us-card-bg) px-4 py-5 sm:gap-5 ",
                    COMMON_BORDER_RADIUS,
                  )}>
                  <div className="relative flex shrink-0 flex-col items-center">
                    <span className="relative z-30 flex size-11 items-center justify-center rounded-full border border-(--border-color) bg-(--root-white-color) font-instrument-sans text-sm font-bold text-(--text-main-color) sm:size-12">
                      {stepNumber}
                    </span>

                    {!isLastStep && (
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-11 z-20 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-(--border-color) sm:top-12"
                      />
                    )}
                  </div>

                  <div className="min-w-0 pb-1 reveal-animation">
                    <h3 className="font-instrument-sans text-lg font-bold leading-snug text-(--text-main-color) md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-instrument-sans text-sm leading-6 text-(--text-secondary-color) md:text-base md:leading-7">
                      {step.description}
                    </p>
                    {step?.list && (
                      <div className="mt-3">
                        <span className="font-instrument-sans font-semibold text-sm leading-6 text-(--text-main-color) md:text-base md:leading-7">
                          {step.list?.title}
                        </span>
                        <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                          {step.list.items.map((item) => (
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
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProcessSection;
