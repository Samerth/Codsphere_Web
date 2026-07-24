import type { Metadata } from "next";
import HeroAbout from "@/components/about/HeroAbout";
import MissionVision from "@/components/about/MissionVision";
import ExpertiseGrid from "@/components/about/ExpertiseGrid";
import WhyChooseTable from "@/components/about/WhyChooseTable";
import ValuesGallery from "@/components/about/ValuesGallery";
import BuiltWith from "@/components/about/BuiltWith";
import FAQ from "@/components/about/FAQ";
import Team from "@/components/home/Team";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";
// import Navbar from "@/components/Navbar";
// import Navbar2 from "@/components/Navbar2";

export const metadata: Metadata = {
  title: formatMetaTitle("About", "Products & Custom Software"),
  description:
    "CodSphere is a Vancouver-based software company building products, custom software, and AI visibility services for small and mid-sized businesses globally.",
  openGraph: {
    title: formatMetaTitle("About", "Products & Custom Software"),
    description:
      "CodSphere is a Vancouver-based software company building products, custom software, and AI visibility services for small and mid-sized businesses globally.",
    url: "https://codsphere.com/about",
    images: [
      {
        url: "https://codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: formatMetaTitle("About", "Products & Custom Software"),
    description:
      "CodSphere is a Vancouver-based software company building products, custom software, and AI visibility services for small and mid-sized businesses globally.",
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
  alternates: {
    canonical: "https://codsphere.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar2 /> */}
      <HeroAbout />
      <MissionVision />
      <ExpertiseGrid />
      <WhyChooseTable />
      <ValuesGallery />
      <Team />
      <BuiltWith />
      <FAQ />
      <ContactCTA />
    </div>
  );
}
