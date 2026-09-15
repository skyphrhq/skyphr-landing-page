"use client";
import HumanRoboHand from "@/app/assets/webp/skyphr-robo-human-hand.webp";
import CTAButton from "@/app/components/common/ctaButton";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { ContactHeroSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function ContactHeroSection({ data, onStartProjectClick, classNames }: ContactHeroSectionInterface) {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );

  return (
    <div className={twMerge("w-full h-fit relative bg-white overflow-hidden pt-32 pb-20 xl:pt-55 xl:pb-35", classNames)}>
      <Image
        src={HumanRoboHand}
        alt=""
        title=""
        width={1500}
        height={982}
        className="w-full h-full pointer-events-none select-none absolute object-cover opacity-8 top-0 right-0 z-10"
        loading="eager"
      />
      <div className="skyphr-container">
        <div
          ref={animationContainer}
          className="w-ful h-full relative z-20 flex flex-col items-center max-w-4xl mx-auto justify-center">
          <div className="flex flex-col items-center justify-center leading-[1.1]">
            {data?.header?.title?.map((title, rowIndex) => {
              return (
                <h1
                  className="font-instrument-sans text-center text-4xl  xl:text-6xl font-bold tracking-tight text-(--text-main-color)"
                  key={rowIndex}>
                  {title?.map((chunk, index) => {
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
              );
            })}
          </div>
          {data?.header?.description?.map((description, index) => {
            return (
              <p
                key={index}
                className={twMerge(
                  "reveal-animation font-instrument-sans text-xl max-w-xl font-medium text-pretty text-center pt-4 text-(--text-main-color)",
                )}>
                {description.map((text, index) => {
                  return (
                    <span
                      key={index}
                      className={twMerge(
                        "font-playfair-display italic font-semibold text-(--text-main-color)",
                        text.variant === "italic" ? "italic" : "",
                        text.classNames,
                      )}>
                      {text.text}
                    </span>
                  );
                })}
              </p>
            );
          })}
          {data?.ctas && (
            <div className="w-full flex flex-col xs:flex-row items-center justify-center gap-6 max-w-xl mx-auto pt-10">
              {data?.ctas?.map((cta, index) => {
                return (
                  <CTAButton
                    key={index}
                    btnStyle={cta.variant}
                    className={twMerge("reveal-animation w-full xs:w-auto max-w-[60%] xs:max-w-max", cta.classNames)}
                    onClick={!cta?.href ? onStartProjectClick : undefined}
                    href={cta.href as string}
                    target={cta.target as "_blank" | "_self" | "_parent" | "_top"}
                    rel={cta.rel as string}>
                    {cta.label}
                  </CTAButton>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactHeroSection;
