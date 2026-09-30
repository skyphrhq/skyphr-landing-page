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

// TODO: replace with Sky's real phone number. `display` is shown to people, `e164` is used for tel: links and copying.
// Used by /ai-voice-agent ("Call Sky yourself") and the Sky card on /sky-ai ("Try a live call").
export const SKY_VOICE_PHONE_NUMBER = {
  display: "+1 (000) 000-0000",
  e164: "+10000000000",
};

// Spline scene for the orb in the /ai-voice-agent call demo (served from public/spline/)
export const SKY_VOICE_ORB_SCENE_URL = "/spline/sky-voice-orb.splinecode";

export const SKY_AI_CONSULTATION_URL = "https://cal.com/skyphr/sky-demo";

export const SITE_BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL ?? "https://skyphr.com").replace(
  /\/$/,
  "",
);

// Below this width the navbar is the mobile drawer (same breakpoint as the navbar CSS in globals.css)
export const NAV_MOBILE_MEDIA_QUERY = "(max-width: 991px)";

// How long the desktop mega panel stays open after the mouse leaves, so crossing the gap to it doesn't flicker
export const NAV_PANEL_CLOSE_DELAY_MS = 150;

// Hover intent: with a panel open, another trigger has to be hovered this long before its panel replaces it,
// so moving diagonally from a link into the open panel doesn't switch panels on the way
export const NAV_PANEL_SWITCH_DELAY_MS = 120;
