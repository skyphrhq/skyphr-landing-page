import type {
  AboutSection,
  ContactUsSectionInterface,
  DevelopmentProcessSectionData,
  FAQSection,
  FeaturedWorkDataInterface,
  FeaturesIncludeSectionData,
  HeroSection,
  OurApproachInterface,
  OurInsightsSection,
  OurTeamSectionInterface as OurTeamSectionDataInterface,
  OurValuesInterface,
  ProcessSection,
  ReadyToScaleSectionDataInterface,
  ServicesSection,
  TechnologyStackSectionData,
  TestimonialSection,
  UseCaseSectionData,
  WhyChooseSectionData,
  WhatWeBuildSectionData,
} from "@/app/utils/interface/page.interface";
import type {
  BlogListingSection,
  BlogPostData,
  SkyAiBuiltBySection,
  SkyAiChallengesSection,
  SkyAiHeroSection,
  SkyAiProcessSection,
  SkyAiSecuritySection,
  SkyAiServicesSection,
  SkyVoiceAfterCallSection,
  SkyVoiceCallFlowSection,
  SkyVoiceHeroSection,
  SkyVoiceTrustSection,
  SkyVoiceWhoForSection,
} from "@/app/utils/interface/data.interface";

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

export interface DevelopmentProcessSectionInterface {
  data: DevelopmentProcessSectionData;
  classNames?: string;
}

export interface FeaturesIncludeSectionProps {
  data: FeaturesIncludeSectionData;
  classNames?: string;
}

export interface WhatWeBuildSectionProps {
  data: WhatWeBuildSectionData;
  classNames?: string;
}

export interface UseCaseSectionProps {
  data: UseCaseSectionData;
  classNames?: string;
}

export interface TechnologyStackSectionProps {
  data: TechnologyStackSectionData;
  classNames?: string;
}

export interface WhyChooseSectionProps {
  data: WhyChooseSectionData;
  classNames?: string;
}

export interface SkyAiHeroSectionInterface {
  data: SkyAiHeroSection;
  classNames?: string;
}

export interface SkyAiServicesSectionInterface {
  data: SkyAiServicesSection;
  classNames?: string;
}

export interface SkyAiChallengesSectionInterface {
  data: SkyAiChallengesSection;
  classNames?: string;
}

export interface SkyAiBuiltBySectionInterface {
  data: SkyAiBuiltBySection;
  classNames?: string;
}

export interface SkyAiProcessSectionInterface {
  data: SkyAiProcessSection;
  classNames?: string;
}

export interface SkyAiSecuritySectionInterface {
  data: SkyAiSecuritySection;
  classNames?: string;
}

export interface SkyVoiceHeroSectionInterface {
  data: SkyVoiceHeroSection;
  classNames?: string;
}

export interface SkyVoiceCallFlowSectionInterface {
  data: SkyVoiceCallFlowSection;
  classNames?: string;
}

export interface SkyVoiceWhoForSectionInterface {
  data: SkyVoiceWhoForSection;
  classNames?: string;
}

export interface SkyVoiceAfterCallSectionInterface {
  data: SkyVoiceAfterCallSection;
  classNames?: string;
}

export interface SkyVoiceTrustSectionInterface {
  data: SkyVoiceTrustSection;
  classNames?: string;
}

export interface BlogListingSectionInterface {
  data: BlogListingSection;
  posts: BlogPostData[];
  classNames?: string;
}

export interface BlogArticleScreenInterface {
  data: BlogPostData;
  classNames?: string;
}
