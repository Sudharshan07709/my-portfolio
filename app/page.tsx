import Hero from "@/Components/Hero";
import ProjectsSection from "@/Components/Projects/ProjectsSection";
import Certifications from "@/Components/Certifications.server";
import ExtraCurricular from "@/Components/ExtraCurricular.server";
import ContactForm from "@/Components/ContactForm";
import Skills from "@/Components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <Certifications />
      <Skills />
      <ExtraCurricular />
      <section id="contact" className="scroll-mt-24 py-20 px-6">
        <ContactForm />
      </section>
    </>
  );
}
