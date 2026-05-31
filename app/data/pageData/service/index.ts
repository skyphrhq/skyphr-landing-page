import { SAAS_APP_DEVELOPMENT_SERVICE_PAGE_DATA } from "@/app/data/pageData/service/saas-app-development";
import { UI_UX_DESIGN_SERVICE_PAGE_DATA } from "@/app/data/pageData/service/ui-ux-service-page";

import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const SERVICE_PAGE_DATA_BY_SLUG: Record<string, CommonPageDataInterface> = {
  "ui-ux-design": UI_UX_DESIGN_SERVICE_PAGE_DATA,
  "saas-web-app-development": SAAS_APP_DEVELOPMENT_SERVICE_PAGE_DATA,
  "ai-development-automation": UI_UX_DESIGN_SERVICE_PAGE_DATA,
  "custom-software-development": UI_UX_DESIGN_SERVICE_PAGE_DATA,
};

export function getServicePageData(slug: string) {
  return SERVICE_PAGE_DATA_BY_SLUG[slug];
}
