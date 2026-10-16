import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform — Order Operations for Custom-Order Businesses | CodSphere",
  description: "Guided intake, customer workspace, order timeline, exception detection, and system integrations. The platform that keeps orders moving from first click to finished order.",
  alternates: {
    canonical: "https://www.codsphere.com/platform",
  },
  openGraph: {
    title: "Platform — Order Operations for Custom-Order Businesses | CodSphere",
    description: "Guided intake, customer workspace, order timeline, exception detection, and system integrations. The platform that keeps orders moving.",
    url: "https://www.codsphere.com/platform",
    images: [
      {
        url: "https://www.codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform — Order Operations for Custom-Order Businesses | CodSphere",
    description: "Guided intake, customer workspace, order timeline, exception detection, and system integrations.",
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
};

const capabilities: {
  id?: string;
  icon: typeof MessageSquare;
  title: string;
  description: string;
  status: string;
}[] = [
  {
    id: "customer-intake",
    icon: MessageSquare,
    title: "Guided Intake",
    description: "Customers answer questions, upload files, and get quotes without back-and-forth emails. Complete orders arrive ready to work.",
    status: "LIVE",
  },
  {
    icon: Users,
    title: "Customer & Order Workspace",
    description: "One place to see customers, orders, and history. Staff can find what they need without digging through emails and spreadsheets.",
    status: "LIVE",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "LIVE": "bg-cyan-400/10 text-cyan-600",
    "UAT": "bg-orange-400/10 text-orange-500",
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${styles[status] || "bg-black/10 text-black"}`}>
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
                  Book a free 30-min order-flow map
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
              return (
                <div
                  key={capability.title}
                  id={capability.id}
                  className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border bg-white border-gray-200"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-black/5">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-black">
                        {capability.title}
                      </h3>
                      <StatusBadge status={capability.status} />
                    </div>
                    <p className="text-black/60">
                      {capability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-gray-500 mt-8">
            More capabilities are in development. <a href="/contact" className="text-cyan-600 hover:underline">Ask us.</a>
          </p>
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
                Book a free 30-min order-flow map
              </div>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
