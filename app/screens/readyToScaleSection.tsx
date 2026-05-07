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
    <div className={twMerge("w-full py-30", classNames)}>
      <div className="skyphr-container">
        <div className="w-full h-auto px-10 py-20 rounded-2xl relative border border-(--border-color) bg-(--root-white-color) overflow-hidden flex flex-col items-center gap-10">
          <HeroBgAbstract />
          <div
            ref={animationContainer}
            className="w-ful h-full relative z-20 flex flex-col items-center max-w-4xl mx-auto justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              {data?.header?.title?.map((text, index) => (
                <h2
                  key={index}
                  className="reveal-text-animation font-instrument-sans text-5xl font-bold tracking-tight text-(--text-main-color)">
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
                className="reveal-text-animation font-instrument-sans text-base font-medium text-pretty text-center pt-4 text-(--text-main-color) max-w-[65%]">
                {text?.map((word, wordIndex) => (
                  <span key={wordIndex} className={twMerge("block", word?.classNames)}>
                    {word?.text}
                  </span>
                ))}
              </p>
            ))}

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
