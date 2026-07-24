import HeroSection from "@/components/success-stories/hero-section";
import InActionSection from "@/components/success-stories/inaction-section";
import TestimonialsSection from "@/components/success-stories/testimonials-section";
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
      <TestimonialsSection />
      <ServicesSection />
      <InsightsSection />
      <HighlightSection />
      <ContactCTA />
    </div>
  );
}
