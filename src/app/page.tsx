import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CtaButton from "@/components/revamp/CtaButton";
import SectionHeading from "@/components/revamp/SectionHeading";
import StatusBadge from "@/components/revamp/StatusBadge";
import Verify from "@/components/revamp/Verify";

export const metadata: Metadata = {
  title: "CodSphere | Commerce & Order Operations for Custom Businesses",
  description:
    "Sell custom work online and keep every order moving with connected storefronts, customer workflows and operational visibility.",
  alternates: { canonical: "https://codsphere.com/" },
};

const journeyMoments = [
  { moment: "Browse", failure: "Options are hard to understand; the buyer cannot tell what is possible." },
  { moment: "Quote", failure: "Request arrives without quantity, artwork, deadline or delivery details." },
  { moment: "Approve", failure: "Proof sits in an inbox; production does not know approval arrived." },
  { moment: "Produce", failure: "Job is idle or material/PO is late; no accountable exception owner." },
  { moment: "Deliver", failure: "Ship/install date is at risk; the customer asks for status before the team sees it." },
];

const startCards = [
  {
    name: "Digital Storefront",
    href: "/solutions/digital-storefront",
    body: "Make custom work easier to discover, quote and order. Guided choices, structured intake, artwork/specification capture and conversion tracking.",
    metric: "Qualified inquiries · intake completion · quote starts",
  },
  {
    name: "Order Flow",
    href: "/solutions/order-flow",
    body: "Give every order one visible timeline. Detect missing approvals, delayed stages and delivery risk; assign the next action.",
    metric: "Detection lead time · overdue jobs · chasing time",
  },
  {
    name: "Custom Extensions",
    href: "/solutions/custom-extensions",
    body: "Add the estimator, portal, supplier connection, production screen or mobile workflow the standard stack is missing.",
    metric: "Cycle time · adoption · avoided manual steps",
  },
];

const howItWorks = [
  { step: "Diagnose", output: "Order-journey map and exception list", gate: "Paid review" },
  { step: "Launch", output: "The smallest valuable layer, live", gate: "Fixed scope" },
  { step: "Connect", output: "The order events that matter, linked", gate: "Two data sources" },
  { step: "Measure", output: "A weekly value scorecard", gate: "Ground-truth jobs" },
  { step: "Expand", output: "The next layer, only if economics work", gate: "Data-based decision" },
];

const platformStates = [
  "Guided intake capturing complete order details",
  "Customer and order timeline in one view",
  "Detected exception, with the reason it fired",
  "Accountable owner and the next action",
  "Exception and recovery report",
];

const projects = [
  {
    name: "Great West / Proof Industries",
    status: "uat" as const,
    body: "A custom-order storefront for apparel, promotional products, signs and print: guided needs, catalogue navigation, team-store context and an artwork-led path.",
    note: "measurement pending",
  },
  {
    name: "Voltvera",
    status: "live" as const,
    body: "Deeper operational engineering across custom CRM and automation for a franchise business.",
    note: "every customer claim",
  },
  {
    name: "CodCRM / CodChat",
    status: "direction" as const,
    body: "Platform foundations for the customer/order workbench and guided website intake.",
    note: "production adoption",
  },
];

const offers = [
  { name: "Order Flow Review", range: "CAD $1.5k–$2.5k", purpose: "Paid clarity: map website friction and operational exceptions." },
  { name: "Digital Storefront Sprint", range: "CAD $10k–$25k + $300–$750/mo", purpose: "Lower-risk project that generates cash, trust and structured order data." },
  { name: "Order Flow Pilot", range: "CAD $7.5k–$15k + $1k–$2k/mo", purpose: "Recurring platform that connects order events and recovers exceptions." },
  { name: "Custom Extensions", range: "CAD $20k+ after discovery", purpose: "Higher-value apps and integrations around the same data and workflow." },
];

const trustPoints = [
  "Read-only-first integrations",
  "Role-based access",
  "Audit trail",
  "Backups",
  "Export and deletion",
  "Subprocessor transparency",
  "AI-use disclosure",
  "Human approval",
  "Support",
];

