"use client";
import { useState } from "react";

const qas = [
  { q: "What makes CodSphere’s CRM different from off-the-shelf tools like HubSpot or Zoho?", a: "We tailor the data model and automations to your team’s actual workflow, not the other way around — and integrate where it makes sense." },
  { q: "Can you update our billing system without breaking what’s already live?", a: "Yes. We design migration plans and use feature flags to ship changes safely." },
  { q: "How long does it take to build a custom CRM/ERP?", a: "Discovery 1–2 weeks, first milestone 3–6 weeks depending on scope." },
  { q: "Do you only develop apps, or also work with marketers?", a: "We work as one team — product + engineering + growth — to ship measurable outcomes." },
  { q: "How secure is your invoicing/billing automation stack?", a: "We follow best practices: least-privilege roles, audit logs, vetted gateways and compliance controls." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-xl font-semibold">Frequently Asked Questions</h2>
        <div className="divide-y rounded-2xl border bg-white">
          {qas.map((it, i) => (
            <details
              key={it.q}
              open={open === i}
              onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open ? i : null)}
              className="group"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 text-sm">
                {it.q}
                <span className="text-xl leading-none text-gray-400 group-open:text-gray-600">{open === i ? "−" : "+"}</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-600">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
