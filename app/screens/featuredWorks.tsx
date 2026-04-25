"use client";
import { gsap } from "@/app/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { FEATURED_WORK_DATA } from "../data/common.data";

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
      const titleSec = gsap.utils.toArray(".reveal-text");
      gsap.to(titleSec, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom top",
          markers: false,
        },
      });

      const cards = gsap.utils.toArray(".contact-card");
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 100%",
            end: "bottom top",
            markers: false,
          },
        },
      );
    },
    { scope: containerRef },
  );
  return (
    <div ref={containerRef} className={twMerge("w-full h-auto", className)}>
      {showHeader && (
        <div className="skyphr-container pb-15!">
          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Featured</span>
            <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Work</span>
          </h2>

          <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text blur-[10px] opacity-0 translate-y-7.5">
            A selection of digital products and experiences we’ve designed and built focused on performance,
            usability, and real-world impact.
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
              <div key={item.id} className="min-w-[380px] aspect-380/380 rounded-lg overflow-hidden contact-card">
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
                className="min-w-[380px] aspect-380/380 rounded-lg overflow-hidden contact-card">
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
                className="min-w-[380px] aspect-380/380 rounded-lg overflow-hidden contact-card">
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
                className="min-w-[380px] aspect-380/380 rounded-lg overflow-hidden contact-card">
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
