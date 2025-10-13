import type { Metadata } from "next";
import ERPHero from "@/components/services/ERP/ERPHero";
import ERPIntro from "@/components/services/ERP/ERPIntro";
import ERPModules from "@/components/services/ERP/ERPModules";
import ERPWhyIntegrate from "@/components/services/ERP/ERPWhyIntegrate";
import ERPProcess from "@/components/services/ERP/ERPProcess";
import ERPBenefits from "@/components/services/ERP/ERPBenefits";
import ERPIndustries from "@/components/services/ERP/ERPIndustries";
import ERPWhyChoose from "@/components/services/ERP/ERPWhyChoose";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "AI-Driven ERP Solutions | CodSphere",
  description:
    "Custom ERP Development & Intelligent Integration. AI-powered ERP systems tailored for efficiency, scalability, and predictive insight.",
};

export default function ERPPage() {
  return (
    <div className="min-h-screen bg-white">
      <ERPHero />
      <ERPIntro />
      <ERPModules />
      <ERPWhyIntegrate />
      <ERPProcess />
      <ERPBenefits />
      <ERPIndustries />
      <ERPWhyChoose />
      <ContactCTA />
    </div>
  );
}
