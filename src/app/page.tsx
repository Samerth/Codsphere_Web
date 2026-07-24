import HeroSection from "@/components/home/hero-section";
import InActionSection from "@/components/home/inaction-section";
import AboutIntro from "@/components/home/AboutIntro";
import ServicesSection from "@/components/home/services-section";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <InActionSection />
      <AboutIntro />
      <ContactCTA />
    </div>
  );
}
