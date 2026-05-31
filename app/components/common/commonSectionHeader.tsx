"use client";
import { CommonSectionHeaderInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function CommonSectionHeader({ header, className }: CommonSectionHeaderInterface) {
  return (
    <div className={twMerge("skyphr-container px-0! pb-7! md:pb-15!", className)}>
      {header?.title?.map((titleRow, rowIndex) => (
        <h2
          className="flex flex-wrap items-center justify-center gap-4 font-instrument-sans text-(--text-main-color) text-[28px] md:text-3xl lg:text-[32px] xl:text-[45px] font-bold"
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
                {chunk.text.trim()}
              </span>
            );
          })}
        </h2>
      ))}
      <div className="w-full flex flex-col items-start justify-start gap-5">
        {" "}
        {header?.description?.map((description, index) => (
          <p
            className="max-w-2xl text-pretty text-center mx-auto text-sm sm:text-base md:text-lg pt-4 reveal-text-animation"
            key={index}>
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
    </div>
  );
}

export default CommonSectionHeader;
