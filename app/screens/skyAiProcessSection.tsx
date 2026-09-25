"use client";
import SkyAiProcessStep from "@/app/components/skyAiProcessStep";
import SkyAiSectionBadge from "@/app/components/skyAiSectionBadge";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { CreateScrollTrigger } from "@/app/utils/helpers/helper";
import { SkyAiProcessSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function SkyAiProcessSection({ data, classNames }: SkyAiProcessSectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const trigger = containerRef.current;

      // Header, then the steps with a short stagger, then the strip; skipped entirely with reduced motion
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({ scrollTrigger: CreateScrollTrigger({ trigger, start: "top 70%" }) });
        timeline
          .fromTo(".process-header-reveal", COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO)
          .fromTo(".process-step-reveal", COMMON_REVEL_ANIMATION.FROM, { ...COMMON_REVEL_ANIMATION.TO, stagger: 0.09 }, "-=0.6")
          .fromTo(".process-strip-reveal", COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO, "-=0.6");
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      id={data.id}
      className={twMerge("w-full h-auto scroll-mt-20 bg-(--root-white-color)", COMMON_SECTION_PADDING, classNames)}>
      <div className="skyphr-container">
        <div className="flex flex-col items-center text-center pb-12 md:pb-16 xl:pb-20">
          <SkyAiSectionBadge label={data.badge} className="process-header-reveal mb-6" />

          <h2 className="font-instrument-sans text-(--text-main-color) text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.05] text-balance">
            {data.header.title.map((titleRow, rowIndex) => (
              <span className="block" key={rowIndex}>
                {titleRow.map((chunk, index) => (
                  <span className={twMerge("inline-block process-header-reveal", chunk?.classNames)} key={index}>
                    {chunk.text}
                  </span>
                ))}
              </span>
            ))}
          </h2>

          {data.header.description?.map((description, index) => (
            <p
              className="process-header-reveal max-w-160 font-instrument-sans text-base lg:text-lg xl:text-xl text-pretty text-(--text-secondary-color) pt-5"
              key={index}>
              {description.map((chunk, chunkIndex) => (
                <span className={twMerge(chunk?.classNames)} key={chunkIndex}>
                  {chunk.text}
                </span>
              ))}
            </p>
          ))}
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data.steps.map((step, index) => (
            <SkyAiProcessStep
              key={step.title}
              step={step}
              index={index}
              deliverablesLabel={data.deliverablesLabel}
              className="process-step-reveal"
            />
          ))}
        </ol>

        <div className="process-strip-reveal mt-4 md:mt-8 lg:mt-16 xl:mt-20 rounded-[20px] border border-(--skyai-lavender-border) bg-(--skyai-lavender-bg) px-6 py-6 lg:px-8 lg:py-7">
          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-center lg:gap-0">
            <p
              id="skyai-process-principles-label"
              className="font-instrument-sans text-xs font-semibold uppercase tracking-[0.12em] text-(--text-secondary-color) lg:pr-6 xl:pr-8">
              {data.principles.label}
            </p>
            <ul
              aria-labelledby="skyai-process-principles-label"
              className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-0">
              {data.principles.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 font-instrument-sans text-[15px] xl:text-base text-(--text-main-color) lg:border-l lg:border-(--skyai-periwinkle-light) lg:px-6 xl:px-8 lg:last:pr-0">
                  <span
                    aria-hidden="true"
                    className="flex shrink-0 text-xl text-(--cta-button-background) [&>svg]:size-5">
                    {item.icon}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkyAiProcessSection;
