import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Show Us How an Order Works | CodSphere",
  description:
    "In 30 minutes, we will map the customer entry, the handoffs and where visibility breaks. If CodSphere is not the right fit, we will say so.",
  keywords:
    "contact CodSphere, order flow consultation, print shop software, sign shop software, Vancouver tech company",
  openGraph: {
    title: "Contact — Show Us How an Order Works | CodSphere",
    description:
      "In 30 minutes, we will map the customer entry, the handoffs and where visibility breaks.",
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
    title: "Contact — Show Us How an Order Works | CodSphere",
    description:
      "In 30 minutes, we will map the customer entry, the handoffs and where visibility breaks.",
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
  alternates: {
    canonical: "https://codsphere.com/contact",
  },
};

const purposeOptions = [
  { value: "diagnostic", label: "Diagnostic" },
  { value: "storefront", label: "Storefront" },
  { value: "order-flow", label: "Order Flow" },
  { value: "extensions", label: "Extensions" },
  { value: "other", label: "Other" },
];

const industryOptions = [
  { value: "print-sign", label: "Print & Sign" },
  { value: "promo-apparel", label: "Promo & Apparel" },
  { value: "custom-fabrication", label: "Custom Fabrication" },
  { value: "other", label: "Other" },
];

const employeeRanges = [
  { value: "1-5", label: "1–5" },
  { value: "6-15", label: "6–15" },
  { value: "16-30", label: "16–30" },
  { value: "31-50", label: "31–50" },
  { value: "50+", label: "50+" },
];

const jobVolumeOptions = [
  { value: "under-50", label: "Under 50" },
  { value: "50-100", label: "50–100" },
  { value: "100-250", label: "100–250" },
  { value: "250-500", label: "250–500" },
  { value: "500+", label: "500+" },
];

const budgetBands = [
  { value: "under-10k", label: "Under $10k" },
  { value: "10k-25k", label: "$10k–$25k" },
  { value: "25k-50k", label: "$25k–$50k" },
  { value: "50k+", label: "$50k+" },
  { value: "not-sure", label: "Not sure yet" },
];

const benefits = [
  "Free 30-minute diagnostic conversation",
  "We will tell you if CodSphere is not the right fit",
  "Response within 24–48 hours",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#16324A] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Show us how an order works
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              In 30 minutes, we will map the customer entry, the handoffs and where visibility breaks. 
              If CodSphere is not the right fit, we will say so.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Left: Trust points & contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#1D2730] mb-6">
                Let's talk about your order flow
              </h2>
              <p className="text-[#1D2730]/70 mb-8">
                Whether you're exploring a diagnostic, storefront, order flow pilot, or custom work — 
                the conversation starts the same way. Tell us how orders move through your shop today.
              </p>

              <div className="mb-8">
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0E7C86] shrink-0 mt-0.5" />
                      <span className="text-[#1D2730]/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#1D2730]/10 pt-8">
                <h3 className="font-semibold text-[#1D2730] mb-4">Direct contact</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@codsphere.ca"
                    className="flex items-center gap-3 text-[#1D2730]/70 hover:text-[#0E7C86] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    info@codsphere.ca
                  </a>
                  <a
                    href="tel:+16049062693"
                    className="flex items-center gap-3 text-[#1D2730]/70 hover:text-[#0E7C86] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +1 (604) 906-2693
                  </a>
                  <div className="flex items-center gap-3 text-[#1D2730]/70">
                    <MapPin className="w-5 h-5" />
                    Vancouver, BC, Canada
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 bg-[#F1F5F7] rounded-2xl p-8 border border-[#1D2730]/5">
              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="space-y-5"
              >
                {/* Row 1: Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                      Name <span className="text-[#D96C3F]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all text-[#1D2730]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                      Work email <span className="text-[#D96C3F]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all text-[#1D2730]"
                    />
                  </div>
                </div>

                {/* Row 2: Company & Website */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                      Company <span className="text-[#D96C3F]">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all text-[#1D2730]"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      placeholder="https://"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all text-[#1D2730]"
                    />
                  </div>
                </div>

                {/* Row 3: Industry & Employees */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                      Industry <span className="text-[#D96C3F]">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all text-[#1D2730]"
                    >
                      <option value="">Select...</option>
                      {industryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                      Employee range
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all text-[#1D2730]"
                    >
                      <option value="">Select...</option>
                      {employeeRanges.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Monthly jobs & Current tools */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="monthly_jobs" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                      Monthly custom jobs
                    </label>
                    <select
                      id="monthly_jobs"
                      name="monthly_jobs"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all text-[#1D2730]"
                    >
                      <option value="">Select...</option>
                      {jobVolumeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="current_tools" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                      Current tools
                    </label>
                    <input
                      type="text"
                      id="current_tools"
                      name="current_tools"
                      placeholder="e.g., shopVOX, QuickBooks, spreadsheets"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all text-[#1D2730]"
                    />
                  </div>
                </div>

                {/* Purpose */}
                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                    What are you interested in? <span className="text-[#D96C3F]">*</span>
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all text-[#1D2730]"
                  >
                    <option value="">Select...</option>
                    {purposeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                {/* First pain */}
                <div>
                  <label htmlFor="first_pain" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                    What's your first pain? <span className="text-[#D96C3F]">*</span>
                  </label>
                  <textarea
                    id="first_pain"
                    name="first_pain"
                    rows={2}
                    required
                    placeholder="What's the biggest challenge in getting orders from sale to delivery?"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all resize-none text-[#1D2730]"
                  />
                </div>

                {/* Recent bad order */}
                <div>
                  <label htmlFor="recent_bad_order" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                    Tell us about a recent order that should have gone better
                  </label>
                  <textarea
                    id="recent_bad_order"
                    name="recent_bad_order"
                    rows={2}
                    placeholder="What went wrong? Where did it stall?"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all resize-none text-[#1D2730]"
                  />
                </div>

                {/* Row: Start date & Budget */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="start_date" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                      When do you want to start?
                    </label>
                    <input
                      type="text"
                      id="start_date"
                      name="start_date"
                      placeholder="e.g., This month, Q4, 2027"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all text-[#1D2730]"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-[#1D2730] mb-1.5">
                      Budget band
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1D2730]/10 bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/20 outline-none transition-all text-[#1D2730]"
                    >
                      <option value="">Select...</option>
                      {budgetBands.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 rounded border-[#1D2730]/20 text-[#0E7C86] focus:ring-[#0E7C86]"
                  />
                  <label htmlFor="consent" className="text-sm text-[#1D2730]/70">
                    I agree to receive communications from CodSphere. See our{" "}
                    <Link href="/privacy-policy" className="text-[#0E7C86] hover:underline">
                      privacy policy
                    </Link>
                    . <span className="text-[#D96C3F]">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0E7C86] text-white font-medium py-3 rounded-lg hover:bg-[#0E7C86]/90 transition-colors"
                >
                  Show us your order flow
                </button>

                <p className="text-[#1D2730]/50 text-xs text-center">
                  {/* VERIFY: CodCRM opportunity wiring — form submission routing */}
                  We'll respond within 24–48 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
