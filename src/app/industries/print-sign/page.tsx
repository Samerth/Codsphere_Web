import type { Metadata } from "next";
import PageHero from "@/components/revamp/PageHero";
import SectionHeading from "@/components/revamp/SectionHeading";
import CtaButton from "@/components/revamp/CtaButton";
import Verify from "@/components/revamp/Verify";

export const metadata: Metadata = {
  title: "Commerce and Workflow Software for Print & Sign Shops | CodSphere",
  description:
    "A connected digital storefront and order workflow for print, signage, promotional products and apparel teams.",
  alternates: { canonical: "https://codsphere.com/industries/print-sign" },
};

const jobs = [
  "Large-format and signage",
  "Banners, decals and vehicle wraps",
  "Business print and marketing collateral",
  "Apparel decoration and team stores",
  "Promotional products",
  "Install and delivery coordination",
];

const stages = [
  { stage: "Discover", detail: "Buyers understand options, sizes, materials and finishing before they ask." },
  { stage: "Quote & artwork", detail: "Structured intake captures quantity, artwork/specs, deadline and delivery." },
  { stage: "Proof & approve", detail: "Proof approval is tracked so production knows the moment it lands." },
  { stage: "Produce", detail: "Supplier POs and production stages have an accountable owner when they slip." },
  { stage: "Deliver / install", detail: "Ship or install dates are watched before they become late." },
];

export default function PrintSignPage() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      <PageHero
        eyebrow="Industries · Print & Sign"
        title="Commerce and workflow software for print & sign shops."
        subhead="A connected digital storefront and order workflow for print, signage, promotional products and apparel teams — built around the jobs you actually run."
        actions={[{ label: "Book a print/sign review", href: "/order-flow-review" }]}
      />

      <section className="cs-section">
        <div className="container-wrapper">
          <SectionHeading
            eyebrow="Recognizable jobs"
            title="Built for the work on your floor."
            intro="Best fit when 5+ people touch custom jobs and status lives in more than one place."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((j) => (
              <div key={j} className="rounded-2xl border border-cs-line bg-white p-5 text-[15px] font-medium text-cs-ink">
                {j}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section bg-white">
        <div className="container-wrapper">
          <SectionHeading eyebrow="From quote to install" title="One flow, five stages." />
          <div className="mt-8 overflow-hidden rounded-2xl border border-cs-line">
            {stages.map((s, i) => (
              <div
                key={s.stage}
                className={`grid gap-1 bg-cs-mist p-5 sm:grid-cols-[200px_1fr] sm:gap-6 ${
                  i !== stages.length - 1 ? "border-b border-cs-line" : ""
                }`}
              >
                <p className="font-sequel text-[17px] font-bold text-cs-navy">{s.stage}</p>
                <p className="text-[15px] leading-relaxed text-cs-ink/75">{s.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px] text-cs-ink/60">
            Local proof for B.C. print and sign shops is added as it is confirmed.{" "}
            <Verify>local customer references and proof</Verify>
          </p>
        </div>
      </section>

      <section className="bg-cs-navy text-white">
        <div className="container-wrapper py-16">
          <h2 className="font-sequel text-[26px] sm:text-[32px] font-bold">Book a print/sign review.</h2>
          <p className="mt-4 max-w-2xl text-[17px] text-white/80">
            Thirty minutes on one real job — from the buyer&apos;s first click to install.
          </p>
          <div className="mt-8">
            <CtaButton href="/order-flow-review" withArrow>
              Book a print/sign review
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
