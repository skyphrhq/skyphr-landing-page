"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import TestimonialCard from "@/app/components/testimonialCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { ClientTestimonialSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

function ClientTestimonial({ data, classNames }: ClientTestimonialSectionInterface) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    breakpoints: {
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 16,
          origin: "center",
        },
      },
      "(min-width: 641px) and (max-width: 1024px)": {
        slides: {
          perView: 1.2,
          spacing: 20,
          origin: "center",
        },
      },
      "(min-width: 1025px) and (max-width: 1280px)": {
        slides: {
          perView: 1.5,
          spacing: 24,
          origin: "center",
        },
      },
    },
    slides: {
      perView: 1.8,
      spacing: 30,
      origin: "center",
    },
  });

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
    <div className={twMerge("w-full h-fit py-15! md:py-20! xl:py-30! overflow-hidden", classNames)} ref={containerRef}>
      <div className="px-4">
        <CommonSectionHeader header={data?.header} />
        <div className="w-full reveal-animation">
          <div ref={sliderRef} className="keen-slider">
            {data?.clientsFeedback.map((item, index) => (
              <div key={index} className="keen-slider__slide">
                <TestimonialCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-4 pt-10 reveal-animation pb-1">
          <button
            title="previous"
            name="previous"
            aria-label="previous"
            type="button"
            onClick={() => instanceRef.current?.prev()}
            className="w-12 h-12 rounded-full bg-(--root-black-color) flex items-center justify-center text-(--root-white-color) group relative ring-1 ring-(--root-black-color) hover:text-(--root-black-color) cursor-pointer">
            <FaArrowLeftLong className="relative z-10 text-xl" />
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 min-w-0 min-h-0 bg-(--root-white-color) block rounded-full group-hover:min-w-full group-hover:min-h-full transition-all duration-300"></span>
          </button>
          <button
            title="next"
            name="next"
            aria-label="next"
            type="button"
            onClick={() => instanceRef.current?.next()}
            className="w-12 h-12 rounded-full bg-(--root-black-color) flex items-center justify-center text-(--root-white-color) group relative ring-1 ring-(--root-black-color) hover:text-(--root-black-color) cursor-pointer">
            <FaArrowRightLong className="relative z-10 text-xl" />
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 min-w-0 min-h-0 bg-(--root-white-color) block rounded-full group-hover:min-w-full group-hover:min-h-full transition-all duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonial;
