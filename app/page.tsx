import Hero from "@/Components/Hero";
import ProjectsSection from "@/Components/ProjectsSection";
import Certifications from "@/Components/Certifications.server";
import ExtraCurricular from "@/Components/ExtraCurricular.server";
import ContactForm from "@/Components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <Certifications />
      <ExtraCurricular />
      <section id="contact" className="scroll-mt-24 py-20 px-6">
        <ContactForm />
      </section>
    </>
  );
}
