"use client";
import ProcessStepCard from "@/app/components/processStepCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { CreateScrollTrigger } from "@/app/utils/helpers/helper";
import { SkyAiSecuritySectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
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
          <h2
            id="skyai-security-heading"
            className="font-instrument-sans text-(--text-main-color) text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tighter leading-[1.05] text-balance">
            {data.header.title.map((titleRow, rowIndex) => (
              <span className="block" key={rowIndex}>
                {titleRow.map((chunk, index) => (
                  <span className={twMerge("inline-block security-header-reveal", chunk?.classNames)} key={index}>
                    {chunk.text}
                  </span>
                ))}
              </span>
            ))}
          </h2>

          {data.header.description?.map((description, index) => (
            <p
              className="security-header-reveal max-w-140 font-instrument-sans text-base lg:text-lg text-pretty text-(--text-secondary-color) pt-5"
              key={index}>
              {description.map((chunk, chunkIndex) => (
                <span className={twMerge(chunk?.classNames)} key={chunkIndex}>
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
