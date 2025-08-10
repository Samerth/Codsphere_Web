import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/services/Hero";
import WhyWork from "@/components/services/WhyWork";
import ServiceBlocks from "@/components/services/ServiceBlocks";
import Industries from "@/components/services/Industries";
import FAQ from "@/components/services/FAQ";
import ContactForm from "@/components/ContactForm";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyWork />
      <ServiceBlocks />
      <Industries />
      <FAQ />
      <section className="mx-auto max-w-6xl px-6 py-10">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
