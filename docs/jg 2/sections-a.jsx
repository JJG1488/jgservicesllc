/* JG Services LLC — sections part A: Nav, Hero, Marquee, Services, Process */
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

/* ---------------- Navigation ---------------- */
function Nav({ onNav }) {
  const [scrolled, setScrolled] = useStateA(false);
  const [open, setOpen] = useStateA(false);
  useEffectA(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const click = (e, href) => {
    if (href && href.charAt(0) === "#") {
      e.preventDefault();
      setOpen(false);
      const el = document.querySelector(href);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
    }
    // otherwise: allow normal cross-page navigation
  };
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand" onClick={(e) => click(e, "#top")} aria-label="JG Services LLC home">
          <BrandMark />
          <span className="brand-word grad-text">JG Services LLC</span>
        </a>
        <div className="nav-links desktop">
          {JG.navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={(e) => click(e, l.href)}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: "0.6rem 1.1rem", fontSize: "0.9rem" }} onClick={(e) => click(e, "#contact")}>
            Start a project
          </a>
        </div>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      <div className="mobile-menu wrap" style={{ maxHeight: open ? 420 : 0, transition: "max-height .4s var(--ease)" }}>
        <div className="inner">
          {JG.navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => click(e, l.href)}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ marginTop: "0.6rem", justifyContent: "center" }} onClick={(e) => click(e, "#contact")}>Start a project</a>
        </div>
      </div>
    </nav>
  );
}

/* ---------------- Animated build terminal ---------------- */
const TERM_LINES = [
  [{ c: "t-prompt", t: "➜ " }, { c: "t-dim", t: "~/clients " }, { t: "npx create-jg-app " }, { c: "t-str", t: "\"your-idea\"" }],
  [{ c: "t-ok", t: "✓ " }, { c: "t-dim", t: "scaffolding " }, { c: "t-key", t: "Next.js" }, { c: "t-dim", t: " + " }, { c: "t-key", t: "TypeScript" }],
  [{ c: "t-ok", t: "✓ " }, { c: "t-dim", t: "wiring " }, { c: "t-key", t: "API" }, { c: "t-dim", t: " + secure " }, { c: "t-key", t: "auth" }],
  [{ c: "t-ok", t: "✓ " }, { c: "t-dim", t: "tuning Core Web Vitals " }, { c: "t-flag", t: "--lighthouse 95+" }],
  [{ c: "t-ok", t: "✓ " }, { c: "t-dim", t: "deploying to the edge " }, { c: "t-flag", t: "--zero-downtime" }],
  [{ c: "t-prompt", t: "➜ " }, { c: "t-ok", t: "shipped " }, { c: "t-str", t: "https://yourbusiness.com" }, { c: "t-dim", t: "  (2.4s)" }],
];

