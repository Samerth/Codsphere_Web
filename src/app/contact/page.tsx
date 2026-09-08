import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Show Us Your Order Flow | CodSphere",
  description:
    "Tell us about an order that should have gone better. We'll show you how CodSphere could help. Serving print, sign, promo, and custom fabrication shops across Canada.",
  keywords:
    "contact CodSphere, order flow consultation, print shop software, sign shop software, Vancouver tech company",
  openGraph: {
    title: "Contact — Show Us Your Order Flow | CodSphere",
    description:
      "Tell us about an order that should have gone better. We'll show you how CodSphere could help.",
    url: "https://codsphere.com/contact",
    images: [
      {
        url: "https://codsphere.com/og/web-og-1200x630.png",
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
      "Tell us about an order that should have gone better. We'll show you how CodSphere could help.",
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
  alternates: {
    canonical: "https://codsphere.com/contact",
  },
};

const purposeOptions = [
  { value: "diagnostic", label: "Order Flow Diagnostic" },
  { value: "storefront", label: "Digital Storefront" },
  { value: "order-flow", label: "Order Flow Pilot" },
  { value: "extensions", label: "Custom Extensions" },
  { value: "other", label: "Other" },
];

const benefits = [
  "Free diagnostic conversation — no pressure",
  "We'll tell you honestly if we can help",
  "Response within 24–48 hours",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Show us your order flow
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Tell us about an order that should have gone better. 
              We'll show you how it could have moved through a system built for custom work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left: Trust points & contact info */}
            <div>
              <h2 className="text-2xl font-bold text-[#0a1628] mb-6">
                Let's talk about your order flow
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're exploring a diagnostic, storefront, order flow pilot, or custom work — 
                the conversation starts the same way. Tell us how orders move through your shop today.
              </p>

              <div className="mb-8">
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-semibold text-[#0a1628] mb-4">Direct contact</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@codsphere.ca"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#14b8a6] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    info@codsphere.ca
                  </a>
                  <a
                    href="tel:+16049062693"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#14b8a6] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +1 (604) 906-2693
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    Vancouver, BC, Canada
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/20 outline-none transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/20 outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                    What are you interested in?
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select an option</option>
                    {purposeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your order flow
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/20 outline-none transition-all resize-none"
                    placeholder="What kind of orders do you handle? Where do they come from? What's the biggest challenge in getting them from sale to delivery?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#14b8a6] to-[#0891b2] text-white font-medium py-4 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Show Us Your Order Flow
                </button>

                <p className="text-gray-500 text-xs text-center">
                  We'll respond within 24–48 hours. Your information is handled according to our{" "}
                  <Link href="/privacy-policy" className="text-[#14b8a6] hover:underline">
                    privacy policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
