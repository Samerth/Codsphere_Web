import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag, GitBranch, Puzzle } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — Digital Storefront, Order Flow, Custom Extensions | CodSphere",
  description: "Commerce and order operations for custom-order businesses. Digital storefronts, order flow management, and custom extensions. From first click to finished order.",
  alternates: {
    canonical: "https://codsphere.com/solutions",
  },
};

const solutions = [
  {
    icon: ShoppingBag,
    title: "Digital Storefront",
    description: "Sell custom work online with a storefront built for your products. Quote requests, file uploads, approvals, and payments — all in one place.",
    href: "/solutions/digital-storefront",
    highlight: "Entry point",
    price: "CAD $10k–$25k + $300–$750/mo",
  },
  {
    icon: GitBranch,
    title: "Order Flow",
    description: "Keep every order moving from intake to delivery. Timeline views, exception alerts, status updates for customers, and the handoffs between your systems.",
    href: "/solutions/order-flow",
    highlight: "Core platform",
    price: "CAD $7.5k–$15k + $1k–$2k/mo",
  },
  {
    icon: Puzzle,
    title: "Custom Extensions",
    description: "Build what you need when standard features aren't enough. Integrations, automations, and workflows specific to how your shop runs.",
    href: "/solutions/custom-extensions",
    highlight: "When you need more",
    price: "CAD $20k+ after paid discovery",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Solutions for custom-order businesses
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Start where you need. Expand as you grow. Most shops start with a storefront, 
              add order flow as volume grows, then extend with custom features.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#14b8a6]/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#0a1628]/5 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#0a1628]" />
                    </div>
                    <span className="text-xs text-[#14b8a6] bg-[#14b8a6]/10 px-3 py-1 rounded-full">
                      {solution.highlight}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#0a1628] mb-3">
                    {solution.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="pt-4 border-t border-gray-200 mb-6">
                    <span className="text-sm text-gray-500">Starting at</span>
                    <p className="text-[#0a1628] font-medium">{solution.price}</p>
                  </div>

                  <div className="flex items-center gap-2 text-[#14b8a6] font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How they connect */}
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
              One brand. Three layers.
            </h2>
            <p className="text-gray-600 text-lg">
              All three solutions share the same foundation. Start with one, add the others when you need them. 
              Everything connects.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#14b8a6]/10 flex items-center justify-center mx-auto mb-2">
                  <ShoppingBag className="w-6 h-6 text-[#14b8a6]" />
                </div>
                <span className="text-sm font-medium text-[#0a1628]">Storefront</span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-300 rotate-90 md:rotate-0" />
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#0a1628] flex items-center justify-center mx-auto mb-2">
                  <GitBranch className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-[#0a1628]">Order Flow</span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-300 rotate-90 md:rotate-0" />
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#14b8a6]/10 flex items-center justify-center mx-auto mb-2">
                  <Puzzle className="w-6 h-6 text-[#14b8a6]" />
                </div>
                <span className="text-sm font-medium text-[#0a1628]">Extensions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
            Not sure where to start?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Show us your order flow. We'll tell you which solution makes the most sense for where you are today.
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
