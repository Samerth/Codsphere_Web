"use client";

import { useEffect, useRef, useState } from "react";

interface CodCRMEmbedProps {
  minHeight?: number;
}

const FORM_ORIGIN = "https://www.codcrm.com";
const FORM_SRC = `${FORM_ORIGIN}/f/codsphere/show-us-your-order-flow?embed=1`;

export function CodCRMEmbed({ minHeight = 640 }: CodCRMEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(minHeight);
  const [src, setSrc] = useState(FORM_SRC);

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    let first: Record<string, string> = {};
    try { first = JSON.parse(sessionStorage.getItem("codsphere_utm") || "{}"); } catch {}
    qs.forEach((v, k) => { if (k.startsWith("utm_") && !first[k]) first[k] = v; });
    try { sessionStorage.setItem("codsphere_utm", JSON.stringify(first)); } catch {}
    Object.entries(first).forEach(([k, v]) => qs.set(k, v));
    qs.set("embed", "1");
    setSrc(`${FORM_SRC.split("?")[0]}?${qs.toString()}`);
  }, []);

  useEffect(() => {
    setHeight((prev) => Math.max(prev, minHeight));
  }, [minHeight]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== FORM_ORIGIN) return;
      const data = event.data;
      if (!data || typeof data !== "object") return;
      const next = Number((data as { codcrmFormHeight?: unknown }).codcrmFormHeight);
      if (!Number.isFinite(next) || next < 200) return;
      setHeight(Math.ceil(next));
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="scroll-mt-28 rounded-[24px] p-[3px] bg-linear-to-r from-[#33FCFE] to-[#010B66] max-w-[900px] mx-auto overflow-visible">
      <div className="rounded-[22px] bg-[#F3F3F3] p-6 md:p-8 overflow-visible">
        <iframe
          ref={iframeRef}
          src={src}
          title="Book a free 30-min order-flow map"
          className="w-full rounded-[14px] bg-white block border-0 overflow-visible"
          style={{ height, minHeight }}
          scrolling="no"
        />
      </div>
    </div>
  );
}
