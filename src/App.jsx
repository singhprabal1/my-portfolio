import { PROFILE, SECTIONS } from "./content";
import { useActiveSection } from "./hooks";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const SECTION_IDS = SECTIONS.map((s) => s.id);

export default function App() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="grid-bg" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <Navbar active={active} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {PROFILE.name} · Built with React + Vite
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
