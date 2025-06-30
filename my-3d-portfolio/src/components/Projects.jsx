const projects = [
  {
    title: 'AI Transport Management System',
    desc: 'Real-time fleet tracking and predictive analytics.',
    link: 'https://varuatransport.in',
    github: 'https://github.com/Vaishalis27/transport-management-system',
  },
  {
    title: 'Factual Conceptual Search',
    desc: 'RAG system for QA using FastAPI + LangChain.',
    github: 'https://github.com/Vaishalis27/factual-conceptual-search',
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      {projects.map((proj, i) => (
        <div key={i} className="project-card">
          <h3>{proj.title}</h3>
          <p>{proj.desc}</p>
          <a href={proj.github}>GitHub</a>
          {proj.link && <a href={proj.link}>Live Demo</a>}
        </div>
      ))}
    </section>
  );
}
