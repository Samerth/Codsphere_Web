import CaseStudyDetailHeader from "@/components/case-studies/connectcall-services/CaseStudyDetailHeader";
import Navbar from "@/components/Navbar";
import HighlightSection from "@/components/case-studies/sortify/highlight-section";
import ContactCTA from "@/components/ContactCTA";
import ContentSection from "@/components/case-studies/sortify/content-section";
import case_studies_banner_bg from "@/assets/images/banners/case-studies-banner-bg.jpg";
import { Metadata } from "next";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Sortify Case Study"),
  description: "Building a Cloud-Native Digital Mailroom Automation Platform",
  alternates: {
    canonical: "https://www.codsphere.com/case-studies/sortify",
  },
  openGraph: {
    title: "Sortify — Digital Mailroom Automation | CodSphere",
    description: "Building a cloud-native digital mailroom automation platform.",
    url: "https://www.codsphere.com/case-studies/sortify",
    images: [
      {
        url: "https://www.codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Sortify Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sortify — Digital Mailroom Automation | CodSphere",
    description: "Building a cloud-native digital mailroom automation platform.",
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
};

export default function SortifyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <CaseStudyDetailHeader
        title="Sortify Case Study — Building a Cloud-Native Digital Mailroom Automation Platform"
        backgroundImage={case_studies_banner_bg.src}
      />
      <ContentSection />
      <HighlightSection />
      <ContactCTA />
    </div>
  );
}
