'use client';

import Image from 'next/image';

type ValueItem = {
  title: string;
  body: string;
  src: string;
  alt: string;
};

const ITEMS: ValueItem[] = [
  {
    title: 'Client-Centered Design:',
    body:
      'Every feature reflects real user needs, not extraneous modules.',
    src: '/images/values/ux-laptop.jpg',
    alt: 'UX design on laptop',
  },
  {
    title: 'Transparency with Every Sprint:',
    body:
      'We share timelines, code samples, and clear cost breakdowns.',
    src: '/images/values/handshake.jpg',
    alt: 'Handshake and planning',
  },
  {
    title: 'Future-Proof Architecture:',
    body:
      'You get extensible, modular tech that scales without overhead.',
    src: '/images/values/vr-lab.jpg',
    alt: 'Engineer with headset and VR',
  },
  {
    title: 'Continuous Support:',
    body:
      'From launch to optimisation—we’re in your corner long term.',
    src: '/images/values/support.jpg',
    alt: 'Customer success support call',
  },
];

function Card({ item }: { item: ValueItem }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-[26px]
        ring-1 ring-black/10
        shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)]
        will-change-transform transition-transform duration-300
        hover:-translate-y-0.5
      "
    >
      {/* Background image (521x284 target ratio -> pb-[54.5%]) */}
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
        className="object-cover"
        priority={false}
      />

      {/* Gradient overlay to match rgba(0,0,0,0.4) feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/10" />

      {/* Content pinned to bottom-left */}
      <div className="relative z-10 flex h-full items-end">
        <div className="p-6 sm:p-8">
          <h3 className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] text-[22px] sm:text-[25px] leading-[29px] font-[600]">
            {item.title}
          </h3>
          <p className="mt-2 text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] text-[16px] sm:text-[18px] leading-snug">
            {item.body}
          </p>
        </div>
      </div>

      {/* Aspect ratio shim (521w x 284h -> 284/521 = 54.5%) */}
      <div className="pointer-events-none before:block before:pb-[54.5%]" />
    </div>
  );
}

export default function ValuesExecution() {
  return (
    <section className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-0">
      {/* Title block: 40px / left-aligned */}
      <div className="mb-8 sm:mb-10">
        <h2 className="text-[34px] sm:text-[40px] leading-[1.296] font-[600] tracking-tight">
          <span className="font-semibold">Our Values:</span>{' '}
          <span className="font-normal">Where Vision Meets Execution</span>
        </h2>
      </div>

      {/* 2x2 grid, matches design spacing */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        <Card item={ITEMS[0]} />
        <Card item={ITEMS[1]} />
        <Card item={ITEMS[2]} />
        <Card item={ITEMS[3]} />
      </div>
    </section>
  );
}
