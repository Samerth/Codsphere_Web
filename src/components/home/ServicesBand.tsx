"use client";

import Image from "next/image";
import Link from "next/link";

export default function Showcase() {
  return (
    <section aria-labelledby="codsphere-title" className="bg-white">
      <div className="mx-auto max-w-[1260px] px-6 md:px-10 xl:px-[90px] py-14 md:py-20">
        {/* Top headings */}
        <div className="text-center">
          <p className="font-damion text-[35px] leading-[45px] text-[#D3D3D3]">
            Codsphere
          </p>
          <h2
            id="codsphere-title"
            className="mt-2 mx-auto font-semibold text-black
                       text-[32px] leading-[40px]
                       md:text-[40px] md:leading-[52px]
                       xl:text-[48px] xl:leading-[60px]
                       max-w-[900px]"
          >
            Crafting digital experiences and products for inspiring brands across worldwide
          </h2>
        </div>

        {/* Canvas */}
        <div className="relative mt-12 md:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left mockup + KPI (04+) */}
            <div className="relative">
              <figure className="relative mx-auto w-[383px] h-[277px] overflow-hidden rounded-[15px] shadow-[4px_6px_12px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/home/case studies 1.jpg"
                  alt="Case preview — payments dashboard"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 383px, 80vw"
                  priority
                />
              </figure>

              {/* KPI under the mockup */}
              <div className="mt-8 md:mt-10">
                <KPI
                  small="04+"
                  label="Year of building, breaking, fixing, and scaling digital systems"
                />
              </div>
            </div>

            {/* Middle: KPI row (150+ + text), phone, spacing */}
            <div className="flex flex-col items-center">
              {/* 150+ + label in a single row */}
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <span className="text-[25px] italic leading-[32px] text-[#D3D3D3]">
                  150+
                </span>
                <span className="text-[18px] leading-[24px] md:text-[20px] md:leading-[28px] text-black">
                  Websites built and
                  <br className="hidden md:block" />
                  managed
                </span>
              </div>

              {/* Phone */}
              <figure className="relative w-[67px] h-[137px] rounded-[15px] shadow-[4px_6px_12px_rgba(0,0,0,0.25)] overflow-hidden">
                <Image
                  src="/images/home/case studies 3.jpg"
                  alt="Mobile preview"
                  fill
                  className="object-cover"
                  sizes="67px"
                />
              </figure>
            </div>

            {/* Right mockup + scroll indicator (text left, icon right) */}
            <div className="relative">
              <figure className="relative mx-auto lg:ml-auto w-[340px] h-[204px] overflow-hidden rounded-[15px] shadow-[4px_6px_12px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/home/case studies 2.jpg"
                  alt="Case preview — analytics dashboard"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 340px, 80vw"
                />
              </figure>

              {/* Scroll hint under right mockup */}
              <div className="mt-6 flex items-center justify-center lg:justify-end gap-3">
                <span className="text-[12px] text-black">to scroll</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-black">
                  <span className="inline-block rotate-180 text-black text-xl leading-none">
                    ▼
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Big headline below canvas */}
          <h3
            className="mt-20 text-center font-semibold text-black
                       text-[36px] leading-[44px]
                       md:text-[56px] md:leading-[64px]
                       max-w-[920px] mx-auto"
          >
            Turn ideas into impact&nbsp;&nbsp;with
            <br className="hidden md:block" />
            our expert team
          </h3>

          {/* CTA pill */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 rounded-full bg-[#0D0D0D] px-6 py-3 text-white shadow-[4px_4px_12px_rgba(0,0,0,0.15)]"
            >
              <span className="text-[18px] leading-[21px]">Chat For Free!</span>
              <span className="grid place-items-center h-[23px] w-[23px] rounded-full bg-white">
                {/* gradient arrow */}
                <svg
                  className="-rotate-90"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="24" y2="0">
                      <stop offset="0%" stopColor="#33FAFD" />
                      <stop offset="100%" stopColor="#020D67" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 4l-1.4 1.4L16.2 11H4v2h12.2l-5.6 5.6L12 20l8-8-8-8z"
                    fill="url(#g)"
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

/* === Helpers === */

function KPI({ small, label }: { small: string; label: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-[25px] italic leading-[32px] text-[#D3D3D3]">{small}</div>
      <p className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] text-black max-w-[360px]">
        {label}
      </p>
    </div>
  );
}
