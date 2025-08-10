import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="bg-neutral-950 py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_.6fr]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold">Mission</div>
              <p className="mt-2 text-sm text-white/80">
                Transform complex business workflows into simple, scalable digital systems.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold">Vision</div>
              <p className="mt-2 text-sm text-white/80">
                Be the most trusted partner for founders and enterprises who want speed with quality.
              </p>
            </div>
          </div>

          <div className="relative hidden overflow-hidden rounded-2xl md:block">
            <Image src="/images/about/mission-visual.jpg" alt="Mission visual" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
