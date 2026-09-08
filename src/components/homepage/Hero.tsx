"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden -mt-20 sm:-mt-[88px] lg:-mt-[104px] flex items-center bg-[#16324A]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1D2730] via-[#16324A] to-[#16324A]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container-wrapper pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C86]/10 border border-[#0E7C86]/20 px-4 py-1.5 text-[#0E7C86] text-sm font-medium uppercase tracking-wider mb-6">
            For custom-order businesses
          </div>

          {/* Headline */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Sell custom work online.{" "}
            <span className="text-[#0E7C86]">Keep every order moving.</span>
          </h1>

          {/* Subhead */}
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            CodSphere builds the digital storefront your customers buy from and connects 
            the workflow your team uses to quote, approve, produce and deliver.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0E7C86] text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-[#0E7C86]/90 transition-colors"
            >
              Show us how an order works
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-white/5 transition-colors"
            >
              See our work
            </Link>
          </div>

          {/* Trust line */}
          <p className="text-white/50 text-sm">
            Vancouver-based. Built for workflows that do not fit a standard cart.
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#0E7C86]/10 to-transparent pointer-events-none" />
    </section>
  );
}
