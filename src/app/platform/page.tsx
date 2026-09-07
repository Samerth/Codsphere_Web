import type { Metadata } from "next";
import PageHero from "@/components/revamp/PageHero";
import SectionHeading from "@/components/revamp/SectionHeading";
import StatusBadge, { ProjectStatus } from "@/components/revamp/StatusBadge";
import CtaButton from "@/components/revamp/CtaButton";
import Verify from "@/components/revamp/Verify";

export const metadata: Metadata = {
  title: "The CodSphere Platform | One Order System, Not Product Sprawl",
  description:
    "Shared data and capabilities for custom-order commerce: guided intake, a customer/order workbench, an order timeline, an exception monitor and custom adapters.",
  alternates: { canonical: "https://codsphere.com/platform" },
};

const capabilities: {
  id?: string;
  label: string;
  status: ProjectStatus;
  now: React.ReactNode;
}[] = [
  {
    id: "customer-intake",
    label: "Guided customer intake",
    status: "direction",
    now: (
      <>
        Website conversation and structured intake with a clean handoff into the order.{" "}
        <Verify>supported channels</Verify>
      </>
    ),
  },
  {
    label: "Customer & order workbench",
    status: "live",
    now: (
      <>
        Contacts, communications, tasks, appointments, automations, role access and reporting.{" "}
        <Verify>production usage and outcomes</Verify>
      </>
    ),
  },
  {
    label: "Order timeline",
    status: "direction",
    now: (
      <>
        One timeline across the order&apos;s milestones. <Verify>which states are live vs mockup</Verify>
      </>
    ),
  },
  {
    label: "Exception monitor",
    status: "pilot",
    now: (
      <>
        Detects missing, late or contradictory milestones. <Verify>measured detection accuracy</Verify>
      </>
    ),
  },
  {
    label: "Custom adapters",
    status: "live",
    now: (
      <>
        Integrations that connect the systems you already run. <Verify>integrations actually supported</Verify>
      </>
    ),
  },
];

export default function PlatformPage() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      <PageHero
        eyebrow="Platform"
        title="One shared order system — not three products to decode."
        subhead="The same data and capabilities power the storefront, the workbench and the exception monitor. Externally we use plain functional labels; internal product names live in sign-in and support."
        actions={[
          { label: "Show us your order flow", href: "/order-flow-review" },
          { label: "See the projects", href: "/projects", variant: "secondary" },
        ]}
      />

      <section className="cs-section">
        <div className="container-wrapper">
          <SectionHeading
            eyebrow="Capabilities"
            title="What the platform does — and what may be claimed today."
            intro="Every row shows an honest status. We never present a mockup as production."
          />
          <div className="mt-10 space-y-4">
            {capabilities.map((c) => (
              <div
                key={c.label}
                id={c.id}
                className="grid scroll-mt-24 gap-3 rounded-2xl border border-cs-line bg-white p-6 sm:grid-cols-[240px_1fr] sm:items-center"
              >
                <div className="flex items-center gap-3">
                  <StatusBadge status={c.status} />
                </div>
                <div>
                  <p className="font-sequel text-[18px] font-bold text-cs-ink">{c.label}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-cs-ink/70">{c.now}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px] text-cs-ink/60">
            Sortify, our separate digital mailroom product, stays off this page unless a verified
            shared-order use case emerges.
          </p>
        </div>
      </section>

      <section className="bg-cs-navy text-white">
        <div className="container-wrapper py-16">
          <h2 className="font-sequel text-[26px] sm:text-[32px] font-bold">See the workflow.</h2>
          <p className="mt-4 max-w-2xl text-[17px] text-white/80">
            The fastest way to understand the platform is to walk one of your real orders through it.
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
