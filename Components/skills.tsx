import { skills } from "@/lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-8">
      <div className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-white/55">
              <span className="h-px w-12 bg-[var(--accent-gradient)]" />
              Toolkit
            </div>
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Skills and technologies
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            The tools and foundations I use to build high-performance,
            data-driven, and human-readable technical work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((category) => (
            <div
              key={category.title}
              className="rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                {category.subtitle}
              </p>

              <h3 className="mt-3 font-display text-3xl text-white">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-sm text-white/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
