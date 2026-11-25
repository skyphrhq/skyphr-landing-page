import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

export const SOCIAL_LINKS = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/skyphrhq/",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/skyphrhq",
    label: "X (Twitter)",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/skyphr",
    label: "LinkedIn",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61574322422964",
    label: "Facebook",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@skyphrhq",
    label: "YouTube",
  },
];

// Google Business Profile (CID URL) and its Knowledge Graph entity, used for schema `hasMap` / `sameAs`
export const GOOGLE_MAPS_URL = "https://www.google.com/maps?cid=11756184745247115228";
export const GOOGLE_KNOWLEDGE_GRAPH_URL = "https://www.google.com/search?kgmid=/g/11zgmdt_m_";

export const SITE_ALTERNATE_NAMES = ["Skyphr Tech", "Skyphrhq"];

// Official Skyphr profiles used for Organization schema `sameAs`; SOCIAL_LINKS above drives the footer icons.
export const SAME_AS_URLS = [
  "https://www.linkedin.com/company/skyphr/",
  "https://www.instagram.com/skyphrhq/",
  "https://x.com/skyphrhq",
  "https://www.facebook.com/profile.php?id=61574322422964",
  "https://github.com/skyphrhq",
  "https://www.upwork.com/agencies/2078348956463634174/",
  "https://www.youtube.com/@skyphrhq",
  GOOGLE_MAPS_URL,
  GOOGLE_KNOWLEDGE_GRAPH_URL,
];
