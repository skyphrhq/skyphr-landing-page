"use client";
import HeroBgAbstract from "@/app/components/heroBgAbstract";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function AboutUsSectionHeroElem() {
  const animationContainer = useRef(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );

  return (
    <div className="w-full h-fit relative bg-white overflow-hidden pt-60 pb-38">
      <HeroBgAbstract />

      <div
        ref={animationContainer}
        className="w-full h-full relative z-20 flex flex-col items-center max-w-4xl mx-auto justify-center">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="reveal-animation font-instrument-sans text-5xl font-bold tracking-tight text-(--text-main-color)">
            We Design & Build <span className="font-playfair-display italic font-semibold">Thoughtful</span>
          </h1>
          <h1 className="reveal-animation font-instrument-sans text-5xl font-bold tracking-tight text-(--text-main-color)">
            Digital Products & <span className="font-playfair-display italic font-semibold">AI Systems</span>
          </h1>
        </div>

        <p className="reveal-animation font-instrument-sans text-lg max-w-2xl font-medium text-pretty text-center pt-7.5 text-(--text-main-color)">
          We are a design and engineering team focused on building high-quality digital products and AI-driven systems.
          From early-stage startups to growing businesses, we help turn ideas into reliable, scalable solutions.
        </p>
      </div>
    </div>
  );
}

export default AboutUsSectionHeroElem;
