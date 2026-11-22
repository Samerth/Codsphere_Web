"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";
import { CODCRM_FORM_CONTACT_FALLBACK } from "@/lib/codcrm-embeds";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function FreeTrialOverlay({ open, onClose }: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[560px] max-w-full max-h-[90vh] overflow-y-auto rounded-[28px] bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-8 relative flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-2 text-gray-500 hover:text-black text-xl cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="text-[28px] font-bold text-center text-gray-900">
          Book a free 30-min order-flow map
        </h2>

        <p className="text-center text-sm text-gray-500 mt-1 mb-7">
          Let your teams and companies order from you online, with artwork approval and a
          status they can see.
        </p>

        <CodCRMEmbed
          kind="form"
          slug={CODCRM_FORM_CONTACT_FALLBACK}
          source="free-trial"
          title="Free trial inquiry"
          variant="plain"
          minHeight={480}
          fallback={
            <p className="text-sm text-gray-600 text-center">
              The form could not load.{" "}
              <Link href="/contact#contact-form" className="underline">
                Open the contact form
              </Link>{" "}
              or email{" "}
              <a href="mailto:info@codsphere.ca" className="underline">
                info@codsphere.ca
              </a>
              .
            </p>
          }
        />
      </div>
    </div>
  );
}
