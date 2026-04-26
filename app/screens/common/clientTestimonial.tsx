"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { gsap } from "@/app/lib/gsap";
import TestimonialCard from "@/app/components/testimonialCard";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/data/testimonial.data";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function ClientTestimonial() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1.8,
      spacing: 30,
      origin: "center",
    },
  });

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
          start: "top 80%",
          end: "bottom top",
          markers: false,
        },
      });

      const revealCard = gsap.utils.toArray(".reveal-card");
      gsap.to(revealCard, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom top",
          markers: false,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="w-full h-fit py-30" ref={containerRef}>
      <div className="px-4">
        <div className="w-full pb-15">
          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Trusted</span>
            <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">by Clients</span>
            <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Worldwide</span>
          </h2>

          <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text blur-[10px] opacity-0 translate-y-7.5">
            We focus on results and our clients’ experiences speak louder than anything else
          </p>
        </div>
        <div className="w-full reveal-card blur-[10px] opacity-0 translate-y-10">
          <div ref={sliderRef} className="keen-slider">
            {CLIENT_TESTIMONIAL_DATA?.map((item, index) => (
              <div key={index} className="keen-slider__slide">
                <TestimonialCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-4 pt-10 reveal-card blur-[10px] opacity-0 translate-y-10">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="w-12 h-12 rounded-full bg-(--root-black-color) flex items-center justify-center text-(--root-white-color) group relative ring-1 ring-(--root-black-color) hover:text-(--root-black-color) cursor-pointer">
            <FaArrowLeftLong className="relative z-10 text-xl" />
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 min-w-0 min-h-0 bg-(--root-white-color) block rounded-full group-hover:min-w-full group-hover:min-h-full transition-all duration-300"></span>
          </button>
          <button
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
