import type { Metadata } from "next";
import PageHero from "@/components/revamp/PageHero";
import SectionHeading from "@/components/revamp/SectionHeading";
import CtaButton from "@/components/revamp/CtaButton";
import Verify from "@/components/revamp/Verify";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Order Visibility & Exception Software | CodSphere",
  description:
    "See missing approvals, delayed stages and delivery risk across the systems your custom-order business already uses.",
  alternates: { canonical: "https://codsphere.com/solutions/order-flow" },
};

const exceptions = [
  "Quote follow-up missing",
  "Proof overdue",
  "Approval not queued",
  "Required PO missing or late",
  "Production stage idle",
  "Ship / install date at risk",
];

const steps = ["Connect", "Understand normal milestones", "Detect", "Assign / recover", "Learn"];

export default function OrderFlowPage() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      <PageHero
        eyebrow="Solutions · Operate"
        title="See what is stuck before it becomes late."
        subhead="CodSphere connects order events across the systems you already use, shows one timeline and alerts the right person when a milestone is missing, late or contradictory."
        actions={[{ label: "Map a stalled order", href: "/order-flow-review" }]}
      />

      <section className="cs-section">
        <div className="container-wrapper">
          <SectionHeading
            eyebrow="Initial exceptions"
            title="The delays worth catching first."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {exceptions.map((e) => (
              <div key={e} className="flex items-center gap-3 rounded-xl border border-cs-line bg-white p-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cs-orange/10 text-cs-orange">
                  <AlertTriangle size={16} />
                </span>
                <span className="text-[15px] text-cs-ink/80">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section bg-white">
        <div className="container-wrapper">
          <SectionHeading eyebrow="How it works" title="Connect, detect, assign, recover, learn." />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {steps.map((s, i) => (
              <div
                key={s}
                className="flex items-center gap-3 rounded-full border border-cs-line bg-cs-mist px-5 py-3"
              >
                <span className="text-[13px] font-semibold text-cs-teal">0{i + 1}</span>
                <span className="text-[15px] font-medium text-cs-ink">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="container-wrapper grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-cs-line bg-white p-6">
            <p className="text-[13px] font-semibold text-cs-teal">The pilot</p>
            <p className="mt-3 text-[16px] leading-relaxed text-cs-ink/80">
              Two data sources, three exception types, ground-truth historical jobs and a weekly
              value scorecard.
            </p>
            <p className="mt-4 text-[13px] text-cs-ink/55">
              Supported data sources and integrations <Verify>confirm what is live today</Verify>.
            </p>
          </div>
          <div className="rounded-2xl border border-cs-line bg-cs-navy p-6 text-white">
            <p className="text-[13px] font-semibold text-[#7fd3d9]">Boundary</p>
            <p className="mt-3 text-[16px] leading-relaxed text-white/85">
              Not a full MIS, ERP, production scheduler or inventory valuation system during the
              pilot.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cs-navy text-white">
        <div className="container-wrapper py-16">
          <h2 className="font-sequel text-[26px] sm:text-[32px] font-bold">Map a stalled order.</h2>
          <p className="mt-4 max-w-2xl text-[17px] text-white/80">
            Bring one order that stalled. We will show where the timeline broke and who should have
            been alerted.
          </p>
          <div className="mt-8">
            <CtaButton href="/order-flow-review" withArrow>
              Map a stalled order
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
