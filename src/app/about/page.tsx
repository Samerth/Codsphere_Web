import Navbar from "@/components/Navbar";
import HeroAbout from "@/components/about/HeroAbout";
import MissionVision from "@/components/about/MissionVision";
import ExpertiseGrid from "@/components/about/ExpertiseGrid";
import WhyChooseTable from "@/components/about/WhyChooseTable";
import ValuesGallery from "@/components/about/ValuesGallery";
import BrandsMarquee from "@/components/about/BrandsMarquee";
import BuiltWith from "@/components/about/BuiltWith";
import FAQ from "@/components/about/FAQ";
import Testimonials from "@/components/about/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import {ContactForm} from "@/components/ContactForm";
import Footer from "@/components/Footer";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[145px] py-4 sm:py-6 md:py-8 lg:py-10 bg-white">
        <Navbar />
      </div>
      <HeroAbout />
      <MissionVision />
      <ExpertiseGrid />
      <WhyChooseTable />
      <ValuesGallery />
      <Testimonials />
      <BuiltWith />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
}
