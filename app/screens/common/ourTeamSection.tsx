"use client";
import OurTeamIntroCard from "@/app/components/ourTeamIntroCard";
import { OUR_TEAM_MEMBERS_DATA } from "@/app/data/common.data";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function OurTeamSection() {
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

      //  Now We will write the code for the Card reveal animation on scroll time.
      const cards = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
      });
      gsap.fromTo(cards, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );
  return (
    <div className="w-full h-full bg-(--root-white-color) pb-30" ref={containerRef}>
      <div className="skyphr-container">
        <div className="w-full pb-15">
          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text-animation">
              The Person Behind <span className="font-playfair-display italic font-semibold">Skyphr</span>
            </span>
          </h2>

          <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text-animation">
            Skyphr is built and led by a developer focused on creating scalable digital products and AI-driven systems
            with a strong emphasis on performance, usability, and real-world impact.
          </p>
        </div>
        <div className="max-w-[60%] mx-auto">
          {OUR_TEAM_MEMBERS_DATA?.map((member, index) => (
            <div key={index} className="reveal-animation">
              <OurTeamIntroCard data={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeamSection;
