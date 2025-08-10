import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormPage from "@/components/contact/ContactFormPage";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="mb-1 text-center text-sm italic text-gray-400">We are here to help you</p>
        <h1 className="text-center text-2xl font-semibold sm:text-3xl">Let’s Build Something Together</h1>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-500">
          Whether you have a question, a bold idea, or a detailed brief — we’re ready to help.
          From CRM consultations to ERP implementation, we respond fast and get straight to solutions.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Vancouver</h3>
          <p className="text-sm text-gray-500 leading-6">Mon—Fri<br/>09:00—21:00</p>
        </div>
        <ContactFormPage />
      </section>

      <Footer />
    </main>
  );
}
