import { CommonPageDataInterface, HeroSection } from "@/app/utils/interface/page.interface";

export interface HireHeroSection extends HeroSection {
  highlights: string[];
}

export interface HirePageDataInterface extends Omit<CommonPageDataInterface, "hero"> {
  hero: HireHeroSection;
}
