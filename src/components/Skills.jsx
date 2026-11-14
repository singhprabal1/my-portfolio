import { SKILL_GROUPS } from "../content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="card-grid">
        {SKILL_GROUPS.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.05}>
            <div className={`card skill-group tone-${g.tone}`}>
              <h3 className="skill-label">{g.label}</h3>
              <ul className="tag-list">
                {g.skills.map((s) => <li key={s} className="tag">{s}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
