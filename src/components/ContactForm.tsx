"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

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

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#f5f5f5] rounded-2xl p-8 border border-black/5">
      {/* VERIFY notice */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-6 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-amber-600 font-medium text-sm">VERIFY: Form submission not wired</p>
          <p className="text-black/60 text-sm mt-1">
            Please email <a href="mailto:info@codsphere.ca" className="text-[#010b66] hover:underline">info@codsphere.ca</a> directly until form submission is configured.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Name & Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-1.5">
              Name <span className="text-amber-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all text-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-1.5">
              Work email <span className="text-amber-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all text-black"
            />
          </div>
        </div>

        {/* Row 2: Company & Website */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-black mb-1.5">
              Company <span className="text-amber-600">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all text-black"
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-black mb-1.5">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="https://"
              className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all text-black"
            />
          </div>
        </div>

        {/* Row 3: Industry & Employees */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-black mb-1.5">
              Industry <span className="text-amber-600">*</span>
            </label>
            <select
              id="industry"
              name="industry"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all text-black"
            >
              <option value="">Select...</option>
              {industryOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="employees" className="block text-sm font-medium text-black mb-1.5">
              Employee range
            </label>
            <select
              id="employees"
              name="employees"
              className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all text-black"
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
            <label htmlFor="monthly_jobs" className="block text-sm font-medium text-black mb-1.5">
              Monthly custom jobs
            </label>
            <select
              id="monthly_jobs"
              name="monthly_jobs"
              className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all text-black"
            >
              <option value="">Select...</option>
              {jobVolumeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="current_tools" className="block text-sm font-medium text-black mb-1.5">
              Current tools
            </label>
            <input
              type="text"
              id="current_tools"
              name="current_tools"
              placeholder="e.g., shopVOX, QuickBooks, spreadsheets"
              className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all text-black"
            />
          </div>
        </div>

        {/* Purpose */}
        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-black mb-1.5">
            What are you interested in? <span className="text-amber-600">*</span>
          </label>
          <select
            id="purpose"
            name="purpose"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all text-black"
          >
            <option value="">Select...</option>
            {purposeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <p className="text-black/50 text-xs mt-1.5">
            Diagnostic is a paid engagement. This form books the free mapping conversation first.
          </p>
        </div>

        {/* First pain */}
        <div>
          <label htmlFor="first_pain" className="block text-sm font-medium text-black mb-1.5">
            What's your first pain? <span className="text-amber-600">*</span>
          </label>
          <textarea
            id="first_pain"
            name="first_pain"
            rows={2}
            required
            placeholder="What's the biggest challenge in getting orders from sale to delivery?"
            className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all resize-none text-black"
          />
        </div>

        {/* Recent bad order */}
        <div>
          <label htmlFor="recent_bad_order" className="block text-sm font-medium text-black mb-1.5">
            Tell us about a recent order that should have gone better
          </label>
          <textarea
            id="recent_bad_order"
            name="recent_bad_order"
            rows={2}
            placeholder="What went wrong? Where did it stall?"
            className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all resize-none text-black"
          />
        </div>

        {/* Row: Start date & Budget */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="start_date" className="block text-sm font-medium text-black mb-1.5">
              When do you want to start?
            </label>
            <input
              type="text"
              id="start_date"
              name="start_date"
              placeholder="e.g., This month, Q4, 2027"
              className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all text-black"
            />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-black mb-1.5">
              Budget band
            </label>
            <select
              id="budget"
              name="budget"
              className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-white focus:border-[#010b66] focus:ring-2 focus:ring-[#33fcfe]/20 outline-none transition-all text-black"
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
            className="mt-1 w-4 h-4 rounded border-black/20 text-[#010b66] focus:ring-[#33fcfe]"
          />
          <label htmlFor="consent" className="text-sm text-black/70">
            I agree to receive communications from CodSphere. See our{" "}
            <Link href="/privacy-policy" className="text-[#010b66] hover:underline">
              privacy policy
            </Link>
            . <span className="text-amber-600">*</span>
          </label>
        </div>

        <button
          type="button"
          disabled
          className="w-full bg-black/30 text-white/60 font-medium py-3 rounded-lg cursor-not-allowed"
        >
          Show us your order flow
        </button>

        <p className="text-black/50 text-xs text-center">
          We'll respond within one business day.
        </p>
      </form>
    </div>
  );
}
