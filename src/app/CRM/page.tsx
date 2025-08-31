import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CRMHero from "@/components/CRM/CRMHero";
import CRMIntro from "@/components/CRM/CRMIntro";
import WhyChooseCRM from "@/components/CRM/WhyChooseCRM";
import CRMSolutions from "@/components/CRM/CRMSolutions";
import CRMFeatures from "@/components/CRM/CRMFeatures";
import CRMTypes from "@/components/CRM/CRMTypes";
import CRMPlatforms from "@/components/CRM/CRMPlatforms";
import CRMBenefits from "@/components/CRM/CRMBenefits";
import CRMProcess from "@/components/CRM/CRMProcess";
import CRMTestimonials from "@/components/CRM/CRMTestimonials";
import ContactCTA from "@/components/ContactCTA";
import {ContactForm} from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Custom CRM Development Services | CodSphere",
  description:
    "Crafted CRM solutions tailored for startups, enterprises, and eCommerce platforms. Build intelligent, modular, and scalable CRM systems.",
};

export default function CRMPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[145px] py-4 sm:py-6 md:py-8 lg:py-10 bg-white">
        <Navbar />
      </div>
  
    <CRMHero />
    <CRMIntro />
    <main>
        <WhyChooseCRM />
        <CRMSolutions />
        <CRMFeatures />
        <CRMTypes />
        <CRMPlatforms />
        <CRMBenefits />
        <CRMProcess />  
        <CRMTestimonials />
        <ContactCTA />  
        <Footer />
      </main>
    </div>
    
  );
}