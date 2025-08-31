import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ERPHero from "@/components/ERP/ERPHero";
import ERPIntro from "@/components/ERP/ERPIntro";
import ERPModules from "@/components/ERP/ERPModules";
import ERPWhyIntegrate from "@/components/ERP/ERPWhyIntegrate";
import ERPProcess from "@/components/ERP/ERPProcess";
import ERPBenefits from "@/components/ERP/ERPBenefits";
import ERPIndustries from "@/components/ERP/ERPIndustries";
import ERPWhyChoose from "@/components/ERP/ERPWhyChoose";
import ContactCTA from "@/components/ContactCTA";
import {ContactForm} from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI-Driven ERP Solutions | CodSphere",
  description: "Custom ERP Development & Intelligent Integration. AI-powered ERP systems tailored for efficiency, scalability, and predictive insight.",
};

export default function ERPPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-[145px] py-10 bg-white">
        <Navbar />
      </div>
      <ERPHero />
      <ERPIntro />
      <main>
        <ERPModules />
        <ERPWhyIntegrate />
        <ERPProcess />
        <ERPBenefits />
        <ERPIndustries />
        <ERPWhyChoose />
        <ContactCTA />
        <Footer />
      </main>
    </div>
  );
}
