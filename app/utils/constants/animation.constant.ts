import { ANIMATION_DIRECTION } from "@/appinterface/common.interface";

export const COMMON_REVEL_ANIMATION: gsap.TweenVars = {
  y: 0,
  opacity: 1,
  filter: "blur(0px)",
  duration: 1,
  ease: "power3.out",
  stagger: 0.1,
};

export const ABOUT_US_CARD_ANIMATION_CLASS = (direction: ANIMATION_DIRECTION) => {
  switch (direction) {
    case "TOP_LEFT":
      return "origin-bottom-right";
    case "TOP_RIGHT":
      return "origin-bottom-left";
    case "BOTTOM_LEFT":
      return "origin-top-right";
    case "BOTTOM_RIGHT":
      return "origin-top-left";
  }
};
