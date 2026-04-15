"use client";
import HeroBgAbstract from "@/app/components/heroBgAbstract";
import TrustedPill from "@/app/components/trustedPill";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import CTAButton from "../components/common/ctaButton";

function HeroSectionElement() {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal");
      gsap.to(elements, COMMON_REVEL_ANIMATION);
    },
    { scope: animationContainer },
  );

  return (
    <div className="w-full h-fit relative bg-white overflow-hidden py-46">
      <HeroBgAbstract />
      <div
        ref={animationContainer}
        className="w-ful h-full relative z-20 flex flex-col items-center max-w-4xl mx-auto justify-center">
        <TrustedPill className="reveal blur-[10px] opacity-0 translate-y-7.5 mb-14" />
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="reveal blur-[10px] opacity-0 translate-y-7.5 font-instrument-sans text-6xl font-bold tracking-tight text-(--text-main-color)">
            We Build <span className="font-playfair-display italic font-semibold">Scalable</span>
          </h1>
          <h1 className="reveal blur-[10px] opacity-0 translate-y-7.5 font-instrument-sans text-6xl font-bold tracking-tight text-(--text-main-color)">
            Digital Products & <span className="font-playfair-display italic font-semibold">AI Systems</span>
          </h1>
        </div>
        <p className="reveal blur-[10px] opacity-0 translate-y-7.5 font-instrument-sans text-lg max-w-xl font-medium text-pretty text-center pt-4 text-(--text-main-color)">
          UI/UX Design, SaaS Development & AI Automation to help startups and businesses build, launch and scale faster.
        </p>
        <div className="w-full flex items-center justify-center gap-6 max-w-xl mx-auto pt-10">
          <CTAButton btnStyle="CTA_PRIMARY" className="reveal blur-[10px] opacity-0 translate-y-7.5">
            Get Your Product Built
          </CTAButton>
          <CTAButton btnStyle="CTA_SECONDARY" className="reveal blur-[10px] opacity-0 translate-y-7.5">
            Book a Call
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionElement;
