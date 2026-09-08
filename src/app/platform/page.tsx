import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, Users, Clock, AlertCircle, RefreshCw, Link2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform — Order Operations for Custom-Order Businesses | CodSphere",
  description: "Guided intake, customer workspace, order timeline, exception detection, and system integrations. The platform that keeps orders moving from first click to finished order.",
  alternates: {
    canonical: "https://codsphere.com/platform",
  },
};

const capabilities = [
  {
    icon: MessageSquare,
    title: "Guided Intake",
    description: "Customers answer questions, upload files, and get quotes without back-and-forth emails. Complete orders arrive ready to work.",
    status: "Live",
    formerlyKnown: "CodChat capability",
  },
  {
    icon: Users,
    title: "Customer & Order Workspace",
    description: "One place to see customers, orders, and history. Staff can find what they need without digging through emails and spreadsheets.",
    status: "Live",
    formerlyKnown: "CodCRM capability",
  },
  {
    icon: Clock,
    title: "Order Timeline",
    description: "See every order's journey from intake to delivery. Know what's in design, in production, waiting for approval, and ready to ship.",
    status: "Live",
  },
  {
    icon: AlertCircle,
    title: "Exception Detection & Recovery",
    description: "Get alerts when orders stall, deadlines approach, or something needs attention. When problems happen, the system helps you fix them.",
    status: "In development",
  },
  {
    icon: Link2,
    title: "Integrations & Adapters",
    description: "Connect to the systems you already use. When something updates in one place, everyone sees it. Start read-only, expand from there.",
    status: "Live",
  },
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              The platform that keeps orders moving
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              One system for intake, tracking, and delivery. Built for shops where every order is different.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#14b8a6] to-[#0891b2] text-white text-lg font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Show Us Your Order Flow
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
              Platform capabilities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Functional labels for what the platform does — not product brands to choose between.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              const isLive = capability.status === "Live";
              return (
                <div
                  key={capability.title}
                  className={`flex flex-col md:flex-row gap-6 p-6 rounded-2xl border ${
                    isLive ? "bg-white border-gray-200" : "bg-gray-50 border-gray-100"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                    isLive ? "bg-[#0a1628]/5" : "bg-gray-200"
                  }`}>
                    <Icon className={`w-7 h-7 ${isLive ? "text-[#0a1628]" : "text-gray-500"}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-xl font-semibold ${isLive ? "text-[#0a1628]" : "text-gray-600"}`}>
                        {capability.title}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        isLive ? "bg-[#14b8a6]/10 text-[#14b8a6]" : "bg-gray-200 text-gray-600"
                      }`}>
                        {capability.status}
                      </span>
                    </div>
                    <p className={isLive ? "text-gray-600" : "text-gray-500"}>
                      {capability.description}
                    </p>
                    {capability.formerlyKnown && (
                      <p className="text-sm text-gray-400 mt-2">
                        {capability.formerlyKnown}
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
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
                One system. Multiple entry points.
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Whether you start with a storefront to sell online, order flow to track production, 
                or custom extensions to connect your systems — it all runs on the same platform.
              </p>
              <p className="text-gray-600">
                Add capabilities as you need them. Remove what you don't. The platform grows with your shop.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="font-semibold text-[#0a1628] mb-6">Entry points</h3>
              <div className="space-y-4">
                <Link href="/solutions/digital-storefront" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <span className="font-medium text-[#0a1628]">Digital Storefront</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
                <Link href="/solutions/order-flow" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <span className="font-medium text-[#0a1628]">Order Flow</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
                <Link href="/solutions/custom-extensions" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <span className="font-medium text-[#0a1628]">Custom Extensions</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing customers */}
      <section className="py-16 bg-[#0a1628]">
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
                href="https://app.codchat.com"
                className="text-white/80 hover:text-white text-sm border border-white/20 px-6 py-2 rounded-full transition-colors"
              >
                Sign in to CodChat →
              </a>
              <a
                href="https://app.codcrm.com"
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
          <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
            See how the platform handles your orders
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Show us an order that should have gone better. We'll walk you through how it would move through a system built for custom work.
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
