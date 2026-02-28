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
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <h2 className="section-title" id="skills-title">
              Skills
            </h2>
            <p className="text-muted mb-0">
              Built around web development, automation, and teamwork.
            </p>
          </div>
          <span className="badge rounded-pill text-bg-dark">2026 focus</span>
        </div>
        <div className="row g-4">
          {skills.map((skill) => (
            <div className="col-md-6 col-lg-4" key={skill.title}>
              <div className="card skill-card h-100">
                <div className="card-body">
                  <h3 className="h5">{skill.title}</h3>
                  <p className="text-muted">{skill.description}</p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label={skill.aria}
                    aria-valuenow={skill.score}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.score}%` }}
                    >
                      {skill.score}%
                    </div>
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
