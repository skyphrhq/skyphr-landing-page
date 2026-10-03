import AI_DEVELOPMENT_AUTOMATION_4X_IMG from "@/app/assets/webp/4x/ai-development-automation-4x.webp";
import { AI_CONSULTING_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { AI_CONSULTING_SERVICE_VALUES_CARD_DATA } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const AI_CONSULTING_SERVICE_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "AI Consulting Services | AI Strategy & Solutions | Skyphr",
    description:
      "Get expert AI consulting services from Skyphr to plan, build, and scale AI solutions that improve efficiency, automate workflows, and drive business growth.",
    openGraph: {
      title: "AI Consulting Services | AI Strategy & Solutions | Skyphr",
      description:
        "Get expert AI consulting services from Skyphr to plan, build, and scale AI solutions that improve efficiency, automate workflows, and drive business growth.",
      images: "/og-image/ai-consulting-services.png",
      type: "website",
    },
    twitter: {
      title: "AI Consulting Services | AI Strategy & Solutions | Skyphr",
      description:
        "Get expert AI consulting services from Skyphr to plan, build, and scale AI solutions that improve efficiency, automate workflows, and drive business growth.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/ai-consulting-services.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/services/ai-consulting-services`,
    },
  },
  hero: {
    header: {
      title: [
        [{ text: "AI" }, { text: "Consulting" }, { text: "Services" }],
        [
          {
            text: "Turn AI Opportunities Into Scalable Business Solutions",
            variant: "italic",
            classNames: "pt-2 lg:pt-4 flex text-2xl! xl:text-3xl!",
          },
        ],
      ],
      description: [
        [
          {
            text: "Build a practical AI strategy with Skyphr. We help startups and businesses identify valuable AI opportunities, plan the right technology approach, and implement scalable AI solutions that improve efficiency, automate operations, and support long-term growth.",
          },
        ],
        [
          {
            text: "From AI strategy and automation to LLMs, RAG systems, and custom AI applications, our AI consultants help businesses move from ideas to reliable, production-ready solutions.",
          },
        ],
      ],
      heroImage: {
        imagePath: AI_DEVELOPMENT_AUTOMATION_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "AI development and automation services hero illustration",
        className: "object-contain",
        loading: "eager",
      },
    },
    ctas: [
      {
        label: "Book Your Free AI Consultation",
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
        [{ text: "What " }, { text: "We " }, { text: "Build " }, { text: "with" }],
        [
          { text: "AI", variant: "italic", classNames: "text-center" },
          { text: "Consulting", variant: "italic", classNames: "text-center" },
        ],
      ],
      description: [
        [
          {
            text: "Skyphr provides AI consulting services that connect business goals with practical AI technologies. We help organizations identify where AI can create measurable value and develop a clear roadmap for implementation, integration, and scaling.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "AI Strategy & Roadmapping",
        description:
          "Define a clear AI strategy based on your business objectives, existing technology, workflows, and growth plans. We identify high-value opportunities and create a practical roadmap for adopting AI.",
      },
      {
        title: "AI Solutions & Use Case Discovery",
        description:
          "Identify where AI can improve operations, customer experiences, decision-making, and internal workflows. We evaluate potential use cases based on business value, feasibility, complexity, and scalability.",
      },
      {
        title: "Generative AI Consulting",
        description:
          "Plan and implement generative AI solutions using modern LLM technologies. We help businesses identify opportunities for AI assistants, content generation, document processing, intelligent search, and other AI-powered experiences.",
      },
      {
        title: "LLM Consulting & Integration",
        description:
          "Assess and integrate large language models into existing applications and digital products. We help select suitable models, design AI workflows, and build reliable LLM-powered features.",
      },
      {
        title: "RAG Consulting",
        description:
          "Design retrieval-augmented generation solutions that connect AI models with your business knowledge and data. We help structure document processing, retrieval, knowledge bases, and contextual AI responses.",
      },
      {
        title: "AI Automation Consulting",
        description:
          "Identify repetitive and time-consuming processes that can be improved through AI automation. We design intelligent workflows that reduce manual work, improve operational efficiency, and support faster business processes.",
      },
      {
        title: "Custom AI Application Consulting",
        description:
          "Plan custom AI applications around specific business requirements. From AI-powered SaaS products to internal tools and intelligent customer experiences, we help define the architecture and implementation strategy.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Features" }, { text: "of" }, { text: "Our" }, { text: "AI", variant: "italic" }],
        [{ text: "Consulting" }, { text: "Solutions", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "We help businesses identify AI opportunities, design scalable architectures, select the right technologies, and plan secure AI integrations that align with existing systems, workflows, data, and business goals.",
          },
        ],
      ],
    },

    features: [
      "AI opportunity and use-case analysis",
      "Custom AI solution architecture",
      "Generative AI and LLM consulting",
      "RAG architecture and knowledge integration",
      "AI automation strategy",
      "AI product and feature planning",
      "AI model and technology evaluation",
      "Existing system AI integration",
      "Data and knowledge architecture",
      "AI proof-of-concept planning",
      "Scalable production architecture",
      "Security and reliability considerations",
      "Performance and optimization planning",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "AI", variant: "italic" }, { text: "Consulting" }],
        [{ text: "Services" }, { text: "&" }, { text: "Capabilities", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Our AI consulting capabilities cover the complete journey from identifying an AI opportunity to planning, building, integrating, and scaling an AI solution.",
          },
        ],
      ],
    },
    items: [
      {
        title: "AI Readiness Assessment",
        description:
          "Evaluate your current technology, data, workflows, infrastructure, and business requirements to determine where AI can provide meaningful value.",
      },
      {
        title: "AI Product Strategy",
        description:
          "Develop a structured strategy for AI-powered products, features, and platforms, including technical requirements, user needs, workflows, and scalability considerations.",
      },
      {
        title: "AI Architecture Consulting",
        description:
          "Design scalable AI architectures that connect models, applications, APIs, databases, knowledge sources, and automation workflows.",
      },
      {
        title: "AI Model Selection",
        description:
          "Evaluate different AI and LLM options based on functionality, performance, integration requirements, scalability, and business objectives.",
      },
      {
        title: "Data & Knowledge Strategy",
        description:
          "Plan how business data, documents, knowledge bases, and other information sources can be structured and prepared for AI-powered applications.",
      },
      {
        title: "AI Workflow Design",
        description:
          "Map business processes and design AI-powered workflows that connect intelligent models with existing applications, tools, and operational systems.",
      },
      {
        title: "AI Integration",
        description:
          "Integrate AI capabilities into existing SaaS platforms, websites, business applications, internal systems, and digital products.",
      },
      {
        title: "AI Proof of Concept",
        description:
          "Validate AI ideas through focused proof-of-concept development before committing to a larger production implementation.",
      },
    ],
  },
  industriesServe: {
    header: {
      title: [[{ text: "Industries" }, { text: "We" }, { text: "Serve", variant: "italic" }]],
      description: [
        [
          {
            text: "Skyphr provides AI consulting services for businesses across industries looking to adopt AI strategically and build scalable AI-powered solutions.",
          },
        ],
      ],
    },
    items: [
      {
        title: "SaaS & Technology",
        description:
          "AI-powered SaaS platforms, intelligent workflows, customer support automation, and product enhancement solutions.",
      },
      {
        title: "FinTech",
        description:
          "Risk analysis, fraud detection, document processing, customer intelligence, and operational automation.",
      },
      {
        title: "Healthcare",
        description:
          "AI-driven data management, patient engagement tools, workflow optimization, and knowledge systems.",
      },
      {
        title: "E-commerce",
        description:
          "Product recommendations, customer analytics, intelligent search, workflow automation, and AI-powered customer experiences.",
      },
      {
        title: "Education",
        description:
          "AI-powered learning tools, knowledge assistants, content automation, student support, and administrative workflow optimization.",
      },
      {
        title: "Real Estate",
        description:
          "Lead qualification, property search, document processing, customer engagement, and intelligent workflow automation.",
      },
      {
        title: "Professional Services",
        description:
          "Process automation, document intelligence, client support systems, and productivity enhancement solutions.",
      },
      {
        title: "Logistics & Transportation",
        description:
          "Operational analytics, workflow automation, demand planning, document processing, and intelligent logistics solutions.",
      },
      {
        title: "Media & Entertainment",
        description:
          "Content discovery, recommendation systems, content workflows, audience insights, and AI-powered digital experiences.",
      },
      {
        title: "Startups & Emerging Businesses",
        description:
          "AI strategy, product planning, proof-of-concept development, workflow automation, and scalable AI architecture for growing businesses.",
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "AI", variant: "italic", classNames: "pr-0.5" }, { text: "Consulting" }],
        [{ text: "Process", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Our structured AI consulting process takes you from business discovery and opportunity assessment to strategy, architecture, implementation, and optimization, helping turn AI opportunities into scalable solutions.",
          },
        ],
      ],
    },

    steps: [
      {
        title: "Business & Requirement Discovery",
        description:
          "We understand your business objectives, existing systems, operational challenges, users, workflows, and long-term goals.",
      },
      {
        title: "AI Opportunity Assessment",
        description:
          "We identify potential AI use cases and evaluate how AI can address specific business challenges or create new opportunities.",
      },
      {
        title: "Strategy & Roadmap",
        description:
          "We define the recommended AI approach, priorities, technology direction, implementation phases, and roadmap for moving forward.",
      },
      {
        title: "Solution Architecture",
        description:
          "We design the technical architecture for your AI solution, including models, applications, data sources, APIs, integrations, workflows, and infrastructure.",
      },
      {
        title: "Proof of Concept",
        description:
          "Where appropriate, we validate the proposed solution through a focused proof of concept to test functionality, feasibility, and expected outcomes.",
      },
      {
        title: "Development & Integration",
        description:
          "Our team can move from consulting into implementation, building and integrating the AI solution into your existing technology ecosystem.",
      },
      {
        title: "Optimization & Scaling",
        description:
          "We continuously improve the solution based on performance, usage, business requirements, and future growth.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [
        [
          { text: "AI", variant: "italic" },
          { text: "Technology" },
          { text: "&" },
          { text: "Expertise", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Skyphr combines AI strategy with practical software engineering expertise to help businesses build production-ready AI solutions.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "AI & LLM Technologies",
        technologies: [
          { name: "Large Language Models" },
          { name: "Generative AI" },
          { name: "AI Agents" },
          { name: "Retrieval-Augmented Generation" },
          { name: "Natural Language Processing" },
          { name: "AI Assistants & Chatbots" },
          { name: "AI Automation" },
          { name: "Semantic Search" },
          { name: "Intelligent Document Processing" },
        ],
      },
      {
        title: "Development Technologies",
        technologies: [
          { name: "Python" },
          { name: "FastAPI" },
          { name: "Node.js" },
          { name: "React.js" },
          { name: "Next.js" },
          { name: "TypeScript" },
          { name: "REST APIs" },
          { name: "Cloud Infrastructure" },
          { name: "Vector Databases" },
          { name: "Database & API Integrations" },
        ],
      },
    ],
  },

  ourValues: {
    header: {
      title: [
        [{ text: "Values" }, { text: "That" }, { text: "Guide" }],
        [{ text: "Our" }, { text: "AI", variant: "italic" }, { text: "Consulting", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Our AI consulting is guided by clear thinking, scalable architecture, strong performance, and measurable business impact, helping teams make practical technology decisions that support long-term growth.",
          },
        ],
      ],
    },
    valuesCards: AI_CONSULTING_SERVICE_VALUES_CARD_DATA,
  },
  deliveryApproach: {
    header: {
      title: [
        [
          { text: "Our" },
          { text: "AI", variant: "italic" },
          { text: "Consulting" },
          { text: "Delivery" },
          { text: "Approach", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our AI consulting approach combines business strategy with practical technical planning, helping teams validate opportunities, design scalable solutions, and move confidently from AI strategy to implementation.",
          },
        ],
      ],
    },

    items: [
      {
        title: "Business-First",
        description:
          "We start with business objectives and operational challenges before recommending AI technologies or solutions.",
      },
      {
        title: "Practical & Implementation-Focused",
        description:
          "Our recommendations are designed to move beyond strategy documents toward solutions that can be validated, developed, integrated, and scaled.",
      },
      {
        title: "Scalable Architecture",
        description:
          "We plan AI systems with future growth, changing requirements, increased usage, and additional integrations in mind.",
      },
      {
        title: "Collaborative",
        description:
          "We work closely with product, technology, and business teams to maintain alignment throughout strategy and implementation.",
      },
      {
        title: "Flexible Engagement",
        description:
          "Skyphr can support a specific AI strategy project, solution assessment, proof of concept, or the complete journey from AI consulting to development.",
      },
    ],
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }],
        [
          { text: "for", variant: "italic" },
          { text: "AI", variant: "italic" },
          { text: "Consulting?", variant: "italic" },
        ],
      ],
      description: [],
    },
    items: [
      {
        title: "Strategy & Engineering Under One Roof",
        description:
          "Skyphr combines AI consulting with product design and software development, allowing strategy to connect directly with implementation.",
      },
      {
        title: "Practical AI Expertise",
        description:
          "We focus on real-world AI applications, including LLMs, RAG systems, AI automation, intelligent applications, and AI-powered products.",
      },
      {
        title: "Custom AI Strategies",
        description:
          "Every business has different systems, data, workflows, and goals. We create AI strategies around your specific requirements.",
      },
      {
        title: "End-to-End Support",
        description:
          "From AI discovery and strategy to architecture, development, integration, and optimization, we can support the complete AI lifecycle.",
      },
      {
        title: "Scalable Digital Product Expertise",
        description:
          "Our experience building SaaS platforms, web applications, and digital products helps us integrate AI into broader technology ecosystems.",
      },
    ],
  },
  faq: {
    header: {
      title: [[{ text: "Got Questions? " }], [{ text: "We've Got " }, { text: "Answers", variant: "italic" }]],
      description: [
        [
          {
            text: "Find answers to common questions about our AI consulting services, including AI strategy, LLM and RAG consulting, solution architecture, integrations, use-case discovery, development, and implementation.",
          },
        ],
      ],
    },
    faqsItems: AI_CONSULTING_FAQ_DATA,
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Build" }, { text: "a" }, { text: "Smarter" }, { text: "AI?", variant: "italic" }],
        [{ text: "Strategy" }, { text: "with" }, { text: "Skyphr", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Turn AI opportunities into practical, scalable solutions with expert AI consulting from Skyphr. Whether you are exploring your first AI initiative or scaling an existing AI product, we help you define the right strategy, technology, and implementation path.",
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
