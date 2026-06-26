import { HIRE_REACT_JS_DEVELOPER_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { HIRE_REACT_JS_DEVELOPER_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { HIRE_REACT_JS_DEVELOPER } from "@/app/content/pageContent/service-steps.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const REACTJS_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire React.js Developers | Dedicated React JS Development Team | Skyphr",
    description:
      "Hire expert React.js developers from Skyphr to build scalable SaaS platforms, web applications, dashboards, enterprise software, and modern frontend solutions. Flexible hiring models, fast onboarding, and production-ready React development.",
    openGraph: {
      title: "Hire React.js Developers | Dedicated React JS Development Team | Skyphr",
      description:
        "Hire expert React.js developers from Skyphr to build scalable SaaS platforms, web applications, dashboards, enterprise software, and modern frontend solutions. Flexible hiring models, fast onboarding, and production-ready React development.",
      images: "/og-image/hire-react-js-developers.png",
      type: "website",
    },
    twitter: {
      title: "Hire React.js Developers | Dedicated React JS Development Team | Skyphr",
      description:
        "Hire expert React.js developers from Skyphr to build scalable SaaS platforms, web applications, dashboards, enterprise software, and modern frontend solutions. Flexible hiring models, fast onboarding, and production-ready React development.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-react-js-developers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire/hire-react-js-developers`,
    },
  },

  hero: {
    header: {
      title: [[{ text: "Hire Expert " }, { text: "React.js Developers", variant: "italic" }]],
      description: [
        [
          {
            text: "Build high-performance web applications, SaaS platforms, dashboards, and digital products with experienced React.js developers who focus on scalability, performance, and long-term product growth.",
          },
        ],
        [
          {
            text: `Whether you're launching a startup, modernizing an enterprise application, scaling a SaaS platform, or expanding your engineering team, Skyphr provides dedicated React.js developers who deliver clean architecture, reusable components, and exceptional user experiences.`,
          },
        ],
      ],
    },
    highlights: [
      "Dedicated React.js engineers for modern product development",
      "Scalable frontend architecture built for growth",
      "Performance-driven web application development",
      "Flexible hiring models for startups and enterprises",
    ],
  },
  whatWeBuild: {
    header: {
      title: [
        [{ text: "What " }, { text: "We " }, { text: "Build " }, { text: "Under" }],
        [{ text: "React.js" }, { text: "Development" }, { text: "Services" }],
      ],
      description: [
        [
          {
            text: "We help businesses design and develop scalable React.js applications that improve user engagement, accelerate product delivery, and support long-term business objectives.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "SaaS Application Development",
        description:
          "Build scalable SaaS products with modern React.js architecture, reusable components, subscription workflows, user management systems, and enterprise-grade performance.",
      },
      {
        title: "Custom Web Application Development",
        description:
          "Develop responsive and feature-rich web applications tailored to your business processes, customer requirements, and operational goals.",
      },
      {
        title: "Enterprise Frontend Development",
        description:
          "Create powerful enterprise interfaces, internal business systems, ERP platforms, and operational dashboards designed for efficiency and scalability.",
      },
      {
        title: "React Dashboard Development",
        description:
          "Develop real-time dashboards, analytics platforms, reporting systems, and data visualization applications that transform complex information into actionable insights.",
      },
      {
        title: "React eCommerce Development",
        description:
          "Build conversion-focused eCommerce storefronts with fast page loads, seamless checkout experiences, personalized customer journeys, and scalable architecture.",
      },
      {
        title: "React Migration & Modernization",
        description:
          "Modernize legacy applications by migrating outdated frontend technologies to React.js while improving performance, maintainability, and user experience.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Features" }, { text: "We" }, { text: "Can" }, { text: "Build" }, { text: "Into" }],
        [
          { text: "Your", variant: "italic" },
          { text: "React.js", variant: "italic" },
          { text: "Application", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Every business has unique workflows, customers, and growth objectives. We develop React.js solutions tailored to your operational requirements and product vision.",
          },
        ],
      ],
    },
    features: [
      "Component-based architecture",
      "Reusable UI libraries",
      "Responsive web applications",
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "Multi-tenant SaaS platforms",
      "Enterprise dashboards",
      "Admin panels",
      "Customer portals",
      "User authentication systems",
      "Role-based access control",
      "API integrations",
      "Third-party service integrations",
      "Real-time applications",
      "Data visualization dashboards",
      "Reporting systems",
      "Workflow automation interfaces",
      "CRM interfaces",
      "ERP frontends",
      "Marketplace platforms",
      "Subscription management portals",
      "Payment gateway integrations",
      "AI-powered web interfaces",
      "Mobile-responsive design",
      "State management solutions",
      "Performance optimization",
      "SEO-friendly React applications",
      "Accessibility compliance",
      "Internationalization support",
      "Analytics integrations",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Executive" }, { text: "Teams" }],
        [
          { text: "Hire", variant: "italic" },
          { text: "React.js", variant: "italic" },
          { text: "Developers", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "React.js has become one of the most trusted frontend technologies for building scalable digital products. Executive teams choose React because it accelerates development while supporting long-term product growth.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Faster Product Delivery",
        description:
          "Reusable components and efficient development workflows reduce time-to-market for new products and features.",
      },
      {
        title: "Better User Experience",
        description:
          "React enables fast, responsive, and highly interactive user experiences that increase engagement and customer satisfaction.",
      },
      {
        title: "Improved Scalability",
        description:
          "Build applications that support growing user bases, expanding feature sets, and increasing business complexity.",
      },
      {
        title: "Lower Long-Term Costs",
        description:
          "Maintainable code structures and reusable architectures reduce future development and maintenance expenses.",
      },
      {
        title: "Stronger Product Performance",
        description:
          "Optimize loading times, rendering speed, and application responsiveness to improve user retention and conversions.",
      },
      {
        title: "Future-Proof Technology Stack",
        description:
          "React is backed by a massive ecosystem, strong community support, and widespread adoption among leading technology companies.",
      },
    ],
  },

  technologyStack: {
    header: {
      title: [[{ text: "React.js" }, { text: "Technologies" }, { text: "& Expertise" }]],
      description: [
        [
          {
            text: "Our React.js developers work across modern frontend ecosystems and complementary technologies.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Frontend Technologies",
        technologies: [
          { name: "React.js" },
          { name: "Next.js" },
          { name: "TypeScript" },
          { name: "JavaScript ES6+" },
          { name: "Redux" },
          { name: "Zustand" },
          { name: "React Query" },
          { name: "Tailwind CSS" },
          { name: "Material UI" },
          { name: "Chakra UI" },
        ],
      },
      {
        title: "Backend & API Integration",
        technologies: [
          { name: "Node.js" },
          { name: "Express.js" },
          { name: "REST APIs" },
          { name: "GraphQL" },
          { name: "Firebase" },
          { name: "Supabase" },
        ],
      },
      {
        title: "Cloud & Deployment",
        technologies: [
          { name: "AWS" },
          { name: "Azure" },
          { name: "Google Cloud" },
          { name: "Vercel" },
          { name: "Netlify" },
          { name: "Docker" },
        ],
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [
        [{ text: "Easy" }, { text: "Four-Step" }, { text: "Process" }, { text: "To" }],
        [{ text: "Hire" }, { text: "React.js" }, { text: "Developers" }],
      ],
      description: [
        [
          {
            text: "We follow a streamlined engagement model that helps companies quickly onboard experienced React.js engineers and accelerate product development.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Requirement Analysis",
        description:
          "We evaluate your business goals, technical requirements, project scope, timelines, and team structure to identify the ideal React.js development resources.",
      },
      {
        title: "Developer Selection",
        description:
          "Review carefully selected React.js developers based on technical expertise, domain experience, communication skills, and project requirements.",
      },
      {
        title: "Team Integration & Development",
        description:
          "Developers integrate into your existing workflows, collaborate with stakeholders, and begin building scalable frontend solutions.",
      },
      {
        title: "Continuous Delivery & Optimization",
        description:
          "We continuously improve application performance, user experience, code quality, and development efficiency throughout the engagement.",
      },
    ],
  },

  ourApproach: {
    header: {
      title: [
        [{ text: "How " }, { text: "We" }, { text: "Build" }, { text: "&" }, { text: "Scale" }],
        [{ text: "React.js" }, { text: "Products" }],
      ],
      description: [
        [
          {
            text: "A proven framework for building scalable frontend applications that align with business objectives and user expectations.",
          },
        ],
      ],
      heroHighlightedText: {
        textOne: "From Concept",
        textTwo: "to Launch",
        description: [{ text: "Strategy. Development. Optimization." }],
      },
    },
    steps: HIRE_REACT_JS_DEVELOPER,
  },
  ourValues: {
    header: {
      title: [
        [{ text: "The" }, { text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Our" }],
        [{ text: "React" }, { text: "Development" }, { text: "Team" }],
      ],
      description: [
        [
          {
            text: "The principles behind every product we build and every engineering decision we make.",
          },
        ],
      ],
    },
    valuesCards: HIRE_REACT_JS_DEVELOPER_VALUES_CARDS,
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "As" }, { text: "Your" }],
        [
          { text: "React.js", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Partner", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choosing the right React.js development company directly impacts product quality, scalability, and speed to market.",
          },
        ],
        [
          {
            text: "At Skyphr, we partner with founders, CTOs, CIOs, product leaders, and executive teams to build modern digital products that deliver measurable business outcomes.",
          },
        ],
      ],
    },
    reasons: [
      "Experienced React.js developers",
      "Dedicated hiring models",
      "Flexible engagement options",
      "SaaS and enterprise expertise",
      "Modern development practices",
      "Agile delivery processes",
      "Scalable architecture design",
      "Global collaboration capabilities",
      "Transparent communication",
      "Long-term technology partnership",
    ],
  },

  testimonials: {
    header: {
      title: [[{ text: "Trusted by Clients " }, { text: "Worldwide", variant: "italic", classNames: "font-bold" }]],
      description: [
        [
          {
            text: "We focus on reliable execution and clear communication, so teams can move faster with confidence.",
          },
        ],
      ],
    },
    clientsFeedback: CLIENT_TESTIMONIAL_DATA,
  },
  faq: {
    header: {
      title: [[{ text: "Frequently" }], [{ text: "Asked" }, { text: "Questions", variant: "italic" }]],
      description: [],
    },
    faqsItems: HIRE_REACT_JS_DEVELOPER_FAQ_DATA,
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Ready to" }, { text: "Scale" }],
        [{ text: "Your Product" }, { text: "Team?", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Book a free 30-minute strategy call with Skyphr to discuss your product goals, technical requirements, hiring needs, and growth plans.",
          },
        ],
        [
          {
            text: `Whether you need a single React.js developer or a dedicated frontend engineering team, we'll help you build, launch, and scale faster with confidence.`,
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
