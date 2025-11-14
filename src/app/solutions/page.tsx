import Navbar2 from "@/components/Navbar2";
import HeroSection from "@/components/solutions/hero-section";
import FeaturesSection from "@/components/solutions/features-section";
import TestimonialsSection from "@/components/solutions/testimonials-section";
import WalkThroughSection1 from "@/components/solutions/walk-through-section1";
import PricingSection from "@/components/solutions/pricing-section";
import WalkThroughSection2 from "@/components/solutions/walk-through-section2";
import HighlightSection from "@/components/solutions/highlight-section";
import ContactCTA from "@/components/ContactCTA";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar2 />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <WalkThroughSection1 />
      <PricingSection />
      <WalkThroughSection2 />
      <HighlightSection />
      <ContactCTA />
    </div>
  );
}
