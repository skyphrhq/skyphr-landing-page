import JsonLd from "@/app/components/JsonLd";
import SkyAiSubNav from "@/app/components/skyAiSubNav";
import SkyAiTechStrip from "@/app/components/skyAiTechStrip";
import { HOME_PAGE_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SKY_AI_PAGE_DATA } from "@/app/content/pageContent/pageData/skyAi.data";
import FrequentlyAskedQuestions from "@/app/screens/common/frequentlyAskedQuestions";
import OurApproachSection from "@/app/screens/common/ourApproachSec";
import ContactUsSection from "@/app/screens/contactUsSection";
import SkyAiBuiltBySection from "@/app/screens/skyAiBuiltBySection";
import SkyAiChallengesSection from "@/app/screens/skyAiChallengesSection";
import SkyAiHeroSection from "@/app/screens/skyAiHeroSection";
import SkyAiSecuritySection from "@/app/screens/skyAiSecuritySection";
import SkyAiServicesSection from "@/app/screens/skyAiServicesSection";
import { normalizePageMetadata } from "@/app/utils/seo/metadata";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/app/utils/seo/schema";
import type { Metadata } from "next";

const title =
  typeof SKY_AI_PAGE_DATA.metadata?.title === "string"
    ? SKY_AI_PAGE_DATA.metadata.title
    : "SkyAI by Skyphr | AI Agents, LLM Integration & Workflow Automation";
const description =
  SKY_AI_PAGE_DATA.metadata?.description ??
  "SkyAI is the AI engineering division of Skyphr, building AI agents, LLM integrations, and workflow automations for production.";
const path = "/sky-ai";

export const metadata: Metadata = SKY_AI_PAGE_DATA.metadata
  ? normalizePageMetadata(SKY_AI_PAGE_DATA.metadata, path)
  : { title, description };

function SkyAiPage() {
  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({ title, description, path }),
          generateBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "SkyAI", path },
          ]),
        ]}
      />
      {SKY_AI_PAGE_DATA?.subNav && <SkyAiSubNav items={SKY_AI_PAGE_DATA.subNav} />}
      {SKY_AI_PAGE_DATA?.hero && (
        <section className="w-full h-auto">
          <SkyAiHeroSection data={SKY_AI_PAGE_DATA.hero} />
        </section>
      )}
      {SKY_AI_PAGE_DATA?.techStrip && <SkyAiTechStrip data={SKY_AI_PAGE_DATA.techStrip} />}
      {SKY_AI_PAGE_DATA?.services && (
        <section className="w-full h-auto">
          <SkyAiServicesSection data={SKY_AI_PAGE_DATA.services} />
        </section>
      )}
      {SKY_AI_PAGE_DATA?.challenges && (
        <section className="w-full h-auto">
          <SkyAiChallengesSection data={SKY_AI_PAGE_DATA.challenges} />
        </section>
      )}
      {SKY_AI_PAGE_DATA?.builtBy && (
        <section className="w-full h-auto">
          <SkyAiBuiltBySection data={SKY_AI_PAGE_DATA.builtBy} />
        </section>
      )}
      {SKY_AI_PAGE_DATA?.ourApproach && (
        <section className="w-full h-auto">
          <OurApproachSection data={SKY_AI_PAGE_DATA.ourApproach} />
        </section>
      )}
      {SKY_AI_PAGE_DATA?.security && (
        <section className="w-full h-auto" aria-labelledby="skyai-security-heading">
          <SkyAiSecuritySection data={SKY_AI_PAGE_DATA.security} />
        </section>
      )}
      {HOME_PAGE_DATA?.faq && (
        <section className="w-full h-auto overflow-hidden">
          <FrequentlyAskedQuestions  data={HOME_PAGE_DATA.faq} />
        </section>
      )}
      {HOME_PAGE_DATA?.contactUs && (
        <section className="w-full h-auto overflow-hidden">
          <ContactUsSection data={HOME_PAGE_DATA.contactUs} />
        </section>
      )}
    </>
  );
}

export default SkyAiPage;
