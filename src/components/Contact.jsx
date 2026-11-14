import { useEffect, useState } from "react";
import { CONTACT, PROFILE } from "../content";
import Section from "./Section";

function CopyButton({ value }) {
  const [state, setState] = useState("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 2000);
    return () => clearTimeout(t);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
  };

  const label = { idle: "Copy", copied: "Copied", failed: "Copy failed" }[state];
  const announcement = { idle: "", copied: "Email address copied", failed: "Couldn't copy the email address" }[state];
  return (
    <>
      <button type="button" className="btn btn-small" onClick={copy} aria-label={state === "idle" ? "Copy email address" : undefined}>
        {label}
      </button>
      <span className="sr-only" role="status">{announcement}</span>
    </>
  );
}

function Row({ label, children, action }) {
  return (
    <li className="contact-row">
      <span className="contact-label">{label}</span>
      <span className="contact-value">{children}</span>
      {action}
    </li>
  );
}

export default function Contact() {
  return (
    <Section id="contact" index="05" title="Contact" className="section-contact">
      <p className="lead">{CONTACT.intro}</p>
      <ul className="contact-list">
        <Row label="Email" action={<CopyButton value={PROFILE.email} />}>
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </Row>
        <Row label="LinkedIn">
          <a href={PROFILE.linkedin.url} target="_blank" rel="noreferrer">
            {PROFILE.linkedin.handle} <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Row>
        <Row label="GitHub">
          <a href={PROFILE.github.url} target="_blank" rel="noreferrer">
            {PROFILE.github.handle} <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Row>
        <Row label="Résumé">
          <a href={PROFILE.resume.url} download={PROFILE.resume.downloadName}>Download PDF</a>
        </Row>
        <Row label="Location">{PROFILE.location}</Row>
      </ul>
    </Section>
  );
}
