// app/contact/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[145px] py-4 sm:py-6 md:py-8 lg:py-10 bg-white">
        <Navbar />
      </div>
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
      
  
       
    );
}