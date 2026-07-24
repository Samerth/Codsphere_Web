import type { Metadata } from "next";
import { formatMetaTitle } from "@/lib/format-meta-title";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import ContactCTA from "@/components/ContactCTA";
import CaseStudies from "./case-studies";
// import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: formatMetaTitle("Case Studies", "Success Stories & Results"),
  description:
    "Explore CodSphere case studies across our product builds, including Sortify, and custom software delivered for clients.",
  keywords:
    "CodSphere case studies, product case studies, Sortify, custom software case studies, client success stories",
  alternates: {
    canonical: "https://codsphere.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <CaseStudiesHero />
      {/* Case Study Grid */}
      <CaseStudies />
      <ContactCTA />
    </div>
  );
}
