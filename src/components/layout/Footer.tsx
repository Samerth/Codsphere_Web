"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import web_page_logo_white from "@/assets/web-page-logo-white.svg";

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
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
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
    <footer className="bg-black text-white">
      <div className="container-wrapper pt-more">
        {/* Top Section - Logo, Description, and Links */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12">
            {/* Left Section - Logo and Description */}
            <div className="md:col-span-4">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src={web_page_logo_white}
                  alt="CodSphere Logo"
                  className="object-contain h-[25px] sm:h-[28px] lg:h-[34px] w-auto"
                  priority
                />
              </Link>
              <p className="text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[21px] font-light max-w-full md:max-w-[514px] text-white/90 mb-4 sm:mb-6 font-sequel">
                Commerce and order operations for custom-order businesses. From first click to finished order.
              </p>
              <div className="flex items-center gap-[11px]">
                <SocialIcon href="https://www.instagram.com/codsphere/" label="Instagram">
                  <Instagram className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </SocialIcon>
                <SocialIcon href="https://www.facebook.com/profile.php?id=61560405396189" label="Facebook">
                  <Facebook className="h-5 w-5" strokeWidth={1.5} />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/company/codsphere/" label="LinkedIn">
                  <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </SocialIcon>
              </div>
            </div>

            {/* Solutions Links */}
            <div className="md:col-span-2">
              <h4 className="text-lg md:text-[20px] leading-6 font-bold mb-4 md:mb-[23px] font-sequel">
                Solutions
              </h4>
              <ul className="space-y-3 md:space-y-[18px]">
                {footerLinks.solutions.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base md:text-[18px] leading-[21px] font-light hover:underline transition-all font-sequel"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="md:col-span-2">
              <h4 className="text-lg md:text-[20px] leading-6 font-bold mb-4 md:mb-[23px] font-sequel">
                Industries
              </h4>
              <ul className="space-y-3 md:space-y-[18px]">
                {footerLinks.industries.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base md:text-[18px] leading-[21px] font-light hover:underline transition-all font-sequel"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="md:col-span-4">
              <h4 className="text-lg md:text-[20px] leading-6 font-bold mb-4 md:mb-[23px] font-sequel">
                Company
              </h4>
              <ul className="space-y-3 md:space-y-[18px]">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base md:text-[18px] leading-[21px] font-light hover:underline transition-all font-sequel"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Middle Section - Contact Info and Subscribe */}
          <div className="pb-10 md:pb-[40px]">
            <h3 className="text-lg md:text-[20px] leading-6 font-bold mb-4 md:mb-[23px] font-sequel">
              Get In Touch
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-8">
                <div className="flex flex-col sm:flex-row justify-between gap-6">
                  <div className="flex gap-3">
                    <div className="flex gap-2">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-lg md:text-[20px] leading-5 font-semibold font-sequel">
                        Office
                      </span>
                      <span className="text-lg md:text-[20px] leading-5 font-medium font-sequel">
                        Vancouver
                      </span>
                      <div className="text-base md:text-[20px] leading-6 font-light text-white/90 flex flex-col">
                        <p>Mon—Fri</p>
                        <p>09:00—21:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex gap-2">
                      <Phone className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-lg md:text-[20px] leading-5 font-semibold font-sequel">
                        Contact Number
                      </span>
                      <Link
                        href="tel:+16049062693"
                        className="text-base md:text-[20px] leading-6 font-light text-white/90 hover:underline transition-all font-sequel"
                      >
                        +1 (604) 906-2693
                      </Link>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex gap-2">
                      <Mail className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-lg md:text-[20px] leading-5 font-semibold font-sequel">
                        Email
                      </span>
                      <Link
                        href="mailto:info@codsphere.ca"
                        className="text-base md:text-[20px] leading-6 font-light text-white/90 hover:underline transition-all font-sequel"
                      >
                        info@codsphere.ca
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subscribe Section */}
              <div className="lg:col-span-4">
                {subscriptionStatus.type === "success" && (
                  <p className="text-green-400 text-sm mb-2 font-sequel">
                    {subscriptionStatus.message}
                  </p>
                )}
                {subscriptionStatus.type === "error" && (
                  <p className="text-red-400 text-sm mb-2 font-sequel">
                    {subscriptionStatus.message}
                  </p>
                )}

                <form onSubmit={handleSubscribe} className="flex flex-col items-start gap-4">
                  <label
                    htmlFor="footer-email"
                    className="text-base md:text-[18px] leading-[21px] font-medium whitespace-nowrap font-sequel"
                  >
                    Subscribe
                  </label>
                  <div className="relative w-full sm:flex-1 max-w-full md:max-w-[439px]">
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (subscriptionStatus.type === "error") {
                          setSubscriptionStatus({ type: "idle" });
                        }
                      }}
                      placeholder="Email"
                      className="w-full h-12 md:h-14 px-4 md:px-5 pr-14 md:pr-16 rounded-full bg-white text-black text-base md:text-[18px] placeholder:text-[#B5B5B5] outline-none focus:ring-2 focus:ring-cyan-400 transition-all font-sequel"
                      disabled={subscriptionStatus.type === "loading"}
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      disabled={subscriptionStatus.type === "loading"}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors group ${
                        subscriptionStatus.type === "loading"
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-black hover:bg-gray-900"
                      }`}
                    >
                      {subscriptionStatus.type === "loading" ? (
                        <svg
                          className="animate-spin h-4 w-4 md:h-5 md:w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-white group-hover:translate-x-1 transition-transform" />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Existing Customer Sign-in */}
          <div className="pb-6 border-b border-white/20">
            <p className="text-white/60 text-sm mb-3 font-sequel">Existing customers</p>
            <div className="flex gap-6">
              <a
                href="https://codsphere.chat"
                className="text-white/80 hover:text-white text-sm transition-colors font-sequel"
              >
                CodChat Sign In
              </a>
              <a
                href="https://codcrm.com"
                className="text-white/80 hover:text-white text-sm transition-colors font-sequel"
              >
                CodCRM Sign In
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] md:h-[2px] bg-white/80"></div>

        {/* Bottom Section - Copyright and Links */}
        <div className="py-4">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-2 text-sm md:text-[16px] leading-[19px] font-light text-white/90 font-sequel">
            <div className="">© {year} CodSphere. All Rights Reserved.</div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href} className="hover:underline transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
    >
      {children}
    </Link>
  );
}
