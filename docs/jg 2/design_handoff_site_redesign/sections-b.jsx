/* JG Services LLC — sections part B: Work, Stats, Why, Testimonial, CTA, Footer */

/* ---------------- Portfolio bento ---------------- */
function Work() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <SectionHead
          kicker="Selected work"
          title={<>Real products, <span className="grad-text">really shipped</span>.</>}
          lead="From AI SaaS to local business sites — a sample of what we've designed, built, and launched."
        />
        <Reveal className="bento" style={{ marginTop: "3rem" }}>
          {JG.work.map((w) => (
            <a key={w.title} className={`tile ${w.size}`} href={w.liveUrl || "projects.html"}
               target={w.liveUrl ? "_blank" : undefined} rel={w.liveUrl ? "noopener noreferrer" : undefined}>
              {w.img
                ? <img src={w.img} alt={w.title} loading="lazy" />
                : <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", background: "linear-gradient(135deg, rgba(37,99,235,.3), rgba(147,51,234,.3))" }}><span className="mono" style={{ color: "var(--ink-200)", fontSize: ".78rem", letterSpacing: ".12em" }}>{w.title}</span></div>}
              <div className="tile-veil"></div>
              <div className="tile-meta">
                <div className="tag">{w.tag}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </a>
          ))}
        </Reveal>
        <Reveal style={{ marginTop: "2rem", textAlign: "center" }}>
          <a href="projects.html" className="btn btn-ghost">View all projects <Icon name="arrow" size={18} className="arrow" /></a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stat({ s }) {
  const [val, ref] = useCountUp(s.value, { decimals: s.decimals || 0 });
  return (
    <div className="stat" ref={ref}>
      <div className="num grad-text">{s.prefix || ""}{val}{s.suffix || ""}</div>
      <div className="lbl">{s.label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="section-tight">
      <div className="wrap">
        <Reveal className="surface surface-strong stats">
          {JG.stats.map((s) => <Stat key={s.label} s={s} />)}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Why choose us ---------------- */
function Why() {
  return (
    <section id="why" className="section">
      <div className="wrap">
        <SectionHead
          kicker="Why JG Services"
          title={<>A partner, not just a <span className="grad-text">vendor</span>.</>}
          lead="The difference is in how we work — transparent, communicative, and accountable from kickoff to long after launch."
        />
        <div className="why-grid" style={{ marginTop: "3rem" }}>
          {JG.why.map((w, i) => (
            <Reveal key={w.title} className="surface lift why-card" delay={(i % 3) * 80}>
              <div className="why-ic"><Icon name={w.icon} size={22} /></div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonial ---------------- */
function Testimonial() {
  const t = JG.testimonial;
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="surface quote">
          <Stars n={5} />
          <blockquote>"{t.quote}"</blockquote>
          <div className="by"><b>{t.name}</b> — {t.role}</div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  const c = JG.company;
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <Reveal className="surface surface-strong cta">
          <span className="kicker center" style={{ justifyContent: "center", display: "flex" }}>Let's build something</span>
          <h2 className="display" style={{ marginTop: "1rem" }}>Ready to start your <span className="grad-text">project</span>?</h2>
          <p>Tell us what you're building. You'll get a free consultation and a detailed quote — no obligation, no sales pressure.</p>
          <div className="hero-cta" style={{ justifyContent: "center", marginTop: 0 }}>
            <a href={c.phoneHref} className="btn btn-primary"><Icon name="phone" size={18} /> {c.phone}</a>
            <a href={`mailto:${c.email}`} className="btn btn-ghost"><Icon name="mail" size={18} /> {c.email}</a>
          </div>
          <div className="trust-row" style={{ justifyContent: "center", marginTop: "1.8rem" }}>
            <div className="trust-item"><Icon name="check" size={16} /> Free consultation</div>
            <span className="trust-sep"></span>
            <div className="trust-item"><Icon name="check" size={16} /> Detailed quote</div>
            <span className="trust-sep"></span>
            <div className="trust-item"><Icon name="check" size={16} /> 30-day post-launch support</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const c = JG.company, f = JG.footer;
  const click = (e, href) => {
    if (href.startsWith("#")) { e.preventDefault(); const el = document.querySelector(href); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" }); }
  };
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <a href="#top" className="brand" onClick={(e) => click(e, "#top")} style={{ marginBottom: "1rem" }}>
              <BrandMark className="brand-mark" />
              <span className="brand-word grad-text">JG Services LLC</span>
            </a>
            <p style={{ color: "var(--ink-300)", fontSize: "0.94rem", lineHeight: 1.7, maxWidth: "34ch" }}>
              Custom web development for businesses that want software built right — by a developer who treats it like a family venture.
            </p>
            <div className="foot-contact">
              <div><a href={`mailto:${c.email}`}>{c.email}</a></div>
              <div><a href={c.phoneHref}>{c.phone}</a></div>
            </div>
          </div>
          <div className="foot-col">
            <h5>Explore</h5>
            {f.explore.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          </div>
          <div className="foot-col">
            <h5>Resources</h5>
            {f.resources.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          </div>
          <div className="foot-col">
            <h5>Legal</h5>
            {f.legal.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          </div>
          <div className="foot-col">
            <h5>Connect</h5>
            {f.connect.map((l) => (
              <a key={l.label} href={l.href} target={l.ext ? "_blank" : undefined} rel={l.ext ? "noopener noreferrer" : undefined}>
                {l.label}{l.ext && <Icon name="ext" size={12} sw={2} className="" />}
              </a>
            ))}
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {c.name}. All rights reserved.</span>
          <span className="mono" style={{ fontSize: "0.78rem" }}>Built with Next.js · TypeScript · Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Work, Stats, Why, Testimonial, CTA, Footer });
