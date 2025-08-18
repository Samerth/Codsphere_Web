// src/app/services/page.tsx
import type { Metadata } from "next";

// --- Sections (make sure these files exist as shown) ---
import ERPHero from "@/components/services/ERPHero";
import ERPCore from "@/components/services/ERPCore";
import ERPWhyAI from "@/components/services/ERPWhyAI";
import ERPBenefits from "@/components/services/ERPBenefits";
import ERPProcess from "@/components/services/ERPProcess";
import ERPIndustries from "@/components/services/ERPIndustries";

// Optional: reuse your global Contact CTA + Footer
import ContactCTA from "@/components/ContactCTA"; // or "@/components/contact/ContactCTA" if that's your path
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI-Driven ERP Solutions | CodSphere",
  description:
    "Custom ERP development with AI: integrations, automation, forecasting, analytics, and governance—built for finance, HR, inventory, and supply chain.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-black">
      {/* HERO (banner + intro copy) */}
      <ERPHero />

      {/* CORE MODULES & AI CAPABILITIES (light band + cards) */}
      <ERPCore />

      {/* WHY AI + ERP (copy + image) */}
      <ERPWhyAI />

      {/* PROCESS TIMELINE (vertical blue line + steps) */}
      <ERPProcess />

      {/* KEY BUSINESS BENEFITS (black header row + table rows) */}
      <ERPBenefits />

      {/* INDUSTRIES DARK BAND */}
      <ERPIndustries />

      {/* CONTACT CTA (matches Figma contact block) */}
      <ContactCTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
