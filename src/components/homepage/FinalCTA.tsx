"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#F1F5F7]">
      <div className="container-wrapper">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D2730] mb-6 leading-tight">
            Show us one order that should have gone better.
          </h2>
          <p className="text-[#1D2730]/70 text-lg mb-8 max-w-xl mx-auto">
            In 30 minutes, we will map the customer entry, the handoffs and where visibility breaks. 
            If CodSphere is not the right fit, we will say so.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0E7C86] text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-[#0E7C86]/90 transition-colors"
            >
              Show us your order flow
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-[#1D2730]/50 text-sm mt-6">
            Free diagnostic conversation. No pressure, no generic demo.
          </p>
        </div>
      </div>
    </section>
  );
}
