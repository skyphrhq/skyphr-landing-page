"use client";
import { gsap } from "@/app/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import BlogCard from "../components/blogCard";
import { INSIGHTS_DATA } from "../data/insights.data";

function OurInsightsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const titleSec = gsap.utils.toArray(".insights-reveal-text");
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

      const revealCard = gsap.utils.toArray(".insights-reveal-card");
      gsap.to(revealCard, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
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
    <div className="w-full h-full bg-(--about-us-card-bg) py-30" ref={containerRef}>
      <div className="skyphr-container">
        <div className="w-full pb-15">
          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="insights-reveal-text blur-[10px] opacity-0 translate-y-7.5">Insights That Build</span>
          </h2>

          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="insights-reveal-text blur-[10px] opacity-0 translate-y-7.5">
              Better <span className="font-playfair-display italic font-semibold">Products</span>
            </span>
          </h2>

          <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 insights-reveal-text blur-[10px] opacity-0 translate-y-7.5">
            Explore ideas, strategies, and real-world insights on building scalable, high-performing digital products
            with <span className="font-bold font-instrument-sans">Skyphr</span>
          </p>
        </div>

        <div className="w-full grid grid-cols-3 gap-6">
          {INSIGHTS_DATA.slice(0, 3).map((item, index) => (
            <div key={index} className="col-span-1 insights-reveal-card blur-[10px] opacity-0 translate-y-10">
              <BlogCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurInsightsSection;
