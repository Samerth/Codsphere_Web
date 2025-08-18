"use client";
import Image from "next/image";

export default function ERPHero() {
  return (
    <section className="relative bg-black text-white">
      {/* Header band behind navbar area (70px high rounded) is handled by your Navbar component */}
      {/* Banner overlay image height per design */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/60" />
        <Image
          src="/images/services/erp/hero.jpg"
          alt="ERP banner"
          width={1440}
          height={899}
          className="h-[420px] w-full object-cover md:h-[520px]"
          priority
        />
      </div>

      <div className="cs-container relative -mt-[270px] mb-10 grid gap-10 md:grid-cols-2">
        <div className="max-w-[620px]">
          <p className="font-damion text-[35px] leading-[48px] text-[#DADADA]">
            We are here to help you
          </p>

          <h1 className="heading-40 fw-415 mt-2">
            AI-Driven ERP Solutions | Custom ERP Development & Intelligent Integration
          </h1>

          <p className="body-20 mt-4 text-white">
            Empower your business with AI-powered ERP systems tailored for efficiency,
            scalability, and predictive insight. At CodSphere, we offer full-cycle ERP system
            development, seamless AI & third-party integrations, and ongoing optimisation,
            just like top-tier global players, but customised for your workflows and growth.
          </p>
          <p className="body-20 mt-3 text-white">
            Whether you&apos;re building from scratch or enhancing an existing ERP, our
            enterprise-grade solutions unlock automation, analytics, and agility across
            finance, HR, inventory, and supply chain.
          </p>

          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center rounded-[30px] bg-white px-6 py-3 label-18 fw-405 text-black"
            >
              Start Your Free Trial
            </a>
          </div>
        </div>

        {/* Right card image with 34px radius */}
        <div className="relative">
          <div className="overflow-hidden rounded-[34px] ring-1 ring-white/10">
            <Image
              src="/images/services/erp/hero.jpg"
              alt="ERP preview"
              width={775}
              height={420}
              className="h-[408px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
