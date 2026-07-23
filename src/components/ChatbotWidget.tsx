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
const WIDGET_ID = "9cb0f9b3-f24c-474e-95a6-0b48e261cf3d";

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
