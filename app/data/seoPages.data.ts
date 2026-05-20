export type SeoPageStatus = "Published" | "Pending";

export type SeoPageContentType = "Main Page" | "Resource Page" | "Hire Page";

export type SeoPageLink = {
  pageName: string;
  href: string;
  status: SeoPageStatus;
  contentType: SeoPageContentType;
};

export const SEO_PAGE_LINKS: SeoPageLink[] = [
  { pageName: "Home", href: "/", status: "Published", contentType: "Main Page" },
  { pageName: "About Us", href: "/about-us", status: "Published", contentType: "Main Page" },
  { pageName: "Services", href: "/services", status: "Published", contentType: "Main Page" },
  { pageName: "Hire", href: "/hire", status: "Published", contentType: "Main Page" },
  { pageName: "Contact", href: "/contact", status: "Published", contentType: "Main Page" },
  { pageName: "Sitemap", href: "/sitemap", status: "Published", contentType: "Resource Page" },
  { pageName: "React.js Developer", href: "/hire/reactjs-developer", status: "Published", contentType: "Hire Page" },
  { pageName: "Next.js Developer", href: "/hire/nextjs-developer", status: "Published", contentType: "Hire Page" },
  { pageName: "WordPress Developer", href: "/hire/wordpress-developer", status: "Published", contentType: "Hire Page" },
  {
    pageName: "GSAP Animation Developer",
    href: "/hire/gsap-animation-developer",
    status: "Published",
    contentType: "Hire Page",
  },
  { pageName: "Full Stack Developer", href: "/hire/fullstack-developer", status: "Published", contentType: "Hire Page" },
  {
    pageName: "TypeScript Developer",
    href: "/hire/typescript-developer",
    status: "Published",
    contentType: "Hire Page",
  },
  {
    pageName: "Tailwind CSS Developer",
    href: "/hire/tailwind-css-developer",
    status: "Published",
    contentType: "Hire Page",
  },
  { pageName: "Node.js Developer", href: "/hire/nodejs-developer", status: "Published", contentType: "Hire Page" },
  { pageName: "FastAPI Developer", href: "/hire/fastapi-developer", status: "Published", contentType: "Hire Page" },
  { pageName: "Python Developer", href: "/hire/python-developer", status: "Published", contentType: "Hire Page" },
  { pageName: "UI Designer", href: "/hire/ui-designer", status: "Published", contentType: "Hire Page" },
  { pageName: "Wireframe Designer", href: "/hire/wireframe-designer", status: "Published", contentType: "Hire Page" },
];

export const MAIN_SEO_PAGE_LINKS = SEO_PAGE_LINKS.filter((page) => page.contentType === "Main Page");

export const RESOURCE_SEO_PAGE_LINKS = SEO_PAGE_LINKS.filter((page) => page.contentType === "Resource Page");

export const HIRE_SEO_PAGE_LINKS = SEO_PAGE_LINKS.filter((page) => page.contentType === "Hire Page");
