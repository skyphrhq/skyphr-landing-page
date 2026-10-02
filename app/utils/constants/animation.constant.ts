import { CreateScrollTrigger } from "@/app/utils/helpers/helper";
import { ANIMATION_DIRECTION } from "@/app/utils/interface/common.interface";

export const COMMON_REVEL_ANIMATION: { FROM: gsap.TweenVars; TO: gsap.TweenVars } = {
  FROM: {
    y: 50,
    opacity: 0,
    filter: "blur(3px)",
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
  stagger = 0.1,
}: {
  trigger: Element | string;
  start?: string;
  end?: string;
  markers?: boolean;
  stagger?: number;
}): { FROM: gsap.TweenVars; TO: gsap.TweenVars } => {
  return {
    FROM: {
      y: 50,
      opacity: 0,
      filter: "blur(3px)",
    },
    TO: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
      stagger: stagger || 0.1,
      scrollTrigger: CreateScrollTrigger({
        trigger: trigger,
        start: start,
        end: end,
        markers: markers,
      }),
    },
  };
};
// /ai-voice-agent call flow: stage elements rise in; each element sets its own delay with `data-flow-delay`
export const SKY_VOICE_CALL_FLOW_STAGE_ANIMATION: { FROM: gsap.TweenVars; TO: gsap.TweenVars } = {
  FROM: {
    y: 12,
    scale: 0.98,
    opacity: 0,
    filter: "blur(4px)",
  },
  TO: {
    y: 0,
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.6,
    ease: "expo.out",
    delay: (_index: number, target: HTMLElement) => Number(target.dataset.flowDelay ?? 0),
  },
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
