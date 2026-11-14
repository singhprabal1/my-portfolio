import { useEffect, useState } from "react";
import { SECTIONS } from "../content";

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${open ? "is-open" : ""}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-brand" onClick={() => setOpen(false)}>
          <span>PRABAL</span><span className="accent">.DEV</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="nav-toggle-icon" aria-hidden="true" />
          {open ? "Close" : "Menu"}
        </button>
        <nav aria-label="Primary">
          <ul id="nav-links" className="nav-links">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
