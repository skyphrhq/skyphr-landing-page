import {
  SkyAiChallengeCard,
  SkyAiChallengesSection,
  SkyAiLensCard,
  SkyAiProcessStep,
  SkyAiServiceCard,
  SkyAiServicesSection,
  SkyAiSkyAgentCard,
} from "@/app/utils/interface/data.interface";
import { DevelopmentProcessStep, SectionHeader } from "@/app/utils/interface/page.interface";
import { StaticImageData } from "next/image";
import { ButtonHTMLAttributes } from "react";

export interface RootLayoutInterface {
  children: React.ReactNode;
}

export interface SmoothScrollProviderInterface {
  children: React.ReactNode;
}

export interface ButtonEleInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle: "CTA_PRIMARY" | "CTA_SECONDARY";
  href?: string;
  target?: string;
  rel?: string;
  theme?: "LIGHT" | "DARK";
  icon?: React.ReactNode;
}

export interface TrustedPillInterface {
  className?: string;
}

export type ANIMATION_DIRECTION = "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";

export interface AboutUsCardsDataArrayInterface {
  direction: ANIMATION_DIRECTION;
  icon: React.ReactNode;
  count: number;
  label: string;
}
export interface AboutUsCardInterface {
  data: AboutUsCardsDataArrayInterface;

  className?: string;
}

export interface RollingCounterNumberInterface {
  className?: string;
  count: number;
}
export interface OurProcessCardInterface {
  imageOptions: {
    imagePath: StaticImageData;
    width: number;
    height: number;
    alt: string;
    className?: string;
    loading?: "lazy" | "eager";
  };
  title: string;
  description: string;
  gridStyle?: "col-span-3" | "col-span-2" | "col-span-1";
  label?: string;
}

export interface BlogCardInterface {
  imageOptions: {
    imagePath: StaticImageData;
    width: number;
    height: number;
    alt: string;
    className?: string;
    loading?: "lazy" | "eager";
  };
  title: string;
  description: string;
  label?: string;
  date?: string;
}

export interface FaqCommonCardInterface {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export interface ClientTestimonialCardInterface {
  imageOptions: {
    imagePath: StaticImageData;
    width: number;
    height: number;
    alt: string;
    className?: string;
    loading?: "lazy" | "eager";
  };
  quote: string;
  name: string;
  role: string;
}

export interface OurValueCardInterface {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  color: string;
}

export interface OurTeamMembersDataArrayInterface {
  name: string;
  role: string;
  description: string;
  social: {
    platform: string;
    icon: React.ReactNode;
    url: string;
    title: string;
    ariaLabel: string;
    target?: string;
    rel?: string;
  }[];
  imageOptions: {
    imagePath: StaticImageData;
    width: number;
    height: number;
    alt: string;
    className?: string;
    loading?: "lazy" | "eager";
  };
}

export interface CommonSectionHeaderInterface {
  header: SectionHeader;
  className?: string;
  headerParentClass?: string;
  descriptionClass?: string;
}

export interface OurStepsDataInterface {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconBgColor: string;
  numBgColor: string;
  numTextColor: string;
}

export interface CommonButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export type IpInfoLiteResponse = {
  country_code?: string;
};

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phoneNumber: string;
  attachment: File | null;
  message: string;
};

export type FormErrors = Partial<Record<keyof FormValues, string>>;

export interface SkyAiChallengeCardInterface {
  card: SkyAiChallengeCard;
  index: number;
}

export interface SkyAiChallengeCtaCardInterface {
  data: NonNullable<SkyAiChallengesSection["ctaCard"]>;
}

export interface SkyAiServiceCardInterface {
  card: SkyAiServiceCard;
}

export interface SkyAiServiceCtaCardInterface {
  data: NonNullable<SkyAiServicesSection["ctaCard"]>;
  // "frosted" is the glass version used on dark backgrounds
  variant?: "solid" | "frosted";
  className?: string;
}

export interface SkyAiNetworkLinesInterface {
  color?: string;
  lineOpacity?: number;
  dotOpacity?: number;
  className?: string;
}

export interface SkyAiSkyAgentCardInterface {
  data: SkyAiSkyAgentCard;
}

export interface SkyAiLensCardInterface {
  data: SkyAiLensCard;
}

export interface SkyAiStatusPillInterface {
  label: string;
  tone: "green" | "blue";
  pulse?: boolean;
}

export interface SkyAiSectionBadgeInterface {
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export interface ProcessStepCardInterface {
  step: DevelopmentProcessStep;
  index: number;
  isLastStep?: boolean;
  variant?: "numbered" | "icon";
  icon?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export interface SkyAiProcessStepInterface {
  step: SkyAiProcessStep;
  index: number;
  deliverablesLabel: string;
  className?: string;
}

export interface SkyAiScoreRingInterface {
  score: number;
  max?: number;
  label: string;
  className?: string;
}

export interface SkyAiModalInterface {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export interface SkyAiLiveCallModalInterface {
  isOpen: boolean;
  onClose: () => void;
  data: SkyAiSkyAgentCard["liveCall"];
}
