import {
  OUR_SERVICE_CARD_DATA,
  OUR_VALUES_CARD_DATA,
  STEPS_WE_FOLLOW_IN_SERVICES,
} from "@/app/content/pageContent/common.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const UI_UX_DESIGN_SERVICE_PAGE_DATA: CommonPageDataInterface = {
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
  whatWeBuild: {
    header: {
      title: [
        [{ text: "What We Build Under" }, { text: "SaaS & Web App", variant: "italic" }, { text: "Development" }],
      ],
      description: [
        [
          {
            text: "From SaaS platforms to internal business tools, we build scalable web applications that support real users, real workflows, and long-term growth.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "SaaS Platforms",
        description:
          "Subscription-based platforms, multi-user systems, dashboards, and product workflows built for long-term growth.",
      },
      {
        title: "Admin Dashboards",
        description:
          "Powerful admin panels to manage users, content, data, reports, permissions, and business operations.",
      },
      {
        title: "CRM & Business Tools",
        description:
          "Custom CRM systems, internal tools, resource management platforms, and workflow automation systems.",
      },
      {
        title: "Customer Portals",
        description:
          "Secure client portals where users can log in, manage data, track progress, upload files, and communicate.",
      },
      {
        title: "Booking & Management Systems",
        description: "Appointment booking, service management, project tracking, and operational platforms for teams.",
      },
      {
        title: "API & Third-Party Integrations",
        description:
          "Payment gateways, email systems, analytics, Google tools, CRMs, AI APIs, and custom backend integrations.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [[{ text: "Features We Can Build Into" }, { text: "Your Web App", variant: "italic" }]],
      description: [
        [
          {
            text: "Every product is different, so we help you choose and build the right features based on your users, workflows, and business goals.",
          },
        ],
      ],
    },
    features: [
      "User authentication",
      "Role-based access control",
      "Admin panel",
      "User dashboard",
      "Payment integration",
      "Subscription management",
      "File upload system",
      "Email notifications",
      "Analytics and reports",
      "Search and filters",
      "CMS integration",
      "API development",
      "AI automation",
      "Database design",
      "Cloud deployment",
      "Performance optimization",
    ],
  },
  developmentProcess: {
    header: {
      title: [[{ text: "Our Strategic SaaS" }, { text: "Development Process", variant: "italic" }]],
      description: [
        [
          {
            text: "We follow a clear, structured process to transform your idea into a scalable, secure, and user-friendly SaaS product.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Product Discovery & Planning",
        description:
          "We understand your business model, target users, workflows, core features, and long-term product goals before writing a single line of code.",
      },
      {
        title: "UX Design & System Architecture",
        description:
          "We design user flows, wireframes, dashboards, database structure, roles, permissions, and the technical foundation required for scale.",
      },
      {
        title: "SaaS Development & Integration",
        description:
          "We build the frontend, backend, APIs, authentication, admin panel, dashboards, payment flows, and third-party integrations.",
      },
      {
        title: "Testing, Launch & Optimization",
        description:
          "We test performance, security, responsiveness, and usability before deployment, then optimize based on real usage and business needs.",
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
