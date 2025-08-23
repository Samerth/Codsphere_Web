"use client";

import * as React from "react";

const faqs = [
  {
    q: "What makes CodSphere’s CRM different from off-the-shelf tools like HubSpot or Zoho?",
    a: "Unlike generic platforms, our CRM is built custom for your workflow. We tailor data models, UI, automation, and integrations to your exact business—no bloat, no workarounds.",
  },
  {
    q: "Can you integrate your ERP system with my existing tools and software?",
    a: "Absolutely. We design modular, API-first architectures that connect to accounting, inventory, HR, and third-party suites—from QuickBooks to SAP.",
  },
  {
    q: "How long does it take to build a custom CRM or ERP?",
    a: "Typical projects take 4–12 weeks depending on scope. We ship in sprints, so you can use core features while we continue enhancements.",
  },
  {
    q: "Do you offer mobile apps with your web solutions?",
    a: "Yes. All platforms are responsive by default. We also build native iOS/Android when you need offline access, push notifications, or camera features.",
  },
  {
    q: "How secure are your invoicing and automation tools?",
    a: "Bank-grade encryption, secure auth, GDPR-aligned practices, and hardened infrastructure to protect your data end-to-end.",
  },
];

export default function ServicesFAQ() {
  return (
    <section className="container mx-auto max-w-[1200px] px-4 py-10">
      <h2 className="text-center text-[40px] leading-[1.296] font-[415]">Frequently Asked Questions</h2>

      <ul className="mx-auto mt-6 space-y-4">
        {faqs.map((item) => (
          <li key={item.q}>
            <details className="group rounded-[17px] bg-[#F5F6FA] p-5 marker:content-none">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-[22px] leading-[26px] font-[415] text-foreground">{item.q}</h3>
                <span
                  aria-hidden
                  className="grid size-[42px] place-content-center rounded-full bg-[#608BF3] text-white transition group-open:rotate-90"
                >
                  <svg width="12" height="24" viewBox="0 0 12 24">
                    <rect x="5" y="4" width="2" height="16" fill="currentColor" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-[836px] text-[16px] leading-[19px] text-foreground/90">{item.a}</p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
