import Image from "next/image";

export default function Insights() {
  return (
    <section id="insights" className="bg-neutral-950 py-14 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-1 text-center text-sm text-white/60 italic">Insights</p>
        <h3 className="mb-2 text-center text-2xl font-semibold">Startup or Scaleup — We’ve Got the Stack.</h3>
        <p className="mb-8 text-center text-sm text-white/70">Explore the four pillars we build around — and why brands keep coming back.</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Image src="/images/insight-1.jpg" alt="Automated Invoicing" fill className="object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-[2px] text-[10px] font-semibold">Latest</span>
            </div>
            <h4 className="mt-3 text-base font-medium">The Hidden ROI of Automated Invoicing for Small Teams</h4>
            <a href="#" className="mt-2 inline-flex items-center gap-2 text-xs text-white/70">View All Guides •</a>
          </article>

          <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Image src="/images/insight-2.jpg" alt="CRM Sales Process" fill className="object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-white/15 px-2 py-[2px] text-[10px]">Blog</span>
            </div>
            <h4 className="mt-3 text-base font-medium">
              Why Your CRM Should Be Built Around Your Sales Process — Not the Other Way Around
            </h4>
            <p className="mt-1 text-xs text-white/70">
              Spoiler: Letting good tech bend to you, not you to the tool, unlocks conversion & adoption.
            </p>
            <a href="#" className="mt-2 inline-flex items-center gap-2 text-xs text-white/70">View All Posts •</a>
          </article>
        </div>
      </div>
    </section>
  );
}
