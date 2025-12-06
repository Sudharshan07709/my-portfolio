import CertCarousel from "./CertCarousel";
import { getCertImages } from "@/lib/getCertImages";

export default function CertificationsSection() {
  const courseraAI = getCertImages("coursera-ai");
  const courseraMech = getCertImages("coursera-mech");
  const udemy = getCertImages("udemy");
  const igetit = getCertImages("igetit");
  const languages = getCertImages("languages");

  return (
    <section id="certifications" className="px-10 py-20">
      <h2 className="text-3xl font-semibold mb-10">Certifications</h2>

      <h3 className="text-2xl mb-4">Coursera – AI / Data Science</h3>
      <CertCarousel items={courseraAI} />

      <h3 className="text-2xl mt-12 mb-4">Coursera – Mechanical Engineering</h3>
      <CertCarousel items={courseraMech} />

      <h3 className="text-2xl mt-12 mb-4">Udemy</h3>
      <CertCarousel items={udemy} />

      <h3 className="text-2xl mt-12 mb-4">Igetit</h3>
      <CertCarousel items={igetit} />

      <h3 className="text-2xl mt-12 mb-4">Languages</h3>
      <CertCarousel items={languages} />
    </section>
  );
}
