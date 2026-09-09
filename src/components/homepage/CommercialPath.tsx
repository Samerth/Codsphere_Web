"use client";

import Link from "next/link";
import { ArrowRight, Search, Rocket, GitBranch, Puzzle } from "lucide-react";

const offers = [
  {
    icon: Search,
    title: "Order Flow Diagnostic",
    description: "We map your current order flow, identify bottlenecks, and recommend the smallest change that will make the biggest difference.",
    price: "CAD $1,500–$2,500",
    timeline: "1–2 weeks",
    ideal: "First step for any shop",
  },
  {
    icon: Rocket,
    title: "Digital Storefront Sprint",
    description: "A storefront built for your products — quote requests, file uploads, approvals, and payments. Connected to your order flow.",
    price: "CAD $10,000–$25,000",
    monthly: "CAD $300–$750/mo",
    timeline: "4–8 weeks",
    ideal: "Selling online or streamlining intake",
  },
  {
    icon: GitBranch,
    title: "Order Flow Pilot",
    description: "Timeline views, exception alerts, status updates. Start seeing where orders are and what's stuck.",
    price: "CAD $7,500–$15,000",
    monthly: "+ $1,000–$2,000/mo",
    timeline: "3–6 weeks",
    ideal: "Shops with 5+ people touching orders",
  },
  {
    icon: Puzzle,
    title: "Custom Extensions",
    description: "Integrations, automations, and workflows specific to how your shop runs. Built after paid discovery.",
    price: "CAD $20,000+",
    monthly: "Scoped after discovery",
    timeline: "Varies",
    ideal: "When standard features aren't enough",
  },
];

export default function CommercialPath() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-medium mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Clear pricing. No surprises.
          </h2>
          <p className="text-black/60 text-lg max-w-2xl mx-auto">
            Every engagement starts with understanding your order flow. 
            Ranges reflect project complexity — we'll give you a fixed quote after discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.title}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-black/50">{offer.ideal}</p>
                  </div>
                </div>

                <p className="text-black/60 mb-4">{offer.description}</p>

                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-black/50 text-sm">Investment</span>
                    <span className="font-semibold text-black">{offer.price}</span>
                  </div>
                  {offer.monthly && (
                    <div className="flex justify-between items-baseline">
                      <span className="text-black/50 text-sm">Ongoing</span>
                      <span className="text-black/70">{offer.monthly}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-baseline">
                    <span className="text-black/50 text-sm">Timeline</span>
                    <span className="text-black/70">{offer.timeline}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:gap-3 transition-all"
          >
            See full pricing details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
