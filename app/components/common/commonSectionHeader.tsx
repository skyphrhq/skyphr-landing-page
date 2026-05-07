"use client";
import { CommonSectionHeaderInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function CommonSectionHeader({ header, className }: CommonSectionHeaderInterface) {
  return (
    <div className={twMerge("skyphr-container pb-15!", className)}>
      {header?.title?.map((titleRow, rowIndex) => (
        <h2
          className="flex items-center justify-center gap-2 font-instrument-sans text-(--text-main-color) text-[45px] font-bold"
          key={rowIndex}>
          {titleRow?.map((chunk, index) => {
            return (
              <span
                className={twMerge(
                  "font-instrument-sans reveal-text-animation",
                  chunk?.variant === "italic" && "italic font-semibold font-playfair-display",
                  chunk?.classNames,
                )}
                key={index}>
                {chunk.text}
              </span>
            );
          })}
        </h2>
      ))}

      {header?.description?.map((description, index) => (
        <p className="max-w-125 text-pretty text-center mx-auto text-lg pt-4 reveal-text-animation" key={index}>
          {description?.map((chunk, chunkIndex) => {
            return (
              <span className={twMerge(chunk?.classNames)} key={chunkIndex}>
                {chunk.text}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

export default CommonSectionHeader;
