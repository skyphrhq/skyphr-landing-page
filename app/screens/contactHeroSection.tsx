"use client";
import HumanRoboHand from "@/app/assets/robo-human-hand.png";
import CTAButton from "@/app/components/common/ctaButton";
import { gsap } from "@/app/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/app/utils/constants/animation.constant";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

interface ContactHeroSectionProps {
  onStartProjectClick?: () => void;
}

function ContactHeroSection({ onStartProjectClick }: ContactHeroSectionProps) {
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
      <Image
        src={HumanRoboHand}
        alt="Human Robo Hand"
        width={1500}
        height={982}
        className="w-full h-full pointer-events-none select-none absolute object-cover opacity-8 top-0 right-0 z-10"
      />
      <div
        ref={animationContainer}
        className="w-ful h-full relative z-20 flex flex-col items-center max-w-4xl mx-auto justify-center">
        <div className="flex flex-col items-center justify-center leading-[1.1]">
          <h1 className="reveal-animation font-instrument-sans text-6xl font-bold tracking-tight text-(--text-main-color)">
            Let’s <span className="font-playfair-display italic font-semibold text-(--text-main-color)">Build</span>
          </h1>

          <h1 className="reveal-animation font-instrument-sans text-6xl font-bold tracking-tight text-(--text-main-color) pt-1">
            Something <span className="font-playfair-display italic font-semibold">Together</span>
          </h1>
        </div>
        <p className="reveal-animation font-instrument-sans text-xl max-w-xl font-medium text-pretty text-center pt-4 text-(--text-main-color)">
          We combine human creativity and AI to design, build, and scale digital products that deliver real results.
        </p>
        <div className="w-full flex items-center justify-center gap-6 max-w-xl mx-auto pt-10">
          <CTAButton btnStyle="CTA_PRIMARY" className="reveal-animation min-w-[200px]" onClick={onStartProjectClick}>
            Start a Project
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

export default ContactHeroSection;
