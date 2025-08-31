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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto max-w-[1440px] px-4 md:px-8 xl:px-[90px]">
        {/* Everything else remains exactly the same */}
        {/* Top Section - Logo, Description, and Links */}
        <div className="pt-12 pb-10 md:pt-[60px] md:pb-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left Section - Logo and Description */}
            <div className="md:col-span-5">
              {/* Logo */}
              <Link href="/" className="inline-block mb-4">
                <div className="flex items-center gap-2">
                  {/* Logo Icon */}
                  <div className="w-10 h-10 md:w-12 md:h-12 relative">
                    <Image
                      src="/logo-icon-white.svg"
                      alt="CodSphere Icon"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  {/* Logo Text */}
                  <span className="text-xl md:text-2xl font-bold uppercase tracking-wider font-sequel">
                    Cod Sphere
                  </span>
                </div>
              </Link>

              {/* Description */}
              <p className="text-base md:text-[18px] leading-relaxed md:leading-[21px] font-light max-w-full md:max-w-[514px] text-white/90 mb-6 font-sequel">
                We&apos;d love to get a first impression from you, your business
                and project or idea – for this, we just need some basic
                information. It will help both of us streamline the process and
                only takes 3 minutes.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-[11px]">
                <SocialIcon href="https://www.instagram.com/codsphere/" label="Instagram">
                  <Instagram className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </SocialIcon>
                <SocialIcon href="https://www.facebook.com/profile.php?id=61560405396189" label="Facebook">
                  <Facebook className="h-5 w-5" strokeWidth={1.5} />
                </SocialIcon>
                <SocialIcon href="https://youtube.com" label="YouTube">
                  <Youtube className="h-5 w-5" strokeWidth={1.5} />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/company/codsphere/" label="LinkedIn">
                  <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </SocialIcon>
              </div>
            </div>

            {/* Middle Section - First Links Column */}
            <div className="md:col-span-3">
              <h3 className="text-lg md:text-[20px] leading-6 font-medium mb-4 md:mb-[23px] font-sequel">
                Important Links
              </h3>
              <ul className="space-y-3 md:space-y-[18px]">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/case-studies", label: "Case Studies" },
                  { href: "/blog", label: "Insights" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-base md:text-[18px] leading-[21px] font-normal hover:underline transition-all font-sequel"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Second Links Column */}
            <div className="md:col-span-4">
              <h3 className="text-lg md:text-[20px] leading-6 font-medium mb-4 md:mb-[23px] font-sequel">
                Important Links
              </h3>
              <ul className="space-y-3 md:space-y-[18px]">
                {[
                  { href: "/about#testimonials", label: "Testimonials" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-base md:text-[18px] leading-[21px] font-normal hover:underline transition-all font-sequel"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section - Contact Info and Subscribe */}
        <div className="pb-10 md:pb-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                {/* Office */}
                <div>
                  <div className="flex items-center gap-2 mb-2 md:mb-[10px]">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                    <span className="text-lg md:text-[20px] leading-6 font-medium font-sequel">
                      Office
                    </span>
                  </div>
                  <p className="text-lg md:text-[20px] leading-6 font-medium mb-1 md:mb-[6px] font-sequel">
                    Vancouver
                  </p>
                  <div className="text-base md:text-[20px] leading-6 font-normal text-white/90 font-sequel">
                    <p>Mon—Fri</p>
                    <p>09:00—21:00</p>
                  </div>
                </div>

                {/* Contact Number */}
                <div>
                  <div className="flex items-center gap-2 mb-2 md:mb-[10px]">
                    <Phone className="h-5 w-5 md:h-6 md:w-6" />
                    <span className="text-lg md:text-[20px] leading-6 font-medium font-sequel">
                      Contact Number
                    </span>
                  </div>
                  <Link 
                    href="tel:+16049062693" 
                    className="text-base md:text-[20px] leading-6 font-normal text-white/90 hover:underline transition-all font-sequel"
                  >
                    +1 (604) 906-2693
                  </Link>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-2 mb-2 md:mb-[10px]">
                    <Mail className="h-5 w-5 md:h-6 md:w-6" />
                    <span className="text-lg md:text-[20px] leading-6 font-medium font-sequel">
                      Email
                    </span>
                  </div>
                  <Link 
                    href="mailto:info@codsphere.ca" 
                    className="text-base md:text-[20px] leading-6 font-normal text-white/90 hover:underline transition-all font-sequel"
                  >
                    info@codsphere.ca
                  </Link>
                </div>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="md:col-span-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const email = formData.get("email") as string;
                  console.log("Subscribe:", email);
                  e.currentTarget.reset();
                }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
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
                    placeholder="Email"
                    className="w-full h-12 md:h-14 px-4 md:px-5 pr-14 md:pr-16 rounded-full bg-white text-black text-base md:text-[18px] placeholder:text-[#B5B5B5] outline-none focus:ring-2 focus:ring-cyan-400 transition-all font-sequel"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-900 transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] md:h-[2px] bg-white/80"></div>

        {/* Bottom Section - Copyright and Links */}
        <div className="py-4 md:py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-[16px] leading-[19px] font-light text-white/90 font-sequel">
            <div className="order-2 md:order-1">
              © {year} Codsphere. All Rights Reserved.
            </div>
            
            <div className="order-1 md:order-2 flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <Link href="/" className="hover:underline transition-all">
                Term & Conditions
              </Link>
              <Link href="/" className="hover:underline transition-all">
                Disclaimer
              </Link>
              <Link href="/" className="hover:underline transition-all">
                Privacy Policy
              </Link>
            </div>

            <div className="order-3">
              Website by:{" "}
              <a href="/" className="hover:underline transition-all">
                WarrgyizMorsch
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Social Icon Component
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