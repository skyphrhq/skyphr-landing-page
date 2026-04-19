"use client";
import { gsap } from "@/app/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import FaqCommonCard from "../components/faqCommonCard";
import { FAQ_DATA } from "../data/faq.data";

function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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

      const revealQuestion = gsap.utils.toArray(".reveal-question");
      gsap.to(revealQuestion, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom top",
          markers: false,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="w-full h-full py-30" ref={containerRef}>
      <div className="skyphr-container">
        <div className="w-full pb-15">
          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Got</span>
            <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">Questions?</span>
          </h2>
          <h2 className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold">
            <span className="reveal-text blur-[10px] opacity-0 translate-y-7.5">
              We&apos;ve Got <span className="font-playfair-display italic font-semibold">Answers</span>
            </span>
          </h2>

          <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text blur-[10px] opacity-0 translate-y-7.5">
            Everything you need to know before starting your project with <span className="font-bold font-instrument-sans">Skyphr</span>
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto space-y-3">
          {FAQ_DATA.map((item, index) => (
            <div key={index} className="reveal-question blur-[10px] opacity-0 translate-y-7.5">
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
