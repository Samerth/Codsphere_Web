import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/home/AboutIntro";
import ServicesBand from "@/components/home/ServicesBand";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/home/Team";
import Insights from "@/components/home/Insights";
import ContactCTA from "@/components/ContactCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home(){
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero />
      <AboutIntro />
      {/* Stats thumbnails + center CTA from Figma are visually covered by Hero + About; 
          if you still want the three masked images/150+/04+ blocks, say the word and I’ll add that section too. */}
      <ServicesBand />
      <Testimonials />
      <Team />
      <Insights />
      <ContactCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
