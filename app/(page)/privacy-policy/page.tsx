import HeroBgAbstract from "@/app/components/heroBgAbstract";
import { HOME_PAGE_DATA } from "@/app/data/pageData/home.data";
import { PRIVACY_POLICY_PAGE_DATA } from "@/app/data/pageData/privacyPolicy.data";
import ContactUsSection from "@/app/screens/contactUsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Skyphr",
  description: "Skyphr privacy policy and data handling practices.",
};

function PrivacyPolicyPage() {
  const { hero, sections, contact, securityBanner } = PRIVACY_POLICY_PAGE_DATA;

  return (
    <main className="w-full bg-(--root-white-color) font-instrument-sans text-(--text-main-color)">
      <section className="w-full h-auto relative overflow-hidden">
        <HeroBgAbstract className="opacity-55" />
        <div className="skyphr-container relative z-11 pt-28! pb-20! xl:pt-45! xl:pb-35!">
          <div className="max-w-4xl">
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

      <section className="w-full py-14 md:py-20">
        <div className="skyphr-container">
          <div className="mx-auto grid w-full gap-8 lg:flex lg:flex-row lg:items-start">
            <article className="min-w-0 rounded-2xl border border-(--border-color) bg-(--root-white-color) px-5 py-8 md:px-10 md:py-12">
              <div className="space-y-10 md:space-y-12">
                {sections.map((section) => (
                  <section key={section.title} className="scroll-mt-30">
                    <h2 className="font-instrument-sans text-2xl md:text-3xl font-bold tracking-tight text-(--text-main-color)">
                      {section.title}
                    </h2>
                    {section.paragraphs && (
                      <div className="mt-4 space-y-4">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="font-instrument-sans text-sm md:text-base leading-7 text-(--text-secondary-color)">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                    {section.items && (
                      <div className="mt-5 space-y-3">
                        {section.items.map((item) => (
                          <p
                            key={item.label}
                            className="font-instrument-sans text-sm md:text-base leading-7 text-(--text-secondary-color)">
                            <strong className="font-semibold text-(--text-main-color)">{item.label}:</strong>{" "}
                            {item.description}
                          </p>
                        ))}
                      </div>
                    )}
                    {section.note && (
                      <div className="mt-6 rounded-lg border border-(--border-color) bg-(--about-us-card-bg) p-5">
                        <p className="font-playfair-display text-base italic leading-7 text-(--text-secondary-color)">
                          {section.note}
                        </p>
                      </div>
                    )}
                  </section>
                ))}

                <section className="scroll-mt-30">
                  <h2 className="font-instrument-sans text-2xl md:text-3xl font-bold tracking-tight text-(--text-main-color)">
                    {contact.title}
                  </h2>
                  <p className="mt-4 font-instrument-sans text-sm md:text-base leading-7 text-(--text-secondary-color)">
                    {contact.description}{" "}
                    <a className="font-semibold text-(--cta-button-background)" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                    .
                  </p>
                  <address className="mt-6 rounded-lg bg-(--about-us-card-bg) p-5 font-instrument-sans text-sm leading-7 text-(--text-secondary-color) not-italic">
                    {contact.address.map((line) => (
                      <span className="block" key={line}>
                        {line}
                      </span>
                    ))}
                  </address>
                </section>
              </div>
            </article>

            <aside className="lg:sticky lg:top-30 h-fit rounded-2xl bg-(--text-main-color) p-6 text-(--root-white-color) xl:min-w-87.5">
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
