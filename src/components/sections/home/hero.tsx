import { Fragment } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icons";
import { trust } from "@/data/home";
import { BuildTerminal } from "./build-terminal";

/* Split hero: copy + CTAs on the left, animated build terminal on the
   right, with the photographic banner fading in behind everything. */
export function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-banner" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="kicker">
              <span className="eyebrow-dot" />
              JG Services LLC · Web Development
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display hero-title">
              We turn everyday ideas into <span className="grad-text">digital reality</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-sub">
              Custom web applications and high-performance websites — engineered by a developer
              who answers the phone, ships every week, and hands you code you actually own.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-cta">
              <Link href="/#contact" className="btn btn-primary">
                Start your project <Icon name="arrow" size={18} className="arrow" />
              </Link>
              <Link href="/#work" className="btn btn-ghost">
                See the work
              </Link>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="trust-row">
              {trust.map((t, i) => (
                <Fragment key={t.label}>
                  {i > 0 && <span className="trust-sep" />}
                  <div className="trust-item">
                    <b>{t.value}</b> {t.label}
                  </div>
                </Fragment>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="hero-side">
          <Reveal delay={200}>
            <BuildTerminal />
          </Reveal>
        </div>
      </div>
    </header>
  );
}
