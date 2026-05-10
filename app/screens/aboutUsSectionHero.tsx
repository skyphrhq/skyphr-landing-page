"use client";
import HeroBgAbstract from "@/app/components/heroBgAbstract";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { AboutUsHeroSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function AboutUsSectionHeroElem({ data, classNames }: AboutUsHeroSectionInterface) {
  const animationContainer = useRef(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );

  return (
    <div className={twMerge("w-full h-fit relative pt-55 pb-35 overflow-hidden", classNames)}>
      <HeroBgAbstract />

      <div
        ref={animationContainer}
        className="w-full h-full relative z-20 flex flex-col items-center max-w-4xl mx-auto justify-center">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          {data?.header?.title?.map((text, index) => (
            <h1
              key={index}
              className="reveal-animation font-instrument-sans text-5xl font-bold tracking-tight text-(--text-main-color)">
              {text?.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={`${word?.variant === "italic" ? "font-playfair-display italic font-semibold" : ""}`}>
                  {word?.text}
                </span>
              ))}
            </h1>
          ))}
        </div>
        {data?.header?.description?.map((text, index) => (
          <p
            key={index}
            className="reveal-animation font-instrument-sans text-lg max-w-2xl font-medium text-pretty text-center pt-7.5 text-(--text-main-color)">
            {text?.map((word, wordIndex) => (
              <span key={wordIndex} className={twMerge("block", word?.classNames)}>
                {word?.text}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutUsSectionHeroElem;
