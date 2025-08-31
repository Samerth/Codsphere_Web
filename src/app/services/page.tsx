import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";
import WhyWorkWithBand from "@/components/services/WhyWorkWith";
import CoreServices from "@/components/services/ServicesCore";
import IndustriesBand from "@/components/services/Industries";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ContactCTA from "@/components/ContactCTA";
import {ContactForm} from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | CodSphere",
  description:
    "Custom CRM & ERP, smart invoicing, web/mobile, and revenue-first digital marketing. Future-proof systems that scale.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-[145px] py-10 bg-white">
        <Navbar />
      </div>
      <ServicesHero />
      <ServicesIntro />
      <main>
        <WhyWorkWithBand />
        <CoreServices />
        <IndustriesBand />
        <ServicesFAQ />
        <ContactCTA />
        <Footer />

      </main>
      </div>
  );
}
