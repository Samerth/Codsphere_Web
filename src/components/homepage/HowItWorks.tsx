"use client";

import { Search, Layers, Link2, BarChart3, Expand } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnose",
    description: "We map your current order flow — where orders come in, how they move through production, and where they stall.",
  },
  {
    icon: Layers,
    title: "Smallest valuable layer",
    description: "Start with what will make the biggest difference soonest. Usually that's getting orders into a system everyone can see.",
  },
  {
    icon: Link2,
    title: "Connect events",
    description: "Link your storefront to your production workflow. When an order moves, everyone who needs to know, knows.",
  },
  {
    icon: BarChart3,
    title: "Measure",
    description: "See where orders slow down. Track time from order to delivery. Understand your actual throughput.",
  },
  {
    icon: Expand,
    title: "Expand",
    description: "Add capabilities as you need them. More products, more automations, more integrations — on your timeline.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <p className="text-[#0E7C86] font-medium mb-3">How we work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2730] mb-4">
            We start with your order flow, not a feature list
          </h2>
          <p className="text-[#1D2730]/60 text-lg max-w-2xl mx-auto">
            Every shop works differently. We learn how yours works before we build anything.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#16324A]/10 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`inline-block bg-[#F1F5F7] rounded-2xl p-6 border border-[#1D2730]/5 ${
                        isEven ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-[#1D2730] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#1D2730]/60">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon node */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#16324A] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                    <span className="absolute -bottom-6 text-xs text-[#1D2730]/40 font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
