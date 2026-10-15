"use client";

import { Search, FileText, CheckCircle, Factory, Truck, Layers, Link2, BarChart3, Expand } from "lucide-react";

const failureMoments = [
  {
    icon: Search,
    stage: "Browse",
    description: "Customer cannot find or configure the product they need",
  },
  {
    icon: FileText,
    stage: "Quote",
    description: "Incomplete requests lead to back-and-forth emails",
  },
  {
    icon: CheckCircle,
    stage: "Approve",
    description: "Proofs and approvals stuck in inboxes",
  },
  {
    icon: Factory,
    stage: "Produce",
    description: "Production starts without complete information",
  },
  {
    icon: Truck,
    stage: "Deliver",
    description: "Customers call to ask where their order is",
  },
];

const howWeWork = [
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

export default function BrokenJourney() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container-wrapper">
        {/* Problem: Where orders break */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            A custom order should not break between the website and the work.
          </h2>
          <p className="text-lg text-black/70 leading-relaxed">
            Customers need guidance before they buy. Your team needs complete details after they do. 
            When forms, email, spreadsheets, supplier portals and production boards do not agree, 
            people re-enter information, chase status and discover delays too late.
          </p>
        </div>

        {/* Failure moments timeline */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-orange-400/30 -translate-y-1/2" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {failureMoments.map((moment, index) => {
              const Icon = moment.icon;
              return (
                <div key={moment.stage} className="text-center relative">
                  {/* Node */}
                  <div className="relative z-10 w-14 h-14 mx-auto mb-3 rounded-full bg-white border-2 border-orange-400/30 flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-black mb-1">{moment.stage}</h3>
                  <p className="text-sm text-black/60">{moment.description}</p>
                  
                  {/* Step number */}
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-medium">
                    {index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transition */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-black/70 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            Each handoff is a chance for information to get lost, duplicated, or delayed. 
            CodSphere connects these stages so orders flow without friction.
          </p>
        </div>

        {/* Solution: How we work */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-cyan-600 font-medium mb-3">How we work</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              We start with your order flow, not a feature list
            </h3>
            <p className="text-black/60 max-w-xl mx-auto">
              Every shop works differently. We learn how yours works before we build anything.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {howWeWork.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-black flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-black/40 font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-semibold text-black mt-1 mb-2 text-sm">
                    {step.title}
                  </h4>
                  <p className="text-black/60 text-xs leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
