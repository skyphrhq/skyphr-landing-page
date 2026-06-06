"use client";

import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { OurApproachSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { FaCode, FaRegCompass, FaRegLightbulb, FaRocket } from "react-icons/fa";

const ICON_SIZE_CLASSNAMES = "w-4 h-4 sm:w-6 sm:h-6 sm:min-w-g sm:min-h-6 text-gray-800";
const ICON_CONTAINER_SIZE_CLASSNAMES = "w-9 h-9 sm:w-14 sm:h-14 sm:min-w-14 sm:min-h-14 md:w-16 md:h-16";

function OurApproachSection({ data, classNames }: OurApproachSectionInterface) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const titleSec = gsap.utils.toArray(".reveal-text-animation");
      const getTitleAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);
    },
    { scope: sectionRef },
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(circleRef.current, {
        rotation: 45,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className={twMerge("overflow-hidden", COMMON_SECTION_PADDING, classNames)}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data?.header} className="px-0!" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-25">
          {/* Left Side: Circular Animation */}
          <div className="w-full lg:w-1/2 max-w-150 flex justify-center relative">
            <div className="relative min-w-[95%] min-h-[95%] aspect-square flex items-center justify-center">
              {/* Rotating Ring Container */}
              <div
                ref={circleRef}
                className="absolute inset-0 rounded-full p-1 sm:p-3 bg-[conic-gradient(from_0deg,#d8b4fe,#fef08a,#fbcfe8,#c4b5fd,#d8b4fe)]">
                <div className="w-full h-full bg-white rounded-full relative">
                  {/* Inner Dashed Border */}
                  <div className="absolute inset-6 sm:inset-12 rounded-full border-2 border-dashed border-gray-200"></div>

                  {/* Icons on the ring */}
                  {/* 1. Discovery */}
                  <div
                    className={twMerge(
                      "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-purple-50",
                      ICON_CONTAINER_SIZE_CLASSNAMES,
                    )}>
                    <FaRegCompass className={ICON_SIZE_CLASSNAMES} />
                  </div>

                  {/* 2. Design */}
                  <div
                    className={twMerge(
                      "absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-yellow-50",
                      ICON_CONTAINER_SIZE_CLASSNAMES,
                    )}>
                    <FaRegLightbulb className={ICON_SIZE_CLASSNAMES} />
                  </div>

                  {/* 3. Development */}
                  <div
                    className={twMerge(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-pink-50",
                      ICON_CONTAINER_SIZE_CLASSNAMES,
                    )}>
                    <FaCode className={ICON_SIZE_CLASSNAMES} />
                  </div>

                  {/* 4. Launch */}
                  <div
                    className={twMerge(
                      "absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-indigo-50",
                      ICON_CONTAINER_SIZE_CLASSNAMES,
                    )}>
                    <FaRocket className={ICON_SIZE_CLASSNAMES} />
                  </div>

                  {/* Little dots on the dashed line */}
                  <div className="absolute top-6 sm:top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-300"></div>
                  <div className="absolute top-1/2 right-6 sm:right-12 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-yellow-300"></div>
                  <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-pink-300"></div>
                  <div className="absolute top-1/2 left-6 sm:left-12 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-300"></div>
                </div>
              </div>

              {/* Center Text (Static) */}
              <div className="absolute z-10 text-center flex flex-col items-center justify-center min-w-[50%] min-h-[50%] aspect-auto sm:w-50 sm:h-50 bg-white rounded-full">
                <h3 className="text-[clamp(20px,3vw,26px)] sm:text-[clamp(24px,10vw,45px)] font-bold text-gray-900 mb-1 tracking-tight font-instrument-sans">
                  {data?.header?.heroHighlightedText?.textOne}
                </h3>
                <h3 className="text-[clamp(20px,3vw,26px)] sm:text-[clamp(24px,5vw,45px)] font-bold text-purple-400 mb-4 tracking-tight font-instrument-sans">
                  {data?.header?.heroHighlightedText?.textTwo}
                </h3>
                <div className="w-8 h-0.5 bg-gray-200 mb-4 rounded-full"></div>
                {data?.header?.heroHighlightedText?.description?.map((desc, index) => (
                  <p
                    key={index}
                    className="text-xs sm:text-[clamp(12px,3vw,20px)] text-gray-500 font-medium font-instrument-sans">
                    {desc.text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Steps */}
          <div className="w-full lg:w-1/2 grow">
            {data?.steps.map((step, index) => (
              <div key={index} className="flex flex-col xs:flex-row gap-6 items-start relative pb-8 last:pb-0">
                <div
                  className={twMerge(
                    `w-12 h-12 md:w-16 md:h-16 shrink-0 flex items-center justify-center border border-gray-100/50 ${step.iconBgColor}`,
                    COMMON_BORDER_RADIUS,
                  )}>
                  {step.icon}
                </div>

                <div className="pt-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h4 className="text-xl font-bold text-gray-900 tracking-tight">{step.title}</h4>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurApproachSection;
