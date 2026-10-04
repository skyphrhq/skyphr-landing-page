import MOBILE_APP_DEVELOPMENT_4X_IMG from "@/app/assets/webp/4x/mobile-app-development-4x.webp";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import { createElement } from "react";
import { FiLayers, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

export const MOBILE_APP_DEVELOPMENT_SERVICE_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Mobile App Development Services | iOS & Android App Development",
    description:
      "Build scalable iOS and Android apps with Skyphr. We deliver custom mobile app development, UI/UX design, API integration, and AI-powered mobile solutions.",
    openGraph: {
      title: "Mobile App Development Services | iOS & Android App Development",
      description:
        "Build scalable iOS and Android apps with Skyphr. We deliver custom mobile app development, UI/UX design, API integration, and AI-powered mobile solutions.",
      images: "/og-image/mobile-app-development.png",
      type: "website",
    },
    twitter: {
      title: "Mobile App Development Services | iOS & Android App Development",
      description:
        "Build scalable iOS and Android apps with Skyphr. We deliver custom mobile app development, UI/UX design, API integration, and AI-powered mobile solutions.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/mobile-app-development.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/services/mobile-app-development`,
    },
  },
  hero: {
    header: {
      title: [
        [{ text: "Mobile" }, { text: "App" }, { text: "Development" }],
        [
          {
            text: "Build Scalable Mobile Apps That Drive Business Growth",
            variant: "italic",
            classNames: "pt-2 lg:pt-4 flex text-2xl! xl:text-3xl!",
          },
        ],
      ],
      description: [
        [
          {
            text: "Build high-performance mobile applications with Skyphr. We design and develop scalable iOS and Android apps that deliver intuitive user experiences, reliable performance, and the flexibility to grow with your business.",
          },
        ],
        [
          {
            text: "From startup MVPs to enterprise mobile applications, our team combines product strategy, UI/UX design, modern mobile technologies, backend development, and AI integration to turn ideas into production-ready mobile products.",
          },
        ],
      ],
      heroImage: {
        imagePath: MOBILE_APP_DEVELOPMENT_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "Mobile app development services hero illustration",
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
        [{ text: "Mobile App Development", variant: "italic", classNames: "text-center" }],
      ],
      description: [
        [
          {
            text: "Skyphr develops custom mobile applications designed around your users, business workflows, and long-term product goals. Whether you need a customer-facing app, internal business application, or a complete mobile product ecosystem, we build solutions that are secure, scalable, and easy to maintain.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "iOS App Development",
        description:
          "Build native and high-performance iOS applications for iPhone and iPad with smooth interactions, scalable architecture, and platform-specific experiences.",
      },
      {
        title: "Android App Development",
        description:
          "Develop reliable Android applications that support a wide range of devices while delivering consistent performance, responsive interfaces, and scalable functionality.",
      },
      {
        title: "Cross-Platform Mobile Apps",
        description:
          "Build mobile applications for iOS and Android using modern cross-platform technologies to reduce development complexity while maintaining a consistent user experience.",
      },
      {
        title: "Custom Mobile Applications",
        description:
          "Develop custom mobile apps around your unique business processes, customer requirements, workflows, and product strategy.",
      },
      {
        title: "Business & Enterprise Mobile Apps",
        description:
          "Create mobile applications that help teams manage operations, access business information, collaborate, automate workflows, and improve productivity.",
      },
      {
        title: "Mobile SaaS Applications",
        description:
          "Extend your SaaS product to mobile with secure authentication, real-time data, dashboards, notifications, subscriptions, and connected workflows. Our SaaS Development expertise can support the broader product ecosystem.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Mobile" }, { text: "App" }, { text: "Development" }],
        [{ text: "Features", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "We build mobile applications with the features businesses need to deliver useful, reliable, and scalable digital experiences.",
          },
        ],
      ],
    },
    features: [
      "Custom UI/UX Design",
      "User Authentication",
      "API & Backend Integration",
      "Push Notifications",
      "Real-Time Features",
      "Payment Integration",
      "AI-Powered Mobile Features",
      "Analytics & Reporting",
      "Scalable Architecture",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Business" }, { text: "Benefits" }, { text: "Of" }],
        [
          { text: "Mobile", variant: "italic" },
          { text: "App", variant: "italic" },
          { text: "Development", variant: "italic" },
        ],
      ],
      description: [],
    },
    items: [
      {
        title: "Reach Customers on Mobile",
        description:
          "Deliver your products and services through mobile experiences that customers can access wherever they are.",
      },
      {
        title: "Improve Customer Engagement",
        description:
          "Use personalized experiences, notifications, real-time communication, and convenient mobile workflows to improve engagement.",
      },
      {
        title: "Streamline Business Operations",
        description:
          "Turn manual processes into efficient mobile workflows that allow employees and teams to access information and complete tasks faster.",
      },
      {
        title: "Build New Revenue Channels",
        description:
          "Create mobile products that support subscriptions, digital services, marketplaces, bookings, commerce, and other revenue models.",
      },
      {
        title: "Scale Your Product",
        description:
          "Build a flexible mobile technology foundation that can evolve as your customer base, features, integrations, and business requirements grow.",
      },
      {
        title: "Create Better User Experiences",
        description:
          "Combine thoughtful UI/UX Design with reliable engineering to create mobile experiences that are easy to understand and use.",
      },
    ],
  },
  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Mobile" }, { text: "App" }],
        [
          { text: "Development", variant: "italic" },
          { text: "Process", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our Mobile App Development Process covers strategy, UI/UX design, development, testing, deployment, and optimization to deliver scalable, high-performance mobile applications aligned with your business goals and user needs.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "01. Discovery & Strategy",
        description:
          "We understand your business goals, target users, product requirements, competitors, and technical needs to define a clear mobile product strategy.",
      },
      {
        title: "02. UX & Product Planning",
        description:
          "We structure user journeys, application flows, information architecture, and core functionality before development begins.",
      },
      {
        title: "03. UI/UX Design",
        description:
          "Our designers create intuitive interfaces and interactive prototypes that establish the visual and functional direction of the mobile application.",
      },
      {
        title: "04. Mobile App Development",
        description:
          "Our engineers develop the application using suitable mobile technologies, scalable architecture, APIs, and backend integrations.",
      },
      {
        title: "05. Testing & Optimization",
        description:
          "We test the application across relevant devices and scenarios to identify usability, performance, security, and functionality issues.",
      },
      {
        title: "06. Launch & Deployment",
        description:
          "We prepare the application for production and support deployment through the relevant app distribution platforms and infrastructure.",
      },
      {
        title: "07. Continuous Improvement",
        description:
          "After launch, we can continue improving the application with new features, integrations, performance enhancements, and product iterations.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [[{ text: "Technology" }, { text: "&" }, { text: "Expertise" }]],
      description: [
        [
          {
            text: "Skyphr uses modern technologies to build reliable mobile products based on your application requirements.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Mobile Technologies",
        technologies: [
          { name: "React Native" },
          { name: "Flutter" },
          { name: "Native iOS Development" },
          { name: "Native Android Development" },
          { name: "TypeScript" },
          { name: "JavaScript" },
        ],
      },
      {
        title: "Backend & APIs",
        technologies: [
          { name: "Node.js" },
          { name: "Python" },
          { name: "FastAPI" },
          { name: "REST APIs" },
          { name: "Third-Party API Integration" },
          { name: "Database Integration" },
        ],
      },
      {
        title: "AI & Automation",
        technologies: [
          { name: "AI API Integration" },
          { name: "AI Assistants" },
          { name: "Machine Learning Integrations" },
          { name: "Intelligent Recommendations" },
          { name: "Workflow Automation" },
          { name: "Generative AI Features" },
        ],
      },
    ],
  },
  deliveryApproach: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Mobile" }, { text: "App" }],
        [
          { text: "Delivery", variant: "italic" },
          { text: "Approach", variant: "italic" },
        ],
      ],
      description: [],
    },
    items: [
      {
        title: "Product-Focused Development",
        description: "We focus on the complete product experience rather than building isolated mobile features.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Applications are structured to support future features, integrations, users, and business growth.",
      },
      {
        title: "Performance-Driven Engineering",
        description:
          "We focus on responsive interfaces, efficient application behavior, optimized API communication, and reliable performance.",
      },
      {
        title: "Flexible Engagement",
        description:
          "Work with Skyphr for a complete mobile product or extend your existing development team with specialized mobile engineering capabilities.",
      },
      {
        title: "Continuous Communication",
        description:
          "We maintain clear communication throughout design, development, testing, and launch so product decisions remain aligned with business goals.",
      },
    ],
  },
  ourValues: {
    header: {
      title: [
        [{ text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Our" }],
        [
          { text: "Mobile", variant: "italic" },
          { text: "App", variant: "italic" },
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
          "We simplify complex requirements into intuitive mobile experiences and maintainable technical solutions.",
        icon: createElement(FiLayers, { className: "text-2xl" }),
        color: "#AC9BFF",
        bgColor: "rgba(172, 155, 255, 0.5)",
      },
      {
        id: 2,
        title: "Built for Scale",
        description:
          "We design applications with future growth, new functionality, integrations, and increasing usage in mind.",
        icon: createElement(FiTrendingUp, { className: "text-2xl" }),
        color: "#B8C56F",
        bgColor: "rgba(184, 197, 111, 0.5)",
      },
      {
        id: 3,
        title: "Performance First",
        description:
          "We prioritize application speed, responsiveness, stability, and efficient technical implementation.",
        icon: createElement(FiZap, { className: "text-2xl" }),
        color: "#FF767A",
        bgColor: "rgba(255, 118, 122, 0.5)",
      },
      {
        id: 4,
        title: "User-Centered Thinking",
        description:
          "Every feature and interaction should provide meaningful value to the people using the application.",
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
          { text: "Mobile", variant: "italic" },
          { text: "App", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Skyphr combines product thinking, design, engineering, and AI expertise to build mobile applications for modern businesses.",
          },
        ],
      ],
    },
    reasons: [
      "Custom mobile solutions aligned with business goals",
      "iOS, Android, and cross-platform development",
      "Product-focused UI/UX design",
      "Scalable backend and API development",
      "AI and automation integration",
      "Performance-focused engineering",
      "Flexible development engagement",
      "Scalable architecture for long-term growth",
      "Support from product discovery through deployment",
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
        description:
          "Mobile applications for SaaS platforms, digital products, customer portals, and technology businesses.",
      },
      {
        title: "Healthcare",
        description:
          "Patient applications, healthcare platforms, appointment systems, communication tools, and digital health products.",
      },
      {
        title: "FinTech",
        description:
          "Financial applications, payment solutions, dashboards, account management, and secure mobile experiences.",
      },
      {
        title: "E-Commerce",
        description:
          "Shopping applications, marketplaces, customer accounts, payments, order tracking, and personalized experiences.",
      },
      {
        title: "Education",
        description:
          "Learning applications, student platforms, course systems, communication tools, and educational products.",
      },
      {
        title: "Logistics & Transportation",
        description:
          "Delivery applications, tracking systems, driver applications, logistics workflows, and real-time operations.",
      },
      {
        title: "Professional Services",
        description:
          "Mobile applications for customer management, bookings, communication, business workflows, and internal operations.",
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
        question: "How much does mobile app development cost?",
        answer:
          "The cost depends on application complexity, features, design requirements, integrations, platforms, backend requirements, and development scope. Skyphr can define a suitable development approach based on your product requirements.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "Development timelines vary depending on the scope and complexity of the application. A focused MVP can generally be delivered faster than a feature-rich enterprise mobile application.",
      },
      {
        question: "Can you develop both iOS and Android apps?",
        answer:
          "Yes. Skyphr can develop applications for iOS and Android using native or cross-platform approaches depending on your product requirements.",
      },
      {
        question: "Can you redesign an existing mobile application?",
        answer:
          "Yes. We can improve an existing application's UI/UX, architecture, performance, functionality, and overall user experience.",
      },
      {
        question: "Can you integrate AI into a mobile app?",
        answer:
          "Yes. We can integrate AI assistants, intelligent search, recommendations, content generation, automation, and other AI capabilities into mobile applications.",
      },
      {
        question: "Can you connect a mobile app with an existing backend?",
        answer:
          "Yes. We can integrate mobile applications with existing APIs, databases, SaaS platforms, CRM systems, payment services, and other business systems.",
      },
      {
        question: "Do you provide UI/UX design for mobile apps?",
        answer:
          "Yes. Our UI/UX Design capabilities cover mobile user flows, wireframes, interfaces, prototypes, and design systems before development.",
      },
      {
        question: "Can you develop an MVP mobile app?",
        answer:
          "Yes. We can help define and develop an MVP focused on the core functionality required to validate your product idea and establish a foundation for future development.",
      },
      {
        question: "Can you scale an existing mobile application?",
        answer:
          "Yes. We can improve application architecture, performance, backend infrastructure, integrations, and functionality to support growing user and business requirements.",
      },
    ],
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Build Your" }, { text: "Mobile", variant: "italic" }, { text: "App" }],
        [{ text: "with" }, { text: "Skyphr", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Turn your mobile product idea into a scalable, high-performance application with Skyphr. From product strategy and UI/UX Design to mobile development, backend integration, and AI-powered features, we build mobile experiences designed for real users and long-term growth.",
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
