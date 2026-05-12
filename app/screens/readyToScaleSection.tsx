"use client";
import CTAButton from "@/app/components/common/ctaButton";
import HeroBgAbstract from "@/app/components/heroBgAbstract";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { ReadyToScaleSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function ReadyToScaleSection({ data, classNames }: ReadyToScaleSectionInterface) {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      if (animationContainer.current) {
        const elements = gsap.utils.toArray(".reveal-text-animation");
        const { FROM, TO } = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: animationContainer.current });
        gsap.fromTo(elements, FROM, TO);
      }
    },
    { scope: animationContainer },
  );

  return (
    <div className={twMerge("w-full py-15! md:py-20! lg:py-30!", classNames)}>
      <div className="skyphr-container">
        <div className="w-full h-auto px-4 py-8 md:py-13 md:px-8 lg:px-10 lg:py-20 rounded-2xl relative border border-(--border-color) bg-(--root-white-color) overflow-hidden flex flex-col items-center gap-10">
          <HeroBgAbstract />
          <div
            ref={animationContainer}
            className="w-ful h-full relative z-20 flex flex-col items-center lg:max-w-4xl mx-auto justify-center">
            <div className="w-full h-auto flex flex-col items-center justify-center gap-5">
              <div className="flex flex-col items-center justify-center gap-2">
                {data?.header?.title?.map((text, index) => (
                  <h2
                    key={index}
                    className="reveal-text-animation font-instrument-sans text-3xl md:text-4xl text-center lg:text-5xl font-bold tracking-tight text-(--text-main-color)">
                    {text?.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={`${word?.variant === "italic" ? "font-playfair-display italic font-semibold" : ""}`}>
                        {word?.text}
                      </span>
                    ))}
                  </h2>
                ))}
              </div>

              {data?.header?.description?.map((text, index) => (
                <p
                  key={index}
                  className="reveal-text-animation font-instrument-sans text-sm md:text-base font-medium text-pretty text-center text-(--text-main-color) md:max-w-[70%] lg:max-w-[65%]">
                  {text?.map((word, wordIndex) => (
                    <span key={wordIndex} className={twMerge("pl-1", word?.classNames)}>
                      {word?.text}
                    </span>
                  ))}
                </p>
              ))}
            </div>

            <div className="w-full flex items-center justify-center gap-6 max-w-xl mx-auto pt-10">
              {data?.ctas?.map((button, index) => (
                <CTAButton
                  key={index}
                  btnStyle={button.variant as "CTA_PRIMARY" | "CTA_SECONDARY"}
                  className={twMerge(button?.classNames, "reveal-animation")}
                  href={button.href as string}
                  target={button.target as "_blank" | "_self" | "_parent" | "_top"}
                  rel={button.rel as string}>
                  {button.label}
                </CTAButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToScaleSection;
