"use client";
import CTAButton from "@/app/components/common/ctaButton";
import SkyVoiceCallConsole from "@/app/components/skyVoiceCallConsole";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { SkyVoiceHeroSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { LuArrowRight } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

function SkyVoiceHeroSection({ data, classNames }: SkyVoiceHeroSectionInterface) {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );

  return (
    <div
      ref={animationContainer}
      id={data.id}
      className={twMerge(
        "relative isolate w-full h-auto overflow-hidden pt-36 pb-18 text-(--text-main-color) sm:pt-40 sm:pb-24 xl:pt-48",
        classNames,
      )}>
      {/* Faint vertical grid, lavender wash, two blurred glows and film grain */}
      <div aria-hidden="true" className="skyai-voice-bg absolute inset-0 -z-10">
        <span className="skyai-voice-blob skyai-voice-blob-center" />
        <span className="skyai-voice-blob skyai-voice-blob-corner" />
        <span className="skyai-voice-grain" />
      </div>

      <div className="skyphr-container">
        <div className="mx-auto flex max-w-295 flex-col items-center text-center">
          <h1 className="flex flex-col items-center justify-center gap-2">
            {data?.header?.title?.map((titleRow, rowIndex) => (
              <span
                className="font-instrument-sans text-center text-4xl lg:text-5xl xl:text-[75px] 2xl:text-[92px] font-bold tracking-tight text-(--text-main-color)"
                key={rowIndex}>
                {titleRow?.map((chunk, index) => {
                  return (
                    <span
                      className={twMerge(
                        "font-instrument-sans reveal-animation",
                        chunk?.classNames,
                        chunk?.variant === "italic" &&
                          "italic font-bold! font-playfair-display skyai-voice-headline-accent",
                      )}
                      key={index}>
                      {chunk.text}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          {data.header.description?.map((description, index) => (
            <p
              className="mt-6 max-w-145 font-instrument-sans text-base leading-[1.6] text-pretty text-(--skyai-voice-muted) sm:text-lg reveal-animation"
              key={index}>
              {description.map((chunk, chunkIndex) => (
                <span className={twMerge(chunk?.classNames)} key={chunkIndex}>
                  {chunk.text}
                </span>
              ))}
            </p>
          ))}

          {data.ctas && data.ctas.length > 0 && (
            <div className=" mt-8 flex w-full flex-col items-center justify-center gap-3 xs:w-auto xs:flex-row xs:flex-wrap">
              {data.ctas.map((button, index) => (
                <CTAButton
                  key={index}
                  btnStyle={button.variant}
                  href={button.href}
                  target={button.target}
                  rel={button.rel}
                  icon={<LuArrowRight aria-hidden="true" />}
                  className={twMerge("w-full min-w-0 xs:w-fit xs:min-w-[270px] reveal-animation", button.classNames)}>
                  {button.label}
                </CTAButton>
              ))}
            </div>
          )}

          <SkyVoiceCallConsole data={data.console} className=" mt-11 sm:mt-16 reveal-animation" />
        </div>
      </div>
    </div>
  );
}

export default SkyVoiceHeroSection;
