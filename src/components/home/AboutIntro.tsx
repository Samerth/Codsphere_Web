"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section aria-labelledby="about-codsphere" className="bg-white">
      <div className="mx-auto max-w-[1260px] px-6 md:px-10 xl:px-[90px] py-12 md:py-16">
        {/* Tag */}
        <p className="font-damion text-[35px] leading-[45px] text-[#D3D3D3]">
          About Codsphere
        </p>

        {/* Fixed Figma widths: 597px (copy) + 630px (image) */}
        <div className="mt-1 grid gap-10 lg:grid-cols-[597px_630px]">
          {/* LEFT — text column (locked to 597px) */}
          <div className="max-w-[597px]">
            {/* Greeting line */}
            <p className="text-[28px] leading-[36px] text-black/80 mb-2">
              Hi We’re{" "}
              <span className="font-damion text-[35px] align-baseline text-black">
                Cod Sphere,
              </span>
            </p>

            {/* Body (25/36, #525252) */}
            <div className="text-[#525252] text-[25px] leading-[36px] space-y-5">
              <p>
                Digital Infrastructure for the We’re a Vancouver-based technology
                company delivering custom CRM, ERP, and business automation tools
                that simplify workflows and help you scale faster. From smart
                invoicing apps to integrated marketing systems, we specialize in
                transforming business challenges into efficient digital ecosystems.
              </p>
              <p>
                Whether you&apos;re a founder building from scratch or a growing company
                looking to optimize backend processes, we bring the tech stack and
                strategy to make it happen.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#0D0D0D] px-6 py-3 text-white shadow-[4px_4px_12px_rgba(0,0,0,0.15)]"
              >
                <span className="grid place-items-center h-[23px] w-[23px] rounded-full bg-white -rotate-90">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <defs>
                      <linearGradient id="g2" x1="0" y1="0" x2="24" y2="0">
                        <stop offset="0%" stopColor="#33FAFD" />
                        <stop offset="100%" stopColor="#020D67" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M12 4l-1.4 1.4L16.2 11H4v2h12.2l-5.6 5.6L12 20l8-8-8-8z"
                      fill="url(#g2)"
                    />
                  </svg>
                </span>
                <span className="text-[18px] leading-[21px]">Start Your Free Trial</span>
              </Link>
            </div>
          </div>

          {/* RIGHT — image column (locked to 630×408, radius 34, aligned to top) */}
          <figure className="relative w-[630px] h-[408px] overflow-hidden rounded-[34px] self-start">
            <Image
              src="/images/home/about codsphere.jpg"   // update if your path differs
              alt="Codsphere team working together"
              fill
              className="object-cover"
              sizes="630px"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
