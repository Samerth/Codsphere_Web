"use client";

import { useEffect } from "react";

export default function UtmCapture() {
  useEffect(() => {
    let first: Record<string, string> = {};
    try { first = JSON.parse(sessionStorage.getItem("codsphere_utm") || "{}"); } catch {}
    new URLSearchParams(window.location.search).forEach((v, k) => { if (k.startsWith("utm_") && !first[k]) first[k] = v; });
    try { sessionStorage.setItem("codsphere_utm", JSON.stringify(first)); } catch {}
  }, []);
  return null;
}
