import { useState, useEffect, useRef } from "react";

const TYPING_STRINGS = [
  "Network Engineer",
  "Cloud & Infrastructure",
  "Systems Administrator",
  "Problem Solver",
  "Engineering Technology Student",
  "CCST Certified",
];

function useTypingEffect(strings, speed = 80, pause = 1600) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % strings.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, strings, speed, pause]);

  return display;
}

function Navbar({ active, setActive }) {
  const links = ["home", "about", "skills", "projects", "experience", "contact"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(5,8,15,0.85)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid #0f3",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "0 2.5rem", height: "56px",
      fontFamily: "'Share Tech Mono', monospace",
    }}>
      <span style={{ color: "#0f3", fontSize: "1.1rem", letterSpacing: "0.15em" }}>
        <span style={{ color: "#fff" }}>PRABAL</span>
        <span style={{ color: "#0f3" }}>.DEV</span>
      </span>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {links.map(l => (
          <button key={l} onClick={() => setActive(l)} style={{
            background: "none", border: "none", cursor: "pointer",
            color: active === l ? "#0f3" : "#6b7c6b",
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "0.78rem", letterSpacing: "0.1em",
            textTransform: "uppercase",
            transition: "color 0.2s",
            borderBottom: active === l ? "1px solid #0f3" : "1px solid transparent",
            paddingBottom: "2px",
          }}>{l}</button>
        ))}
      </div>
    </nav>
  );
}

function GlitchText({ text }) {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const iv = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120);
    }, 3500);
    return () => clearInterval(iv);
  }, []);
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{
        position: "absolute", top: glitch ? "2px" : 0, left: glitch ? "-3px" : 0,
        color: "#f03", opacity: glitch ? 0.7 : 0, userSelect: "none", transition: "none",
      }} aria-hidden>{text}</span>
      <span style={{
        position: "absolute", top: glitch ? "-2px" : 0, left: glitch ? "3px" : 0,
        color: "#03f", opacity: glitch ? 0.7 : 0, userSelect: "none",
      }} aria-hidden>{text}</span>
      {text}
    </span>
  );
}

