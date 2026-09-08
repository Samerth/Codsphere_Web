"use client";

import Link from "next/link";
import { ArrowRight, Printer, Shirt, Factory, CheckCircle } from "lucide-react";

const industries = [
  {
    icon: Printer,
    title: "Print & Sign",
    description: "Wide-format, vehicle wraps, banners, dimensional signs, architectural graphics",
    href: "/industries/print-sign",
    primary: true,
  },
  {
    icon: Shirt,
    title: "Promo & Apparel",
    description: "Screen printing, embroidery, promotional products, corporate merchandise",
    href: "/industries/print-sign",
    primary: false,
  },
  {
    icon: Factory,
    title: "Custom Fabrication",
    description: "Metal work, woodworking, CNC, laser cutting, prototyping",
    href: "/industries/print-sign",
    primary: false,
  },
];

const qualifiers = [
  "5+ people touch each job before it ships",
  "Order status lives in more than one place",
  "Customers call to ask where their order is",
  "You've outgrown spreadsheets but MIS feels like overkill",
];

export default function IndustryFit() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wrapper">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Industries */}
          <div>
            <p className="text-[#14b8a6] font-medium mb-3">Who we work with</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
              Built for shops where every order is different
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We started with Canadian print and sign shops because we know the work. 
              The same patterns apply anywhere custom orders need to flow from sale to delivery.
            </p>

            <div className="space-y-4">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Link
                    key={industry.title}
                    href={industry.href}
                    className={`group flex items-start gap-4 p-4 rounded-xl transition-all ${
                      industry.primary
                        ? "bg-[#0a1628] text-white"
                        : "bg-white border border-gray-200 hover:border-[#0a1628]/20"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        industry.primary ? "bg-white/10" : "bg-[#0a1628]/5"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          industry.primary ? "text-white" : "text-[#0a1628]"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{industry.title}</h3>
                        {industry.primary && (
                          <span className="text-xs bg-[#14b8a6] text-white px-2 py-0.5 rounded-full">
                            Our focus
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-sm ${
                          industry.primary ? "text-white/70" : "text-gray-600"
                        }`}
                      >
                        {industry.description}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform ${
                        industry.primary ? "text-white/60" : "text-gray-400"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Qualifiers */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-[#0a1628] mb-6">
              CodSphere is a good fit when...
            </h3>
            <ul className="space-y-4">
              {qualifiers.map((qualifier) => (
                <li key={qualifier} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
                  <span className="text-gray-700">{qualifier}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                Not sure if we're the right fit? Show us your order flow — 
                we'll tell you honestly if we can help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#14b8a6] font-medium mt-4 hover:gap-3 transition-all"
              >
                Start a conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
