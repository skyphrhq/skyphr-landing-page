"use client";
import ProcessStepCard from "@/app/components/processStepCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { CreateScrollTrigger } from "@/app/utils/helpers/helper";
import { SkyAiSecuritySectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { Fragment, useRef } from "react";
import { twMerge } from "tailwind-merge";

function SkyAiSecuritySection({ data, classNames }: SkyAiSecuritySectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const trigger = containerRef.current;

      // Header, then the cards with a short stagger; skipped entirely with reduced motion
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({ scrollTrigger: CreateScrollTrigger({ trigger, start: "top 70%" }) });
        timeline
          .fromTo(".security-header-reveal", COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO)
          .fromTo(
            ".security-card-reveal",
            COMMON_REVEL_ANIMATION.FROM,
            { ...COMMON_REVEL_ANIMATION.TO, stagger: 0.09 },
            "-=0.6",
          );
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      id={data.id}
      className={twMerge("w-full h-auto scroll-mt-20 bg-(--skyai-lavender-bg)", COMMON_SECTION_PADDING, classNames)}>
      <div className="skyphr-container flex items-stretch flex-col gap-10 lg:flex-row lg:gap-16 xl:gap-20">
        <div className="lg:sticky top-40 self-start w-full lg:w-1/2">
          {/* All title rows sit in one heading so crawlers read the full title, not one heading per row */}
          <h2 className="flex flex-col">
            {data.header.title.map((titleRow, rowIndex) => (
              <span
                className="flex flex-wrap items-center gap-2 lg:gap-4 font-instrument-sans font-bold leading-tight text-(--text-main-color) text-[28px] md:text-3xl lg:text-[32px] xl:text-[50px] 2xl:text-[58px]"
                key={rowIndex}>
                {/* The trailing " " is invisible between flex items but keeps real word spaces in the HTML for SEO */}
                {titleRow.map((chunk, index) => (
                  <Fragment key={index}>
                    <span
                      className={twMerge(
                        "font-instrument-sans",
                        chunk.variant === "italic" &&
                          "italic! font-bold! font-playfair-display text-(--cta-button-background)",
                        chunk.classNames,
                      )}>
                      {chunk.text.trim()}
                    </span>{" "}
                  </Fragment>
                ))}
              </span>
            ))}
          </h2>

          {data.header.description?.map((description, index) => (
            <p
              className="mt-5 max-w-140 font-instrument-sans text-base leading-7 text-(--text-secondary-color) md:text-lg"
              key={index}>
              {description.map((chunk, chunkIndex) => (
                <span className={twMerge(chunk.classNames)} key={chunkIndex}>
                  {chunk.text}
                </span>
              ))}
            </p>
          ))}
        </div>

        <div className="grow w-full lg:w-1/2">
          <ol className="space-y-7">
            {data.cards.map((card, index) => (
              <ProcessStepCard
                key={`${card.title}-${index}`}
                step={card}
                index={index}
                variant="icon"
                icon={card.icon}
                className="security-card-reveal reveal-animation"
                isLastStep={index === data.cards.length - 1}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default SkyAiSecuritySection;
