"use client";
import SkyPhrIcon from "@/app/assets/skyphr-icon.png";
import AboutUsInfoCard from "@/app/components/aboutUsInfoCard";
import CTAButton from "@/app/components/common/ctaButton";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { AboutUsCardsDataArrayInterface } from "@/app/utils/interface/common.interface";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function AboutSection({
  className,
  data,
}: {
  className?: string;
  data?: {
    title: string[];
    description: string;
    ctaText: string;
    ctaLink: string;
    aboutUsCardsData: AboutUsCardsDataArrayInterface[];
  };
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const titleSec = gsap.utils.toArray(".reveal-text-animation");
      const getTitleAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);

      
      const elements = gsap.utils.toArray(".card-reveal");
      gsap.to(elements, {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100%",
          end: "80% 40%",
          scrub: 0.5,
          markers: false,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={twMerge("skyphr-container w-full h-fit py-30", className)}>
      <div className="w-full flex items-stretch justify-start gap-20">
        <div className="w-[45%]">
          <div className="w-full flex flex-col items-start justify-start gap-6 py-10">
            <h2 className="text-(--text-main-color) text-4xl font-instrument-sans font-semibold leading-12">
              {data?.title?.map((item, index) => (
                <span key={index} className="block reveal-text-animation">
                  {item}
                </span>
              ))}
            </h2>
            <p className="text-(--text-secondary-color) text-lg font-instrument-sans font-normal reveal-text-animation">
              {data?.description}
            </p>
            <CTAButton btnStyle="CTA_PRIMARY" href={data?.ctaLink} className="reveal-text-animation">
              {data?.ctaText}
            </CTAButton>
          </div>
        </div>
        <div className="w-[55%]">
          <div className="w-full h-full grid grid-cols-2 gap-4 relative">
            {data?.aboutUsCardsData?.map((item, index) => (
              <AboutUsInfoCard key={index} className={"card-reveal scale-x-0 scale-y-0"} data={item} />
            ))}
            <div className="w-20 min-w-20 min-h-20 h-20 bg-(--root-white-color) rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="w-[60px] h-[60px] min-w-[60px] min-h-[60px] rounded-full flex items-center justify-center bg-(--about-us-card-bg)">
                <Image
                  width={30}
                  height={30}
                  src={SkyPhrIcon}
                  alt="SkyPhr Icon"
                  loading="lazy"
                  className="animate-spin [animation-duration:5s]"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
