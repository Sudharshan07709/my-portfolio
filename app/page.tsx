import Hero from "@/Components/Hero";
import Certifications from "@/Components/Certifications.server";
import ExtraCurricular from "@/Components/ExtraCurricular.server";
import ContactForm from "@/Components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Certifications />
      <ExtraCurricular />
      <section id="contact" className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
        <ContactForm />
      </section>
    </>
  );
}
