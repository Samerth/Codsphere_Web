"use client";

import { useEffect, useState } from "react";
import { ApparelCta } from "./ApparelCta";

export function ApparelStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("apparel-hero-cta");
    const book = document.getElementById("book");
    const footer = document.querySelector("footer");
    if (!hero || !book) return;

    const state = { heroOut: false, bookIn: false, footerIn: false };
    const update = () => setVisible(state.heroOut && !state.bookIn && !state.footerIn);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === hero) state.heroOut = !entry.isIntersecting;
          if (entry.target === book) state.bookIn = entry.isIntersecting;
          if (footer && entry.target === footer) state.footerIn = entry.isIntersecting;
        }
        update();
      },
      { threshold: 0.05 },
    );

    observer.observe(hero);
    observer.observe(book);
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur border-t border-black/10 px-5 pt-3"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <ApparelCta
        href="#book"
        location="apparel_sticky"
        label="Book a free 30-min map"
        fullWidth
      />
    </div>
  );
}
