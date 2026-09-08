"use client";

import { Search, FileText, CheckCircle, Factory, Truck } from "lucide-react";

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

export default function BrokenJourney() {
  return (
    <section className="py-20 bg-[#F1F5F7]">
      <div className="container-wrapper">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2730] mb-6">
            A custom order should not break between the website and the shop floor.
          </h2>
          <p className="text-lg text-[#1D2730]/70 leading-relaxed">
            Customers need guidance before they buy. Your team needs complete details after they do. 
            When forms, email, spreadsheets, supplier portals and production boards do not agree, 
            people re-enter information, chase status and discover delays too late.
          </p>
        </div>

        {/* Failure moments timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-[#D96C3F]/30 -translate-y-1/2" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {failureMoments.map((moment, index) => {
              const Icon = moment.icon;
              return (
                <div key={moment.stage} className="text-center relative">
                  {/* Node */}
                  <div className="relative z-10 w-14 h-14 mx-auto mb-3 rounded-full bg-white border-2 border-[#D96C3F]/30 flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-[#D96C3F]" />
                  </div>
                  <h3 className="font-semibold text-[#1D2730] mb-1">{moment.stage}</h3>
                  <p className="text-sm text-[#1D2730]/60">{moment.description}</p>
                  
                  {/* Step number */}
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#D96C3F] text-white text-xs flex items-center justify-center font-medium">
                    {index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-[#1D2730]/70 bg-white rounded-xl p-6 shadow-sm border border-[#1D2730]/5">
            Each handoff is a chance for information to get lost, duplicated, or delayed. 
            CodSphere connects these stages so orders flow without friction.
          </p>
        </div>
      </div>
    </section>
  );
}
