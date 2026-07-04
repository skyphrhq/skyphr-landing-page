import { HIRE_WORDPRESS_DEVELOPER_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { HIRE_WORDPRESS_DEVELOPER_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";
export const WORDPRESS_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire Expert WordPress Developers | Dedicated WordPress Development Team | Skyphr",
    description:
      "Hire expert WordPress developers from Skyphr to build scalable, secure, and high-performance websites, enterprise platforms, WooCommerce stores, and custom WordPress solutions. Flexible hiring models for global businesses.",
    openGraph: {
      title: "Hire Expert WordPress Developers | Dedicated WordPress Development Team | Skyphr",
      description:
        "Hire expert WordPress developers from Skyphr to build scalable, secure, and high-performance websites, enterprise platforms, WooCommerce stores, and custom WordPress solutions. Flexible hiring models for global businesses.",
      images: "/og-image/hire-wordpress-developers.png",
      type: "website",
    },
    twitter: {
      title: "Hire Expert WordPress Developers | Dedicated WordPress Development Team | Skyphr",
      description:
        "Hire expert WordPress developers from Skyphr to build scalable, secure, and high-performance websites, enterprise platforms, WooCommerce stores, and custom WordPress solutions. Flexible hiring models for global businesses.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-wordpress-developers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire/hire-wordpress-developers`,
    },
  },

  hero: {
    header: {
      title: [
        [{ text: "Hire Expert " }, { text: "WordPress Developers", variant: "italic" }],
        [
          {
            text: "Build Scalable, Secure & High-Performance WordPress Solutions",
            classNames: "pt-2 lg:pt-4 flex text-lg! lg:text-xl! xl:text-2xl! tracking-wide",
          },
        ],
      ],
      description: [
        [
          {
            text: "Hire dedicated WordPress developers from Skyphr to create custom websites, enterprise portals, WooCommerce stores, membership platforms, and content-driven digital experiences. Our experienced WordPress development team helps startups, growing businesses, agencies, and enterprises build fast, secure, SEO-friendly, and scalable websites that drive business growth.",
          },
        ],
        [
          {
            text: `Whether you need a custom WordPress website, WooCommerce development, plugin customization, theme development, migration services, or long-term development support, our WordPress experts deliver reliable solutions aligned with your business goals.`,
          },
        ],
      ],
    },
    highlights: [],
  },
  whatWeBuild: {
    header: {
      title: [[{ text: "WordPress " }, { text: "Development " }, { text: "Services " }, { text: "We Offer" }]],
      description: [],
    },
    cards: [
      {
        title: "Custom WordPress Website Development",
        description:
          "Build fully customized WordPress websites tailored to your brand, business objectives, and customer experience requirements.",
        list: {
          title: "Services Include:",
          items: [
            "Custom WordPress website development",
            "Business website development",
            "Corporate website development",
            "Enterprise WordPress solutions",
            "Landing page development",
            "Headless WordPress development",
          ],
        },
      },
      {
        title: "WooCommerce Development",
        description:
          "Transform WordPress into a powerful eCommerce platform with scalable WooCommerce solutions designed for growth.",
        list: {
          title: "Services Include:",
          items: [
            "WooCommerce store development",
            "Custom checkout experiences",
            "Payment gateway integrations",
            "Product catalog management",
            "Subscription-based eCommerce",
            "Marketplace development",
          ],
        },
      },
      {
        title: "Custom Theme Development",
        description:
          "Create pixel-perfect, high-performance themes that deliver exceptional user experiences and align with your brand identity.",
        list: {
          title: "Services Include:",
          items: [
            "Custom WordPress themes",
            "Responsive design implementation",
            "Theme optimization",
            "Gutenberg-ready themes",
            "Performance-focused theme architecture",
            "Cross-browser compatibility",
          ],
        },
      },
      {
        title: "Plugin Development & Customization",
        description: "Extend WordPress functionality through custom plugin development and advanced integrations.",
        list: {
          title: "Services Include:",
          items: [
            "Custom plugin development",
            "Plugin customization",
            "API integrations",
            "CRM integrations",
            "ERP integrations",
            "Third-party software connectivity",
          ],
        },
      },
      {
        title: "WordPress Migration & Modernization",
        description: "Upgrade legacy websites and migrate existing platforms without compromising performance or SEO.",
        list: {
          title: "Services Include:",
          items: [
            "Website migration",
            "CMS migration",
            "Platform modernization",
            "Data migration",
            "Hosting migration",
            "Performance improvements",
          ],
        },
      },
      {
        title: "WordPress Maintenance & Support",
        description: "Ensure your website remains secure, updated, and optimized for business continuity.",
        list: {
          title: "Services Include:",
          items: [
            "Ongoing maintenance",
            "Security monitoring",
            "Backup management",
            "Bug fixes",
            "Performance optimization",
            "Technical support",
          ],
        },
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [
          { text: "Features" },
          { text: " of Our" },
          { text: "WordPress" },
          { text: "Development" },
          { text: "Services" },
        ],
      ],
      description: [
        [
          {
            text: "Every business has unique workflows, customers, and growth objectives. We develop WordPress based solutions tailored to your operational requirements and product vision.",
          },
        ],
      ],
    },
    features: [
      "Custom Development",
      "Enterprise Scalability",
      "SEO-Friendly Structure",
      "Mobile-Responsive Design",
      "Security-Focused Development",
      "Fast Performance",
      "Easy Content Management",
      "Flexible Integrations",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Business" }, { text: "Benefits" }, { text: "of" }],
        [
          { text: "Hiring", variant: "italic" },
          { text: "WordPress", variant: "italic" },
          { text: "Developers", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Hiring WordPress developers helps businesses launch professional websites faster, reduce development costs, improve performance, and build scalable digital experiences that support marketing and growth.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Accelerate Digital Growth",
        description:
          "Launch professional websites and digital platforms faster with experienced WordPress specialists.",
      },
      {
        title: "Reduce Development Costs",
        description: "Avoid expensive in-house hiring while accessing dedicated WordPress expertise on demand.",
      },
      {
        title: "Improve Website Performance",
        description: "Deliver faster loading times, better user experiences, and higher conversion rates.",
      },
      {
        title: "Strengthen Brand Presence",
        description: "Build premium digital experiences that reinforce credibility and customer trust.",
      },
      {
        title: "Scale Efficiently",
        description: "Adapt your website infrastructure as your business, traffic, and content requirements evolve.",
      },
      {
        title: "Increase Marketing Effectiveness",
        description: "Support SEO, content marketing, lead generation, and conversion optimization strategies.",
      },
    ],
  },

  technologyStack: {
    header: {
      title: [[{ text: "WordPress" }, { text: "Technologies" }, { text: "& Expertise" }]],
      description: [
        [
          {
            text: "Our WordPress developers work with modern tools, platforms, integrations, and technologies to build secure, scalable, and high-performing websites.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Core Technologies",
        technologies: [
          { name: "WordPress CMS" },
          { name: "WooCommerce" },
          { name: "PHP" },
          { name: "MySQL" },
          { name: "REST APIs" },
          { name: "GraphQL" },
        ],
      },
      {
        title: "Frontend Technologies",
        technologies: [
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "JavaScript" },
          { name: "React" },
          { name: "Next.js" },
          { name: "Gutenberg" },
        ],
      },
      {
        title: "Integrations",
        technologies: [
          { name: "HubSpot" },
          { name: "Salesforce" },
          { name: "Stripe" },
          { name: "PayPal" },
          { name: "Mailchimp" },
          { name: "Zapier" },
        ],
      },
      {
        title: "Hosting Platforms",
        technologies: [
          { name: "AWS" },
          { name: "Google Cloud" },
          { name: "DigitalOcean" },
          { name: "Cloudways" },
          { name: "WP Engine" },
          { name: "Kinsta" },
        ],
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "WordPress" }, { text: "Development" }, { text: "Process", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "We follow a structured WordPress development process that helps businesses plan, design, build, launch, and continuously improve secure, scalable, and high-performing websites.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Requirement Analysis",
        description: "We evaluate your business goals, website requirements, target audience, and technical needs.",
      },
      {
        title: "Architecture & Planning",
        description: "Our team creates a scalable development roadmap, site structure, and implementation strategy.",
      },
      {
        title: "UI/UX & Design Implementation",
        description: "We design intuitive user experiences aligned with your brand and customer expectations.",
      },
      {
        title: "Development & Customization",
        description: "Our WordPress developers build custom functionality, themes, plugins, and integrations.",
      },
      {
        title: "Testing & Quality Assurance",
        description: "Comprehensive testing ensures performance, security, responsiveness, and reliability.",
      },
      {
        title: "Deployment & Launch",
        description: "We manage deployment and ensure a smooth transition to production.",
      },
      {
        title: "Ongoing Support & Optimization",
        description: "Continuous monitoring, updates, and improvements keep your website performing at its best.",
      },
    ],
  },

  ourValues: {
    header: {
      title: [[{ text: "Flexible" }, { text: "Hiring" }], [{ text: "Models", variant: "italic" }]],
      description: [
        [
          {
            text: "Choose the right WordPress hiring model based on your project scope, development needs, timeline, and long-term business goals.",
          },
        ],
      ],
    },
    valuesCards: HIRE_WORDPRESS_DEVELOPER_VALUES_CARDS,
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }],
        [
          { text: "for", variant: "italic" },
          { text: "WordPress", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choosing the right WordPress development partner helps you build secure, scalable, high-performing websites that support business growth and long-term digital success.",
          },
        ],
        [
          {
            text: "At Skyphr, we combine technical WordPress expertise with a business-focused approach to deliver websites, WooCommerce platforms, and enterprise solutions that create measurable value.",
          },
        ],
      ],
    },
    reasons: [
      "Experienced WordPress specialists",
      "Business-focused approach",
      "Scalable architecture",
      "Transparent communication",
      "Quality-driven delivery",
      "Global delivery capability",
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
    faqsItems: HIRE_WORDPRESS_DEVELOPER_FAQ_DATA,
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Ready" }, { text: "to" }, { text: "Hire" }],
        [
          { text: "Expert", variant: "italic" },
          { text: "WordPress", variant: "italic" },
          { text: "Developers?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Partner with Skyphr to hire experienced WordPress developers who can build, optimize, and scale secure, high-performance websites and digital platforms.",
          },
        ],
        [
          {
            text: "Whether you need a dedicated developer, a full development team, or end-to-end WordPress development services, we help transform your vision into a reliable and scalable digital solution.",
          },
        ],
        [
          {
            text: "Schedule a consultation today and build your next WordPress project with confidence.",
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
