// ===============================
// TEXT SYSTEM

import type {
  AboutUsCardsDataArrayInterface,
  BlogCardInterface,
  ClientTestimonialCardInterface,
  OurProcessCardInterface,
  OurStepsDataInterface,
  OurTeamMembersDataArrayInterface,
  OurValueCardInterface,
} from "@/app/utils/interface/common.interface";
import type {
  FaqCommonCardData,
  FeaturedWorkInterface,
  OurServiceCardDataArrayInterface,
} from "@/app/utils/interface/data.interface";
import { Metadata } from "next";
import { StaticImageData } from "next/image";

// ===============================
export type TextVariant = "normal" | "bold" | "italic" | "brand" | "muted";

export interface TextChunk {
  text: string;
  variant?: TextVariant;
  classNames?: string;
}

// ===============================
// COMMON UI TYPES
// ===============================
export interface CTA {
  label: string;
  href?: string;
  variant: "CTA_PRIMARY" | "CTA_SECONDARY";
  external?: boolean;
  classNames?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

export interface ImageOptionsInterface {
  imagePath: StaticImageData;
  width: number;
  height: number;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

export interface heroHighlightedText {
  textOne: string;
  textTwo: string;
  description: TextChunk[];
}
export interface SectionHeader {
  title: TextChunk[][];
  description?: TextChunk[][];
  heroImage?: ImageOptionsInterface;
  heroHighlightedText?: heroHighlightedText;
}

// ===============================
// SECTION TYPES
// ===============================
export interface HeroSection {
  header: SectionHeader;
  ctas?: CTA[];
  trustedBy?: string[];
}

export interface AboutSection {
  header: SectionHeader;
  cta?: CTA;
  cards: AboutUsCardsDataArrayInterface[]; // replace with your actual card type
}

export interface ServicesSection {
  header: SectionHeader;
  items: OurServiceCardDataArrayInterface[]; // replace with service type
}

export interface ProcessSection {
  header: SectionHeader;
  steps: OurProcessCardInterface[]; // replace with process type
}

export interface TestimonialSection {
  header: SectionHeader;
  clientsFeedback: ClientTestimonialCardInterface[]; // replace with feedback type
}

export interface FAQSection {
  header: SectionHeader;
  faqsItems: FaqCommonCardData[]; // replace with FAQ type
}

export interface OurInsightsSection {
  header: SectionHeader;
  blogsData: BlogCardInterface[];
}

export interface ReadyToScaleSectionDataInterface {
  header: SectionHeader;
  ctas: CTA[];
}

export interface FeaturedWorkDataInterface {
  header?: SectionHeader;
  featuredWorksData: FeaturedWorkInterface[];
}

export interface OurValuesInterface {
  header: SectionHeader;
  valuesCards: OurValueCardInterface[]; // replace with your actual card type
}

export interface OurApproachInterface {
  header: SectionHeader;
  steps: OurStepsDataInterface[];
}

export interface ContactUsSectionInterface {
  header: SectionHeader;
}

export interface OurTeamSectionInterface {
  header: SectionHeader;
  members: OurTeamMembersDataArrayInterface[];
}

export type DevelopmentProcessStep = {
  title: string;
  description: string;
};

export type DevelopmentProcessSectionData = {
  header: SectionHeader;
  steps: DevelopmentProcessStep[];
};
export type FeaturesIncludeSectionData = {
  header: SectionHeader;
  features: string[];
};

export type WhatWeBuildSectionData = {
  header: SectionHeader;
  cards: { title: string; description: string }[];
};

export type UseCaseItem = {
  title: string;
  description?: string;
};

export type UseCaseSectionData = {
  header: SectionHeader;
  items: UseCaseItem[];
};

export type TechnologyItem = {
  name: string;
  logoSrc?: string;
  logoAlt?: string;
};

export type TechnologyStackGroup = {
  title: string;
  technologies: TechnologyItem[];
};

export type TechnologyStackSectionData = {
  header: SectionHeader;
  groups: TechnologyStackGroup[];
};

export type WhyChooseHighlight = {
  value: string;
  label: string;
};

export type WhyChooseReason = {
  title: string;
  description: string;
};

export type WhyChooseSectionData = {
  header: SectionHeader;
};

// ===============================
// PAGE TYPE
// ===============================
export interface CommonPageDataInterface {
  Metadata?: Metadata;
  hero?: HeroSection;
  featuredWorks?: FeaturedWorkDataInterface;
  about?: AboutSection;
  services?: ServicesSection;
  process?: ProcessSection;
  testimonials?: TestimonialSection;
  faq?: FAQSection;
  ourInsights?: OurInsightsSection;
  readyToScale?: ReadyToScaleSectionDataInterface;
  ourValues?: OurValuesInterface;
  ourApproach?: OurApproachInterface;
  developmentProcess?: DevelopmentProcessSectionData;
  whatWeBuild?: WhatWeBuildSectionData;
  featuresInclude?: FeaturesIncludeSectionData;
  useCase?: UseCaseSectionData;
  technologyStack?: TechnologyStackSectionData;
  whyChoose?: WhyChooseSectionData;
  ourTeam?: OurTeamSectionInterface;
  contactUs?: ContactUsSectionInterface;
}
