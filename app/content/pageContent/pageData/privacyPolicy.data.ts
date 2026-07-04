import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { Metadata } from "next";

export type PrivacyPolicySection = {
  title?: string;
  paragraphs?: string[];
  itemsList?: {
    label?: string;
    description?: string;
  }[];
  subSections?: PrivacyPolicySection[];
  note?: string;
};

export type PrivacyPolicyPageData = {
  metadata?: Metadata;
  hero: {
    title: string;
    highlightedTitle: string;
    description: string;
    lastUpdated: string;
  };
  sections: PrivacyPolicySection[];
  contact: {
    title: string;
    description: string;
    email: string;
    website?: string;
    address: string;
    responseNote?: string;
  };
  securityBanner: {
    title: string;
    description: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
};

export const PRIVACY_POLICY_PAGE_DATA: PrivacyPolicyPageData = {
  metadata: {
    title: "Privacy Policy | Skyphr",
    description:
      "Read Skyphr's Privacy Policy to understand how we collect, use, store, and protect your personal information while providing our digital product and software development services.",
    openGraph: {
      title: "Privacy Policy | Skyphr",
      description:
        "Read Skyphr's Privacy Policy to understand how we collect, use, store, and protect your personal information while providing our digital product and software development services.",
      images: "/og-image/privacy-policy.png",
      type: "website",
    },
    twitter: {
      title: "Privacy Policy | Skyphr",
      description:
        "Read Skyphr's Privacy Policy to understand how we collect, use, store, and protect your personal information while providing our digital product and software development services.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/privacy-policy.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/privacy-policy`,
    },
  },
  hero: {
    title: "Privacy",
    highlightedTitle: "Policy",
    description:
      "We keep your data handling clear, careful, and limited to what helps us operate Skyphr and respond to your requests.",
    lastUpdated: "30 May 2026",
  },
  sections: [
    {
      paragraphs: [
        `Welcome to Skyphr ("Company," "we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we collect, use, store, and protect your personal information.`,
        `This Privacy Policy explains how Skyphr collects, processes, and safeguards information when you visit our website, use our services, communicate with us, or engage with our digital products, AI solutions, SaaS platforms, software development services, UI/UX design services, automation solutions, and related offerings.`,
        `By using our website and services, you agree to the practices described in this Privacy Policy.`,
      ],
    },
    {
      title: "1. Who We Are",
      paragraphs: ["Skyphr is a digital product development and AI solutions company specializing in:"],
      itemsList: [
        {
          label: "AI Development & Automation",
        },
        {
          label: "SaaS Product Development",
        },
        {
          label: "Custom Software Development",
        },
        {
          label: "Web Application Development",
        },
        {
          label: "Mobile App Development",
        },
        {
          label: "UI/UX Design",
        },
        {
          label: "Cloud Solutions",
        },
        {
          label: "Digital Product Strategy",
        },
        {
          label: "Business Process Automation",
        },
        {
          label: "AI Consulting Services",
        },
      ],
    },
    {
      title: "2. Information We Collect",
      subSections: [
        {
          title: "Personal Information",
          paragraphs: ["We may collect information that identifies you directly, including:"],
          itemsList: [
            {
              label: "Full name",
            },
            {
              label: "Email address",
            },
            {
              label: "Phone number",
            },
            {
              label: "Company name",
            },
            {
              label: "Job title",
            },
            {
              label: "Business information",
            },
            {
              label: "Billing information",
            },
            {
              label: "Communication records",
            },
          ],
        },
        {
          title: "Technical Information",
          paragraphs: ["When you visit our website, we may automatically collect:"],
          itemsList: [
            {
              label: "IP address",
            },
            {
              label: "Browser type and version",
            },
            {
              label: "Device information",
            },
            {
              label: "Operating system",
            },
            {
              label: "Referring URLs",
            },
            {
              label: "Pages visited",
            },
            {
              label: "Session duration",
            },
            {
              label: "Website interaction data",
            },
            {
              label: "Geographic location (approximate)",
            },
          ],
        },
        {
          title: "Project and Service Information",
          paragraphs: ["When engaging our services, we may collect:"],
          itemsList: [
            {
              label: "Project requirements",
            },
            {
              label: "Design assets",
            },
            {
              label: "Business documentation",
            },
            {
              label: "Software specifications",
            },
            {
              label: "API credentials provided by you",
            },
            {
              label: "User feedback and communications",
            },
          ],
        },
        {
          title: "AI and Automation Data",
          paragraphs: [
            "For AI development, automation, and SaaS-related projects, we may process data provided by clients solely for delivering agreed services and according to contractual obligations.",
          ],
          itemsList: [],
        },
      ],
    },
    {
      title: "3. How We Use Your Information",
      subSections: [
        {
          paragraphs: ["We use information to:"],
          itemsList: [
            {
              label: "Provide software development services",
            },
            {
              label: "Deliver AI development and automation solutions",
            },
            {
              label: "Create and manage SaaS applications",
            },
            {
              label: "Improve website performance and user experience",
            },
            {
              label: "Respond to inquiries and support requests",
            },
            {
              label: "Process business transactions",
            },
            {
              label: "Manage contracts and client relationships",
            },
            {
              label: "Send project updates and communications",
            },
            {
              label: "Improve our products and services",
            },
            {
              label: "Ensure security and prevent fraud",
            },
            {
              label: "Comply with legal obligations",
            },
            {
              label: "Conduct analytics and performance monitoring",
            },
          ],
        },
        {
          paragraphs: ["We process personal data only when we have a lawful basis to do so."],
          itemsList: [],
        },
      ],
    },
    {
      title: "4. Legal Basis for Processing (GDPR)",
      subSections: [
        {
          paragraphs: [
            "For users located in the European Economic Area (EEA), United Kingdom, or similar jurisdictions, we process personal information under the following legal bases:",
          ],
          itemsList: [
            {
              label: "Consent",
            },
            {
              label: "Contractual necessity",
            },
            {
              label: "Legal obligations",
            },
            {
              label: "Legitimate business interests",
            },
            {
              label: "Protection of vital interests",
            },
          ],
        },
        {
          paragraphs: ["Where consent is required, you may withdraw it at any time."],
          itemsList: [],
        },
      ],
    },
    {
      title: "5. Cookies and Tracking Technologies",
      subSections: [
        {
          paragraphs: ["Skyphr uses cookies and similar technologies to:"],
          itemsList: [
            {
              label: "Improve website functionality",
            },
            {
              label: "Remember user preferences",
            },
            {
              label: "Analyze website traffic",
            },
            {
              label: "Measure marketing performance",
            },
            {
              label: "Enhance user experience",
            },
          ],
        },
        {
          paragraphs: ["Cookies may include:"],
          itemsList: [
            {
              label: "Essential Cookies:",
              description: "Required for website functionality and security.",
            },
            {
              label: "Analytics Cookies:",
              description: "Used to understand visitor behavior and improve website performance.",
            },
            {
              label: "Marketing Cookies:",
              description: "Used to measure advertising effectiveness and improve campaign relevance.",
            },
          ],
        },
        {
          paragraphs: ["You may control cookies through your browser settings."],
          itemsList: [],
        },
      ],
    },
    {
      title: "6. How We Share Information",
      subSections: [
        {
          paragraphs: ["We do not sell personal information.", "We may share information with:"],
          itemsList: [
            {
              label: "Service Providers:",
              description:
                "Trusted third-party vendors that help us operate our business, including cloud hosting providers, analytics providers, CRM platforms, payment processors, email communication services, and project management tools.",
            },
            {
              label: "Business Transfers:",
              description:
                "Information may be transferred in connection with a merger, acquisition, restructuring, or sale of assets.",
            },
            {
              label: "Legal Requirements:",
              description:
                "We may disclose information when required by law, regulation, legal process, or governmental request.",
            },
          ],
        },
      ],
    },
    {
      title: "7. International Data Transfers",
      subSections: [
        {
          paragraphs: [
            "As a global digital product and AI development company, we may process information in multiple countries.",
            "When transferring personal data internationally, we implement appropriate safeguards, including:",
          ],
          itemsList: [
            {
              label: "Standard Contractual Clauses (SCCs)",
            },
            {
              label: "Contractual protections",
            },
            {
              label: "Security controls",
            },
            {
              label: "Applicable legal compliance measures",
            },
          ],
        },
      ],
    },
    {
      title: "8. Data Retention",
      subSections: [
        {
          paragraphs: ["We retain personal information only for as long as necessary to:"],
          itemsList: [
            {
              label: "Deliver contracted services",
            },
            {
              label: "Maintain business records",
            },
            {
              label: "Meet legal obligations",
            },
            {
              label: "Resolve disputes",
            },
            {
              label: "Enforce agreements",
            },
          ],
        },
        {
          paragraphs: ["When information is no longer required, we securely delete or anonymize it."],
          itemsList: [],
        },
      ],
    },
    {
      title: "9. Data Security",
      subSections: [
        {
          paragraphs: [
            "We implement industry-standard technical and organizational measures to protect personal information, including:",
          ],
          itemsList: [
            {
              label: "Secure servers",
            },
            {
              label: "Access controls",
            },
            {
              label: "Data encryption where appropriate",
            },
            {
              label: "Secure development practices",
            },
            {
              label: "Employee confidentiality obligations",
            },
            {
              label: "Monitoring and security controls",
            },
          ],
        },
        {
          paragraphs: [
            "While we strive to protect information, no method of transmission or storage can be guaranteed to be 100% secure.",
          ],
          itemsList: [],
        },
      ],
    },
    {
      title: "10. Your Privacy Rights",
      subSections: [
        {
          paragraphs: ["Depending on your location, you may have rights including:"],
          itemsList: [
            {
              label: "Right to Access:",
              description: "Request a copy of your personal information.",
            },
            {
              label: "Right to Correction:",
              description: "Request correction of inaccurate information.",
            },
            {
              label: "Right to Deletion:",
              description: "Request deletion of your personal information where legally permitted.",
            },
            {
              label: "Right to Restrict Processing:",
              description: "Request limited processing of your data.",
            },
            {
              label: "Right to Data Portability:",
              description: "Request transfer of your information in a structured format.",
            },
            {
              label: "Right to Object:",
              description: "Object to certain processing activities.",
            },
            {
              label: "Right to Withdraw Consent:",
              description: "Withdraw consent at any time where processing is based on consent.",
            },
          ],
        },
        {
          paragraphs: ["To exercise your rights, contact us at privacy@skyphr.com."],
          itemsList: [],
        },
      ],
    },
    {
      title: "11. Client Data and Confidentiality",
      subSections: [
        {
          paragraphs: [
            "Skyphr respects the confidentiality of all client information.",
            "For software development, AI development, SaaS platforms, automation systems, and digital product projects:",
          ],
          itemsList: [
            {
              label: "Client-owned data remains the property of the client",
            },
            {
              label: "We process data solely for project delivery",
            },
            {
              label: "Confidential information is protected through contractual obligations",
            },
            {
              label: "Access is limited to authorized personnel",
            },
            {
              label: "Where applicable, Data Processing Agreements (DPAs) may be executed with clients",
            },
          ],
        },
      ],
    },
    {
      title: "12. Third-Party Services",
      subSections: [
        {
          paragraphs: [
            "Our website and services may contain links to third-party websites, platforms, or tools.",
            "We are not responsible for the privacy practices of external websites or services. Users should review their privacy policies separately.",
          ],
          itemsList: [],
        },
      ],
    },
    {
      title: "13. Children's Privacy",
      subSections: [
        {
          paragraphs: [
            "Our services are intended for businesses, organizations, and individuals over the age of 18.",
            "We do not knowingly collect personal information from children under 13 years of age. If we become aware that such information has been collected, we will take reasonable steps to remove it.",
          ],
          itemsList: [],
        },
      ],
    },
    {
      title: "14. AI Systems and Automated Processing",
      subSections: [
        {
          paragraphs: [
            "As an AI development and automation company, Skyphr may develop, deploy, or manage AI-powered systems.",
            "When processing data through AI systems:",
          ],
          itemsList: [
            {
              label: "We aim to use data responsibly and ethically",
            },
            {
              label: "AI outputs may require human review",
            },
            {
              label: "We implement reasonable safeguards to reduce risks",
            },
            {
              label: "Clients remain responsible for ensuring lawful use of data they provide",
            },
          ],
        },
      ],
    },
    {
      title: "15. California Privacy Rights (CCPA/CPRA)",
      subSections: [
        {
          paragraphs: ["For California residents, you may have rights including:"],
          itemsList: [
            {
              label: "Right to know what personal information is collected",
            },
            {
              label: "Right to access collected information",
            },
            {
              label: "Right to request deletion",
            },
            {
              label: "Right to correct inaccurate information",
            },
            {
              label: "Right to limit certain uses of personal information",
            },
            {
              label: "Right to non-discrimination for exercising privacy rights",
            },
          ],
        },
        {
          paragraphs: ["Requests may be submitted through our contact information listed below."],
          itemsList: [],
        },
      ],
    },
    {
      title: "16. Changes to This Privacy Policy",
      subSections: [
        {
          paragraphs: ["We may update this Privacy Policy periodically to reflect:"],
          itemsList: [
            {
              label: "Changes in laws or regulations",
            },
            {
              label: "New technologies",
            },
            {
              label: "Updated business practices",
            },
            {
              label: "Service improvements",
            },
          ],
        },
        {
          paragraphs: ['Any updates will be posted on this page with a revised "Last Updated" date.'],
          itemsList: [],
        },
      ],
    },
  ],
  contact: {
    title: "17. Contact Us",
    description:
      "If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:",
    email: "support@skyphr.com",
    website: "www.skyphr.com",
    address: "A 568, Money Plant High Street, Gota, Ahmedabad, Gujarat 382470",
    responseNote:
      "We will make reasonable efforts to respond to privacy-related requests in accordance with applicable laws and regulations.",
  },
  securityBanner: {
    title: "Security is our architecture.",
    description: "We apply clear data boundaries and careful handling across every product touchpoint.",
    stats: [
      {
        value: "100%",
        label: "Safe Launches",
      },
      {
        value: "GDPR",
        label: "Ready",
      },
    ],
  },
};
