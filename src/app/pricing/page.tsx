import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Rocket, GitBranch, Puzzle, CheckCircle, ChevronDown } from "lucide-react";
import TrackPageView from "@/components/analytics/TrackPageView";

const pricingFaqItems = [
  {
    question: "Why ranges instead of fixed prices?",
    answer: "Every shop is different. A storefront for a shop with 10 products is different from one with 200 configurable items. We give you a fixed quote after understanding your specific needs during the diagnostic or discovery phase.",
  },
  {
    question: "What's included in the monthly fee?",
    answer: "Hosting, maintenance, support, and platform access. You're not paying for seats — you're paying for the system that keeps your orders moving. This includes uptime monitoring, security updates, and access to our support team.",
  },
  {
    question: "Do I need to start with the diagnostic?",
    answer: "It's recommended but not required for storefront or pilot projects. For custom extensions, we need to understand your order flow first — the diagnostic is how we do that. The diagnostic often pays for itself by identifying quick wins.",
  },
  {
    question: "How long does implementation take?",
    answer: "Diagnostics take 1–2 weeks. Digital storefronts typically take 4–8 weeks. Order flow pilots run 3–6 weeks. Custom extensions vary based on scope. We'll give you a specific timeline after discovery.",
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
  title: "Pricing — Clear Pricing, No Surprises | CodSphere",
  description: "Order flow diagnostic, digital storefront, order flow pilot, and custom extensions. Ranges reflect project complexity — we give you a fixed quote after discovery.",
  alternates: {
    canonical: "https://www.codsphere.com/pricing",
  },
  openGraph: {
    title: "Pricing — Clear Pricing, No Surprises | CodSphere",
    description: "Order flow diagnostic, digital storefront, order flow pilot, and custom extensions. Fixed quotes after discovery.",
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
    title: "Pricing — Clear Pricing, No Surprises | CodSphere",
    description: "Order flow diagnostic, digital storefront, order flow pilot, and custom extensions. Fixed quotes after discovery.",
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
};

const offers = [
  {
    icon: Search,
    title: "Order Flow Diagnostic",
    description: "We map your current order flow, identify bottlenecks, and recommend the smallest change that will make the biggest difference.",
    price: "CAD $1,500–$2,500",
    monthly: null,
    timeline: "1–2 weeks",
    ideal: "First step for any shop",
    includes: [
      "Current state order flow mapping",
      "Bottleneck identification",
      "Recommendations document",
      "30-minute review call",
    ],
    cta: "Start with a diagnostic",
  },
  {
    icon: Rocket,
    title: "Digital Storefront Sprint",
    description: "A storefront built for your products — quote requests, file uploads, approvals, and payments. Connected to your order flow.",
    price: "CAD $10,000–$25,000",
    monthly: "$300–$750/mo",
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
    cta: "Get a storefront review",
  },
  {
    icon: GitBranch,
    title: "Order Flow Pilot",
    description: "Timeline views, exception alerts, status updates. Start seeing where orders are and what's stuck. Not a full MIS/ERP replacement.",
    price: "CAD $7,500–$15,000",
    monthly: "$1,000–$2,000/mo",
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
    cta: "Map a stalled order",
  },
  {
    icon: Puzzle,
    title: "Custom Extensions",
    description: "Integrations, automations, and workflows specific to how your shop runs. Built after paid discovery.",
    price: "CAD $20,000+",
    monthly: "Scoped after discovery",
    timeline: "Varies by scope",
    ideal: "When standard features aren't enough",
    includes: [
      "Custom integration development",
      "Automation workflows",
      "Custom data & reporting",
      "Workflow logic",
      "Ongoing support",
    ],
    note: "Requires diagnostic or pilot first",
    cta: "Discuss custom work",
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
              Clear pricing. No surprises.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Every engagement starts with understanding your order flow. 
              Ranges reflect project complexity — we'll give you a fixed quote after discovery.
            </p>
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
      <section id="faq" className="py-16 bg-gray-100 scroll-mt-28">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
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
            Show us your order flow. We'll give you a clear scope and fixed quote.
          </p>
          <Link href="/contact">
            <button className="cursor-pointer rounded-full bg-gradient-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
              <div className="flex justify-center items-center gap-3 rounded-full px-8 py-4 bg-gradient-to-l from-[#33fbfe] to-[#010B66]">
                <div className="bg-gradient-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                  <ArrowRight className="w-5 h-5" />
                </div>
                Show us your order flow
              </div>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
