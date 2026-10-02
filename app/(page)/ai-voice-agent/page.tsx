import JsonLd from "@/app/components/JsonLd";
import { AI_VOICE_AGENT_PAGE_DATA } from "@/app/content/pageContent/pageData/aiVoiceAgent.data";
import { HOME_PAGE_DATA } from "@/app/content/pageContent/pageData/home.data";
import FrequentlyAskedQuestions from "@/app/screens/common/frequentlyAskedQuestions";
import ContactUsSection from "@/app/screens/contactUsSection";
import ReadyToScaleSection from "@/app/screens/readyToScaleSection";
import SkyVoiceAfterCallSection from "@/app/screens/skyVoiceAfterCallSection";
import SkyVoiceCallFlowSection from "@/app/screens/skyVoiceCallFlowSection";
import SkyVoiceHeroSection from "@/app/screens/skyVoiceHeroSection";
import SkyVoiceTrustSection from "@/app/screens/skyVoiceTrustSection";
import SkyVoiceWhoForSection from "@/app/screens/skyVoiceWhoForSection";
import { normalizePageMetadata } from "@/app/utils/seo/metadata";
import {
  compactSchemas,
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateWebPageSchema,
} from "@/app/utils/seo/schema";
import type { Metadata } from "next";

const title =
  typeof AI_VOICE_AGENT_PAGE_DATA.metadata?.title === "string"
    ? AI_VOICE_AGENT_PAGE_DATA.metadata.title
    : "Sky – AI Voice Agent That Answers Every Call | Skyphr";
const description =
  AI_VOICE_AGENT_PAGE_DATA.metadata?.description ??
  "Sky is the AI voice agent built by Skyphr. It answers your business calls, books meetings and saves every lead.";
const path = "/ai-voice-agent";

export const metadata: Metadata = AI_VOICE_AGENT_PAGE_DATA.metadata
  ? normalizePageMetadata(AI_VOICE_AGENT_PAGE_DATA.metadata, path)
  : { title, description };

function AiVoiceAgentPage() {
  const schemas = compactSchemas([
    generateWebPageSchema({ title, description, path }),
    generateServiceSchema({ name: "Sky, AI Voice Agent", description, path }),
    generateBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "SkyAI", path: "/sky-ai" },
      { name: "AI Voice Agent", path },
    ]),
  ]);

  return (
    <>
      <JsonLd data={schemas} />
      {AI_VOICE_AGENT_PAGE_DATA?.hero && (
        <section className="w-full h-auto">
          <SkyVoiceHeroSection data={AI_VOICE_AGENT_PAGE_DATA.hero} />
        </section>
      )}
      {AI_VOICE_AGENT_PAGE_DATA?.callFlow && (
        <section className="w-full h-auto">
          <SkyVoiceCallFlowSection data={AI_VOICE_AGENT_PAGE_DATA.callFlow} />
        </section>
      )}
      {AI_VOICE_AGENT_PAGE_DATA?.whoFor && (
        <section className="w-full h-auto">
          <SkyVoiceWhoForSection data={AI_VOICE_AGENT_PAGE_DATA.whoFor} />
        </section>
      )}
      {AI_VOICE_AGENT_PAGE_DATA?.afterCall && (
        <section className="w-full h-auto">
          <SkyVoiceAfterCallSection data={AI_VOICE_AGENT_PAGE_DATA.afterCall} />
        </section>
      )}
      {AI_VOICE_AGENT_PAGE_DATA?.trust && (
        <section className="w-full h-auto">
          <SkyVoiceTrustSection data={AI_VOICE_AGENT_PAGE_DATA.trust} />
        </section>
      )}
      {AI_VOICE_AGENT_PAGE_DATA?.faq && (
        <section className="w-full h-auto overflow-hidden">
          <FrequentlyAskedQuestions classNames="pb-0! md:pb-0! xl:pb-0!" data={AI_VOICE_AGENT_PAGE_DATA.faq} />
        </section>
      )}

      {AI_VOICE_AGENT_PAGE_DATA?.readyToScale && (
        <section className="w-full h-auto overflow-hidden">
          <ReadyToScaleSection data={AI_VOICE_AGENT_PAGE_DATA.readyToScale} />
        </section>
      )}
      {AI_VOICE_AGENT_PAGE_DATA?.contactUs && (
        <section className="w-full h-auto overflow-hidden">
          <ContactUsSection data={AI_VOICE_AGENT_PAGE_DATA.contactUs} />
        </section>
      )}
    </>
  );
}

export default AiVoiceAgentPage;