function Hero({ scrollTo }) {
  const typed = useTypingEffect(TYPING_STRINGS);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  const skills = ["TCP/IP", "Python", "Linux", "AWS", "Docker", "Cisco CLI", "Bash", "OSPF"];

  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "flex-start",
      padding: "6rem 2.5rem 3rem", maxWidth: "860px", margin: "0 auto",
      opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(24px)",
      transition: "opacity 0.7s, transform 0.7s",
    }}>
      <div style={{ color: "#0f3", fontFamily: "'Share Tech Mono', monospace", fontSize: "0.9rem", marginBottom: "1rem", letterSpacing: "0.12em" }}>
        &gt;_ hello, world —
      </div>
      <h1 style={{
        fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontFamily: "'Share Tech Mono', monospace",
        color: "#e8ffe8", margin: 0, lineHeight: 1.05, letterSpacing: "-0.01em",
      }}>
        <GlitchText text="Prabal Singh" />
      </h1>
      <div style={{
        marginTop: "1.2rem", fontFamily: "'Share Tech Mono', monospace",
        fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#0f3", minHeight: "2rem",
      }}>
        <span style={{ color: "#6b7c6b" }}>&gt; </span>{typed}<span style={{
          display: "inline-block", width: "2px", height: "1.2em",
          background: "#0f3", verticalAlign: "text-bottom",
          animation: "blink 0.9s step-end infinite",
        }} />
      </div>
      <p style={{
        marginTop: "2rem", maxWidth: "580px", color: "#8fa88f",
        fontFamily: "'Share Tech Mono', monospace", fontSize: "0.88rem",
        lineHeight: 1.85, letterSpacing: "0.03em",
      }}>
        Junior @ San Jose State University — B.S. Engineering Technology,<br />
        concentration in Computer Network System Management. Building things<br />
        with networks, code, and hardware. 3.6 GPA. CCST certified.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "2.2rem" }}>
        {skills.map(s => (
          <span key={s} style={{
            padding: "0.28rem 0.75rem", border: "1px solid #1a3d1a",
            background: "#060e06", color: "#0f3",
            fontFamily: "'Share Tech Mono', monospace", fontSize: "0.75rem",
            letterSpacing: "0.08em",
          }}>{s}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
        <button onClick={() => scrollTo("contact")} style={{
          padding: "0.65rem 1.5rem", background: "#0f3", color: "#050a05",
          fontFamily: "'Share Tech Mono', monospace", fontSize: "0.82rem",
          border: "none", cursor: "pointer", letterSpacing: "0.1em", fontWeight: "700",
          transition: "background 0.2s",
        }}>CONTACT_ME</button>
        <a href="https://www.linkedin.com/in/prabal-singh11/" target="_blank" rel="noreferrer" style={{
          padding: "0.65rem 1.5rem", border: "1px solid #0f3", color: "#0f3",
          fontFamily: "'Share Tech Mono', monospace", fontSize: "0.82rem",
          textDecoration: "none", letterSpacing: "0.1em",
          transition: "background 0.2s, color 0.2s",
        }}>LINKEDIN</a>
        <a href="https://github.com/singhprabal1" target="_blank" rel="noreferrer" style={{
          padding: "0.65rem 1.5rem", border: "1px solid #1a3d1a", color: "#6b8a6b",
          fontFamily: "'Share Tech Mono', monospace", fontSize: "0.82rem",
          textDecoration: "none", letterSpacing: "0.1em",
          transition: "background 0.2s, color 0.2s",
        }}>GITHUB</a>
      </div>
    </section>
  );
}

function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 200); }, []);
  const interests = ["Homelab", "Soccer", "Gaming", "Music", "AI Infrastructure", "Networking"];
  return (
    <section style={{ minHeight: "80vh", padding: "7rem 2.5rem 4rem", maxWidth: "860px", margin: "0 auto" }}>
      <SectionHeader label="01" title="ABOUT" />
      <div style={{
        marginTop: "3rem", display: "grid",
        gridTemplateColumns: "1fr 1fr", gap: "3rem",
      }}>
        <div>
          <p style={{
            fontFamily: "'Share Tech Mono', monospace", color: "#8fa88f",
            fontSize: "0.88rem", lineHeight: 2, letterSpacing: "0.03em",
          }}>
            I'm Prabal, a junior at SJSU studying Engineering Technology with a focus on networking and systems. I got into this field because I genuinely enjoy figuring out how things connect and communicate — whether that's configuring networks, writing automation scripts, or building hardware projects from scratch.
          </p>
          <p style={{
            fontFamily: "'Share Tech Mono', monospace", color: "#8fa88f",
            fontSize: "0.88rem", lineHeight: 2, letterSpacing: "0.03em", marginTop: "1.2rem",
          }}>
            Lately I've been really into AI infrastructure — how large-scale AI systems are built, deployed, and kept running at scale. I recently interned at UL Solutions doing wireless compliance testing, and I'm currently looking for my next internship in network engineering, cloud, or AI infrastructure.
          </p>
          <a href="/resume.pdf" download style={{
            display: "inline-block", marginTop: "2rem",
            padding: "0.65rem 1.5rem", background: "#0f3", color: "#050a05",
            fontFamily: "'Share Tech Mono', monospace", fontSize: "0.82rem",
            textDecoration: "none", letterSpacing: "0.1em", fontWeight: "700",
          }}>↓ DOWNLOAD_RESUME</a>
        </div>
        <div>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#4a6a4a", fontSize: "0.7rem", letterSpacing: "0.18em", marginBottom: "1rem" }}>INTERESTS</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {interests.map(i => (
              <span key={i} style={{
                padding: "0.4rem 0.9rem", border: "1px solid #1a3a1a",
                background: "#040e04", color: "#0f3",
                fontFamily: "'Share Tech Mono', monospace", fontSize: "0.78rem",
                letterSpacing: "0.06em",
              }}>{i}</span>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", padding: "1.2rem 1.5rem", border: "1px solid #1a3a1a", background: "#040e04" }}>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#4a6a4a", fontSize: "0.7rem", letterSpacing: "0.18em", marginBottom: "1rem" }}>QUICK FACTS</div>
            {[
              ["📍", "San Jose, California"],
              ["🎓", "SJSU — May 2027"],
              ["💼", "Open to Internships"],
              ["🏆", "GPA: 3.6"],
              ["📜", "CCST Certified"],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: "flex", gap: "0.8rem", alignItems: "center", marginBottom: "0.6rem" }}>
                <span style={{ fontSize: "0.85rem" }}>{icon}</span>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#8fa88f", fontSize: "0.82rem" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILL_GROUPS = [
  {
    label: "Networking & Security",
    color: "#0f3",
    skills: ["TCP/IP", "UDP", "DNS", "DHCP", "VLANs", "Subnetting", "NAT", "IPv4/IPv6", "OSPF", "VPNs", "Firewalls", "BGP"],
  },
  {
    label: "Programming",
    color: "#3af",
    skills: ["Python", "Java", "SQL", "Bash", "Pandas", "Web Scraping", "Data Analysis", "Config Scripting"],
  },
  {
    label: "Cloud & Virtualization",
    color: "#fa3",
    skills: ["AWS EC2", "S3", "IAM", "Cloud Networking", "Virtual Machines", "Docker"],
  },
  {
    label: "Systems & Tools",
    color: "#a3f",
    skills: ["Linux", "Windows", "macOS", "Cisco CLI", "Arduino", "Raspberry Pi", "Wireshark", "Packet Tracer"],
  },
];

