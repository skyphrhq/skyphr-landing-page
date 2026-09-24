import {
  CommonPageDataInterface,
  CTA,
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

export interface SkyAiPageDataInterface extends Omit<CommonPageDataInterface, "hero" | "services"> {
  hero: SkyAiHeroSection;
  subNav?: SkyAiSubNavItem[];
  techStrip?: SkyAiTechStrip;
  services?: SkyAiServicesSection;
}
