'use client';

import Image from 'next/image';

type ValueItem = {
  title: string;
  body: string;
  src: string;
  alt: string;
  position?: 'top' | 'bottom';
};

const VALUES_DATA: ValueItem[] = [
  {
    title: 'Client-Centered Design:',
    body: 'Every feature reflects real user needs, not extraneous modules.',
    src: '/images/about/values-1.jpg',
    alt: 'UX design on laptop',
    position: 'bottom',
  },
  {
    title: 'Transparency with Every Sprint:',
    body: 'We share timelines, code samples, and clear cost breakdowns.',
    src: '/images/about/values-2.jpg',
    alt: 'Handshake and planning',
    position: 'top',
  },
  {
    title: 'Future-Proof Architecture:',
    body: 'You get extensible, modular tech that scales without overhead.',
    src: '/images/about/values-3.jpg',
    alt: 'Engineer with VR headset',
    position: 'bottom',
  },
  {
    title: 'Continuous Support:',
    body: "From launch to optimisation—we're in your corner long term.",
    src: '/images/about/values-4.jpg',
    alt: 'Customer support',
    position: 'top',
  },
];

export default function ValuesGallery() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px]">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-[40px] leading-[52px] font-medium text-black font-sequel max-w-[438px] mb-8">
              Our Values: Where Vision Meets Execution
            </h2>
            <div className="mt-[60px] mb-8">
              <ValueCard {...VALUES_DATA[0]} />
            </div>
            <div>
              <ValueCard {...VALUES_DATA[2]} />
            </div>
          </div>
          
          {/* Right Column - Cards closer together */}
          <div className="flex flex-col">
            <div className="mb-4">
              <ValueCard {...VALUES_DATA[1]} />
            </div>
            <div>
              <ValueCard {...VALUES_DATA[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ title, body, src, alt }: ValueItem) {
  return (
    <div
      className="relative w-full h-[284px] rounded-[26px] overflow-hidden group cursor-pointer"
      style={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* Background Image */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 521px"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />

      {/* Content - Positioned at bottom left */}
      <div className="absolute bottom-0 left-0 p-[30px] max-w-[309px]">
        <h3 
          className="text-[25px] leading-[29px] font-medium text-white font-sequel mb-3"
          style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.35)' }}
        >
          {title}
        </h3>
        <p 
          className="text-[25px] leading-[29px] font-normal text-white font-sequel"
          style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.35)' }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}