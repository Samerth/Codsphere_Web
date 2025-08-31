"use client";

import Image from "next/image";

export default function MissionVision() {
  return (
    <section
      className="relative w-full text-white"
      // subtle dotted grid background
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: "14px 14px",
        backgroundColor: "#0b0b0b",
      }}
    >
      <div className="cs-container py-7 md:py-10">
        <h2 className="text-[40px] leading-[52px] font-semibold">
          Our Mission & Vision
        </h2>
        <p className="mt-2 text-white/90 text-[18px] leading-6 max-w-[760px]">
          Manage leads, customers, and workflows with tailored CRM platforms built for
          your exact business model.
        </p>
      </div>

      {/* canvas for card + wedge (fixed height so they align perfectly) */}
<div className="relative cs-container pb-8 md:pb-10">
  <div className="relative h-[420px] md:h-[460px]">

    {/* RIGHT: angled image wedge (behind card) */}
    <div className="absolute inset-y-0 right-0 z-0 w-[45%] min-w-[540px]">
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          // steeper beveled left edge; outer corners rounded
          clipPath: "polygon(28% 0, 100% 0, 100% 100%, 62% 100%)",
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
        }}
      >
        <Image
          src="/images/about/Mask group.jpg"
          alt="Vision rocket"
          fill
          // bias focus a bit left so the rocket stays visible in the wedge
          className="object-cover object-left"
          sizes="(min-width:1024px) 560px, 100vw"
          priority
        />
      </div>
    </div>

    {/* LEFT: white card with divider + dot */}
    <div className="absolute inset-y-0 left-0 z-10 w-[68%] rounded-[16px] bg-white text-black shadow">
      <div className="grid h-full grid-cols-1 sm:grid-cols-2">
        {/* Mission */}
        <div className="p-8 md:p-10 flex flex-col">
          <Image
            src="/images/about/SVG/el_idea.svg"
            alt="Mission icon"
            width={64}
            height={64}
            className="h-16 w-16"
          />
          <h3 className="mt-4 text-[40px] leading-[52px] font-semibold">Mission</h3>
          <p className="mt-2 text-[14px] leading-[18px] max-w-[360px]">
            To empower businesses with custom technology that automates processes,
            unifies data, and enhances customer relationships—delivering measurable
            impact.
          </p>
        </div>

        {/* Vision */}
        <div className="p-8 md:p-10 flex flex-col">
          <Image
            src="/images/about/SVG/streamline_target-solid.svg"
            alt="Vision icon"
            width={64}
            height={64}
            className="h-16 w-16"
          />
          <h3 className="mt-4 text-[40px] leading-[52px] font-semibold">Vision</h3>
          <p className="mt-2 text-[14px] leading-[18px] max-w-[380px]">
            To be recognised as Canada’s most trusted partner in CRM, ERP, and
            invoicing development—valued for expertise, transparency, and scalable
            results.
          </p>
        </div>
      </div>

      {/* vertical divider + dot */}
      <div className="pointer-events-none absolute left-1/2 top-8 bottom-8 -translate-x-1/2">
        <span className="block h-full w-[1.5px] bg-black/90" />
        <span className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 h-[7px] w-[7px] rounded-full bg-black" />
      </div>
    </div>
  </div>
</div>

    </section>
  );
}
