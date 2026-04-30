"use client";
import OurValueCommonCard from "@/app/components/ourValueCommonCard";
import { OUR_VALUES_CARD_DATA } from "@/app/data/common.data";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function OurValuesSection() {
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

      // Now We will write the code for the Card reveal animation on scroll time
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
    <div className="w-full h-auto py-30" ref={containerRef}>
      <div className="skyphr-container">
        <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
          <span className="reveal-text-animation">The</span>
          <span className="reveal-text-animation">Values</span>
          <span className="reveal-text-animation">That</span>
          <span className="reveal-text-animation">Drive</span>
          <span className="reveal-text-animation">Us</span>
        </h2>

        <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text-animation">
          The principles we follow in every project guiding how we think, build, and deliver meaningful digital
          experiences.
        </p>
      </div>
      <div className="skyphr-container">
        <div className="w-full grid grid-cols-2 gap-6 pt-15">
          {OUR_VALUES_CARD_DATA?.map((item, index) => (
            <div key={index} className={`reveal-animation`}>
              <OurValueCommonCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurValuesSection;
