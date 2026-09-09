"use client";

import { MessageSquare, Users, Clock, AlertCircle, Link2 } from "lucide-react";

const uiStates = [
  {
    icon: MessageSquare,
    title: "Guided Intake",
    description: "Customers answer questions, upload files, and get quotes without back-and-forth emails.",
    status: "LIVE",
  },
  {
    icon: Users,
    title: "Customer & Order Workspace",
    description: "One place to see customers, orders, and history. Staff can find what they need without digging through emails.",
    status: "LIVE",
  },
  {
    icon: Clock,
    title: "Order Timeline",
    description: "See every order's journey from intake to delivery. Know what's in design, in production, and ready to ship.",
    status: "PRODUCT DIRECTION",
  },
  {
    icon: AlertCircle,
    title: "Exception Detection & Recovery",
    description: "Get alerts when orders stall, deadlines approach, or something needs attention. The system helps you fix problems.",
    status: "PRODUCT DIRECTION",
  },
  {
    icon: Link2,
    title: "Integrations & Adapters",
    description: "Connect to the systems you already use. When something updates in one place, everyone sees it.",
    status: "PRODUCT DIRECTION",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    "LIVE": "bg-cyan-400/10 text-cyan-600",
    "UAT": "bg-orange-400/10 text-orange-500",
    "PILOT": "bg-black/10 text-black",
    "PRODUCT DIRECTION": "bg-gray-200 text-gray-500",
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
          <p className="text-cyan-600 font-medium mb-3">Platform capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            See the order, not just the data
          </h2>
          <p className="text-black/60 text-lg max-w-2xl mx-auto">
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
                    ? "bg-gray-100 border-gray-200"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                {/* Status badge */}
                <div className="mb-4">
                  <StatusBadge status={state.status} />
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isProductDirection ? "bg-gray-200" : "bg-black/5"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isProductDirection ? "text-gray-400" : "text-black"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`font-semibold mb-2 ${
                    isProductDirection ? "text-gray-500" : "text-black"
                  }`}
                >
                  {state.title}
                </h3>
                <p className={isProductDirection ? "text-gray-400 text-sm" : "text-black/60 text-sm"}>
                  {state.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Features labelled PRODUCT DIRECTION are in active development. Prefer labelled mocks over unverified "live" screenshots.
        </p>
      </div>
    </section>
  );
}
