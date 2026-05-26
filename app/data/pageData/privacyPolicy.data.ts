export type PrivacyPolicySection = {
  title: string;
  paragraphs?: string[];
  items?: {
    label: string;
    description: string;
  }[];
  note?: string;
};

export type PrivacyPolicyPageData = {
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
    address: string[];
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
  hero: {
    title: "Privacy",
    highlightedTitle: "Policy",
    description:
      "We keep your data handling clear, careful, and limited to what helps us operate Skyphr and respond to your requests.",
    lastUpdated: "May 2026",
  },
  sections: [
    {
      title: "Introduction",
      paragraphs: [
        "Welcome to Skyphr. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regard to your personal information, please contact us.",
        "When you visit our website and more generally use any of our services, we appreciate that you are trusting us with your personal information. We take your privacy very seriously and explain what information we collect, how we use it, and what rights you have in relation to it.",
      ],
    },
    {
      title: "Information We Collect",
      paragraphs: [
        "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, participate in activities on the website, or otherwise contact us.",
      ],
      items: [
        {
          label: "Personal data",
          description: "Name, email address, phone number, company details, and project requirements.",
        },
        {
          label: "Usage data",
          description: "Information about how you use our website, including pages visited and response type.",
        },
        {
          label: "Cookie data",
          description: "Cookies and similar tracking technologies that help us understand website activity.",
        },
      ],
    },
    {
      title: "How We Use Your Info",
      paragraphs: [
        "We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, to enter into or perform a contract with you, with your consent, and for compliance with our legal obligations.",
        "This includes responding to questions, sending administrative information to you, fulfilling and managing requests, and supporting business communication.",
      ],
    },
    {
      title: "Cookies & Tracking",
      paragraphs: [
        "We may use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our cookie notice.",
      ],
      note: "Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove cookies or to reject cookies.",
    },
    {
      title: "Third-Party Disclosure",
      paragraphs: [
        "We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data based on legal bases such as consent, legitimate interests, performance of a contract, or legal obligations.",
      ],
    },
    {
      title: "Data Storage & Security",
      paragraphs: [
        "We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.",
        "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the internet or information storage technology can be guaranteed to be fully secure.",
      ],
    },
    {
      title: "Your Privacy Rights",
      paragraphs: [
        "In some regions, such as the EEA and UK, you have certain rights under applicable data protection laws. These may include the right to request access and obtain a copy of your personal information, request rectification or erasure, restrict the processing of your personal information, and data portability where applicable.",
      ],
    },
  ],
  contact: {
    title: "Contact Us",
    description: "If you have questions or comments about this notice, you may email us at",
    email: "support@skyphr.com",
    address: [
      "Skyphr, Digital Product Studio",
      "123 Innovation Road, Suite 400",
      "San Francisco, CA 94103",
      "United States",
    ],
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
