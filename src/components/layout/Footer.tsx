"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import web_page_logo_white from "@/assets/web-page-logo-white.svg";
import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";
import { CODCRM_FORM_NEWSLETTER } from "@/lib/codcrm-embeds";
import { companyMailingAddressLines } from "@/lib/company-mailing-address";

const footerLinks = {
  solutions: [
    { href: "/solutions/digital-storefront", label: "Digital Storefront" },
    { href: "/solutions/order-flow", label: "Order Flow" },
    { href: "/solutions/custom-extensions", label: "Custom Extensions" },
  ],
  industries: [
    { href: "/industries/print-sign", label: "Print & Sign" },
    { href: "/industries/custom-apparel", label: "Custom apparel" },
    { href: "/contact?industry=other", label: "Other made-to-order work" },
  ],
  company: [
    { href: "/projects", label: "Projects" },
    { href: "/pricing", label: "Pricing" },
    { href: "/pricing#faq", label: "FAQ" },
    { href: "/security", label: "Security" },
    { href: "/company", label: "Company" },
    { href: "/resources", label: "Resources" },
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
                Commerce and order operations for businesses where every order is customized for the customer. From first click to finished order.
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
                        Mailing address
                      </span>
                      <div className="text-base md:text-[20px] leading-6 font-light text-white/90 flex flex-col">
                        {companyMailingAddressLines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                      <div className="text-base md:text-[20px] leading-6 font-light text-white/90 flex flex-col mt-2">
                        <p className="font-medium text-white">Contact hours</p>
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

              {/* Subscribe Section — CodCRM newsletter form (source=newsletter) */}
              <div className="lg:col-span-4">
                <p className="text-base md:text-[18px] leading-[21px] font-medium font-sequel mb-3">
                  Subscribe
                </p>
                <div className="w-full max-w-full md:max-w-[439px] rounded-2xl bg-white p-3">
                  <CodCRMEmbed
                    kind="form"
                    slug={CODCRM_FORM_NEWSLETTER}
                    source="newsletter"
                    title="Subscribe to CodSphere updates"
                    variant="plain"
                    minHeight={240}
                    fallback={
                      <p className="text-sm text-black/70 font-sequel">
                        The signup form is being connected. Email{" "}
                        <a href="mailto:info@codsphere.ca" className="underline">
                          info@codsphere.ca
                        </a>{" "}
                        to get updates, or{" "}
                        <Link href="/contact" className="underline">
                          book a 30-minute call
                        </Link>
                        .
                      </p>
                    }
                  />
                </div>
              </div>
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
