// app/contact/page.tsx
import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | CodSphere - Get Your Custom Solution",
  description:
    "Ready to transform your business? Contact CodSphere for custom CRM, ERP, and automation solutions. Vancouver-based, globally focused.",
  openGraph: {
    title: "Contact Us | CodSphere - Get Your Custom Solution",
    description: "Ready to transform your business? Contact CodSphere for custom solutions.",
    type: "website",
  },
  keywords:
    "contact CodSphere, CRM consultation, ERP implementation, business automation consultation, Vancouver tech company",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
