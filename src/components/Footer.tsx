"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ArrowRight,
} from "lucide-react";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1260px] px-6 md:px-10 xl:px-[90px]">
      {children}
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* === TOP: Logo + blurb + two link columns === */}
      <Frame>
        <div className="grid gap-x-12 gap-y-6 pt-4 pb-6 md:grid-cols-12 md:gap-x-12 md:gap-y-8">
          {/* Left cluster */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-light.svg"
                alt="Cod Sphere"
                width={186}
                height={40}
                priority
                className="block" /* remove inline-image baseline gap */
              />
            </Link>

            {/* MUCH tighter than before */}
            <p className="mt-1 max-w-[560px] text-[18px] leading-[22px] text-white/90">
              We&apos;d love to get a first impression from you, your business
              and project or idea — for this, we just need some basic
              information. It will help both of us streamline the process and
              only takes 3 minutes.
            </p>

            {/* Socials (slightly tighter) */}
            <div className="mt-4 flex items-center gap-4">
              <Social href="https://instagram.com" label="Instagram">
                <Instagram className="h-4 w-4" />
              </Social>
              <Social href="https://facebook.com" label="Facebook">
                <Facebook className="h-5 w-5" />
              </Social>
              <Social href="https://youtube.com" label="YouTube">
                <Youtube className="h-5 w-5" />
              </Social>
              <Social href="https://linkedin.com" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Social>
            </div>
          </div>

          {/* Links col 1 */}
          <nav className="md:col-span-3" aria-labelledby="footer-links-1">
            <h3 id="footer-links-1" className="mb-4 text-[22px] font-semibold leading-6">
              Important Links
            </h3>
            <ul className="space-y-4 text-[18px] leading-6">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li><Link className="hover:underline" href="/services">Services</Link></li>
              <li><Link className="hover:underline" href="/case-studies">Case Studies</Link></li>
              <li><Link className="hover:underline" href="/insights">Insights</Link></li>
            </ul>
          </nav>

          {/* Links col 2 */}
          <nav className="md:col-span-4" aria-labelledby="footer-links-2">
            <h3 id="footer-links-2" className="mb-4 text-[22px] font-semibold leading-6">
              Important Links
            </h3>
            <ul className="space-y-4 text-[18px] leading-6">
              <li><Link className="hover:underline" href="/testimonials">Testimonials</Link></li>
              <li><Link className="hover:underline" href="/about">About Us</Link></li>
              <li><Link className="hover:underline" href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </Frame>

      {/* === MIDDLE ROW: Contact trio (left) + Subscribe (right) === */}
      <Frame>
        <div className="grid items-center gap-y-6 pb-6 md:grid-cols-12 md:gap-x-12">
          {/* Contact trio */}
          <div className="md:col-span-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  <span className="text-[20px] font-semibold leading-6">Office</span>
                </div>
                <div className="font-semibold">Vancouver</div>
                <div className="mt-1 text-white/90">
                  <div>Mon—Fri</div>
                  <div>09:00—21:00</div>
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center gap-2">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <span className="text-[20px] font-semibold leading-6">Contact Number</span>
                </div>
                <div className="text-white/90">
                  <Link href="tel:+16049062693" className="hover:underline">
                    +1 (604) 906-2693
                  </Link>
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center gap-2">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  <span className="text-[20px] font-semibold leading-6">Email</span>
                </div>
                <Link href="mailto:info@codsphere.ca" className="text-white/90 hover:underline">
                  info@codsphere.ca
                </Link>
              </div>
            </div>
          </div>

          {/* Subscribe on same baseline */}
          <div className="md:col-span-4">
            <form
              className="flex items-center justify-start gap-3 md:justify-end"
              onSubmit={(e) => {
                e.preventDefault();
                const email = (new FormData(e.currentTarget).get("email") as string) || "";
                console.log("subscribe:", email);
                e.currentTarget.reset();
              }}
            >
              <label htmlFor="footer-email" className="whitespace-nowrap text-[22px] font-semibold leading-6">
                Subscribe
              </label>
              <div className="relative w-[min(640px,100%)]">
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="h-14 w-full rounded-full bg-white px-5 pr-16 text-black outline-none placeholder:text-gray-400"
                />
                <button
                  aria-label="Subscribe"
                  type="submit"
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black ring-2 ring-cyan-200 transition hover:bg-white hover:text-black"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Frame>

      {/* Divider */}
      <Frame>
        <div className="h-[1.5px] w-full bg-white/80" />
      </Frame>

      {/* Bottom legal row */}
      <Frame>
        <div className="flex flex-col items-center justify-between gap-4 py-4 text-[14px] text-white/90 md:flex-row">
          <div>© {year} Codsphere. All Rights Reserved.</div>
          <div className="flex flex-wrap items-center gap-8">
            <Link href="/terms" className="hover:underline">Term &amp; Conditions</Link>
            <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
          <div>Website by: <a href="#" className="hover:underline">WarrgyizMorsch</a></div>
        </div>
      </Frame>
    </footer>
  );
}

function Social({
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
      className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full ring-1 ring-white transition hover:bg-white hover:text-black"
    >
      {children}
    </Link>
  );
}
