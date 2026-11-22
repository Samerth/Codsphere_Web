import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, CheckCircle, ArrowDown } from "lucide-react";
import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";
import {
  CODCRM_BOOKING_ORDER_FLOW_MAP,
  CODCRM_FORM_CONTACT_FALLBACK,
} from "@/lib/codcrm-embeds";

export const metadata: Metadata = {
  title: "Contact — Book a Free Order-Flow Map | CodSphere",
  description:
    "Sell custom work online. Track every job. Book a free 30-minute order-flow map.",
  alternates: {
    canonical: "https://www.codsphere.com/contact",
  },
  openGraph: {
    title: "Contact — Book a Free Order-Flow Map | CodSphere",
    description:
      "Sell custom work online. Track every job. Book a free 30-minute order-flow map.",
    url: "https://www.codsphere.com/contact",
    images: [
      {
        url: "https://www.codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere — Book a Free Order-Flow Map",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Book a Free Order-Flow Map | CodSphere",
    description:
      "Sell custom work online. Track every job. Book a free 30-minute order-flow map.",
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
};

const benefits = [
  "Free 30-minute order-flow map",
  "We will tell you if CodSphere is not the right fit",
  "Response within one business day",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <section
        id="book"
        className="bg-black py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40 scroll-mt-28"
      >
        <div className="container-wrapper">
          <div className="max-w-3xl mb-10">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Book a 30-minute call
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Sell custom work online. Track every job. Free 30-minute order-flow map.
            </p>
          </div>

          <div className="relative overflow-hidden max-w-[900px]">
            <div
              className="absolute -inset-6 bg-[#33FCFE]/20 blur-3xl rounded-full pointer-events-none"
              aria-hidden
            />
            <div className="relative">
              <CodCRMEmbed
                kind="booking"
                slug={CODCRM_BOOKING_ORDER_FLOW_MAP}
                title="Book a 30-minute call"
                minHeight={720}
                fallback={
                  <div
                    id="booking-fallback"
                    tabIndex={-1}
                    className="rounded-2xl border border-white/15 bg-white p-6 text-center"
                  >
                    <h2 className="text-lg font-semibold text-black mb-2">
                      The booking calendar is not available yet
                    </h2>
                    <p className="text-black/70 mb-4">
                      You can still leave a short note below, or reach us directly.
                    </p>
                    <Link
                      href="#contact-form"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#33FCFE] to-[#010B66] text-white text-lg font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                    >
                      Open the contact form
                    </Link>
                    <p className="text-sm text-black/60 mt-4">
                      Or write to{" "}
                      <a href="mailto:info@codsphere.ca" className="underline">
                        info@codsphere.ca
                      </a>{" "}
                      or call{" "}
                      <a href="tel:+16049062693" className="underline">
                        +1 (604) 906-2693
                      </a>
                      .
                    </p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 scroll-mt-24 sm:scroll-mt-28" id="contact-content">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2 scroll-mt-24 sm:scroll-mt-28 pt-2" id="contact-info">
              <h2 className="text-2xl font-bold text-black mb-6">Or send a short note</h2>
              <p className="text-black/70 mb-8">
                If a call is not convenient, leave your name, email, phone, company, trade, and one
                line on the stuck order. We will follow up within one business day.
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

            <div id="contact-form" className="lg:col-span-3 scroll-mt-28">
              <div className="relative overflow-hidden">
                <div
                  className="absolute -inset-6 bg-[#33FCFE]/20 blur-3xl rounded-full pointer-events-none"
                  aria-hidden
                />
                <div className="relative">
                  <CodCRMEmbed
                    kind="form"
                    slug={CODCRM_FORM_CONTACT_FALLBACK}
                    source="contact-fallback"
                    title="Contact form"
                    minHeight={640}
                    fallback={
                      <p className="text-sm text-black/70">
                        The form could not load. Email{" "}
                        <a href="mailto:info@codsphere.ca" className="underline">
                          info@codsphere.ca
                        </a>{" "}
                        or call{" "}
                        <a href="tel:+16049062693" className="underline">
                          +1 (604) 906-2693
                        </a>
                        .
                      </p>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
