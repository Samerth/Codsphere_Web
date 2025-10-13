// app/services/digital-marketing/page.tsx
import type { Metadata } from "next";
import DigitalMarketingHero from "@/components/digital-marketing/DigitalMarketingHero";
import TransformPresence from "@/components/digital-marketing/TransformPresence";
import CoreDigitalServices from "@/components/digital-marketing/CoreDigitalServices";
import WhyChooseCodSphere from "@/components/digital-marketing/WhyChooseCodSphere";
import TechStack from "@/components/digital-marketing/TechStack";
import ClientTestimonials from "@/components/digital-marketing/ClientTestimonials";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Digital Marketing Services | CodSphere",
  description:
    "Transform your online presence with CodSphere's data-driven digital marketing services. SEO, PPC, Social Media, and more.",
};

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <DigitalMarketingHero />
      <TransformPresence />
      <CoreDigitalServices />
      <WhyChooseCodSphere />
      <TechStack />
      <ClientTestimonials />
      <ContactCTA />
    </div>
  );
}
