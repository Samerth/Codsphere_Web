// app/contact/page.tsx
import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { formatMetaTitle } from "@/lib/format-meta-title";
// import Navbar from "@/components/Navbar";
// import Navbar2 from "@/components/Navbar2";

export const metadata: Metadata = {
  title: formatMetaTitle("Contact Us", "Product Demos & Custom Software"),
  description:
    "Contact Vancouver-based CodSphere for Sortify, CodChat, or CodCRM demos and custom software projects. Serving businesses globally.",
  keywords:
    "contact CodSphere, product demo, CodCRM demo, custom software consultation, Vancouver tech company",
  alternates: {
    canonical: "https://codsphere.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar2 /> */}
      <ContactHero />
      <ContactForm />
    </div>
  );
}
