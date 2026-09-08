import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GitBranch, Clock, AlertCircle, Bell, Users, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Order Flow — Keep Every Order Moving | CodSphere",
  description: "Timeline views, exception alerts, and status updates. See where orders are, what's stuck, and what needs attention. From first click to finished order.",
  alternates: {
    canonical: "https://codsphere.com/solutions/order-flow",
  },
};

const features = [
  {
    icon: Clock,
    title: "Order timeline",
    description: "See every order's journey at a glance. Know what's in design, in production, waiting for approval, and ready to ship.",
  },
  {
    icon: AlertCircle,
    title: "Exception detection",
    description: "Get alerts when orders stall, deadlines approach, or something needs attention. Problems surface before customers call.",
  },
  {
    icon: Bell,
    title: "Status updates",
    description: "Customers get updates when their order moves. Fewer status calls, happier customers, more time for work.",
  },
  {
    icon: Users,
    title: "Owner assignment",
    description: "Every order has an owner. Every stuck order has a next action. Nothing falls through the cracks.",
  },
  {
    icon: GitBranch,
    title: "System connections",
    description: "Connect the tools you already use. When something updates in one place, everyone sees it.",
  },
];

const benefits = [
  "Know where every order is without asking",
  "Catch problems before they become emergencies",
  "Customers stop calling to ask for status",
  "Staff spend time on work, not tracking down information",
];

export default function OrderFlowPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 px-4 py-1.5 text-[#14b8a6] text-sm font-medium mb-6">
              Core Platform
            </div>
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Order Flow
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Keep every order moving from intake to delivery. Timeline views, exception alerts, 
              status updates for customers, and the handoffs between your systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#14b8a6] to-[#0891b2] text-white text-lg font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Show Us Your Order Flow
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="py-16 bg-gray-50">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1628] mb-4">
              Orders come in. Then they disappear into spreadsheets, emails, and whiteboards.
            </h2>
            <p className="text-gray-600 text-lg">
              Until someone asks "where's my order?" — and then the scramble starts. 
              Checking with design. Checking with production. Finding the email thread.
              Order flow puts all of that in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
              See the order, not just the data
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Order flow shows you what matters: where orders are, what's stuck, and what needs attention now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0a1628]/5 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0a1628]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0a1628] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0a1628]">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                What changes when you can see the work
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#14b8a6] shrink-0 mt-0.5" />
                    <span className="text-white/80 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-semibold mb-4">Typical engagement</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-white/60">Investment</span>
                  <span className="text-white font-medium">CAD $7,500–$15,000</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-white/60">Ongoing</span>
                  <span className="text-white">$1,000–$2,000/mo</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-white/60">Timeline</span>
                  <span className="text-white">3–6 weeks</span>
                </div>
              </div>
              <Link
                href="/pricing"
                className="text-[#14b8a6] text-sm font-medium mt-6 inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                See full pricing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
            Ready to see where your orders actually are?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Show us how orders move through your shop today. We'll show you what it could look like when everything's in one place.
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
