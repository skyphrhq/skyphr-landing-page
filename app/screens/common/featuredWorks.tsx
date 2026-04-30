"use client";
import { FEATURED_WORK_DATA } from "@/app/data/common.data";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function FeaturedWorks({
  showShadow = true,
  showHeader = false,
  className,
}: {
  showShadow?: boolean;
  showHeader?: boolean;
  className?: string;
}) {
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
    <div ref={containerRef} className={twMerge("w-full h-auto", className)}>
      {showHeader && (
        <div className="skyphr-container pb-15!">
          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text-animation">Featured</span>
            <span className="reveal-text-animation">Work</span>
          </h2>

          <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text-animation">
            A selection of digital products and experiences we’ve designed and built focused on performance, usability,
            and real-world impact.
          </p>
        </div>
      )}
      <div className="w-full overflow-hidden p-5 marquee-custom-slider relative">
        {showShadow && (
          <div className="absolute w-full h-[90px] bg-linear-to-b from-(--bg-blue-shade) to-(--root-white-color) top-0 left-0 z-2 pointer-events-none blur-2xl opacity-60"></div>
        )}

        <div className="flex marquee-wrapper">
          <div className="flex items-center justify-start gap-10 pr-10 marquee-group shrink-0">
            {FEATURED_WORK_DATA?.map((item) => (
              <div key={item.id} className="min-w-[380px] aspect-380/380 rounded-lg overflow-hidden reveal-animation">
                <Image
                  src={item.imagePath}
                  alt={item.id}
                  width={380}
                  height={380}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-start gap-10 pr-10 marquee-group shrink-0" aria-hidden="true">
            {FEATURED_WORK_DATA?.map((item) => (
              <div
                key={`clone-${item.id}`}
                className="min-w-[380px] aspect-380/380 rounded-lg overflow-hidden reveal-animation">
                <Image
                  src={item.imagePath}
                  alt={item.id}
                  width={380}
                  height={380}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-start gap-10 pr-10 marquee-group shrink-0" aria-hidden="true">
            {FEATURED_WORK_DATA?.map((item) => (
              <div
                key={`clone-two-${item.id}`}
                className="min-w-[380px] aspect-380/380 rounded-lg overflow-hidden reveal-animation">
                <Image
                  src={item.imagePath}
                  alt={item.id}
                  width={380}
                  height={380}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-start gap-10 pr-10 marquee-group shrink-0" aria-hidden="true">
            {FEATURED_WORK_DATA?.map((item) => (
              <div
                key={`clone-three-${item.id}`}
                className="min-w-[380px] aspect-380/380 rounded-lg overflow-hidden reveal-animation">
                <Image
                  src={item.imagePath}
                  alt={item.id}
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
          <div className="absolute w-full h-[90px] bg-(--root-white-color) opacity-60 blur-2xl bottom-0 left-0 z-2 pointer-events-none"></div>
        )}
      </div>
    </div>
  );
}

export default FeaturedWorks;
