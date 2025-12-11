import Certifications from "../Components/Certifications.server";
import ExtraCurricular from "../Components/ExtraCurricular.server";
import PageClient from "./PageClient";

export default function Home() {
  return (
    <main>
      <Certifications />
      <ExtraCurricular />
      <PageClient />   {/* must be last */}
    </main>
  );
}
