import AI_CHATBOT_ASSISTANT_SERVICE_4X_IMG from "@/app/assets/webp/4x/ai-chatbot-assistant-development-4x.webp";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import { createElement } from "react";
import { FiLayers, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

export const AI_CHATBOT_ASSISTANT_SERVICE_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "AI Chatbot & Assistant Development Services | Skyphr",
    description:
      "Build intelligent AI chatbots and assistants with Skyphr. Automate support, sales, workflows and customer interactions with scalable AI solutions.",
    openGraph: {
      title: "AI Chatbot & Assistant Development Services | Skyphr",
      description:
        "Build intelligent AI chatbots and assistants with Skyphr. Automate support, sales, workflows and customer interactions with scalable AI solutions.",
      images: "/og-image/ai-chatbot-assistant-development.png",
      type: "website",
    },
    twitter: {
      title: "AI Chatbot & Assistant Development Services | Skyphr",
      description:
        "Build intelligent AI chatbots and assistants with Skyphr. Automate support, sales, workflows and customer interactions with scalable AI solutions.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/ai-chatbot-assistant-development.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/services/ai-chatbot-assistant-development`,
    },
  },
  hero: {
    header: {
      title: [[{ text: "AI Chatbot" }, { text: "& Assistant" }, { text: "Development" }, { text: "Services" }]],
      description: [
        [
          {
            text: "Build intelligent AI chatbots and virtual assistants that understand users, automate conversations and help your business deliver faster, more personalized experiences.",
          },
        ],
        [
          {
            text: "Skyphr designs and develops AI-powered chatbots and assistants for customer support, sales, internal operations, knowledge management and business automation. We combine conversational AI, LLMs, APIs and business systems to create assistants that are useful, scalable, and aligned with your workflows.",
          },
        ],
      ],
      heroImage: {
        imagePath: AI_CHATBOT_ASSISTANT_SERVICE_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "AI chatbot and assistant development services hero illustration",
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
        [{ text: "What " }, { text: "We " }, { text: "Build " }, { text: "with" }],
        [{ text: "AI Chatbot & Assistant Development", variant: "italic", classNames: "text-center" }],
      ],
      description: [
        [
          {
            text: "Skyphr builds custom AI chatbots and intelligent assistants that go beyond simple scripted conversations. Our solutions can understand natural language, retrieve relevant information, connect with business systems and take actions based on user requests.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "AI Customer Support Chatbots",
        description:
          "Build AI-powered support assistants that answer customer questions, resolve common issues, provide product information and reduce repetitive support workloads.",
      },
      {
        title: "AI Sales Assistants",
        description:
          "Create conversational sales assistants that qualify leads, answer product questions, recommend relevant services and help move prospects through the sales process.",
      },
      {
        title: "AI Virtual Assistants",
        description:
          "Develop intelligent virtual assistants that help users complete tasks, access information, manage workflows and interact with your digital products through natural language.",
      },
      {
        title: "Internal AI Assistants",
        description:
          "Build private AI assistants for employees that help search company information, summarize documents, answer internal questions and support everyday business operations.",
      },
      {
        title: "Knowledge-Based AI Chatbots",
        description:
          "Connect AI assistants with company documentation, knowledge bases, databases and other trusted information sources to provide relevant and context-aware responses.",
      },
      {
        title: "AI Workflow Assistants",
        description:
          "Create assistants that connect with business applications and APIs to perform actions, automate repetitive workflows, update information and support operational processes.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [[{ text: "Features" }, { text: "of AI" }], [{ text: "Chatbots & Assistants", variant: "italic" }]],
      description: [
        [
          {
            text: "Discover the key features that make AI chatbots and assistants intelligent, responsive, scalable, and capable of delivering personalized experiences while automating everyday business interactions.",
          },
        ],
      ],
    },
    features: [
      "Natural Language Understanding",
      "Context-Aware Conversations",
      "LLM-Powered Responses",
      "Knowledge Base Integration",
      "API & System Integrations",
      "Multi-Channel Support",
      "Human Handoff",
      "Analytics & Conversation Insights",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Business" }, { text: "Benefits" }, { text: "Of" }],
        [
          { text: "AI Chatbots &", variant: "italic" },
          { text: "Assistants", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Explore practical AI chatbot and assistant use cases that help businesses automate conversations, support customers, qualify leads, access knowledge, and streamline everyday workflows.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Automate Repetitive Conversations",
        description:
          "Handle frequently asked questions, routine requests and common customer interactions automatically.",
      },
      {
        title: "Improve Customer Experience",
        description:
          "Provide users with fast, consistent and accessible assistance without requiring them to wait for a support representative.",
      },
      {
        title: "Reduce Operational Workload",
        description:
          "Automate repetitive tasks and conversations so teams can focus on higher-value business activities.",
      },
      {
        title: "Support Sales & Lead Generation",
        description:
          "Use conversational AI to engage visitors, answer questions, qualify prospects and support sales workflows.",
      },
      {
        title: "Make Business Knowledge Accessible",
        description:
          "Give employees and customers a conversational way to find relevant information across documents, systems and knowledge bases.",
      },
      {
        title: "Scale Customer Support",
        description:
          "Handle increasing volumes of customer interactions without requiring the same level of manual support resources.",
      },
    ],
  },
  developmentProcess: {
    header: {
      title: [
        [{ text: "Our AI" }, { text: "Chatbot &" }],
        [
          { text: "Assistant", variant: "italic" },
          { text: "Development Process", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Follow a structured AI development process to design, build, integrate, and optimize intelligent chatbots and assistants that align with your business goals, workflows, users, and technology requirements.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Strategy",
        description: "We understand your business goals, users, workflows, data sources and chatbot requirements to define the right AI assistant strategy.",
      },
      {
        title: "Conversation & Experience Design",
        description: "We map user intents, conversation flows, assistant behavior, fallback scenarios and user journeys to create a useful conversational experience.",
      },
      {
        title: "AI & Technology Architecture",
        description: "We select the appropriate AI models, knowledge sources, integrations, APIs and architecture based on your requirements.",
      },
      {
        title: "Development & Integration",
        description: "Our team develops the chatbot or assistant and integrates it with your website, application, knowledge base, CRM, databases or other business systems.",
      },
      {
        title: "Testing & Optimization",
        description: "We test responses, conversation flows, integrations, edge cases and reliability to improve the quality and consistency of the assistant.",
      },
      {
        title: "Deployment & Improvement",
        description: "We deploy the AI assistant and monitor its performance while continuously improving responses, workflows and capabilities based on real usage.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [[{ text: "Technology" }, { text: "&" }, { text: "Expertise" }]],
      description: [
        [
          {
            text: "Skyphr combines conversational AI with modern software engineering to build reliable AI chatbot and assistant solutions.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "AI & Models",
        technologies: [
          { name: "Large Language Models (LLMs)" },
          { name: "Conversational AI" },
          { name: "AI Agents" },
          { name: "Retrieval-Augmented Generation (RAG)" },
        ],
      },
      {
        title: "Data & Integrations",
        technologies: [
          { name: "API Integrations" },
          { name: "Knowledge Bases" },
          { name: "Vector Databases" },
          { name: "CRM & Business System Integrations" },
        ],
      },
      {
        title: "Software & Web",
        technologies: [
          { name: "Custom Software Development" },
          { name: "SaaS Applications" },
          { name: "Web Applications" },
          { name: "AI Automation" },
        ],
      },
    ],
  },
  deliveryApproach: {
    header: {
      title: [[{ text: "Our" }, { text: "Delivery" }], [{ text: "Approach", variant: "italic" }]],
      description: [
        [
          {
            text: "Our delivery approach combines AI strategy, conversational design, scalable development, seamless integrations, testing, and continuous optimization to deliver reliable AI assistants.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Custom AI Solutions",
        description:
          "We develop AI chatbots around your business requirements rather than forcing your workflows into a generic chatbot platform.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Our AI assistant solutions are designed to support growing users, conversations, integrations and business requirements.",
      },
      {
        title: "Business-Focused AI",
        description:
          "We focus on practical AI use cases that improve customer experiences, automate operations and create measurable business value.",
      },
      {
        title: "Secure & Controlled Data",
        description:
          "We design AI systems around appropriate data access, permissions, integrations and business requirements.",
      },
      {
        title: "Continuous Optimization",
        description:
          "AI assistants can be continuously improved using conversation insights, user feedback, updated knowledge and evolving business requirements.",
      },
    ],
  },
  ourValues: {
    header: {
      title: [
        [{ text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Our" }],
        [
          { text: "AI Chatbot", variant: "italic" },
          { text: "Development", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "We build AI chatbot and assistant solutions around clarity, scalability, performance, security, and measurable business impact to create useful experiences that deliver long-term value.",
          },
        ],
      ],
    },
    valuesCards: [
      {
        id: 1,
        title: "Clarity Over Complexity",
        description:
          "We design conversational experiences that make complex information and tasks easier for users to understand and complete.",
        icon: createElement(FiLayers, { className: "text-2xl" }),
        color: "#AC9BFF",
        bgColor: "rgba(172, 155, 255, 0.5)",
      },
      {
        id: 2,
        title: "Built for Scale",
        description:
          "We create AI chatbot architectures that can evolve as your users, data, workflows and business requirements grow.",
        icon: createElement(FiTrendingUp, { className: "text-2xl" }),
        color: "#B8C56F",
        bgColor: "rgba(184, 197, 111, 0.5)",
      },
      {
        id: 3,
        title: "Performance First",
        description: "We focus on responsive experiences, efficient integrations and reliable AI workflows.",
        icon: createElement(FiZap, { className: "text-2xl" }),
        color: "#FF767A",
        bgColor: "rgba(255, 118, 122, 0.5)",
      },
      {
        id: 4,
        title: "Business Impact",
        description:
          "Every chatbot and assistant is designed around a practical business objective, from customer support and sales to internal productivity and automation.",
        icon: createElement(FiUsers, { className: "text-2xl" }),
        color: "#5DADE2",
        bgColor: "rgba(93, 173, 226, 0.5)",
      },
    ],
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "For" }],
        [
          { text: "AI Chatbot &", variant: "italic" },
          { text: "Assistant Development?", variant: "italic" },
        ],
      ],
      description: [],
    },
    reasons: [
      "AI & Software Expertise",
      "Custom-Built Experiences",
      "LLM & RAG Capabilities",
      "AI Integrations",
      "Scalable Development",
      "End-to-End Delivery",
    ],
  },
  industriesServe: {
    header: {
      title: [[{ text: "Industries" }, { text: "We" }, { text: "Serve", variant: "italic" }]],
      description: [
        [
          {
            text: "We build AI chatbot and assistant solutions for SaaS, technology, e-commerce, finance, education, healthcare, professional services, real estate, and other growing industries.",
          },
        ],
      ],
    },
    items: [
      {
        title: "SaaS & Technology",
        description: "AI assistants for product support, onboarding, knowledge access and customer engagement.",
      },
      {
        title: "E-commerce",
        description:
          "Conversational shopping assistants, product discovery, order support and customer service automation.",
      },
      {
        title: "Healthcare",
        description:
          "AI assistants for information access, administrative workflows, appointment-related interactions and support experiences where appropriate.",
      },
      {
        title: "Finance & FinTech",
        description:
          "Conversational interfaces for customer support, product information, internal knowledge and workflow assistance.",
      },
      {
        title: "Education",
        description: "AI tutors, student assistants, knowledge assistants and automated support experiences.",
      },
      {
        title: "Professional Services",
        description:
          "AI assistants for lead qualification, knowledge management, customer communication and internal productivity.",
      },
      {
        title: "Real Estate",
        description:
          "Conversational assistants for property discovery, lead qualification, customer questions and sales support.",
      },
    ],
  },
  faq: {
    header: {
      title: [[{ text: "Frequently Asked Questions" }]],
      description: [
        [
          {
            text: "Find answers to common questions about AI chatbot development, integrations, LLMs, knowledge bases, automation, development timelines, and building custom AI assistants for your business.",
          },
        ],
      ],
    },
    faqsItems: [
      {
        question: "What is an AI chatbot?",
        answer:
          "An AI chatbot is a software application that uses artificial intelligence and natural language processing to understand user questions and provide conversational responses. Modern AI chatbots can also connect with business systems and perform specific actions.",
      },
      {
        question: "What is an AI assistant?",
        answer:
          "An AI assistant is a conversational AI system designed to help users complete tasks, access information, solve problems or interact with business systems through natural language.",
      },
      {
        question: "What is the difference between an AI chatbot and an AI assistant?",
        answer:
          "An AI chatbot generally focuses on conversations and information exchange, while an AI assistant can provide broader capabilities such as retrieving information, connecting to applications and completing business tasks.",
      },
      {
        question: "Can you build a custom AI chatbot for our business?",
        answer:
          "Yes. Skyphr develops custom AI chatbots based on your business goals, users, data, workflows, integrations and technology requirements.",
      },
      {
        question: "Can an AI chatbot connect to our existing systems?",
        answer:
          "Yes. AI assistants can be integrated with APIs, CRMs, databases, SaaS applications, websites, internal tools and other business systems depending on the required architecture.",
      },
      {
        question: "Can an AI assistant use our company knowledge?",
        answer:
          "Yes. AI assistants can be connected to approved company documents, knowledge bases, databases, FAQs and other information sources. For advanced knowledge retrieval, Skyphr can implement RAG Development to help the assistant retrieve relevant information before generating responses.",
      },
      {
        question: "Can you integrate AI chatbots with LLMs?",
        answer:
          "Yes. Skyphr can integrate suitable large language models into chatbot and assistant applications based on the required capabilities, performance, integrations and business requirements.",
      },
      {
        question: "Can AI chatbots automate business workflows?",
        answer:
          "Yes. With the right integrations and permissions, AI assistants can support workflows such as lead qualification, information retrieval, customer support, task creation, data updates and other repetitive business processes.",
      },
      {
        question: "How long does it take to develop an AI chatbot?",
        answer:
          "Development time depends on the chatbot's complexity, integrations, knowledge sources, AI requirements, channels and workflow automation. A focused MVP can generally be developed faster than a production-grade enterprise assistant with multiple integrations.",
      },
      {
        question: "Can Skyphr improve an existing chatbot?",
        answer:
          "Yes. We can help improve existing chatbot experiences by reviewing conversation flows, AI responses, knowledge retrieval, integrations, performance and overall user experience.",
      },
    ],
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Build" }, { text: "Your" }, { text: "AI" }, { text: "Chatbot", variant: "italic" }],
        [
          { text: "or" },
          { text: "Assistant", variant: "italic" },
          { text: "With" },
          { text: "Skyphr", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Turn conversations into useful digital experiences with a custom AI chatbot or assistant built around your business.",
          },
        ],
        [
          {
            text: "Whether you need customer support automation, an AI sales assistant, an internal knowledge assistant, or an intelligent workflow solution, Skyphr can help you design and build an AI system that fits your product and business requirements.",
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
        classNames: "min-w-55",
      },
    ],
  },
  contactUs: COMMON_CONTACT_US_SECTION_DATA,
};
