"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const PAIN_OPTIONS = [
  "Hard to quote / order",
  "Incomplete information",
  "Proof / approval delay",
  "Supplier / production delay",
  "Delivery / status",
  "Other",
];

const EMPLOYEE_BANDS = ["1", "2–4", "5–19", "20–49", "50–99", "100+"];
const JOB_BANDS = ["<20", "20–49", "50–99", "100+"];
const BUDGET_BANDS = ["Under $10k", "$10k–$25k", "$25k–$50k", "$50k+", "Not sure yet"];

const inputClass =
  "w-full rounded-xl border border-cs-line bg-white px-4 py-2.5 text-[15px] text-cs-ink outline-none focus:border-cs-teal focus:ring-2 focus:ring-cs-teal/20";
const labelClass = "block text-[14px] font-medium text-cs-ink/80";

export default function OrderFlowReviewForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-start rounded-2xl border border-cs-line bg-white p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cs-teal/10 text-cs-teal">
          <CheckCircle2 size={26} />
        </span>
        <h2 className="mt-5 font-sequel text-[22px] font-bold text-cs-ink">
          Thanks — we have your order details.
        </h2>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-cs-ink/75">
          We will follow up to book your 30-minute Order Flow Review. In the meantime, you can email
          us directly at{" "}
          <a href="mailto:info@codsphere.ca" className="font-medium text-cs-teal">
            info@codsphere.ca
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[14px] font-medium text-cs-navy hover:text-cs-teal"
        >
          Submit another order
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-cs-line bg-white p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Work email
          </label>
          <input id="email" name="email" type="email" required className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input id="company" name="company" required className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="website">
            Website
          </label>
          <input id="website" name="website" className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="industry">
            Industry
          </label>
          <input
            id="industry"
            name="industry"
            placeholder="e.g. Print & Sign"
            className={`mt-1.5 ${inputClass}`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="employees">
            Employees
          </label>
          <select id="employees" name="employees" className={`mt-1.5 ${inputClass}`} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {EMPLOYEE_BANDS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="jobs">
            Monthly custom jobs
          </label>
          <select id="jobs" name="jobs" className={`mt-1.5 ${inputClass}`} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {JOB_BANDS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="tools">
            Current website / CRM / tools
          </label>
          <input id="tools" name="tools" className={`mt-1.5 ${inputClass}`} />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="pain">
          First pain
        </label>
        <select id="pain" name="pain" required className={`mt-1.5 ${inputClass}`} defaultValue="">
          <option value="" disabled>
            Choose the biggest problem
          </option>
          {PAIN_OPTIONS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="story">
          Describe one recent order that went wrong
        </label>
        <textarea id="story" name="story" rows={4} className={`mt-1.5 ${inputClass}`} />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="start">
            Desired start date
          </label>
          <input id="start" name="start" type="date" className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="budget">
            Budget band
          </label>
          <select id="budget" name="budget" className={`mt-1.5 ${inputClass}`} defaultValue="">
            <option value="" disabled>
              Select a band
            </option>
            {BUDGET_BANDS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone <span className="text-cs-ink/40">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" className={`mt-1.5 ${inputClass}`} />
        </div>
      </div>

      <label className="mt-6 flex items-start gap-3 text-[14px] text-cs-ink/75">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-[#0e7c86]" />
        <span>
          I agree to be contacted about my request and understand CodSphere will handle my
          information per its privacy notice.
        </span>
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-cs-teal px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-cs-teal-strong sm:w-auto"
      >
        Submit and book
      </button>
    </form>
  );
}
