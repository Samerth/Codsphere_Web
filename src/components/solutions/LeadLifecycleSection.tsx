"use client";

import {
  Briefcase,
  Calendar,
  FileText,
  Phone,
  Receipt,
  RefreshCw,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

type LifecycleStep = {
  id: string;
  step: string;
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
};

const lifecycleSteps: LifecycleStep[] = [
  {
    id: "lead-in",
    step: "01",
    title: "Lead comes in",
    description: "Phone, web, maps, referral — one inbox.",
    tag: "Contacts",
    icon: Phone,
  },
  {
    id: "engage",
    step: "02",
    title: "Instant engagement",
    description: "Auto SMS/email. Next move suggested.",
    tag: "Automations + AI",
    icon: Sparkles,
  },
  {
    id: "book",
    step: "03",
    title: "Book the visit",
    description: "Book, confirm, crew scheduled.",
    tag: "Appointments",
    icon: Calendar,
  },
  {
    id: "quote",
    step: "04",
    title: "Quote the job",
    description: "Photos, quote, inquiry → quoted.",
    tag: "Jobs + Quotes",
    icon: FileText,
  },
  {
    id: "work",
    step: "05",
    title: "Do the work",
    description: "Field updates. Customer in the loop.",
    tag: "Jobs + Messages",
    icon: Briefcase,
  },
  {
    id: "invoice",
    step: "06",
    title: "Invoice and get paid",
    description: "Complete → invoice → paid.",
    tag: "Invoicing",
    icon: Receipt,
  },
  {
    id: "repeat",
    step: "07",
    title: "Win the repeat",
    description: "Seasonal and re-engagement nudges.",
    tag: "Campaigns + AI",
    icon: RefreshCw,
  },
];

export default function LeadLifecycleSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % lifecycleSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="lead-lifecycle" className="bg-[#f3f4f6] text-[#0a1628]">
      <div className="container-wrapper pt-12 lg:pt-16 xl:pt-20 pb-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Nothing slips
          </h2>
          <p className="mt-3 text-[17px] lg:text-[20px] font-light text-gray-600">
            After they reach out.
          </p>
        </div>
      </div>

      <div className="container-wrapper pb-12 lg:pb-16 xl:pb-20">
        <div className="hidden lg:grid lg:grid-cols-4 gap-5">
          {lifecycleSteps.slice(0, 4).map((step) => (
            <LifecycleCard key={step.id} step={step} />
          ))}
        </div>
        <div className="hidden lg:grid lg:grid-cols-3 gap-5 mt-5 max-w-5xl mx-auto">
          {lifecycleSteps.slice(4).map((step) => (
            <LifecycleCard key={step.id} step={step} />
          ))}
        </div>
        <div className="lg:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4">
          {lifecycleSteps.map((step, index) => (
            <div key={step.id} className="snap-center shrink-0 w-[85vw] max-w-sm">
              <LifecycleCard step={step} isActive={index === activeStep} />
            </div>
          ))}
        </div>
        <div className="lg:hidden flex justify-center gap-2 mt-2">
          {lifecycleSteps.map((step, index) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeStep ? "w-6 bg-[#010B66]" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to lifecycle step ${step.step}`}
            />
          ))}
        </div>
        <p className="mt-10 text-center text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
          One timeline. Crew, manager, owner.
        </p>
      </div>
    </section>
  );
}

function LifecycleCard({ step, isActive }: { step: LifecycleStep; isActive?: boolean }) {
  const Icon = step.icon;

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-shadow ${
        isActive ? "border-[#33FCFE] shadow-md" : "border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="text-xs font-semibold tracking-widest text-[#010B66]/70">{step.step}</span>
        <span className="rounded-full bg-[#e8fdff] px-2.5 py-1 text-[11px] font-medium text-[#010B66]">
          {step.tag}
        </span>
      </div>
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8fdff] text-[#010B66]">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold leading-snug">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
    </article>
  );
}
