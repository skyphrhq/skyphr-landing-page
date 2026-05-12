"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import FaqCommonCard from "@/app/components/faqCommonCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { FrequentlyAskedQuestionsInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

function FrequentlyAskedQuestions({ data, classNames }: FrequentlyAskedQuestionsInterface) {
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
    <div className={twMerge("w-full h-full py-15! md:py-20! lg:py-30!", classNames)} ref={containerRef}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data?.header} />

        <div className="w-full max-w-3xl mx-auto space-y-3">
          {data?.faqsItems.map((item, index) => (
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
