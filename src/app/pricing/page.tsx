import type { Metadata } from "next";
import PageHero from "@/components/revamp/PageHero";
import SectionHeading from "@/components/revamp/SectionHeading";
import CtaButton from "@/components/revamp/CtaButton";
import Verify from "@/components/revamp/Verify";

export const metadata: Metadata = {
  title: "Pricing & Starting Points | CodSphere",
  description:
    "Indicative starting ranges for the Order Flow Review, Digital Storefront Sprint, Order Flow Pilot and Custom Extensions. No forced platform replacement.",
  alternates: { canonical: "https://codsphere.com/pricing" },
};

const offers = [
  {
    stage: "1 · Diagnose",
    name: "Order Flow Review",
    range: "CAD $1.5k–$2.5k",
    buys: "Paid clarity that maps website friction and operational exceptions.",
    cta: { label: "Book a review", href: "/order-flow-review" },
  },
  {
    stage: "2 · Enter",
    name: "Digital Storefront Sprint",
    range: "CAD $10k–$25k + $300–$750/mo",
    buys: "A lower-risk project that generates cash, trust and structured order data.",
    cta: { label: "Get a storefront review", href: "/solutions/digital-storefront" },
  },
  {
    stage: "3 · Operate",
    name: "Order Flow Pilot",
    range: "CAD $7.5k–$15k + $1k–$2k/mo",
    buys: "A recurring platform that connects order events and detects/recovers exceptions.",
    cta: { label: "Map a stalled order", href: "/solutions/order-flow" },
  },
  {
    stage: "4 · Extend",
    name: "Custom Extensions",
    range: "CAD $20k+ after discovery",
    buys: "Higher-value apps and integrations around the same data and workflow.",
    cta: { label: "Discuss a workflow", href: "/solutions/custom-extensions" },
  },
];

export default function PricingPage() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      <PageHero
        eyebrow="Pricing"
        title="Choose a starting point."
        subhead="We recommend the smallest engagement that can produce a measurable result. No forced platform replacement."
      />

      <section className="cs-section">
        <div className="container-wrapper">
          <SectionHeading
            title="Four starting points, one order flow."
            intro={
              <>
                Ranges below are indicative starting points from our offer ladder. Exact scope,
                capacity, timeline and price are confirmed with the founder —{" "}
                <Verify>final pricing, scope and payment terms</Verify>.
              </>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {offers.map((o) => (
              <div key={o.name} className="flex flex-col rounded-2xl border border-cs-line bg-white p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-cs-teal">
                  {o.stage}
                </p>
                <h3 className="mt-2 font-sequel text-[22px] font-bold text-cs-ink">{o.name}</h3>
                <p className="mt-2 text-[18px] font-semibold text-cs-navy">{o.range}</p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-cs-ink/75">{o.buys}</p>
                <div className="mt-5">
                  <CtaButton href={o.cta.href} variant="secondary" withArrow>
                    {o.cta.label}
                  </CtaButton>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px] text-cs-ink/60">
            Recurring charges cover support, hosting and platform operation and are confirmed in
            writing before any engagement begins.
          </p>
        </div>
      </section>

      <section className="bg-cs-navy text-white">
        <div className="container-wrapper py-16">
          <h2 className="font-sequel text-[26px] sm:text-[32px] font-bold">
            Not sure which starting point fits?
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] text-white/80">
            Start with a paid Order Flow Review. We will recommend the smallest engagement that can
            produce a measurable result.
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
