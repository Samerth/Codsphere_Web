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
    <section className="py-20 bg-white">
      <div className="container-wrapper">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Industries */}
          <div>
            <p className="text-[#0E7C86] font-medium mb-3">Who we work with</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2730] mb-4">
              Built for shops where every order is different
            </h2>
            <p className="text-[#1D2730]/60 text-lg mb-8">
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
                        ? "bg-[#16324A] text-white"
                        : "bg-[#F1F5F7] border border-[#1D2730]/5 hover:border-[#16324A]/20"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        industry.primary ? "bg-white/10" : "bg-[#16324A]/5"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          industry.primary ? "text-white" : "text-[#16324A]"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{industry.title}</h3>
                        {industry.primary && (
                          <span className="text-xs bg-[#0E7C86] text-white px-2 py-0.5 rounded-full">
                            Our focus
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-sm ${
                          industry.primary ? "text-white/70" : "text-[#1D2730]/60"
                        }`}
                      >
                        {industry.description}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform ${
                        industry.primary ? "text-white/60" : "text-[#1D2730]/40"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Qualifiers */}
          <div className="bg-[#F1F5F7] rounded-2xl p-8 border border-[#1D2730]/5">
            <h3 className="text-xl font-semibold text-[#1D2730] mb-6">
              CodSphere is a good fit when...
            </h3>
            <ul className="space-y-4">
              {qualifiers.map((qualifier) => (
                <li key={qualifier} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0E7C86] shrink-0 mt-0.5" />
                  <span className="text-[#1D2730]/80">{qualifier}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[#1D2730]/10">
              <p className="text-[#1D2730]/60 text-sm">
                Not sure if we're the right fit? Show us your order flow — 
                we'll tell you honestly if we can help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#0E7C86] font-medium mt-4 hover:gap-3 transition-all"
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
