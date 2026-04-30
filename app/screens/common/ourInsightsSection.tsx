"use client";
import BlogCard from "@/app/components/blogCard";
import { INSIGHTS_DATA } from "@/app/data/insights.data";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function OurInsightsSection() {
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
    <div className="w-full h-full bg-(--about-us-card-bg) py-30" ref={containerRef}>
      <div className="skyphr-container">
        <div className="w-full pb-15">
          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text-animation">Insights That Build</span>
          </h2>

          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text-animation">
              Better <span className="font-playfair-display italic font-semibold">Products</span>
            </span>
          </h2>

          <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text-animation">
            Explore ideas, strategies, and real-world insights on building scalable, high-performing digital products
            with <span className="font-bold font-instrument-sans">Skyphr</span>
          </p>
        </div>

        <div className="w-full grid grid-cols-3 gap-6">
          {INSIGHTS_DATA.slice(0, 3).map((item, index) => (
            <div key={index} className="col-span-1 reveal-animation">
              <BlogCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurInsightsSection;
