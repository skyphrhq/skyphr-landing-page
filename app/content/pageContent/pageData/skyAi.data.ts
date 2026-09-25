import SkyAiDemoVsProductionFailure from "@/app/assets/webp/sky-ai/skyai-demo-vs-production-failure.webp";
import SkyAiMessyDataNotReady from "@/app/assets/webp/sky-ai/skyai-messy-data-not-ready.webp";
import SkyAiRisingAiApiCosts from "@/app/assets/webp/sky-ai/skyai-rising-ai-api-costs.webp";
import SkyAiSkyVoiceAgentCall from "@/app/assets/webp/sky-ai/skyai-sky-voice-agent-call.webp";
import SparkleIcon from "@/app/components/common/sparkleIcon";
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
  HiOutlineUserGroup,
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
      images: "/og-image/ai-development-services.png",
      type: "website",
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/ai-development-services.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/sky-ai`,
    },
    // Keep SkyAI out of search results until the page is complete
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  },
  subNav: [
    {
      label: "AI Agents & Automation",
      href: "#ai-agents-automation",
      icon: createElement(HiCpuChip),
      trailingIcon: "chevron",
    },
    {
      label: "LLM Integration & RAG",
      href: "#llm-integration-rag",
      icon: createElement(HiCircleStack),
      trailingIcon: "chevron",
    },
    {
      label: "AI Chatbots & Assistants",
      href: "#ai-chatbots-assistants",
      icon: createElement(HiChatBubbleOvalLeftEllipsis),
      trailingIcon: "chevron",
    },
    {
      label: "AI Strategy & Consulting",
      href: "#ai-strategy-consulting",
      icon: createElement(HiLightBulb),
      trailingIcon: "chevron",
    },
    {
      label: "Hire AI Developers",
      href: "/hire",
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
      title: [[{ text: "SkyAI The AI Engineering Division of Skyphr" }]],
      description: [
        [
          { text: "AI agents, LLM integrations, and workflow automations ", classNames: "sm:block" },
          { text: "built to run reliably in production, not just in a demo.", classNames: "sm:block" },
        ],
      ],
    },
    ctas: [
      {
        label: "Book a Free AI Consultation",
        href: "/contact",
        variant: "CTA_PRIMARY",
        classNames: "bg-(--root-black-color) ring-(--root-black-color) min-w-0 pl-6 pr-13.5",
      },
    ],
    exploreLink: {
      label: "Explore SkyAI Services",
      href: "#skyai-services",
    },
    tags: [
      { label: "AI Agents", icon: createElement(HiSparkles) },
      { label: "LLM Integration", icon: createElement(HiDocumentText) },
      { label: "RAG Assistants", icon: createElement(HiCircleStack) },
      { label: "Workflow Automation", icon: createElement(HiBolt) },
      { label: "AI Chatbots", icon: createElement(HiChatBubbleOvalLeftEllipsis) },
    ],
  },
  techStrip: {
    label: ["Built with the tools", "behind modern AI"],
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
      title: [[{ text: "AI that does real work" }], [{ text: "inside your business" }]],
      description: [
        [
          { text: "From autonomous agents to assistants trained on your own data, ", classNames: "md:block" },
          { text: "we build AI systems that plug into the tools you already use.", classNames: "md:block" },
        ],
      ],
    },
    cards: [
      {
        id: "ai-agents-automation",
        title: "AI Agents",
        description:
          "Autonomous agents that take multi-step actions across your tools: research, qualify, update, and follow up without constant supervision.",
        icon: createElement(HiCpuChip),
        points: ["Lead qualification and outreach", "Research and report generation", "Back-office task automation"],
        link: { label: "Discuss your use case", href: "/contact" },
      },
      {
        id: "llm-integration-rag",
        title: "LLM Integration",
        description:
          "Add GPT, Claude, or open-source models to your product, with the guardrails and cost controls production needs.",
        icon: createElement(HiDocumentText),
        points: ["AI features inside SaaS", "Summarization and content generation", "Smart search and classification"],
        link: { label: "Discuss your use case", href: "/contact" },
      },
      {
        id: "rag-assistants",
        title: "RAG Assistants",
        description: "Assistants that answer from your own documents and data, and show their sources.",
        icon: createElement(HiCircleStack),
        points: ["Internal knowledge base", "Product documentation Q&A", "SOP and policy assistant"],
        link: { label: "Discuss your use case", href: "/contact" },
      },
      {
        id: "workflow-automation",
        title: "Workflow Automation",
        description: "Let AI handle the steps between your apps, from a new form submission to an updated CRM.",
        icon: createElement(HiBolt),
        points: ["Lead routing and CRM updates", "Document and invoice processing", "Email triage and draft replies"],
        link: { label: "Discuss your use case", href: "/contact" },
      },
      {
        id: "ai-chatbots-assistants",
        title: "AI Chatbots",
        description: "Chatbots that answer questions, capture leads, and hand off to your team when needed.",
        icon: createElement(HiChatBubbleOvalLeftEllipsis),
        points: ["24/7 customer support", "Lead capture and booking", "Human handoff for complex queries"],
        link: { label: "Discuss your use case", href: "/contact" },
      },
    ],
    ctaCard: {
      title: "Not sure which one fits?",
      description: "Tell us what you want to automate, and we'll suggest the right AI approach. Free, no commitment.",
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
        [{ text: "Why most AI projects " }, { text: "never", classNames: "text-(--cta-button-background)" }],
        [{ text: "make it", classNames: "text-(--cta-button-background)" }, { text: " to production" }],
      ],
      description: [[{ text: "Teams rarely fail because of the model. They fail at everything around it." }]],
    },
    cards: [
      {
        title: "The demo worked. Production didn't.",
        description: "Prototypes impress in meetings, then break with real users and real data.",
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
        description: "Scattered files, messy sheets, and no clean source of truth.",
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
        description: "No model strategy, no limits. The monthly bill surprised everyone.",
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
        "We clean up the data, control the costs, and ship AI that holds up in production, not just in a demo.",
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
        [{ text: "We don't just build AI for clients." }],
        [{ text: "We run it ourselves.", classNames: "text-(--skyai-periwinkle-light)" }],
      ],
      description: [[{ text: "Real AI products we designed, built and use every day at Skyphr." }]],
    },
    skyCard: {
      status: "In-house pilot · Beta",
      title: "Sky, our AI voice agent",
      description:
        "Built in-house by Skyphr. Sky answers real phone calls, talks naturally in the caller's language, and books real consultations on our calendar.",
      stats: [
        { value: "24/7", label: "Every call answered" },
        { value: "Multilingual", label: "Switches mid-call" },
        { value: "Real bookings", label: "Via Cal.com" },
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
      demo: {
        label: "Watch Sky in action",
        modalTitle: "Sky in action",
        // TODO: replace with the real Sky demo video URL (mp4/webm)
        videoUrl: "https://example.com/sky-demo.mp4",
      },
      liveCall: {
        label: "Try a live call",
        modalTitle: "Call Sky now",
        // TODO: replace with Sky's real phone number (both the display and the E.164 value)
        displayNumber: "+91 00000 00000",
        phoneNumber: "+910000000000",
        note: "Sky is in beta. Calls are answered 24/7.",
      },
    },
    lensCard: {
      status: "Live",
      title: "SkyLens, AI website audit",
      description: "Paste any URL and get an AI-powered audit of performance, SEO and UX, with prioritized fixes.",
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
      description: "Tell us the process that eats your team's time. We'll show you how AI can run it.",
      cta: {
        label: "Book a Free AI Consultation",
        href: "https://cal.com/skyphr/30min",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
  },
  buildProcess: {
    id: "skyai-process",
    badge: "Our process",
    header: {
      title: [[{ text: "From first call to" }], [{ text: "AI in production", classNames: "text-(--cta-button-background)" }]],
      description: [
        [
          {
            text: "A clear, four-step process that gets a working prototype in front of you in weeks, not months, and a system you can rely on after launch.",
          },
        ],
      ],
    },
    deliverablesLabel: "What you get",
    steps: [
      {
        title: "Discovery & use-case mapping",
        description: "We map your processes, data and tools, then pick the one use case with the clearest return.",
        deliverables: ["Use cases ranked by impact", "Data and systems review", "Success metrics and cost estimate"],
      },
      {
        title: "Proof of concept",
        description: "We build a working version on your real data, so you see results before committing to a full build.",
        deliverables: ["Working prototype on your data", "Accuracy and cost benchmarks", "Clear go or no-go call"],
      },
      {
        title: "Production build & integration",
        description: "We turn the prototype into a reliable system and connect it to your CRM, apps and workflows.",
        deliverables: ["Integrations with your tools", "Guardrails and human handoff", "Security and access controls"],
      },
      {
        title: "Deploy, monitor & improve",
        description: "We launch, track every conversation and cost, and keep improving as real usage grows.",
        deliverables: ["Monitoring and full transcripts", "Cost and usage limits", "Monthly improvement cycles"],
      },
    ],
    principles: {
      label: "In every step",
      items: [
        { label: "You own the code and data", icon: createElement(HiOutlineCircleStack) },
        { label: "Weekly demos, no black box", icon: createElement(SparkleIcon) },
        { label: "Engineers on every call", icon: createElement(HiOutlineUserGroup) },
      ],
    },
  },
  security: {
    id: "skyai-security",
    badge: { label: "Security & responsible AI", icon: createElement(LuShieldCheck) },
    header: {
      title: [[{ text: "AI you can trust" }], [{ text: "with your business", classNames: "text-(--cta-button-background)" }]],
      description: [
        [
          {
            text: "Every system we build follows the same rules: your data stays yours, answers come from facts you approve, and a real person is always one step away.",
          },
        ],
      ],
    },
    cards: [
      {
        icon: createElement(LuLockKeyhole),
        title: "Your data stays yours",
        description: "Your data is used to run your AI system, and nothing else.",
        list: {
          title: "What this means:",
          items: [
            "Never used to train AI models",
            "Access limited to what the system needs",
            "Deployment on your own cloud if needed",
            "You own the code and the data",
          ],
        },
      },
      {
        icon: createElement(LuFileCheck),
        title: "Answers you can rely on",
        description: "Your AI answers from information you approve, and says so when it doesn't know.",
        list: {
          title: "What this means:",
          items: [
            "Answers only from approved information",
            "No made-up prices, policies or promises",
            "Clear fallback when it isn't sure",
          ],
        },
      },
      {
        icon: createElement(LuUserCheck),
        title: "Humans stay in control",
        description: "Sensitive or complex cases always reach a real person.",
        list: {
          title: "What this means:",
          items: [
            "Human handoff for sensitive cases",
            "Approval steps before critical actions",
            "Easy to pause or update anytime",
          ],
        },
      },
      {
        icon: createElement(LuEye),
        title: "Full visibility, no black box",
        description: "See every conversation and every rupee your AI spends.",
        list: {
          title: "What this means:",
          items: [
            "Full call and chat transcripts",
            "Cost and usage limits",
            "Alerts before budgets are hit",
            "Usage dashboards",
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
          { text: "AI", classNames: "text-(--cta-button-background)" },
          { text: "in", classNames: "text-(--cta-button-background)" },
          { text: "production", classNames: "text-(--cta-button-background)" },
        ],
      ],
      description: [
        [
          {
            text: "A clear, four-step process that gets a working prototype in front of you in weeks, not months, and a system you can rely on after launch.",
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
        desc: "We map your processes, data and tools, then pick the one use case with the clearest return.",
        icon: createElement(FaRegCompass, { className: "w-4 h-4 md:w-6 md:h-6 text-gray-800" }),
        iconBgColor: "bg-purple-50",
        numBgColor: "bg-purple-100",
        numTextColor: "text-purple-800",
      },
      {
        num: "02",
        title: "Proof of concept",
        desc: "We build a working version on your real data, so you see results before committing to a full build.",
        icon: createElement(FaRegLightbulb, { className: "w-4 h-4 md:w-6 md:h-6 text-gray-800" }),
        iconBgColor: "bg-yellow-50",
        numBgColor: "bg-yellow-100",
        numTextColor: "text-yellow-800",
      },
      {
        num: "03",
        title: "Production build & integration",
        desc: "We turn the prototype into a reliable system and connect it to your CRM, apps and workflows.",
        icon: createElement(FaCode, { className: "w-4 h-4 md:w-6 md:h-6 text-gray-800" }),
        iconBgColor: "bg-pink-50",
        numBgColor: "bg-pink-100",
        numTextColor: "text-pink-800",
      },
      {
        num: "04",
        title: "Deploy, monitor & improve",
        desc: "We launch, track every conversation and cost, and keep improving as real usage grows.",
        icon: createElement(FaRocket, { className: "w-4 h-4 md:w-6 md:h-6 text-gray-800" }),
        iconBgColor: "bg-indigo-50",
        numBgColor: "bg-indigo-100",
        numTextColor: "text-indigo-800",
      },
    ],
  },
};
