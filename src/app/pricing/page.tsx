import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Rocket, GitBranch, Puzzle, CheckCircle, ChevronDown } from "lucide-react";
import TrackPageView from "@/components/analytics/TrackPageView";

const pricingFaqItems = [
  {
    question: "What's included in the monthly fee?",
    answer: "Hosting, maintenance, support, and platform access. You're not paying for seats — you're paying for the system that keeps your orders moving. This includes uptime monitoring, security updates, and access to our support team.",
  },
  {
    question: "Do I need to start with the diagnostic?",
    answer: "For storefronts and order flow pilots, the diagnostic is recommended — it helps us scope accurately and often pays for itself by identifying quick wins. For custom extensions, the diagnostic is required — we need to understand your order flow before we can build on it.",
  },
  {
    question: "How long does implementation take?",
    answer: "Diagnostics take 1–2 weeks. Digital storefronts typically take 4–8 weeks. Order flow pilots run 3–6 weeks. Custom extensions vary based on scope. We'll give you a specific timeline after the diagnostic.",
  },
  {
    question: "What if CodSphere isn't the right fit?",
    answer: "We'll tell you. The diagnostic is designed to identify whether CodSphere can help your specific situation. If we're not the right fit, we'll say so and point you toward alternatives that might work better for your needs.",
  },
];

const pricingFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const pricingBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.codsphere.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: "https://www.codsphere.com/pricing",
    },
  ],
};

