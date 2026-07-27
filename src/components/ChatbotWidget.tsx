"use client";

import Script from "next/script";
import { useRef } from "react";

declare global {
  interface Window {
    CodChat?: {
      toggle: () => void;
    };
  }
}

const WIDGET_SRC = "https://codsphere.chat/widget.js";
const WIDGET_ID = "d8de3c64-9eb4-4dbf-be16-80a921ed1424";

export default function ChatbotWidget() {
  const opened = useRef(false);

  const openOnLoad = () => {
    if (opened.current) return;

    const tryOpen = () => {
      if (!window.CodChat || opened.current) return false;
      window.CodChat.toggle();
      opened.current = true;
      return true;
    };

    if (tryOpen()) return;

    const interval = window.setInterval(() => {
      if (tryOpen()) window.clearInterval(interval);
    }, 100);

    window.setTimeout(() => window.clearInterval(interval), 10000);
  };

  return (
    <Script
      src={WIDGET_SRC}
      data-widget-id={WIDGET_ID}
      strategy="afterInteractive"
      onLoad={openOnLoad}
    />
  );
}
