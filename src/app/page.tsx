import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Capabilities from "../components/Capabilities";
import CTA from "../components/CTA";
import WorkCarousel from "../components/WorkCarousel";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Insights from "../components/Insights";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Capabilities />
      <CTA />
      <WorkCarousel />
      <Testimonials />
      <Team />
      <Insights />
      <ContactForm />
      <Footer />
    </main>
  );
}
