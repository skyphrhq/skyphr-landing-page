import { AI_CHATBOT_ASSISTANT_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/ai-chatbot-assistant-development";
import { AI_CONSULTING_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/ai-consulting-services";
import { PROGRESSIVE_WEB_APP_DEVELOPMENT_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/progressive-web-app-development";
import { AI_DEVELOPMENT_AUTOMATION_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/ai-development-automation";
import { CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/custom-software-development";
import { ENTERPRISE_APP_DEVELOPMENT_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/enterprise-app-development";
import { ENTERPRISE_SOFTWARE_DEVELOPMENT_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/enterprise-software-development";
import { LLM_INTEGRATION_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/llm-integration-service";
import { MOBILE_APP_DEVELOPMENT_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/mobile-app-development";
import { RAG_DEVELOPMENT_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/rag-development-services";
import { SAAS_APP_DEVELOPMENT_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/saas-app-development";
import { UI_UX_DESIGN_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/ui-ux-service-page";
import { WIREFRAME_DESIGNER_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/wireframe-designer";

import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const SERVICE_PAGE_DATA_BY_SLUG: Record<string, CommonPageDataInterface> = {
  "ui-ux-design": UI_UX_DESIGN_SERVICE_PAGE_DATA,
  "saas-development-services": SAAS_APP_DEVELOPMENT_SERVICE_PAGE_DATA,
  "ai-development-services": AI_DEVELOPMENT_AUTOMATION_SERVICE_PAGE_DATA,
  "custom-software-development-services": CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_PAGE_DATA,
  "rag-development-services": RAG_DEVELOPMENT_SERVICE_PAGE_DATA,
  "llm-integration-service": LLM_INTEGRATION_SERVICE_PAGE_DATA,
  "ai-consulting-services": AI_CONSULTING_SERVICE_PAGE_DATA,
  "enterprise-app-development": ENTERPRISE_APP_DEVELOPMENT_SERVICE_PAGE_DATA,
  "enterprise-software-development": ENTERPRISE_SOFTWARE_DEVELOPMENT_SERVICE_PAGE_DATA,
  "mobile-app-development": MOBILE_APP_DEVELOPMENT_SERVICE_PAGE_DATA,
  "ai-chatbot-assistant-development": AI_CHATBOT_ASSISTANT_SERVICE_PAGE_DATA,
  "progressive-web-app-development": PROGRESSIVE_WEB_APP_DEVELOPMENT_SERVICE_PAGE_DATA,
  "wireframe-designer": WIREFRAME_DESIGNER_SERVICE_PAGE_DATA,
};

export function getServicePageData(slug: string) {
  return SERVICE_PAGE_DATA_BY_SLUG[slug];
}
