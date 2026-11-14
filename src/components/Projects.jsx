import { PROJECTS } from "../content";
import Reveal from "./Reveal";
import Section from "./Section";

function ProjectCard({ project, featured }) {
  const { name, subtitle, date, desc, highlight, tags, links } = project;
  return (
    <article className={`card ${featured ? "card-featured" : ""}`}>
      <p className="meta accent">{date}</p>
      <h3 className="card-title">{name}</h3>
      <p className="card-subtitle">{subtitle}</p>
      <p className="card-desc">{desc}</p>
      {highlight && <p className="callout">{highlight}</p>}
      {links?.length > 0 && (
        <div className="card-links">
          {links.map((l) => (
            <a key={l.url} className="btn btn-small" href={l.url} target="_blank" rel="noreferrer">
              {l.label} <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      )}
      <ul className="tag-list" aria-label="Technologies">
        {tags.map((t) => <li key={t} className="tag">{t}</li>)}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="card-grid">
        {PROJECTS.featured.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <ProjectCard project={p} featured />
          </Reveal>
        ))}
      </div>
      <h3 className="label label-spaced">Earlier hardware projects</h3>
      <div className="card-grid">
        {PROJECTS.earlier.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
