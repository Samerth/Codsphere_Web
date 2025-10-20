"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(
      () => {
        // mm.add("(min-width: 768px)", () => {
        mm.add("(min-width: 68px)", () => {
          const container = containerRef.current;
          const frames = gsap.utils.toArray<HTMLElement>(".gsap-frame");
          if (!frames.length) return;

          // initial state
          gsap.set(frames, {
            position: "absolute",
            inset: 0,
            autoAlpha: 0,
            // scale: 0.82,
            // yPercent: 6,
            scale: 0.6, // was 0.82 — now starts farther away
            yPercent: 10,
            transformOrigin: "50% 50%",
            willChange: "transform, opacity",
            force3D: true,
          });
          // gsap.set(frames[0], { autoAlpha: 1, scale: 1, yPercent: 0 });
          gsap.set(frames[0], {
            autoAlpha: 1,
            scale: 0.6, // start small, not full size
            yPercent: 10,
            z: -300,
          });

          // 1️⃣ Pin the container at the top of the screen (independent trigger)
          ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: "+=2750",
            // end: "+=2500",
            pin: true,
            anticipatePin: 1,
          });

          // 2️⃣ Actual animation timeline (starts when section center hits viewport center)
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              // start: "top center", // animation starts when section center hits viewport center
              start: "top bottom", // animation starts when section bottom hits viewport top
              end: "+=4000",
              scrub: true,
            },
          });

          frames.forEach((frame, i) => {
            // bring current frame to front while it zooms in
            tl.to(
              frame,
              {
                autoAlpha: 1,
                scale: 1,
                yPercent: 0,
                duration: 0.9,
                ease: "power3.out",
              },
              // i === 0 ? 0 : '>+=0.2',
              // i === 0 ? 0 : '>=0.0',
              i === 0 ? 0 : ">-=0.2",
            );

            // subtle staggered rise of inner elements while scaling
            const kids = frame.querySelectorAll<HTMLElement>(".rise");
            if (kids.length) {
              tl.from(
                kids,
                {
                  y: 30,
                  opacity: 0,
                  duration: 0.6,
                  ease: "power2.out",
                  stagger: 0.07,
                },
                "<0.1",
              );
            }

            // as the next frame comes in, push the current frame slightly past 1 (zoom-through) and fade
            const prev = frames[i - 1];
            if (prev) {
              tl.to(
                prev,
                {
                  scale: 1.08,
                  yPercent: -4,
                  autoAlpha: 0,
                  duration: 0.7,
                  // duration: 1.4,
                  ease: "power3.inOut",
                },
                "<",
              );
            }
          });
        });
      },
      // scope for gsap.context — pass the actual element
      containerRef.current,
    );

    // cleanup
    return () => {
      ctx.revert();
      mm.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // containerRef is a ref (stable), so empty deps is OK

  return (
    <section className="container-wrapper pt-less pb-more">
      {/* Header */}
      <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto">
        <p className="font-damion text-[30px] sm:text-[35px] leading-[35px] sm:leading-[40px] md:leading-[45px] text-[#D3D3D3]">
          Codsphere
        </p>
        <h2 className="font-medium text-black text-[28px] sm:text-[30px] lg:text-[40px] leading-[36px] sm:leading-[40px] md:leading-[46px] lg:leading-[52px] font-sequel px-4">
          Crafting digital experiences and products for inspiring brand across worldwide
        </h2>
      </div>

      {/* Animation container */}
      <div
        ref={containerRef}
        aria-label="Scroll-triggered project showcase"
        // className="relative mx-auto mt-10 asepct-[16/10] w-full max-w-6xl overflow-hidden rounded-xl bg-secondary md:mt-24 md:aspect-[16/7] transform-gpu"
        // className="relative bg-yellow-200 !mt-[80px] sm:!mt-[88px] lg:!mt-[104px] h-[calc(100vh-80px)] sm:h-[calc(100vh-88px)] lg:h-[calc(100vh-104px)] transform-gpu"
        className="relative h-screen transform-gpu"
      >
        {/* Frame 1 */}
        <div className="gsap-frame md:absolute md:inset-0">
          <div className="rise absolute left-0 top-28 max-w-[420px] rounded-lg overflow-hidden bg-card p-4 shadow-lg md:left-16 md:top-36">
            {/* <div className="rounded-md w-[300px] h-[200px] bg-primary" aria-label="Box A"> */}
            <div
              className="rounded-md w-[200px] h-[130px] md:w-[300px] md:h-[200px] bg-primary"
              aria-label="Box A"
            >
              <Image
                src="/images/home/work-samples/work-sample-3.jpg"
                alt="Case preview"
                fill
                className="object-cover"
                // sizes="(max-width: 640px) 100vw, 50vw"
                priority
              />
            </div>
            {/* <p className="mt-2 text-sm opacity-70">JAZZ TRANSMIT MUSIC</p> */}
          </div>

          <div className="rise absolute right-0 top-5/12 text-right md:right-10 md:top-40">
            {/* <p className="text-5xl font-semibold opacity-40 md:text-6xl">150</p> */}
            <p className="text-3xl font-semibold italic text-[#D3D3D3]">150+</p>
            <h3 className="mt-2 max-w-xs text-2xl font-semibold md:text-3xl">
              Websites built and managed
            </h3>
          </div>

          <div className="rise absolute bottom-24 left-1/5 md:left-auto md:bottom-24 md:right-12 max-w-[420px] rounded-lg bg-card p-4 shadow-sm">
            <div
              className="rounded-md w-[200px] h-[130px] md:w-[250px] md:h-[150px] bg-accent"
              aria-label="Box B"
            >
              <Image
                src="/images/home/work-samples/work-sample-1.jpg"
                alt="Case preview"
                fill
                className="object-cover"
                // sizes="(max-width: 640px) 100vw, 50vw"
                priority
              />
            </div>
            {/* <p className="mt-2 text-sm opacity-70">InfinityAI — Product site</p> */}
          </div>
        </div>

        {/* Frame 2 */}
        <div className="gsap-frame md:absolute md:inset-0">
          <div className="rise absolute left-7/12 top-32 md:top-5/12 -translate-x-7/12 rounded-lg bg-card p-4 shadow-sm">
            <div className="rounded-md w-[250px] h-[110px] bg-destructive" aria-label="Box C">
              <Image
                src="/images/home/work-samples/work-sample-2.jpg"
                alt="Case preview"
                fill
                className="object-cover"
                // sizes="(max-width: 640px) 100vw, 50vw"
                priority
              />
            </div>
            {/* <p className="mt-2 text-center text-sm opacity-70">NFT Digital Gallery</p> */}
          </div>

          <div className="rise absolute left-0 bottom-32 md:left-24 md:bottom-16 text-left">
            <p className="text-3xl font-semibold italic text-[#D3D3D3]">04+</p>
            <h3 className="mt-2 max-w-lg text-2xl font-semibold md:text-3xl">
              Year of of building, breaking, fixing, and scaling digital systems
            </h3>
          </div>
          {/* 
          <div className="rise absolute bottom-24 right-14">
            <p className="text-5xl font-semibold opacity-40 md:text-6xl">8000+</p>
            <h3 className="mt-2 max-w-sm text-2xl font-semibold md:text-3xl">managed</h3>
          </div> */}
        </div>

        {/* Frame 3 */}
        <div className="gsap-frame md:absolute md:inset-0">
          <div className="rise absolute w-4/5 right-0 top-32 md:left-32 md:top-48 text-left">
            <p className="text-3xl font-semibold italic text-[#D3D3D3]">230</p>
            <h3 className="mt-2 max-w-sm text-2xl font-semibold md:text-3xl">
              Countries and regions covered
            </h3>
          </div>

          <div className="rise absolute left-0 top-5/12 md:left-auto md:right-20 md:top-36 max-w-[420px] rounded-lg bg-card p-4 shadow-sm">
            <div className="rounded-md w-[200px] h-[120px] bg-muted" aria-label="Box E">
              <Image
                src="/images/home/work-samples/work-sample-5.jpg"
                alt="Case preview"
                fill
                className="object-cover"
                // sizes="(max-width: 640px) 100vw, 50vw"
                priority
              />
            </div>
            {/* <p className="mt-2 text-sm opacity-70">AI Connect Summit</p> */}
          </div>

          <div className="rise absolute bottom-24 right-0 md:bottom-28 md:right-4 text-right">
            <p className="text-3xl font-semibold italic text-[#D3D3D3]">600,000+</p>
            <h3 className="mt-2 max-w-sm text-2xl font-semibold md:text-3xl">
              Websites built and managed
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div>
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto mt-5 sm:mt-10">
          <h3 className="font-medium text-black text-[28px] sm:text-[30px] lg:text-[40px] leading-[36px] sm:leading-[40px] md:leading-[46px] lg:leading-[52px] font-sequel px-4">
            Turn ideas into impact with our expert team
          </h3>
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
          <Link href="/contact">
            <button className="rounded-full bg-gradient-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
              <div className="flex items-center gap-3 rounded-full px-4 py-3 bg-black">
                Chat For Free!
                <div className="bg-white text-black rounded-full p-0.5">
                  <ArrowRight />
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
