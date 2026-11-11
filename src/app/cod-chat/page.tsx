import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/cod-chat/ContactForm";
import HeroSection from "@/components/cod-chat/hero-section";
import HighlightSection from "@/components/cod-chat/highlight-section";
import Perks from "@/components/cod-chat/Perks";
import WalkThroughSection1 from "@/components/cod-chat/walk-through-section1";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("CodChat", "AI Website Lead Capture"),
  description: "AI-powered chat for your website that answers visitors and captures leads.",
  openGraph: {
    title: formatMetaTitle("CodChat", "AI Website Lead Capture"),
    description: "AI-powered chat for your website that answers visitors and captures leads.",
    url: "https://www.codsphere.com/cod-chat",
    images: [
      {
        url: "https://www.codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: formatMetaTitle("CodChat", "AI Website Lead Capture"),
    description: "AI-powered chat for your website that answers visitors and captures leads.",
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
  alternates: {
    canonical: "https://www.codsphere.com/cod-chat",
  },
};

const Page = () => {
  return (
    <div>
      <HeroSection />
      <Perks />
      <WalkThroughSection1 />
      
      {/* Talk to us CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to capture more leads?
          </h2>
          <p className="text-black/60 text-lg mb-8 max-w-2xl mx-auto">
            Pricing is based on your site and needs. Talk to us about getting CodChat on your website.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#010b66] to-[#33fcfe] px-8 py-4 font-medium text-white hover:opacity-90 transition-opacity"
          >
            Talk to us
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="bg-[#001024] text-white">
        <div className="container-wrapper py-more">
          <div className="flex flex-col items-start justify-between gap-7 rounded-3xl border border-white/15 p-7 md:flex-row md:items-center md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Connect CodChat to the rest of your workflow.
              </h2>
              <p className="mt-3 text-lg leading-8 text-white/70">
                Manage captured leads in codCRM, or talk with our custom software team about a
                tailored website, integration, or automation.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/cod-crm"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black"
              >
                Explore codCRM
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/60 px-5 py-3 font-medium text-white"
              >
                Custom software
              </Link>
            </div>
          </div>
        </div>
      </section>
      <HighlightSection />
      <ContactForm />
    </div>
  );
};

export default Page;
