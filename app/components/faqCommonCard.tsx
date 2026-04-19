"use client";
import { FaqCommonCardInterface } from "../utils/interface/common.interface";

function FaqCommonCard({ question, answer, isOpen, onToggle, index }: FaqCommonCardInterface) {
  return (
    <div
      onClick={onToggle}
      className={`w-full rounded-lg border transition-colors duration-300 cursor-pointer select-none ${
        isOpen ? "border-(--cta-button-background)" : "border-(--border-color)"
      } bg-(--about-us-card-bg)`}>
      {/* Header row */}
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <div className="flex items-center justify-start gap-5">
          <span className="flex items-center gap-1 font-instrument-sans font-semibold text-(--cta-button-background) text-lg leading-snug">
            <span>{"{"}</span>
            <span>{index + 1}</span>
            <span>{"}"}</span>
          </span>
          <span className="font-instrument-sans font-semibold text-(--text-main-color) text-lg leading-snug">
            {question}
          </span>
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-(--root-white-color) rounded relative">
          <span className="w-3.75 h-0.5 block bg-(--root-black-color) absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
          <span
            className={`w-0.5 h-3.75 block bg-(--root-black-color) absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isOpen ? "rotate-90" : ""}`}></span>
        </div>
      </div>

      {/* Smooth height transition — CSS grid trick */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}>
        <div className="overflow-hidden min-h-0">
          <div className="px-6 pb-5">
            <span className="w-full h-px border border-dashed border-(--border-color) block mb-5"></span>
            <div className="text-(--text-secondary-color) text-base font-inter leading-relaxed">{answer()}</div>
          </div>
        </div>
      </div>
    </div>
  );
  }

  export default FaqCommonCard;
