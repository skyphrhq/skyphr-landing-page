"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { TechnologyStackSectionProps } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function TechnologyStackSection({ data, classNames }: TechnologyStackSectionProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const titleElements = gsap.utils.toArray(".reveal-text-animation");
      const titleAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
      });
      gsap.fromTo(titleElements, titleAnimation.FROM, titleAnimation.TO);

      const revealElements = gsap.utils.toArray(".reveal-animation");
      const revealAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 65%",
        end: "bottom top",
      });
      gsap.fromTo(revealElements, revealAnimation.FROM, revealAnimation.TO);
    },
    { scope: containerRef },
  );
  return (
    <section ref={containerRef} className={twMerge("w-full h-auto", COMMON_SECTION_PADDING, classNames)}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data.header} />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {data.groups.map((group) => (
            <div
              key={group.title}
              className={twMerge(
                "border border-(--border-color) bg-(--root-white-color) p-5 md:p-6 reveal-animation",
                COMMON_BORDER_RADIUS,
              )}>
              <h3 className="font-instrument-sans text-xl font-bold text-(--text-main-color) md:text-[22px]">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.technologies.map((technology) => (
                  <div
                    key={technology.name}
                    className="flex items-center gap-2 rounded-full border border-(--border-color) bg-(--active-hover-link-bg) px-4 py-2">
                    {technology.logoSrc && (
                      <Image
                        src={technology.logoSrc}
                        alt={technology.logoAlt || technology.name}
                        title={technology.logoAlt || technology.name}
                        width={20}
                        height={20}
                        className="size-5 object-contain"
                      />
                    )}

                    <span className="font-instrument-sans text-sm font-semibold text-(--text-main-color)">
                      {technology.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologyStackSection;
