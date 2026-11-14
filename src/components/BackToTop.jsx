import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a href="#home" className={`back-to-top ${show ? "is-visible" : ""}`} aria-label="Back to top" aria-hidden={!show} tabIndex={show ? 0 : -1}>
      ↑
    </a>
  );
}
