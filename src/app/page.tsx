import AboutIntro from "@/components/home/AboutIntro";
import ServicesBand from "@/components/home/ServicesBand";
import Testimonials from "@/components/home/Testimonials";
import Team from "@/components/home/Team";
// import Insights from "@/components/home/Insights";
import ContactCTA from "@/components/ContactCTA";
import WorkCarousel from "@/components/home/WorkCarousel";
import Navbar2 from "@/components/Navbar2";
import HomeHero2 from "@/components/home/Hero2";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar2 />
      <HomeHero2 />
      <Testimonials />
      <AboutIntro />
      <ServicesBand />
      <WorkCarousel />
      <Team />
      {/* <Insights /> */}
      <ContactCTA />
    </div>
  );
}
