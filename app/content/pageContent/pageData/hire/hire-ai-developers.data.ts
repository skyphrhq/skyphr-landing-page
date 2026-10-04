import SAAS_APP_DEVELOPMENT_4X_IMG from "@/app/assets/webp/4x/saas-app-development-4x.webp";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";
import { createElement } from "react";
import { FiLayers, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

export const HIRE_AI_DEVELOPERS_SERVICE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire AI Developers | Expert AI Development Team | Skyphr",
    description:
      "Hire AI developers from Skyphr to build intelligent, scalable AI solutions, automation systems, AI applications, chatbots, and machine learning products.",
    openGraph: {
      title: "Hire AI Developers | Expert AI Development Team | Skyphr",
      description:
        "Hire AI developers from Skyphr to build intelligent, scalable AI solutions, automation systems, AI applications, chatbots, and machine learning products.",
      images: "/og-image/hire-ai-developers.png",
      type: "website",
    },
    twitter: {
      title: "Hire AI Developers | Expert AI Development Team | Skyphr",
      description:
        "Hire AI developers from Skyphr to build intelligent, scalable AI solutions, automation systems, AI applications, chatbots, and machine learning products.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-ai-developers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire-ai-developers`,
    },
  },
  hero: {
    header: {
      title: [[{ text: "Hire Expert AI" }], [{ text: "Developers", variant: "italic" }]],
      description: [
        [
          {
            text: "Build intelligent digital products with experienced AI developers from Skyphr. We help startups and businesses develop scalable AI solutions, automation systems, AI applications, and intelligent workflows that improve efficiency and accelerate growth.",
          },
        ],
        [
          {
            text: "Skyphr provides dedicated AI developers who combine software engineering, machine learning, automation, and AI technologies to build practical solutions for modern businesses. Whether you need an AI-powered application, intelligent automation system, custom AI integration, or enterprise AI solution, our developers can work with your existing team or take complete ownership of development.",
          },
        ],
      ],
      heroImage: {
        imagePath: SAAS_APP_DEVELOPMENT_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "Hire AI Developers hero illustration",
        className: "object-contain",
        loading: "eager",
      },
    },
    highlights: [],
    ctas: [
      {
        label: "Hire AI Developers",
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
        [{ text: "What" }, { text: "Our" }, { text: "AI" }],
        [{ text: "Developers", variant: "italic" }, { text: "Can" }, { text: "Build", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Our AI development team focuses on building secure, scalable, and production-ready systems designed around your business requirements.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "AI-Powered Applications",
        description:
          "Build intelligent applications that use AI to automate tasks, analyze information, generate content, and deliver personalized user experiences.",
      },
      {
        title: "Generative AI Solutions",
        description:
          "Develop applications powered by large language models, generative AI, retrieval-augmented generation, and custom AI workflows for real business use cases.",
      },
      {
        title: "AI Chatbots & Assistants",
        description:
          "Create intelligent AI chatbots and virtual assistants that understand user queries, provide relevant responses, and automate customer and internal support workflows.",
      },
      {
        title: "AI Automation Systems",
        description:
          "Automate repetitive business processes with AI-powered workflows that connect applications, data, APIs, and business systems.",
      },
      {
        title: "Machine Learning Solutions",
        description:
          "Develop machine learning systems for prediction, classification, recommendation, data analysis, and other business-specific use cases.",
      },
      {
        title: "AI API Integration",
        description:
          "Integrate AI models and services into existing websites, SaaS platforms, enterprise applications, and internal business systems.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "AI", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Services", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our AI developers build AI solutions with the technology, architecture, and flexibility required for long-term business use.",
          },
        ],
      ],
    },
    features: [
      "Custom AI application development",
      "Generative AI integration",
      "Large language model integration",
      "Retrieval-augmented generation (RAG)",
      "AI chatbot development",
      "AI virtual assistant development",
      "AI workflow automation",
      "Machine learning development",
      "Natural language processing",
      "AI API integration",
      "Custom AI agents",
      "Data processing and AI pipelines",
      "Scalable AI architecture",
      "Secure AI implementation",
      "AI model integration and optimization",
      "Performance-focused AI solutions",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Business" }, { text: "Benefits" }, { text: "Of" }],
        [
          { text: "Hiring", variant: "italic" },
          { text: "AI", variant: "italic" },
          { text: "Developers", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Access specialized AI expertise to automate workflows, improve efficiency, reduce operational costs, enhance customer experiences, and build scalable AI solutions aligned with your long-term business goals.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Automate Repetitive Work",
        description:
          "Use AI-powered systems to automate repetitive tasks, reduce manual effort, and improve operational efficiency.",
      },
      {
        title: "Build Faster",
        description:
          "Work with experienced AI developers who can accelerate development and help turn AI ideas into production-ready solutions.",
      },
      {
        title: "Improve Customer Experiences",
        description:
          "Deliver faster, more personalized experiences through AI chatbots, assistants, recommendations, and intelligent digital products.",
      },
      {
        title: "Reduce Operational Costs",
        description:
          "Automate workflows and repetitive processes to reduce unnecessary manual work and improve resource utilization.",
      },
      {
        title: "Scale AI Capabilities",
        description:
          "Build AI systems that can evolve with your business, users, data, and changing technology requirements.",
      },
      {
        title: "Access Specialized Expertise",
        description:
          "Get access to developers experienced in AI development, software engineering, automation, APIs, and modern AI technologies without building an in-house AI team from scratch.",
      },
    ],
  },
  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "AI" }],
        [
          { text: "Development", variant: "italic" },
          { text: "Process", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our AI development process transforms business requirements into reliable AI solutions through strategy, architecture, development, testing, deployment, and optimization, ensuring scalability, performance, security, and measurable business value.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Understand Your Requirements",
        description:
          "We start by understanding your business objectives, technical requirements, workflows, users, and AI use cases.",
      },
      {
        title: "Define the AI Solution",
        description:
          "Our team identifies the right AI approach, technologies, integrations, data requirements, and architecture for your project.",
      },
      {
        title: "Design & Architecture",
        description:
          "We create the technical architecture and user experience required to build a reliable and scalable AI solution.",
      },
      {
        title: "AI Development",
        description:
          "Our AI developers build the core functionality, integrations, AI workflows, APIs, and application components.",
      },
      {
        title: "Testing & Optimization",
        description:
          "We test the system for functionality, accuracy, performance, security, and scalability before deployment.",
      },
      {
        title: "Deployment & Support",
        description:
          "Once the solution is ready, we help deploy it and provide ongoing improvements, optimization, and technical support.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [
        [{ text: "AI" }, { text: "Technologies" }],
        [{ text: "&" }, { text: "Expertise", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Our AI development team works across modern AI and software technologies to build customized solutions for different business requirements.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "AI & Machine Learning",
        technologies: [
          { name: "Generative AI" },
          { name: "Large Language Models (LLMs)" },
          { name: "Retrieval-Augmented Generation (RAG)" },
          { name: "AI Agents" },
          { name: "Machine Learning" },
          { name: "Natural Language Processing" },
          { name: "Computer Vision" },
        ],
      },
      {
        title: "Backend & Architecture",
        technologies: [
          { name: "Python" },
          { name: "FastAPI" },
          { name: "Node.js" },
          { name: "AI APIs" },
          { name: "API and third-party integrations" },
          { name: "Database and vector database integrations" },
        ],
      },
      {
        title: "Frontend & Cloud",
        technologies: [{ name: "React.js" }, { name: "Next.js" }, { name: "Cloud AI platforms" }],
      },
    ],
  },
  deliveryApproach: {
    header: {
      title: [
        [{ text: "Our" }, { text: "AI" }, { text: "Developer" }],
        [
          { text: "Engagement", variant: "italic" },
          { text: "Models", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choose flexible engagement models based on your project needs, including dedicated AI developers, project-based development, complete AI teams, or team extensions that integrate smoothly with your existing workflows.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Dedicated AI Developers",
        description:
          "Hire dedicated AI developers who work as an extension of your internal team and focus exclusively on your project.",
      },
      {
        title: "AI Development Team",
        description:
          "Build a complete AI development team with the skills required to design, develop, integrate, and maintain your AI solution.",
      },
      {
        title: "Project-Based AI Development",
        description:
          "Work with our AI development team on a defined project with clear requirements, milestones, and delivery objectives.",
      },
      {
        title: "Team Extension",
        description:
          "Extend your existing engineering team with experienced AI developers who can contribute to your current workflows and technology stack.",
      },
    ],
  },
  ourValues: {
    header: {
      title: [
        [{ text: "Values" }, { text: "That" }, { text: "Drive" }],
        [
          { text: "Our", variant: "italic" },
          { text: "AI", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Team", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "We build AI solutions around business value, scalability, performance, and simplicity. Our team focuses on practical innovation, transparent collaboration, reliable development, and technology that delivers measurable results.",
          },
        ],
      ],
    },
    valuesCards: [
      {
        id: 1,
        title: "Business-Focused AI",
        description: "We focus on solving meaningful business problems rather than adding AI without a clear purpose.",
        icon: createElement(FiLayers, { className: "text-2xl" }),
        color: "#AC9BFF",
        bgColor: "rgba(172, 155, 255, 0.5)",
      },
      {
        id: 2,
        title: "Built for Scale",
        description: "Our AI solutions are designed with scalability, maintainability, and future growth in mind.",
        icon: createElement(FiTrendingUp, { className: "text-2xl" }),
        color: "#B8C56F",
        bgColor: "rgba(184, 197, 111, 0.5)",
      },
      {
        id: 3,
        title: "Performance First",
        description:
          "We optimize AI-powered systems for reliable performance, efficient workflows, and practical production use.",
        icon: createElement(FiZap, { className: "text-2xl" }),
        color: "#FF767A",
        bgColor: "rgba(255, 118, 122, 0.5)",
      },
      {
        id: 4,
        title: "Clarity Over Complexity",
        description:
          "We simplify complex AI technologies into solutions that are understandable, usable, and aligned with business goals.",
        icon: createElement(FiUsers, { className: "text-2xl" }),
        color: "#5DADE2",
        bgColor: "rgba(93, 173, 226, 0.5)",
      },
    ],
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Hire" }, { text: "AI" }],
        [
          { text: "Developers", variant: "italic" },
          { text: "From", variant: "italic" },
          { text: "Skyphr?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Skyphr combines AI development expertise with strong product design and software engineering capabilities. Our team can help you move from an AI concept to a scalable production-ready solution.",
          },
        ],
      ],
    },
    reasons: [
      "Experienced AI development team",
      "Custom AI solutions for business requirements",
      "Flexible engagement models",
      "Scalable and maintainable architecture",
      "Modern AI and software technologies",
      "AI automation and integration expertise",
      "Product-focused development approach",
      "Transparent communication and delivery",
      "Support for startups and growing businesses",
      "Ability to integrate with existing development teams",
    ],
  },
  industriesServe: {
    header: {
      title: [[{ text: "Industries" }, { text: "We" }, { text: "Serve", variant: "italic" }]],
      description: [
        [
          {
            text: "Our AI developers build solutions for businesses across multiple industries, including:",
          },
        ],
      ],
    },
    items: [
      { title: "SaaS & Technology", description: "AI features and models integrated directly into SaaS platforms." },
      {
        title: "Healthcare",
        description: "Intelligent AI tools to improve patient care and administrative efficiency.",
      },
      { title: "FinTech", description: "Automated analysis, risk assessment, and customer experience solutions." },
      { title: "E-commerce", description: "Personalized product recommendations and automated customer support." },
      { title: "Education", description: "Adaptive learning platforms and intelligent tutoring systems." },
      { title: "Real Estate", description: "Property insights, pricing predictions, and intelligent search." },
      { title: "Logistics", description: "Predictive supply chain management and delivery optimization." },
      { title: "Professional Services", description: "Automated document processing and client communication tools." },
      { title: "Manufacturing", description: "AI-driven predictive maintenance and operational analytics." },
      { title: "Retail", description: "Inventory forecasting and conversational commerce solutions." },
      { title: "Startups", description: "Rapid AI prototyping and scalable AI architecture for fast growth." },
      {
        title: "Enterprise Businesses",
        description: "Large-scale AI workflows, automation, and enterprise implementations.",
      },
    ],
  },
  faq: {
    header: {
      title: [[{ text: "Frequently" }, { text: "Asked" }, { text: "Questions" }]],
      description: [
        [
          {
            text: "Find clear answers about hiring AI developers, engagement models, AI technologies, development capabilities, integrations, project requirements, timelines, and how Skyphr can support your AI development goals.",
          },
        ],
      ],
    },
    faqsItems: [
      {
        question: "Why should I hire AI developers instead of building an in-house AI team?",
        answer:
          "Hiring AI developers can provide access to specialized expertise without the time and overhead required to recruit, build, and manage a complete AI development team internally.",
      },
      {
        question: "What type of AI developers can I hire?",
        answer:
          "You can hire AI developers with expertise in generative AI, machine learning, LLMs, AI automation, NLP, AI integrations, Python, APIs, and AI-powered application development.",
      },
      {
        question: "Can your AI developers work with our existing development team?",
        answer:
          "Yes. Our AI developers can work as an extension of your existing engineering or product team and collaborate with your internal developers, designers, and technical leadership.",
      },
      {
        question: "Can I hire dedicated AI developers?",
        answer:
          "Yes. You can hire dedicated AI developers who work specifically on your project and integrate into your existing development workflow.",
      },
      {
        question: "Can you build custom AI applications?",
        answer:
          "Yes. Our AI developers can build custom AI applications based on your business requirements, including AI assistants, intelligent automation systems, generative AI applications, and AI-powered SaaS products.",
      },
      {
        question: "Can you integrate AI into an existing application?",
        answer:
          "Yes. We can integrate AI models, APIs, chatbots, assistants, automation workflows, and other AI capabilities into existing websites, SaaS platforms, and business applications.",
      },
      {
        question: "Do you provide AI chatbot development?",
        answer:
          "Yes. Our team develops AI chatbots and assistants designed for customer support, internal operations, knowledge management, lead qualification, and other business workflows.",
      },
      {
        question: "Can you develop AI automation systems?",
        answer:
          "Yes. We develop AI-powered automation systems that connect business processes, applications, APIs, and data to reduce repetitive manual work.",
      },
      {
        question: "How do I hire AI developers from Skyphr?",
        answer:
          "Share your project requirements, business goals, preferred engagement model, and technical requirements with our team. We will help determine the right AI development approach and team structure for your project.",
      },
    ],
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Build Your" }, { text: "AI", variant: "italic" }, { text: "Solution", variant: "italic" }],
        [{ text: "With" }, { text: "Expert", variant: "italic" }, { text: "Developers", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Hire AI developers from Skyphr to transform your AI ideas into reliable, scalable, and business-focused digital solutions. From generative AI and intelligent automation to custom AI applications and AI integrations, our team can help you build and scale with confidence.",
          },
        ],
      ],
    },
    ctas: [
      {
        label: "Hire AI Developers",
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
