import SAAS_APP_DEVELOPMENT_4X_IMG from "@/app/assets/webp/4x/rag-development-services-4x.webp";
import { RAG_DEVELOPMENT_SERVICE_PAGE_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { RAG_DEVELOPMENT_SERVICE_VALUES_CARD_DATA } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const RAG_DEVELOPMENT_SERVICE_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "RAG Development Services | Retrieval-Augmented Generation | Skyphr",
    description:
      "Build intelligent AI systems with Skyphr’s RAG development services. Connect LLMs with your business data to deliver accurate, contextual, and scalable AI solutions.",
    openGraph: {
      title: "RAG Development Services | Retrieval-Augmented Generation | Skyphr",
      description:
        "Build intelligent AI systems with Skyphr’s RAG development services. Connect LLMs with your business data to deliver accurate, contextual, and scalable AI solutions.",
      images: "/og-image/rag-development-services.png",
      type: "website",
    },
    twitter: {
      title: "RAG Development Services | Retrieval-Augmented Generation | Skyphr",
      description:
        "Build intelligent AI systems with Skyphr’s RAG development services. Connect LLMs with your business data to deliver accurate, contextual, and scalable AI solutions.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/rag-development-services.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/services/rag-development-services`,
    },
  },
  hero: {
    header: {
      title: [
        [{ text: "RAG " }, { text: "Development" }, { text: "Services" }],
        [
          {
            text: "Build Smarter AI Systems with Retrieval-Augmented Generation",
            variant: "italic",
            classNames: "pt-2 lg:pt-4 flex text-2xl! xl:text-3xl!",
          },
        ],
      ],
      description: [
        [
          {
            text: "Build reliable AI applications that can understand and retrieve information from your business data. Skyphr provides RAG development services that connect large language models with private documents, databases, knowledge bases, and business systems to deliver relevant, contextual, and data-driven responses.",
          },
        ],
        [
          {
            text: "From AI assistants and enterprise search to customer support automation and knowledge management platforms, we design and develop scalable RAG solutions that help businesses make their data more accessible and useful.",
          },
        ],
      ],
      heroImage: {
        imagePath: SAAS_APP_DEVELOPMENT_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "RAG development services hero illustration",
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
        [
          { text: "RAG", variant: "italic", classNames: "text-center" },
          { text: "Development", variant: "italic", classNames: "text-center" },
        ],
      ],
      description: [
        [
          {
            text: "Skyphr helps businesses build retrieval-augmented generation systems that combine LLM capabilities with proprietary business data. Our RAG development solutions are designed to improve the relevance, accuracy, and usefulness of AI-generated responses while keeping your business knowledge connected to the applications where it is needed.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "AI-Powered Knowledge Systems",
        description:
          "Build AI systems that can retrieve relevant information from your internal knowledge sources and use it to generate contextual responses for employees, customers, and business users.",
      },
      {
        title: "Enterprise AI Search",
        description:
          "Transform large collections of documents, databases, and knowledge bases into intelligent search experiences that help users find relevant information using natural language.",
      },
      {
        title: "AI Assistants & Chatbots",
        description:
          "Develop intelligent AI assistants that retrieve information from approved business sources before generating responses, helping users get more relevant answers based on your organization's knowledge.",
      },
      {
        title: "Document Intelligence",
        description:
          "Connect RAG systems with business documents, reports, manuals, contracts, policies, and other information sources to make large volumes of content easier to search and use.",
      },
      {
        title: "Customer Support RAG Systems",
        description:
          "Build AI-powered customer support solutions that retrieve relevant product, service, and knowledge-base information to assist customers and support teams.",
      },
      {
        title: "Internal Knowledge Assistants",
        description:
          "Create secure internal AI assistants that help employees find company information, processes, documentation, and operational knowledge through natural language queries.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "RAG", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Solutions", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "We build end-to-end RAG solutions that connect your data to leading LLMs, so your AI answers with accuracy, context and security, and keeps improving as you grow.",
          },
        ],
      ],
    },

    items: [
      {
        title: "Custom RAG Architecture",
        description:
          "Design RAG architectures around your application's requirements, data sources, security model, user workflows, and expected scale.",
      },
      {
        title: "Document Processing & Data Ingestion",
        description:
          "Connect and process information from documents, websites, databases, APIs, cloud storage, and other structured or unstructured data sources.",
      },
      {
        title: "Semantic Search",
        description:
          "Implement semantic retrieval to identify information based on meaning and context rather than relying only on exact keyword matches.",
      },
      {
        title: "Vector Database Integration",
        description:
          "Store and retrieve high-dimensional embeddings using vector databases to support fast and relevant information retrieval for AI applications.",
      },
      {
        title: "LLM Integration",
        description:
          "Connect RAG pipelines with leading large language models to generate responses based on retrieved business context.",
      },
      {
        title: "Context-Aware Responses",
        description:
          "Provide AI systems with relevant information before response generation so outputs can be better aligned with the available business knowledge.",
      },
      {
        title: "Knowledge Base Integration",
        description:
          "Connect existing knowledge bases and information repositories with AI applications without requiring businesses to rebuild their entire data infrastructure.",
      },
      {
        title: "Secure Data Retrieval",
        description:
          "Design controlled retrieval workflows that help ensure AI systems access only the information required for specific applications, users, or workflows.",
      },
      {
        title: "RAG Performance Optimization",
        description:
          "Continuously improve retrieval quality, response relevance, latency, and system performance as your data and usage requirements grow.",
      },
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Business" }, { text: "Benefits" }, { text: "of" }],
        [
          { text: "RAG", variant: "italic" },
          { text: "Development", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "RAG turns your business knowledge into AI that actually helps, giving teams and customers faster, more relevant answers grounded in your own data, not generic model guesses.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Improve AI Response Relevance",
        description:
          "Connect LLMs with your organization's information to provide responses that are more relevant to specific business contexts and user queries.",
      },
      {
        title: "Make Business Knowledge Accessible",
        description:
          "Turn scattered documents, databases, and knowledge repositories into searchable sources that employees and customers can access through AI-powered interfaces.",
      },
      {
        title: "Reduce Manual Information Search",
        description:
          "Help teams find relevant information faster through natural-language search and AI-powered knowledge retrieval.",
      },
      {
        title: "Build More Useful AI Applications",
        description:
          "Combine generative AI with proprietary business data to create practical AI applications that support real-world workflows.",
      },
      {
        title: "Support Business-Specific Use Cases",
        description:
          "Develop RAG systems around your organization's processes, documentation, products, services, and knowledge rather than relying only on general-purpose model knowledge.",
      },

      {
        title: "Scale AI Knowledge Systems",
        description:
          "Build RAG architectures that can grow with increasing users, documents, data sources, and application requirements.",
      },
    ],
  },
  industriesServe: {
    header: {
      title: [[{ text: "Industries" }, { text: "We" }, { text: "Serve", variant: "italic" }]],
      description: [
        [
          {
            text: "We build RAG systems for teams whose knowledge lives in documents, policies and databases, so their AI answers with sources they can trust.",
          },
        ],
      ],
    },
    items: [
      {
        title: "SaaS & Technology",
        description: "Build intelligent product features, AI assistants, enterprise search, and knowledge systems.",
      },
      {
        title: "Healthcare",
        description:
          "Create controlled information retrieval systems for approved documents, internal knowledge, and operational workflows.",
      },
      {
        title: "Finance & FinTech",
        description:
          "Connect AI applications with financial documents, internal knowledge, reports, and business information.",
      },
      {
        title: "E-commerce",
        description:
          "Build AI shopping assistants, product knowledge systems, customer support solutions, and intelligent search.",
      },
      {
        title: "Education",
        description: "Develop AI learning assistants and knowledge retrieval systems connected to educational content.",
      },
      {
        title: "Professional Services",
        description:
          "Make internal documents, research, reports, and organizational knowledge easier to search and access.",
      },
      {
        title: "Enterprises",
        description:
          "Develop secure enterprise RAG systems that connect organizational knowledge with AI-powered applications.",
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [
        [
          { text: "Our" },
          { text: "RAG", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Process", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "From understanding your use case to deploying at scale, our seven-step process builds RAG systems that are accurate, secure and grounded in your business data.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Requirements & Use Case Analysis",
        description:
          "We understand your business objectives, users, data sources, AI use cases, security requirements, and expected outcomes to define the right RAG solution.",
      },
      {
        title: "Data Source Assessment",
        description:
          "We evaluate your documents, databases, APIs, knowledge bases, and other information sources to determine how they should be processed and connected to the RAG pipeline.",
      },
      {
        title: "RAG Architecture Design",
        description:
          "Our team designs the retrieval and generation architecture, including data ingestion, chunking, embeddings, vector storage, retrieval strategies, LLM integration, and application workflows.",
      },
      {
        title: "Data Processing & Indexing",
        description:
          "We prepare, structure, chunk, and index your business data so relevant information can be efficiently retrieved when users submit queries.",
      },
      {
        title: "RAG Development & LLM Integration",
        description:
          "We develop the RAG pipeline and connect it with the required LLMs, applications, databases, APIs, and user interfaces.",
      },
      {
        title: "Testing & Optimization",
        description:
          "We evaluate retrieval relevance, response quality, latency, accuracy, and system performance and optimize the solution based on real-world use cases.",
      },
      {
        title: "Deployment & Scaling",
        description:
          "We deploy the RAG application into your required environment and establish a scalable architecture that can support future data, users, and functionality.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [[{ text: "RAG", variant: "italic" }, { text: "Technology" }, { text: "&" }, { text: "Expertise" }]],
      description: [
        [
          {
            text: "Skyphr combines AI engineering, software development, data processing, and LLM integration expertise to build production-ready RAG applications.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "AI & LLM Technologies",
        technologies: [
          { name: "Large Language Models" },
          { name: "Retrieval-Augmented Generation" },
          { name: "Prompt Engineering" },
          { name: "Embeddings" },
          { name: "AI Agents" },
          { name: "Natural Language Processing" },
        ],
      },
      {
        title: "RAG Components",
        technologies: [
          { name: "Document ingestion" },
          { name: "Data preprocessing" },
          { name: "Text chunking" },
          { name: "Embedding generation" },
          { name: "Vector search" },
          { name: "Metadata filtering" },
          { name: "Retrieval pipelines" },
          { name: "Context management" },
          { name: "Response generation" },
        ],
      },
      {
        title: "Data & Application Technologies",
        technologies: [
          { name: "Vector databases" },
          { name: "SQL and NoSQL databases" },
          { name: "REST APIs" },
          { name: "Cloud storage" },
          { name: "Knowledge bases" },
          { name: "Web applications" },
          { name: "SaaS platforms" },
          { name: "Enterprise systems" },
        ],
      },
    ],
  },

  ourValues: {
    header: {
      title: [
        [{ text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Our" }],
        [
          { text: "RAG", variant: "italic" },
          { text: "Development", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Every RAG project we deliver is guided by a simple belief: AI should be clear, scalable, high-performing, and genuinely useful to your business.",
          },
        ],
      ],
    },
    valuesCards: RAG_DEVELOPMENT_SERVICE_VALUES_CARD_DATA,
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }],
        [
          { text: "For", variant: "italic" },
          { text: "RAG", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [],
    },
    items: [
      {
        title: "End-to-End RAG Development",
        description:
          "From data preparation and retrieval architecture to LLM integration and application development, we manage the complete RAG development lifecycle.",
      },
      {
        title: "Custom-Built Solutions",
        description:
          "We develop RAG applications around your business data, workflows, users, integrations, and technical requirements.",
      },
      {
        title: "AI & Software Expertise",
        description:
          "Our experience across AI development, SaaS development, UI/UX, APIs, and custom software helps us build RAG systems that work as complete digital products.",
      },
      {
        title: "Scalable Architecture",
        description:
          "We create architectures designed to evolve as your data, users, AI capabilities, and business requirements increase.",
      },
      {
        title: "Production-Focused Development",
        description:
          "Our goal is to build practical RAG applications that can be integrated into real business workflows and products.",
      },
    ],
  },
  faq: {
    header: {
      title: [[{ text: "Got Questions? " }], [{ text: "We've Got " }, { text: "Answers", variant: "italic" }]],
      description: [
        [
          { text: "Everything you need to know about " },
          { text: "RAG development", variant: "brand" },
          { text: ", integrations, scalability, and building AI applications with your business data." },
        ],
      ],
    },
    faqsItems: RAG_DEVELOPMENT_SERVICE_PAGE_FAQ_DATA,
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Build" }, { text: "Your" }, { text: "RAG-Powered", variant: "italic" }],
        [
          { text: "AI", variant: "italic" },
          { text: "Solution" },
          { text: "with" },
          { text: "Skyphr", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Turn your business knowledge into intelligent, accessible AI experiences with a custom RAG solution built around your data and workflows.",
          },
        ],
        [
          {
            text: "Whether you need an enterprise knowledge assistant, AI-powered search, document intelligence platform, customer support assistant, or RAG-powered SaaS feature, Skyphr can help you design, develop, integrate, and scale it.",
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
