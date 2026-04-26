"use client";
import ServiceHeroImage from "@/app/assets/our-service-hero-image.png";
import Image from "next/image";
import { useRef } from "react";

function ServicesSectionHero() {
  const animationContainer = useRef(null);
  // useGSAP(
  //   () => {
  //     const elements = gsap.utils.toArray(".reveal");
  //     gsap.to(elements, COMMON_REVEL_ANIMATION);
  //   },
  //   { scope: animationContainer },
  // );
  return (
    <div className="w-full h-fit relative bg-white overflow-hidden pt-50 pb-30">
      <div className="skyphr-container">
        <div ref={animationContainer} className="w-ful h-full relative z-20 flex items-center justify-center">
          <div className="w-1/2">
            <div className="flex flex-col items-start justify-start gap-2">
              <h1 className="font-instrument-sans text-6xl font-bold tracking-tight text-(--text-main-color)">
                We Build <span className="font-playfair-display italic font-semibold">Scalable</span>
              </h1>
              <h1 className="font-instrument-sans text-6xl font-bold tracking-tight text-(--text-main-color)">
                Digital Products & <span className="font-playfair-display italic font-semibold">AI Systems</span>
              </h1>
            </div>
            <p className="font-instrument-sans text-lg max-w-xl font-medium text-pretty text-start pt-4 text-(--text-main-color)">
              UI/UX Design, SaaS Development & AI Automation to help startups and businesses build, launch and scale
              faster.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src={ServiceHeroImage}
              width={800}
              height={600}
              alt="Services Hero"
              loading="eager"
              className="w-full h-full object-contain select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSectionHero;
