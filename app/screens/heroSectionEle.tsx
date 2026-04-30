"use client";
import CTAButton from "@/app/components/common/ctaButton";
import HeroBgAbstract from "@/app/components/heroBgAbstract";
import TrustedPill from "@/app/components/trustedPill";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function HeroSectionElement() {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );

  return (
    <div className="w-full h-fit relative bg-white overflow-hidden pt-55 pb-35">
      <HeroBgAbstract />
      <div
        ref={animationContainer}
        className="w-ful h-full relative z-20 flex flex-col items-center max-w-4xl mx-auto justify-center">
        <TrustedPill className="reveal-animation mb-14" />
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="reveal-animation font-instrument-sans text-6xl font-bold tracking-tight text-(--text-main-color)">
            We Build <span className="font-playfair-display italic font-semibold">Scalable</span>
          </h1>
          <h1 className="reveal-animation font-instrument-sans text-6xl font-bold tracking-tight text-(--text-main-color)">
            Digital Products & <span className="font-playfair-display italic font-semibold">AI Systems</span>
          </h1>
        </div>
        <p className="reveal-animation font-instrument-sans text-lg max-w-xl font-medium text-pretty text-center pt-4 text-(--text-main-color)">
          UI/UX Design, SaaS Development & AI Automation to help startups and businesses build, launch and scale faster.
        </p>
        <div className="w-full flex items-center justify-center gap-6 max-w-xl mx-auto pt-10">
          <CTAButton btnStyle="CTA_PRIMARY" className="reveal-animation ">
            Get Your Product Built
          </CTAButton>
          <CTAButton
            btnStyle="CTA_SECONDARY"
            className="reveal-animation"
            href="https://cal.com/skyphr/30min"
            target="_blank"
            rel="noopener noreferrer">
            Book a Call
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionElement;
