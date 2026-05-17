"use client";

import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { OurApproachSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import { FaCode, FaRegCompass, FaRegLightbulb, FaRocket } from "react-icons/fa";

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
    <div ref={sectionRef} className={twMerge("py-15! md:py-20! xl:py-30! overflow-hidden", classNames)}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data?.header} />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-25">
          {/* Left Side: Circular Animation */}
          <div className="w-full lg:w-1/2 max-w-[600px] flex justify-center relative">
            <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] flex items-center justify-center">
              {/* Rotating Ring Container */}
              <div
                ref={circleRef}
                className="absolute inset-0 rounded-full p-[12px] bg-[conic-gradient(from_0deg,#d8b4fe,#fef08a,#fbcfe8,#c4b5fd,#d8b4fe)]">
                <div className="w-full h-full bg-white rounded-full relative">
                  {/* Inner Dashed Border */}
                  <div className="absolute inset-12 rounded-full border-2 border-dashed border-gray-200"></div>

                  {/* Icons on the ring */}
                  {/* 1. Discovery */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-purple-50">
                    <FaRegCompass className="w-6 h-6 text-gray-800" />
                  </div>

                  {/* 2. Design */}
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-yellow-50">
                    <FaRegLightbulb className="w-6 h-6 text-gray-800" />
                  </div>

                  {/* 3. Development */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-pink-50">
                    <FaCode className="w-6 h-6 text-gray-800" />
                  </div>

                  {/* 4. Launch */}
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-indigo-50">
                    <FaRocket className="w-6 h-6 text-gray-800" />
                  </div>

                  {/* Little dots on the dashed line */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-300"></div>
                  <div className="absolute top-1/2 right-12 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-yellow-300"></div>
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-pink-300"></div>
                  <div className="absolute top-1/2 left-12 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-300"></div>
                </div>
              </div>

              {/* Center Text (Static) */}
              <div className="absolute z-10 text-center flex flex-col items-center justify-center w-[200px] h-[200px] bg-white rounded-full">
                <h3 className="text-[34px] font-bold text-gray-900 mb-1 tracking-tight font-instrument-sans">
                  From Idea
                </h3>
                <h3 className="text-[34px] font-bold text-purple-400 mb-4 tracking-tight font-instrument-sans">
                  to Scale
                </h3>
                <div className="w-8 h-[2px] bg-gray-200 mb-4 rounded-full"></div>
                <p className="text-sm text-gray-500 font-medium font-instrument-sans">Strategy. Design. Build.</p>
                <p className="text-sm text-gray-500 font-medium mt-1 font-instrument-sans">Launch. Grow.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Steps */}
          <div className="w-full lg:w-1/2 grow">
            {data?.steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 items-start relative pb-8 last:pb-0">
                <div
                  className={`w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center border border-gray-100/50 ${step.iconBgColor}`}>
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