function Skills() {
  return (
    <section style={{ minHeight: "80vh", padding: "7rem 2.5rem 4rem", maxWidth: "960px", margin: "0 auto" }}>
      <SectionHeader label="02" title="SKILLS" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
        {SKILL_GROUPS.map((group) => (
          <div key={group.label} style={{
            border: "1px solid #1a2a1a", background: "#040a04", padding: "1.5rem",
          }}>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace", fontSize: "0.7rem",
              letterSpacing: "0.18em", color: group.color, marginBottom: "1.2rem",
              borderBottom: `1px solid ${group.color}22`, paddingBottom: "0.6rem",
            }}>{group.label}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {group.skills.map(s => (
                <span key={s} style={{
                  padding: "0.25rem 0.6rem", border: `1px solid ${group.color}33`,
                  background: `${group.color}08`, color: "#8fa88f",
                  fontFamily: "'Share Tech Mono', monospace", fontSize: "0.72rem",
                  letterSpacing: "0.05em",
                }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    name: "JobRadar",
    subtitle: "Automated LinkedIn Internship Scraper",
    date: "Mar 2026",
    tags: ["Python", "Apify", "Google Sheets API", "REST API", "Automation"],
    desc: "Built an automated job scraper that searches LinkedIn for internship listings across 20 keywords, filters and deduplicates results, and writes them directly to a Google Sheet. Runs weekly via cron — zero manual searching required.",
    highlight: "20 keywords · fully automated · REST APIs",
    github: "https://github.com/singhprabal1/JobRadar",
  },
  {
    name: "Hear the Light",
    subtitle: "LED Sound Level Meter",
    date: "May 2025",
    tags: ["Arduino", "Embedded Systems", "Signal Processing", "C++"],
    desc: "Designed and built a real-time sound-level meter using an Arduino Uno and LED array to visualize ambient noise. Integrated a microphone sensor to capture live audio input and programmed dynamic LED responses mapped to decibel thresholds.",
    highlight: "Hardware + firmware from scratch",
  },
  {
    name: "Line Following Robot",
    subtitle: "Autonomous Navigation",
    date: "Dec 2023",
    tags: ["Arduino", "IR Sensors", "PID Control", "Robotics"],
    desc: "Built an autonomous robot using Arduino and infrared sensors that achieves >95% tracking accuracy across varied surfaces and speeds. Calibrated sensor arrays and implemented control logic to handle edge cases and dynamic course changes.",
    highlight: "95% sensor accuracy · 40% control improvement",
  },
  {
    name: "Wireless Compliance Automation",
    subtitle: "UL Solutions — Internship",
    date: "2025",
    tags: ["Python", "Bash", "RF Testing", "Automation"],
    desc: "Automated wireless compliance test workflows at UL Solutions using Python and Bash scripts. Reduced manual test time significantly and improved reproducibility across Wi-Fi, BLE, and LTE evaluations. Operated SAR testing systems.",
    highlight: "Industry: RF / Regulatory Compliance",
  },
];

function Projects() {
  const [hovered, setHovered] = useState(null);
  return (
    <section style={{ minHeight: "100vh", padding: "7rem 2.5rem 4rem", maxWidth: "960px", margin: "0 auto" }}>
      <SectionHeader label="03" title="PROJECTS" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
        {PROJECTS.map((p, i) => (
          <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{
            border: `1px solid ${hovered === i ? "#0f3" : "#1a2a1a"}`,
            background: hovered === i ? "#060e06" : "#040a04",
            padding: "1.8rem", cursor: "default",
            transition: "border-color 0.25s, background 0.25s",
            position: "relative", overflow: "hidden",
          }}>
            {hovered === i && <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "2px",
              background: "linear-gradient(90deg, transparent, #0f3, transparent)",
            }} />}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#0f3", fontSize: "0.7rem", letterSpacing: "0.1em" }}>{p.date}</span>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#2a4a2a", fontSize: "0.7rem" }}>#{String(i+1).padStart(2,"0")}</span>
            </div>
            <h3 style={{ fontFamily: "'Share Tech Mono', monospace", color: "#e8ffe8", fontSize: "1.05rem", margin: "0 0 0.2rem", letterSpacing: "0.05em" }}>{p.name}</h3>
            <p style={{ fontFamily: "'Share Tech Mono', monospace", color: "#4a7a4a", fontSize: "0.75rem", margin: "0 0 1rem", letterSpacing: "0.08em" }}>{p.subtitle}</p>
            <p style={{ fontFamily: "'Share Tech Mono', monospace", color: "#6b8a6b", fontSize: "0.8rem", lineHeight: 1.75, marginBottom: "1.2rem" }}>{p.desc}</p>
            <div style={{ marginBottom: "1rem", padding: "0.5rem 0.8rem", background: "#0a180a", borderLeft: "2px solid #0f3" }}>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#0f3", fontSize: "0.72rem" }}>{p.highlight}</span>
            </div>
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" style={{
                display: "inline-block", marginBottom: "1rem",
                fontFamily: "'Share Tech Mono', monospace", fontSize: "0.72rem",
                color: "#0f3", letterSpacing: "0.08em", textDecoration: "none",
                border: "1px solid #1a3a1a", padding: "0.3rem 0.7rem",
                transition: "background 0.2s",
              }}>↗ VIEW_ON_GITHUB</a>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  fontFamily: "'Share Tech Mono', monospace", fontSize: "0.65rem",
                  padding: "0.2rem 0.5rem", border: "1px solid #1a3a1a", color: "#4a6a4a",
                  letterSpacing: "0.06em",
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const EXPERIENCE = [
  {
    role: "Testing Engineer Intern",
    company: "UL Solutions",
    dates: "May 2025 – Aug 2025",
    bullets: [
      "Performed wireless compliance testing for Wi-Fi, BLE, and LTE modules — validated RF performance, power levels, and communication stability against regulatory standards.",
      "Automated test workflows using Python and Bash, reducing manual test time and improving reproducibility across wireless evaluations.",
      "Operated SAR testing systems and conducted dielectric liquid verification checks to ensure RF exposure measurement accuracy.",
    ],
  },
  {
    role: "Peer Academic Success Coach",
    company: "UHS — SJSU",
    dates: "Aug 2024 – Present",
    bullets: [
      "Deliver academic advising and holistic support to 100+ first-year students, helping them navigate college and establish academic goals.",
      "Designed engagement programs that boosted residential community involvement by 30% through targeted workshops.",
      "Achieved 95% positive feedback in student surveys.",
    ],
  },
];

const CERTS = [
  { name: "CCST – Networking", issuer: "Cisco", date: "Dec 2025" },
  { name: "CCNA Coursework: Enterprise Networking, Security & Automation", issuer: "Cisco Networking Academy", date: "Aug 2025" },
  { name: "Excel Essential Training", issuer: "Microsoft Office", date: "Jan 2024" },
];

function Experience() {
  return (
    <section style={{ minHeight: "100vh", padding: "7rem 2.5rem 4rem", maxWidth: "860px", margin: "0 auto" }}>
      <SectionHeader label="04" title="EXPERIENCE" />
      <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {EXPERIENCE.map((e, i) => (
          <div key={i} style={{ borderLeft: "2px solid #1a3a1a", paddingLeft: "1.8rem", position: "relative" }}>
            <div style={{
              position: "absolute", left: "-5px", top: "4px",
              width: "8px", height: "8px", background: "#0f3", borderRadius: "50%",
            }} />
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
              <div>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#e8ffe8", fontSize: "1rem", letterSpacing: "0.05em" }}>{e.role}</span>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#0f3", fontSize: "0.85rem", marginLeft: "0.8rem" }}>@ {e.company}</span>
              </div>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#4a6a4a", fontSize: "0.75rem" }}>{e.dates}</span>
            </div>
            <ul style={{ margin: "0.8rem 0 0", paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {e.bullets.map((b, j) => (
                <li key={j} style={{ fontFamily: "'Share Tech Mono', monospace", color: "#7a987a", fontSize: "0.82rem", lineHeight: 1.75, display: "flex", gap: "0.7rem" }}>
                  <span style={{ color: "#0f3", flexShrink: 0 }}>▸</span>{b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "4rem" }}>
        <h3 style={{ fontFamily: "'Share Tech Mono', monospace", color: "#4a6a4a", fontSize: "0.75rem", letterSpacing: "0.18em", marginBottom: "1.5rem" }}>CERTIFICATIONS</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          {CERTS.map((c, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "0.9rem 1.2rem", border: "1px solid #1a2a1a", background: "#040a04",
              flexWrap: "wrap", gap: "0.5rem",
            }}>
              <div>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#c8e8c8", fontSize: "0.85rem" }}>{c.name}</span>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#4a6a4a", fontSize: "0.75rem", marginLeft: "0.8rem" }}>· {c.issuer}</span>
              </div>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#0f3", fontSize: "0.75rem" }}>{c.date}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h3 style={{ fontFamily: "'Share Tech Mono', monospace", color: "#4a6a4a", fontSize: "0.75rem", letterSpacing: "0.18em", marginBottom: "1rem" }}>EDUCATION</h3>
        <div style={{ border: "1px solid #1a3a1a", padding: "1.2rem 1.5rem", background: "#040e04" }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#e8ffe8", fontSize: "0.95rem" }}>B.S. Engineering Technology</div>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#4a6a4a", fontSize: "0.78rem", marginTop: "0.3rem" }}>Computer Network System Management · Minor: Business, CS</div>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginTop: "0.8rem" }}>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#0f3", fontSize: "0.8rem" }}>San Jose State University</span>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#4a6a4a", fontSize: "0.78rem" }}>GPA: 3.6 · May 2027</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText("prabals.0111@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contact-section" style={{ minHeight: "80vh", padding: "7rem 2.5rem 4rem", maxWidth: "700px", margin: "0 auto" }}>
      <SectionHeader label="05" title="CONTACT" />
      <p style={{ fontFamily: "'Share Tech Mono', monospace", color: "#6b8a6b", fontSize: "0.88rem", lineHeight: 1.85, marginTop: "2rem", maxWidth: "480px" }}>
        Open to internships, collaborations, and interesting problems. Reach out — response time is fast.
      </p>
      <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        {[
          { label: "EMAIL", value: "prabals.0111@gmail.com", action: copy, actionLabel: copied ? "COPIED!" : "COPY" },
          { label: "PHONE", value: "(408) 210-4700" },
          { label: "LOCATION", value: "San Jose, California" },
        ].map((item, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "1rem 1.3rem", border: "1px solid #1a2a1a", background: "#040a04",
            flexWrap: "wrap", gap: "0.5rem",
          }}>
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#4a6a4a", fontSize: "0.7rem", letterSpacing: "0.12em", minWidth: "80px" }}>{item.label}</span>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#c8e8c8", fontSize: "0.85rem" }}>{item.value}</span>
            </div>
            {item.action && (
              <button onClick={item.action} style={{
                background: "none", border: "1px solid #1a3a1a", color: "#0f3",
                fontFamily: "'Share Tech Mono', monospace", fontSize: "0.7rem",
                letterSpacing: "0.1em", padding: "0.3rem 0.8rem", cursor: "pointer",
                transition: "background 0.2s",
              }}>{item.actionLabel}</button>
            )}
          </div>
        ))}
        <a href="https://www.linkedin.com/in/prabal-singh11/" target="_blank" rel="noreferrer" style={{
          display: "flex", padding: "1rem 1.3rem", border: "1px solid #1a3a1a",
          background: "#040a04", textDecoration: "none",
          justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#4a6a4a", fontSize: "0.7rem", letterSpacing: "0.12em", minWidth: "80px" }}>LINKEDIN</span>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#c8e8c8", fontSize: "0.85rem" }}>prabal-singh11</span>
          </div>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#0f3", fontSize: "0.7rem", letterSpacing: "0.1em" }}>↗ OPEN</span>
        </a>
        <a href="https://github.com/singhprabal1" target="_blank" rel="noreferrer" style={{
          display: "flex", padding: "1rem 1.3rem", border: "1px solid #1a3a1a",
          background: "#040a04", textDecoration: "none",
          justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#4a6a4a", fontSize: "0.7rem", letterSpacing: "0.12em", minWidth: "80px" }}>GITHUB</span>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#c8e8c8", fontSize: "0.85rem" }}>singhprabal1</span>
          </div>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#0f3", fontSize: "0.7rem", letterSpacing: "0.1em" }}>↗ OPEN</span>
        </a>
      </div>
      <p style={{ fontFamily: "'Share Tech Mono', monospace", color: "#2a4a2a", fontSize: "0.72rem", marginTop: "4rem", letterSpacing: "0.08em" }}>
        © 2026 PRABAL SINGH · BUILT WITH REACT
      </p>
    </section>
  );
}

function SectionHeader({ label, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#1a3a1a", fontSize: "0.75rem", letterSpacing: "0.1em" }}>{label}</span>
      <h2 style={{ fontFamily: "'Share Tech Mono', monospace", color: "#e8ffe8", fontSize: "1.1rem", margin: 0, letterSpacing: "0.22em" }}>{title}</h2>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #1a3a1a, transparent)" }} />
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("home");
  const sectionRefs = {
    home: useRef(), about: useRef(), skills: useRef(),
    projects: useRef(), experience: useRef(), contact: useRef()
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.dataset.section); });
    }, { threshold: 0.3 });
    Object.entries(sectionRefs).forEach(([k, r]) => {
      if (r.current) { r.current.dataset.section = k; observer.observe(r.current); }
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    setActive(section);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #030704; color: #e8ffe8; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #040a04; }
        ::-webkit-scrollbar-thumb { background: #1a4a1a; }
        @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .scanline {
          position: fixed; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(transparent, rgba(0,255,51,0.04), transparent);
          pointer-events: none; z-index: 9999;
          animation: scanline 6s linear infinite;
        }
        .grid-bg {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(0,255,51,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,51,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        @media (max-width: 600px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="scanline" />
      <div className="grid-bg" />
      <Navbar active={active} setActive={scrollTo} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div ref={sectionRefs.home}><Hero scrollTo={scrollTo} /></div>
        <div ref={sectionRefs.about}><About /></div>
        <div ref={sectionRefs.skills}><Skills /></div>
        <div ref={sectionRefs.projects}><Projects /></div>
        <div ref={sectionRefs.experience}><Experience /></div>
        <div ref={sectionRefs.contact}><Contact /></div>
      </div>
    </>
  );
}
