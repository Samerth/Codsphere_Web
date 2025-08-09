"use client";
import Image from "next/image";
import { useRef } from "react";

const cards = [
  { title: "Custom CRM Software Development", desc: "Manage leads, customers, workflows with tailored CRM platforms.", img: "/images/work-1.jpg" },
  { title: "AI-Driven ERP Development & Integration", desc: "Streamline operations with intelligent, scalable ERP.", img: "/images/work-2.jpg" },
  { title: "Smart Invoicing & Billing Tools", desc: "Recurring billing, taxation, secure admin systems.", img: "/images/work-3.jpg" },
  { title: "Digital Marketing", desc: "Full-funnel strategies that convert: data, automations & analytics.", img: "/images/work-4.jpg" },
];

export default function WorkCarousel() {
  const scroller = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="bg-neutral-950 py-14 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-1 text-center text-sm text-white/55">Services</p>
        <h2 className="mb-2 text-center text-2xl font-semibold">Startup or Scaleup — We’ve Got the Stack.</h2>
        <p className="mb-8 text-center text-sm text-white/70">Explore the four pillars we build around — and why brands keep coming back.</p>

        <div className="mb-4 flex justify-end">
          <div className="flex gap-2">
            <button
              className="rounded-full border border-white/20 px-3 py-1 text-xs"
              onClick={() => scroller.current?.scrollBy({ left: -340, behavior: "smooth" })}
            >←</button>
            <button
              className="rounded-full border border-white/20 px-3 py-1 text-xs"
              onClick={() => scroller.current?.scrollBy({ left: 340, behavior: "smooth" })}
            >→</button>
          </div>
        </div>

        <div
          ref={scroller}
          className="flex gap-6 overflow-x-auto rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] p-4"
        >
          {cards.map((c) => (
            <article key={c.title} className="min-w-[280px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-40 w-72">
                <Image src={c.img} alt={c.title} fill className="object-cover"/>
                <div className="absolute right-3 top-3 rounded-full bg-white/10 p-2">↗</div>
              </div>
              <div className="space-y-1 p-4">
                <div className="text-sm font-medium">{c.title}</div>
                <p className="text-xs text-white/70">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm">Explore Our Solutions</a>
        </div>
      </div>
    </section>
  );
}
