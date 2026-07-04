import JsonLd from "@/app/components/JsonLd";
import HeroBgAbstract from "@/app/components/heroBgAbstract";
import { HOME_PAGE_DATA } from "@/app/content/pageContent/pageData/home.data";
import { PRIVACY_POLICY_PAGE_DATA, PrivacyPolicySection } from "@/app/content/pageContent/pageData/privacyPolicy.data";
import ContactUsSection from "@/app/screens/contactUsSection";
import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { normalizePageMetadata } from "@/app/utils/seo/metadata";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/app/utils/seo/schema";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";

const title =
  typeof PRIVACY_POLICY_PAGE_DATA.metadata?.title === "string"
    ? PRIVACY_POLICY_PAGE_DATA.metadata.title
    : "Privacy Policy | Skyphr";
const description =
  PRIVACY_POLICY_PAGE_DATA.metadata?.description ?? "Skyphr privacy policy and data handling practices.";
const path = "/privacy-policy";

export const metadata: Metadata = PRIVACY_POLICY_PAGE_DATA.metadata
  ? normalizePageMetadata(PRIVACY_POLICY_PAGE_DATA.metadata, path)
  : { title, description };

const PrivacyPolicySectionsRenderer = (section: PrivacyPolicySection, isSubSection: boolean = false) => {
  return (
    <section key={section.title} className="scroll-mt-30 space-y-5">
      {isSubSection ? (
        <h3 className="font-instrument-sans text-xl lg:text-2xl font-bold tracking-tight text-(--text-main-color)">
          {section.title}
        </h3>
      ) : (
        section.title && (
          <h2 className="font-instrument-sans text-2xl lg:text-3xl font-bold tracking-tight text-(--text-main-color)">
            {section.title}
          </h2>
        )
      )}
      {section.paragraphs && (
        <div className="space-y-4">
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="font-instrument-sans text-sm md:text-base lg:text-lg leading-7 text-(--text-secondary-color)">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {section.itemsList && (
        <ul className="space-y-3 list-disc pl-10">
          {section.itemsList.map((item) => (
            <li
              key={item.label}
              className="font-instrument-sans text-sm md:text-base lg:text-lg leading-7 text-(--text-secondary-color)">
              {item.label && <strong className="font-semibold text-(--text-main-color)">{item.label} </strong>}
              {item.description}
            </li>
          ))}
        </ul>
      )}
      {section.note && (
        <div className="rounded-lg border border-(--border-color) bg-(--about-us-card-bg) p-5">
          <p className="font-playfair-display text-base italic leading-7 text-(--text-secondary-color)">
            {section.note}
          </p>
        </div>
      )}
      {section.subSections &&
        section.subSections.map((subSection, index) => (
          <div key={index} className="w-full">
            {PrivacyPolicySectionsRenderer(subSection, true)}
          </div>
        ))}
    </section>
  );
};

function PrivacyPolicyPage() {
  const { hero, sections, contact, securityBanner } = PRIVACY_POLICY_PAGE_DATA;

  return (
    <main className="w-full bg-(--root-white-color) font-instrument-sans text-(--text-main-color)">
      <JsonLd
        data={[
          generateWebPageSchema({ title, description, path }),
          generateBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path },
          ]),
        ]}
      />
      <section className="w-full h-auto relative overflow-hidden">
        <HeroBgAbstract className="opacity-55" />
        <div className="skyphr-container relative z-11 pt-28! pb-20! xl:pt-45! xl:pb-35!">
          <div className="w-full">
            <h1 className="mt-4 font-instrument-sans text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight text-(--text-main-color) leading-[1.08]">
              {hero.title}{" "}
              <span className="font-playfair-display italic font-semibold text-(--text-main-color)">
                {hero.highlightedTitle}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl font-instrument-sans text-base md:text-xl font-medium leading-relaxed text-(--text-secondary-color)">
              {hero.description}
            </p>
            <p className="mt-5 font-instrument-sans text-sm font-semibold text-(--text-secondary-color)">
              Last updated: {hero.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full md:py-5 lg:py-10 xl:py-15">
        <div className="skyphr-container">
          <div className="mx-auto grid w-full gap-8 xl:flex lg:flex-row lg:items-start">
            <article
              className={twMerge(
                "min-w-0 md:border md:border-(--border-color) bg-(--root-white-color) px-0! py-8 md:px-5! lg:md-10! md:py-12",
                COMMON_BORDER_RADIUS,
              )}>
              <div className="space-y-10 md:space-y-12">
                {sections.map((section) => PrivacyPolicySectionsRenderer(section))}

                <section className="scroll-mt-30">
                  <h2 className="font-instrument-sans text-2xl md:text-3xl font-bold tracking-tight text-(--text-main-color)">
                    {contact.title}
                  </h2>
                  <p className="mt-4 font-instrument-sans text-sm md:text-base lg:text-lg leading-7 text-(--text-secondary-color)">
                    {contact.description}{" "}
                  </p>
                  <address className="mt-6 rounded-lg bg-(--about-us-card-bg) p-5 font-instrument-sans text-sm xl:text-base leading-7 xl:leading-9 text-(--text-secondary-color) not-italic">
                    <div className="flex items-center justify-start gap-1">
                      <span className="block font-bold text-(--root-black-color)">Email: </span>
                      <a
                        className="font-semibold text-(--cta-button-background)"
                        href={`mailto:${contact.email}`}
                        title={`Email ${contact.email}`}>
                        {contact.email}
                      </a>
                    </div>
                    {contact.website && (
                      <div className="flex items-center justify-start gap-1">
                        <span className="block font-bold text-(--root-black-color)"> Website: </span>
                        <a
                          className="font-semibold text-(--cta-button-background)"
                          href={`https://${contact.website}`}
                          title={contact.website}
                          target="_blank"
                          rel="noopener noreferrer">
                          {contact.website}
                        </a>
                      </div>
                    )}

                    <div className="flex items-center justify-start gap-1">
                      <span className="block font-bold text-(--root-black-color)">Address: </span>
                      <p className="font-instrument-sans text-sm  text-(--text-secondary-color)">{contact.address}</p>
                    </div>
                  </address>
                  {contact.responseNote && (
                    <p className="mt-6 font-instrument-sans text-sm md:text-base lg:text-lg leading-7 text-(--text-secondary-color)">
                      {contact.responseNote}
                    </p>
                  )}
                </section>
              </div>
            </article>

            <aside
              className={twMerge(
                "lg:sticky lg:top-30 h-fit bg-(--text-main-color) p-6 text-(--root-white-color) xl:min-w-87.5",
                COMMON_BORDER_RADIUS,
              )}>
              <h2 className="font-instrument-sans text-xl font-bold">{securityBanner.title}</h2>
              <p className="mt-3 font-instrument-sans text-sm leading-6 text-(--text-white-color)">
                {securityBanner.description}
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-1">
                {securityBanner.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-instrument-sans text-2xl font-bold text-(--bg-blue-shade)">{stat.value}</p>
                    <p className="mt-1 font-instrument-sans text-xs uppercase tracking-[0.18em] text-(--text-white-color)">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {HOME_PAGE_DATA?.contactUs && (
        <section className="w-full h-auto overflow-hidden">
          <ContactUsSection data={HOME_PAGE_DATA.contactUs} />
        </section>
      )}
    </main>
  );
}

export default PrivacyPolicyPage;
