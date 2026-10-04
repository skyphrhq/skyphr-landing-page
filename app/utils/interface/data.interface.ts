import {
  CommonPageDataInterface,
  CTA,
  DevelopmentProcessStep,
  HeroSection,
  ImageOptionsInterface,
  SectionHeader,
} from "@/app/utils/interface/page.interface";
import type { CMSImageData } from "@/types/type";
import type { Metadata } from "next";
import { StaticImageData } from "next/image";

// Promo card shown beside the link columns of a mega panel (never in a compact dropdown)
export interface NavFeaturedCard {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    href: string;
    target?: "_blank" | "_self";
  };
}

export interface NavbarLinksInterface {
  id: string;
  label: string;
  // One short line shown under the label in a dropdown
  description?: string;
  href: string;
  priority: number;
  type: "button" | "link" | "listing"; // The "Listing" will be only visible in the sitemap.xml and not in the navbar
  isLink?: boolean;
  dropDown: NavbarLinksInterface[];
  target?: "_blank" | "_self";
  featured?: NavFeaturedCard;
}

// ===============================
// BLOG
// ===============================
// A blog post as the blog CMS saves it in data/blogs/<slug>.json (the file is the source of truth).
// Image `url`s are rewritten from "./public/..." file paths to site URLs when the file is read.
export interface BlogCmsSeo {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  // Meta robots string, e.g. "index, follow"
  robots?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: CMSImageData;
    type?: "article" | "website";
  };
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    image?: CMSImageData;
  };
  // Ready-made JSON-LD written in the CMS; empty `data` falls back to the generated schema
  schema?: {
    type?: string;
    data?: Record<string, unknown>;
  };
}

export interface BlogCmsListing {
  title: string;
  description: string;
  image: CMSImageData;
  authorName: string;
  // ISO date; may be empty, then the BlogPosting datePublished from seo.schema is used
  date: string;
  isFeatured: boolean;
}

// `type` is the section `name` from skyphr-cms-config/blog.config.json, `data` the block's props
export interface BlogCmsSection {
  type: string;
  data: Record<string, unknown>;
}

export interface BlogCmsPost {
  seo: BlogCmsSeo;
  listing: BlogCmsListing;
  sections: BlogCmsSection[];
}

export interface BlogPostData extends BlogCmsPost {
  // File name without .json
  slug: string;
  // Resolved publish date (listing.date or the schema's datePublished), "" if neither is set
  publishedAt: string;
}

export interface BlogListingSection {
  header: SectionHeader;
  readMoreLabel: string;
  featuredLabel: string;
  emptyStateLabel: string;
}

