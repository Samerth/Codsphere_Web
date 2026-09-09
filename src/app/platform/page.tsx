import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, Users, Clock, AlertCircle, Link2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform — Order Operations for Custom-Order Businesses | CodSphere",
  description: "Guided intake, customer workspace, order timeline, exception detection, and system integrations. The platform that keeps orders moving from first click to finished order.",
  alternates: {
    canonical: "https://codsphere.com/platform",
  },
};

const capabilities: {
  id?: string;
  icon: typeof MessageSquare;
  title: string;
  description: string;
  status: string;
  formerlyKnown?: string;
  note?: string;
}[] = [
  {
    id: "customer-intake",
    icon: MessageSquare,
    title: "Guided Intake",
    description: "Customers answer questions, upload files, and get quotes without back-and-forth emails. Complete orders arrive ready to work.",
    status: "LIVE",
    formerlyKnown: "CodChat capability",
  },
  {
    icon: Users,
    title: "Customer & Order Workspace",
    description: "One place to see customers, orders, and history. Staff can find what they need without digging through emails and spreadsheets.",
    status: "LIVE",
    formerlyKnown: "CodCRM capability",
  },
  {
    icon: Clock,
    title: "Order Timeline",
    description: "See every order's journey from intake to delivery. Know what's in design, in production, waiting for approval, and ready to ship.",
    status: "PRODUCT DIRECTION",
    note: "VERIFY: Timeline feature scope and availability",
  },
  {
    icon: AlertCircle,
    title: "Exception Detection & Recovery",
    description: "Get alerts when orders stall, deadlines approach, or something needs attention. When problems happen, the system helps you fix them.",
    status: "PRODUCT DIRECTION",
  },
  {
    icon: Link2,
    title: "Integrations & Adapters",
    description: "Connect to the systems you already use. When something updates in one place, everyone sees it. Start read-only, expand from there.",
    status: "PRODUCT DIRECTION",
    note: "VERIFY: Integration availability varies by system",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "LIVE": "bg-cyan-400/10 text-cyan-600",
    "UAT": "bg-orange-400/10 text-orange-500",
    "PILOT": "bg-black/10 text-black",
    "PRODUCT DIRECTION": "bg-gray-200 text-gray-500",
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${styles[status] || styles["PRODUCT DIRECTION"]}`}>
      {status}
    </span>
  );
}

export default function PlatformPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-black py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              The platform that keeps orders moving
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              One system for intake, tracking, and delivery. Built for shops where every order is different.
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
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Platform capabilities
            </h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto">
              Functional labels for what the platform does — not product brands to choose between.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              const isLive = capability.status === "LIVE";
              return (
                <div
                  key={capability.title}
                  id={capability.id}
                  className={`flex flex-col md:flex-row gap-6 p-6 rounded-2xl border ${
                    isLive ? "bg-white border-gray-200" : "bg-gray-100 border-gray-200"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                    isLive ? "bg-black/5" : "bg-gray-200"
                  }`}>
                    <Icon className={`w-7 h-7 ${isLive ? "text-black" : "text-gray-400"}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-xl font-semibold ${isLive ? "text-black" : "text-gray-500"}`}>
                        {capability.title}
                      </h3>
                      <StatusBadge status={capability.status} />
                    </div>
                    <p className={isLive ? "text-black/60" : "text-gray-400"}>
                      {capability.description}
                    </p>
                    {capability.formerlyKnown && (
                      <p className="text-sm text-gray-400 mt-2">
                        {capability.formerlyKnown}
                      </p>
                    )}
                    {capability.note && (
                      <p className="text-sm text-orange-500/70 mt-2">
                        {capability.note}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it connects */}
      <section className="py-20 bg-gray-100">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                One system. Multiple entry points.
              </h2>
              <p className="text-black/60 text-lg mb-6">
                Whether you start with a storefront to sell online, order flow to track production, 
                or custom extensions to connect your systems — it all runs on the same platform.
              </p>
              <p className="text-black/60">
                Add capabilities as you need them. Remove what you don't. The platform grows with your shop.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="font-semibold text-black mb-6">Entry points</h3>
              <div className="space-y-4">
                <Link href="/solutions/digital-storefront" className="flex items-center justify-between p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                  <span className="font-medium text-black">Digital Storefront</span>
                  <ArrowRight className="w-4 h-4 text-black/40" />
                </Link>
                <Link href="/solutions/order-flow" className="flex items-center justify-between p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                  <span className="font-medium text-black">Order Flow</span>
                  <ArrowRight className="w-4 h-4 text-black/40" />
                </Link>
                <Link href="/solutions/custom-extensions" className="flex items-center justify-between p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                  <span className="font-medium text-black">Custom Extensions</span>
                  <ArrowRight className="w-4 h-4 text-black/40" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing customers */}
      <section className="py-16 bg-black">
        <div className="container-wrapper">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Already using CodChat or CodCRM?
            </h2>
            <p className="text-white/60 mb-6">
              Those capabilities are part of this platform. Your data and settings are all here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://codsphere.chat"
                className="text-white/80 hover:text-white text-sm border border-white/20 px-6 py-2 rounded-full transition-colors"
              >
                Sign in to CodChat →
              </a>
              <a
                href="https://codcrm.com"
                className="text-white/80 hover:text-white text-sm border border-white/20 px-6 py-2 rounded-full transition-colors"
              >
                Sign in to CodCRM →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            See how the platform handles your orders
          </h2>
          <p className="text-black/60 text-lg mb-8 max-w-xl mx-auto">
            Show us an order that should have gone better. We'll walk you through how it would move through a system built for custom work.
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
