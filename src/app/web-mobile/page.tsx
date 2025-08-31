// app/services/web-mobile/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WebMobileHero from "@/components/web-mobile/WebMobileHero";
import ServiceIntro from "@/components/web-mobile/ServiceIntro";
import ServicesGlance from "@/components/web-mobile/ServicesGlance";
import WhyCodSphere from "@/components/web-mobile/WhyCodSphere";
import TechStackSection from "@/components/web-mobile/TechStackSection";
import CaseStudies from "@/components/web-mobile/CaseStudies";
import ClientTestimonials from "@/components/web-mobile/ClientTestimonials";
import FrequentlyAsked from "@/components/web-mobile/FrequentlyAsked";
import {ContactForm} from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Web & Mobile Development Services | CodSphere",
  description: "Best Web & Mobile App Development Services For Your Business Needs. Custom websites, mobile apps, and digital solutions.",
};

export default function WebMobilePage() {
  return (
    <div className="min-h-screen bg-white">
    <div className="w-full px-[145px] py-10 bg-white">
      <Navbar />
    </div>
      <WebMobileHero />
      <main>
        <ServiceIntro />
        <ServicesGlance />
        <WhyCodSphere />
        <TechStackSection />
        <CaseStudies />
        <ClientTestimonials />
        <FrequentlyAsked />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}