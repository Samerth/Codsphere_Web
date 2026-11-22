"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  CODCRM_FORM_ORDER_FLOW,
  CODCRM_ORIGIN,
  codcrmEmbedPath,
  type CodCrmEmbedKind,
} from "@/lib/codcrm-embeds";

interface CodCRMEmbedProps {
  minHeight?: number;
  kind?: CodCrmEmbedKind;
  slug?: string;
  /** Forced into the iframe as utm_source (and `source`) so the channel is tagged. */
  source?: string;
  title?: string;
  /** "card" is the cyan-to-navy frame used on /contact. "plain" is for tight slots like the footer. */
  variant?: "card" | "plain";
  className?: string;
  /** Always set on the iframe URL (overwrites first-touch UTMs for the same key). */
  params?: Record<string, string>;
  /** Set only when first-touch / the current URL does not already have the key. */
  defaultParams?: Record<string, string>;
  /**
   * Shown if a form iframe never reports a height (about 8s). Booking pages do
   * not post height, so this is disabled for kind="booking" unless a timeout is
   * passed explicitly.
   */
  fallback?: ReactNode;
  fallbackTimeoutMs?: number;
}

export function CodCRMEmbed({
  minHeight = 640,
  kind = "form",
  slug = CODCRM_FORM_ORDER_FLOW,
  source,
  title,
  variant = "card",
  className,
  params,
  defaultParams,
  fallback,
  fallbackTimeoutMs,
}: CodCRMEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(minHeight);
  const [src, setSrc] = useState(`${codcrmEmbedPath(kind, slug)}?embed=1`);
  const [showFallback, setShowFallback] = useState(false);
  const gotHeightRef = useRef(false);

  const iframeTitle =
    title ||
    (kind === "booking" ? "Book a 30-minute call" : "Book a free 30-min order-flow map");

  const timeoutMs =
    fallbackTimeoutMs ?? (kind === "form" && fallback ? 8000 : undefined);

  const paramsKey = JSON.stringify(params ?? {});
  const defaultParamsKey = JSON.stringify(defaultParams ?? {});

  useEffect(() => {
    const qs = new URLSearchParams();
    const resolvedParams = JSON.parse(paramsKey) as Record<string, string>;
    const resolvedDefaults = JSON.parse(defaultParamsKey) as Record<string, string>;
    let first: Record<string, string> = {};
    try {
      first = JSON.parse(sessionStorage.getItem("codsphere_utm") || "{}");
    } catch {
      first = {};
    }
    const pageQs = new URLSearchParams(window.location.search);
    pageQs.forEach((v, k) => {
      if (k.startsWith("utm_") && !first[k]) first[k] = v;
    });
    try {
      sessionStorage.setItem("codsphere_utm", JSON.stringify(first));
    } catch {
      /* ignore quota / private mode */
    }

    Object.entries(first).forEach(([k, v]) => qs.set(k, v));
    Object.entries(resolvedDefaults).forEach(([k, v]) => {
      if (v && !qs.get(k)) qs.set(k, v);
    });
    Object.entries(resolvedParams).forEach(([k, v]) => {
      if (v) qs.set(k, v);
    });
    if (source) {
      qs.set("utm_source", source);
      qs.set("source", source);
    }
    qs.set("embed", "1");
    setSrc(`${codcrmEmbedPath(kind, slug)}?${qs.toString()}`);
  }, [kind, slug, source, paramsKey, defaultParamsKey]);

  useEffect(() => {
    setHeight((prev) => Math.max(prev, minHeight));
  }, [minHeight]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== CODCRM_ORIGIN) return;
      const data = event.data;
      if (!data || typeof data !== "object") return;
      const next = Number((data as { codcrmFormHeight?: unknown }).codcrmFormHeight);
      if (!Number.isFinite(next) || next < 200) return;
      gotHeightRef.current = true;
      setShowFallback(false);
      setHeight(Math.ceil(next));
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    if (!fallback || !timeoutMs) return;
    gotHeightRef.current = false;
    setShowFallback(false);
    const id = window.setTimeout(() => {
      if (!gotHeightRef.current) setShowFallback(true);
    }, timeoutMs);
    return () => window.clearTimeout(id);
  }, [fallback, timeoutMs, src]);

  const iframe = (
    <iframe
      ref={iframeRef}
      src={src}
      title={iframeTitle}
      className="w-full rounded-[14px] bg-white block border-0 overflow-visible"
      style={{ height, minHeight, display: showFallback ? "none" : undefined }}
      scrolling="no"
    />
  );

  const inner = (
    <>
      {iframe}
      {showFallback && fallback ? <div className="mt-2">{fallback}</div> : null}
    </>
  );

  if (variant === "plain") {
    return <div className={className}>{inner}</div>;
  }

  return (
    <div
      className={`scroll-mt-28 rounded-[24px] p-[3px] bg-linear-to-r from-[#33FCFE] to-[#010B66] max-w-[900px] mx-auto overflow-visible ${className ?? ""}`}
    >
      <div className="rounded-[22px] bg-[#F3F3F3] p-6 md:p-8 overflow-visible">{inner}</div>
    </div>
  );
}
