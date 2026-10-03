import SAAS_APP_DEVELOPMENT_4X_IMG from "@/app/assets/webp/4x/rag-development-services-4x.webp";
import { LLM_INTEGRATION_SERVICE_PAGE_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { LLM_INTEGRATION_SERVICE_VALUES_CARD_DATA } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const LLM_INTEGRATION_SERVICE_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "LLM Integration Services | AI-Powered Business Solutions | Skyphr",
    description:
      "Integrate large language models into your products with Skyphr. Build AI-powered workflows, assistants, automation, and scalable LLM solutions for modern businesses.",
    openGraph: {
      title: "LLM Integration Services | AI-Powered Business Solutions | Skyphr",
      description:
        "Integrate large language models into your products with Skyphr. Build AI-powered workflows, assistants, automation, and scalable LLM solutions for modern businesses.",
      images: "/og-image/llm-integration-service.png",
      type: "website",
    },
    twitter: {
      title: "LLM Integration Services | AI-Powered Business Solutions | Skyphr",
      description:
        "Integrate large language models into your products with Skyphr. Build AI-powered workflows, assistants, automation, and scalable LLM solutions for modern businesses.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/llm-integration-service.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/services/llm-integration-service`,
    },
  },
  hero: {
    header: {
      title: [[{ text: "LLM " }, { text: "Integration" }, { text: "Services" }]],
      description: [
        [
          {
            text: "Integrate powerful large language models into your products, applications, and business workflows with Skyphr. Our LLM integration services help businesses build AI-powered applications, intelligent assistants, automated workflows, and custom AI solutions that improve productivity and user experiences. We connect LLMs with your existing systems and data to create reliable, scalable, and business-focused AI capabilities that support long-term growth.",
          },
        ],
      ],
      heroImage: {
        imagePath: SAAS_APP_DEVELOPMENT_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "SaaS application development services hero illustration",
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
        [{ text: "What" }, { text: "We " }, { text: "Build " }, { text: "with" }],
        [
          { text: "LLM", variant: "italic", classNames: "text-center" },
          { text: "Integration", variant: "italic", classNames: "text-center" },
        ],
      ],
      description: [
        [
          {
            text: "Skyphr helps businesses integrate large language models into existing applications, SaaS platforms, and new digital products. Our LLM integration services combine modern AI technologies with your business data and workflows to create intelligent, scalable, and practical AI experiences that improve productivity, automation, and customer engagement.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "AI-Powered Applications",
        description:
          "Integrate large language models into web applications, SaaS platforms, and digital products to add intelligent features, natural language interactions, content generation, recommendations, and AI-powered workflows. We build LLM features that work seamlessly within your existing product experience.",
      },
      {
        title: "AI Assistants & Chatbots",
        description:
          "Build intelligent AI assistants and chatbots that understand user questions, provide contextual responses, and support customers or internal teams. We integrate LLM-powered conversational experiences into websites, SaaS products, customer portals, and business applications.",
      },
      {
        title: "Document & Knowledge AI",
        description:
          "Connect LLMs with business documents, databases, and knowledge bases to make company information easier to access and understand. Our solutions can support AI search, document analysis, summarization, question answering, and Retrieval-Augmented Generation (RAG) for more relevant responses.",
      },
      {
        title: "AI Workflow Automation",
        description:
          "Use LLMs to automate repetitive, knowledge-based business processes such as content processing, data extraction, classification, summarization, email assistance, and information handling. We connect AI models with existing workflows to improve operational efficiency and reduce manual work.",
      },
      {
        title: "LLM API Integration",
        description:
          "Integrate leading LLM APIs into your existing applications with secure, scalable, and maintainable architectures. We can connect AI models such as OpenAI, Anthropic, and Google Gemini based on your product requirements, use cases, performance needs, and technical environment.",
      },
      {
        title: "Custom AI Solutions",
        description:
          "Develop custom LLM-powered features and AI solutions tailored to your business workflows, products, and customer requirements. From intelligent product features to specialized AI systems, Skyphr helps businesses turn large language model capabilities into practical solutions designed for real-world use.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "LLM", variant: "italic" },
          { text: "Integration", variant: "italic" },
          { text: "Solutions", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Build scalable AI solutions with LLM API integration, RAG, AI assistants, automation, natural language search, document processing, and secure AI features tailored to your business.",
          },
        ],
      ],
    },

    features: [
      "Large language model API integration",
      "AI-powered chat and conversational interfaces",
      "Custom AI assistants",
      "Retrieval-augmented generation (RAG)",
      "Business knowledge integration",
      "Document processing and summarization",
      "Natural language search",
      "Automated content generation",
      "AI workflow automation",
      "Prompt engineering and optimization",
      "Context-aware AI responses",
      "Secure data and API handling",
      "Scalable LLM architectures",
      "AI-powered product features",
      "Performance and cost optimization",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Integrate" }, { text: "LLMs", variant: "italic" }],
        [{ text: "Into" }, { text: "Your" }, { text: "Business?", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Discover how LLM integration can automate knowledge work, improve customer experiences, boost team productivity, enhance products, and scale AI capabilities across your business.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Automate Knowledge-Based Work",
        description:
          "Reduce repetitive manual tasks by using AI to process information, generate responses, and support business workflows.",
      },
      {
        title: "Improve Customer Experiences",
        description:
          "Give customers faster and more natural ways to interact with your products through intelligent AI assistants and conversational experiences.",
      },
      {
        title: "Build Smarter Products",
        description:
          "Add AI-powered capabilities to existing applications and create new product experiences powered by large language models.",
      },
      {
        title: "Increase Team Productivity",
        description:
          "Help employees access information, generate content, analyze documents, and complete repetitive tasks more efficiently.",
      },
      {
        title: "Scale AI Capabilities",
        description:
          "Build LLM integrations that can evolve with your business, users, data, and changing AI requirements.",
      },

      {
        title: "Reduce Operational Complexity",
        description:
          "Connect LLM capabilities directly with your existing applications and workflows instead of managing disconnected AI tools.",
      },
    ],
  },
  industriesServe: {
    header: {
      title: [[{ text: "Industries" }, { text: "We" }, { text: "Serve", variant: "italic" }]],
      description: [
        [
          {
            text: "We build LLM-powered solutions for businesses across industries, integrating AI into products, workflows, customer experiences, and internal operations.",
          },
        ],
      ],
    },

    items: [
      {
        title: "SaaS & Technology",
        description:
          "Add AI assistants, intelligent search, content generation, automation, and LLM-powered features to SaaS and technology products.",
      },

      {
        title: "E-commerce",
        description:
          "Build AI shopping assistants, product discovery, personalized experiences, customer support, and intelligent content solutions.",
      },

      {
        title: "Healthcare",
        description:
          "Integrate AI into approved information sources, internal workflows, document processing, support systems, and healthcare applications.",
      },

      {
        title: "FinTech",
        description:
          "Use LLMs for document analysis, customer support, knowledge access, workflow automation, and AI-powered financial applications.",
      },

      {
        title: "Education",
        description:
          "Develop AI learning assistants, content generation tools, knowledge systems, personalized learning experiences, and educational applications.",
      },

      {
        title: "Real Estate",
        description:
          "Build AI assistants, property search experiences, lead automation, document processing, and intelligent communication workflows.",
      },

      {
        title: "Professional Services",
        description:
          "Connect LLMs with business knowledge, documents, research, workflows, and internal systems to improve productivity and information access.",
      },

      {
        title: "Logistics",
        description:
          "Apply LLMs to operational workflows, document processing, customer communication, information retrieval, and logistics management systems.",
      },

      {
        title: "Manufacturing",
        description:
          "Integrate AI with operational knowledge, technical documentation, internal systems, workflow automation, and business applications.",
      },

      {
        title: "Startups",
        description:
          "Build AI-powered MVPs, product features, assistants, automation workflows, and scalable LLM applications designed for fast-growing startups.",
      },

      {
        title: "Enterprise Businesses",
        description:
          "Develop secure and scalable LLM solutions that integrate with enterprise applications, business data, internal workflows, and existing technology infrastructure.",
      },
    ],
  },
  developmentProcess: {
    header: {
      title: [
        [
          { text: "Our" },
          { text: "LLM", variant: "italic" },
          { text: "Integration", variant: "italic" },
          { text: "Process", variant: "italic" },
        ],
      ],

      description: [
        [
          {
            text: "From understanding your business needs to deploying and scaling AI features, our structured process helps integrate LLM technology into your products, workflows, and applications.",
          },
        ],
      ],
    },

    steps: [
      {
        title: "Understand",
        description:
          "We understand your product, business workflows, users, and the specific problems you want to solve with LLM technology.",
      },
      {
        title: "Plan",
        description:
          "We define the AI use cases, integration approach, model requirements, data flow, architecture, and technical roadmap.",
      },
      {
        title: "Design",
        description:
          "We design the AI experience and interaction flows to make LLM-powered features useful, intuitive, and aligned with your product.",
      },
      {
        title: "Integrate",
        description:
          "Our developers integrate the required LLM APIs, models, data sources, business systems, and application workflows.",
      },
      {
        title: "Test",
        description:
          "We evaluate response quality, reliability, performance, security, and edge cases to ensure the integration works effectively.",
      },
      {
        title: "Deploy & Scale",
        description:
          "We deploy the solution and optimize the architecture, performance, and costs as usage and business requirements grow.",
      },
    ],
  },
  deliveryApproach: {
    header: {
      title: [
        [
          { text: "A" },
          { text: "Practical" },
          { text: "Approach" },
          { text: "to" },
          { text: "LLM", variant: "italic" },
          { text: "Integration", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "We focus on building LLM solutions around real business requirements rather than adding AI without a clear purpose.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Business-Focused AI",
        description: "Every integration starts with a defined business use case and measurable product requirement.",
      },
      {
        title: "Scalable Architecture",
        description: "We build flexible architectures that can support increasing users, data, and AI workloads.",
      },
      {
        title: "Reliable AI Experiences",
        description: "We focus on structured prompts, relevant context, validation, and reliable application behavior.",
      },
      {
        title: "Secure Integrations",
        description:
          "We design integrations with appropriate data handling, API security, access controls, and application-level protections.",
      },
      {
        title: "Cost-Aware Development",
        description:
          "We consider model selection, usage patterns, token consumption, caching, and architecture to help control AI infrastructure costs.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [
        [{ text: "LLM", variant: "italic" }, { text: "Integration" }],
        [{ text: "Technology" }, { text: "Expertise", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Explore Skyphr’s LLM integration expertise across OpenAI, Anthropic, Gemini, RAG, AI agents, APIs, application development, databases, and cloud infrastructure to build secure, scalable, production-ready AI solutions.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "LLM & AI Technologies",
        technologies: [
          { name: "Large Language Models (LLMs)" },
          { name: "OpenAI APIs" },
          { name: "Anthropic APIs" },
          { name: "Google Gemini" },
          { name: "Retrieval-Augmented Generation (RAG)" },
          { name: "AI Agents" },
          { name: "Prompt Engineering" },
          { name: "Embeddings" },
          { name: "Natural Language Processing" },
        ],
      },
      {
        title: "LLM Integration & APIs",
        technologies: [
          { name: "AI APIs & SDKs" },
          { name: "REST APIs" },
          { name: "Custom AI Integrations" },
          { name: "Context Management" },
          { name: "Function Calling" },
          { name: "Structured Outputs" },
          { name: "Streaming Responses" },
          { name: "Third-Party Integrations" },
        ],
      },
      {
        title: "Application Development",
        technologies: [
          { name: "Python" },
          { name: "FastAPI" },
          { name: "Node.js" },
          { name: "React.js" },
          { name: "Next.js" },
          { name: "SaaS Applications" },
          { name: "Web Applications" },
          { name: "Enterprise Applications" },
        ],
      },
      {
        title: "Data & Cloud Infrastructure",
        technologies: [
          { name: "Vector Databases" },
          { name: "SQL Databases" },
          { name: "NoSQL Databases" },
          { name: "Database Integrations" },
          { name: "Cloud Infrastructure" },
          { name: "Cloud Storage" },
          { name: "Knowledge Bases" },
          { name: "Scalable AI Architecture" },
        ],
      },
    ],
  },

  ourValues: {
    header: {
      title: [
        [{ text: "The" }, { text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Our" }],
        [
          { text: "LLM", variant: "italic" },
          { text: "Integration", variant: "italic" },
          { text: "Services", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Every LLM integration we deliver is guided by a simple belief: AI should be practical, scalable, high-performing, and genuinely useful to your business.",
          },
        ],
      ],
    },
    valuesCards: LLM_INTEGRATION_SERVICE_VALUES_CARD_DATA,
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }],
        [
          { text: "For", variant: "italic" },
          { text: "LLM", variant: "italic" },
          { text: "Integration?", variant: "italic" },
        ],
      ],
      description: [],
    },
    reasons: [
      "Experience across AI, software development, and digital product engineering",
      "Business-focused LLM integration strategies",
      "Custom AI solutions built around your workflows",
      "Scalable and maintainable architectures",
      "Modern LLM APIs and AI technologies",
      "Secure integration with existing applications",
      "Performance and AI cost optimization",
      "Flexible engagement for startups and growing businesses",
      "End-to-end design and development support",
    ],
  },
  faq: {
    header: {
      title: [[{ text: "Got Questions? " }], [{ text: "We've Got " }, { text: "Answers", variant: "italic" }]],

      description: [
        [
          { text: "Everything you need to know about " },
          { text: "LLM integration", variant: "brand" },
          {
            text: ", AI applications, integrations, scalability, and building intelligent products with large language models.",
          },
        ],
      ],
    },

    faqsItems: LLM_INTEGRATION_SERVICE_PAGE_FAQ_DATA,
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Build" }, { text: "Smarter" }, { text: "Products" }],
        [
          { text: "with", variant: "italic" },
          { text: "LLM", variant: "italic" },
          { text: "Integration", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Turn large language models into practical AI features for your products and business workflows. Skyphr can help you design, integrate, and scale LLM-powered solutions built around your goals.",
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
