import { ABOUT, PROFILE } from "../content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal className="about-grid">
        <div className="prose">
          {ABOUT.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          <a className="btn btn-primary" href={PROFILE.resume.url} download={PROFILE.resume.downloadName}>
            Download résumé <span className="btn-meta">PDF</span>
          </a>
        </div>
        <div className="about-side">
          <div className="panel">
            <h3 className="label">Quick facts</h3>
            <dl className="facts">
              {ABOUT.facts.map(([k, v]) => (
                <div key={k} className="fact">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="label">Interests</h3>
            <ul className="chip-list">
              {ABOUT.interests.map((i) => <li key={i} className="chip">{i}</li>)}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
