// app/contact/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
        <div className="w-full px-[145px] py-10 bg-white">
        <Navbar />
        </div>
        <ContactHero />
        <ContactForm />
        <Footer />
    </div>
      
  
       
    );
}