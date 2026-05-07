import { CreateScrollTrigger } from "@/app/utils/helpers/helper";
import { ANIMATION_DIRECTION } from "@/app/utils/interface/common.interface";

export const COMMON_REVEL_ANIMATION: { FROM: gsap.TweenVars; TO: gsap.TweenVars } = {
  FROM: {
    y: 50,
    opacity: 0,
    filter: "blur(10px)",
  },
  TO: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    ease: "power3.out",
    stagger: 0.1,
  },
};

export const COMMON_SCROLL_TRIGGER_ANIMATION = ({
  trigger,
  start = "top 80%",
  end = "bottom top",
  markers = false,
}: {
  trigger: Element | string;
  start?: string;
  end?: string;
  markers?: boolean;
}): { FROM: gsap.TweenVars; TO: gsap.TweenVars } => {
  return {
    FROM: {
      y: 50,
      opacity: 0,
      filter: "blur(10px)",
    },
    TO: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: CreateScrollTrigger({
        trigger: trigger,
        start: start,
        end: end,
        markers: markers,
      }),
    },
  };
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
