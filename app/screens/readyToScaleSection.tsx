"use client";
import CTAButton from "@/app/components/common/ctaButton";
import HeroBgAbstract from "@/app/components/heroBgAbstract";
import { gsap } from "@/app/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function ReadyToScaleSection({ classNames }: { classNames?: string }) {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-text");
      gsap.to(elements, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: animationContainer.current,
          start: "top 80%",
          end: "bottom top",
          markers: false,
        },
      });
    },
    { scope: animationContainer },
  );

  return (
    <div className={twMerge("w-full py-30", classNames)}>
      <div className="skyphr-container">
        <div className="w-full h-auto px-10 py-20 rounded-2xl relative border border-(--border-color) bg-(--root-white-color) overflow-hidden flex flex-col items-center gap-10">
          <HeroBgAbstract />
          <div
            ref={animationContainer}
            className="w-ful h-full relative z-20 flex flex-col items-center max-w-4xl mx-auto justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="reveal-text blur-[10px] opacity-0 translate-y-7.5 font-instrument-sans text-5xl font-bold tracking-tight text-(--text-main-color)">
                Ready to <span className="font-playfair-display italic font-semibold">Scale?</span>
              </h2>

              <h2 className="reveal-text blur-[10px] opacity-0 translate-y-7.5 font-instrument-sans text-5xl font-bold tracking-tight text-(--text-main-color)">
                Get Your <span className="font-playfair-display italic font-semibold">Custom Roadmap</span>
              </h2>
            </div>

            <p className="reveal-text blur-[10px] opacity-0 translate-y-7.5 font-instrument-sans text-base font-medium text-pretty text-center pt-4 text-(--text-main-color) max-w-[65%]">
              Book a free 30-minute call to discuss your goals, challenges, and how we can help you build, launch, and
              scale faster with <span className="font-bold font-instrument-sans">Skyphr</span>.
            </p>
            <div className="w-full flex items-center justify-center gap-6 max-w-xl mx-auto pt-10">
              <CTAButton
                btnStyle="CTA_SECONDARY"
                className="reveal-text blur-[10px] opacity-0 translate-y-7.5 min-w-55">
                Book a Free Call
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToScaleSection;
