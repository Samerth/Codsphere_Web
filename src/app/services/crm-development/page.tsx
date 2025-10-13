import type { Metadata } from "next";
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
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  // title: "Custom CRM Development Services | CodSphere",
  title: formatMetaTitle("Custom CRM Development Services"),
  description:
    "Crafted CRM solutions tailored for startups, enterprises, and eCommerce platforms. Build intelligent, modular, and scalable CRM systems.",
};

export default function CRMPage() {
  return (
    <div className=" bg-white">
      <CRMHero />
      <CRMIntro />
      <WhyChooseCRM />
      <CRMSolutions />
      <CRMFeatures />
      <CRMTypes />
      <CRMPlatforms />
      <CRMBenefits />
      <CRMProcess />
      <CRMTestimonials />
      <ContactCTA />
    </div>
  );
}
