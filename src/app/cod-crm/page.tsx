import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Workflow, BarChart3, ShieldCheck, Boxes, Bell } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("CodCRM", "CRM Built for Growing Businesses"),
  description:
    "CodCRM is CodSphere's easy-to-use, fully customizable CRM for small and medium businesses. Track leads, deals and follow-ups, automate tasks, get real-time insights, and integrate billing and inventory in one place.",
  alternates: {
    canonical: "https://codsphere.com/cod-crm",
  },
};

const features = [
  {
    icon: Users,
    title: "Lead, Deal & Follow-up Tracking",
    desc: "Capture every lead and move deals through your pipeline with clear, at-a-glance stages so nothing slips through the cracks.",
  },
  {
    icon: Workflow,
    title: "Task Automation & Reminders",
    desc: "Automate repetitive work and get timely reminders for follow-ups, so your team spends time selling instead of chasing.",
  },
  {
    icon: BarChart3,
    title: "Real-time Reports & Insights",
    desc: "Understand performance as it happens with live dashboards and reports on sales, customers, and team activity.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based Team Access",
    desc: "Give each team member the right level of access with granular, role-based permissions that keep your data secure.",
  },
  {
    icon: Boxes,
    title: "Billing & Inventory Integration",
    desc: "Connect billing, inventory, and more to run your day-to-day operations from a single, unified platform.",
  },
  {
    icon: Bell,
    title: "Fully Customizable",
    desc: "Tailor fields, stages, and workflows to match exactly how your business works — no rigid, one-size-fits-all setup.",
  },
];

const highlights = [
  "Easy to use",
  "Customer-friendly",
  "Fully customizable",
  "Built to simplify day-to-day operations",
];

export default function CodCrmPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative bg-[#010B66] text-white overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, #33FCFE 0%, transparent 70%)" }}
        />
        <div className="container-wrapper pt-40 pb-20 md:pt-48 md:pb-28 relative">
          <div className="max-w-full md:max-w-[820px]">
            <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-[13px] md:text-[14px] font-light text-white/80">
              A CodSphere Product
            </span>
            <h1 className="mt-5 text-[36px] md:text-[64px] leading-[42px] md:leading-[70px] font-semibold">
              CodCRM
            </h1>
            <p className="mt-4 text-[18px] md:text-[24px] leading-7 md:leading-9 font-light text-white/90">
              A ready-to-use CRM for small and medium businesses. Manage customers, track deals,
              automate the busywork, and see what&apos;s working — all in one place.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-[14px] md:text-[15px] font-light text-white/90"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/start-free-trial"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[16px] md:text-[18px] font-medium text-black transition-transform hover:scale-[1.02]"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/70 px-6 py-3 text-[16px] md:text-[18px] font-medium text-white transition-colors hover:bg-white/10"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full">
        <div className="container-wrapper py-more">
          <div className="max-w-full md:max-w-[720px]">
            <h2 className="text-[28px] md:text-[40px] leading-[34px] md:leading-[48px] font-semibold">
              Everything you need to manage customers
            </h2>
            <p className="mt-3 text-[16px] md:text-[18px] leading-6 md:leading-7 text-black/70">
              CodCRM brings your leads, deals, tasks, and reporting together so you can run your
              business from a single, simple platform.
            </p>
          </div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-black/10 p-6 md:p-7 transition-shadow hover:shadow-lg"
                >
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white"
                    style={{ background: "linear-gradient(135deg, #33FCFE 0%, #010B66 100%)" }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-[19px] md:text-[22px] leading-7 font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[15px] md:text-[16px] leading-6 md:leading-7 text-black/70">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="w-full bg-[#F6F8FF]">
        <div className="container-wrapper py-more">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-[26px] md:text-[36px] leading-[32px] md:leading-[44px] font-semibold">
                Built for small &amp; medium business owners
              </h2>
              <p className="mt-4 text-[16px] md:text-[18px] leading-6 md:leading-7 text-black/70">
                From gathering real business requirements to testing and customization, CodCRM was
                built with and for local business owners in Canada and India — but it&apos;s open to
                anyone who needs a better way to manage their customers. It&apos;s constantly
                improved based on real user feedback.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-[16px] md:text-[18px] font-medium text-[var(--brand-blue)] hover:underline"
                >
                  Get a free trial or demo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-black/10 p-7 md:p-9">
              <ul className="flex flex-col gap-4">
                {[
                  "Centralize customers, leads, and deals",
                  "Automate follow-ups and daily tasks",
                  "Make decisions with real-time reporting",
                  "Scale access safely as your team grows",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: "linear-gradient(135deg, #33FCFE 0%, #010B66 100%)" }}
                    >
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="text-[15px] md:text-[17px] leading-6 md:leading-7 text-black/80">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product versus bespoke CRM */}
      <section className="w-full bg-black text-white">
        <div className="container-wrapper py-more">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-medium uppercase tracking-wider text-[#33FCFE]">
                Product or custom build
              </p>
              <h2 className="mt-3 text-[28px] font-semibold leading-tight md:text-[42px]">
                Start with CodCRM. Build bespoke when your operations require it.
              </h2>
            </div>
            <div>
              <p className="text-[17px] leading-8 text-white/75">
                CodCRM is our ready-to-use product for common sales and customer-management
                workflows. If you need a CRM engineered around unique data, approvals, integrations,
                or industry processes, CodSphere also provides bespoke CRM development.
              </p>
              <Link
                href="/services/crm-development"
                className="group mt-6 inline-flex items-center gap-2 font-medium text-[#33FCFE] hover:underline"
              >
                Explore custom CRM development
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
