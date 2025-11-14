import Navbar2 from "@/components/Navbar2";
import HeroSection from "@/components/success-stories/hero-section";
import InActionSection from "@/components/success-stories/inaction-section";
import TestimonialsSection from "@/components/success-stories/testimonials-section";
import ServicesSection from "../../components/success-stories/services-section";
import InsightsSection from "@/components/success-stories/insights-section";
import HighlightSection from "@/components/success-stories/highlight-section";
import ContactCTA from "@/components/ContactCTA";

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar2 />
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
