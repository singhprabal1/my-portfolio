import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

// Cycles through `strings`, typing and deleting one character at a time.
// The displayed text is derived from state; the effect only schedules the next step.
export function useTypingEffect(strings, { enabled = true, speed = 70, pause = 1600 } = {}) {
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const current = strings[idx % strings.length];

  useEffect(() => {
    if (!enabled) return;
    let next;
    let delay = speed;
    if (!deleting && charIdx < current.length) {
      next = () => setCharIdx((c) => c + 1);
    } else if (!deleting) {
      next = () => setDeleting(true);
      delay = pause;
    } else if (charIdx > 0) {
      next = () => setCharIdx((c) => c - 1);
      delay = speed / 2;
    } else {
      next = () => {
        setDeleting(false);
        setIdx((i) => (i + 1) % strings.length);
      };
      delay = 300;
    }
    const t = setTimeout(next, delay);
    return () => clearTimeout(t);
  }, [enabled, charIdx, deleting, current, strings.length, speed, pause]);

  return enabled ? current.slice(0, charIdx) : strings[0];
}

// Tracks which section is under the middle of the viewport, for nav highlighting.
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  const key = ids.join(",");

  useEffect(() => {
    const els = key.split(",").map((id) => document.getElementById(id)).filter(Boolean);
    const visible = new Map();

    const pick = () => {
      // At the very bottom, the last section may be too short to reach the middle line.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) return setActive(els[els.length - 1]?.id ?? null);
      const hit = els.find((el) => visible.get(el.id));
      setActive(hit ? hit.id : null);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        pick();
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    window.addEventListener("scroll", pick, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", pick);
    };
  }, [key]);

  return active;
}

// Marks an element visible the first time any part of it enters the viewport.
// Hiding is done in CSS only when motion is allowed and JS has run, so content
// is never stuck invisible.
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.visible = "true";
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
