"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden -mt-20 sm:-mt-[88px] lg:-mt-[104px] flex items-center bg-[#0a1628]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0a1628] to-[#0f2847]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container-wrapper pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Beachhead tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 px-4 py-1.5 text-[#14b8a6] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
            Built for Canadian print & sign shops
          </div>

          {/* Main headline */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Sell custom work online.{" "}
            <span className="text-[#14b8a6]">Keep every order moving.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            Commerce and order operations for custom-order businesses. 
            From first click to finished order.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#14b8a6] to-[#0891b2] text-white text-lg font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Show Us Your Order Flow
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-white/5 transition-colors"
            >
              See Storefronts & Systems We've Built
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#14b8a6]/10 to-transparent pointer-events-none" />
    </section>
  );
}
