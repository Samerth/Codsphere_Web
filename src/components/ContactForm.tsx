"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { trackEvent } from "@/utils/analytics";

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

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  industry: string;
  employees: string;
  monthly_jobs: string;
  current_tools: string;
  purpose: string;
  first_pain: string;
  recent_bad_order: string;
  start_date: string;
  budget: string;
  consent: boolean;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  company: "",
  website: "",
  industry: "",
  employees: "",
  monthly_jobs: "",
  current_tools: "",
  purpose: "",
  first_pain: "",
  recent_bad_order: "",
  start_date: "",
  budget: "",
  consent: false,
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasStartedForm, setHasStartedForm] = useState(false);

  useEffect(() => {
    if (hasStartedForm) return;

    const hasValue = Object.entries(formData).some(([key, value]) => {
      if (key === "consent") return false;
      return typeof value === "string" && value.length > 0;
    });

    if (hasValue) {
      setHasStartedForm(true);
      trackEvent({
        action: "order_flow_form_start",
        category: "Lead Form",
        label: "/contact",
      });
    }
  }, [formData, hasStartedForm]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        trackEvent({
          action: "order_flow_form_submit",
          category: "Lead Form",
          label: `/contact - ${formData.purpose}`,
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        trackEvent({
          action: "order_flow_form_error",
          category: "Lead Form",
          label: data.message || "Unknown error",
        });
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
      trackEvent({
        action: "order_flow_form_error",
        category: "Lead Form",
        label: "Network error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-[#f5f5f5] rounded-2xl p-8 border border-black/5">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-black mb-3">
            Thanks for reaching out
          </h3>
          <p className="text-black/70 mb-6 max-w-md mx-auto">
            We've received your order flow details. Our team will review and respond within one business day.
          </p>
          <p className="text-black/50 text-sm">
            Check your inbox for a confirmation email from us.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] rounded-2xl p-8 border border-black/5">
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.company}
              onChange={handleChange}
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
              value={formData.website}
              onChange={handleChange}
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
              value={formData.industry}
              onChange={handleChange}
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
              value={formData.employees}
              onChange={handleChange}
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
              value={formData.monthly_jobs}
              onChange={handleChange}
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
              value={formData.current_tools}
              onChange={handleChange}
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
            value={formData.purpose}
            onChange={handleChange}
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
            value={formData.first_pain}
            onChange={handleChange}
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
            value={formData.recent_bad_order}
            onChange={handleChange}
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
              value={formData.start_date}
              onChange={handleChange}
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
              value={formData.budget}
              onChange={handleChange}
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
            checked={formData.consent}
            onChange={handleChange}
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
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#33FCFE] to-[#010B66] hover:opacity-90 disabled:opacity-50 text-white font-medium py-3 rounded-xl transition-opacity flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Show us your order flow
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-black/50 text-xs text-center">
          We'll respond within one business day.
        </p>
      </form>
    </div>
  );
}
