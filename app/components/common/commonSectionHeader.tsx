"use client";
import { CommonSectionHeaderInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function CommonSectionHeader({ header, className, headerParentClass, descriptionClass }: CommonSectionHeaderInterface) {
  return (
    <div className={twMerge("skyphr-container pb-7! md:pb-15!", className)}>
      {header?.title?.map((titleRow, rowIndex) => (
        <h2
          className={twMerge(
            "flex flex-wrap items-center justify-center gap-2 lg:gap-4 font-instrument-sans text-(--text-main-color) text-[28px] md:text-3xl lg:text-[32px] xl:text-[60px] 2xl:text-[72px] font-bold",
            headerParentClass,
          )}
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
      {header?.description?.length !== 0 && (
        <div className="w-full flex flex-col items-start justify-start gap-5 pt-4">
          {" "}
          {header?.description?.map((description, index) => (
            <p
              className={twMerge(
                "max-w-2xl text-pretty text-center mx-auto text-sm sm:text-base lg:text-lg xl:text-xl reveal-text-animation",
                descriptionClass,
              )}
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
      )}
    </div>
  );
}

export default CommonSectionHeader;