export default function Home() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      {/* 1 — Hero */}
      <section className="bg-cs-navy text-white">
        <div className="container-wrapper grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#7fd3d9]">
              For custom-order businesses
            </p>
            <h1 className="font-sequel text-[32px] leading-[1.1] sm:text-[48px] font-bold">
              Sell custom work online. Keep every order moving.
            </h1>
            <p className="mt-6 max-w-xl text-[17px] sm:text-[20px] leading-relaxed text-white/80">
              CodSphere builds the digital storefront your customers buy from and connects the
              workflow your team uses to quote, approve, produce and deliver.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <CtaButton href="/order-flow-review" withArrow>
                Show us how an order works
              </CtaButton>
              <CtaButton
                href="/projects"
                variant="secondary"
                className="border-white/40 text-white hover:bg-white hover:text-cs-navy"
              >
                See our work
              </CtaButton>
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Vancouver-based. Built for workflows that do not fit a standard cart.
            </p>
          </div>

          {/* Split visual: storefront + operations timeline (illustrative) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4 text-cs-ink">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-cs-ink/50">
                  Storefront
                </p>
                <div className="mt-3 h-20 rounded-lg bg-cs-mist" />
                <div className="mt-3 space-y-2">
                  <div className="h-3 w-3/4 rounded bg-cs-line" />
                  <div className="h-3 w-1/2 rounded bg-cs-line" />
                </div>
                <div className="mt-4 inline-flex rounded-full bg-cs-teal px-3 py-1.5 text-[12px] font-medium text-white">
                  Configure &amp; quote
                </div>
              </div>
              <div className="rounded-xl bg-white p-4 text-cs-ink">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-cs-ink/50">
                  Order timeline
                </p>
                <ul className="mt-3 space-y-2.5 text-[13px]">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cs-teal" /> Quote sent
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cs-teal" /> Proof approved
                  </li>
                  <li className="flex items-center gap-2 font-medium text-cs-orange">
                    <span className="h-2 w-2 rounded-full bg-cs-orange" /> PO late — assign owner
                  </li>
                  <li className="flex items-center gap-2 text-cs-ink/50">
                    <span className="h-2 w-2 rounded-full bg-cs-line" /> Ship / install
                  </li>
                </ul>
              </div>
            </div>
            <p className="px-1 pt-3 text-[11px] text-white/50">
              Illustrative interface. Client counts and outcomes shown only once verified.
            </p>
          </div>
        </div>
      </section>

      {/* 2 — The broken journey */}
      <section className="cs-section">
        <div className="container-wrapper">
          <SectionHeading
            title="A custom order should not break between the website and the shop floor."
            intro="Customers need guidance before they buy. Your team needs complete details after they do. When forms, email, spreadsheets, supplier portals and production boards do not agree, people re-enter information, chase status and discover delays too late."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-cs-line bg-white">
            {journeyMoments.map((m, i) => (
              <div
                key={m.moment}
                className={`grid grid-cols-1 gap-1 p-5 sm:grid-cols-[160px_1fr] sm:gap-6 ${
                  i !== journeyMoments.length - 1 ? "border-b border-cs-line" : ""
                }`}
              >
                <p className="font-sequel text-[17px] font-bold text-cs-navy">{m.moment}</p>
                <p className="text-[15px] leading-relaxed text-cs-ink/75">{m.failure}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Start small */}
      <section className="cs-section bg-white">
        <div className="container-wrapper">
          <SectionHeading
            eyebrow="One connected order flow"
            title="Start with the part that pays back first."
            intro="Three connected layers around a single customer-to-delivery flow — not separate products to decode."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {startCards.map((c) => (
              <div
                key={c.name}
                className="flex flex-col rounded-2xl border border-cs-line bg-cs-mist p-6"
              >
                <h3 className="font-sequel text-[20px] font-bold text-cs-ink">{c.name}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-cs-ink/75">{c.body}</p>
                <p className="mt-4 text-[13px] font-medium text-cs-teal">{c.metric}</p>
                <Link
                  href={c.href}
                  className="mt-4 inline-flex items-center gap-1 text-[14px] font-medium text-cs-navy hover:text-cs-teal"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — How it works */}
      <section className="cs-section">
        <div className="container-wrapper">
          <SectionHeading
            eyebrow="How it works"
            title="Diagnose, launch the smallest valuable layer, then expand only when the economics work."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {howItWorks.map((s, i) => (
              <div key={s.step} className="rounded-2xl border border-cs-line bg-white p-5">
                <span className="text-[13px] font-semibold text-cs-teal">0{i + 1}</span>
                <p className="mt-2 font-sequel text-[18px] font-bold text-cs-ink">{s.step}</p>
                <p className="mt-2 text-[14px] text-cs-ink/70">{s.output}</p>
                <p className="mt-3 text-[12px] font-medium uppercase tracking-wide text-cs-ink/45">
                  Gate: {s.gate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Platform proof */}
      <section className="cs-section bg-cs-navy text-white">
        <div className="container-wrapper">
          <SectionHeading
            dark
            eyebrow="Platform proof"
            title="Five states of a connected order."
            intro={
              <>
                Guided intake, a customer/order timeline, a detected exception with its reason, an
                accountable owner and a recovery report. Shown as labelled product-direction
                mockups — <Verify>which of these states are live in the current build</Verify>.
              </>
            }
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {platformStates.map((s, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <StatusBadge status="direction" />
                <div className="mt-4 h-16 rounded-lg bg-white/10" />
                <p className="mt-4 text-[14px] leading-relaxed text-white/80">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Projects */}
      <section className="cs-section bg-white">
        <div className="container-wrapper">
          <SectionHeading
            eyebrow="Projects"
            title="Systems built around real operating complexity."
            intro="A polished UAT build proves delivery capability, not customer impact. Status labels never blur prototype and production."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <div key={p.name} className="rounded-2xl border border-cs-line bg-cs-mist p-6">
                <div className="flex items-center justify-between">
                  <StatusBadge status={p.status} />
                </div>
                <h3 className="mt-4 font-sequel text-[18px] font-bold text-cs-ink">{p.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cs-ink/75">{p.body}</p>
                <p className="mt-4 text-[13px] text-cs-ink/55">
                  Outcome <Verify>{p.note}</Verify>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton href="/projects" variant="ghost" withArrow>
              Start with a similar problem
            </CtaButton>
          </div>
        </div>
      </section>

      {/* 7 — Fit */}
      <section className="cs-section">
        <div className="container-wrapper">
          <SectionHeading
            eyebrow="Fit"
            title="Built for businesses where every order has a few moving parts."
            intro="Best fit when 5+ people touch custom jobs and status lives in more than one place."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {["Print & Sign", "Promo & Apparel", "Custom Fabrication"].map((v, i) => (
              <div key={v} className="rounded-2xl border border-cs-line bg-white p-6">
                <p className="text-[13px] font-semibold text-cs-teal">
                  {i === 0 ? "Primary vertical" : "Adjacent"}
                </p>
                <p className="mt-2 font-sequel text-[20px] font-bold text-cs-ink">{v}</p>
                {i === 0 && (
                  <Link
                    href="/industries/print-sign"
                    className="mt-4 inline-flex items-center gap-1 text-[14px] font-medium text-cs-navy hover:text-cs-teal"
                  >
                    Print &amp; Sign details <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Commercial path */}
      <section className="cs-section bg-white">
        <div className="container-wrapper">
          <SectionHeading
            eyebrow="Commercial path"
            title="Start with the smallest engagement that can produce a measurable result."
            intro="No forced platform replacement. Indicative starting ranges below — final scope, timeline and price are confirmed with the founder."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-cs-line">
            {offers.map((o, i) => (
              <div
                key={o.name}
                className={`grid grid-cols-1 gap-2 bg-cs-mist p-5 sm:grid-cols-[1fr_auto] sm:items-center ${
                  i !== offers.length - 1 ? "border-b border-cs-line" : ""
                }`}
              >
                <div>
                  <p className="font-sequel text-[18px] font-bold text-cs-ink">{o.name}</p>
                  <p className="mt-1 text-[14px] text-cs-ink/70">{o.purpose}</p>
                </div>
                <p className="text-[15px] font-semibold text-cs-navy sm:text-right">
                  {o.range} <Verify>final pricing</Verify>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton href="/pricing" variant="secondary" withArrow>
              Choose a starting point
            </CtaButton>
          </div>
        </div>
      </section>

      {/* 9 — Trust */}
      <section className="cs-section">
        <div className="container-wrapper">
          <SectionHeading
            eyebrow="Trust"
            title="Low-risk by design."
            intro={
              <>
                Read-only-first integrations, least-privilege access and human approval. Only
                verified implementation details are published —{" "}
                <Verify>exact security, data-region and AI controls</Verify>.
              </>
            }
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((t) => (
              <div
                key={t}
                className="flex items-center gap-3 rounded-xl border border-cs-line bg-white p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cs-teal/10 text-cs-teal">
                  <Check size={15} />
                </span>
                <span className="text-[15px] text-cs-ink/80">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton href="/security" variant="ghost" withArrow>
              Request security details
            </CtaButton>
          </div>
        </div>
      </section>

      {/* 10 — Final CTA */}
      <section className="bg-cs-navy text-white">
        <div className="container-wrapper py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="font-sequel text-[26px] sm:text-[34px] font-bold">
              Show us one order that should have gone better.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/80">
              In 30 minutes, we will map the customer entry, the handoffs and where visibility
              breaks. If CodSphere is not the right fit, we will say so.
            </p>
            <div className="mt-8">
              <CtaButton href="/order-flow-review" withArrow>
                Show us your order flow
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
