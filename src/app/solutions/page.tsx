import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessagesSquare, PackageCheck, PanelsTopLeft, Wrench } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Products", "Software for Better Business Operations"),
  description:
    "Explore CodSphere products: Sortify for digital mailrooms, CodChat for website lead capture, and CodCRM for customer and sales management.",
  alternates: {
    canonical: "https://codsphere.com/solutions",
  },
};

const products = [
  {
    name: "Sortify",
    description:
      "Digitize package intake, recipient notifications, tracking, and pickup records in one cloud-based mailroom workflow.",
    href: "/sortify",
    cta: "Explore Sortify",
    icon: PackageCheck,
  },
  {
    name: "CodChat",
    description:
      "Add AI-powered conversations to your website to qualify visitors and capture enquiries around the clock.",
    href: "/cod-chat",
    cta: "View CodChat pricing",
    icon: MessagesSquare,
  },
  {
    name: "CodCRM",
    description:
      "Bring leads, deals, follow-ups, automation, and reporting into an easy-to-use CRM for growing businesses.",
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
            CodSphere Products
          </p>
          <h1 className="mt-4 max-w-4xl text-[38px] font-semibold leading-tight sm:text-[52px] lg:text-[68px]">
            Practical software for the work that keeps your business moving.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
            Choose a ready-to-use CodSphere product, or work with our team to build custom software
            around your unique operations.
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
                Need software built around your business?
              </h2>
              <p className="mt-3 text-lg leading-8 text-white/75">
                We design and develop bespoke web, mobile, CRM, ERP, and automation systems when an
                off-the-shelf product is not the right fit.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-black"
            >
              Book a project consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
