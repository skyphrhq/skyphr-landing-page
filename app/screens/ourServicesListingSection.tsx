import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import OurServiceCardComponent from "@/app/components/ourServiceCardComponent";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { OurServiceSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function OurServicesListingSection({ data, classNames }: OurServiceSectionInterface) {
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

      // Now We will write the GSAP code for the Card Reveal Animation.
      const revealCard = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 50%",
        end: "bottom top",
      });
      gsap.fromTo(revealCard, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );

  return (
    <div className={twMerge("w-full h-auto", classNames)} ref={containerRef}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data?.header} />
        <div className="w-full h-fit flex flex-col gap-12 max-w-5xl mx-auto">
          {data?.items.map((item, index) => (
            <OurServiceCardComponent key={index} data={item} cardStyle="solid" wrapperClassNames="reveal-animation" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServicesListingSection;
