import { siteConfig } from "../../../../site.config";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icons";

/* Closing CTA band. Also reused by the Services and Process pages. */
export function CTABanner() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <Reveal className="surface surface-strong cta">
          <span className="kicker center" style={{ justifyContent: "center", display: "flex" }}>
            Let&apos;s build something
          </span>
          <h2 className="display" style={{ marginTop: "1rem" }}>
            Ready to start your <span className="grad-text">project</span>?
          </h2>
          <p>
            Tell us what you&apos;re building. You&apos;ll get a free consultation and a detailed
            quote — no obligation, no sales pressure.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center", marginTop: 0 }}>
            <a href={siteConfig.phoneHref} className="btn btn-primary">
              <Icon name="phone" size={18} /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="btn btn-ghost">
              <Icon name="mail" size={18} /> {siteConfig.email}
            </a>
          </div>
          <div className="trust-row" style={{ justifyContent: "center", marginTop: "1.8rem" }}>
            <div className="trust-item">
              <Icon name="check" size={16} /> Free consultation
            </div>
            <span className="trust-sep" />
            <div className="trust-item">
              <Icon name="check" size={16} /> Detailed quote
            </div>
            <span className="trust-sep" />
            <div className="trust-item">
              <Icon name="check" size={16} /> 30-day post-launch support
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
