"use client";
import { CommonSectionHeaderInterface } from "@/app/utils/interface/common.interface";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

function CommonSectionHeader({
  header,
  className,
  headerParentClass,
  descriptionClass,
  isSingleHeading = true,
}: CommonSectionHeaderInterface) {
  // Each title row is its own <h2> by default; with isSingleHeading the rows become lines of one <h2>
  const TitleRow = isSingleHeading ? "span" : "h2";

  const titleRows = header?.title?.map((titleRow, rowIndex) => (
    <TitleRow
      className={twMerge(
        "flex flex-wrap items-center justify-center gap-2 lg:gap-4 font-instrument-sans text-(--text-main-color) text-[28px] md:text-3xl lg:text-[32px] xl:text-[50px] 2xl:text-[58px] font-bold",
        headerParentClass,
      )}
      key={rowIndex}>
      {titleRow?.map((chunk, index) => {
        // The trailing " " is invisible between flex items but keeps real word spaces in the HTML for SEO
        return (
          <Fragment key={index}>
            <span
              className={twMerge(
                "font-instrument-sans reveal-text-animation",
                chunk?.variant === "italic" && "italic! font-bold! font-playfair-display text-(--cta-button-background)",
                chunk?.classNames,
              )}>
              {chunk.text.trim()}
            </span>{" "}
          </Fragment>
        );
      })}
    </TitleRow>
  ));

  return (
    <div className={twMerge("skyphr-container pb-7! md:pb-15!", className)}>
      {isSingleHeading ? <h2 className="flex flex-col items-center">{titleRows}</h2> : titleRows}
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
