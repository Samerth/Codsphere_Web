import type { Metadata } from "next";
import HeroAbout from "@/components/about/HeroAbout";
import MissionVision from "@/components/about/MissionVision";
import ExpertiseGrid from "@/components/about/ExpertiseGrid";
import WhyChooseTable from "@/components/about/WhyChooseTable";
import ValuesGallery from "@/components/about/ValuesGallery";
import BuiltWith from "@/components/about/BuiltWith";
import FAQ from "@/components/about/FAQ";
import Testimonials from "@/components/about/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About CodSphere | AI-Powered Business Solutions",
  description: "Learn about CodSphere - Vancouver's technology company delivering custom CRM, ERP, and business automation tools that simplify workflows and help you scale faster.",
  openGraph: {
    title: "About CodSphere | AI-Powered Business Solutions",
    description: "Learn about CodSphere - Vancouver's technology company delivering custom CRM, ERP, and business automation tools.",
    type: "website",
  },
};


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroAbout />
      <MissionVision />
      <ExpertiseGrid />
      <WhyChooseTable />
      <ValuesGallery />
      <Testimonials />
      <BuiltWith />
      <FAQ />
      <ContactCTA />
    </div>
  );
}
