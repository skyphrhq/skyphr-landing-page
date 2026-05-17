import {
  AboutSection,
  ContactUsSectionInterface,
  FAQSection,
  FeaturedWorkDataInterface,
  HeroSection,
  OurApproachInterface,
  OurInsightsSection,
  OurTeamSectionInterface as OurTeamSectionDataInterface,
  OurValuesInterface,
  ProcessSection,
  ReadyToScaleSectionDataInterface,
  ServicesSection,
  TestimonialSection,
} from "@/app/utils/interface/page.interface";

export interface HeroSectionElementInterface {
  data: HeroSection;
  classNames?: string;
}

export interface AboutSectionElementInterface {
  data: AboutSection;
  classNames?: string;
}

export interface OurServiceSectionInterface {
  data: ServicesSection;
  classNames?: string;
}

export interface OurProcessSectionInterface {
  data: ProcessSection;
  classNames?: string;
}

export interface ClientTestimonialSectionInterface {
  data: TestimonialSection;
  classNames?: string;
}

export interface FrequentlyAskedQuestionsInterface {
  data: FAQSection;
  classNames?: string;
}

export interface OurInsightsSectionInterface {
  data: OurInsightsSection;
  classNames?: string;
}

export interface AboutUsHeroSectionInterface {
  data: HeroSection;
  classNames?: string;
}

export interface ReadyToScaleSectionInterface {
  data: ReadyToScaleSectionDataInterface;
  classNames?: string;
}

export interface FeaturedWorksSectionInterface {
  data: FeaturedWorkDataInterface;
  classNames?: string;
  showShadow?: boolean;
}

export interface OurValuesSectionInterface {
  data: OurValuesInterface;
  classNames?: string;
}

export interface ContactHeroSectionInterface {
  data: HeroSection;
  onStartProjectClick: () => void;
  classNames?: string;
}

export interface ServicesSectionHeroInterface {
  data: HeroSection;
  classNames?: string;
}

export interface OurApproachSectionInterface {
  data: OurApproachInterface;
  classNames?: string;
}

export interface ContactUsSectionDataInterface {
  data: ContactUsSectionInterface;
  classNames?: string;
}

export interface OurTeamSectionInterface {
  data: OurTeamSectionDataInterface;
  classNames?: string;
}
