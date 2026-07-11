"use client";

import SkyphrWhiteLogo from "@/app/assets/logo/skyphr-logo-transparent-white.webp";
import { NAVBAR_LINKS_DATA } from "@/app/content/pageContent/navbar.data";
import { SOCIAL_LINKS } from "@/app/content/pageContent/socilaLinks.data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FOOTER_LINK_GROUPS = [
  {
    title: "Company",
    links: NAVBAR_LINKS_DATA.filter((page) => page.dropDown.length == 0).filter((page) => page.id !== "sitemap"),
  },
  { title: "Services", links: NAVBAR_LINKS_DATA.map((page) => (page.id === "services" ? page.dropDown : [])).flat() },
  {
    title: "Hire Frontend",
    links: NAVBAR_LINKS_DATA.map((page) =>
      page.id === "hire"
        ? page.dropDown?.filter((item) => item.id === "frontend-engineering").flatMap((category) => category.dropDown)
        : [],
    ).flat(),
  },
  {
    title: "Hire Backend",
    links: NAVBAR_LINKS_DATA.map((page) =>
      page.id === "hire"
        ? page.dropDown?.filter((item) => item.id === "backend-engineering").flatMap((category) => category.dropDown)
        : [],
    ).flat(),
  },
  {
    title: "Hire UI/UX",
    links: NAVBAR_LINKS_DATA.map((page) =>
      page.id === "hire"
        ? page.dropDown?.filter((item) => item.id === "ui-ux-design").flatMap((category) => category.dropDown)
        : [],
    ).flat(),
  },
];

function FooterScreen() {
  const pathname = usePathname();
  const [openFooterGroup, setOpenFooterGroup] = useState<{ pathname: string; title: string } | null>(null);
  const activeFooterGroup = openFooterGroup?.pathname === pathname ? openFooterGroup.title : null;

  return (
    <div className="w-full bg-(--root-black-color) relative overflow-hidden font-inter">
      {/* Huge Background Text */}
      <div className="absolute hidden xl:flex xl:bottom-[-5%] left-0 right-0 justify-center w-full pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(120px,24vw,500px)]  leading-none font-bold text-white/3 font-instrument-sans whitespace-nowrap text-center">
          Skyphr
        </span>
      </div>

      <div className="skyphr-container relative z-10">
        {/* Middle Content */}
        <div className="flex flex-col py-12 md:py-14 lg:py-16 gap-10 lg:gap-12">
          <div className="w-full">
            <div className="w-full flex flex-col md:items-center md:flex-row gap-10 md:gap-20 lg:gap-28">
              <div className="max-w-90">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={SkyphrWhiteLogo}
                    alt="Skyphr"
                    title="Skyphr"
                    width={220}
                    height={57}
                    className="w-55 h-14.25 object-contain -ml-2.5"
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
                    title={label}
                    className="group w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-neutral-300 hover:text-white hover:border-white hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-300">
                    <Icon className="text-xl transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Links Columns */}
          <div className="flex flex-col md:hidden border-t border-white/10">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title} className="border-b border-white/10">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-white"
                  aria-expanded={activeFooterGroup === group.title}
                  onClick={() =>
                    setOpenFooterGroup(activeFooterGroup === group.title ? null : { pathname, title: group.title })
                  }>
                  <span className="text-base font-medium">{group.title}</span>
                  <FaChevronDown
                    className={`text-xs shrink-0 transition-transform duration-300 ${activeFooterGroup === group.title ? "rotate-180" : ""}`}
                  />
                </button>
                {activeFooterGroup === group.title && (
                  <div className="flex flex-col gap-3 pb-5">
                    {group.links.map((link) => (
                      <Link
                        key={`${group.title}-${link.href}-${link.label}`}
                        href={link.href}
                        title={link.label}
                        className="text-(--footer-links-color) hover:text-(--text-white-color) transition-colors text-base font-medium">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden flex-1 grid-cols-2 md:grid md:grid-cols-3 xl:flex xl:items-start xl:justify-between gap-x-7 gap-y-10 pt-2">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <span className="text-white font-medium text-sm">{group.title}</span>
                {group.links.map((link) => (
                  <Link
                    key={`${group.title}-${link.href}-${link.label}`}
                    href={link.href}
                    title={link.label}
                    className="text-(--footer-links-color) hover:text-(--text-white-color) transition-colors text-base font-medium">
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
              href="/privacy-policy"
              title="Privacy Policy"
              className="text-(--footer-links-color) text-sm hover:text-(--root-white-color) transition-colors">
              Privacy Policy
            </Link>
            <span className="w-px h-5 bg-(--footer-links-color)"></span>
            <Link
              href="/sitemap"
              title="Sitemap"
              className="text-(--footer-links-color) text-sm hover:text-(--root-white-color) transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterScreen;
