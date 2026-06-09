import { FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { UI_UX_SERVICE_VALUES_CARD_DATA } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA, HOME_PAGE_DATA } from "@/app/content/pageContent/pageData/home.data";
import { UI_UX_SERVICE_STEPS_WE_FOLLOW } from "@/app/content/pageContent/service-steps.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const REACTJS_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  hero: {
    header: {
      title: [[{ text: "Hire Expert " }, { text: "React.js Developers", variant: "italic" }]],
      description: [
        [
          {
            text: "Bring in React.js engineers who build fast, reusable, and conversion-focused interfaces for SaaS platforms, dashboards, marketplaces, and modern web products.",
          },
        ],
      ],
    },
    highlights: [
      "Component-driven React architecture",
      "Reusable UI systems with clean state management",
      "Performance-focused frontend delivery",
      "Flexible engagement for product teams and startups",
    ],
  },
  whatWeBuild: {
    header: {
      title: [
        [{ text: "What " }, { text: "We " }, { text: "Build " }, { text: "Under" }],
        [{ text: "UI/UX Design Services", variant: "italic", classNames: "text-center" }],
      ],
      description: [
        [
          {
            text: "We design modern digital experiences that help businesses improve usability, reduce friction, increase customer satisfaction, and drive measurable results.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "SaaS Product Design",
        description:
          "UI/UX design for SaaS platforms, dashboards, multi-user systems, and subscription-based products built for scalability, usability, and long-term growth.",
      },
      {
        title: "Web Application Design",
        description:
          "Design intuitive web applications with seamless user journeys, optimized workflows, and responsive experiences across devices.",
      },
      {
        title: "Mobile App Design",
        description:
          "Create engaging iOS and Android experiences with user-centered mobile UI design, intuitive navigation, and conversion-focused interfaces.",
      },
      {
        title: "Enterprise UX Design",
        description:
          "Design complex business software, internal tools, ERP systems, and enterprise platforms that improve efficiency and simplify operations.",
      },
      {
        title: "Dashboard & Data Visualization Design",
        description:
          "Transform complex data into actionable insights through intuitive dashboards, reporting interfaces, and visual analytics experiences.",
      },
      {
        title: "Design Systems & UI Libraries",
        description:
          "Build scalable design systems, reusable components, style guides, and UI frameworks that ensure consistency across products and teams.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Features" }, { text: "We" }, { text: "Can" }, { text: "Design" }, { text: "Into" }],
        [
          { text: "Your", variant: "italic" },
          { text: "Digital", variant: "italic" },
          { text: "Product", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Every business has unique users, goals, and workflows. We design experiences tailored to your audience while balancing usability, performance, and business outcomes.",
          },
        ],
      ],
    },
    features: [
      "User research",
      "Customer journey mapping",
      "Information architecture",
      "User flow design",
      "Wireframe",
      "Interactive prototypes",
      "Dashboard design",
      "Mobile app interfaces",
      "Web application interfaces",
      "Design systems",
      "Component libraries",
      "Accessibility standards",
      "Responsive design",
      "Micro-interactions",
      "Data visualization",
      "Conversion optimization",
      "Onboarding experiences",
      "Multi-user workflows",
      "Enterprise software UX",
      "AI product interfaces",
      "Customer portals",
      "SaaS dashboards",
      "Product analytics experiences",
      "User testing",
      "Usability improvements",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Executive" }, { text: "Teams" }],
        [
          { text: "Invest", variant: "italic" },
          { text: "in", variant: "italic" },
          { text: "Better", variant: "italic" },
          { text: "UX", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Exceptional user experience is no longer a competitive advantage it's a business requirement. Companies that prioritize UX consistently outperform competitors in customer satisfaction, product adoption, and revenue growth.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Higher User Adoption",
        description:
          "Reduce onboarding friction and help users achieve value faster through intuitive product experiences.",
      },
      {
        title: "Increased Customer Retention",
        description: "Improve customer satisfaction and loyalty by designing experiences users genuinely enjoy.",
      },
      {
        title: "Faster Product Growth",
        description:
          "Create scalable user experiences that support product expansion, feature adoption, and long-term business goals.",
      },
      {
        title: "Lower Development Costs",
        description:
          "Validate ideas early through wireframes and prototypes, reducing expensive redesigns and development rework.",
      },
      {
        title: "Better Conversion Rates",
        description:
          "Design conversion-focused experiences that increase signups, engagement, upgrades, and customer acquisition.",
      },
      {
        title: "Stronger Brand Perception",
        description: "Build trust and credibility through professional, consistent, and modern digital experiences.",
      },
    ],
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "As" }, { text: "Your" }],
        [
          { text: "UI/UX", variant: "italic" },
          { text: "Design", variant: "italic" },
          { text: "Partner", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Whether you're launching a new SaaS platform, redesigning an existing product, building an enterprise application, or improving customer engagement, our team helps transform complex ideas into intuitive, scalable digital experiences.",
          },
        ],
        [
          {
            text: "We partner with founders, product leaders, and executive teams to design products that users adopt faster, engage with longer, and recommend more often.",
          },
        ],
      ],
    },
  },

  developmentProcess: {
    header: {
      title: [[{ text: "Easy Four Step To hire" }]],
      description: [
        [
          {
            text: "We follow a structured UX design process that combines business strategy, user research, and modern interface design to create products people enjoy using.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & UX Research",
        description:
          "We analyze your business objectives, target audience, customer behavior, competitors, and product requirements to establish a strong strategic foundation.",
      },
      {
        title: "User Experience Strategy",
        description:
          "We define information architecture, customer journeys, user flows, navigation structures, and interaction models that support user goals and business growth.",
      },
      {
        title: "UI Design & Prototyping",
        description:
          "We create wireframes, high-fidelity interfaces, interactive prototypes, and scalable design systems that bring your product vision to life.",
      },
      {
        title: "Testing & Optimization",
        description:
          "We validate designs through usability testing, stakeholder feedback, and iterative improvements to ensure the best possible user experience before development begins.",
      },
    ],
  },

  ourApproach: {
    header: {
      title: [[{ text: "How " }, { text: "We" }, { text: "Design" }, { text: "&" }, { text: "Scale" }]],
      description: [
        [
          {
            text: "A streamlined approach to designing, building, and scaling digital products. From strategy to launch, we create high-performance systems focused on user experience, efficiency, and long-term growth.",
          },
        ],
      ],
      heroHighlightedText: {
        textOne: "From Vision",
        textTwo: "to Experience",
        description: [{ text: "Research. Strategy. Design." }, { text: "Validate. Scale." }],
      },
    },
    steps: UI_UX_SERVICE_STEPS_WE_FOLLOW,
  },
  ourValues: {
    header: {
      title: [[{ text: "The" }, { text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Us" }]],
      description: [
        [
          {
            text: "The principles behind every design decision, ensuring we create meaningful digital experiences that deliver business value.",
          },
        ],
      ],
    },
    valuesCards: UI_UX_SERVICE_VALUES_CARD_DATA,
  },
  readyToScale: HOME_PAGE_DATA.readyToScale,
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
      title: [[{ text: "Got Questions? " }], [{ text: "We've Got " }, { text: "Answers", variant: "italic" }]],
      description: [
        [
          { text: "Everything you need to know before hiring talent through " },
          { text: "Skyphr", variant: "brand", classNames: "font-bold" },
        ],
      ],
    },
    faqsItems: FAQ_DATA,
  },
  contactUs: COMMON_CONTACT_US_SECTION_DATA,
};
