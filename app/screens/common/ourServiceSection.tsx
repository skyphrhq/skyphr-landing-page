"use client";
import { gsap } from "@/app/lib/gsap";
import OurServiceCardComponent from "@/app/components/ourServiceCardComponent";
import { OUR_SERVICE_CARD_DATA } from "@/app/data/common.data";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function OurServiceSection() {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      if (animationContainer.current) {
        const elements = gsap.utils.toArray(".reveal");
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: animationContainer.current,
            start: "top 70%",
            end: "bottom top",
            markers: false,
          },
        });
      }
    },
    { scope: animationContainer },
  );

  return (
    <div ref={animationContainer} className="w-full h-auto bg-(--about-us-card-bg) py-25">
      <div className="skyphr-container">
        <div className="w-full flex items-center justify-center sticky top-[30vh]">
          <h2 className="bg-clip-text text-transparent bg-linear-to-t from-(--border-color) to-[#a7a7a7] font-black uppercase text-[clamp(60px,25vh,160px)] font-instrument-sans reveal blur-[10px] opacity-0 translate-y-20 overflow-hidden">
            <span className="block text-nowrap">Our Services</span>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-20 reveal blur-[10px] opacity-0 translate-y-20">
          {OUR_SERVICE_CARD_DATA.map((item, index) => (
            <OurServiceCardComponent key={index} data={item} />
          ))}

          <div className="h-2.5 opacity-0 bg-purple-400 sticky top-[40%] z-50 rounded-xl flex items-center justify-center text-2xl font-bold">
            5
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServiceSection;
