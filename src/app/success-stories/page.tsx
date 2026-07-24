import HeroSection from "@/components/success-stories/hero-section";
import InActionSection from "@/components/success-stories/inaction-section";
import ServicesSection from "../../components/success-stories/services-section";
import InsightsSection from "@/components/success-stories/insights-section";
import HighlightSection from "@/components/success-stories/highlight-section";
import ContactCTA from "@/components/ContactCTA";
import { Metadata } from "next";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Success Stories", "Products & Custom Software"),
  description:
    "See proof from CodSphere products and custom software delivery, including product builds, client systems, and business workflow solutions.",
  openGraph: {
    title: formatMetaTitle("Success Stories", "Products & Custom Software"),
    description:
      "See proof from CodSphere products and custom software delivery, including product builds, client systems, and business workflow solutions.",
    url: "https://codsphere.com/success-stories",
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
    title: formatMetaTitle("Success Stories", "Products & Custom Software"),
    description:
      "See proof from CodSphere products and custom software delivery, including product builds, client systems, and business workflow solutions.",
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
  alternates: {
    canonical: "https://codsphere.com/success-stories",
  },
};

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar2 /> */}
      <HeroSection />
      <InActionSection />
      <ServicesSection />
      <InsightsSection />
      <HighlightSection />
      <ContactCTA />
    </div>
  );
}
