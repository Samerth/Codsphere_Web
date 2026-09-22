import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, CheckCircle, ArrowDown } from "lucide-react";
import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";

export const metadata: Metadata = {
  title: "Contact — Show Us Your Order Flow | CodSphere",
  description:
    "In 30 minutes, we will map the customer entry, the handoffs and where visibility breaks. If CodSphere is not the right fit, we will say so.",
  keywords:
    "contact CodSphere, order flow consultation, print shop software, sign shop software, Vancouver tech company",
  openGraph: {
    title: "Contact — Show Us Your Order Flow | CodSphere",
    description:
      "In 30 minutes, we will map the customer entry, the handoffs and where visibility breaks.",
    url: "https://www.codsphere.com/contact",
    images: [
      {
        url: "https://www.codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere — Show Us Your Order Flow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Show Us Your Order Flow | CodSphere",
    description:
      "In 30 minutes, we will map the customer entry, the handoffs and where visibility breaks.",
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
  alternates: {
    canonical: "https://www.codsphere.com/contact",
  },
};

const benefits = [
  "Free 30-minute order-flow map",
  "We will tell you if CodSphere is not the right fit",
  "Response within one business day",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Show us your order flow
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              In 30 minutes, we will map the customer entry, the handoffs and where visibility breaks. 
              If CodSphere is not the right fit, we will say so.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 scroll-mt-24 sm:scroll-mt-28" id="contact-content">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Left: Trust points & contact info */}
            <div className="lg:col-span-2 scroll-mt-24 sm:scroll-mt-28 pt-2" id="contact-info">
              <h2 className="text-2xl font-bold text-black mb-6">
                Let's talk about your order flow
              </h2>
              <p className="text-black/70 mb-8">
                Whether you're exploring a diagnostic, storefront, order flow pilot, or custom work — 
                the conversation starts the same way. Tell us how orders move through your shop today.
              </p>

              <div className="mb-8">
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#010b66] shrink-0 mt-0.5" />
                      <span className="text-black/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile CTA - Skip to form */}
              <Link
                href="#contact-form"
                className="lg:hidden flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#33FCFE] to-[#010b66] text-white font-medium py-3 px-6 rounded-xl mt-6 mb-8 hover:opacity-90 transition-opacity"
              >
                Skip to form
                <ArrowDown className="w-4 h-4" />
              </Link>

              <div className="border-t border-black/10 pt-8">
                <h3 className="font-semibold text-black mb-4">Direct contact</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@codsphere.ca"
                    className="flex items-center gap-3 text-black/70 hover:text-[#010b66] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    info@codsphere.ca
                  </a>
                  <a
                    href="tel:+16049062693"
                    className="flex items-center gap-3 text-black/70 hover:text-[#010b66] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +1 (604) 906-2693
                  </a>
                  <div className="flex items-center gap-3 text-black/70">
                    <MapPin className="w-5 h-5" />
                    Vancouver, BC, Canada
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div id="contact-form" className="lg:col-span-3 scroll-mt-28">
              <div className="relative overflow-visible">
                <div className="absolute -inset-6 bg-[#33FCFE]/20 blur-3xl rounded-full pointer-events-none" aria-hidden />
                <div className="relative">
                  <CodCRMEmbed minHeight={720} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
