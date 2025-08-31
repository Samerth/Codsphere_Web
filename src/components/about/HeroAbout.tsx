"use client";

import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="relative w-full">
      {/* Background Image with Overlay */}
      <div className="relative h-[250px] w-full">
        <Image
          src="/images/about/Group 220.jpg" // replace with your actual file name
          alt="About Us background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[90px]">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
              About Us
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative cs-container py-16 flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="lg:w-1/2">
          <h2 className="font-damion text-4xl text-gray-300 mb-6">Who We Are</h2>
          <p className="text-lg leading-relaxed text-gray-400">
            CodSphere is a Toronto-based software company focused on tailored CRM
            and ERP systems, intelligent invoicing tools, and data-driven marketing
            strategies built to elevate businesses—whether you&apos;re a nimble startup
            or a fast-growing mid-market enterprise.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            We believe that impactful digital platforms start with deep alignment:
            we start by understanding your workflows, goals, and bottlenecks—and
            build solutions that grow with you. Inspired by Canada’s leading firms
            in CRM and ERP consultancy{" "}
            <a
              href="https://gestisoft.com"
              className="underline text-blue-400 hover:text-blue-300"
            >
              gestisoft.com
            </a>
            , we focus on outcomes, not just code.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[630px] h-[300px] sm:h-[350px] md:h-[408px] rounded-[20px] md:rounded-[34px] overflow-hidden shadow-lg">
            <Image
              src="/images/about/Group 78.jpg" // replace with your actual team image
              alt="CodSphere Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
