import SkyphrWhiteLogo from "@/app/assets/logo/skyphr-logo-transparent-white.webp";
import { NAVBAR_LINKS_DATA } from "@/app/data/navbar.data";
import { SOCIAL_LINKS } from "@/app/data/socilaLinks.data";
import Image from "next/image";
import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

const FOOTER_COMPANY_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Hire", href: "/hire" },
  { label: "Contact", href: "/contact" },
];

const FOOTER_SERVICE_LINKS: FooterLink[] = [
  { label: "UI UX Design", href: "/services" },
  { label: "SaaS & Web App Development", href: "/services" },
  { label: "AI/ML", href: "/services" },
];
const FOOTER_HIRE_FRONTEND_LINKS: FooterLink[] =
  NAVBAR_LINKS_DATA.find((item) => item.id === "hire")
    ?.dropDown?.find((subItem) => subItem.id === "frontend-engineering")
    ?.dropDown?.map(({ label, href }) => ({ label, href })) || [];

const FOOTER_HIRE_BACKEND_LINKS: FooterLink[] =
  NAVBAR_LINKS_DATA.find((item) => item.id === "hire")
    ?.dropDown?.find((subItem) => subItem.id === "backend-engineering")
    ?.dropDown?.map(({ label, href }) => ({ label, href })) || [];

const FOOTER_HIRE_UI_UX_LINKS: FooterLink[] =
  NAVBAR_LINKS_DATA.find((item) => item.id === "hire")
    ?.dropDown?.find((subItem) => subItem.id === "ui-ux-design")
    ?.dropDown?.map(({ label, href }) => ({ label, href })) || [];

const FOOTER_RESOURCE_LINKS: FooterLink[] = [
  { label: "Sitemap", href: "/sitemap" },
  { label: "Start a Project", href: "/contact" },
];

const FOOTER_LINK_GROUPS = [
  { title: "Company", links: FOOTER_COMPANY_LINKS },
  { title: "Services", links: FOOTER_SERVICE_LINKS },
  { title: "Hire Frontend", links: FOOTER_HIRE_FRONTEND_LINKS },
  { title: "Hire Backend", links: FOOTER_HIRE_BACKEND_LINKS },
  { title: "Hire UI/UX", links: FOOTER_HIRE_UI_UX_LINKS },
  { title: "Resources", links: FOOTER_RESOURCE_LINKS },
];

function FooterScreen() {
  return (
    <div className="w-full bg-(--root-black-color) relative overflow-hidden font-inter">
      {/* Huge Background Text */}
      <div className="absolute hidden xl:flex xl:bottom-[-15%] left-0 right-0 justify-center w-full pointer-events-none select-none overflow-hidden">
        <span className="text-[24vw] leading-none font-bold text-white/2.5 font-instrument-sans whitespace-nowrap text-center">
          Skyphr
        </span>
      </div>

      <div className="skyphr-container relative z-10">
        {/* Middle Content */}
        <div className="flex flex-col py-12 md:py-14 lg:py-16 gap-10 lg:gap-12">
          <div className="w-full">
            <div className="w-full flex flex-col items-center md:flex-row gap-10 md:gap-20 lg:gap-28">
              <div className="max-w-90">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={SkyphrWhiteLogo}
                    alt="Skyphr Logo"
                    width={220}
                    height={57}
                    className="w-[220px] h-[57px] object-contain -ml-2.5"
                  />
                </div>
                <p className="text-neutral-300 text-sm leading-6">
                  Skyphr designs and builds scalable digital products with strategy, clean interfaces, and reliable
                  engineering.
                </p>
              </div>
              <div className="flex items-center justify-start md:justify-end gap-3 grow">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-neutral-300 hover:text-white hover:border-white hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-300">
                    <Icon className="text-xl transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Links Columns */}
          <div className="grid flex-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-7 gap-y-10 pt-2">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <span className="text-white font-medium text-sm">{group.title}</span>
                {group.links.map((link) => (
                  <Link
                    key={`${group.title}-${link.href}-${link.label}`}
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-base font-medium">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-5 border-t border-white/10 gap-4">
          <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Skyphr. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/sitemap"
              className="text-neutral-500 text-sm hover:text-(--root-white-color) transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterScreen;
