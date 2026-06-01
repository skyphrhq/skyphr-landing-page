import { FASTAPI_DEVELOPER_HIRE_PAGE_DATA } from "@/app/content/pageContent/pageData/hire/fastapi-developer.data";
import { FULLSTACK_DEVELOPER_HIRE_PAGE_DATA } from "@/app/content/pageContent/pageData/hire/fullstack-developer.data";
import { GSAP_ANIMATION_DEVELOPER_HIRE_PAGE_DATA } from "@/app/content/pageContent/pageData/hire/gsap-animation-developer.data";
import { NEXTJS_DEVELOPER_HIRE_PAGE_DATA } from "@/app/content/pageContent/pageData/hire/nextjs-developer.data";
import { NODEJS_DEVELOPER_HIRE_PAGE_DATA } from "@/app/content/pageContent/pageData/hire/nodejs-developer.data";
import { PYTHON_DEVELOPER_HIRE_PAGE_DATA } from "@/app/content/pageContent/pageData/hire/python-developer.data";
import { REACTJS_DEVELOPER_HIRE_PAGE_DATA } from "@/app/content/pageContent/pageData/hire/reactjs-developer.data";
import { TAILWIND_CSS_DEVELOPER_HIRE_PAGE_DATA } from "@/app/content/pageContent/pageData/hire/tailwind-css-developer.data";

import { TYPESCRIPT_DEVELOPER_HIRE_PAGE_DATA } from "@/app/content/pageContent/pageData/hire/typescript-developer.data";
import { UI_DESIGNER_HIRE_PAGE_DATA } from "@/app/content/pageContent/pageData/hire/ui-designer.data";
import { WIREFRAME_DESIGNER_HIRE_PAGE_DATA } from "@/app/content/pageContent/pageData/hire/wireframe-designer.data";
import { WORDPRESS_DEVELOPER_HIRE_PAGE_DATA } from "@/app/content/pageContent/pageData/hire/wordpress-developer.data";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const HIRE_PAGE_DATA_BY_SLUG: Record<string, HirePageDataInterface> = {
  "reactjs-developer": REACTJS_DEVELOPER_HIRE_PAGE_DATA,
  "nextjs-developer": NEXTJS_DEVELOPER_HIRE_PAGE_DATA,
  "wordpress-developer": WORDPRESS_DEVELOPER_HIRE_PAGE_DATA,
  "gsap-animation-developer": GSAP_ANIMATION_DEVELOPER_HIRE_PAGE_DATA,
  "fullstack-developer": FULLSTACK_DEVELOPER_HIRE_PAGE_DATA,
  "typescript-developer": TYPESCRIPT_DEVELOPER_HIRE_PAGE_DATA,
  "tailwind-css-developer": TAILWIND_CSS_DEVELOPER_HIRE_PAGE_DATA,
  "nodejs-developer": NODEJS_DEVELOPER_HIRE_PAGE_DATA,
  "fastapi-developer": FASTAPI_DEVELOPER_HIRE_PAGE_DATA,
  "python-developer": PYTHON_DEVELOPER_HIRE_PAGE_DATA,
  "ui-designer": UI_DESIGNER_HIRE_PAGE_DATA,
  "wireframe-designer": WIREFRAME_DESIGNER_HIRE_PAGE_DATA,
};

export function getHirePageData(slug: string) {
  return HIRE_PAGE_DATA_BY_SLUG[slug];
}
