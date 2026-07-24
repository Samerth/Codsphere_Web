import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, FileText, Search } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

const description =
  "Find out what ChatGPT, Gemini, and Perplexity say about your business — and improve it.";

export const metadata: Metadata = {
  title: formatMetaTitle("AI Visibility", "Audit, Report & Recommendations"),
  description,
  alternates: { canonical: "https://codsphere.com/ai-visibility" },
  openGraph: {
    title: formatMetaTitle("AI Visibility", "Audit, Report & Recommendations"),
    description,
    url: "https://codsphere.com/ai-visibility",
    images: [
      {
        url: "https://codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: formatMetaTitle("AI Visibility", "Audit, Report & Recommendations"),
    description,
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
};

const steps = [
  {
    title: "Audit",
    text: "We query and review ChatGPT, Gemini, and Perplexity to see how they describe and recommend your business.",
    icon: Search,
  },
  {
    title: "Report",
    text: "We document the accuracy of current descriptions, your visibility in relevant recommendations, and the gaps we find.",
    icon: FileText,
  },
  {
    title: "Recommendations",
    text: "We provide concrete, prioritized improvements for your website, business information, and positioning.",
    icon: ClipboardCheck,
  },
];

export default function AiVisibilityPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="relative -mt-20 overflow-hidden bg-black pt-20 text-white sm:-mt-[88px] sm:pt-[88px] lg:-mt-[104px] lg:pt-[104px]">
        <div className="absolute inset-0 bg-linear-to-br from-[#010B66]/80 via-black to-[#0664a7]/70" />
        <div className="container-wrapper relative py-more">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#33FCFE]">
            AI visibility
          </p>
          <h1 className="mt-4 max-w-4xl text-[38px] font-semibold leading-tight sm:text-[52px] lg:text-[68px]">
            See what AI says about your business.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">{description}</p>
          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#33FCFE] to-[#0664a7] px-6 py-3 font-medium text-white"
          >
            Book an AI Visibility Audit
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="container-wrapper py-more">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Understand how AI tools present your business.
          </h2>
          <p className="mt-5 text-lg leading-8 text-black/70">
            Customers increasingly ask ChatGPT, Gemini, and Perplexity who to hire and where to buy.
            CodSphere audits how those tools describe and recommend your business, then identifies
            what is accurate, what is missing, and what can be improved.
          </p>
          <p className="mt-4 font-medium text-[#010B66]">
            This is a service delivered by the CodSphere team, not a dashboard or self-serve app.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-3xl border border-black/10 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#33FCFE] to-[#010B66] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-black/70">{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F4F7FF]">
        <div className="container-wrapper py-more">
          <h2 className="text-3xl font-semibold md:text-5xl">What you receive</h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              "Current AI descriptions of your business",
              "Patterns in when and how your business is recommended",
              "Factual and positioning gaps",
              "A prioritized action plan",
            ].map((item) => (
              <li key={item} className="rounded-2xl bg-white p-6 text-lg shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
