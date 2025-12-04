import CertCarousel from "./CertCarousel";
import { getCertImages } from "@/lib/getCertImages";

export default function Certifications() {
  const courseraMech = getCertImages("coursera-mech");
  const courseraAI = getCertImages("coursera-ai");
  const udemy = getCertImages("udemy");
  const igetit = getCertImages("igetit");
  const languages = getCertImages("languages");

  return (
    <section id="certifications" className="py-20">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Certifications
      </h2>

      <div className="max-w-6xl mx-auto space-y-16">
        <CertCarousel 
          title="Coursera – Mechanical Engineering" 
          images={courseraMech} 
        />

        <CertCarousel 
          title="Coursera – Data Science & AI" 
          images={courseraAI} 
        />

        <CertCarousel 
          title="Udemy Certifications" 
          images={udemy} 
        />

        <CertCarousel 
          title="IGETIT Certifications" 
          images={igetit} 
        />

        <CertCarousel 
          title="Language Certifications" 
          images={languages} 
        />
      </div>
    </section>
  );
}
