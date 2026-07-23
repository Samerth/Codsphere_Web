"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import contact_us_banner_bg from "@/assets/images/banners/contact-us-banner-bg.jpg";

export default function ReviewHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the title with a reveal effect
      gsap.fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.out",
          delay: 0.3,
        },
      );

      // Subtle zoom effect on the background
      gsap.fromTo(
        ".hero-bg",
        { scale: 1.1 },
        {
          scale: 1,
          duration: 2,
          ease: "power2.out",
        },
      );

      // Overlay fade in
      gsap.fromTo(
        ".hero-overlay",
        { opacity: 0 },
        {
          opacity: 0.6,
          duration: 1.5,
          ease: "power2.out",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gray-900">
      <div className="relative h-[120px] sm:h-[150px] lg:h-[250px] w-full overflow-hidden">
        {/* Background image with zoom animation */}
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contact_us_banner_bg.src})` }}
        />

        {/* Black overlay */}
        <div className="hero-overlay absolute inset-0 bg-black opacity-60" />

        {/* Content with consistent container */}
        <div className="absolute inset-0 flex items-end">
          <div className="pb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="container-wrapper">
                <h1
                  ref={titleRef}
                  className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg"
                >
                  Share Your Experience
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
