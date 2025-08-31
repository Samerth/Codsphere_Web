import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import AboutIntro from "@/components/home/AboutIntro";
import ServicesBand from "@/components/home/ServicesBand";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/home/Team";
import Insights from "@/components/home/Insights";
import ContactCTA from "@/components/ContactCTA";
import {ContactForm} from "@/components/ContactForm"
import Footer from "@/components/Footer";
import WorkCarousel from "@/components/home/WorkCarousel";

export default function Home(){
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-[145px] py-10 bg-white">
        <Navbar />
      </div>
      <Hero />
      <AboutIntro />
      {/* Stats thumbnails + center CTA from Figma are visually covered by Hero + About; 
          if you still want the three masked images/150+/04+ blocks, say the word and I’ll add that section too. */}
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
