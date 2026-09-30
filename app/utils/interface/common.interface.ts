import {
  BlogPostData,
  NavbarLinksInterface,
  NavFeaturedCard,
  SkyAiChallengeCard,
  SkyAiChallengesSection,
  SkyAiLensCard,
  SkyAiProcessStep,
  SkyAiServiceCard,
  SkyAiServicesSection,
  SkyAiSkyAgentCard,
  SkyVoiceCallConsoleData,
  SkyVoiceCallFlowMessage,
  SkyVoiceCallFlowStages,
  SkyVoiceCallFlowStep,
  SkyVoiceIndustry,
  SkyVoiceInfoCardData,
  SkyVoiceIntegration,
  SkyVoiceLanguage,
  SkyVoiceLanguages,
  SkyVoiceParticipant,
  SkyVoiceScriptLine,
  SkyVoiceSpeaker,
  SkyVoiceWhoForSection,
} from "@/app/utils/interface/data.interface";
import { DevelopmentProcessStep, SectionHeader, TextChunk } from "@/app/utils/interface/page.interface";
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

export interface BlogListingCardInterface {
  data: BlogPostData;
  readMoreLabel: string;
  featuredLabel: string;
  className?: string;
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
  description: TextChunk[][];
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
  // Render all title rows as lines of a single <h2> (default: one <h2> per row)
  isSingleHeading?: boolean;
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
  style?: React.CSSProperties;
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

export type SkyVoiceCallPhase = "idle" | "live" | "ended";

export interface SkyVoiceCallConsoleInterface {
  data: SkyVoiceCallConsoleData;
  className?: string;
}

export interface SkyVoiceCallPartyInterface {
  participant: SkyVoiceParticipant;
  tone: SkyVoiceSpeaker;
  avatar: React.ReactNode;
  isSpeaking: boolean;
  activityLabels: SkyVoiceCallConsoleData["activityLabels"];
}

export interface SkyVoiceWaveBarsInterface {
  tone: SkyVoiceSpeaker;
  isActive: boolean;
  className?: string;
}

export interface SkyVoiceCallControlInterface {
  phase: SkyVoiceCallPhase;
  labels: SkyVoiceCallConsoleData["controlLabels"];
  onStart: () => void;
  onEnd: () => void;
}

export interface SkyVoiceOrbInterface {
  reducedMotion: boolean;
}

export interface SkyVoiceOrbPlaceholderInterface {
  className?: string;
}

export interface SkyVoiceOrbSkeletonInterface {
  className?: string;
}

export interface SkyVoiceTranscriptLine extends SkyVoiceScriptLine {
  timestamp: number;
  // True while the typewriter is still writing this line (`text` is then the partial text)
  isTyping?: boolean;
}

export interface SkyVoiceTranscriptInterface {
  data: SkyVoiceCallConsoleData["transcript"];
  languages: SkyVoiceLanguages;
  language: SkyVoiceLanguage;
  onLanguageChange: (code: string) => void;
  names: Record<SkyVoiceSpeaker, string>;
  lines: SkyVoiceTranscriptLine[];
  // Lines that were already on screen at the last language switch; they fade back in one after another
  staggeredLineCount: number;
  phase: SkyVoiceCallPhase;
}

export interface SkyVoiceTranscriptLineInterface {
  line: SkyVoiceTranscriptLine;
  name: string;
  // Language of the spoken text (the speaker name and timestamp stay as they are)
  lang?: string;
  enterDelayMs?: number;
}

export interface SkyVoiceBookedCardInterface {
  data: SkyVoiceLanguage["booked"];
  lang?: string;
  enterDelayMs?: number;
}

export interface SkyVoiceLanguageSelectorInterface {
  data: SkyVoiceLanguages;
  activeCode: string;
  onChange: (code: string) => void;
  className?: string;
}

export interface SkyVoiceLanguageChipInterface {
  language: SkyVoiceLanguage;
  isSelected: boolean;
  onSelect: (code: string) => void;
  className?: string;
}

export interface SkyVoiceCallFlowScrubberInterface {
  steps: SkyVoiceCallFlowStep[];
  activeIndex: number;
  className?: string;
}

export interface SkyVoiceCallFlowScrubberMarkInterface {
  time: string;
  isDone: boolean;
  isFirst: boolean;
  isLast: boolean;
}

export interface SkyVoiceCallFlowStepsInterface {
  steps: SkyVoiceCallFlowStep[];
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
}

export interface SkyVoiceCallFlowStepInterface {
  step: SkyVoiceCallFlowStep;
  isActive: boolean;
  isPast: boolean;
  onSelect: () => void;
}

export interface SkyVoiceCallFlowStageInterface {
  data: SkyVoiceCallFlowStages;
  steps: SkyVoiceCallFlowStep[];
  activeIndex: number;
  // False while the section is off screen, so looping stage animations can pause
  isAnimating: boolean;
  className?: string;
}

export interface SkyVoiceCallFlowRingStageInterface {
  data: SkyVoiceCallFlowStages["ring"];
  isAnimating: boolean;
}

export interface SkyVoiceCallFlowGreetStageInterface {
  data: SkyVoiceCallFlowStages["greet"];
}

export interface SkyVoiceCallFlowUnderstandStageInterface {
  data: SkyVoiceCallFlowStages["understand"];
}

export interface SkyVoiceCallFlowBookStageInterface {
  data: SkyVoiceCallFlowStages["book"];
}

export interface SkyVoiceCallFlowSaveStageInterface {
  data: SkyVoiceCallFlowStages["save"];
}

export interface SkyVoiceCallFlowBubbleInterface {
  message: SkyVoiceCallFlowMessage;
  // Entrance delay in seconds, read by the stage's GSAP entrance
  delay?: number;
  className?: string;
}

export interface SkyVoiceCallFlowPillInterface {
  label: string;
  delay?: number;
  className?: string;
}

export interface SkyVoiceWhoForIndexInterface {
  data: SkyVoiceWhoForSection;
  activeIndex: number;
  // Below xmd each detail opens under its own row (accordion); above it they share the right-hand column
  isStacked: boolean;
  isAnimating: boolean;
  onSelect: (index: number) => void;
  className?: string;
}

export interface SkyVoiceWhoForIndexRowInterface {
  industry: SkyVoiceIndustry;
  isActive: boolean;
  tabId: string;
  panelId: string;
  onSelect: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export interface SkyVoiceWhoForDetailInterface {
  industry: SkyVoiceIndustry;
  labels: SkyVoiceWhoForSection["labels"];
  isActive: boolean;
  isAnimating: boolean;
  tabId: string;
  panelId: string;
  className?: string;
}

export interface SkyVoiceWhoForGreetingInterface {
  name: string;
  greeting: string;
  // Waveform loops only while this is true (active industry, section on screen)
  isAnimating: boolean;
}

export interface SkyVoiceWhoForCtaInterface {
  data: SkyVoiceWhoForSection["cta"];
  // Stacked card with a full-width button (used inside the panel, under the industry list)
  isCompact?: boolean;
  className?: string;
}

export interface SkyVoiceInfoCardInterface {
  data: SkyVoiceInfoCardData;
  // Bottom block (points list, "In practice" note); aligned across the row via subgrid
  children?: React.ReactNode;
  className?: string;
}

export interface SkyVoiceInfoCardPointsInterface {
  points: string[];
  className?: string;
}

export interface SkyVoiceInfoCardPracticeInterface {
  label: string;
  text: string;
  className?: string;
}

export interface SkyVoiceIntegrationCardInterface {
  data: SkyVoiceIntegration;
  className?: string;
}

export interface NavBarCommonLinkComponentInterface {
  item: NavbarLinksInterface;
  className?: string;
  parentWrapperClassName?: string;
  isPanelOpen: boolean;
  onOpenPanel: (id: string) => void;
  onHoverPanel: (id: string) => void;
  onClosePanel: () => void;
  onScheduleClosePanel: () => void;
  onNavigate: () => void;
  pathname: string;
}

export interface NavMegaPanelInterface {
  item: NavbarLinksInterface;
  panelId: string;
  isOpen: boolean;
  pathname: string;
  onNavigate: () => void;
  onBack: () => void;
  className?: string;
}

export interface NavCompactPanelInterface {
  item: NavbarLinksInterface;
  panelId: string;
  isOpen: boolean;
  pathname: string;
  onNavigate: () => void;
  className?: string;
}

export interface NavMegaPanelColumnInterface {
  item: NavbarLinksInterface;
  headingId: string;
  pathname: string;
  onNavigate: () => void;
  className?: string;
}

export interface NavFeaturedCardInterface {
  data: NavFeaturedCard;
  // Runs the voice wave; only true while the panel is open, so it doesn't animate while hidden
  isActive: boolean;
  onNavigate: () => void;
  className?: string;
}

export interface NavMegaPanelLinkInterface {
  item: NavbarLinksInterface;
  pathname: string;
  onNavigate: () => void;
  className?: string;
}
