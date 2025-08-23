// src/components/about/ExpertiseGrid.tsx
import { ArrowUpRight } from "lucide-react";

type Item = {
  id: string;
  title: string;
  text: string;
  dark?: boolean;
};

const items: Item[] = [
  {
    id: "01",
    title: "CRM Software Tailored to Your Sales Flow",
    text:
      "From lead tracking and sales automation to customer onboarding, our custom CRM solutions replace rigid platforms with dynamic, process-aligned systems.",
  },
  {
    id: "02",
    title: "ERP Systems Built for Real Efficiency",
    text:
      "Inventory, HR, finance, and operations—streamlined in one platform. We design ERP workflows tailored to your industry, integrating with accounting, invoicing, and frontend tools.",
  },
  {
    id: "03",
    title: "Smart Invoicing & Billing Tools",
    text:
      "Reduce manual errors, automate recurring billing, and improve cash flow with intuitive invoicing platforms designed for simplicity, flexibility, and compliance.",
  },
  {
    id: "04",
    title: "Digital Marketing That Converts",
    text:
      "We integrate analytics, marketing automation, and CRM triggers into full-funnel strategies—so your campaigns are as actionable as your systems.",
    dark: true,
  },
];

function CardWithCurve({ id, title, text, dark }: Item) {
  // colors switch for the 4th card
  const bg = dark ? "bg-black" : "bg-white";
  const textCol = dark ? "text-white" : "text-black";
  const subCol = dark ? "text-white/75" : "text-black/60";
  const ringCol = dark ? "ring-white/15" : "ring-black/10";
  const arrowCol = dark ? "text-white" : "text-black";

  return (
    <div className="relative">
      {/* --- small 'ear' on top edge --- */}
      <div
        className={`absolute -top-3 left-14 h-5 w-12 rounded-full ${bg} ${ringCol} ring-1`}
      />

      {/* --- number badge --- */}
      <div className="absolute -top-6 left-8 h-14 w-14 rounded-full bg-white shadow ring-1 ring-black/10 flex items-center justify-center text-[18px] font-medium">
        {id}
      </div>

      {/* --- card --- */}
      <div
        className={`${bg} ${ringCol} ring-1 rounded-2xl shadow-sm overflow-hidden`}
      >
        {/* arrow */}
        <div className="absolute right-4 top-4">
          <ArrowUpRight className={`${arrowCol}`} />
        </div>

        {/* content */}
        <div className="p-6 lg:p-7">
          <h3 className={`mb-2 text-xl font-semibold leading-6 ${textCol}`}>
            {title}
          </h3>
          <p className={`text-[15px] leading-6 ${subCol}`}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function ExpertiseGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
      <h2 className="text-center text-4xl font-bold tracking-tight">
        Our Expertise — What Sets Us Apart
      </h2>
      <p className="mt-4 text-center text-black/60 max-w-3xl mx-auto">
        Manage leads, customers, and workflows with tailored CRM platforms built
        for your exact business model.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <CardWithCurve key={it.id} {...it} />
        ))}
      </div>
    </section>
  );
}
