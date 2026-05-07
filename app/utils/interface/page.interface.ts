// ===============================
// TEXT SYSTEM

import {
  AboutUsCardsDataArrayInterface,
  BlogCardInterface,
  ClientTestimonialCardInterface,
  OurProcessCardInterface,
  OurStepsDataInterface,
  OurValueCardInterface,
} from "@/app/utils/interface/common.interface";
import {
  FaqCommonCardData,
  FeaturedWorkInterface,
  OurServiceCardDataArrayInterface,
} from "@/app/utils/interface/data.interface";

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

export interface SectionHeader {
  title: TextChunk[][];
  description?: TextChunk[][];
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

// ===============================
// PAGE TYPE
// ===============================
export interface CommonPageDataInterface {
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
}
