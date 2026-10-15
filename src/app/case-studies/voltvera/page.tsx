import CaseStudyDetailHeader from "@/components/case-studies/connectcall-services/CaseStudyDetailHeader";
import ContentSection from "@/components/case-studies/voltvera/content-section";
import HighlightSection from "@/components/case-studies/voltvera/highlight-section";
import ContactCTA from "@/components/ContactCTA";
// import Navbar from "@/components/Navbar";
import case_studies_banner_bg from "@/assets/images/banners/case-studies-banner-bg.jpg";
import { Metadata } from "next";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("VoltVera Shop"),
  description: "E-commerce storefront for eco-friendly electronics",
  alternates: {
    canonical: "https://www.codsphere.com/case-studies/voltvera",
  },
  openGraph: {
    title: "VoltVera Shop — E-commerce Storefront | CodSphere",
    description: "E-commerce storefront for eco-friendly electronics including alkaline water purifiers, BLDC fans, and LED TVs.",
    url: "https://www.codsphere.com/case-studies/voltvera",
    images: [
      {
        url: "https://www.codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "VoltVera Shop Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoltVera Shop — E-commerce Storefront | CodSphere",
    description: "E-commerce storefront for eco-friendly electronics.",
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
};

export default function VoltveraPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <CaseStudyDetailHeader
        title="VoltVera Shop — E-commerce Storefront for Eco-Friendly Electronics"
        backgroundImage={case_studies_banner_bg.src}
      />
      <ContentSection />
      <HighlightSection />
      <ContactCTA />
    </div>
  );
}
