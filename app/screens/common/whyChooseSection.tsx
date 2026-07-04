"use client";

import DemoImage from "@/app/assets/Frame 73.png";
import QuoteIcon from "@/app/assets/svg/quote.svg";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { WhyChooseSectionProps } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function WhyChooseSection({ data: { header, reasons }, classNames }: WhyChooseSectionProps) {
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
        <div
          className={twMerge(
            "overflow-hidden border border-(--border-color) bg-(--root-white-color) w-full mx-auto",
            COMMON_BORDER_RADIUS,
          )}>
          <div className="w-full h-full flex flex-col gap-10 md:gap-12 lg:gap-16 xl:gap-20 md:flex-row items-stretch justify-start p-4 lg:p-6 xl:p-10 relative">
            <div className="w-full md:w-[40%] relative z-10">
              <Image
                src={DemoImage}
                alt="Why Choose Skyphr"
                title="Why Choose Skyphr"
                width={500}
                height={500}
                className={twMerge("object-cover w-full h-full", COMMON_BORDER_RADIUS)}
              />
            </div>
            <div className="w-full md:w-[60%] relative z-10">
              <div className="w-full h-full flex flex-col items-start justify-center gap-6 md:gap-10 relative z-10">
                <div className="w-full">
                  {header?.title?.map((titleRow, rowIndex) => (
                    <h2
                      className="flex flex-wrap items-start justify-start gap-2 lg:gap-4 font-instrument-sans text-(--text-main-color) text-[20px] md:text-2xl lg:text-3xl xl:text-[34px] font-bold"
                      key={rowIndex}>
                      {titleRow?.map((chunk, index) => {
                        return (
                          <span
                            className={twMerge(
                              "font-instrument-sans reveal-text-animation",
                              chunk?.variant === "italic" && "italic font-semibold font-playfair-display",
                              chunk?.classNames,
                            )}
                            key={index}>
                            {chunk.text.trim()}
                          </span>
                        );
                      })}
                    </h2>
                  ))}
                  {header?.description?.length !== 0 && (
                    <div className="w-full flex flex-col items-start justify-start gap-4 pt-5">
                      {header?.description?.map((description, index) => (
                        <p
                          className="lg:max-w-[90%] text-pretty text-start mr-auto text-sm sm:text-base lg:text-lg reveal-text-animation"
                          key={index}>
                          {description?.map((chunk, chunkIndex) => {
                            return (
                              <span className={twMerge(chunk?.classNames)} key={chunkIndex}>
                                {chunk.text}
                              </span>
                            );
                          })}
                        </p>
                      ))}
                    </div>
                  )}
                  {reasons && (
                    <div className="pt-5">
                      <ul className="flex flex-col gap-2">
                        {reasons.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 font-inter text-sm leading-5 text-(--text-secondary-color) reveal-text-animation">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-(--cta-button-background)" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <Image
                src={QuoteIcon}
                alt="Quote Icon"
                title="Quote Icon"
                width={280}
                height={225}
                className="absolute top-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
