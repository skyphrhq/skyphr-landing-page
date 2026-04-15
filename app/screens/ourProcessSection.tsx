"use client";
import { gsap } from "@/app/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import OurProcessCard from "../components/ourProcessCard";
import { OUR_PROCESS_DATA } from "../data/ourProcess.data";

function OurProcessSection() {
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
    <div className="w-full h-full py-30" ref={containerRef}>
      <div className="w-full">
        <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
          <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Our Simple</span>
          <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">and</span>
          <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Proven Process</span>
        </h2>
        <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text blur-[10px] opacity-0 translate-y-7.5">
          From idea to launch, here’s how we make sure your project runs smoothly every time
        </p>
      </div>
      <div className="skyphr-container">
        <div className="w-full grid grid-cols-6 gap-6 pt-15">
          {OUR_PROCESS_DATA?.map((item, index) => (
            <div key={index} className={`${item?.gridStyle} reveal-card blur-[10px] opacity-0 translate-y-10`}>
              <OurProcessCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProcessSection;
