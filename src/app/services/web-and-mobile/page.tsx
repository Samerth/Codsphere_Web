// app/services/web-mobile/page.tsx
import type { Metadata } from "next";
import WebMobileHero from "@/components/services/web-mobile/WebMobileHero";
import ServiceIntro from "@/components/services/web-mobile/ServiceIntro";
import ServicesGlance from "@/components/services/web-mobile/ServicesGlance";
import WhyCodSphere from "@/components/services/web-mobile/WhyCodSphere";
import TechStackSection from "@/components/services/web-mobile/TechStackSection";
import CaseStudies from "@/components/services/web-mobile/CaseStudies";
import FrequentlyAsked from "@/components/services/web-mobile/FrequentlyAsked";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Web & Mobile App Development Services"),
  description:
    "Custom web and mobile app development shaped around your business operations, integrations, and customer needs.",
  alternates: {
    canonical: "https://codsphere.com/services/web-and-mobile",
  },
  openGraph: {
    title: formatMetaTitle("Web & Mobile App Development Services"),
    description:
      "Custom web and mobile app development shaped around your business operations, integrations, and customer needs.",
    url: "https://codsphere.com/services/web-and-mobile",
    type: "website",
    images: [
      {
        url: "https://codsphere.com/og/services-og-web-and-mobile.png",
        width: 1200,
        height: 630,
        alt: "Web & Mobile App Development Services by CodSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: formatMetaTitle("Web & Mobile App Development Services"),
    description:
      "Custom web and mobile app development shaped around your business operations, integrations, and customer needs.",
    images: ["https://codsphere.com/og/services-og-web-and-mobile.png"],
  },
};

export default function WebAndMobilePage() {
  return (
    <div className="min-h-screen bg-white">
      <WebMobileHero />
      <ServiceIntro />
      <ServicesGlance />
      <WhyCodSphere />
      <TechStackSection />
      <CaseStudies />
      <FrequentlyAsked />
      <ContactCTA />
    </div>
  );
}
