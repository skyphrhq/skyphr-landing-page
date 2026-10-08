"use client";

import { FaqCommonCardInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function FaqCommonCard({ question, answer, isOpen, onToggle, index, variant = "CARD", className }: FaqCommonCardInterface) {
  // LINE: no background or box, just a bottom border between questions (blog posts, where cards look too heavy)
  const isLine = variant === "LINE";

  return (
    <div
      className={twMerge(
        "w-full transition-colors duration-300 select-none",
        isLine
          ? "border-b border-(--border-color)"
          : twMerge(
              "rounded-lg border bg-(--about-us-card-bg)",
              isOpen ? "border-(--cta-button-background)" : "border-(--border-color)",
            ),
        className,
      )}>
      {/* Header row */}
      <div
        onClick={onToggle}
        className={twMerge(
          "flex items-center justify-between gap-4 cursor-pointer",
          isLine ? "py-4 md:py-5" : "p-4 md:px-6 md:py-5",
        )}>
        <div className="flex items-center justify-start gap-5">
          <span className="flex items-center gap-1 font-instrument-sans font-semibold text-(--cta-button-background) text-sm sm:text-base lg:text-lg leading-snug">
            <span>{"{"}</span>
            <span>{index + 1}</span>
            <span>{"}"}</span>
          </span>

          <span className="font-instrument-sans font-semibold text-(--text-main-color) text-sm sm:text-base lg:text-lg leading-snug">
            {question}
          </span>
        </div>

        <div
          className={twMerge(
            "flex items-center justify-center min-w-7 min-h-7 w-7 h-7 md:min-w-10 md:min-h-10 md:w-10 md:h-10 rounded relative",
            !isLine && "bg-(--root-white-color)",
          )}>
          <span className="min-w-3 w-3 md:min-w-3.75 md:w-3.75 h-0.5 block bg-(--root-black-color) absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>

          <span
            className={`w-0.5 min-h-3 h-3 md:min-h-3.75 md:h-3.75 block bg-(--root-black-color) absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}></span>
        </div>
      </div>

      {/* Content */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}>
        <div className="overflow-hidden min-h-0">
          <div className={isLine ? "pb-4 md:pb-5" : "px-4 pb-4 md:px-6 md:pb-5"}>
            {!isLine && <span className="w-full h-px border border-dashed border-(--border-color) block mb-4 md:mb-5"></span>}

            <div className="text-(--text-secondary-color) text-sm md:text-base font-inter leading-relaxed">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqCommonCard;
