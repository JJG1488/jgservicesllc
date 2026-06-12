/* JG Services LLC — shared primitives, icons, hooks */
const { useState, useEffect, useRef, useCallback } = React;

/* ---------- Brand mark (gradient JG monogram, from the real logo) ---------- */
function BrandMark({ className = "brand-mark" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="jgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent-a)" />
          <stop offset="100%" stopColor="var(--accent-b)" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#jgGrad)" />
      <path d="M 35 25 L 45 25 L 45 55 Q 45 65 35 65 Q 25 65 25 55 L 32 55 Q 32 58 35 58 Q 38 58 38 55 L 38 32 L 35 32 Z" fill="white" />
      <path d="M 65 32 Q 55 32 55 42 L 55 58 Q 55 68 65 68 Q 75 68 75 58 L 75 50 L 65 50 L 65 57 L 68 57 L 68 58 Q 68 61 65 61 Q 62 61 62 58 L 62 42 Q 62 39 65 39 Q 68 39 68 42 L 75 42 Q 75 32 65 32 Z" fill="white" />
    </svg>
  );
}

/* ---------- Icon set (stroke, currentColor) ---------- */
const PATHS = {
  code: <><path d="M8 6 2 12l6 6" /><path d="m16 6 6 6-6 6" /></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></>,
  cart: <><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2 3h2.5l2.2 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.5L21.5 7H6" /></>,
  gauge: <><path d="M12 14 16 9" /><path d="M3.5 18a9 9 0 1 1 17 0" /><circle cx="12" cy="14" r="1.4" /></>,
  plug: <><path d="M9 2v6M15 2v6" /><path d="M6 8h12v3a6 6 0 0 1-12 0z" /><path d="M12 17v5" /></>,
  shield: <><path d="M12 3 5 6v6c0 4.4 3 7.8 7 9 4-1.2 7-4.6 7-9V6z" /><path d="m9.2 12 1.9 1.9 3.7-3.8" /></>,
  check: <path d="m4 12 5 5L20 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  tag: <><path d="M3 7v5.6a2 2 0 0 0 .6 1.4l7 7a2 2 0 0 0 2.8 0l5.6-5.6a2 2 0 0 0 0-2.8l-7-7A2 2 0 0 0 12.6 5H7a4 4 0 0 0-4 4z" /><circle cx="8" cy="10" r="1.2" /></>,
  chat: <><path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z" /></>,
  sparkle: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  hands: <><path d="M7 11V6a2 2 0 0 1 4 0v5" /><path d="M11 11V4.5a2 2 0 0 1 4 0V11" /><path d="M15 11V6.5a2 2 0 0 1 4 0V14a7 7 0 0 1-7 7H9.5a4 4 0 0 1-2.8-1.2L3 16" /></>,
  rocket: <><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2a2.8 2.8 0 0 0-3-3z" /><path d="M9 12a14 14 0 0 1 8-9c2 0 4 2 4 4a14 14 0 0 1-9 8z" /><circle cx="15" cy="9" r="1.4" /></>,
  star: <path d="m12 3 2.5 5.6 6.1.6-4.6 4 1.4 6L12 16.9 6.6 19.2l1.4-6L3.4 9.2l6.1-.6z" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  github: <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.300-4.6-1.1-4.6-5a4 4 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7a4 4 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" /></>,
  ext: <><path d="M9 5h10v10" /><path d="M19 5 8 16" /><path d="M14 19H5V10" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>,
};

function Icon({ name, size = 22, sw = 1.8, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {PATHS[name] || null}
    </svg>
  );
}

/* ---------- Hooks ---------- */
function useReveal(opts) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = "", as = "div", style = {} }) {
  const ref = useReveal();
  const Tag = as;
  return <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>{children}</Tag>;
}

function useCountUp(target, { decimals = 0, duration = 1600 } = {}) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const reduce = document.body.classList.contains("motion-off");
      if (reduce) { setVal(target); return; }
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setVal(target);
      };
      requestAnimationFrame(tick);
    };
    if (!("IntersectionObserver" in window)) { run(); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && run()), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, decimals, duration]);
  return [decimals ? val.toFixed(decimals) : Math.round(val), ref];
}

/* ---------- Small presentational ---------- */
function SectionHead({ kicker, title, lead, center, light }) {
  return (
    <Reveal className={`sec-head ${center ? "center" : ""}`}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className="display sec-title">{title}</h2>
      {lead && <p className="sec-lead">{lead}</p>}
    </Reveal>
  );
}

function Stars({ n = 5 }) {
  return (
    <div className="stars" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="m12 3 2.5 5.6 6.1.6-4.6 4 1.4 6L12 16.9 6.6 19.2l1.4-6L3.4 9.2l6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

Object.assign(window, { BrandMark, Icon, useReveal, Reveal, useCountUp, SectionHead, Stars });
