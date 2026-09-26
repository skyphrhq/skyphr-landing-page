"use client";
import BgAbstractImage from "@/app/assets/webp/skyphr-hero-background.webp";
import CTAButton from "@/app/components/common/ctaButton";
import SparkleIcon from "@/app/components/common/sparkleIcon";
import SkyAiNetworkLines from "@/app/components/skyAiNetworkLines";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { SkyAiHeroSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { twMerge } from "tailwind-merge";

function SkyAiHeroSection({ data, classNames }: SkyAiHeroSectionInterface) {
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
      className={twMerge(
        "w-full h-fit relative bg-white overflow-hidden pt-44 pb-20 px-4 xl:pt-58 xl:pb-35",
        classNames,
      )}>
      {/* Same stripe texture as the other heroes, without their purple wash */}
      <Image
        width={1500}
        height={1000}
        src={BgAbstractImage}
        alt=""
        aria-hidden="true"
        className="w-full h-full absolute inset-0 z-0 opacity-70 object-cover pointer-events-none"
        loading="eager"
        fetchPriority="high"
      />
      <SkyAiNetworkLines />

      <div
        ref={animationContainer}
        className="w-full h-full relative z-20 flex flex-col items-center max-w-5xl mx-auto justify-center">
        <div className="relative">
          {/* Lavender glow behind the wordmark only; fully transparent well above the chips */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(1100px,170vw)] h-80 md:h-120 pointer-events-none bg-[radial-gradient(closest-side,rgba(105,116,226,0.26),rgba(105,116,226,0.1)_55%,transparent)]"
          />
          {/* Decorative wordmark, the brand name is also part of the h1 below */}
          <div aria-hidden="true" className="relative select-none">
            <p className="font-instrument-sans font-bold tracking-tighter leading-none text-7xl xs:text-8xl md:text-9xl xl:text-[10rem] text-(--text-main-color)">
              <span className="skyai-wordmark-shadow reveal-animation ">{data.wordmark.text}</span>
              <span className="skyai-wordmark-shadow bg-linear-to-br from-[#9aa1f5] via-(--cta-button-background) to-[#6d3fe0] bg-clip-text text-transparent reveal-animation ">
                {data.wordmark.highlightedText}
              </span>
              {/* Zero-width anchor right after the "I": the sparkle sits above the letter like the dot of an "i" */}
              <span className="relative inline-block w-0 reveal-animation ">
                <span className="skyai-sparkle-anchor absolute">
                  <SparkleIcon className="skyai-sparkle block w-full h-full text-(--cta-button-background)" />
                </span>
              </span>
            </p>
          </div>
        </div>

        <h1 className="font-instrument-sans text-center text-balance text-2xl sm:text-[1.75rem] xl:text-[2rem] font-bold tracking-normal leading-snug text-(--text-main-color) pt-6">
          {data.header.title.map((titleRow, rowIndex) => (
            <span className="block" key={rowIndex}>
              {titleRow.map((chunk, index) => (
                <span
                  className={twMerge(
                    chunk?.variant === "italic" && "italic font-semibold font-playfair-display",
                    chunk?.classNames,
                    "reveal-animation ",
                  )}
                  key={index}>
                  {chunk.text}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {data.header.description?.map((description, index) => (
          <p
            className="reveal-animation font-instrument-sans text-base lg:text-lg max-w-2xl font-medium text-pretty text-center pt-4 text-(--text-secondary-color) mx-auto"
            key={index}>
            {description.map((chunk, chunkIndex) => (
              <span className={twMerge(chunk?.classNames)} key={chunkIndex}>
                {chunk.text}
              </span>
            ))}
          </p>
        ))}

        {(data.ctas || data.exploreLink) && (
          <div className="w-full flex flex-col xs:flex-row items-center justify-center gap-6 xs:gap-8 pt-10">
            {data.ctas?.map((button, index) => (
              <CTAButton
                key={index}
                btnStyle={button.variant}
                icon={<GoArrowRight className="font-semibold" />}
                className={twMerge("reveal-animation w-fit")}
                href={button.href}
                target={button.target}
                rel={button.rel}>
                {button.label}
              </CTAButton>
            ))}
            {data.exploreLink && (
              <CTAButton
                btnStyle="CTA_SECONDARY"
                icon={<GoArrowRight className="font-semibold" />}
                className={twMerge("reveal-animation w-fit")}
                href={data.exploreLink.href}
                target="_self">
                {data.exploreLink.label}
              </CTAButton>
            )}
          </div>
        )}

        {data.tags && data.tags.length > 0 && (
          <ul className="w-full flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-10 xl:pt-14">
            {data.tags.map((tag) => (
              <li
                key={tag.label}
                className="reveal-animation flex items-center gap-2.5 px-4 py-2.5 md:px-5 md:py-3 rounded-full bg-(--root-white-color) border border-(--border-color)/60 shadow-[0_4px_20px_rgba(56,70,218,0.06)] font-instrument-sans text-sm font-medium text-(--text-main-color)">
                <span className="text-lg text-(--cta-button-background)">{tag.icon}</span>
                {tag.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SkyAiHeroSection;
