"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import logoBlack from "@/assets/web-page-logo-black.svg";
import { cn } from "@/lib/utils";

const SOLUTIONS = [
  {
    href: "/solutions/digital-storefront",
    label: "Digital Storefront",
    blurb: "Make custom work easier to buy.",
  },
  {
    href: "/solutions/order-flow",
    label: "Order Flow",
    blurb: "See what is stuck before it becomes late.",
  },
  {
    href: "/solutions/custom-extensions",
    label: "Custom Extensions",
    blurb: "Build the missing piece, tied to order flow.",
  },
];

const LINKS = [
  { href: "/platform", label: "Platform" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/company", label: "Company" },
];

const CTA = { href: "/order-flow-review", label: "Show us your order flow" };

export default function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const solutionsActive = pathname.startsWith("/solutions");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-cs-line bg-white/95 backdrop-blur">
      <div className="container-wrapper">
        <nav className="flex h-16 lg:h-[76px] items-center justify-between gap-4">
          <Link href="/" aria-label="CodSphere home" className="flex items-center shrink-0">
            <Image src={logoBlack} alt="CodSphere" className="h-7 lg:h-8 w-auto" priority />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="relative group">
              <button
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3 py-2 text-[15px] transition-colors",
                  solutionsActive ? "text-cs-teal" : "text-cs-ink hover:text-cs-teal",
                )}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="w-80 rounded-2xl border border-cs-line bg-white p-2 shadow-xl">
                  {SOLUTIONS.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block rounded-xl px-3 py-2.5 hover:bg-cs-mist"
                    >
                      <span className="block text-[15px] font-medium text-cs-ink">{s.label}</span>
                      <span className="block text-[13px] text-cs-ink/60">{s.blurb}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-3 py-2 text-[15px] transition-colors",
                  isActive(l.href) ? "text-cs-teal" : "text-cs-ink hover:text-cs-teal",
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              href="/sign-in"
              className="rounded-full px-3 py-2 text-[15px] text-cs-ink hover:text-cs-teal"
            >
              Sign in
            </Link>
            <Link
              href={CTA.href}
              className="rounded-full bg-cs-teal px-5 py-2.5 text-[15px] font-medium text-white hover:bg-cs-teal-strong"
            >
              {CTA.label}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden touch-target text-cs-ink"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={26} />
          </button>
        </nav>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <Image src={logoBlack} alt="CodSphere" className="h-7 w-auto" />
              <button
                className="touch-target text-cs-ink"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="mt-6 flex flex-col">
              <button
                className="flex items-center justify-between border-b border-cs-line py-3 text-left text-[16px] text-cs-ink"
                onClick={() => setSolutionsOpen((v) => !v)}
              >
                Solutions
                <ChevronDown
                  size={18}
                  className={cn("transition-transform", solutionsOpen && "rotate-180")}
                />
              </button>
              {solutionsOpen && (
                <div className="flex flex-col border-b border-cs-line py-1">
                  {SOLUTIONS.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="py-2 pl-3 text-[15px] text-cs-ink/80"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}

              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="border-b border-cs-line py-3 text-[16px] text-cs-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/sign-in"
                className="border-b border-cs-line py-3 text-[16px] text-cs-ink"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </Link>

              <Link
                href={CTA.href}
                className="mt-5 rounded-full bg-cs-teal px-5 py-3 text-center text-[15px] font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                {CTA.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
