import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Rocket, GitBranch, Puzzle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Clear Pricing, No Surprises | CodSphere",
  description: "Order flow diagnostic, digital storefront, order flow pilot, and custom extensions. Ranges reflect project complexity — we give you a fixed quote after discovery.",
  alternates: {
    canonical: "https://codsphere.com/pricing",
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
    cta: "Build a storefront",
  },
  {
    icon: GitBranch,
    title: "Order Flow Pilot",
    description: "Timeline views, exception alerts, status updates. Start seeing where orders are and what's stuck.",
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
    cta: "Start a pilot",
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
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
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
                      ? "bg-[#0a1628] border-[#0a1628]"
                      : "bg-gray-50 border-gray-100"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        offer.featured ? "bg-white/10" : "bg-[#0a1628]/5"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          offer.featured ? "text-white" : "text-[#0a1628]"
                        }`}
                      />
                    </div>
                    <div>
                      <h2
                        className={`text-xl font-semibold ${
                          offer.featured ? "text-white" : "text-[#0a1628]"
                        }`}
                      >
                        {offer.title}
                      </h2>
                      <p
                        className={`text-sm ${
                          offer.featured ? "text-white/60" : "text-gray-500"
                        }`}
                      >
                        {offer.ideal}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`mb-6 ${
                      offer.featured ? "text-white/70" : "text-gray-600"
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
                          offer.featured ? "text-white/60" : "text-gray-500"
                        }`}
                      >
                        Investment
                      </span>
                      <span
                        className={`font-semibold ${
                          offer.featured ? "text-white" : "text-[#0a1628]"
                        }`}
                      >
                        {offer.price}
                      </span>
                    </div>
                    {offer.monthly && (
                      <div className="flex justify-between items-baseline mb-2">
                        <span
                          className={`text-sm ${
                            offer.featured ? "text-white/60" : "text-gray-500"
                          }`}
                        >
                          Ongoing
                        </span>
                        <span className={offer.featured ? "text-white/80" : "text-gray-700"}>
                          {offer.monthly}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-baseline">
                      <span
                        className={`text-sm ${
                          offer.featured ? "text-white/60" : "text-gray-500"
                        }`}
                      >
                        Timeline
                      </span>
                      <span className={offer.featured ? "text-white/80" : "text-gray-700"}>
                        {offer.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h3
                      className={`text-sm font-medium mb-3 ${
                        offer.featured ? "text-white/80" : "text-gray-700"
                      }`}
                    >
                      Includes:
                    </h3>
                    <ul className="space-y-2">
                      {offer.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              offer.featured ? "text-[#14b8a6]" : "text-[#14b8a6]"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              offer.featured ? "text-white/70" : "text-gray-600"
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
                        offer.featured ? "text-white/50" : "text-gray-400"
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
                        ? "bg-gradient-to-r from-[#14b8a6] to-[#0891b2] text-white hover:opacity-90"
                        : "bg-[#0a1628] text-white hover:bg-[#0a1628]/90"
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

      {/* FAQ-style notes */}
      <section className="py-16 bg-gray-50">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="font-semibold text-[#0a1628] mb-2">Why ranges instead of fixed prices?</h3>
              <p className="text-gray-600">
                Every shop is different. A storefront for a sign shop with 10 products is different from one with 200 configurable items. 
                We give you a fixed quote after understanding your specific needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0a1628] mb-2">What's included in the monthly fee?</h3>
              <p className="text-gray-600">
                Hosting, maintenance, support, and platform access. You're not paying for seats — 
                you're paying for the system that keeps your orders moving.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0a1628] mb-2">Do I need to start with the diagnostic?</h3>
              <p className="text-gray-600">
                It's recommended but not required for storefront or pilot projects. 
                For custom extensions, we need to understand your order flow first — the diagnostic is how we do that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
            Ready to talk specifics?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Show us your order flow. We'll give you a clear scope and fixed quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#14b8a6] to-[#0891b2] text-white text-lg font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Show Us Your Order Flow
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
