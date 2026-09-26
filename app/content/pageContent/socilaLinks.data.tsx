import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export const SOCIAL_LINKS = [
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/skyphrhq/",
    label: "Instagram",
  },
  {
    icon: FiTwitter,
    href: "https://x.com/skyphrhq",
    label: "Twitter",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/company/skyphr",
    label: "LinkedIn",
  },
  {
    icon: FiFacebook,
    href: "https://www.facebook.com/profile.php?id=61574322422964",
    label: "Facebook",
  },
];

export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/LvrKL8Zp3F9TLxtN6";

export const SITE_ALTERNATE_NAMES = ["Skyphr Tech", "Skyphrhq"];

// Official Skyphr profiles used for Organization schema `sameAs`; SOCIAL_LINKS above drives the footer icons.
export const SAME_AS_URLS = [
  "https://www.linkedin.com/company/skyphr/",
  "https://www.instagram.com/skyphrhq/",
  "https://x.com/skyphrhq",
  "https://www.facebook.com/profile.php?id=61574322422964",
  "https://github.com/skyphrhq",
  "https://www.upwork.com/agencies/2078348956463634174/",
  GOOGLE_MAPS_URL,
];
