import type { Metadata } from "next";
import PageHero from "@/components/revamp/PageHero";
import SectionHeading from "@/components/revamp/SectionHeading";
import CtaButton from "@/components/revamp/CtaButton";
import Verify from "@/components/revamp/Verify";

export const metadata: Metadata = {
  title: "Company | CodSphere",
  description:
    "CodSphere is a Vancouver-based team building commerce and order operations for custom-order businesses, beginning with print and signage.",
  alternates: { canonical: "https://codsphere.com/company" },
};

const principles = [
  {
    title: "Specialists, not a general agency",
    body: "We focus on custom-order commerce and operations, beginning with print and signage — not everything for everyone.",
  },
  {
    title: "Smallest valuable step first",
    body: "We recommend the smallest engagement that can produce a measurable result, then expand only when the economics work.",
  },
  {
    title: "Honest status",
    body: "We label Live, UAT, Pilot and Product-direction work accurately and never present a prototype as production.",
  },
  {
    title: "Accountable to outcomes",
    body: "Every order should keep moving. We measure detection lead time, chasing time and delivery risk — not vanity metrics.",
  },
];

export default function CompanyPage() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      <PageHero
        eyebrow="Company"
        title="From first click to finished order."
        subhead="CodSphere builds the digital storefront custom-order customers buy from and connects the workflow teams use to quote, approve, produce and deliver."
        actions={[{ label: "Meet the team", href: "/contact", variant: "primary" }]}
      />

      <section className="cs-section">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <SectionHeading eyebrow="Who we are" title="A Vancouver team for custom-order businesses." />
            <p className="mt-5 text-[16px] leading-relaxed text-cs-ink/75">
              We help custom-order businesses sell online and keep every order moving. Print and sign
              shops were our first focus because their jobs rarely fit a standard cart: options,
              artwork, quotes, proofs, supplier purchases, production stages and delivery all have to
              line up.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-cs-ink/75">
              Team bios, headshots and detailed company facts are prepared for publication once
              confirmed. <Verify>founder/team bios, headshots and operating history</Verify>
            </p>
          </div>
          <aside className="rounded-2xl border border-cs-line bg-white p-6">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-cs-teal">
              Details
            </p>
            <dl className="mt-4 space-y-4 text-[15px]">
              <div>
                <dt className="text-cs-ink/55">Based in</dt>
                <dd className="font-medium text-cs-ink">Vancouver, BC</dd>
              </div>
              <div>
                <dt className="text-cs-ink/55">Email</dt>
                <dd className="font-medium text-cs-ink">
                  <a href="mailto:info@codsphere.ca" className="hover:text-cs-teal">
                    info@codsphere.ca
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-cs-ink/55">Phone &amp; hours</dt>
                <dd className="text-[13px]">
                  <Verify>public phone and hours</Verify>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="cs-section bg-white">
        <div className="container-wrapper">
          <SectionHeading eyebrow="Operating principles" title="How we work." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-cs-line bg-cs-mist p-6">
                <h3 className="font-sequel text-[18px] font-bold text-cs-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-cs-ink/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cs-navy text-white">
        <div className="container-wrapper py-16">
          <h2 className="font-sequel text-[26px] sm:text-[32px] font-bold">Work with us.</h2>
          <p className="mt-4 max-w-2xl text-[17px] text-white/80">
            Bring one order that should have gone better. We will map it with you.
          </p>
          <div className="mt-8">
            <CtaButton href="/order-flow-review" withArrow>
              Show us your order flow
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
