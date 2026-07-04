"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import OurTeamIntroCard from "@/app/components/ourTeamIntroCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { OurTeamSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function OurTeamSection({ data, classNames }: OurTeamSectionInterface) {
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
    <div className={twMerge("w-full h-fit overflow-hidden", COMMON_SECTION_PADDING, classNames)} ref={containerRef}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data.header} />
        <div className="lg:max-w-[85%] xl:max-w-[60%] mx-auto">
          {data.members?.map((member, index) => (
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
