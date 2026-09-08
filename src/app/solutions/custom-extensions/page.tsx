import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Puzzle, Link2, Zap, Database, Code, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Extensions — Build What You Need | CodSphere",
  description: "Integrations, automations, and workflows specific to how your shop runs. Built after paid discovery, connected to your order flow.",
  alternates: {
    canonical: "https://codsphere.com/solutions/custom-extensions",
  },
};

const features = [
  {
    icon: Link2,
    title: "Integrations",
    description: "Connect to the systems you already use — accounting, inventory, production scheduling, shipping. Data flows where it needs to go.",
  },
  {
    icon: Zap,
    title: "Automations",
    description: "Automate repetitive tasks. When an order hits a certain stage, things happen automatically — emails, assignments, status updates.",
  },
  {
    icon: Database,
    title: "Custom data",
    description: "Track what matters to your shop. Custom fields, custom reports, custom views that match how you actually work.",
  },
  {
    icon: Code,
    title: "Workflow logic",
    description: "Build rules that match your process. Different products, different workflows. Rush orders, repeat customers, special handling.",
  },
];

const examples = [
  "Connect to your accounting system so invoices create automatically",
  "Auto-assign orders to production based on product type",
  "Send customers a proof request when design is complete",
  "Update inventory when orders ship",
  "Route rush orders to a different workflow",
];

export default function CustomExtensionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 px-4 py-1.5 text-[#14b8a6] text-sm font-medium mb-6">
              When you need more
            </div>
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Custom Extensions
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Build what you need when standard features aren't enough. Integrations, automations, 
              and workflows specific to how your shop runs.
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

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="container-wrapper">
          <p className="text-gray-600 text-center">
            Custom extensions are built after paid discovery. We need to understand your order flow before we can extend it.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
              When standard isn't enough
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every shop has something unique about how they work. Custom extensions let you build exactly what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

      {/* Examples */}
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
                Examples of what we've built
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Custom extensions are always order-related. We don't build standalone tools — 
                we extend your order flow with capabilities specific to your shop.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <ul className="space-y-4">
                {examples.map((example) => (
                  <li key={example} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#0a1628]">
        <div className="container-wrapper">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Built after paid discovery
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Custom extensions start at CAD $20,000. Scope and pricing are determined during discovery — 
              we need to understand what you're building before we can quote it.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
              <h3 className="text-white font-semibold mb-4">How it works</h3>
              <ol className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#14b8a6]/20 text-[#14b8a6] text-sm font-medium flex items-center justify-center shrink-0">1</span>
                  <span>Start with a diagnostic or pilot to understand your order flow</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#14b8a6]/20 text-[#14b8a6] text-sm font-medium flex items-center justify-center shrink-0">2</span>
                  <span>Identify where custom functionality would make the biggest impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#14b8a6]/20 text-[#14b8a6] text-sm font-medium flex items-center justify-center shrink-0">3</span>
                  <span>Scope and quote the extension based on what you actually need</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#14b8a6]/20 text-[#14b8a6] text-sm font-medium flex items-center justify-center shrink-0">4</span>
                  <span>Build, test, and deploy connected to your order flow</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
            Have something specific in mind?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Tell us about the workflow you're trying to improve. We'll let you know if custom extensions are the right fit.
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
