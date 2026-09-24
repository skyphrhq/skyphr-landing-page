import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { SkyAiPageDataInterface } from "@/app/utils/interface/data.interface";
import { createElement } from "react";
import {
  HiBolt,
  HiChatBubbleOvalLeftEllipsis,
  HiCircleStack,
  HiCpuChip,
  HiDocumentText,
  HiLightBulb,
  HiSparkles,
  HiUserGroup,
} from "react-icons/hi2";
import { FaAws } from "react-icons/fa6";
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
        description:
          "Let AI handle the steps between your apps, from a new form submission to an updated CRM.",
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
      description:
        "Tell us what you want to automate, and we'll suggest the right AI approach. Free, no commitment.",
      cta: {
        label: "Book a Free AI Consultation",
        href: "https://cal.com/skyphr/30min",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
  },
};