export const metadata: Metadata = {
  title: "Pricing — Quoted per project. No surprises. | CodSphere",
  description: "Order flow diagnostic, digital storefront, order flow pilot, and custom extensions. Fixed quote after discovery — scope, timeline, and what's included.",
  alternates: {
    canonical: "https://www.codsphere.com/pricing",
  },
  openGraph: {
    title: "Pricing — Quoted per project. No surprises. | CodSphere",
    description: "Order flow diagnostic, digital storefront, order flow pilot, and custom extensions. Fixed quote after discovery.",
    url: "https://www.codsphere.com/pricing",
    images: [
      {
        url: "https://www.codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Quoted per project. No surprises. | CodSphere",
    description: "Order flow diagnostic, digital storefront, order flow pilot, and custom extensions. Fixed quote after discovery.",
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
};

const offers = [
  {
    icon: Search,
    title: "Order Flow Diagnostic",
    description: "We map your current order flow, identify bottlenecks, and recommend the smallest change that will make the biggest difference.",
    price: "Quoted",
    monthly: null,
    timeline: "1–2 weeks",
    ideal: "First step for any shop",
    includes: [
      "Current state order flow mapping",
      "Bottleneck identification",
      "Recommendations document",
      "30-minute review call",
    ],
    cta: "Book a free 30-min order-flow map",
  },
  {
    icon: Rocket,
    title: "Digital Storefront Sprint",
    description: "A storefront built for your products — quote requests, file uploads, approvals, and payments. Connected to your order flow.",
    price: "Quoted",
    monthly: "Monthly support included",
    timeline: "4–8 weeks",
    ideal: "Selling online or streamlining intake",
    includes: [
      "Custom storefront design & build",
      "Product configurator",
      "File upload & intake forms",
      "Quote & approval workflow",
      "Payment integration",
      "Order flow connection",
      "Training & documentation",
    ],
    featured: true,
    cta: "Book a free 30-min order-flow map",
  },
  {
    icon: GitBranch,
    title: "Order Flow Pilot",
    description: "Timeline views, exception alerts, status updates. Start seeing where orders are and what's stuck. Not a full MIS/ERP replacement.",
    price: "Quoted",
    monthly: "Monthly support included",
    timeline: "3–6 weeks",
    ideal: "Shops with 5+ people touching orders",
    includes: [
      "Order timeline setup",
      "Status tracking configuration",
      "Exception alert rules",
      "Customer status notifications",
      "Basic integrations",
      "Staff training",
    ],
    cta: "Book a free 30-min order-flow map",
  },
  {
    icon: Puzzle,
    title: "Custom Extensions",
    description: "Integrations, automations, and workflows specific to how your shop runs. Built after paid diagnostic.",
    price: "Quoted after diagnostic",
    monthly: "Scoped after diagnostic",
    timeline: "Varies by scope",
    ideal: "When standard features aren't enough",
    includes: [
      "Custom integration development",
      "Automation workflows",
      "Custom data & reporting",
      "Workflow logic",
      "Ongoing support",
    ],
    note: "Requires diagnostic first",
    cta: "Book a free 30-min order-flow map",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <TrackPageView type="pricing" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingBreadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-black py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Quoted per project. No surprises.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Every engagement starts with understanding your order flow. 
              We'll give you a fixed quote — scope, timeline, and what's included — after discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Ladder */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="container-wrapper">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-black text-center mb-8">How engagements work</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="font-semibold text-black mb-2">Free 30-min order-flow map</h3>
                <p className="text-black/60 text-sm">We walk through one order together. You'll see where it stalls and whether CodSphere can help.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="font-semibold text-black mb-2">Paid diagnostic</h3>
                <p className="text-black/60 text-sm">We map your full order flow, identify bottlenecks, and recommend the smallest change that makes the biggest difference. You get a fixed quote for the next step.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="font-semibold text-black mb-2">Sprint or pilot</h3>
                <p className="text-black/60 text-sm">Storefront, order flow, or custom extension — built to the scope we agreed on. Monthly support included.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {offers.map((offer) => {
              const Icon = offer.icon;
              return (
                <div
                  key={offer.title}
                  className={`rounded-2xl p-6 border ${
                    offer.featured
                      ? "bg-black border-black"
                      : "bg-gray-100 border-gray-200"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        offer.featured ? "bg-white/10" : "bg-black/5"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          offer.featured ? "text-white" : "text-black"
                        }`}
                      />
                    </div>
                    <div>
                      <h2
                        className={`text-xl font-semibold ${
                          offer.featured ? "text-white" : "text-black"
                        }`}
                      >
                        {offer.title}
                      </h2>
                      <p
                        className={`text-sm ${
                          offer.featured ? "text-white/60" : "text-black/50"
                        }`}
                      >
                        {offer.ideal}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`mb-6 ${
                      offer.featured ? "text-white/70" : "text-black/60"
                    }`}
                  >
                    {offer.description}
                  </p>

                  {/* Pricing */}
                  <div
                    className={`py-4 border-y mb-6 ${
                      offer.featured ? "border-white/10" : "border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <span
                        className={`text-sm ${
                          offer.featured ? "text-white/60" : "text-black/50"
                        }`}
                      >
                        Investment
                      </span>
                      <span
                        className={`font-semibold ${
                          offer.featured ? "text-white" : "text-black"
                        }`}
                      >
                        {offer.price}
                      </span>
                    </div>
                    {offer.monthly && (
                      <div className="flex justify-between items-baseline mb-2">
                        <span
                          className={`text-sm ${
                            offer.featured ? "text-white/60" : "text-black/50"
                          }`}
                        >
                          Ongoing
                        </span>
                        <span className={offer.featured ? "text-white/80" : "text-black/70"}>
                          {offer.monthly}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-baseline">
                      <span
                        className={`text-sm ${
                          offer.featured ? "text-white/60" : "text-black/50"
                        }`}
                      >
                        Timeline
                      </span>
                      <span className={offer.featured ? "text-white/80" : "text-black/70"}>
                        {offer.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h3
                      className={`text-sm font-medium mb-3 ${
                        offer.featured ? "text-white/80" : "text-black/70"
                      }`}
                    >
                      Includes:
                    </h3>
                    <ul className="space-y-2">
                      {offer.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              offer.featured ? "text-cyan-400" : "text-cyan-600"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              offer.featured ? "text-white/70" : "text-black/60"
                            }`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Note */}
                  {offer.note && (
                    <p
                      className={`text-xs mb-4 ${
                        offer.featured ? "text-white/50" : "text-black/40"
                      }`}
                    >
                      {offer.note}
                    </p>
                  )}

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-medium transition-all ${
                      offer.featured
                        ? "bg-gradient-to-r from-[#33FCFE] to-[#608bf3] text-white hover:opacity-90"
                        : "bg-black text-white hover:bg-black/90"
                    }`}
                  >
                    {offer.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-100 scroll-mt-32 sm:scroll-mt-28">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto pt-4">
            <h2 className="text-2xl font-bold text-black mb-8 text-center">
              Common pricing questions
            </h2>
            <div className="space-y-4">
              {pricingFaqItems.map((item, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl border border-black/10 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-black pr-4">{item.question}</h3>
                    <ChevronDown className="w-5 h-5 text-black/40 shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-black/60">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to talk specifics?
          </h2>
          <p className="text-black/60 text-lg mb-8 max-w-xl mx-auto">
            Start with a free 30-minute order-flow map. We'll give you a fixed quote — scope, timeline, and what's included.
          </p>
          <Link href="/contact">
            <button className="cursor-pointer rounded-full bg-gradient-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
              <div className="flex justify-center items-center gap-3 rounded-full px-8 py-4 bg-gradient-to-l from-[#33fbfe] to-[#010B66]">
                <div className="bg-gradient-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                  <ArrowRight className="w-5 h-5" />
                </div>
                Book a free 30-min order-flow map
              </div>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
