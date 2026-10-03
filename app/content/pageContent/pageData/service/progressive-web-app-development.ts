import PROGRESSIVE_WEB_APP_DEVELOPMENT_4X_IMG from "@/app/assets/webp/4x/progressive-web-app-development-4x.webp";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import { createElement } from "react";
import { FiLayers, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

export const PROGRESSIVE_WEB_APP_DEVELOPMENT_SERVICE_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Progressive Web App Development Services | Skyphr",
    description:
      "Build fast, secure, and scalable Progressive Web Apps with Skyphr. Deliver app-like experiences across devices with reliable performance, offline access, and modern web technology.",
    openGraph: {
      title: "Progressive Web App Development Services | Skyphr",
      description:
        "Build fast, secure, and scalable Progressive Web Apps with Skyphr. Deliver app-like experiences across devices with reliable performance, offline access, and modern web technology.",
      images: "/og-image/progressive-web-app-development.png",
      type: "website",
    },
    twitter: {
      title: "Progressive Web App Development Services | Skyphr",
      description:
        "Build fast, secure, and scalable Progressive Web Apps with Skyphr. Deliver app-like experiences across devices with reliable performance, offline access, and modern web technology.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/progressive-web-app-development.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/services/progressive-web-app-development`,
    },
  },
  hero: {
    header: {
      title: [[{ text: "Build Fast, Scalable Progressive Web Apps" }]],
      description: [
        [
          {
            text: "Create powerful web experiences that work like native apps. Skyphr builds Progressive Web Apps (PWAs) with fast performance, responsive interfaces, offline capabilities and scalable architectures that help businesses reach users across devices.",
          },
        ],
      ],
      heroImage: {
        imagePath: PROGRESSIVE_WEB_APP_DEVELOPMENT_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "Progressive Web App Development services hero illustration",
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
        [{ text: "Progressive Web App", variant: "italic", classNames: "text-center" }],
      ],
      description: [
        [
          {
            text: "We build Progressive Web Apps that combine the accessibility of the web with the experience of native applications. From customer-facing platforms to business applications, our PWA development services help companies deliver reliable digital experiences without requiring users to install traditional apps.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Custom Progressive Web App Development",
        description:
          "Build tailored PWAs around your business workflows, customer needs, and product requirements with scalable architecture and modern web technologies.",
      },
      {
        title: "PWA UI/UX Development",
        description:
          "Design intuitive, responsive interfaces that provide consistent experiences across desktops, tablets, and mobile devices.",
      },
      {
        title: "PWA Migration & Modernization",
        description:
          "Transform existing websites and web applications into faster, installable Progressive Web Apps with improved performance and accessibility.",
      },
      {
        title: "Offline-First Web Applications",
        description:
          "Enable users to continue accessing important features and content even when network connectivity is limited or unavailable.",
      },
      {
        title: "PWA API & Backend Integration",
        description:
          "Connect your Progressive Web App with APIs, databases, authentication systems, payment platforms, CRMs, and other business tools.",
      },
      {
        title: "Enterprise PWA Development",
        description:
          "Develop secure, scalable Progressive Web Apps for internal operations, customer portals, enterprise workflows, and large-scale digital platforms.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [[{ text: "Features We Build" }], [{ text: "Into Progressive Web Apps", variant: "italic" }]],
      description: [
        [
          {
            text: "Our Progressive Web Application development solutions are designed around performance, usability, reliability, and long-term scalability.",
          },
        ],
      ],
    },
    features: [
      "Responsive and mobile-first interfaces",
      "Installable web applications",
      "Offline functionality",
      "Service worker integration",
      "Fast loading and optimized performance",
      "Push notifications",
      "Secure authentication",
      "API and third-party integrations",
      "Background synchronization",
      "App-like navigation and interactions",
      "Scalable frontend architecture",
      "Cross-device compatibility",
      "SEO-friendly web architecture",
      "Analytics and performance monitoring",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Business" }, { text: "Benefits" }, { text: "Of" }],
        [{ text: "Progressive Web Apps", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Progressive Web Apps can help businesses deliver better digital experiences while reducing the complexity associated with maintaining separate web and mobile platforms.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Reach Users Across Devices",
        description:
          "PWAs work through modern web browsers and can provide consistent experiences across smartphones, tablets, and desktops.",
      },
      {
        title: "Improve Performance",
        description:
          "Optimized assets, caching, and service workers help create fast-loading experiences designed around real-world connectivity conditions.",
      },
      {
        title: "Increase User Engagement",
        description:
          "Installable experiences, push notifications, and app-like interactions can create stronger engagement with returning users.",
      },
      {
        title: "Reduce Development Complexity",
        description:
          "A PWA can provide a single web-based application experience instead of requiring completely separate implementations for every platform.",
      },
      {
        title: "Support Unreliable Connectivity",
        description:
          "Offline and background capabilities allow selected application features to remain available when users have limited connectivity.",
      },
      {
        title: "Build for Long-Term Growth",
        description:
          "Scalable architectures make it easier to introduce new functionality, integrate business systems, and support increasing user demand.",
      },
    ],
  },
  developmentProcess: {
    header: {
      title: [[{ text: "Our Progressive" }, { text: "Web App" }], [{ text: "Development Process", variant: "italic" }]],
      description: [
        [
          {
            text: "We follow a structured development process to turn product requirements into reliable, scalable Progressive Web Apps.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "01. Discovery & Requirements",
        description:
          "We understand your business objectives, users, workflows, technical requirements, and PWA opportunities.",
      },
      {
        title: "02. UX Strategy & Interface Design",
        description:
          "We plan user flows and create responsive interfaces focused on usability, accessibility, and consistent cross-device experiences.",
      },
      {
        title: "03. Architecture & Technology Planning",
        description:
          "We define the frontend architecture, APIs, data requirements, caching strategy, integrations, security requirements, and scalability approach.",
      },
      {
        title: "04. PWA Development",
        description:
          "Our developers build the application, implement service workers and PWA capabilities, and integrate required backend services and APIs.",
      },
      {
        title: "05. Testing & Optimization",
        description:
          "We test functionality, responsiveness, browser compatibility, performance, accessibility, security, and offline behavior.",
      },
      {
        title: "06. Deployment & Support",
        description:
          "We deploy the application and provide ongoing improvements, maintenance, optimization, and technical support as your product evolves.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [[{ text: "Technology" }, { text: "&" }, { text: "Expertise" }]],
      description: [
        [
          {
            text: "We use modern web technologies and development practices to build high-performance Progressive Web Apps.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Frontend & UI Development",
        technologies: [
          { name: "React.js" },
          { name: "Next.js" },
          { name: "TypeScript" },
          { name: "JavaScript" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" },
          { name: "Component-Based Architecture" },
          { name: "Tailwind CSS" },
          { name: "Modern UI Systems" },
        ],
      },
      {
        title: "PWA Technologies",
        technologies: [
          { name: "Service Workers" },
          { name: "Web App Manifest" },
          { name: "Cache API" },
          { name: "Background Sync" },
          { name: "Push Notifications" },
        ],
      },
      {
        title: "Backend, Databases & Cloud",
        technologies: [
          { name: "Node.js" },
          { name: "Python" },
          { name: "FastAPI" },
          { name: "REST APIs" },
          { name: "Third-Party APIs" },
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "MongoDB" },
          { name: "Cloud Infrastructure" },
          { name: "CI/CD" },
          { name: "Performance Monitoring" },
          { name: "Scalable Deployment" },
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
            text: "We focus on building PWAs that are reliable today and ready to evolve as your business grows.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Performance First",
        description:
          "We optimize application assets, rendering, caching, and network requests to create fast and responsive experiences.",
      },
      {
        title: "Scalable Architecture",
        description:
          "We structure applications around maintainable components, reusable systems, and scalable backend integrations.",
      },
      {
        title: "User-Centered Experiences",
        description:
          "Every interaction is designed around clear navigation, responsive layouts, accessibility, and real user needs.",
      },
      {
        title: "Security by Design",
        description:
          "We consider authentication, authorization, secure API communication, data protection, and application security throughout development.",
      },
      {
        title: "Continuous Optimization",
        description:
          "After launch, we can monitor performance and improve the application as user behavior, requirements, and business priorities evolve.",
      },
    ],
  },
  ourValues: {
    header: {
      title: [
        [{ text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Our" }],
        [
          { text: "PWA", variant: "italic" },
          { text: "Development", variant: "italic" },
        ],
      ],
      description: [],
    },
    valuesCards: [
      {
        id: 1,
        title: "Clarity Over Complexity",
        description:
          "We simplify technical and product complexity into intuitive experiences, maintainable systems, and clear user journeys.",
        icon: createElement(FiLayers, { className: "text-2xl" }),
        color: "#AC9BFF",
        bgColor: "rgba(172, 155, 255, 0.5)",
      },
      {
        id: 2,
        title: "Built for Scale",
        description:
          "We create architectures that can evolve with your users, features, integrations, and business requirements.",
        icon: createElement(FiTrendingUp, { className: "text-2xl" }),
        color: "#B8C56F",
        bgColor: "rgba(184, 197, 111, 0.5)",
      },
      {
        id: 3,
        title: "Performance First",
        description:
          "We prioritize speed, responsiveness, efficient resource usage, and reliable experiences across different devices and network conditions.",
        icon: createElement(FiZap, { className: "text-2xl" }),
        color: "#FF767A",
        bgColor: "rgba(255, 118, 122, 0.5)",
      },
      {
        id: 4,
        title: "Quality by Design",
        description:
          "From interface details to application architecture, we focus on building dependable digital products that support long-term growth.",
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
          { text: "Progressive Web App", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Skyphr combines product design, software engineering, and AI expertise to help businesses build scalable digital products.",
          },
        ],
      ],
    },
    reasons: [
      "Experienced product design and engineering team",
      "Custom Progressive Web App development",
      "Performance-focused development approach",
      "Responsive and cross-device experiences",
      "Scalable frontend and backend architecture",
      "API and third-party system integrations",
      "Modern JavaScript and TypeScript development",
      "Flexible engagement models",
      "Focus on maintainability and long-term growth",
      "End-to-end design, development, and support",
    ],
  },
  industriesServe: {
    header: {
      title: [[{ text: "Industries" }, { text: "We" }, { text: "Serve", variant: "italic" }]],
      description: [],
    },
    items: [
      {
        title: "SaaS & Technology",
        description: "Customer platforms, SaaS products, dashboards, and scalable web applications.",
      },
      {
        title: "E-commerce",
        description: "Fast shopping experiences, product catalogs, customer accounts, and progressive web storefronts.",
      },
      {
        title: "Healthcare",
        description: "Patient portals, appointment platforms, healthcare workflows, and secure digital experiences.",
      },
      {
        title: "Finance & FinTech",
        description: "Financial dashboards, customer portals, transaction interfaces, and business applications.",
      },
      {
        title: "Education",
        description: "Learning platforms, student portals, course applications, and interactive educational products.",
      },
      {
        title: "Retail & Consumer",
        description: "Customer-facing applications, loyalty platforms, catalogs, and engagement experiences.",
      },
      {
        title: "Logistics & Operations",
        description: "Business dashboards, workflow applications, tracking systems, and operational tools.",
      },
    ],
  },
  faq: {
    header: {
      title: [[{ text: "Frequently Asked Questions" }]],
      description: [],
    },
    faqsItems: [
      {
        question: "What is Progressive Web App development?",
        answer:
          "Progressive Web App development involves building web applications that use modern browser capabilities to provide app-like experiences, including features such as installation, offline functionality, caching, and push notifications.",
      },
      {
        question: "What is the difference between a PWA and a traditional web application?",
        answer:
          "A traditional web application primarily provides browser-based functionality, while a PWA can use capabilities such as service workers, installation, offline access, and push notifications to deliver a more app-like experience.",
      },
      {
        question: "Can you convert an existing website into a PWA?",
        answer:
          "Yes. We can evaluate an existing website or web application and implement appropriate PWA capabilities, performance improvements, responsive experiences, caching, and offline functionality.",
      },
      {
        question: "Can PWAs work offline?",
        answer:
          "Yes. PWAs can support offline or limited-connectivity experiences by using service workers and caching strategies. The exact offline functionality depends on the application's requirements.",
      },
      {
        question: "Can a PWA be installed on a device?",
        answer:
          "Yes. Compatible Progressive Web Apps can be installed on supported devices and launched similarly to an application.",
      },
      {
        question: "Are Progressive Web Apps SEO-friendly?",
        answer:
          "PWAs can be built using web technologies and architectures that support search engine discoverability. SEO performance depends on factors such as rendering, content architecture, technical SEO, performance, and implementation.",
      },
      {
        question: "Can you integrate APIs and third-party services into a PWA?",
        answer:
          "Yes. We can integrate REST APIs, authentication systems, payment providers, CRMs, databases, analytics platforms, and other third-party services based on project requirements.",
      },
      {
        question: "How much does Progressive Web App development cost?",
        answer:
          "The cost depends on the application's complexity, features, integrations, design requirements, backend architecture, and development scope. We can define the appropriate development approach after reviewing your requirements.",
      },
      {
        question: "How long does it take to build a Progressive Web App?",
        answer:
          "Development timelines vary depending on the product scope, number of features, integrations, design complexity, and technical requirements. A defined project scope allows us to provide a more accurate timeline.",
      },
      {
        question: "Can you maintain and scale a Progressive Web App after launch?",
        answer:
          "Yes. We can provide ongoing maintenance, performance optimization, feature development, integrations, security updates, and scalability support as your application grows.",
      },
    ],
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Build Your" }, { text: "Progressive Web App", variant: "italic" }],
        [{ text: "With" }, { text: "Skyphr", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Turn your web product into a fast, reliable, and scalable app-like experience. Skyphr helps startups and businesses design, develop, modernize, and scale Progressive Web Apps built for real users and long-term growth.",
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
