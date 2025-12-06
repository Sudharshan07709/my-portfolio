import Hero from "@/Components/Hero";
import Certifications from "@/Components/Certifications";
import ExtraCurricular from "@/Components/ExtraCurricular";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Extra Curricular Section */}
      <section id="extra">
        <ExtraCurricular />
      </section>

      <Certifications />
    </main>
  );
}
