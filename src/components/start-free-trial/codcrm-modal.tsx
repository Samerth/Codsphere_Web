// components/start-free-trial/codcrm-modal.tsx
"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { CodCRMEmbed } from "./codcrm-embed";

export function CodCRMModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[620px] rounded-[28px] overflow-hidden border border-cyan-400/30 bg-[#09090B] shadow-[0_0_50px_rgba(0,200,255,.15)]"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition"
        >
          <X size={18} />
        </button>

        <div className="px-8 pt-8 pb-5 border-b border-white/10">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 text-cyan-300 text-sm">
            <Sparkles size={15} />
            AI • CRM • ERP • Automation
          </div>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Let&apos;s Build Something Amazing
          </h2>

          <p className="mt-3 text-gray-400 leading-7">
            Tell us about your business. Our experts will connect with you and
            recommend the right CRM, ERP or automation solution.
          </p>
        </div>

        <div className="bg-white p-5">
          <CodCRMEmbed minHeight={470} />
        </div>
      </div>
    </div>
  );
}