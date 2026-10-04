import SkyAiDemoVsProductionFailure from "@/app/assets/webp/sky-ai/skyai-demo-vs-production-failure.webp";
import SkyAiMessyDataNotReady from "@/app/assets/webp/sky-ai/skyai-messy-data-not-ready.webp";
import SkyAiRisingAiApiCosts from "@/app/assets/webp/sky-ai/skyai-rising-ai-api-costs.webp";
import SkyAiSkyVoiceAgentCall from "@/app/assets/webp/sky-ai/skyai-sky-voice-agent-call.webp";
import { SKY_AI_PAGE_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { SkyAiPageDataInterface } from "@/app/utils/interface/data.interface";
import { createElement } from "react";
import { FaCode, FaRegCompass, FaRegLightbulb, FaRocket } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import {
  HiBolt,
  HiChatBubbleOvalLeftEllipsis,
  HiCircleStack,
  HiCpuChip,
  HiDocumentText,
  HiLightBulb,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineCircleStack,
  HiOutlineDocument,
  HiOutlineDocumentText,
  HiSparkles,
  HiUserGroup,
} from "react-icons/hi2";
import { LuEye, LuFileCheck, LuLockKeyhole, LuShieldCheck, LuUserCheck } from "react-icons/lu";
import { PiWaveformBold } from "react-icons/pi";
import {
  SiFastapi,
  SiGooglegemini,
  SiHuggingface,
  SiLangchain,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
} from "react-icons/si";

const title = "SkyAI by Skyphr | AI Agents, LLM Integration & Workflow Automation";
const description =
  "SkyAI is the AI engineering division of Skyphr. We build AI agents, LLM integrations, RAG assistants, chatbots, and workflow automations that run reliably in production, not just in a demo.";

export const SKY_AI_PAGE_DATA: SkyAiPageDataInterface = {
  metadata: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: "/og-image/sky-ai.png",
      type: "website",
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/sky-ai.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/sky-ai`,
    },
  },
  subNav: [
    {
      label: "AI Development & Automation",
      href: "/services/ai-development-services",
      icon: createElement(HiCpuChip),
      trailingIcon: "arrow",
    },
    {
      label: "LLM Integration & RAG",
      href: "#llm-integration-rag",
      icon: createElement(HiCircleStack),
      trailingIcon: "chevron",
      children: [
        {
          label: "LLM Integration Service",
          href: "/services/llm-integration-service",
          icon: createElement(HiCpuChip),
        },
        {
          label: "RAG Development Services",
          href: "/services/rag-development-services",
          icon: createElement(HiCpuChip),
        },
      ],
    },
    {
      label: "AI Chatbots & Assistants",
      href: "/services/ai-chatbot-assistant-development",
      icon: createElement(HiChatBubbleOvalLeftEllipsis),
      trailingIcon: "arrow",
    },
    {
      label: "AI Strategy & Consulting",
      href: "services/ai-consulting-services",
      icon: createElement(HiLightBulb),
      trailingIcon: "arrow",
    },
    {
      label: "Hire AI Developers",
      href: "hire/hire-ai-developers",
      icon: createElement(HiUserGroup),
      trailingIcon: "arrow",
    },
  ],
  hero: {
    wordmark: {
      text: "Sky",
      highlightedText: "AI",
    },
    header: {
      title: [[{ text: "The AI Engineering Division of Skyphr" }]],
      description: [
        [
          {
            text: `AI development services, intelligent agents, LLM integrations, RAG solutions, and workflow automation built for real business use. SkyAI helps startups, SaaS companies, and enterprises turn AI opportunities into secure, scalable, production-ready systems.
`,
            classNames: "sm:block",
          },
        ],
      ],
    },
    ctas: [
      {
        label: "Book a Free AI Consultation",
        href: "/contact",
        variant: "CTA_PRIMARY",
        classNames: "min-w-0 pl-6 pr-13.5",
      },
    ],
    tags: [
      { label: "AI Agent Development", icon: createElement(HiSparkles) },
      { label: "LLM Integration", icon: createElement(HiDocumentText) },
      { label: "RAG Development", icon: createElement(HiCircleStack) },
      { label: "AI Workflow Automation", icon: createElement(HiBolt) },
      { label: "AI Chatbot Development", icon: createElement(HiChatBubbleOvalLeftEllipsis) },
    ],
  },
  techStrip: {
    label: ["Built with the technologies", "powering modern AI"],
    logos: [
      { name: "OpenAI", icon: createElement(SiOpenai) },
      { name: "Anthropic", labelClassName: "uppercase font-bold tracking-wide text-xs sm:text-sm" },
      { name: "Gemini", icon: createElement(SiGooglegemini) },
      { name: "LangChain", icon: createElement(SiLangchain), iconClassName: "text-2xl" },
      { name: "LlamaIndex", labelClassName: "font-semibold" },
      { name: "Hugging Face", icon: createElement(SiHuggingface), labelClassName: "font-bold" },
      { name: "Python", icon: createElement(SiPython) },
      { name: "FastAPI", icon: createElement(SiFastapi) },
      { name: "Node.js", icon: createElement(SiNodedotjs) },
      { name: "Next.js", icon: createElement(SiNextdotjs) },
      { name: "Pinecone", labelClassName: "font-semibold" },
      { name: "PostgreSQL", icon: createElement(SiPostgresql) },
      { name: "AWS", icon: createElement(FaAws), iconClassName: "text-3xl", labelClassName: "sr-only" },
    ],
  },
  services: {
    id: "skyai-services",
    badge: "What SkyAI builds",
    header: {
      title: [
        [{ text: "AI" }, { text: "that" }, { text: "does" }, { text: "real" }, { text: "work" }],
        [
          { text: "inside", variant: "italic" },
          { text: "your", variant: "italic" },
          { text: "business", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "From autonomous AI agents and enterprise assistants to LLM-powered applications and intelligent workflow automation, we build AI systems that connect with your existing data, software, and business processes.",
          },
        ],
      ],
    },
    cards: [
      {
        id: "ai-agents-automation",
        title: "AI Consulting",
        description:
          "Get expert guidance to identify the right AI opportunities, define practical strategies, and build a clear roadmap for adopting AI across your business.",
        icon: createElement(HiCpuChip),
        points: [
          "AI strategy and use-case identification",
          "AI readiness and technology assessment",
          "AI roadmap, architecture, and implementation planning",
        ],
        link: { label: "Discuss your use case", href: "/contact" },
      },
      {
        id: "llm-integration-rag",
        title: "LLM Integration",
        description:
          "Integrate OpenAI, Claude, Gemini, or open-source large language models into your existing software and digital products with the infrastructure, security, controls, and monitoring required for production.",
        icon: createElement(HiDocumentText),
        points: [
          "AI features inside SaaS applications",
          "Content generation and document summarization",
          "Semantic search, classification, and information extraction",
        ],
        link: { label: "Discuss your use case", href: "/contact" },
      },
      {
        id: "rag-assistants",
        title: "RAG Assistants",
        description:
          "Build retrieval-augmented generation systems that connect AI models with your trusted business data, documents, and knowledge bases to provide relevant, contextual answers with source references.",
        icon: createElement(HiCircleStack),
        points: [
          "Internal AI knowledge bases",
          "Product and documentation Q&A",
          "SOP, policy, and employee assistants",
        ],
        link: { label: "Discuss your use case", href: "/contact" },
      },
      {
        id: "workflow-automation",
        title: "Workflow Automation",
        description:
          "Use AI to automate repetitive business processes and connect the applications your teams already rely on, from incoming forms and documents to CRM updates and customer communication.",
        icon: createElement(HiBolt),
        points: [
          "Lead routing and CRM automation",
          "Document, invoice, and data processing",
          "Email classification and response drafting",
        ],
        link: { label: "Discuss your use case", href: "/contact" },
      },
      {
        id: "ai-chatbots-assistants",
        title: "AI Chatbots",
        description:
          "Deploy intelligent AI chatbots and virtual assistants that can answer questions, qualify prospects, support customers, and hand complex conversations to your team when human expertise is required.",
        icon: createElement(HiChatBubbleOvalLeftEllipsis),
        points: [
          "24/7 customer support",
          "Lead qualification, capture, and booking",
          "Human handoff for complex requests",
        ],
        link: { label: "Discuss your use case", href: "/contact" },
      },
    ],
    ctaCard: {
      title: "Not sure which AI solution fits?",
      description:
        "Tell us about the process, product, or business problem you want to improve. We’ll help identify the right AI architecture, technology, and automation approach for your use case.",
      cta: {
        label: "Book a Free AI Consultation",
        href: "https://cal.com/skyphr/30min",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
  },
  challenges: {
    id: "skyai-challenges",
    badge: "The reality of AI",
    header: {
      title: [
        [{ text: "Why" }, { text: "most" }, { text: "AI" }, { text: "projects" }, { text: "never", variant: "italic" }],
        [{ text: "make it", variant: "italic" }, { text: "to" }, { text: "production" }],
      ],
      description: [
        [
          {
            text: "Many AI initiatives fail to move beyond the prototype stage. The challenge is often not the AI model itself, but the data, integrations, infrastructure, reliability, security, and cost controls surrounding it.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "The demo worked. Production didn't.",
        description:
          "An AI prototype can look impressive in a controlled environment but struggle when exposed to real users, large datasets, changing inputs, business rules, and production traffic.",
        icon: createElement(HiOutlineDocument),
        imageOptions: {
          imagePath: SkyAiDemoVsProductionFailure,
          width: 600,
          height: 270,
          alt: "AI chat demo working while production shows a request timed out error",
        },
      },
      {
        title: "Our data isn't ready.",
        description:
          "Business information is often spread across documents, spreadsheets, databases, CRMs, and internal systems. Without reliable data pipelines and a clear source of truth, AI outputs can become inconsistent or difficult to trust.",
        icon: createElement(HiOutlineCircleStack),
        imageOptions: {
          imagePath: SkyAiMessyDataNotReady,
          width: 600,
          height: 270,
          alt: "Messy spreadsheet with duplicate rows, missing values and mixed date formats",
        },
      },
      {
        title: "Costs grew with every API call.",
        description:
          "Without the right model strategy, usage controls, caching, routing, and monitoring, AI infrastructure costs can increase quickly as adoption grows.",
        icon: createElement(HiOutlineChartBar),
        imageOptions: {
          imagePath: SkyAiRisingAiApiCosts,
          width: 600,
          height: 270,
          alt: "API usage dashboard showing costs up 312% and budget exceeded",
        },
      },
    ],
    ctaCard: {
      title: "Sound familiar? We fix all three.",
      description:
        "SkyAI helps businesses prepare their data, select the right AI architecture, control model and infrastructure costs, and build AI systems designed for reliable production use—not just impressive demonstrations.",
      cta: {
        label: "Book a Free AI Consultation",
        href: "https://cal.com/skyphr/30min",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
  },
  builtBy: {
    id: "skyai-built-by",
    badge: "Built by SkyAI",
    header: {
      title: [
        [
          { text: "We" },
          { text: "don't" },
          { text: "just" },
          { text: "build" },
          { text: "AI" },
          { text: "for" },
          { text: "clients." },
        ],
        [
          {
            text: "We",
            variant: "italic",
          },
          {
            text: "run",
            variant: "italic",
          },
          {
            text: "it",
            variant: "italic",
          },
          {
            text: "ourselves.",
            variant: "italic",
          },
        ],
      ],
      description: [
        [
          {
            text: "We design, build, operate, and improve AI products internally at Skyphr. Our own AI systems give us practical experience with real conversations, integrations, automation workflows, AI costs, and production performance.",
          },
        ],
      ],
    },
    skyCard: {
      title: "Sky, our AI voice agent",
      description:
        "Built in-house by Skyphr, Sky is an AI voice agent designed to handle real business calls, communicate naturally with callers, support multiple languages, and book consultations directly through our scheduling system.",
      stats: [
        { value: "24/7", label: "Every call answered" },
        { value: "Multilingual", label: "Switches between languages during conversations" },
        { value: "Real bookings", label: "Connected to Cal.com" },
      ],

      stack: [
        { label: "Gemini", icon: createElement(SiGooglegemini) },
        { label: "Speech AI", icon: createElement(PiWaveformBold) },
        { label: "Cal.com", icon: createElement(HiOutlineCalendarDays) },
        { label: "Call transcripts", icon: createElement(HiOutlineDocumentText) },
      ],
      imageOptions: {
        imagePath: SkyAiSkyVoiceAgentCall,
        width: 1200,
        height: 800,
        alt: "Sky, Skyphr's AI voice agent, on a live call replying in Hindi and booking a consultation on Cal.com",
      },

      pageLink: { label: "Let Sky answer your calls", href: "/ai-voice-agent" },
    },
    lensCard: {
      status: "Live",
      title: "SkyLens, AI website audit",
      description:
        "SkyLens is an AI-powered website auditing tool that analyzes a website's performance, SEO, and UX and identifies prioritized opportunities for improvement.",
      cta: {
        label: "Try SkyLens",
        href: "https://lens.skyphr.com",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      score: 72,
      scoreLabel: "Sample SkyLens audit score",
      issues: [
        { label: "Slow page load", severity: "high" },
        { label: "Missing meta tags", severity: "medium" },
        { label: "Low contrast text", severity: "medium" },
      ],
    },
    ctaCard: {
      title: "Your AI system could be next.",
      description:
        "Tell us about the business process that consumes your team's time. We’ll identify where AI agents, LLMs, intelligent automation, or AI-powered software can create measurable operational value.",
      cta: {
        label: "Book a Free AI Consultation",
        href: "https://cal.com/skyphr/30min",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
  },

  security: {
    id: "skyai-security",
    badge: { label: "Security & responsible AI", icon: createElement(LuShieldCheck) },
    header: {
      title: [
        [{ text: "AI", variant: "italic" }, { text: "you" }, { text: "can" }, { text: "trust" }],
        [{ text: "with" }, { text: "your" }, { text: "business", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Every AI system we build is designed around practical business requirements: protecting your data, grounding AI responses in trusted information, maintaining human oversight, and providing visibility into system usage and costs.",
          },
        ],
      ],
    },
    cards: [
      {
        icon: createElement(LuLockKeyhole),
        title: "Your data stays yours",
        description:
          "Your business data is used to operate your AI solution according to the agreed system architecture and access controls.",
        list: {
          title: "What this means:",
          items: [
            "Data access limited to what the AI system requires",
            "Secure handling of business information",
            "Deployment on your preferred cloud infrastructure when required",
            "Your organization retains ownership of its data and custom code",
          ],
        },
      },
      {
        icon: createElement(LuFileCheck),
        title: "Answers you can rely on",
        description:
          "We design AI systems to use approved business information and appropriate retrieval or validation mechanisms rather than relying solely on a model's general knowledge.",
        list: {
          title: "What this means:",
          items: [
            "Responses grounded in approved information",
            "RAG and knowledge retrieval where appropriate",
            "Clear fallback behavior when information is unavailable",
            "Reduced risk of unsupported or inaccurate responses",
          ],
        },
      },
      {
        icon: createElement(LuUserCheck),
        title: "Humans stay in control",
        description:
          "AI should support your team, not remove human oversight from important business decisions. We design workflows with human review and escalation where appropriate.",
        list: {
          title: "What this means:",
          items: [
            "Human handoff for sensitive or complex cases",
            "Approval steps before critical actions",
            "Configurable automation boundaries",
            "Ability to pause, modify, or update workflows",
          ],
        },
      },
      {
        icon: createElement(LuEye),
        title: "Full visibility, no black box",
        description:
          "Understand how your AI system is being used, where it performs well, and how much it costs as usage grows.",
        list: {
          title: "What this means:",
          items: [
            "Call and chat transcripts where applicable",
            "AI usage and cost monitoring",
            "Configurable usage limits",
            "Budget and usage alerts",
            "Performance and operational dashboards",
          ],
        },
      },
    ],
  },
  ourApproach: {
    header: {
      title: [
        [{ text: "From" }, { text: "first" }, { text: "call" }, { text: "to" }],
        [
          { text: "AI", variant: "italic" },
          { text: "in", variant: "italic" },
          { text: "production", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "A practical four-step AI development process designed to move from an initial business problem to a working prototype and then into a reliable production environment.",
          },
        ],
      ],
      heroHighlightedText: {
        textOne: "From Idea",
        textTwo: "to Production",
        description: [{ text: "Discover. Prove. Build. Improve." }],
      },
    },

    steps: [
      {
        num: "01",
        title: "Discovery & use-case mapping",
        desc: "We understand your business processes, users, data sources, existing software, and operational challenges. We then identify the AI use case with the clearest business value and define the technical requirements.",
        icon: createElement(FaRegCompass, { className: "w-4 h-4 md:w-6 md:h-6 text-gray-800" }),
        iconBgColor: "bg-purple-50",
        numBgColor: "bg-purple-100",
        numTextColor: "text-purple-800",
      },
      {
        num: "02",
        title: "Proof of concept",
        desc: "We build a focused proof of concept using representative data and real workflows, allowing your team to validate the AI solution before committing to a larger production implementation.",
        icon: createElement(FaRegLightbulb, { className: "w-4 h-4 md:w-6 md:h-6 text-gray-800" }),
        iconBgColor: "bg-yellow-50",
        numBgColor: "bg-yellow-100",
        numTextColor: "text-yellow-800",
      },
      {
        num: "03",
        title: "Production build & integration",
        desc: "We transform the validated solution into a production-ready AI system and integrate it with your applications, CRM, databases, APIs, internal tools, and existing business workflows.",
        icon: createElement(FaCode, { className: "w-4 h-4 md:w-6 md:h-6 text-gray-800" }),
        iconBgColor: "bg-pink-50",
        numBgColor: "bg-pink-100",
        numTextColor: "text-pink-800",
      },
      {
        num: "04",
        title: "Deploy, monitor & improve",
        desc: "We deploy the AI system, monitor usage, performance, conversations, errors, and costs, and continuously improve the solution as your data, users, and business requirements evolve.",
        icon: createElement(FaRocket, { className: "w-4 h-4 md:w-6 md:h-6 text-gray-800" }),
        iconBgColor: "bg-indigo-50",
        numBgColor: "bg-indigo-100",
        numTextColor: "text-indigo-800",
      },
    ],
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
    faqsItems: SKY_AI_PAGE_FAQ_DATA,
  },
  contactUs: {
    header: {
      title: [
        [{ text: "Let’s " }, { text: "Talk ", variant: "italic" }],
        [{ text: "About Your " }, { text: "Project", variant: "italic", classNames: "font-semibold" }],
      ],

      description: [
        [
          {
            text: "Have an AI idea, automation challenge, or existing product you want to enhance with AI? Share your requirements and our team will help you identify the right approach.",
          },
        ],
      ],
    },
  },
};
