import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Upload, FileCheck, CreditCard, MessageSquare, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Storefront — Make Custom Work Easier to Buy | CodSphere",
  description: "Guide customers through configuration, collect the right files and specs, and let them approve and pay without email chains. CAD $10k–$25k + support.",
  alternates: {
    canonical: "https://codsphere.com/solutions/digital-storefront",
  },
};

const features = [
  {
    icon: ShoppingBag,
    title: "Product configurator",
    description: "Let customers build their order with the options that matter — size, material, quantity, finishes. No back-and-forth emails.",
  },
  {
    icon: Upload,
    title: "File uploads",
    description: "Accept artwork, specs, and reference files right with the order. No separate email threads to track.",
  },
  {
    icon: MessageSquare,
    title: "Guided intake",
    description: "Ask the right questions before they submit. Get complete orders the first time, not after three emails.",
  },
  {
    icon: FileCheck,
    title: "Quote & approval flow",
    description: "Send quotes customers can approve online. Track what's pending, what's approved, what's been revised.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Collect deposits or full payment. Integrate with your accounting. No separate invoicing system needed.",
  },
];

const benefits = [
  "Orders arrive complete, not in pieces",
  "Customers see status without calling",
  "Staff spend time on work, not data entry",
  "Everything connects to your production workflow",
];

export default function DigitalStorefrontPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#16324A] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C86]/10 border border-[#0E7C86]/20 px-4 py-1.5 text-[#0E7C86] text-sm font-medium mb-6">
              Solution
            </div>
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Make custom work easier to buy.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Guide customers through configuration, collect the right files and specs, 
              and let them approve and pay without email chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0E7C86] text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-[#0E7C86]/90 transition-colors"
              >
                Get a storefront review
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="py-16 bg-[#F1F5F7]">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2730] mb-4">
              Your website takes orders. Your shop needs complete orders.
            </h2>
            <p className="text-[#1D2730]/70 text-lg">
              Generic e-commerce wasn't built for custom work. Contact forms lead to email chains. 
              Quote requests arrive missing half the details. Files get lost in inboxes.
              A storefront built for custom orders fixes that.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1D2730] mb-4">
              Everything you need to take orders online
            </h2>
            <p className="text-[#1D2730]/70 text-lg max-w-2xl mx-auto">
              Not a template you'll fight with. A storefront built around how you actually sell.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-[#F1F5F7] rounded-2xl p-6 border border-[#1D2730]/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#16324A]/5 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#16324A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1D2730] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#1D2730]/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#16324A]">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                What changes when intake is solved
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0E7C86] shrink-0 mt-0.5" />
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
                  <span className="text-white font-medium">CAD $10,000–$25,000</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-white/60">Ongoing</span>
                  <span className="text-white font-medium">CAD $300–$750/mo</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-white/60">Timeline</span>
                  <span className="text-white">4–8 weeks</span>
                </div>
              </div>
              <Link
                href="/pricing"
                className="text-[#0E7C86] text-sm font-medium mt-6 inline-flex items-center gap-1 hover:gap-2 transition-all"
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
          <h2 className="text-3xl font-bold text-[#1D2730] mb-4">
            Ready to make custom work easier to buy?
          </h2>
          <p className="text-[#1D2730]/70 text-lg mb-8 max-w-xl mx-auto">
            Show us how you take orders today. We'll show you how a storefront built for custom work could make it easier.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#0E7C86] text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-[#0E7C86]/90 transition-colors"
          >
            Get a storefront review
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
