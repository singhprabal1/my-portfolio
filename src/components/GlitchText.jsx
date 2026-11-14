import { useEffect, useState } from "react";

export default function GlitchText({ text, enabled }) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    let off;
    const iv = setInterval(() => {
      setGlitch(true);
      off = setTimeout(() => setGlitch(false), 120);
    }, 6000);
    return () => {
      clearInterval(iv);
      clearTimeout(off);
    };
  }, [enabled]);

  return (
    <span className={`glitch ${enabled && glitch ? "is-glitching" : ""}`}>
      <span className="glitch-layer glitch-a" aria-hidden="true">{text}</span>
      <span className="glitch-layer glitch-b" aria-hidden="true">{text}</span>
      {text}
    </span>
  );
}
