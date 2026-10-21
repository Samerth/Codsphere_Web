import { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FAQ — What CodSphere is, who it's for, how it works | CodSphere",
  description:
    "Answers about CodSphere: custom-order commerce and order operations software from Vancouver, BC. Digital Storefront, Order Flow, Custom Extensions, CodChat and codCRM.",
  alternates: { canonical: "https://www.codsphere.com/faq" },
};

// Pricing Q&A intentionally omitted until the pricing story is decided.
const faqItems = [
  { q: "What is CodSphere?", a: "CodSphere is a Vancouver software company that helps businesses where every order is customized sell custom work online and track every job, from the first quote request to delivery." },
  { q: "Who is CodSphere for?", a: "Businesses whose customers need guidance before they buy and where no two orders match: print and sign shops, fabricators, kitchens and home, promo and apparel, and other made-to-order shops in Canada." },
  { q: "What does CodSphere include?", a: "Three layers. Digital Storefront (configure, upload files, request quotes, approve online), Order Flow (one timeline per job with stall alerts) and Custom Extensions (estimators, portals, integrations). CodChat and codCRM handle questions and leads." },
  { q: "Is CodSphere a replacement for shopVOX, Printavo or my MIS?", a: "No. CodSphere handles customer intake and order visibility, and can connect to your existing MIS. It isn't built for job costing, production scheduling or inventory." },
  { q: "How is CodSphere different from Shopify or a standard e-commerce cart?", a: "A standard cart sells fixed products. CodSphere is built for quotes, specs, artwork files, approvals and one-off jobs, so orders arrive complete." },
  { q: "Can my customers track their order status?", a: "Yes. Customers get automatic updates as their order moves through your stages, and you choose which stages they see." },
  { q: "What is CodChat?", a: "A website assistant that answers customer questions using only facts you approve, and hands ready-to-talk leads to your team in codCRM." },
  { q: "How do I get started?", a: "Book a free 30-minute order-flow map. Show us one order that should have gone better, and we'll walk it with you and say honestly whether CodSphere fits." },
  { q: "Where is CodSphere based?", a: "Vancouver, British Columbia. We work with businesses across Canada, mostly remotely. Contact: info@codsphere.ca, +1 604-906-2693." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
};

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd([["FAQ", "/faq"]])} />
      <section className="bg-black py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Frequently asked questions
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
            What CodSphere is, who it&apos;s for, and how to get started.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-wrapper max-w-3xl">
          <dl className="divide-y divide-black/10">
            {faqItems.map((i) => (
              <div key={i.q} className="py-6">
                <dt><h2 className="text-xl font-semibold text-black mb-2">{i.q}</h2></dt>
                <dd className="text-black/70 leading-relaxed">{i.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 font-medium">
              Book a free order-flow map
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
