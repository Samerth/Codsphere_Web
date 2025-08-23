"use client";

import { useState } from "react";

const data = [
  {
    q: "Do you only serve clients in Canada?",
    a:
      "No — we’re proud to be based in Canada but work with startups and enterprises across the US, UK, and other global regions.",
  },
  { q: "What happens after launch?", a: "We continue optimisation, support, and roadmap delivery." },
  { q: "Can CodSphere integrate with our existing tools?", a: "Absolutely. We integrate CRMs, ERPs, invoicing, analytics, and custom apps." },
  { q: "lorem Ipsum", a: "Placeholder answer for demonstration." },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {data.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={idx}
            className="rounded-[17px] border border-[#D7D7D7] bg-[#F5F6FA] overflow-hidden"
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : idx)}
              className="w-full text-left p-6 flex items-center justify-between"
            >
              <div className="text-[22px] leading-[26px] font-semibold">{item.q}</div>
              <div className="h-10 w-10 rounded-full bg-[#608BF3] grid place-items-center text-white">
                <span className={`transition-transform ${isOpen ? "rotate-90" : "-rotate-90"}`}>▶</span>
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-[16px] leading-[19px] text-black/80">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
