import AboutIntro from "@/components/home/AboutIntro";
import Team from "@/components/home/Team";
import ContactCTA from "@/components/ContactCTA";
import Navbar2 from "@/components/Navbar2";
import HomeHero2 from "@/components/home/Hero2";
import CaseStudiesSection from "@/components/home/CaseStudies";
import TestimonialsSection from "@/components/home/Testimonials2";
import ReferralProgramSection from "@/components/home/ReferralProgram";
import WorkShowcaseSection from "@/components/home/WorkShowcase";
import ServicesSection from "@/components/home/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar2 />
      <HomeHero2 />
      <CaseStudiesSection />
      <ReferralProgramSection />
      <TestimonialsSection />
      {/* <Testimonials /> */}
      <AboutIntro />
      <WorkShowcaseSection />
      <ServicesSection />
      <Team />
      {/* <Insights /> */}
      <ContactCTA />
    </div>
  );
}
