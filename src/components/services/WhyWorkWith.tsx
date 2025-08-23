"use client";

import Image from "next/image";

const ITEMS = [
  { title: "Built by senior engineers", tone: "bg-[#EEDFFF]" },
  { title: "Tailored for real business use", tone: "bg-[#CFFFEE]" },
  { title: "Fast deployment with ongoing support", tone: "bg-[#FFF4D5]" },
  { title: "100% transparent development", tone: "bg-[#FFE7D5]" },
  { title: "Based in Canada.\nServing globally", tone: "bg-[#BCCFFF]" },
];

export default function WhyWorkWithBand() {
  // pb-[108px] = 84px overlap + ~24px breathing space
  return (
    <section className="relative">
      <div className="relative min-h-[343px] overflow-visible bg-black pb-[108px]">
        {/* dotted pattern */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 [background:radial-gradient(circle,_rgba(255,255,255,0.18)_1px,_transparent_1px)] [background-size:24px_24px]"
        />
        {/* optional rotated texture */}
        <Image
          src="/images/services/band-texture.jpg"
          alt=""
          fill
          className="-rotate-90 object-cover opacity-20 pointer-events-none"
        />

        <div className="container relative z-10 mx-auto max-w-[1440px] px-4 pt-[47px] text-white">
          <h2 className="mx-auto text-center text-[50px] leading-[1.296] font-[415]">
            Why Work With CodSphere?
          </h2>
          <p className="mx-auto mt-2 max-w-[952px] text-center text-[20px] leading-[24px] font-[405]">
            We&apos;re not just coders—we&apos;re growth partners. Whether you&apos;re a startup automating your first sales process or
            an enterprise optimizing your ERP workflows, we bring the strategy, code, and systems that scale with you.
          </p>
        </div>

        {/* value cards: overlap the band by 84px without pushing content behind them */}
        <ul className="absolute left-1/2 -bottom-[84px] z-20 grid w-full max-w-[1440px] -translate-x-1/2 grid-cols-1 gap-4 px-4 sm:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map((item) => (
            <li
              key={item.title}
              className="mx-auto h-[200px] w-[246px] rounded-[22px] bg-white shadow-[0_6px_16px_rgba(0,0,0,0.15)]"
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 px-4 text-center">
                <div className={`grid size-[96px] place-content-center rounded-full ${item.tone}`} />
                <p className="whitespace-pre-line text-[20px] leading-[24px] font-[420] text-black">
                  {item.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
