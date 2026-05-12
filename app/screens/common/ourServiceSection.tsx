"use client";
import OurServiceCardComponent from "@/app/components/ourServiceCardComponent";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { OurServiceSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function OurServiceSection({ data, classNames }: OurServiceSectionInterface) {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      if (animationContainer.current) {
        const elements = gsap.utils.toArray(".reveal-animation");
        const { FROM, TO } = COMMON_SCROLL_TRIGGER_ANIMATION({
          trigger: animationContainer.current,
          start: "top 70%",
          end: "bottom top",
        });
        gsap.fromTo(elements, FROM, TO);
      }
    },
    { scope: animationContainer },
  );

  return (
    <div
      ref={animationContainer}
      className={twMerge("w-full h-auto bg-(--about-us-card-bg) py-15! md:py-20! lg:py-30!", classNames)}>
      <div className="skyphr-container @container">
        <div className="w-full flex items-center justify-center md:sticky md:top-[30vh] overflow-hidden">
          {data?.header?.title?.map((titleRow, rowIndex) => (
            <h2
              className="bg-clip-text text-transparent bg-linear-to-t text-nowrap from-(--border-color) to-[#a7a7a7] font-black uppercase text-[clamp(40px,4.5vh,120px)] sm:text-[clamp(60px,9.5vh,120px)] xl:text-[clamp(60px,25vh,160px)] font-instrument-sans reveal-animation"
              key={rowIndex}>
              {titleRow?.map((chunk, chunkIndex) => {
                return (
                  <span className={twMerge(chunk?.classNames)} key={chunkIndex}>
                    {chunk.text}
                  </span>
                );
              })}
            </h2>
          ))}
        </div>
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-20 reveal-animation">
          {data?.items?.map((item, index) => (
            <OurServiceCardComponent key={index} data={item} />
          ))}

          <div className="h-2.5 opacity-0 bg-purple-400 sticky top-47.5 md:top-[40%] z-50 rounded-xl flex items-center justify-center text-2xl font-bold">
            5
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServiceSection;
