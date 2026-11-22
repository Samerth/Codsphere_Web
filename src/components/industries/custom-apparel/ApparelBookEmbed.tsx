"use client";

import Link from "next/link";
import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";
import { CODCRM_BOOKING_ORDER_FLOW_MAP } from "@/lib/codcrm-embeds";
import { trackCtaClick } from "@/utils/analytics";

export function ApparelBookEmbed() {
  return (
    <CodCRMEmbed
      kind="booking"
      slug={CODCRM_BOOKING_ORDER_FLOW_MAP}
      title="Book a free 30-min order-flow map"
      minHeight={720}
      params={{ industry: "custom-apparel" }}
      defaultParams={{ utm_content: "custom-apparel" }}
    />
  );
}

export function ApparelBookFallbackLinks() {
  return (
    <p className="text-sm text-black/60 text-center mt-6">
      <Link
        href="#book"
        className="underline hover:text-black"
        onClick={() =>
          trackCtaClick("book_order_flow_map", "apparel_fallback", "#book")
        }
      >
        Open the booking form
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
