import { CommonPageDataInterface, HeroSection } from "@/app/utils/interface/page.interface";
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
  imageOptions: {
    imagePath: StaticImageData;
    width: number;
    height: number;
    alt: string;
    className?: string;
    loading?: "lazy" | "eager";
  };
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

export interface HirePageDataInterface extends Omit<CommonPageDataInterface, "hero"> {
  hero: HireHeroSection;
}
