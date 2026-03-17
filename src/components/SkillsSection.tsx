const skills = [
  {
    title: "Web Development",
    description:
      "Responsive front-end builds and dependable back-end services.",
    score: 85,
    aria: "Web development proficiency",
  },
  {
    title: "Computer Networking",
    description:
      "Network fundamentals, troubleshooting, and connectivity planning.",
    score: 72,
    aria: "Computer networking proficiency",
  },
  {
    title: "AI Automation",
    description: "Automating workflows and building smart task helpers.",
    score: 70,
    aria: "AI automation proficiency",
  },
  {
    title: "Problem-Solving",
    description: "Debugging, systems thinking, and clear solutions.",
    score: 86,
    aria: "Problem-solving proficiency",
  },
  {
    title: "Project Management",
    description: "Planning, organizing tasks, and delivery follow-through.",
    score: 78,
    aria: "Project management proficiency",
  },
  {
    title: "Team Collaboration",
    description: "Communicating clearly and working well across teams.",
    score: 82,
    aria: "Team collaboration proficiency",
  },
];

export function SkillsSection() {
  return (
    <section
      className="section section-alt"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="section-title" id="skills-title">
              Skills
            </h2>
            <p className="m-0 text-slate-400">
              Built around web development, automation, and teamwork.
            </p>
          </div>
          <span className="rounded-full bg-fuchsia-950 px-3 py-1 text-sm font-semibold text-white">
            2026 focus
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.title}>
              <div className="skill-card h-full rounded-3xl p-6">
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <p className="text-slate-400">{skill.description}</p>
                <div
                  className="h-3 mt-4 overflow-hidden rounded-full bg-[#f0e7de]"
                  role="progressbar"
                  aria-label={skill.aria}
                  aria-valuenow={skill.score}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="flex h-full min-w-10 items-center justify-end bg-fuchsia-950 pr-2 text-[11px] font-semibold text-white"
                    style={{ width: `${skill.score}%` }}
                  >
                    {skill.score}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
