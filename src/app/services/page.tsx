import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";
import WhyWorkWithBand from "@/components/services/WhyWorkWith";
import CoreServices from "@/components/services/ServicesCore";
import IndustriesBand from "@/components/services/Industries";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Custom Software Services", "Built for Your Business"),
  description:
    "CodSphere builds custom CRM, ERP, web, mobile, integration, and automation software when off-the-shelf products are not the right fit.",
  openGraph: {
    title: formatMetaTitle("Custom Software Services", "Built for Your Business"),
    description:
      "CodSphere builds custom CRM, ERP, web, mobile, integration, and automation software when off-the-shelf products are not the right fit.",
    url: "https://codsphere.com/services",
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
    title: formatMetaTitle("Custom Software Services", "Built for Your Business"),
    description:
      "CodSphere builds custom CRM, ERP, web, mobile, integration, and automation software when off-the-shelf products are not the right fit.",
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
  alternates: {
    canonical: "https://codsphere.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesIntro />
      <WhyWorkWithBand />
      <CoreServices />
      <IndustriesBand />
      <ServicesFAQ />
      <ContactCTA />
    </div>
  );
}
