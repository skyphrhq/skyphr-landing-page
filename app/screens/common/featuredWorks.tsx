"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { FeaturedWorksSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function FeaturedWorks({ data, showShadow = true, classNames }: FeaturedWorksSectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

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

      //  Now We will Write the GSAP Code for the Card Reveal Animations.
      const cards = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 100%",
        end: "bottom top",
      });
      gsap.fromTo(cards, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );
  return (
    <div ref={containerRef} className={twMerge("w-full h-auto", classNames)}>
      {data?.header && <CommonSectionHeader header={data.header} />}
      <div className="w-full overflow-hidden p-5 marquee-custom-slider relative">
        {showShadow && (
          <div className="absolute w-full h-22.5 bg-linear-to-b from-(--bg-blue-shade) to-(--root-white-color) top-0 left-0 z-2 pointer-events-none blur-2xl opacity-60"></div>
        )}

        <div className="flex marquee-wrapper">
          <div className="flex items-center justify-start gap-5 xl:gap-10 pr-5 xl:pr-10 marquee-group shrink-0">
            {data?.featuredWorksData?.map((item) => (
              <div
                key={item.id}
                className={twMerge("min-w-95 aspect-380/380 overflow-hidden reveal-animation", COMMON_BORDER_RADIUS)}>
                <Image
                  src={item.imagePath}
                  alt={item.alt}
                  title={item.alt}
                  width={380}
                  height={380}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div
            className="flex items-center justify-start gap-5 xl:gap-10 pr-5 xl:pr-10 marquee-group shrink-0"
            aria-hidden="true">
            {data?.featuredWorksData?.map((item) => (
              <div
                key={`clone-${item.id}`}
                className={twMerge("min-w-95 aspect-380/380 overflow-hidden reveal-animation", COMMON_BORDER_RADIUS)}>
                <Image
                  src={item.imagePath}
                  alt=""
                  title=""
                  width={380}
                  height={380}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div
            className="flex items-center justify-start gap-5 xl:gap-10 pr-5 xl:pr-10 marquee-group shrink-0"
            aria-hidden="true">
            {data?.featuredWorksData?.map((item) => (
              <div
                key={`clone-two-${item.id}`}
                className={twMerge("min-w-95 aspect-380/380 overflow-hidden reveal-animation", COMMON_BORDER_RADIUS)}>
                <Image
                  src={item.imagePath}
                  alt=""
                  title=""
                  width={380}
                  height={380}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div
            className="flex items-center justify-start gap-5 xl:gap-10 pr-5 xl:pr-10 marquee-group shrink-0"
            aria-hidden="true">
            {data?.featuredWorksData?.map((item) => (
              <div
                key={`clone-three-${item.id}`}
                className={twMerge("min-w-95 aspect-380/380 overflow-hidden reveal-animation", COMMON_BORDER_RADIUS)}>
                <Image
                  src={item.imagePath}
                  alt=""
                  title=""
                  width={380}
                  height={380}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {showShadow && (
          <div className="absolute w-full h-22.5 bg-(--root-white-color) opacity-60 blur-2xl bottom-0 left-0 z-2 pointer-events-none"></div>
        )}
      </div>
    </div>
  );
}

export default FeaturedWorks;
