import Hero from "@/components/home/Hero";
import AboutIntro from "@/components/home/AboutIntro";
import ServicesBand from "@/components/home/ServicesBand";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/home/Team";
import Insights from "@/components/home/Insights";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WorkCarousel from "@/components/home/WorkCarousel";

export default function Home(){
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutIntro />
      <ServicesBand />
      <WorkCarousel />
      <Testimonials />
      <Team />
      <Insights />
      <ContactCTA />
      <Footer />
    </div>
  );
}
