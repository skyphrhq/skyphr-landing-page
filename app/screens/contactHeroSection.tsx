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
    <div className={twMerge("w-full h-fit relative bg-white overflow-hidden pt-55 pb-35", classNames)}>
      <Image
        src={HumanRoboHand}
        alt="Human Robo Hand"
        width={1500}
        height={982}
        className="w-full h-full pointer-events-none select-none absolute object-cover opacity-8 top-0 right-0 z-10"
        loading="eager"
      />
      <div
        ref={animationContainer}
        className="w-ful h-full relative z-20 flex flex-col items-center max-w-4xl mx-auto justify-center">
        <div className="flex flex-col items-center justify-center leading-[1.1]">
          {data?.header?.title?.map((title, index) => {
            return (
              <h1
                key={index}
                className="reveal-animation font-instrument-sans text-6xl font-bold tracking-tight text-(--text-main-color)">
                {title.map((text, index) => {
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
          <div className="w-full flex items-center justify-center gap-6 max-w-xl mx-auto pt-10">
            {data?.ctas?.map((cta, index) => {
              return (
                <CTAButton
                  key={index}
                  btnStyle={cta.variant}
                  className={twMerge("reveal-animation", cta.classNames)}
                  onClick={onStartProjectClick}>
                  {cta.label}
                </CTAButton>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactHeroSection;
