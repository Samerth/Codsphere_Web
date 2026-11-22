"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackCtaClick } from "@/utils/analytics";

const ctaClass =
  "inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#33FCFE] to-[#010B66] text-white text-lg font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity";

export function ApparelCta({
  href,
  location,
  label,
  id,
  className,
  fullWidth,
}: {
  href: string;
  location: "apparel_hero" | "apparel_sticky" | "apparel_fallback";
  label: string;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <Link
      id={id}
      href={href}
      className={`${ctaClass} ${fullWidth ? "w-full" : ""} ${className ?? ""}`}
      onClick={() => trackCtaClick("book_order_flow_map", location, href)}
    >
      {label}
      <ArrowRight className="w-5 h-5" aria-hidden />
    </Link>
  );
}
