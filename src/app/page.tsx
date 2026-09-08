import Hero from "@/components/homepage/Hero";
import BrokenJourney from "@/components/homepage/BrokenJourney";
import SolutionLadder from "@/components/homepage/SolutionLadder";
import HowItWorks from "@/components/homepage/HowItWorks";
import PlatformProof from "@/components/homepage/PlatformProof";
import ProjectsPreview from "@/components/homepage/ProjectsPreview";
import IndustryFit from "@/components/homepage/IndustryFit";
import CommercialPath from "@/components/homepage/CommercialPath";
import Trust from "@/components/homepage/Trust";
import FinalCTA from "@/components/homepage/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BrokenJourney />
      <SolutionLadder />
      <HowItWorks />
      <PlatformProof />
      <ProjectsPreview />
      <IndustryFit />
      <CommercialPath />
      <Trust />
      <FinalCTA />
    </div>
  );
}
