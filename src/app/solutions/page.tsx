import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessagesSquare, PackageCheck, PanelsTopLeft, Wrench } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Products", "Sell Custom Work & Keep Orders Moving"),
  description:
    "CodSphere software for custom-order businesses: a storefront to sell from, a workbench to run every order, and custom extensions when your stack is missing a piece.",
  openGraph: {
    title: formatMetaTitle("Products", "Sell Custom Work & Keep Orders Moving"),
    description:
      "CodSphere software for custom-order businesses: a storefront to sell from, a workbench to run every order, and custom extensions when your stack is missing a piece.",
    url: "https://codsphere.com/solutions",
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
    title: formatMetaTitle("Products", "Sell Custom Work & Keep Orders Moving"),
    description:
      "CodSphere software for custom-order businesses: a storefront to sell from, a workbench to run every order, and custom extensions when your stack is missing a piece.",
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
  alternates: {
    canonical: "https://codsphere.com/solutions",
  },
};

const products = [
  {
    name: "Sortify",
    description:
      "Digitize mailroom intake, package tracking, recipient notifications, and pickup records.",
    href: "/sortify",
    cta: "Explore Sortify",
    icon: PackageCheck,
  },
  {
    name: "CodChat",
    description:
      "Guided website chat that helps buyers of custom work ask, configure and start an order.",
    href: "/cod-chat",
    cta: "View CodChat pricing",
    icon: MessagesSquare,
  },
  {
    name: "CodCRM",
    description:
      "One workbench to quote, track and keep every custom order moving — contacts, follow-ups, automation and reporting.",
    href: "/cod-crm",
    cta: "Explore CodCRM",
    icon: PanelsTopLeft,
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="relative -mt-20 overflow-hidden bg-[#010B66] pt-20 text-white sm:-mt-[88px] sm:pt-[88px] lg:-mt-[104px] lg:pt-[104px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, #33FCFE 0%, transparent 35%), radial-gradient(circle at 10% 90%, #0664a7 0%, transparent 40%)",
          }}
        />
        <div className="container-wrapper relative py-more">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#33FCFE]">
            For custom-order businesses
          </p>
          <h1 className="mt-4 max-w-4xl text-[38px] font-semibold leading-tight sm:text-[52px] lg:text-[68px]">
            Software to sell custom work and keep every order moving.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
            A storefront your customers buy from, a workbench to manage every order, and custom
            extensions when your stack is missing a piece.
          </p>
        </div>
      </section>

      <section className="container-wrapper py-more">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article
                key={product.name}
                className="flex h-full flex-col rounded-3xl border border-black/10 p-7 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg md:p-9"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#33FCFE] to-[#010B66] text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold">{product.name}</h2>
                <p className="mt-3 flex-1 text-base leading-7 text-black/70">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="group mt-7 inline-flex items-center gap-2 font-medium text-[#010B66]"
                >
                  {product.cta}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F4F7FF]">
        <div className="container-wrapper py-more">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-black p-8 text-white md:flex-row md:items-center md:p-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#33FCFE]">
                <Wrench className="h-6 w-6" />
                <span className="font-medium uppercase tracking-wider">Custom Software</span>
              </div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Missing a piece of your order flow?
              </h2>
              <p className="mt-3 text-lg leading-8 text-white/75">
                The estimator, portal, supplier connection or production screen your standard stack
                is missing — built around the same order flow.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-black"
            >
              Discuss a missing workflow
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
