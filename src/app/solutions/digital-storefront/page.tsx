import type { Metadata } from "next";
import PageHero from "@/components/revamp/PageHero";
import SectionHeading from "@/components/revamp/SectionHeading";
import StatusBadge from "@/components/revamp/StatusBadge";
import CtaButton from "@/components/revamp/CtaButton";
import Verify from "@/components/revamp/Verify";
import { Check, Minus } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Storefronts for Custom-Order Businesses | CodSphere",
  description:
    "Custom storefronts for guided discovery, quote and order intake, artwork capture and measurable conversion.",
  alternates: { canonical: "https://codsphere.com/solutions/digital-storefront" },
};

const includes = [
  "Discovery",
  "Information architecture",
  "Custom visual design",
  "Product / service structure",
  "Quote / order flows",
  "Artwork / spec intake",
  "Analytics",
  "Mobile QA",
  "Launch",
  "30-day stabilization",
];

const boundaries = [
  "Unlimited pages",
  "Open-ended branding",
  "Ongoing content production",
  "Paid media management",
  "Generic template resale",
];

export default function DigitalStorefrontPage() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      <PageHero
        eyebrow="Solutions · Enter"
        title="Make custom work easier to buy."
        subhead="A custom-designed storefront with guided discovery, quote/order intake and the data foundation for what happens next."
        actions={[{ label: "Get a storefront review", href: "/order-flow-review" }]}
      />

      <section className="cs-section">
        <div className="container-wrapper grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="What's included" title="A complete, bounded build." />
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {includes.map((i) => (
                <li key={i} className="flex items-center gap-3 rounded-xl border border-cs-line bg-white p-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cs-teal/10 text-cs-teal">
                    <Check size={15} />
                  </span>
                  <span className="text-[15px] text-cs-ink/80">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Boundaries" title="What this is not." />
            <ul className="mt-6 space-y-2">
              {boundaries.map((b) => (
                <li key={b} className="flex items-center gap-3 rounded-xl border border-cs-line bg-white p-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cs-ink/5 text-cs-ink/50">
                    <Minus size={15} />
                  </span>
                  <span className="text-[15px] text-cs-ink/70">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cs-section bg-white">
        <div className="container-wrapper grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-cs-line bg-cs-mist p-6">
            <p className="text-[13px] font-semibold text-cs-teal">Timeline</p>
            <p className="mt-2 text-[16px] text-cs-ink/80">
              Target 4–8 weeks after approved content and data.
            </p>
            <p className="mt-3 text-[13px] text-cs-ink/55">
              <Verify>against current delivery capacity</Verify>
            </p>
          </div>
          <div className="rounded-2xl border border-cs-line bg-cs-mist p-6">
            <p className="text-[13px] font-semibold text-cs-teal">Pricing</p>
            <p className="mt-2 text-[16px] text-cs-ink/80">
              Starting range CAD $10k–$25k plus support / hosting.
            </p>
            <p className="mt-3 text-[13px] text-cs-ink/55">
              <Verify>final pricing before publishing</Verify>
            </p>
          </div>
          <div className="rounded-2xl border border-cs-line bg-cs-mist p-6">
            <p className="text-[13px] font-semibold text-cs-teal">Proof</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <StatusBadge status="uat" />
              <span className="text-[15px] text-cs-ink/80">Great West / Proof Industries</span>
            </div>
            <p className="mt-3 text-[14px] text-cs-ink/70">
              And VoltVera Shop <Verify>where permissions allow</Verify>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cs-navy text-white">
        <div className="container-wrapper py-16">
          <h2 className="font-sequel text-[26px] sm:text-[32px] font-bold">
            Get a storefront review.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] text-white/80">
            A 15-minute teardown of how buyers discover, configure and order your custom work today.
          </p>
          <div className="mt-8">
            <CtaButton href="/order-flow-review" withArrow>
              Get a storefront review
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
