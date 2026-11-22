"use client";

import Link from "next/link";
import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";
import { CODCRM_BOOKING_ORDER_FLOW_MAP } from "@/lib/codcrm-embeds";
import { trackCtaClick } from "@/utils/analytics";
import { ApparelCta } from "./ApparelCta";

function BookingFallbackPanel() {
  return (
    <div
      id="booking-fallback"
      tabIndex={-1}
      className="rounded-2xl border border-black/10 bg-white p-6 text-center max-w-[900px] mx-auto"
    >
      <h3 className="text-lg font-semibold text-black mb-2">
        The booking calendar is not available yet
      </h3>
      <p className="text-black/70 mb-6">
        You can still leave a short note on the contact page, or reach us directly.
      </p>
      <ApparelCta
        href="/contact#contact-form"
        location="apparel_fallback"
        label="Open the contact form"
      />
      <p className="text-sm text-black/60 mt-6">
        Or write to{" "}
        <a href="mailto:info@codsphere.ca" className="underline hover:text-black">
          info@codsphere.ca
        </a>{" "}
        or call{" "}
        <a href="tel:+16049062693" className="underline hover:text-black">
          +1 (604) 906-2693
        </a>
        .
      </p>
    </div>
  );
}

export function ApparelBookEmbed() {
  return (
    <CodCRMEmbed
      kind="booking"
      slug={CODCRM_BOOKING_ORDER_FLOW_MAP}
      title="Book a free 30-min order-flow map"
      minHeight={720}
      params={{ industry: "custom-apparel" }}
      defaultParams={{ utm_content: "custom-apparel" }}
      fallback={<BookingFallbackPanel />}
    />
  );
}

export function ApparelBookFallbackLinks() {
  return (
    <p className="text-sm text-black/60 text-center mt-6">
      Prefer the contact page?{" "}
      <Link
        href="/contact#contact-form"
        className="underline hover:text-black"
        onClick={() =>
          trackCtaClick("book_order_flow_map", "apparel_fallback", "/contact#contact-form")
        }
      >
        Open the contact form
      </Link>
      . Or write to{" "}
      <a href="mailto:info@codsphere.ca" className="underline hover:text-black">
        info@codsphere.ca
      </a>{" "}
      or call{" "}
      <a href="tel:+16049062693" className="underline hover:text-black">
        +1 (604) 906-2693
      </a>
      .
    </p>
  );
}
