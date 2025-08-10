import Image from "next/image";

const items = [
  { img: "/images/services/benefit-1.png", title: "Building better together", sub: "Transparent sprints & collaboration" },
  { img: "/images/services/benefit-2.png", title: "Latest technologies", sub: "Modern, secure, maintainable stacks" },
  { img: "/images/services/benefit-3.png", title: "100% tailored", sub: "Built around your real workflows" },
  { img: "/images/services/benefit-4.png", title: "Results-driven", sub: "KPIs, outcomes, not just features" },
];

export default function WhyWork() {
  return (
    <section className="bg-neutral-950 py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-2 text-center text-xl font-semibold">Why Work With CodSphere?</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3">
                <Image src={i.img} alt={i.title} width={48} height={48} />
              </div>
              <div className="text-sm font-medium">{i.title}</div>
              <div className="text-xs text-white/70">{i.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
