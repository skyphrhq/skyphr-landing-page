import AI_DEVELOPMENT_AUTOMATION_4X_IMG from "@/app/assets/webp/4x/ai-development-automation-4x.webp";
import { HOME_PAGE_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { AI_AUTOMATION_SERVICE_VALUES_CARD_DATA } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { AI_AUTOMATION_SERVICE_STEPS_WE_FOLLOW } from "@/app/content/pageContent/service-steps.data";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const AI_DEVELOPMENT_AUTOMATION_SERVICE_PAGE_DATA: CommonPageDataInterface = {
  hero: {
    header: {
      title: [
        [
          { text: "Custom AI" },
          { text: "Solutions" },
          { text: "AI Automation" },
          { text: "& Intelligent " },
          { text: "Systems" },
        ],
      ],
      description: [
        [
          {
            text: "Build smarter, automate faster, and scale efficiently with Skyphr. We design and develop custom AI solutions, AI-powered applications, intelligent automation systems, and enterprise AI platforms that help businesses reduce operational costs, improve productivity, unlock data-driven insights, and create competitive advantages.",
          },
        ],
        [
          {
            text: "Whether you're looking to automate workflows, implement generative AI, develop AI agents, or build a custom artificial intelligence product, our team helps transform AI opportunities into measurable business outcomes.",
          },
        ],
      ],
      heroImage: {
        imagePath: AI_DEVELOPMENT_AUTOMATION_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "UI/UX Design and Automation Services",
        className: "object-contain",
        loading: "eager",
      },
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
        [{ text: "What " }, { text: "We " }, { text: "Build " }, { text: "Under" }],
        [{ text: "AI Development Services", variant: "italic", classNames: "text-center" }],
      ],
      description: [
        [
          {
            text: "From AI-powered business tools to enterprise automation systems, we build intelligent solutions that help organizations streamline operations, enhance customer experiences, and accelerate growth.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Custom AI Applications",
        description:
          "AI-powered software and business applications built around your workflows, business processes, and operational requirements.",
      },
      {
        title: "AI Agents & Virtual Assistants",
        description:
          "Intelligent AI agents capable of handling customer support, internal operations, lead qualification, knowledge management, and task execution.",
      },
      {
        title: "Generative AI Solutions",
        description:
          "Custom ChatGPT-style applications, content generation systems, document assistants, AI copilots, and enterprise knowledge platforms.",
      },
      {
        title: "AI Process Automation",
        description:
          "Automate repetitive business processes, workflows, approvals, reporting, data entry, and operational tasks using AI-driven automation.",
      },
      {
        title: "Machine Learning Solutions",
        description:
          "Predictive analytics, recommendation engines, forecasting systems, customer intelligence, and data-driven decision-making platforms.",
      },
      {
        title: "AI Integration & Implementation",
        description:
          "Integrate OpenAI, Anthropic, Gemini, and other AI technologies into your existing products, systems, workflows, and business operations.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Features" }, { text: "We" }, { text: "Can" }, { text: "Build" }, { text: "Into" }],
        [
          { text: "Your", variant: "italic" },
          { text: "AI", variant: "italic" },
          { text: "Solution", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Every organization has unique goals and workflows. We help identify where AI can create the greatest impact and build solutions that align with your business objectives.",
          },
        ],
      ],
    },
    features: [
      "AI chatbot development",
      "AI agents",
      "Generative AI integration",
      "Custom LLM implementation",
      "Knowledge base assistants",
      "Document processing automation",
      "Workflow automation",
      "Predictive analytics",
      "Recommendation engines",
      "Customer support automation",
      "Lead qualification systems",
      "Data extraction and analysis",
      "Natural language processing",
      "AI-powered search",
      "Multi-agent systems",
      "API integrations",
      "CRM integrations",
      "ERP integrations",
      "Cloud deployment",
      "Security and compliance controls",
      "Real-time analytics",
      "Reporting dashboards",
      "Role-based access control",
      "Enterprise AI infrastructure",
      "Performance monitoring",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Businesses" }],
        [
          { text: "Invest", variant: "italic" },
          { text: "in", variant: "italic" },
          { text: "AI Development", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Artificial intelligence is no longer an experimental technology. It has become a strategic business advantage for organizations seeking operational efficiency, faster decision-making, and sustainable growth.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Reduce operational costs through intelligent automation",
      },
      {
        title: "Improve employee productivity and efficiency",
      },
      {
        title: "Deliver personalized customer experiences",
      },
      {
        title: "Accelerate decision-making with predictive insights",
      },
      {
        title: "Automate repetitive and time-consuming workflows",
      },
      {
        title: "Improve customer service with AI-powered support systems",
      },
      {
        title: "Extract valuable insights from business data",
      },
      {
        title: "Create new revenue opportunities through AI products",
      },
      {
        title: "Scale operations without proportional increases in headcount",
      },
      {
        title: "Build long-term competitive advantages",
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Strategic" }, { text: "AI" }],
        [
          { text: "Development", variant: "italic" },
          { text: "Process", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "We follow a structured AI product development framework designed to reduce risk, accelerate implementation, and maximize business value.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "AI Discovery & Opportunity Assessment",
        description:
          "We evaluate your business processes, operational challenges, available data, and growth objectives to identify high-impact AI opportunities and define measurable success metrics.",
      },
      {
        title: "AI Strategy & Solution Architecture",
        description:
          "We design the technical architecture, AI workflows, data pipelines, model selection strategy, integrations, security requirements, and scalability roadmap.",
      },
      {
        title: "AI Development & System Integration",
        description:
          "Our team develops AI models, intelligent workflows, automation systems, APIs, dashboards, and user experiences while integrating seamlessly with your existing technology stack.",
      },
      {
        title: "Testing, Optimization & Deployment",
        description:
          "We validate performance, accuracy, reliability, security, and scalability before deployment. Continuous monitoring and optimization ensure long-term success and business value.",
      },
    ],
  },

  ourApproach: {
    header: {
      title: [[{ text: "How " }, { text: "We" }, { text: "Build" }, { text: "&" }, { text: "Scale" }]],
      description: [
        [
          {
            text: "A streamlined approach to designing, developing, and scaling intelligent AI systems. From strategy to implementation, we build AI solutions that deliver measurable business outcomes and long-term value.",
          },
        ],
      ],
      heroHighlightedText: {
        textOne: "From Idea",
        textTwo: "to Scale",
        description: [{ text: "Strategy. Design. Build." }, { text: "Launch. Optimize." }],
      },
    },
    steps: AI_AUTOMATION_SERVICE_STEPS_WE_FOLLOW,
  },
  ourValues: {
    header: {
      title: [[{ text: "The" }, { text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Us" }]],
      description: [
        [
          {
            text: "The principles that guide every AI development project we deliver.",
          },
        ],
      ],
    },
    valuesCards: AI_AUTOMATION_SERVICE_VALUES_CARD_DATA,
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "As" }, { text: "Your" }],
        [
          { text: "AI", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Partner", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Building successful AI solutions requires more than technology. It requires understanding business operations, user behavior, scalability challenges, and organizational goals.",
          },
        ],
        [
          {
            text: "Skyphr combines AI strategy, product design, software engineering, and automation expertise to help companies move from AI experimentation to real business impact.",
          },
        ],
        [
          {
            text: "Whether you're building an AI-powered SaaS platform, implementing enterprise automation, developing intelligent customer experiences, or creating a custom AI product, we provide the technical expertise and strategic guidance needed to succeed.",
          },
        ],
      ],
    },
  },
  faq: {
    header: {
      title: [[{ text: "Got Questions? " }], [{ text: "We've Got " }, { text: "Answers", variant: "italic" }]],
      description: [
        [
          { text: "Everything you need to know before starting your project with " },
          { text: "Skyphr", variant: "brand", classNames: "font-bold" },
        ],
      ],
    },
    faqsItems: HOME_PAGE_FAQ_DATA,
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Ready" }, { text: "to" }, { text: "Scale" }, { text: "With" }, { text: "AI?", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Book a free 30-minute strategy call to discuss your business goals, operational challenges, and AI opportunities. We'll help you identify the highest-impact use cases, define a practical implementation strategy, and create a roadmap for building scalable AI solutions that drive measurable growth.",
          },
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
