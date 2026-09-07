import type { Metadata } from "next";
import PageHero from "@/components/revamp/PageHero";
import SectionHeading from "@/components/revamp/SectionHeading";
import CtaButton from "@/components/revamp/CtaButton";
import Verify from "@/components/revamp/Verify";

export const metadata: Metadata = {
  title: "Custom Extensions for Order Flow | CodSphere",
  description:
    "Bounded apps and integrations tied to the customer-to-delivery workflow: portals, estimators, supplier connections, production screens and mobile tools.",
  alternates: { canonical: "https://codsphere.com/solutions/custom-extensions" },
};

const examples = [
  "Customer portal",
  "Product configurator / estimator",
  "Artwork / proof approval",
  "Supplier catalogue / PO adapter",
  "Production screen",
  "Shipping / install workflow",
  "Accounting / status integration",
  "Mobile field tool",
];

export default function CustomExtensionsPage() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      <PageHero
        eyebrow="Solutions · Extend"
        title="Build the missing piece — not a second disconnected system."
        subhead="Custom apps and integrations that attach to the same order data and workflow, so the extension you add makes the whole order flow stronger."
        actions={[{ label: "Discuss a missing workflow", href: "/order-flow-review" }]}
      />

      <section className="cs-section">
        <div className="container-wrapper">
          <SectionHeading
            eyebrow="Examples"
            title="Only what attaches to order flow."
            intro="Every extension connects to the customer-to-delivery journey. We do not build a general catalogue of native apps, SaaS, AI, ERP, blockchain or marketing services."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {examples.map((e) => (
              <div
                key={e}
                className="rounded-2xl border border-cs-line bg-white p-5 text-[15px] font-medium text-cs-ink"
              >
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section bg-white">
        <div className="container-wrapper grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-cs-line bg-cs-mist p-6">
            <p className="text-[13px] font-semibold text-cs-teal">Engagement</p>
            <p className="mt-3 text-[16px] leading-relaxed text-cs-ink/80">
              Minimum CAD $20k after a paid discovery, with separate scope and change control so the
              core platform stays stable.
            </p>
            <p className="mt-3 text-[13px] text-cs-ink/55">
              <Verify>final scope, price and timeline</Verify>
            </p>
          </div>
          <div className="rounded-2xl border border-cs-line bg-cs-mist p-6">
            <p className="text-[13px] font-semibold text-cs-teal">Discipline</p>
            <p className="mt-3 text-[16px] leading-relaxed text-cs-ink/80">
              If a request is not tied to the order journey, we will say so and point you to a better
              fit rather than building an unrelated system.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cs-navy text-white">
        <div className="container-wrapper py-16">
          <h2 className="font-sequel text-[26px] sm:text-[32px] font-bold">
            Discuss a missing workflow.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] text-white/80">
            Tell us the one manual step or disconnected system slowing your orders down.
          </p>
          <div className="mt-8">
            <CtaButton href="/order-flow-review" withArrow>
              Discuss a missing workflow
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
