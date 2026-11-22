"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";
import { CODCRM_FORM_CONTACT_FALLBACK } from "@/lib/codcrm-embeds";

interface Props {
  open: boolean;
  onClose: () => void;
  plan: { name?: string; price?: string } | null;
}

export default function PricingInquiryOverlay({ open, onClose, plan }: Props) {
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

  const planName = plan?.name ?? "";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-md flex items-center justify-center p-6"
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
          {planName ? `${planName} plan` : "Pricing inquiry"}
        </h2>

        <p className="text-center text-sm text-gray-500 mt-1 mb-7">
          {plan?.price ? `${plan.price}/month — tell us about your shop and we will follow up.` : "Tell us about your shop and we will follow up."}
        </p>

        <CodCRMEmbed
          kind="form"
          slug={CODCRM_FORM_CONTACT_FALLBACK}
          source="pricing-inquiry"
          title="Pricing inquiry"
          variant="plain"
          minHeight={480}
          defaultParams={planName ? { utm_content: planName } : undefined}
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
