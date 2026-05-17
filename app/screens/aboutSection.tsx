"use client";
import SkyPhrIcon from "@/app/assets/logo/skyphr-icon.webp";
import AboutUsInfoCard from "@/app/components/aboutUsInfoCard";
import CTAButton from "@/app/components/common/ctaButton";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { AboutSectionElementInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function AboutSection({ classNames, data }: AboutSectionElementInterface) {
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
    <div
      ref={containerRef}
      className={twMerge("skyphr-container w-full overflow-hidden h-fit py-15! md:py-20! xl:py-30!", classNames)}>
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-start gap-10 md:gap-15 lg:gap-5">
        <div className="w-full md:w-full lg:w-[45%]">
          <div className="w-full flex flex-col items-start justify-start gap-6 lg:py-10 @container">
            {data?.header?.title?.map((titleRow, rowIndex) => (
              <h2
                className="text-(--text-main-color) text-[28px] md:text-3xl lg:text-[32px] xl:text-[36px] font-instrument-sans font-semibold leading-9 md:leading-12"
                key={rowIndex}>
                {titleRow.map((chunk, index) => (
                  <span
                    key={index}
                    className={twMerge("block", chunk?.variant === "brand" && "text-(--primary-color-variant)")}>
                    {chunk?.text}
                  </span>
                ))}
              </h2>
            ))}

            {data?.header?.description?.map((description, index) => (
              <p
                className="text-(--text-secondary-color) text-base lg:text-lg font-instrument-sans font-normal reveal-text-animation"
                key={index}>
                {description?.map((chunk, chunkIndex) => {
                  return (
                    <span className={twMerge(chunk?.classNames)} key={chunkIndex}>
                      {chunk.text}
                    </span>
                  );
                })}
              </p>
            ))}

            {data?.cta && (
              <CTAButton
                btnStyle={data?.cta?.variant}
                href={data?.cta?.href}
                className="reveal-text-animation @max-xs:max-w-62! @max-xs:min-w-62!">
                {data?.cta?.label}
              </CTAButton>
            )}
          </div>
        </div>
        <div className="w-full md:w-full lg:w-[55%] relative @container">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            {data?.cards?.map((item, index) => (
              <AboutUsInfoCard key={index} className={"card-reveal about-us-common-card-section  max-md:scale-x-100 md:scale-x-0 md:scale-y-0"} data={item} />
            ))}
            <div className="w-20 min-w-20 min-h-20 h-20 bg-(--root-white-color) rounded-full items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex">
              <span className="w-15 h-15 min-w-15 min-h-15 rounded-full flex items-center justify-center bg-(--about-us-card-bg)">
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
