import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Printer, CheckCircle, Truck, FileText, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Print & Sign — Order Operations for Print Shops | CodSphere",
  description: "Digital storefronts and order flow systems built for wide-format printing, vehicle wraps, banners, and sign manufacturing. From quote to delivery.",
  alternates: {
    canonical: "https://codsphere.com/industries/print-sign",
  },
};

const challenges = [
  {
    icon: FileText,
    title: "Every order is different",
    description: "Custom sizes, materials, quantities, finishes. No two jobs are the same, but your intake process tries to treat them like they are.",
  },
  {
    icon: Clock,
    title: "Files arrive separately from orders",
    description: "Email threads with artwork. Dropbox links. USB drives. By the time production starts, the original order is buried somewhere.",
  },
  {
    icon: Users,
    title: "Multiple people touch every job",
    description: "Sales, design, production, finishing, shipping. Each handoff is a chance for something to fall through the cracks.",
  },
  {
    icon: Truck,
    title: "Customers call to ask where their order is",
    description: "You know the job is somewhere in the shop. Finding exactly where takes longer than it should.",
  },
];

const solutions = [
  "Customers configure orders with the options that matter to your shop",
  "Files upload with the order, not in a separate email",
  "Orders flow into a timeline everyone can see",
  "Status updates go to customers automatically",
  "Exceptions surface before customers call",
];

const products = [
  "Wide-format printing",
  "Vehicle wraps",
  "Banners & signage",
  "Dimensional letters",
  "Architectural graphics",
  "Trade show displays",
  "Window graphics",
  "Wall murals",
];

export default function PrintSignPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 px-4 py-1.5 text-[#14b8a6] text-sm font-medium mb-6">
              <Printer className="w-4 h-4" />
              Our focus industry
            </div>
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Print & Sign
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Order operations for Canadian print and sign shops. Digital storefronts and order flow systems 
              built for wide-format printing, vehicle wraps, banners, and sign manufacturing.
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

      {/* Products we understand */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container-wrapper">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-gray-500 text-sm">We understand:</span>
            {products.map((product) => (
              <span
                key={product}
                className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200 text-gray-700"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
              We know the challenges
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Print and sign shops have specific pain points that generic software doesn't solve. 
              We started here because we understand the work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {challenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#f97316]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0a1628] mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 bg-[#0a1628]">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                How CodSphere helps print & sign shops
              </h2>
              <p className="text-white/70 text-lg mb-8">
                We build systems that match how print shops actually work — 
                not generic e-commerce or enterprise MIS that you'll fight with.
              </p>
              <ul className="space-y-4">
                {solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
                    <span className="text-white/80">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-semibold mb-4">What we're not</h3>
              <p className="text-white/60 mb-4">
                We're not trying to replace your full print MIS (shopVOX, Printavo, etc). 
                We complement those systems by solving the intake and order visibility problems they don't address well.
              </p>
              <p className="text-white/60">
                If you need job costing, production scheduling, and inventory management — 
                we can connect to those systems. But that's not our core focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects proof */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
              See our work with print & sign shops
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Proof Industries / Great West Graphics is our beachhead print & sign project — 
              currently in UAT with a full digital storefront and order flow integration.
            </p>
            <Link
              href="/projects/great-west-graphics"
              className="inline-flex items-center gap-2 text-[#14b8a6] font-medium hover:gap-3 transition-all"
            >
              View the Great West Graphics project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
            Run a print or sign shop?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Show us how orders move through your shop today. We'll show you how they could move through a system built for print.
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