function BuildTerminal() {
  const [shown, setShown] = useStateA(0);
  const [typed, setTyped] = useStateA(0);
  useEffectA(() => {
    if (document.body.classList.contains("motion-off")) { setShown(TERM_LINES.length); return; }
    let line = 0, ch = 0, raf;
    const full = TERM_LINES.map((segs) => segs.reduce((a, s) => a + s.t.length, 0));
    let last = performance.now();
    const step = (now) => {
      if (now - last > 26) {
        last = now;
        if (line < TERM_LINES.length) {
          ch++;
          setTyped(ch);
          if (ch >= full[line]) {
            line++; ch = 0;
            setShown(line); setTyped(0);
            last = now + 240;
          }
        } else {
          // restart loop after a pause
          if (now - last > 2600) { line = 0; ch = 0; setShown(0); setTyped(0); }
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const renderLine = (segs, full) => {
    let budget = full;
    return segs.map((s, i) => {
      if (budget <= 0) return null;
      const txt = s.t.slice(0, budget);
      budget -= s.t.length;
      return <span key={i} className={s.c || ""}>{txt}</span>;
    });
  };

  return (
    <div className="term surface surface-strong">
      <div className="term-bar">
        <span className="term-dot" style={{ background: "#ff5f57" }}></span>
        <span className="term-dot" style={{ background: "#febc2e" }}></span>
        <span className="term-dot" style={{ background: "#28c840" }}></span>
        <span className="term-title">jg-services — build</span>
      </div>
      <div className="term-body">
        {TERM_LINES.map((segs, i) => {
          if (i > shown) return null;
          const isCurrent = i === shown;
          return (
            <div key={i} className="term-line">
              {renderLine(segs, isCurrent ? typed : 999)}
              {isCurrent && <span className="cursor-blink"></span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ layout, onNav }) {
  const click = (e, href) => { e.preventDefault(); const el = document.querySelector(href); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" }); };
  return (
    <header id="top" className={`hero ${layout === "spotlight" ? "spotlight" : ""}`}>
      <div className="hero-banner" aria-hidden="true"></div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="kicker"><span className="eyebrow-dot"></span>JG Services LLC · Web Development</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display hero-title">
              We turn everyday ideas into <span className="grad-text">digital reality</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-sub">
              Custom web applications and high-performance websites — engineered by a developer who answers the phone, ships every week, and hands you code you actually own.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary" onClick={(e) => click(e, "#contact")}>Start your project <Icon name="arrow" size={18} className="arrow" /></a>
              <a href="#work" className="btn btn-ghost" onClick={(e) => click(e, "#work")}>See the work</a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="trust-row">
              {JG.trust.map((t, i) => (
                <React.Fragment key={t.label}>
                  {i > 0 && <span className="trust-sep"></span>}
                  <div className="trust-item"><b>{t.value}</b> {t.label}</div>
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="hero-side">
          <Reveal delay={200}><BuildTerminal /></Reveal>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Tech marquee ---------------- */
function Marquee() {
  const items = [...JG.tech, ...JG.tech];
  return (
    <div className="section-tight">
      <div className="wrap">
        <div className="marquee">
          <div className="marquee-track">
            {items.map((t, i) => (
              <span className="marquee-item" key={i}><Icon name="bolt" size={15} sw={0} /> {t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Services ---------------- */
function ServiceCard({ s, open, onToggle }) {
  return (
    <Reveal className={`surface lift svc-card ${open ? "open" : ""}`}>
      <div onClick={onToggle}>
        <div className="svc-icon"><Icon name={s.icon} size={26} /></div>
        <h3 className="svc-name">{s.name}</h3>
        <p className="svc-desc">{s.desc}</p>
        <div className="svc-meta">
          <div className="cell"><div className="lbl">Timeline</div><div className="val">{s.timeline}</div></div>
          <div className="cell"><div className="lbl">Investment</div><div className="val">{s.price}</div></div>
        </div>
      </div>
      <div className="svc-expand">
        <div>
          <ul className="svc-feat">
            {s.features.map((f, i) => <li key={i}><Icon name="check" size={16} /> <span>{f}</span></li>)}
          </ul>
          <div className="svc-chips">{s.chips.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
        </div>
      </div>
      <button className="svc-toggle" onClick={onToggle}>
        {open ? "Show less" : "What's included"} <Icon name="chevron" size={16} />
      </button>
    </Reveal>
  );
}

function Services() {
  const [open, setOpen] = useStateA(0);
  return (
    <section id="services" className="section">
      <div className="wrap">
        <SectionHead
          kicker="What we build"
          title={<>Services scoped to your <span className="grad-text">business</span>, not a template.</>}
          lead="Six ways we help businesses ship software that works — each with clear timelines and honest pricing."
        />
        <div className="svc-grid" style={{ marginTop: "3rem" }}>
          {JG.services.map((s, i) => (
            <ServiceCard key={s.name} s={s} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const [active, setActive] = useStateA(0);
  const step = JG.process[active];
  return (
    <section id="process" className="section">
      <div className="wrap">
        <SectionHead
          kicker="How it works"
          title={<>A proven path from <span className="grad-text">idea to launch</span>.</>}
          lead="Three phases, weekly demos, and no surprises. You always know exactly where your project stands."
        />
        <div className="proc" style={{ marginTop: "3rem" }}>
          <Reveal className="proc-steps">
            {JG.process.map((p, i) => (
              <div key={p.n} className={`proc-step ${active === i ? "active" : ""}`} onClick={() => setActive(i)}>
                <span className="proc-num">{p.n}</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.blurb}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={120} className="surface proc-panel" key={active}>
            <span className="chip">{step.tag}</span>
            <div className="big-num grad-text" style={{ marginTop: "0.8rem" }}>{step.n}</div>
            <h3 className="display" style={{ fontSize: "1.8rem", margin: "0.4rem 0 0.7rem", color: "var(--ink-100)" }}>{step.title}</h3>
            <p style={{ color: "var(--ink-300)", lineHeight: 1.7, margin: 0, fontSize: "1.02rem" }}>{step.detail}</p>
            <ul className="proc-detail-list">
              {step.points.map((pt, i) => <li key={i}><Icon name="check" size={17} /> <span>{pt}</span></li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Marquee, Services, Process });
