import { skills } from "@/lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 max-w-2xl mb-14">
          A snapshot of the tools, technologies, and theoretical foundations I
          use to build high-performance computational and data-driven systems.
        </p>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="
                relative
                rounded-2xl
                p-6
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-[#00D2FF]/40
              "
            >
              {/* Holographic glow overlay */}
              <div
                className="
                  absolute inset-0
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#00D2FF]/10
                  to-transparent
                  opacity-0
                  hover:opacity-100
                  transition
                  pointer-events-none
                "
              />

              {/* Card Content */}
              <h3 className="relative text-xl font-semibold text-white mb-1 tracking-wide">
                {category.title}
              </h3>

              <p className="relative text-sm text-gray-400 mb-4">
                {category.subtitle}
              </p>

              <div className="relative flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      text-sm
                      px-3
                      py-1
                      rounded-full
                      bg-white/10
                      text-gray-200
                      border border-white/10
                      transition
                      hover:bg-[#00D2FF]/10
                      hover:border-[#00D2FF]/40
                    "
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
