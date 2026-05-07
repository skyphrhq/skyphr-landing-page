"use client";
import ServiceHeroImage from "@/app/assets/webp/skyphr-service-hero.webp";
import CTAButton from "@/app/components/common/ctaButton";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
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
    <div className={twMerge("w-full h-fit relative overflow-hidden pt-50 pb-30", classNames)}>
      <div className="skyphr-container">
        <div ref={animationContainer} className="w-ful h-full relative z-20 flex items-center justify-center">
          <div className="w-1/2">
            <div className="flex flex-col items-start justify-start gap-2">
              {data?.header?.title?.map((title, index) => (
                <h1
                  className="font-instrument-sans text-5xl font-bold tracking-tight text-(--text-main-color)  reveal-animation"
                  key={index}>
                  {title?.map((chunk, chunkIndex) => (
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
                </h1>
              ))}
            </div>
            {data?.header?.description?.map((desc, index) => (
              <p
                className="font-instrument-sans text-lg max-w-xl font-medium text-pretty text-start pt-4 text-(--text-main-color)  reveal-animation"
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
          <div className="w-1/2">
            <Image
              src={ServiceHeroImage}
              width={800}
              height={600}
              alt="Services Hero"
              loading="eager"
              className="w-full h-full object-contain select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSectionHero;
