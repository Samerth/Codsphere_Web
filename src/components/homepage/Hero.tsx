"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden -mt-20 sm:-mt-[88px] lg:-mt-[104px] md:pt-[88px] lg:pt-[104px] pb-20 bg-black bg-gradient-to-r from-black to-[#0664a7]">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container-wrapper h-full flex flex-col justify-center pt-24 sm:pt-32 lg:pt-40">
        <div className="text-white max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-white/90 text-sm font-medium uppercase tracking-wider mb-6">
            Software for print & sign shops
          </div>

          {/* Headline */}
          <h1 className="font-sequel text-[28px] sm:text-[42px] lg:text-[52px] leading-tight font-bold mb-6">
            Websites and order tracking{" "}
            <span className="bg-gradient-to-r from-[#33FCFE] to-[#608bf3] bg-clip-text text-transparent">
              built for custom jobs.
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed text-white/90 mb-8 max-w-2xl">
            CodSphere helps print, sign, and similar shops take complete orders online 
            and see where every job is — from quote to delivery.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/contact">
              <button className="w-full sm:w-auto cursor-pointer rounded-full bg-gradient-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
                <div className="flex justify-center items-center gap-3 rounded-full px-6 py-3 bg-gradient-to-l from-[#33fbfe] to-[#010B66]">
                  <div className="bg-gradient-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  Show us your order flow
                </div>
              </button>
            </Link>
            <Link href="/projects">
              <button className="w-full sm:w-auto cursor-pointer rounded-full border-2 border-white text-white text-[15px] lg:text-[18px] flex justify-center items-center gap-3 px-6 py-3 hover:bg-white hover:text-black transition-colors">
                See storefronts and systems we've built
              </button>
            </Link>
          </div>

          {/* Trust line */}
          <p className="text-white/60 text-sm">
            Vancouver-based. Built for workflows that don't fit a standard cart.
          </p>
        </div>
      </div>
    </section>
  );
}
