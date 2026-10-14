"use client";

import { MessageSquare, Users } from "lucide-react";

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
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    "LIVE": "bg-cyan-400/10 text-cyan-600",
    "UAT": "bg-orange-400/10 text-orange-500",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full font-medium ${styles[status as keyof typeof styles] || "bg-black/10 text-black"}`}>
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

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {uiStates.map((state) => {
            const Icon = state.icon;

            return (
              <div
                key={state.title}
                className="relative p-6 rounded-2xl border bg-white border-gray-200 shadow-sm"
              >
                {/* Status badge */}
                <div className="mb-4">
                  <StatusBadge status={state.status} />
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-black/5">
                  <Icon className="w-6 h-6 text-black" />
                </div>

                {/* Content */}
                <h3 className="font-semibold mb-2 text-black">
                  {state.title}
                </h3>
                <p className="text-black/60 text-sm">
                  {state.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 mt-8">
          More capabilities are in development. <a href="/contact" className="text-cyan-600 hover:underline">Ask us.</a>
        </p>
      </div>
    </section>
  );
}
