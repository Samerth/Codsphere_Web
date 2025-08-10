"use client";
import { useState } from "react";

const qas = [
  { q: "Do you provide discovery & scoping?", a: "Yes. We run research, KPI alignment and a milestone roadmap." },
  { q: "What engagement models do you offer?", a: "Fixed-scope projects or monthly product squads." },
  { q: "How quickly can you start?", a: "Usually within 1–2 weeks after discovery." },
  { q: "Do you support after launch?", a: "Yes, we provide SLAs and continuous improvement." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="mb-6 text-xl font-semibold">FAQs: Fast Answers to Common Questions</h3>
        <div className="divide-y rounded-2xl border">
          {qas.map((item, i) => (
            <details
              key={item.q}
              open={open === i}
              onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open ? i : null)}
              className="group"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 text-sm">
                {item.q}
                <span className="text-xl leading-none">{open === i ? "−" : "+"}</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
