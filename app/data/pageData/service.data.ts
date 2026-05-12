import { OUR_SERVICE_CARD_DATA, OUR_VALUES_CARD_DATA, STEPS_WE_FOLLOW_IN_SERVICES } from "@/app/data/common.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/data/pageData/home.data";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const SERVICES_PAGE_DATA: CommonPageDataInterface = {
  hero: {
    header: {
      title: [
        [{ text: "Scalable " }, { text: "SaaS Development", variant: "italic" }],
        [{ text: "UI/UX Design & " }, { text: "Automation", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Build and scale digital products with Skyphr. We design high-performance SaaS platforms, intuitive user experiences, and AI-powered systems that help startups and businesses launch faster, improve efficiency, and grow smarter.",
          },
        ],
      ],
    },
    ctas: [
      {
        label: "Book a Call",
        href: "https://cal.com/skyphr/30min",
        variant: "CTA_SECONDARY",
        external: true,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  services: {
    header: {
      title: [[{ text: "Engineered for" }, { text: "Growth", variant: "italic" }]],
      description: [
        [
          {
            text: "We design and build high-performance digital experiences that help businesses launch faster, convert better,and scale with confidence.",
          },
        ],
      ],
    },
    items: OUR_SERVICE_CARD_DATA,
  },
  ourApproach: {
    header: {
      title: [[{ text: "How " }, { text: "We" }, { text: "Build &" }, { text: "Scale", variant: "italic" }]],
      description: [
        [
          {
            text: "A streamlined approach to designing, building, and scaling digital products. From strategy to launch, we create high-performance systems focused on user experience, efficiency, and long-term growth.",
          },
        ],
      ],
    },
    steps: STEPS_WE_FOLLOW_IN_SERVICES,
  },
  ourValues: {
    header: {
      title: [[{ text: "The" }, { text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Us" }]],
      description: [
        [
          {
            text: " The principles we follow in every project guiding how we think, build, and deliver meaningful digital experiences.",
          },
        ],
      ],
    },
    valuesCards: OUR_VALUES_CARD_DATA,
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Ready to " }, { text: "Scale?", variant: "italic" }],
        [{ text: " Get Your " }, { text: "Custom Roadmap", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Book a free 30-minute call to discuss your goals, challenges, and how we can help you build, launch, and scale faster with",
          },
          { text: "Skyphr.", classNames: "font-semibold" },
        ],
      ],
    },
    ctas: [
      {
        label: "Book a Free Call",
        href: "https://cal.com/skyphr/30min",
        variant: "CTA_SECONDARY",
        external: true,
        target: "_blank",
        rel: "noopener noreferrer",
        classNames: "min-w-55",
      },
    ],
  },
  contactUs: COMMON_CONTACT_US_SECTION_DATA,
};
