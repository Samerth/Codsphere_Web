"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        {/* Header */}
        <p className="font-damion text-[35px] leading-[45px] text-[#D3D3D3] mb-12">
          About Codsphere
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[123px]">
          {/* Left Column - Text Content */}
          <div className="max-w-[597px]">
            {/* Main Text */}
            <div className="text-[25px] leading-[36px] text-[#525252] font-sequel font-light">
              <p>
                Hi We're <span className="font-damion text-[35px] text-[#525252] italic">Cod Sphere,</span>
              </p>
              <p className="mt-4">
                Digital Infrastructure for the We're a Vancouver-based technology 
                company delivering custom CRM, ERP, and business automation tools 
                that simplify workflows and help you scale faster. From smart 
                invoicing apps to integrated marketing systems, we specialize in 
                transforming business challenges into efficient digital ecosystems.
              </p>
              <p className="mt-5">
                Whether you're a founder building from scratch or a growing company 
                looking to optimize backend processes, we bring the tech stack and 
                strategy to make it happen.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#0D0D0D] px-6 py-3 text-white shadow-[4px_4px_12px_rgba(0,0,0,0.15)] hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <span className="w-[23px] h-[23px] rounded-full bg-white flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#33FAFD] group-hover:to-[#020D67]">
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="about-arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#33FAFD" />
                        <stop offset="100%" stopColor="#020D67" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M8.5 2L13 6.5L8.5 11M13 6.5H1"
                      stroke="url(#about-arrow-gradient)"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <span className="text-[18px] leading-[21px] font-sequel">
                  Start Your Free Trial
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <figure className="relative w-full max-w-[630px] h-[408px] overflow-hidden rounded-[34px]">
              <Image
                src="/images/home/about-codsphere.jpg"
                alt="Codsphere team working together"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 630px"
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}