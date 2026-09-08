"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import web_page_logo_white from "@/assets/Logo_Full.svg";

type SubscriptionStatus = {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
};

const footerLinks = {
  solutions: [
    { href: "/solutions/digital-storefront", label: "Digital Storefront" },
    { href: "/solutions/order-flow", label: "Order Flow" },
    { href: "/solutions/custom-extensions", label: "Custom Extensions" },
  ],
  industries: [
    { href: "/industries/print-sign", label: "Print & Sign" },
  ],
  company: [
    { href: "/projects", label: "Projects" },
    { href: "/pricing", label: "Pricing" },
    { href: "/security", label: "Security" },
    { href: "/company", label: "Company" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy" },
    { href: "/terms-and-conditions", label: "Terms" },
    { href: "/accessibility", label: "Accessibility" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState<SubscriptionStatus>({
    type: "idle",
  });

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscriptionStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setSubscriptionStatus({ type: "loading" });

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        setSubscriptionStatus({
          type: "success",
          message: "Thank you for subscribing!",
        });
        setEmail("");
        setTimeout(() => setSubscriptionStatus({ type: "idle" }), 5000);
      } else {
        throw new Error(result.message || "Failed to subscribe");
      }
    } catch (error: unknown) {
      setSubscriptionStatus({
        type: "error",
        message: (error as Error)?.message || "Failed to subscribe. Please try again.",
      });
      setTimeout(() => setSubscriptionStatus({ type: "idle" }), 5000);
    }
  };

  return (
    <footer className="bg-[#1D2730] text-white">
      <div className="container-wrapper pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={web_page_logo_white}
                alt="CodSphere Logo"
                className="object-contain h-[25px] sm:h-[28px] lg:h-[34px] w-auto"
                priority
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Commerce and order operations for custom-order businesses. From first click to finished order.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="https://www.instagram.com/codsphere/" label="Instagram">
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/profile.php?id=61560405396189" label="Facebook">
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/codsphere/" label="LinkedIn">
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </SocialIcon>
            </div>
          </div>

          {/* Solutions */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Industries
            </h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-white/40 mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">Vancouver, BC</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-white/40 mt-0.5 shrink-0" />
                <Link href="tel:+16049062693" className="text-white/70 hover:text-white text-sm transition-colors">
                  +1 (604) 906-2693
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-white/40 mt-0.5 shrink-0" />
                <Link href="mailto:info@codsphere.ca" className="text-white/70 hover:text-white text-sm transition-colors">
                  info@codsphere.ca
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Sign-in Section */}
        <div className="py-8 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Stay updated</h4>
            {subscriptionStatus.type === "success" && (
              <p className="text-[#0E7C86] text-sm mb-2">{subscriptionStatus.message}</p>
            )}
            {subscriptionStatus.type === "error" && (
              <p className="text-[#D96C3F] text-sm mb-2">{subscriptionStatus.message}</p>
            )}
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (subscriptionStatus.type === "error") {
                    setSubscriptionStatus({ type: "idle" });
                  }
                }}
                placeholder="Your email"
                className="flex-1 h-10 px-4 rounded-full bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 outline-none focus:border-[#0E7C86] transition-colors"
                disabled={subscriptionStatus.type === "loading"}
              />
              <button
                type="submit"
                disabled={subscriptionStatus.type === "loading"}
                className="h-10 w-10 rounded-full bg-[#0E7C86] flex items-center justify-center hover:bg-[#0E7C86]/80 transition-colors disabled:opacity-50"
              >
                {subscriptionStatus.type === "loading" ? (
                  <span className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />
                ) : (
                  <ArrowRight className="h-4 w-4 text-white" />
                )}
              </button>
            </form>
          </div>

          {/* Existing Customer Sign-in */}
          <div className="md:text-right">
            <h4 className="text-sm font-semibold mb-3">Existing customers</h4>
            <div className="flex gap-4 md:justify-end">
              <a
                href="https://codsphere.chat"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                CodChat Sign In
              </a>
              <a
                href="https://codcrm.com"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                CodCRM Sign In
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div>© {year} CodSphere. All Rights Reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/60 hover:bg-white hover:text-[#1D2730] transition-all duration-300"
    >
      {children}
    </a>
  );
}
