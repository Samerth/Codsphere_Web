// app/services/digital-marketing/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DigitalMarketingHero from "@/components/digital-marketing/DigitalMarketingHero";
import TransformPresence from "@/components/digital-marketing/TransformPresence";
import CoreDigitalServices from "@/components/digital-marketing/CoreDigitalServices";
import WhyChooseCodSphere from "@/components/digital-marketing/WhyChooseCodSphere";
import TechStack from "@/components/digital-marketing/TechStack";
import ClientTestimonials from "@/components/digital-marketing/ClientTestimonials";
import ReadyToStart from "@/components/digital-marketing/ReadyToStart";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Digital Marketing Services | CodSphere",
  description: "Transform your online presence with CodSphere's data-driven digital marketing services. SEO, PPC, Social Media, and more.",
};

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[145px] py-4 sm:py-6 md:py-8 lg:py-10 bg-white">
        <Navbar />
      </div>
      <DigitalMarketingHero />
      <main>
        <TransformPresence />
        <CoreDigitalServices />
        <WhyChooseCodSphere />
        <TechStack />
        <ClientTestimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
    
  );
}