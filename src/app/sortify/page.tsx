import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  ClipboardCheck,
  PackageCheck,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Sortify", "Digital Mailroom Management"),
  description: "Digitize mailroom intake, package tracking, recipient notifications, and pickup records.",
  openGraph: {
    title: formatMetaTitle("Sortify", "Digital Mailroom Management"),
    description:
      "Digitize mailroom intake, package tracking, recipient notifications, and pickup records.",
    url: "https://codsphere.com/sortify",
    images: [
      {
        url: "https://codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: formatMetaTitle("Sortify", "Digital Mailroom Management"),
    description:
      "Digitize mailroom intake, package tracking, recipient notifications, and pickup records.",
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
  alternates: {
    canonical: "https://codsphere.com/sortify",
  },
};

const features = [
  {
    icon: ScanLine,
    title: "Faster package intake",
    description:
      "Log incoming deliveries with barcode-ready workflows and keep package records organized from arrival.",
  },
  {
    icon: BellRing,
    title: "Automated notifications",
    description:
      "Keep recipients informed with email and SMS notifications as deliveries move through the mailroom.",
  },
  {
    icon: ClipboardCheck,
    title: "Digital proof of pickup",
    description:
      "Create a clear chain of custody with status history and digital pickup confirmation.",
  },
  {
    icon: BarChart3,
    title: "Operational visibility",
    description:
      "Give administrators and staff real-time dashboards for package status, activity, and reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based access",
    description:
      "Support administrators, mailroom staff, and recipients with access designed for each role.",
  },
  {
    icon: PackageCheck,
    title: "Multi-site ready",
    description:
      "Use a cloud-based, multi-tenant foundation designed for corporate offices and residential buildings.",
  },
];

const outcomes = [
  "Replace paper logs and disconnected spreadsheets with one shared delivery record.",
  "Reduce repetitive check-in, notification, and pickup administration.",
  "Improve visibility for mailroom teams and package recipients.",
  "Maintain an auditable history from intake through collection.",
];

export default function SortifyProductPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="relative -mt-20 overflow-hidden bg-black pt-20 text-white sm:-mt-[88px] sm:pt-[88px] lg:-mt-[104px] lg:pt-[104px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, #33FCFE 0%, transparent 30%), radial-gradient(circle at 20% 100%, #010B66 0%, transparent 45%)",
          }}
        />
        <div className="container-wrapper relative py-more">
          <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-sm text-white/80">
            A CodSphere Product
          </span>
          <h1 className="mt-5 max-w-4xl text-[40px] font-semibold leading-tight sm:text-[56px] lg:text-[72px]">
            Sortify brings every mailroom delivery into focus.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
            Digitize mailroom intake, package tracking, recipient notifications, and pickup records.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#33FCFE] to-[#0664a7] px-6 py-3 font-medium text-white"
            >
              Request a Sortify demo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/case-studies/sortify"
              className="inline-flex items-center rounded-full border-2 border-white/70 px-6 py-3 font-medium text-white hover:bg-white/10"
            >
              Read the Sortify case study
            </Link>
          </div>
        </div>
      </section>

      <section className="container-wrapper py-more">
        <div className="max-w-3xl">
          <p className="font-medium uppercase tracking-wider text-[#010B66]">Core capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            A connected workflow from arrival to pickup.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="rounded-3xl border border-black/10 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#33FCFE] to-[#010B66] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 leading-7 text-black/70">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F4F7FF]">
        <div className="container-wrapper py-more">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-medium uppercase tracking-wider text-[#010B66]">
                Business outcomes
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Less manual coordination. More delivery confidence.
              </h2>
              <p className="mt-4 text-lg leading-8 text-black/70">
                Sortify is designed for teams moving away from manual logging toward a visible,
                consistent, and scalable mailroom process.
              </p>
            </div>
            <ul className="space-y-4 rounded-3xl bg-white p-7 shadow-sm md:p-9">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <PackageCheck className="mt-1 h-5 w-5 shrink-0 text-[#010B66]" />
                  <span className="leading-7 text-black/80">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-3xl bg-[#010B66] p-7 text-white md:p-10">
            <div>
              <h3 className="text-2xl font-semibold">See how Sortify was developed.</h3>
              <p className="mt-2 text-white/75">
                Explore the project phases, capabilities, and operational results in the case study.
              </p>
            </div>
            <Link
              href="/case-studies/sortify"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black"
            >
              View case study
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