export interface BlogListingPageDataInterface {
  metadata: Metadata;
  listing: BlogListingSection;
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
  // Service pages shown as pills, taken from the matching group in the navbar
  services: NavbarLinksInterface[];
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

export interface SkyAiSubNavChild {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

export interface SkyAiSubNavItem {
  label: string;
  // Ignored when `children` is set: the item becomes a dropdown trigger instead of a link
  href: string;
  icon: React.ReactNode;
  trailingIcon: "chevron" | "arrow";
  children?: SkyAiSubNavChild[];
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
  status?: string;
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
  pageLink?: { label: string; href: string };
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
  // deliverables: string[];
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

// ===============================
// SKY AI VOICE AGENT PAGE (/ai-voice-agent)
// ===============================
export type SkyVoiceSpeaker = "caller" | "sky";

export interface SkyVoiceScriptLine {
  speaker: SkyVoiceSpeaker;
  text: string;
}

export interface SkyVoiceParticipant {
  name: string;
  role: string;
}

export interface SkyVoiceBookedItem {
  label: string;
  icon: React.ReactNode;
}

export interface SkyVoiceCallConsoleData {
  caller: SkyVoiceParticipant;
  sky: SkyVoiceParticipant & { initial: string };
  statusLabels: { idle: string; live: string; ended: string };
  activityLabels: { speaking: string; listening: string };
  controlLabels: {
    start: string;
    end: string;
    replay: string;
    startAria: string;
    endAria: string;
    replayAria: string;
  };
  transcript: { title: string; emptyText: string };
  languages: SkyVoiceLanguages;
}

// One demo call in one language. Every language has the same lines, in the same order
export interface SkyVoiceLanguage {
  // BCP 47 code: used in the URL (?lang=hi) and as the `lang` attribute
  code: string;
  // Language name in its own script
  label: string;
  note: string;
  booked: { title: string; detail: string; items: SkyVoiceBookedItem[] };
  script: SkyVoiceScriptLine[];
}

export interface SkyVoiceLanguages {
  label: string;
  queryParam: string;
  defaultCode: string;
  moreLanguagesCount: number;
  demoLink: { label: string; href: string; target?: string; rel?: string };
  options: SkyVoiceLanguage[];
}

export interface SkyVoiceHeroSection extends HeroSection {
  id?: string;
  chip?: string;
  console: SkyVoiceCallConsoleData;
  stackNote?: string;
}

// "What happens in 90 seconds": one call, split into timed steps, each with its own stage visual
export interface SkyVoiceCallFlowStep {
  time: string;
  title: string;
  description: string;
}

export interface SkyVoiceCallFlowMessage extends SkyVoiceScriptLine {
  name: string;
}

export interface SkyVoiceCallFlowDetail {
  label: string;
  value: string;
}

export interface SkyVoiceCallFlowRecordItem extends SkyVoiceCallFlowDetail {
  icon: React.ReactNode;
}

export interface SkyVoiceCallFlowStages {
  ring: { title: string; number: string; status: string };
  greet: { message: SkyVoiceCallFlowMessage; profileTitle: string; profile: SkyVoiceCallFlowDetail[] };
  understand: { message: SkyVoiceCallFlowMessage; detailsTitle: string; details: SkyVoiceCallFlowDetail[] };
  book: {
    calendarTitle: string;
    days: string[];
    times: string[];
    // Slot ids are `${day}-${time}`, e.g. "Thu-4:30"
    busySlots: string[];
    bookedSlot: string;
    message: SkyVoiceCallFlowMessage;
    status: string;
  };
  save: {
    lead: { name: string; company: string; tag: string };
    summary: string;
    items: SkyVoiceCallFlowRecordItem[];
  };
}

export interface SkyVoiceCallFlowSection {
  id?: string;
  header: SectionHeader;
  steps: SkyVoiceCallFlowStep[];
  stages: SkyVoiceCallFlowStages;
}

// "Who it's for": one entry per industry, shown as a tab (desktop) or an accordion row (mobile)
export interface SkyVoiceIndustry {
  id: string;
  icon: React.ReactNode;
  name: string;
  who: string;
  problem: string;
  handles: string[];
  // Optional important line shown in red right after the "handles" list
  important?: string;
  greeting: string;
  books: string;
  // Shown under the detail, e.g. for the industry Skyphr itself is in
  note?: string;
}

export interface SkyVoiceWhoForSection {
  id?: string;
  header: SectionHeader;
  labels: {
    tablist: string;
    books: string;
    problem: string;
    handles: string;
    answers: string;
    sky: string;
  };
  industries: SkyVoiceIndustry[];
  cta: { title: string; description: string; button: CTA };
}

// Card used by "After the call" and "Trust and control": icon, title, paragraph, then a bottom block
export interface SkyVoiceInfoCardData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SkyVoiceAfterCallCard extends SkyVoiceInfoCardData {
  points: string[];
}

export interface SkyVoiceIntegration {
  icon: React.ReactNode;
  name: string;
  // Small pill next to the name; the open-ended "Your tools" card has none
  role?: string;
  description: string;
  isOpenEnded?: boolean;
}

export interface SkyVoiceAfterCallSection {
  id?: string;
  header: SectionHeader;
  cards: SkyVoiceAfterCallCard[];
  integrations: { title: string; description: string; items: SkyVoiceIntegration[] };
}

export interface SkyVoiceTrustPrinciple extends SkyVoiceInfoCardData {
  practice: string;
}

export interface SkyVoiceTrustSection {
  id?: string;
  header: SectionHeader;
  practiceLabel: string;
  principles: SkyVoiceTrustPrinciple[];
}

export interface AiVoiceAgentPageDataInterface extends Omit<CommonPageDataInterface, "hero"> {
  hero: SkyVoiceHeroSection;
  callFlow?: SkyVoiceCallFlowSection;
  whoFor?: SkyVoiceWhoForSection;
  afterCall?: SkyVoiceAfterCallSection;
  trust?: SkyVoiceTrustSection;
}
