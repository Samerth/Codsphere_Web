"use client";

import { MessageSquare, Clock, AlertCircle, User, RefreshCw } from "lucide-react";

const uiStates = [
  {
    icon: MessageSquare,
    title: "Guided Intake",
    description: "Customers answer questions, upload files, and get quotes without back-and-forth emails.",
    status: "Live capability",
  },
  {
    icon: Clock,
    title: "Order Timeline",
    description: "See every order's status at a glance. Know what's in design, in production, and ready to ship.",
    status: "Live capability",
  },
  {
    icon: AlertCircle,
    title: "Exception Detection",
    description: "Get alerts when orders stall, deadlines approach, or approvals are waiting.",
    status: "Live capability",
  },
  {
    icon: User,
    title: "Owner & Action View",
    description: "Every order has an owner. Every stuck order has a next action. Nothing falls through.",
    status: "Product direction",
  },
  {
    icon: RefreshCw,
    title: "Recovery Workflows",
    description: "When something goes wrong, the system helps you fix it — not just report it.",
    status: "Product direction",
  },
];

export default function PlatformProof() {
  return (
    <section className="py-20 bg-white">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <p className="text-[#14b8a6] font-medium mb-3">Platform capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            See the order, not just the data
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Five views that show you what matters: where orders are, what's stuck, 
            and what needs attention now.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {uiStates.map((state) => {
            const Icon = state.icon;
            const isProductDirection = state.status === "Product direction";

            return (
              <div
                key={state.title}
                className={`relative p-6 rounded-2xl border ${
                  isProductDirection
                    ? "bg-gray-50 border-gray-200"
                    : "bg-white border-gray-100 shadow-sm"
                }`}
              >
                {/* Status badge */}
                <div className="mb-4">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      isProductDirection
                        ? "bg-gray-200 text-gray-600"
                        : "bg-[#14b8a6]/10 text-[#14b8a6]"
                    }`}
                  >
                    {state.status}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isProductDirection ? "bg-gray-200" : "bg-[#0a1628]/5"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isProductDirection ? "text-gray-500" : "text-[#0a1628]"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`font-semibold mb-2 ${
                    isProductDirection ? "text-gray-600" : "text-[#0a1628]"
                  }`}
                >
                  {state.title}
                </h3>
                <p className={isProductDirection ? "text-gray-500 text-sm" : "text-gray-600 text-sm"}>
                  {state.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Features marked "Product direction" are in active development based on customer feedback.
        </p>
      </div>
    </section>
  );
}
