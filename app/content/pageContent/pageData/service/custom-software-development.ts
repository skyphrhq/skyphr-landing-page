import CUSTOM_SOFTWARE_DEVELOPMENT_4X_IMG from "@/app/assets/webp/4x/custom-software-development-4x.webp";
import { CUSTOM_SOFTWARE_SERVICE_VALUES_CARD_DATA } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CUSTOM_SOFTWARE_SERVICE_STEPS_WE_FOLLOW } from "@/app/content/pageContent/service-steps.data";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_PAGE_DATA: CommonPageDataInterface = {
  hero: {
    header: {
      title: [
        [{ text: "Custom" }, { text: "Software" }, { text: "Development" }, { text: "Services" }],
        [
          {
            text: "Build Software Designed Around Your Business",
            variant: "italic",
            classNames: "pt-2 lg:pt-4 flex text-2xl! xl:text-3xl!",
          },
        ],
      ],
      description: [
        [
          {
            text: "Transform complex business processes into scalable digital solutions with Skyphr. We provide custom software development services that help startups, enterprises, and growing organizations improve operational efficiency, automate workflows, reduce manual work, and accelerate digital transformation.",
          },
        ],
        [
          {
            text: "Unlike off-the-shelf software, custom-built solutions are designed specifically around your business requirements, workflows, users, and growth goals. Whether you need an internal business platform, enterprise software, customer-facing application, workflow automation system, or industry-specific solution, we build software that delivers measurable business value and long-term scalability.",
          },
        ],
      ],
      heroImage: {
        imagePath: CUSTOM_SOFTWARE_DEVELOPMENT_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "UI/UX Design and Automation Services",
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
        [{ text: "Custom Software Development", variant: "italic", classNames: "text-center" }],
      ],
      description: [
        [
          {
            text: "From enterprise applications to business process automation platforms, we build secure, scalable, and high-performance software tailored to your organization's unique needs.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Enterprise Software Solutions",
        description:
          "Custom enterprise applications that streamline operations, improve productivity, and support business growth across departments and teams.",
      },
      {
        title: "Internal Business Applications",
        description:
          "Custom-built software for managing workflows, operations, reporting, employee processes, approvals, and organizational efficiency.",
      },
      {
        title: "CRM & ERP Development",
        description:
          "Tailored CRM, ERP, inventory management, resource planning, and business management systems designed around your operations.",
      },
      {
        title: "Workflow Automation Systems",
        description:
          "Automate repetitive tasks, approvals, document processing, notifications, reporting, and operational workflows to increase efficiency.",
      },
      {
        title: "Industry-Specific Software",
        description:
          "Custom healthcare, finance, manufacturing, logistics, education, real estate, and professional services software solutions.",
      },
      {
        title: "System Integrations & APIs",
        description:
          "Connect your software ecosystem with third-party platforms, cloud services, payment systems, CRMs, ERPs, AI tools, and enterprise applications.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Features" }, { text: "We" }, { text: "Can" }, { text: "Build" }, { text: "Into" }],
        [
          { text: "Your", variant: "italic" },
          { text: "Custom", variant: "italic" },
          { text: "Software", variant: "italic" },
          { text: "Solution", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Every business operates differently. We design and develop software with the features, workflows, and integrations that support your specific goals and operational requirements.",
          },
        ],
      ],
    },
    features: [
      "Secure user authentication",
      "Role-based permissions",
      "Enterprise admin panels",
      "Workflow automation",
      "CRM functionality",
      "ERP modules",
      "Project management tools",
      "Reporting dashboards",
      "Analytics and business intelligence",
      "API development",
      "Third-party integrations",
      "Document management",
      "File storage and sharing",
      "Customer portals",
      "Employee portals",
      "Approval workflows",
      "Real-time notifications",
      "AI-powered automation",
      "Data migration services",
      "Cloud infrastructure",
      "Multi-location support",
      "Mobile responsiveness",
      "Audit logs and compliance tracking",
      "Performance monitoring",
      "Enterprise-grade security",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Businesses" }, { text: "Invest" }, { text: "In" }],
        [
          { text: "Custom", variant: "italic" },
          { text: "Software", variant: "italic" },
          { text: "Development", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Artificial intelligence is no longer an experimental technology. It has become a strategic business advantage for organizations seeking operational efficiency, faster decision-making, and sustainable growth.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Improve Operational Efficiency",
        description: "Eliminate manual processes and streamline workflows through automation and centralized systems.",
      },
      {
        title: "Scale Without Limitations",
        description:
          "Build software that grows alongside your business, users, departments, and operational complexity.",
      },
      {
        title: "Strengthen Security & Compliance",
        description:
          "Implement enterprise-grade security standards, access controls, compliance requirements, and data protection measures.",
      },
      {
        title: "Reduce Long-Term Costs",
        description:
          "Avoid recurring licensing limitations and expensive workarounds associated with multiple disconnected software tools.",
      },
      {
        title: "Gain Competitive Advantage",
        description:
          "Create unique capabilities and customer experiences that competitors cannot replicate with standard software platforms.",
      },
      {
        title: "Better Business Insights",
        description:
          "Access real-time reporting, analytics, and operational data to support faster and more informed decision-making.",
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [
        [
          { text: "Our" },
          { text: "Strategic" },
          { text: "Custom" },
          { text: "Software" },
          { text: "Development", variant: "italic" },
          { text: "Process", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "We follow a structured software development methodology designed to minimize risk, maximize business value, and ensure long-term scalability.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Business Discovery & Requirements Analysis",
        description:
          "We analyze your business processes, operational challenges, user requirements, existing systems, and growth objectives to define the right software strategy.",
      },
      {
        title: "Solution Architecture & UX Design",
        description:
          "We create system architecture, process flows, wireframes, database structures, user journeys, and technical specifications that support scalability and performance.",
      },
      {
        title: "Custom Software Development",
        description:
          "Our development team builds secure frontends, robust backends, APIs, integrations, automation workflows, reporting systems, and business-critical functionality.",
      },
      {
        title: "Testing, Deployment & Optimization",
        description:
          "We conduct comprehensive testing for security, performance, usability, and reliability before deployment, followed by continuous optimization and support.",
      },
    ],
  },

  ourApproach: {
    header: {
      title: [[{ text: "How " }, { text: "We" }, { text: "Build" }, { text: "&" }, { text: "Scale" }]],
      description: [
        [
          {
            text: "A streamlined approach to designing, developing, and scaling custom software systems. From business strategy to deployment, we create technology solutions that improve efficiency, enable growth, and support long-term success.",
          },
        ],
      ],
      heroHighlightedText: {
        textOne: "From Idea",
        textTwo: "to Scale",
        description: [{ text: "Strategy. Design. Build." }, { text: "Launch. Optimize. Grow." }],
      },
    },
    steps: CUSTOM_SOFTWARE_SERVICE_STEPS_WE_FOLLOW,
  },
  ourValues: {
    header: {
      title: [[{ text: "The" }, { text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Us" }]],
      description: [
        [
          {
            text: "The principles that guide every custom software project we deliver.",
          },
        ],
      ],
    },
    valuesCards: CUSTOM_SOFTWARE_SERVICE_VALUES_CARD_DATA,
  },

  readyToScale: {
    header: {
      title: [
        [{ text: "Ready" }, { text: "to" }, { text: "Scale?", variant: "italic" }],
        [{ text: "Get Your" }, { text: " Custom Software", variant: "italic" }, { text: " Roadmap" }],
      ],
      description: [
        [
          {
            text: "Book a free 30-minute strategy call to discuss your goals, technical requirements, operational challenges, and growth plans. We'll help you identify opportunities, define the right solution, and create a roadmap for successful implementation.",
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
