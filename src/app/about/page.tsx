import Navbar from "@/components/Navbar";
import HeroAbout from "@/components/about/HeroAbout";
import MissionVision from "@/components/about/MissionVision";
import ExpertiseGrid from "@/components/about/ExpertiseGrid";
import WhyChooseTable from "@/components/about/WhyChooseTable";
import ValuesGallery from "@/components/about/ValuesGallery";
import BrandsMarquee from "@/components/about/BrandsMarquee";
import BuiltWith from "@/components/about/BuiltWith";
import FAQ from "@/components/about/FAQ";

import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";


export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroAbout />
      <MissionVision />
      <ExpertiseGrid />
      <WhyChooseTable />
      <ValuesGallery />
      <BrandsMarquee />
      <BuiltWith />
      <FAQ />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
