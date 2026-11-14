import { HERO, PROFILE } from "../content";
import { usePrefersReducedMotion, useTypingEffect } from "../hooks";
import GlitchText from "./GlitchText";

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const typed = useTypingEffect(HERO.roles, { enabled: !reduced });

  return (
    <section id="home" className="hero" aria-labelledby="home-title">
      <div className="container hero-inner">
        <p className="status-pill">
          <span className="status-dot" aria-hidden="true" />
          {HERO.status}
        </p>
        <p className="hero-eyebrow" aria-hidden="true">&gt;_ hello, world</p>
        <h1 id="home-title" className="hero-name">
          <GlitchText text={PROFILE.name} enabled={!reduced} />
        </h1>
        <p className="hero-role" aria-hidden="true">
          <span className="prompt">&gt;</span> {typed}
          <span className="caret" />
        </p>
        <p className="sr-only">{HERO.roles.join(", ")}</p>
        <p className="hero-intro">{HERO.intro}</p>
        <ul className="chip-list" aria-label="Core skills">
          {HERO.chips.map((c) => <li key={c} className="chip">{c}</li>)}
        </ul>
        <div className="button-row">
          <a className="btn btn-primary" href="#experience">See my work</a>
          <a className="btn btn-secondary" href="#contact">Get in touch</a>
          <a className="btn btn-ghost" href={PROFILE.linkedin.url} target="_blank" rel="noreferrer">
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a className="btn btn-ghost" href={PROFILE.github.url} target="_blank" rel="noreferrer">
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
