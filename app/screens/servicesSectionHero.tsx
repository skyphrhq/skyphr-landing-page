"use client";
import CTAButton from "@/app/components/common/ctaButton";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { ServicesSectionHeroInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function ServicesSectionHero({ data, classNames }: ServicesSectionHeroInterface) {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );
  return (
    <div className={twMerge("w-full h-fit relative overflow-hidden pt-28 pb-10 px-4 xl:pt-40 xl:pb-22", classNames)}>
      <div className="skyphr-container px-0!">
        <div
          ref={animationContainer}
          className="w-ful h-full relative z-20 flex flex-col gap-10 xl:gap-20 md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-start justify-start gap-2">
              {data?.header?.title?.map((titleRow, rowIndex) => (
                <h1
                  className="font-instrument-sans text-start text-4xl xl:text-5xl font-bold tracking-tight text-(--text-main-color) flex flex-wrap items-start justify-start gap-2 lg:gap-4"
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
            <div className="w-full flex flex-col items-start justify-start gap-4 pt-4">
              {data?.header?.description?.map((desc, index) => (
                <p
                  className="font-instrument-sans text-sm sm:text-base lg:text-lg max-w-xl font-medium text-pretty text-start  text-(--text-main-color)  reveal-animation"
                  key={index}>
                  {desc?.map((chunk, chunkIndex) => (
                    <span
                      key={chunkIndex}
                      className={twMerge(
                        chunk.variant === "bold" ? "font-bold" : "",
                        chunk.variant === "italic" ? "font-italic" : "",
                        chunk.variant === "brand" ? "text-(--brand-color)" : "",
                        chunk.variant === "muted" ? "text-(--muted-color)" : "",
                      )}>
                      {chunk.text}
                    </span>
                  ))}
                </p>
              ))}
            </div>

            {data?.ctas && (
              <div className="w-full flex items-center justify-start gap-6 pt-10">
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
            )}
          </div>
          {data?.header?.heroImage && (
            <div className="w-full md:w-1/2">
              <Image
                src={data.header.heroImage.imagePath}
                width={data.header.heroImage.width}
                height={data.header.heroImage.height}
                alt={data.header.heroImage.alt}
                loading={data.header.heroImage.loading}
                className={twMerge(
                  "select-none pointer-events-none",
                  COMMON_BORDER_RADIUS,
                  data.header.heroImage.className,
                )}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesSectionHero;
