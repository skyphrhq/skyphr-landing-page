import { twMerge } from "tailwind-merge";

export const GET_BUTTON_STYLE = (btnStyle: "CTA_PRIMARY" | "CTA_SECONDARY", theme?: "LIGHT" | "DARK") => {
  switch (btnStyle) {
    case "CTA_PRIMARY":
      return {
        parentWrapper:
          "px-6 min-w-[270px] min-h-[45px] py-2.5 bg-(--cta-button-background) text-(--root-white-color) font-instrument-sans text-sm sm:text-base rounded-full border-0 outline-0  font-semibold flex items-center justify-between gap-4 group/btn overflow-hidden relative cursor-pointer ring-[1px] ring-(--cta-button-background) pr-13",
        childrenWrapper: "group-hover/btn:translate-x-8 transition-all duration-300",
      };
    case "CTA_SECONDARY":
      return {
        parentWrapper: twMerge(
          "px-6 min-w-[170px] py-2.5 min-h-[45px] font-instrument-sans text-sm sm:text-base rounded-full border-0 outline-0 font-semibold group/btn overflow-hidden relative cursor-pointer ring-[1px] ring-(--root-black-color) flex items-center justify-between gap-6 pr-10",
          theme === "DARK"
            ? "bg-(--root-black-color) text-(--root-white-color) ring-(--root-black-color)"
            : "bg-(--root-white-color) text-(--root-black-color)",
        ),
        childrenWrapper: twMerge(
          "relative z-10  transition-all duration-300 w-fit-content",
          theme === "DARK" ? "group-hover/btn:text-(--root-black-color)" : "group-hover/btn:text-(--root-white-color)",
        ),
      };
  }
};

export const COMMON_BORDER_RADIUS = "rounded-lg md:rounded-xl lg:rounded-2xl";

export const COMMON_SECTION_PADDING = "py-15! md:py-20! xl:py-37.5!";

// Tailwind v4 hover translate uses the `translate` property, so it doesn't fight GSAP's reveal transform
export const SKYAI_SERVICE_CARD_BASE =
  "reveal-animation h-full flex flex-col rounded-[20px] p-6 md:p-8 transition-[translate,background-color,border-color] duration-200 hover:-translate-y-0.5";

export const SITE_BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL ?? "https://skyphr.com").replace(
  /\/$/,
  "",
);
