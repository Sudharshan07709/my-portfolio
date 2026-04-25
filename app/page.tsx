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
      <section id="contact" className="scroll-mt-24 py-8 pb-14">
        <div className="section-shell overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-white/55">
                <span className="h-px w-12 bg-[var(--accent-gradient)]" />
                Contact
              </div>
              <h2 className="font-display text-4xl text-white sm:text-5xl">
                Let&apos;s build something thoughtful together.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
                I&apos;m especially interested in work spanning intelligent
                systems, data-driven products, scientific software, and applied
                engineering research. If you have an idea, role, or project in
                mind, I&apos;d love to hear about it.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Email
                  </p>
                  <p className="mt-2 text-lg text-white/90">
                    jsudharshan07@gmail.com
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Areas
                  </p>
                  <p className="mt-2 text-lg text-white/90">
                    Machine learning, simulation, analytics, engineering tools
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
