"use client";
import OurProcessCard from "@/app/components/ourProcessCard";
import { OUR_PROCESS_DATA } from "@/app/data/ourProcess.data";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function OurProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;
      const titleSec = gsap.utils.toArray(".reveal-text-animation");
      const getTitleAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);


      // Now We will Write the GSAP Code to for the card reveal Animation.
      
      const revealCard = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 50%",
        end: "bottom top",
      });
      gsap.fromTo(revealCard, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );
  return (
    <div className="w-full h-full py-30" ref={containerRef}>
      <div className="w-full">
        <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
          <span className="reveal-text-animation">Our Simple</span>
          <span className="reveal-text-animation">and</span>
          <span className="reveal-text-animation">Proven Process</span>
        </h2>
        <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text-animation">
          From idea to launch, here’s how we make sure your project runs smoothly every time
        </p>
      </div>
      <div className="skyphr-container">
        <div className="w-full grid grid-cols-6 gap-6 pt-15">
          {OUR_PROCESS_DATA?.map((item, index) => (
            <div key={index} className={`${item?.gridStyle} reveal-animation`}>
              <OurProcessCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProcessSection;
