"use client";
import CTAButton from "@/app/components/common/ctaButton";
import HeroBgAbstract from "@/app/components/heroBgAbstract";
import TrustedPill from "@/app/components/trustedPill";
import { gsap } from "@/app/lib/gsap";
import { HERO_REVEAL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { HeroSectionElementInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function HeroSectionElement({ data, classNames }: HeroSectionElementInterface) {
  const animationContainer = useRef(null);
  // The <h1> rows are the LCP element: they only rise (`.skyphr-hero-rise`, never hidden); the rest fades in (`.skyphr-hero-fade`)
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".skyphr-hero-rise, .skyphr-hero-fade");
      gsap.to(elements, HERO_REVEAL_ANIMATION);
    },
    { scope: animationContainer },
  );

  return (
    <div
      className={twMerge(
        "w-full h-fit relative bg-white overflow-hidden pt-32 pb-20 px-4 xl:pt-55 xl:pb-35",
        classNames,
      )}>
      <HeroBgAbstract />
      <div
        ref={animationContainer}
        className="w-ful h-full relative z-20 flex flex-col items-center max-w-5xl mx-auto justify-center">
        {data?.trustedBy && data?.trustedBy?.length > 0 && <TrustedPill className="skyphr-hero-fade mb-10 xl:mb-14" />}
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="flex flex-col items-center justify-center gap-2">
            {data?.header?.title?.map((titleRow, rowIndex) => (
              <span
                className="skyphr-hero-rise font-instrument-sans text-center text-4xl lg:text-5xl xl:text-[62px] 2xl:text-[72px] font-bold tracking-tight text-(--text-main-color)"
                key={rowIndex}>
                {titleRow?.map((chunk, index) => {
                  return (
                    <span
                      className={twMerge(
                        "font-instrument-sans",
                        chunk?.classNames,
                        chunk?.variant === "italic" &&
                          "italic font-bold! font-playfair-display text-(--cta-button-background)",
                      )}
                      key={index}>
                      {chunk.text}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>
        </div>
        <div ref={animationContainer} className="w-full flex flex-col items-start justify-start gap-5">
          {data?.header?.description?.map((description, index) => (
            <p
              className="skyphr-hero-fade font-instrument-sans text-base lg:text-lg max-w-3xl font-medium text-pretty text-center pt-5 text-(--text-main-color) mx-auto"
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

        {data?.ctas && (
          <div
            ref={animationContainer}
            className="w-full flex flex-col xs:flex-row items-center justify-center gap-6 max-w-62  xs:max-w-xl mx-auto pt-10 @container">
            {data?.ctas?.map((button, index) => (
              <CTAButton
                key={index}
                btnStyle={button.variant as "CTA_PRIMARY" | "CTA_SECONDARY"}
                className={twMerge(
                  button?.classNames,
                  "skyphr-hero-fade w-full @max-xs:max-w-62! @max-xs:min-w-62! xs:w-fit",
                )}
                href={button.href as string}
                target={button.target as "_blank" | "_self" | "_parent" | "_top"}
                rel={button.rel as string}>
                {button.label}
              </CTAButton>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSectionElement;
