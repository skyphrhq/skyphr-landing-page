import { AI_DEVELOPMENT_AUTOMATION_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/ai-development-automation";
import { CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/custom-software-development";
import { SAAS_APP_DEVELOPMENT_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/saas-app-development";
import { UI_UX_DESIGN_SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service/ui-ux-service-page";

import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const SERVICE_PAGE_DATA_BY_SLUG: Record<string, CommonPageDataInterface> = {
  "ui-ux-design": UI_UX_DESIGN_SERVICE_PAGE_DATA,
  "saas-development-services": SAAS_APP_DEVELOPMENT_SERVICE_PAGE_DATA,
  "ai-development-services": AI_DEVELOPMENT_AUTOMATION_SERVICE_PAGE_DATA,
  "custom-software-development-services": CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_PAGE_DATA,
};

export function getServicePageData(slug: string) {
  return SERVICE_PAGE_DATA_BY_SLUG[slug];
}
