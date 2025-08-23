"use client";

import clsx from "clsx";

type Row = { left: string; right: string };

const rows: Row[] = [
  {
    left: "4+ years delivering CRM & ERP systems across Canada",
    right: "Proven track record",
  },
  {
    left: "Over 150+ deployments in startups to scale-ups",
    right: "Reliable experience",
  },
  {
    left: "Deep specialisation in CRM, ERP, invoicing, & marketing",
    right: "Focused solutions",
  },
  {
    left: "Agile, transparent development with clear documentation",
    right: "Client-friendly approach",
  },
  {
    left:
      "Mobile-first, SEO-ready, performance-optimised builds",
    right: "Future-proof platforms",
  },
  {
    left: "Toronto-based with global clients",
    right: "Local insight, global reach",
  },
];

export default function CredentialBenefit() {
  return (
    <section className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-0">
      {/* Title + subtitle */}
      <div className="mx-auto mb-8 max-w-[930px] text-center">
        <h2 className="text-[34px] leading-[1.2] font-semibold md:text-[40px]">
          Why Clients Choose CodSphere
        </h2>
        <p className="mt-3 text-[18px] md:text-[20px] text-black/80">
          Our dedication to outcome-based consulting mirrors firms like
          Webisoft, Gestisoft, and Purely CRM—combining technical
          prowess with business insight.
        </p>
      </div>

      {/* Card wrapper */}
      <div className="overflow-hidden rounded-[15px] bg-[#ECF5F7]">
        {/* Header bar */}
        <div className="flex items-center justify-between bg-black px-5 py-5 sm:px-8">
          <h3 className="text-white text-[22px] sm:text-[30px] font-semibold">
            Credential
          </h3>
          <h3 className="text-white text-[22px] sm:text-[30px] font-semibold">
            Benefit
          </h3>
        </div>

        {/* Rows */}
        <div>
          {rows.map((row, i) => (
            <div
              key={i}
              className={clsx(
                "grid grid-cols-1 gap-4 px-5 py-6 sm:px-8 md:grid-cols-2",
                "border-t border-black/20"
              )}
            >
              <div className="text-[18px] md:text-[20px] leading-[1.35]">
                {row.left}
              </div>
              <div className="text-[18px] md:text-[20px] leading-[1.35] md:text-right">
                {row.right}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
