import { NavbarLinksInterface } from "@/app/utils/interface/data.interface";

export const NAVBAR_LINKS_DATA: NavbarLinksInterface[] = [
  { id: "home", label: "Home", href: "/", type: "link", target: "_self", dropDown: [] },
  { id: "about", label: "About", href: "/about-us", type: "link", target: "_self", dropDown: [] },
  {
    id: "services",
    label: "Services",
    href: "/services",
    type: "link",
    target: "_self",
    dropDown: [
      {
        id: "digital-marketing-services",
        label: "Digital Marketing Services",
        href: "/services",
        type: "link",
        target: "_self",
        dropDown: [],
      },
      {
        id: "data",
        label: "Data",
        href: "/services",
        type: "link",
        target: "_self",
        dropDown: [],
      },
      {
        id: "ai-ml",
        label: "AI/ML",
        href: "/services",
        type: "link",
        target: "_self",
        dropDown: [],
      },
    ],
  },
  {
    id: "hire",
    label: "Hire",
    href: "/hire",
    type: "link",
    target: "_self",
    dropDown: [],
  },
  { id: "contact", label: "Contact", href: "/contact", type: "link", target: "_self", dropDown: [] },
];
