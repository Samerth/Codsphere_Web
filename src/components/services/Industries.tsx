import Image from "next/image";

const items = [
  { img: "/images/services/industry-tech.png", label: "SaaS & Tech" },
  { img: "/images/services/industry-finance.png", label: "Finance" },
  { img: "/images/services/industry-education.png", label: "Education" },
  { img: "/images/services/industry-retail.png", label: "Retail & eCom" },
  { img: "/images/services/industry-health.png", label: "Healthcare" },
  { img: "/images/services/industry-gov.png", label: "Gov & Agencies" },
];

export default function Industries() {
  return (
    <section className="bg-neutral-950 py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-center text-xl font-semibold">Industries We Serve</h2>
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-6">
          {items.map((i) => (
            <div key={i.label} className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Image src={i.img} alt={i.label} width={48} height={48} />
              <span className="text-xs text-white/85">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
