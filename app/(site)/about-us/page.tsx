// Team member data based on project details
const teamMembers = [
  { name: "Nethmal", id: "GWU-HICT-2022-05", github: "/nethmalgunarathne444-eng" },
  { name: "Yasiru", id: "GWU-HICT-2022-48", github: "/yasiru-p-perera"},
  { name: "Tharindu", id: "GWU-HICT-2021-59", github: "/Thari-24"},
  { name: "Chathurya", id: "GWU-HICT-2022-05", github: "/Chathurya415" },
  { name: "Nipun", id: "GWU-HICT-2022-16", github: "/Nipun-Chamika" },
];

const coreValues = [
  {
    title: "Simplicity",
    description:
      "Health tracking should be frictionless. We prioritize clear visual feedback and direct navigation over unnecessary visual clutter.",
  },
  {
    title: "Privacy",
    description:
      "Your personal health metrics stay secure. We design with privacy-first standards so you retain total control over your sensitive data.",
  },
  {
    title: "Consistency",
    description:
      "Habits are built through repeatable routines. Our tools focus on providing dependable daily logging for continuous progress.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
];

export default function AboutPage() {
  return (
    <div className="about-section bg-[#f8faff] min-h-screen py-16 px-6 text-slate-800">
      <div className="about-container max-width-[1100px] mx-auto max-w-5xl space-y-20">
        
        {/* 1. Intro Section */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="about-eyebrow text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block">
            About FitApex
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Empowering simple, data-driven health tracking
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            FitApex was built to bridge the gap between complex health metrics and daily usability. 
            Whether you are monitoring vital signs, keeping track of daily workouts, or scheduling 
            medication reminders, our platform offers a streamlined, centralized overview to keep your 
            well-being on target without distracting complexity.
          </p>
        </section>

        {/* 2. Mission Section */}
        <section className="bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400 mb-2">
            Our Mission
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-slate-800 leading-snug">
            "To deliver an effortless, privacy-focused digital space where individuals can log, 
            understand, and improve their core health indicators every single day."
          </p>
        </section>

        {/* 3. Core Values */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Core Values</h2>
            <p className="text-slate-500 text-sm mt-1">
              The foundational principles guiding our product layout and features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200/80 p-6 rounded-xl shadow-sm space-y-3"
              >
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Meet the Team */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Meet the Team</h2>
            <p className="text-slate-500 text-sm mt-1">
              The developers behind the design and implementation of FitApex.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200/80 p-6 rounded-xl text-center shadow-sm space-y-3"
              >
                
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-xs font-mono text-slate-500 mt-0.5">{member.id}</p>
                </div>
                <div className="pt-2">
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline font-medium inline-block"
                  >
                    @{member.github}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Built With */}
        <section className="text-center space-y-4 pt-4 border-t border-slate-200/60">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Built With
          </h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-white border border-slate-200 text-slate-700 text-xs font-medium px-3.5 py-1.5 rounded-full shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}