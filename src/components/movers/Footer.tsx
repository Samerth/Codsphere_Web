"use client";

import Link from "next/link";
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-16 lg:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <div className="mb-6">
              <p className="text-white/50 text-sm">HAVE A QUESTION?</p>
              <p className="text-white text-xl font-black">WE'RE HERE TO HELP</p>
            </div>

            <Link
              href="/movers/quote"
              className="inline-block bg-[#F5A623] text-black font-bold px-6 py-3 rounded hover:bg-[#e09000] transition-colors mb-6"
            >
              CONTACT US
            </Link>

            <div className="space-y-3">
              <div>
                <p className="text-white/50 text-sm">Customer Service</p>
                <a
                  href="tel:8003451070"
                  className="text-[#3B82F6] font-medium hover:text-[#60a5fa] transition-colors"
                >
                  800.345.1070
                </a>
              </div>
              <div>
                <p className="text-white/50 text-sm">Find a Location</p>
                <a
                  href="tel:8007200411"
                  className="text-[#3B82F6] font-medium hover:text-[#60a5fa] transition-colors"
                >
                  800.720.0411
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Youtube, href: "https://youtube.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Instagram, href: "https://instagram.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="text-white font-black text-sm tracking-wider mb-4">HELPFUL LINKS</h4>
            <ul className="space-y-2">
              {[
                { label: "Change location", href: "/swift-move/locations" },
                { label: "Own a Franchise", href: "/swift-move/franchise" },
                { label: "Careers", href: "/swift-move/careers" },
                { label: "National Accounts", href: "/swift-move/national-accounts" },
                { label: "Brand Partners", href: "/swift-move/partners" },
                { label: "Sitemap", href: "/swift-move/sitemap" },
              ].map((link, i) => (
                <li key={i}>
                  <div className="text-white/60 hover:text-white transition-colors text-sm py-1">
                    {link.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover More */}
          <div>
            <h4 className="text-white font-black text-sm tracking-wider mb-4">DISCOVER MORE</h4>
            <ul className="space-y-2">
              {[
                { label: "Moving", href: "/movers/moving" },
                { label: "Junk Removal", href: "/movers/junk-removal" },
                { label: "Storage", href: "/movers/storage" },
                { label: "Reviews", href: "/movers/reviews" },
                { label: "Resources", href: "/movers/resources" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Region/Language */}
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="bg-[#3B82F6] text-white font-bold px-4 py-2 rounded text-sm hover:bg-[#2563eb] transition-colors">
                REGION
              </button>
              <button className="bg-[#3B82F6] text-white font-bold px-4 py-2 rounded text-sm hover:bg-[#2563eb] transition-colors">
                LANGUAGE
              </button>
            </div>

            {/* Additional Links */}
            <div className="space-y-2">
              {[
                { label: "Ready to Move Brochure", href: "/swift-move/brochure" },
                { label: "Rights and Responsibilities", href: "/swift-move/rights" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            Copyright 2026 SWIFTMOVE®/International, LLC | All locations are independently owned
            and operated
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm">
            <Link
              href="/swift-move/accessibility"
              className="text-white/40 hover:text-white transition-colors"
            >
              Accessibility Statement
            </Link>
            <Link
              href="/swift-move/privacy"
              className="text-white/40 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/swift-move/terms"
              className="text-white/40 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/swift-move/cookies"
              className="text-white/40 hover:text-white transition-colors"
            >
              Do Not Share/Sell My Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
