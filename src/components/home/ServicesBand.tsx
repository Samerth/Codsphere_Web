"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Showcase() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        {/* Header */}
        <div className="text-center">
          <p className="font-damion text-[35px] leading-[45px] text-[#D3D3D3]">
            Codsphere
          </p>
          <h2 className="mt-0 mx-auto font-medium text-black text-[40px] leading-[52px] max-w-[778px] font-sequel">
            Crafting digital experiences and products for inspiring brand across worldwide
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="relative mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Column */}
            <div className="flex flex-col">
              {/* Left Image */}
              <figure className="relative w-full max-w-[383px] h-[277px] overflow-hidden rounded-[15px] shadow-[4px_6px_11.9px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/home/case-studies-1.jpg"
                  alt="Case preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 383px"
                  priority
                />
              </figure>
              
              {/* 04+ KPI */}
              <div className="mt-[170px]">
                <div className="flex items-start gap-4">
                  <span className="text-[25px] italic leading-[32px] text-[#D3D3D3] font-sequel font-light">
                    04+
                  </span>
                  <p className="text-[25px] leading-[32px] text-black font-sequel font-medium max-w-[360px]">
                    Year of of building, breaking, fixing, and scaling digital systems
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col items-center">
              {/* 150+ KPI */}
              <div className="flex items-start gap-4 mb-[126px]">
                <span className="text-[25px] italic leading-[32px] text-[#D3D3D3] font-sequel font-light">
                  150+
                </span>
                <p className="text-[25px] leading-[32px] text-black font-sequel font-medium">
                  Websites built and<br />managed
                </p>
              </div>
              
              {/* Phone Mockup */}
              <figure className="relative w-[67px] h-[137px] rounded-[15px] shadow-[4px_6px_12px_rgba(0,0,0,0.25)] overflow-hidden">
                <Image
                  src="/images/home/case-studies-3.jpg"
                  alt="Mobile preview"
                  fill
                  className="object-cover"
                  sizes="67px"
                />
              </figure>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-end">
              {/* Right Image - positioned lower */}
              <div className="mt-[269px]">
                <figure className="relative w-[340px] h-[204px] overflow-hidden rounded-[15px] shadow-[4px_6px_12px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/images/home/case-studies-2.jpg"
                    alt="Case preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                </figure>
                

              </div>
            </div>
          </div>

          {/* Bottom Headline */}
          <h3 className="mt-[130px] text-center font-medium text-black text-[60px] leading-[60px] max-w-[729px] mx-auto font-sequel">
            Turn ideas into impact with<br />our expert team
          </h3>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 rounded-full bg-[#0D0D0D] px-6 py-3 text-white shadow-[4px_4px_12px_rgba(0,0,0,0.15)] hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="text-[18px] leading-[21px] font-sequel">Chat For Free!</span>
              <span className="w-[23px] h-[23px] rounded-full bg-white flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#33FAFD] group-hover:to-[#020D67]">
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#33FAFD" />
                      <stop offset="100%" stopColor="#020D67" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M8.5 2L13 6.5L8.5 11M13 6.5H1"
                    stroke="url(#arrow-gradient)"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}