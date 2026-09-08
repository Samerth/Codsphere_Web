"use client";

import { MessageSquare, Clock, AlertCircle, User, RefreshCw } from "lucide-react";

const uiStates = [
  {
    icon: MessageSquare,
    title: "Guided Intake",
    description: "Customers answer questions, upload files, and get quotes without back-and-forth emails.",
    status: "LIVE",
  },
  {
    icon: Clock,
    title: "Order Timeline",
    description: "See every order's status at a glance. Know what's in design, in production, and ready to ship.",
    status: "LIVE",
  },
  {
    icon: AlertCircle,
    title: "Exception Detection",
    description: "Get alerts when orders stall, deadlines approach, or approvals are waiting.",
    status: "LIVE",
  },
  {
    icon: User,
    title: "Owner & Action View",
    description: "Every order has an owner. Every stuck order has a next action. Nothing falls through.",
    status: "PRODUCT DIRECTION",
  },
  {
    icon: RefreshCw,
    title: "Recovery Workflows",
    description: "When something goes wrong, the system helps you fix it — not just report it.",
    status: "PRODUCT DIRECTION",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    "LIVE": "bg-[#0E7C86]/10 text-[#0E7C86]",
    "UAT": "bg-[#D96C3F]/10 text-[#D96C3F]",
    "PILOT": "bg-[#16324A]/10 text-[#16324A]",
    "PRODUCT DIRECTION": "bg-[#1D2730]/10 text-[#1D2730]/70",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full font-medium ${styles[status as keyof typeof styles] || styles["PRODUCT DIRECTION"]}`}>
      {status}
    </span>
  );
}

export default function PlatformProof() {
  return (
    <section className="py-20 bg-white">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <p className="text-[#0E7C86] font-medium mb-3">Platform capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2730] mb-4">
            See the order, not just the data
          </h2>
          <p className="text-[#1D2730]/60 text-lg max-w-2xl mx-auto">
            Five views that show you what matters: where orders are, what's stuck, 
            and what needs attention now.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {uiStates.map((state) => {
            const Icon = state.icon;
            const isProductDirection = state.status === "PRODUCT DIRECTION";

            return (
              <div
                key={state.title}
                className={`relative p-6 rounded-2xl border ${
                  isProductDirection
                    ? "bg-[#F1F5F7] border-[#1D2730]/10"
                    : "bg-white border-[#1D2730]/10 shadow-sm"
                }`}
              >
                {/* Status badge */}
                <div className="mb-4">
                  <StatusBadge status={state.status} />
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isProductDirection ? "bg-[#1D2730]/5" : "bg-[#16324A]/5"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isProductDirection ? "text-[#1D2730]/50" : "text-[#16324A]"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`font-semibold mb-2 ${
                    isProductDirection ? "text-[#1D2730]/70" : "text-[#1D2730]"
                  }`}
                >
                  {state.title}
                </h3>
                <p className={isProductDirection ? "text-[#1D2730]/50 text-sm" : "text-[#1D2730]/60 text-sm"}>
                  {state.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[#1D2730]/50 text-sm mt-8">
          Features labelled PRODUCT DIRECTION are in active development. Prefer labelled mocks over unverified "live" screenshots.
        </p>
      </div>
    </section>
  );
}
