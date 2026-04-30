"use client";
import FaqCommonCard from "@/app/components/faqCommonCard";
import { FAQ_DATA } from "@/app/data/faq.data";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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

      // Now We will Write the GSAP Code for the Card Reveal Animations.
      const revealQuestion = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom top",
      });
      gsap.fromTo(revealQuestion, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );

  return (
    <div className="w-full h-full py-30" ref={containerRef}>
      <div className="skyphr-container">
        <div className="w-full pb-15">
          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text-animation">Got</span>
            <span className="reveal-text-animation">Questions?</span>
          </h2>
          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text-animation">
              We&apos;ve Got <span className="font-playfair-display italic font-semibold">Answers</span>
            </span>
          </h2>

          <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text-animation">
            Everything you need to know before starting your project with{" "}
            <span className="font-bold font-instrument-sans">Skyphr</span>
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto space-y-3">
          {FAQ_DATA.map((item, index) => (
            <div key={index} className="reveal-animation">
              <FaqCommonCard
                question={item.question}
                answer={item.answer}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
