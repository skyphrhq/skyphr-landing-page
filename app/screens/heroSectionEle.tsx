"use client";
import CTAButton from "@/app/components/common/ctaButton";
import HeroBgAbstract from "@/app/components/heroBgAbstract";
import TrustedPill from "@/app/components/trustedPill";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { HeroSectionElementInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function HeroSectionElement({ data, classNames }: HeroSectionElementInterface) {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );

  return (
    <div className={twMerge("w-full h-fit relative bg-white overflow-hidden pt-32 pb-20 px-4 xl:pt-55 xl:pb-35", classNames)}>
      <HeroBgAbstract />
      <div
        ref={animationContainer}
        className="w-ful h-full relative z-20 flex flex-col items-center max-w-4xl mx-auto justify-center">
        {data?.trustedBy && data?.trustedBy?.length > 0 && <TrustedPill className="reveal-animation mb-10 xl:mb-14" />}
        <div className="flex flex-col items-center justify-center gap-2">
          {data?.header?.title?.map((titleRow, rowIndex) => (
            <h1
              className="font-instrument-sans text-4xl text-center xl:text-6xl font-bold tracking-tight text-(--text-main-color)"
              key={rowIndex}>
              {titleRow?.map((chunk, index) => {
                return (
                  <span
                    className={twMerge(
                      "font-instrument-sans reveal-animation",
                      chunk?.classNames,
                      "reveal-animation",
                      chunk?.variant === "italic" && "italic font-semibold font-playfair-display",
                    )}
                    key={index}>
                    {chunk.text}
                  </span>
                );
              })}
            </h1>
          ))}
        </div>

        {data?.header?.description?.map((description, index) => (
          <p
            className="reveal-animation font-instrument-sans text-base lg:text-lg max-w-xl font-medium text-pretty text-center pt-4 text-(--text-main-color)"
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
        {data?.ctas && (
          <div className="w-full flex flex-col xs:flex-row items-center justify-center gap-6 max-w-62  xs:max-w-xl mx-auto pt-10 @container">
            {data?.ctas?.map((button, index) => (
              <CTAButton
                key={index}
                btnStyle={button.variant as "CTA_PRIMARY" | "CTA_SECONDARY"}
                className={twMerge(button?.classNames, "reveal-animation w-full @max-xs:max-w-62! @max-xs:min-w-62! xs:w-fit")}
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
