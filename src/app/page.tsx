import { Metadata } from "next";
import Hero from "@/components/homepage/Hero";
import BrokenJourney from "@/components/homepage/BrokenJourney";
import SolutionLadder from "@/components/homepage/SolutionLadder";
import PlatformProof from "@/components/homepage/PlatformProof";
import ProjectsPreview from "@/components/homepage/ProjectsPreview";
import IndustryFit from "@/components/homepage/IndustryFit";
import CommercialPath from "@/components/homepage/CommercialPath";
import Trust from "@/components/homepage/Trust";
import FinalCTA from "@/components/homepage/FinalCTA";

export const metadata: Metadata = {
  title: "Sell custom work online. Track every job. | CodSphere",
  description: "CodSphere builds storefronts and order flow for businesses where every order is customized — not a standard cart or a full MIS replacement.",
  alternates: {
    canonical: "https://www.codsphere.com",
  },
  openGraph: {
    title: "Sell custom work online. Track every job. | CodSphere",
    description: "CodSphere builds storefronts and order flow for businesses where every order is customized — not a standard cart or a full MIS replacement.",
    url: "https://www.codsphere.com",
    images: [
      {
        url: "https://www.codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere — commerce and order operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell custom work online. Track every job. | CodSphere",
    description: "CodSphere builds storefronts and order flow for businesses where every order is customized — not a standard cart or a full MIS replacement.",
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BrokenJourney />
      <SolutionLadder />
      <PlatformProof />
      <ProjectsPreview />
      <IndustryFit />
      <CommercialPath />
      <Trust />
      <FinalCTA />
    </div>
  );
}
