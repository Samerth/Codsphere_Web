"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container-wrapper">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-6 leading-tight">
            Show us one order that should have gone better.
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Tell us about an order that got stuck, took too long, or fell through the cracks. 
            We'll show you how it could have moved through a system built for custom work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#14b8a6] to-[#0891b2] text-white text-lg font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Show Us Your Order Flow
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Free diagnostic conversation. No pressure, no generic demo.
          </p>
        </div>
      </div>
    </section>
  );
}
