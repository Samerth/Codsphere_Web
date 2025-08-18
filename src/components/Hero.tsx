"use client";

import Image from "next/image";
import { useRef, useState } from "react";

/**
 * Hero section: “AI ERP, CRM & Automation…”
 * - Left: info card, chips, paragraph, large stacked headline
 * - Right: rounded video with bottom-left concave curve & cs icon
 */
export default function HeroAutomation() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1260px] px-6 md:px-10 xl:px-[90px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 pt-10 md:pt-14">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </section>
  );
}

/* ------------------------- LEFT COLUMN ------------------------- */

function LeftColumn() {
  return (
    <div className="lg:col-span-5">
      {/* Mini info card */}
      <div className="rounded-[22px] bg-[#EEF0F4] p-4 md:p-5 shadow-[0_1px_0_rgba(0,0,0,0.06)_inset]">
        <div className="grid grid-cols-[96px_1fr_auto] items-center gap-3">
          {/* thumb */}
          <div className="relative h-[90px] w-[96px] overflow-hidden rounded-[14px] bg-white ring-1 ring-black/5">
            <Image
              src="/images/home/ai-hand.jpg"
              alt="AI robotic hand"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>

          {/* copy */}
          <p className="text-[12px] leading-4 text-black/80 pr-2">
            <span className="font-medium">AI-powered ERP &amp; CRM</span> for smarter
            business. Automate tasks, predict trends, and boost productivity. Work
            faster, grow smarter.
          </p>

          {/* round chevron cluster (right aligned) */}
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-black px-4 py-2 text-white text-[13px] leading-none">
              Explore more
            </button>
            <div className="flex items-center gap-2">
              <DotButton />
              <DotButton />
              <DotButton filled />
            </div>
          </div>
        </div>
      </div>

      {/* chips row */}
      <div className="mt-5 grid grid-cols-3 gap-3 max-w-[520px]">
        <Chip>Automate</Chip>
        <Chip>Optimize</Chip>
        <Chip>Scale</Chip>
        <Chip>Accelerate</Chip>
        <Chip>Integrate</Chip>
      </div>

      {/* one-line blurb */}
      <p className="mt-4 max-w-[520px] text-[15px] leading-[19px] text-black/80">
        At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart
        invoicing tools, and full-funnel digital strategies so your business runs
        smarter, not harder.
      </p>

      {/* giant stacked headline */}
      <h1
        className="
          mt-6 
          font-semibold text-black
          text-[44px] leading-[1.04]
          md:text-[64px] md:leading-[1.04]
          xl:text-[76px] xl:leading-[1.02]
          [word-spacing:-4px]
          tracking-[-0.01em]
          max-w-[680px]
        "
      >
        AI ERP, CRM &amp; Automation
        <br />
        Experts Driving
        <br />
        Smarter
        <br />
        Business
        <br />
        Efficiency
      </h1>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-[18.5px] border border-black px-4 py-2 text-[15px] leading-none">
      {children}
    </span>
  );
}

function DotButton({ filled = false }: { filled?: boolean }) {
  return (
    <span
      className={[
        "grid h-7 w-7 place-items-center rounded-full",
        filled ? "bg-black text-white" : "bg-white text-black",
        "shadow-sm ring-1 ring-black/10",
      ].join(" ")}
      aria-hidden
    >
      <svg width="9" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 6l6 6-6 6"
          stroke={filled ? "#fff" : "#000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ------------------------- RIGHT COLUMN ------------------------ */

function RightColumn() {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = vidRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative lg:col-span-7">
      {/* the white concave “bite” outside the container so it’s not clipped */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -bottom-14 -left-14
          h-[180px] w-[240px]
          rounded-[36px]
          bg-white
          z-10
        "
      />

      {/* rounded video container */}
      <div className="relative z-20 w-full overflow-hidden rounded-[36px] bg-black">
        {/* cs badge in the top-right */}
        <div className="absolute right-3 top-3 z-30 grid h-11 w-11 place-items-center rounded-full bg-black text-white">
          <Image
            alt="CodSphere"
            src="/images/brand/cs-mark.svg"
            width={28}
            height={28}
            className="opacity-95"
            onError={(e) => {
              (e.currentTarget.parentElement as HTMLElement).innerHTML = "cs";
            }}
          />
        </div>

        {/* the video */}
        <video
          ref={vidRef}
          poster="/images/home/cloud-secure-poster.jpg"
          className="
            block h-[50vw] max-h-[620px] w-full cursor-pointer select-none
            md:h-[40vw]
          "
          playsInline
          preload="metadata"
          onClick={togglePlay}
        >
          <source src="/videos/cloud-secure.mp4" type="video/mp4" />
        </video>

        {/* large center play button (show when paused) */}
        {!playing && (
          <button
            onClick={togglePlay}
            aria-label="Play video"
            className="
              absolute left-1/2 top-1/2 z-30 
              -translate-x-1/2 -translate-y-1/2 
              grid h-[92px] w-[92px] place-items-center 
              rounded-full border-[3px] border-white/95 
              bg-black/40 text-white backdrop-blur-[1px]
            "
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7L8 5z" fill="#fff" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
