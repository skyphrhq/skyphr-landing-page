import { ABOUT_US_INFO_CARD_DATA, OUR_VALUES_CARD_DATA } from "@/app/data/common.data";
import { FAQ_DATA } from "@/app/data/faq.data";
import { COMMON_CONTACT_US_SECTION_DATA, HOME_PAGE_DATA } from "@/app/data/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/data/testimonial.data";
import { HirePageDataInterface } from "@/app/data/pageData/hire/types";
import { FASTAPI_DEVELOPER_HIRE_PAGE_DATA } from "@/app/data/pageData/hire/fastapi-developer.data";
import { FULLSTACK_DEVELOPER_HIRE_PAGE_DATA } from "@/app/data/pageData/hire/fullstack-developer.data";
import { GSAP_ANIMATION_DEVELOPER_HIRE_PAGE_DATA } from "@/app/data/pageData/hire/gsap-animation-developer.data";
import { NEXTJS_DEVELOPER_HIRE_PAGE_DATA } from "@/app/data/pageData/hire/nextjs-developer.data";
import { NODEJS_DEVELOPER_HIRE_PAGE_DATA } from "@/app/data/pageData/hire/nodejs-developer.data";
import { PYTHON_DEVELOPER_HIRE_PAGE_DATA } from "@/app/data/pageData/hire/python-developer.data";
import { REACTJS_DEVELOPER_HIRE_PAGE_DATA } from "@/app/data/pageData/hire/reactjs-developer.data";
import { TAILWIND_CSS_DEVELOPER_HIRE_PAGE_DATA } from "@/app/data/pageData/hire/tailwind-css-developer.data";
import { TYPESCRIPT_DEVELOPER_HIRE_PAGE_DATA } from "@/app/data/pageData/hire/typescript-developer.data";
import { UI_DESIGNER_HIRE_PAGE_DATA } from "@/app/data/pageData/hire/ui-designer.data";
import { WIREFRAME_DESIGNER_HIRE_PAGE_DATA } from "@/app/data/pageData/hire/wireframe-designer.data";
import { WORDPRESS_DEVELOPER_HIRE_PAGE_DATA } from "@/app/data/pageData/hire/wordpress-developer.data";

const SHARED_HIRE_PAGE_SECTIONS: Omit<HirePageDataInterface, "hero"> = {
  ourValues: {
    header: {
      title: [[{ text: "The" }, { text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Us" }]],
      description: [
        [
          {
            text: "The principles we follow while matching skilled talent with product teams that need dependable delivery.",
          },
        ],
      ],
    },
    valuesCards: OUR_VALUES_CARD_DATA,
  },
  about: {
    header: {
      title: [
        [
          { text: "Hire Specialized Talent" },
          { text: "Built for Modern Product Teams", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Skyphr helps companies bring in reliable developers and designers who understand product quality, speed, communication, and scalable delivery.",
          },
        ],
      ],
    },
    cta: {
      label: "Start Hiring",
      href: "/contact",
      variant: "CTA_PRIMARY",
    },
    cards: ABOUT_US_INFO_CARD_DATA,
  },
  readyToScale: HOME_PAGE_DATA.readyToScale,
  testimonials: {
    header: {
      title: [[{ text: "Trusted by Clients " }, { text: "Worldwide", variant: "italic", classNames: "font-bold" }]],
      description: [
        [
          {
            text: "We focus on reliable execution and clear communication, so teams can move faster with confidence.",
          },
        ],
      ],
    },
    clientsFeedback: CLIENT_TESTIMONIAL_DATA,
  },
  faq: {
    header: {
      title: [[{ text: "Got Questions? " }], [{ text: "We've Got " }, { text: "Answers", variant: "italic" }]],
      description: [
        [
          { text: "Everything you need to know before hiring talent through " },
          { text: "Skyphr", variant: "brand", classNames: "font-bold" },
        ],
      ],
    },
    faqsItems: FAQ_DATA,
  },
  contactUs: COMMON_CONTACT_US_SECTION_DATA,
};

function withSharedSections(data: HirePageDataInterface): HirePageDataInterface {
  return {
    ...SHARED_HIRE_PAGE_SECTIONS,
    ...data,
  };
}

export const HIRE_PAGE_DATA_BY_SLUG: Record<string, HirePageDataInterface> = {
  "reactjs-developer": withSharedSections(REACTJS_DEVELOPER_HIRE_PAGE_DATA),
  "nextjs-developer": withSharedSections(NEXTJS_DEVELOPER_HIRE_PAGE_DATA),
  "wordpress-developer": withSharedSections(WORDPRESS_DEVELOPER_HIRE_PAGE_DATA),
  "gsap-animation-developer": withSharedSections(GSAP_ANIMATION_DEVELOPER_HIRE_PAGE_DATA),
  "fullstack-developer": withSharedSections(FULLSTACK_DEVELOPER_HIRE_PAGE_DATA),
  "typescript-developer": withSharedSections(TYPESCRIPT_DEVELOPER_HIRE_PAGE_DATA),
  "tailwind-css-developer": withSharedSections(TAILWIND_CSS_DEVELOPER_HIRE_PAGE_DATA),
  "nodejs-developer": withSharedSections(NODEJS_DEVELOPER_HIRE_PAGE_DATA),
  "fastapi-developer": withSharedSections(FASTAPI_DEVELOPER_HIRE_PAGE_DATA),
  "python-developer": withSharedSections(PYTHON_DEVELOPER_HIRE_PAGE_DATA),
  "ui-designer": withSharedSections(UI_DESIGNER_HIRE_PAGE_DATA),
  "wireframe-designer": withSharedSections(WIREFRAME_DESIGNER_HIRE_PAGE_DATA),
};

export function getHirePageData(slug: string) {
  return HIRE_PAGE_DATA_BY_SLUG[slug];
}
