// app/services/web-mobile/page.tsx
import type { Metadata } from "next";
import WebMobileHero from "@/components/services/web-mobile/WebMobileHero";
import ServiceIntro from "@/components/services/web-mobile/ServiceIntro";
import ServicesGlance from "@/components/services/web-mobile/ServicesGlance";
import WhyCodSphere from "@/components/services/web-mobile/WhyCodSphere";
import TechStackSection from "@/components/services/web-mobile/TechStackSection";
import CaseStudies from "@/components/services/web-mobile/CaseStudies";
import ClientTestimonials from "@/components/services/web-mobile/ClientTestimonials";
import FrequentlyAsked from "@/components/services/web-mobile/FrequentlyAsked";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Web & Mobile App Development Services | CodSphere",
  description:
    "Best Web & Mobile App Development Services For Your Business Needs. Custom websites, mobile apps, and digital solutions.",
};

export default function WebMobilePage() {
  return (
    <div className="min-h-screen bg-white">
      <WebMobileHero />
      <ServiceIntro />
      <ServicesGlance />
      <WhyCodSphere />
      <TechStackSection />
      <CaseStudies />
      <ClientTestimonials />
      <FrequentlyAsked />
      <ContactCTA />
    </div>
  );
}
