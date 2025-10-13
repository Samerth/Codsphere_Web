// app/services/digital-marketing/page.tsx
import type { Metadata } from "next";
import DigitalMarketingHero from "@/components/services/digital-marketing/DigitalMarketingHero";
import TransformPresence from "@/components/services/digital-marketing/TransformPresence";
import CoreDigitalServices from "@/components/services/digital-marketing/CoreDigitalServices";
import WhyChooseCodSphere from "@/components/services/digital-marketing/WhyChooseCodSphere";
import TechStack from "@/components/services/digital-marketing/TechStack";
import ClientTestimonials from "@/components/services/digital-marketing/ClientTestimonials";
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
