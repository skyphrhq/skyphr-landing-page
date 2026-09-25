import {
  CommonPageDataInterface,
  CTA,
  DevelopmentProcessStep,
  HeroSection,
  ImageOptionsInterface,
  SectionHeader,
} from "@/app/utils/interface/page.interface";
import { StaticImageData } from "next/image";

export interface NavbarLinksInterface {
  id: string;
  label: string;
  href: string;
  priority: number;
  type: "button" | "link" | "listing"; // The "Listing" will be only visible in the sitemap.xml and not in the navbar
  isLink?: boolean;
  dropDown: NavbarLinksInterface[];
  target?: "_blank" | "_self";
}

export interface FeaturedWorkInterface {
  id: string;
  imagePath: StaticImageData;
  alt: string;
}

export interface ServiceDataInterface {
  id: string;
  title: string;
  category: string;
  description: string;
  bgGradient: string;
}

export interface OurServiceCardDataArrayInterface {
  title: string;
  description: string;
  className?: string;
  imageOptions: ImageOptionsInterface;
  ctaButton: {
    label: string;
    href: string;
  };
  style: {
    baseColor: string;
    darkColor: string;
  };
}

export interface FaqCommonCardData {
  question: string;
  answer: React.ReactNode;
}

export interface HireHeroSection extends HeroSection {
  highlights: string[];
}

export interface HirePageDataInterface extends Omit<CommonPageDataInterface, "hero" | "services"> {
  hero: HireHeroSection;
}

export interface SkyAiHeroTag {
  label: string;
  icon: React.ReactNode;
}

export interface SkyAiHeroSection extends HeroSection {
  wordmark: {
    text: string;
    highlightedText: string;
  };
  exploreLink?: {
    label: string;
    href: string;
  };
  tags?: SkyAiHeroTag[];
}

export interface SkyAiSubNavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  trailingIcon: "chevron" | "arrow";
}

export interface SkyAiTechLogo {
  name: string;
  icon?: React.ReactNode;
  // Wordmark-only brands (e.g. Anthropic) and per-logo sizing tweaks
  labelClassName?: string;
  iconClassName?: string;
}

export interface SkyAiTechStrip {
  label: string[];
  logos: SkyAiTechLogo[];
}

export interface SkyAiServiceCard {
  id?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  points: string[];
  link: {
    label: string;
    href: string;
  };
}

export interface SkyAiServicesSection {
  id?: string;
  badge: string;
  header: SectionHeader;
  cards: SkyAiServiceCard[];
  // Closing card at the end of the grid
  ctaCard?: {
    title: string;
    description: string;
    cta: Pick<CTA, "label" | "target" | "rel"> & { href: string };
  };
}

export interface SkyAiChallengeCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageOptions: {
    imagePath: StaticImageData;
    width: number;
    height: number;
    alt: string;
  };
}

export interface SkyAiChallengesSection {
  id?: string;
  badge: string;
  header: SectionHeader;
  cards: SkyAiChallengeCard[];
  ctaCard?: {
    title: string;
    description: string;
    cta: { label: string; href: string; target?: string; rel?: string };
  };
}

export interface SkyAiBuiltByStat {
  value: string;
  label: string;
}

export interface SkyAiBuiltByStackChip {
  label: string;
  icon: React.ReactNode;
}

export interface SkyAiSkyAgentCard {
  status: string;
  title: string;
  description: string;
  stats: SkyAiBuiltByStat[];
  stack: SkyAiBuiltByStackChip[];
  imageOptions: {
    imagePath: StaticImageData;
    width: number;
    height: number;
    alt: string;
  };
  demo: {
    label: string;
    modalTitle: string;
    videoUrl: string;
  };
  liveCall: {
    label: string;
    modalTitle: string;
    // Shown to people; `phoneNumber` is the E.164 value used for tel: links and copying
    displayNumber: string;
    phoneNumber: string;
    note: string;
  };
}

export interface SkyAiLensIssue {
  label: string;
  severity: "high" | "medium";
}

export interface SkyAiLensCard {
  status: string;
  title: string;
  description: string;
  cta: { label: string; href: string; target?: string; rel?: string };
  score: number;
  scoreLabel: string;
  issues: SkyAiLensIssue[];
}

export interface SkyAiBuiltBySection {
  id?: string;
  badge: string;
  header: SectionHeader;
  skyCard: SkyAiSkyAgentCard;
  lensCard: SkyAiLensCard;
  ctaCard: NonNullable<SkyAiServicesSection["ctaCard"]>;
}

export interface SkyAiProcessStep {
  title: string;
  description: string;
  deliverables: string[];
}

export interface SkyAiProcessPrinciple {
  label: string;
  icon: React.ReactNode;
}

export interface SkyAiProcessSection {
  id?: string;
  badge: string;
  header: SectionHeader;
  steps: SkyAiProcessStep[];
  deliverablesLabel: string;
  principles: {
    label: string;
    items: SkyAiProcessPrinciple[];
  };
}

export interface SkyAiSecurityCard extends DevelopmentProcessStep {
  icon: React.ReactNode;
}

export interface SkyAiSecuritySection {
  id?: string;
  badge: { label: string; icon: React.ReactNode };
  header: SectionHeader;
  cards: SkyAiSecurityCard[];
}

export interface SkyAiPageDataInterface extends Omit<CommonPageDataInterface, "hero" | "services"> {
  hero: SkyAiHeroSection;
  subNav?: SkyAiSubNavItem[];
  techStrip?: SkyAiTechStrip;
  services?: SkyAiServicesSection;
  challenges?: SkyAiChallengesSection;
  builtBy?: SkyAiBuiltBySection;
  buildProcess?: SkyAiProcessSection;
  security?: SkyAiSecuritySection;
}
