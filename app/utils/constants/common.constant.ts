export const GET_BUTTON_STYLE = (btnStyle: "CTA_PRIMARY" | "CTA_SECONDARY") => {
  switch (btnStyle) {
    case "CTA_PRIMARY":
      return {
        parentWrapper:
          "px-6 min-w-[270px] min-h-[45px] py-2.5 bg-(--cta-button-background) text-(--root-white-color) font-instrument-sans text-sm sm:text-base rounded-full border-0 outline-0  font-semibold flex items-center justify-between gap-4 group/btn overflow-hidden relative cursor-pointer ring-[1px] ring-(--cta-button-background)",
        childrenWrapper: "group-hover/btn:translate-x-8 transition-all duration-300",
      };
    case "CTA_SECONDARY":
      return {
        parentWrapper:
          "px-6 min-w-[170px] py-2.5 min-h-[45px] bg-(--root-black-color) text-(--root-white-color) font-instrument-sans text-sm sm:text-base rounded-full border-0 outline-0 font-semibold group/btn overflow-hidden relative cursor-pointer ring-[1px] ring-(--root-black-color) flex items-center justify-between gap-6",
        childrenWrapper: "relative z-10 group-hover/btn:text-(--root-black-color) transition-all duration-300 w-fit-content",
      };
  }
};


export const COMMON_BORDER_RADIUS = "rounded-lg md:rounded-xl lg:rounded-2xl";