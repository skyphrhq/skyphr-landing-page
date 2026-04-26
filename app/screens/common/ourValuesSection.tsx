"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/app/lib/gsap";
import { OUR_VALUES_CARD_DATA } from "@/app/data/common.data";
import OurValueCommonCard from "@/app/components/ourValueCommonCard";

function OurValuesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const titleSec = gsap.utils.toArray(".reveal-text");
      gsap.to(titleSec, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom top",
          markers: false,
        },
      });

      const revealCard = gsap.utils.toArray(".reveal-card");
      gsap.to(revealCard, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom top",
          markers: false,
        },
      });
    },
    { scope: containerRef },
  );
  return (
    <div className="w-full h-auto py-30" ref={containerRef}>
      <div className="skyphr-container">
        <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
          <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">The</span>
          <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Values</span>
          <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">That</span>
          <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Drive</span>
          <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Us</span>
        </h2>

        <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text blur-[10px] opacity-0 translate-y-7.5">
          The principles we follow in every project guiding how we think, build, and deliver meaningful digital
          experiences.
        </p>
      </div>
      <div className="skyphr-container">
        <div className="w-full grid grid-cols-2 gap-6 pt-15">
          {OUR_VALUES_CARD_DATA?.map((item, index) => (
            <div key={index} className={`reveal-card blur-[10px] opacity-0 translate-y-10`}>
              <OurValueCommonCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurValuesSection;
