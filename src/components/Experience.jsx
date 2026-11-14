import { CERTS, EDUCATION, EXPERIENCE } from "../content";
import Reveal from "./Reveal";
import Section from "./Section";

function Tags({ tags }) {
  if (!tags?.length) return null;
  return (
    <ul className="tag-list" aria-label="Technologies">
      {tags.map((t) => <li key={t} className="tag">{t}</li>)}
    </ul>
  );
}

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="timeline">
        {EXPERIENCE.map((e) => (
          <Reveal as="li" key={`${e.org}-${e.role}`} className="timeline-item">
            <div className="timeline-head">
              <h3>
                {e.role} <span className="org">@ {e.org}</span>
              </h3>
              <span className="meta">{e.dates}{e.location ? ` · ${e.location}` : ""}</span>
            </div>
            {e.note && <p className="callout">{e.note}</p>}
            {e.summary && <p className="timeline-summary">{e.summary}</p>}
            <ul className="bullets">
              {e.bullets.map((b) => <li key={b.slice(0, 32)}>{b}</li>)}
            </ul>
            <Tags tags={e.tags} />
          </Reveal>
        ))}
      </ol>

      <div className="subgrid">
        <Reveal>
          <h3 className="label">Education</h3>
          <div className="panel">
            <p className="panel-title">{EDUCATION.degree}</p>
            <p className="panel-detail">{EDUCATION.detail}</p>
            <p className="panel-foot">
              <span className="accent">{EDUCATION.school}</span>
              <span className="meta">{EDUCATION.date}</span>
            </p>
          </div>
        </Reveal>
        <Reveal>
          <h3 className="label">Certifications</h3>
          <ul className="cert-list">
            {CERTS.map((c) => (
              <li key={c.name} className="panel cert">
                <span>
                  <span className="panel-title">{c.name}</span>
                  <span className="panel-detail"> · {c.issuer}</span>
                </span>
                <span className="meta">{c.date}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
