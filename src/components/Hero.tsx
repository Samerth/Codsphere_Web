import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-[1.05fr_1fr] md:py-16">
      {/* left column */}
      <div>
        {/* pill + mini card */}
        <div className="mb-6 flex flex-wrap items-start gap-3">
          <div className="rounded-2xl border p-3">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="rounded-full bg-black px-2 py-[2px] text-white">AI</span>
              <span className="rounded-full bg-gray-100 px-2 py-[2px]">ERP</span>
              <span className="rounded-full bg-gray-100 px-2 py-[2px]">CRM</span>
              <span className="rounded-full bg-gray-100 px-2 py-[2px]">Automation</span>
            </div>
            <div className="mt-2 rounded-xl bg-gray-50 p-2 text-[11px] leading-5">
              AI-powered ERP & CRM for workflows, billing, analytics, growth.
              <div className="mt-2">
                <Button size="sm" className="rounded-full">Explore</Button>
              </div>
            </div>
          </div>
        </div>

        <h1 className="mb-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          AI ERP, CRM & Automation
          <br />Experts Driving Smarter
          <br />Business Efficiency
        </h1>

        <div className="mb-3 text-sm italic text-gray-400">About Codsphere</div>

        <p className="max-w-prose text-sm text-gray-600 sm:text-base">
          Hi! We’re <b>Cod Sphere</b>.<br/>
          We’re a Vancouver-based technology company delivering custom CRM, ERP, and
          business automation tools that simplify workflows and help you scale faster.
          From smart invoicing apps to integrated marketing systems, we specialize in
          transforming business challenges into efficient digital ecosystems.
          Whether you’re a founder building from scratch or a growing company optimizing
          backend processes, we bring the tech stack and strategy to make it happen.
        </p>

        <div className="mt-6">
          <Button className="rounded-full" size="lg">Start Your Free Trial</Button>
        </div>
      </div>

      {/* right column: main mock + side image */}
      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border bg-white">
          <Image src="/images/hero-main.jpg" alt="Cloud security preview" fill className="object-cover" priority />
          <button
            aria-label="Play"
            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow backdrop-blur"
          >
            <Image src="/images/icon-play.svg" alt="" width={40} height={40}/>
          </button>
        </div>

        <div className="pointer-events-none absolute -bottom-8 right-4 hidden w-64 overflow-hidden rounded-2xl border sm:block">
          <Image src="/images/hero-people.jpg" alt="Team" width={640} height={400} className="object-cover" />
        </div>
      </div>
    </section>
  );
}
