import type { Metadata } from "next";
import PageHero from "@/components/revamp/PageHero";
import SectionHeading from "@/components/revamp/SectionHeading";
import CtaButton from "@/components/revamp/CtaButton";
import Verify from "@/components/revamp/Verify";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Security, Privacy & Trust | CodSphere",
  description:
    "How CodSphere handles access, data, AI, backups and support for custom-order businesses. We publish only verified implementation details.",
  alternates: { canonical: "https://codsphere.com/security" },
};

const commitments: { title: string; body: React.ReactNode }[] = [
  {
    title: "Read-only-first integrations",
    body: "We connect to the systems you already run in read-only mode first, and only write back once you approve.",
  },
  {
    title: "Role-based access",
    body: "Least-privilege access so people see and change only what their role requires.",
  },
  {
    title: "Audit trail",
    body: "Order events and key actions are recorded so you can see what happened and when.",
  },
  {
    title: "Backups & recovery",
    body: (
      <>
        Regular backups with a documented restore path. <Verify>backup cadence and retention</Verify>
      </>
    ),
  },
  {
    title: "Export & deletion",
    body: (
      <>
        Your data is exportable and deletable on request. <Verify>data region and retention policy</Verify>
      </>
    ),
  },
  {
    title: "Subprocessor transparency",
    body: (
      <>
        We disclose the hosting, analytics, communications and AI subprocessors we rely on.{" "}
        <Verify>current subprocessor list</Verify>
      </>
    ),
  },
  {
    title: "AI-use disclosure",
    body: (
      <>
        Where AI is used we describe the input, purpose, human review and retention.{" "}
        <Verify>exact AI controls and opt-out</Verify>
      </>
    ),
  },
  {
    title: "Human approval",
    body: "A person approves consequential actions; automation assists rather than acts unchecked.",
  },
  {
    title: "Support",
    body: (
      <>
        A named support path with defined response expectations. <Verify>support SLA and hours</Verify>
      </>
    ),
  },
];

export default function SecurityPage() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      <PageHero
        eyebrow="Security & trust"
        title="Low-risk by design — and honest about what is verified."
        subhead="We remove risk around access, data, AI, backups and support. We publish only implementation details we can stand behind."
        actions={[{ label: "Request security details", href: "/order-flow-review" }]}
      />

      <section className="cs-section">
        <div className="container-wrapper">
          <SectionHeading title="What we commit to." />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {commitments.map((c) => (
              <div key={c.title} className="rounded-2xl border border-cs-line bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cs-teal/10 text-cs-teal">
                  <ShieldCheck size={18} />
                </span>
                <h3 className="mt-4 font-sequel text-[17px] font-bold text-cs-ink">{c.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-cs-ink/70">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-dashed border-cs-line bg-white p-6 text-[14px] leading-relaxed text-cs-ink/70">
            We do not claim data is &ldquo;never shared with third parties&rdquo; when subprocessors
            are involved. A legally reviewed privacy notice, consent purpose, communication
            preferences and a CASL-compliant follow-up process govern how we handle your data.{" "}
            <Verify>legal review and subprocessor/privacy notice</Verify>
          </div>
        </div>
      </section>

      <section className="bg-cs-navy text-white">
        <div className="container-wrapper py-16">
          <h2 className="font-sequel text-[26px] sm:text-[32px] font-bold">Request security details.</h2>
          <p className="mt-4 max-w-2xl text-[17px] text-white/80">
            We will share the verified specifics relevant to your integrations and data.
          </p>
          <div className="mt-8">
            <CtaButton href="/order-flow-review" withArrow>
              Request security details
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
