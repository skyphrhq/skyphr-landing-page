import SAAS_APP_DEVELOPMENT_4X_IMG from "@/app/assets/webp/4x/saas-app-development-4x.webp";
import { HOME_PAGE_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { SAAS_DEVELOPMENT_SERVICE_VALUES_CARD_DATA } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SAAS_DEVELOPMENT_SERVICE_STEPS_WE_FOLLOW } from "@/app/content/pageContent/service-steps.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const SAAS_APP_DEVELOPMENT_SERVICE_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "SaaS Development Services | Custom SaaS Application Development Company | Skyphr",
    description:
      "Build scalable SaaS platforms with Skyphr. Custom SaaS development, SaaS MVPs, enterprise software, cloud applications, AI-powered products, dashboards, CRM systems, and business automation solutions.",
    openGraph: {
      title: "SaaS Development Services | Custom SaaS Application Development Company | Skyphr",
      description:
        "Build scalable SaaS platforms with Skyphr. Custom SaaS development, SaaS MVPs, enterprise software, cloud applications, AI-powered products, dashboards, CRM systems, and business automation solutions.",
      images: "/og-image/saas-development-services.png",
      type: "website",
    },
    twitter: {
      title: "SaaS Development Services | Custom SaaS Application Development Company | Skyphr",
      description:
        "Build scalable SaaS platforms with Skyphr. Custom SaaS development, SaaS MVPs, enterprise software, cloud applications, AI-powered products, dashboards, CRM systems, and business automation solutions.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/saas-development-services.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/services/saas-development-services`,
    },
  },
  hero: {
    header: {
      title: [
        [
          { text: "Build " },
          { text: "Scalable" },
          { text: "SaaS" },
          { text: "Products " },
          { text: "That" },
          { text: "Drive" },
          { text: "Growth" },
        ],
        [
          {
            text: "Custom SaaS Development, Product Engineering & Business Automation",
            variant: "italic",
            classNames: "pt-2 lg:pt-4 flex text-2xl! xl:text-3xl!",
          },
        ],
      ],
      description: [
        [
          {
            text: "Build and scale digital products with Skyphr. We design and develop high-performance SaaS platforms, cloud-based applications, enterprise software solutions, and AI-powered systems that help startups, scaleups, and established businesses launch faster, streamline operations, and accelerate growth.",
          },
        ],
        [
          {
            text: "Whether you're validating a new SaaS idea, building a multi-tenant platform, modernizing legacy software, or creating an enterprise-grade application, our SaaS development team delivers secure, scalable, and future-ready solutions built for long-term success.",
          },
        ],
      ],
      heroImage: {
        imagePath: SAAS_APP_DEVELOPMENT_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "SaaS application development services hero illustration",
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
        [{ text: "SaaS Development", variant: "italic", classNames: "text-center" }],
      ],
      description: [
        [
          {
            text: "From SaaS products and customer-facing applications to internal business systems, we build scalable software solutions designed around real users, real workflows, and measurable business outcomes.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "SaaS Platforms",
        description:
          "Custom SaaS application development for startups and enterprises, including multi-tenant architecture, subscription management, user onboarding, customer dashboards, analytics, and workflow automation.",
        list: {
          title: "Ideal For",
          items: [
            "SaaS startups",
            "Subscription businesses",
            "B2B software companies",
            "Enterprise SaaS products",
            "Industry-specific software platforms",
          ],
        },
      },
      {
        title: "Admin Dashboards & Control Panels",
        description:
          "Powerful administrative systems that provide complete visibility and control over users, permissions, content, billing, reporting, and operational processes.",
        list: {
          title: "Capabilities",
          items: [
            "User management",
            "Access controls",
            "Data monitoring",
            "Business analytics",
            "Operational reporting",
            "Platform administration",
          ],
        },
      },
      {
        title: "CRM & Business Management Software",
        description:
          "Custom business software development tailored to your organization's workflows, teams, and operational requirements.",
        list: {
          title: "Solutions Include",
          items: [
            "CRM platforms",
            "Lead management systems",
            "Sales management software",
            "Resource planning tools",
            "Employee management systems",
            "Workflow automation platforms",
          ],
        },
      },
      {
        title: "Customer & Partner Portals",
        description:
          "Secure, intuitive portals that allow customers, clients, vendors, and partners to access information, manage projects, communicate, and collaborate efficiently.",
        list: {
          title: "Features Include",
          items: [
            "Client dashboards",
            "Secure document sharing",
            "Progress tracking",
            "Account management",
            "Team collaboration",
            "Communication systems",
          ],
        },
      },
      {
        title: "Booking & Operations Management Platforms",
        description:
          "End-to-end operational software that simplifies scheduling, project management, service delivery, and resource allocation.",
        list: {
          title: "Examples",
          items: [
            "Appointment booking systems",
            "Healthcare scheduling platforms",
            "Service management applications",
            "Field operations software",
            "Project management systems",
          ],
        },
      },
      {
        title: "API Development & Third-Party Integrations",
        description:
          "Connect your software ecosystem with modern APIs, payment systems, AI services, analytics platforms, and enterprise tools.",
        list: {
          title: "Integration Services",
          items: [
            "Payment gateways",
            "ERP integrations",
            "CRM integrations",
            "Marketing platforms",
            "AI services",
            "Business intelligence tools",
            "Custom API development",
          ],
        },
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Features" }, { text: "We" }, { text: "Can" }, { text: "Build" }, { text: "Into" }],
        [
          { text: "Your", variant: "italic" },
          { text: "SaaS", variant: "italic" },
          { text: "Product", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Every SaaS application is unique. We help define and build the right features based on your business model, operational requirements, customer needs, and growth objectives.",
          },
        ],
      ],
    },
    features: [
      "User Authentication & Security",
      "Single Sign-On (SSO)",
      "Multi-Factor Authentication",
      "Role-Based Access Control",
      "Multi-Tenant Architecture",
      "Subscription Billing",
      "Payment Processing",
      "User Dashboards",
      "Admin Panels",
      "Team Collaboration Tools",
      "Customer Portals",
      "Workflow Automation",
      "CRM Functionality",
      "Analytics & Reporting",
      "Advanced Search & Filters",
      "Notification Systems",
      "File Management",
      "API Development",
      "CMS Integration",
      "AI-Powered Features",
      "Audit Logs",
      "Data Export & Import",
      "Cloud Infrastructure",
      "Performance Monitoring",
      "Security Compliance",
      "Database Architecture",
      "Scalability Optimization",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "SaaS" }, { text: "Development" }, { text: "Solutions" }, { text: "For" }],
        [
          { text: "Growing", variant: "italic" },
          { text: "Businesses", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Whether you're launching a new SaaS startup, digitizing operations, or creating software to support enterprise growth, we build products designed to scale with your business.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Startup SaaS MVP Development",
        description:
          "Launch faster with a validated Minimum Viable Product designed to test assumptions, attract users, and secure investment while maintaining a scalable foundation.",
      },
      {
        title: "Internal Business Platforms",
        description:
          "Improve productivity and operational efficiency with software tailored to your organization's unique workflows and processes.",
      },
      {
        title: "Customer-Facing SaaS Applications",
        description:
          "Create engaging digital products that improve customer experiences and generate recurring revenue.",
      },
      {
        title: "Enterprise SaaS Solutions",
        description:
          "Develop secure, scalable enterprise applications that support complex workflows, teams, and business requirements.",
      },
      {
        title: "CRM & Operations Platforms",
        description: "Centralize customer data, automate workflows, and improve organizational efficiency.",
      },
      {
        title: "AI-Powered SaaS Products",
        description:
          "Integrate AI automation, predictive analytics, intelligent workflows, and conversational experiences directly into your platform.",
      },
      {
        title: "Booking & Service Management Systems",
        description: "Streamline scheduling, operations, service delivery, and customer communication.",
      },
      {
        title: "Data & Reporting Platforms",
        description:
          "Transform business data into actionable insights through advanced reporting and analytics systems.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [[{ text: "Technologies" }, { text: "We" }, { text: "Use" }]],
      description: [
        [
          {
            text: "We select technology stacks based on scalability requirements, performance goals, integration needs, and long-term maintainability.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Frontend Development",
        technologies: [
          { name: "React.js" },
          { name: "Next.js" },
          { name: "TypeScript" },
          { name: "Tailwind CSS" },
          { name: "JavaScript" },
          { name: "Redux" },
        ],
      },
      {
        title: "Backend Development",
        technologies: [
          { name: "Node.js" },
          { name: "FastAPI" },
          { name: "Python" },
          { name: "Express.js" },
          { name: "NestJS" },
        ],
      },
      {
        title: "Database Technologies",
        technologies: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "MongoDB" }, { name: "Redis" }],
      },
      {
        title: "Integrations & APIs",
        technologies: [
          { name: "Stripe" },
          { name: "Razorpay" },
          { name: "OpenAI APIs" },
          { name: "Google APIs" },
          { name: "Cloudinary" },
          { name: "Resend" },
          { name: "Twilio" },
          { name: "HubSpot" },
        ],
      },
      {
        title: "Cloud & Deployment",
        technologies: [
          { name: "Vercel" },
          { name: "Docker" },
          { name: "VPS" },
          { name: "Nginx" },
          { name: "Cloudflare" },
          { name: "AWS" },
          { name: "DigitalOcean" },
        ],
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Strategic" }, { text: "SaaS" }],
        [
          { text: "Development", variant: "italic" },
          { text: "Process", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "A successful SaaS product requires more than code. We combine business strategy, product thinking, user experience design, and engineering excellence to build software that drives results.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Product Discovery & Strategy",
        description:
          "We begin by understanding your market opportunity, business model, users, competitive landscape, operational requirements, and long-term growth objectives.",
        list: {
          title: "Outcomes",
          items: [
            "Product roadmap",
            "Feature prioritization",
            "Technical recommendations",
            "Architecture planning",
            "Growth strategy alignment",
          ],
        },
      },
      {
        title: "UX Design & System Architecture",
        description:
          "Our team designs intuitive user experiences while establishing a scalable technical foundation capable of supporting future growth.",
        list: {
          title: "Deliverables",
          items: [
            "User journeys",
            "Wireframes",
            "UI designs",
            "Database architecture",
            "User roles & permissions",
            "System architecture",
          ],
        },
      },
      {
        title: "SaaS Development & Integration",
        description:
          "We develop secure, scalable, and maintainable software systems using modern frameworks and best practices.",
        list: {
          title: "Development Scope",
          items: [
            "Frontend development",
            "Backend development",
            "API architecture",
            "Authentication systems",
            "Billing systems",
            "Dashboard development",
            "Third-party integrations",
          ],
        },
      },
      {
        title: "Testing, Launch & Optimization",
        description:
          "Before launch, we rigorously test performance, usability, scalability, and security to ensure a successful deployment.",
        list: {
          title: "Focus Areas",
          items: [
            "Performance testing",
            "Security testing",
            "Load testing",
            "User acceptance testing",
            "Deployment planning",
            "Post-launch optimization",
          ],
        },
      },
    ],
  },

  ourApproach: {
    header: {
      title: [
        [{ text: "How " }, { text: "We" }, { text: "Build" }, { text: "&" }, { text: "Scale" }],
        [
          { text: "Digital", variant: "italic" },
          { text: "Products", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "A streamlined process designed to reduce risk, accelerate delivery, and support sustainable growth.",
          },
        ],
      ],
      heroHighlightedText: {
        textOne: "From Idea",
        textTwo: "to Scale",
        description: [{ text: "Strategy. Design. Build." }, { text: "Launch. Optimize." }],
      },
    },
    steps: SAAS_DEVELOPMENT_SERVICE_STEPS_WE_FOLLOW,
  },
  ourValues: {
    header: {
      title: [
        [{ text: "The" }, { text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Every" }],
        [
          { text: "SaaS", variant: "italic" },
          { text: "Product", variant: "italic" },
          { text: "We", variant: "italic" },
          { text: "Build", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "The principles that guide every SAAS development project we deliver.",
          },
        ],
      ],
    },
    valuesCards: SAAS_DEVELOPMENT_SERVICE_VALUES_CARD_DATA,
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Executives" }, { text: "Choose" }, { text: "Skyphr" }],
        [
          { text: "For", variant: "italic" },
          { text: "SaaS", variant: "italic" },
          { text: "Development", variant: "italic" },
        ],
      ],
      description: [],
    },
    reasons: [
      "Strategic product-first approach",
      "Expertise in SaaS architecture and cloud applications",
      "Startup MVP to enterprise-scale development",
      "Modern technology stack",
      "AI integration capabilities",
      "Long-term scalability focus",
      "Security-first development practices",
      "Business outcome-driven execution",
      "Transparent communication and collaboration",
      "End-to-end design, development, and support",
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
    faqsItems: HOME_PAGE_FAQ_DATA,
  },
  readyToScale: {
    header: {
      title: [
        [
          { text: "Ready" },
          { text: "to" },
          { text: "Build" },
          { text: "Your" },
          { text: "SaaS Product?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Book a free 30-minute strategy call to discuss your product vision, technical requirements, growth goals, and how our SaaS development services can help you build, launch, and scale faster.",
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
