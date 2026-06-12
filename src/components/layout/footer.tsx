import Link from "next/link";
import { siteConfig } from "../../../site.config";
import { BrandMark } from "@/components/ui/brand-mark";
import { Icon } from "@/components/ui/icons";
import type { FooterLink } from "@/types";

function FootCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="foot-col">
      <p className="foot-title">{title}</p>
      {links.map((l) =>
        l.ext || l.href.startsWith("mailto:") ? (
          <a
            key={l.label}
            href={l.href}
            target={l.ext ? "_blank" : undefined}
            rel={l.ext ? "noopener noreferrer" : undefined}
          >
            {l.label} {l.ext && <Icon name="ext" size={12} sw={2} className="inline" />}
          </a>
        ) : (
          <Link key={l.label} href={l.href}>
            {l.label}
          </Link>
        )
      )}
    </div>
  );
}

export function Footer() {
  const { footer } = siteConfig;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <Link href="/" className="brand" style={{ marginBottom: "1rem" }}>
              <BrandMark />
              <span className="brand-word grad-text">JG Services LLC</span>
            </Link>
            <p
              style={{
                color: "var(--ink-300)",
                fontSize: "0.94rem",
                lineHeight: 1.7,
                maxWidth: "34ch",
              }}
            >
              Custom web development for businesses that want software built right — by a
              developer who treats it like a family venture.
            </p>
            <div className="foot-contact">
              <div>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div>
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </div>
            </div>
          </div>
          <FootCol title="Explore" links={footer.explore} />
          <FootCol title="Resources" links={footer.resources} />
          <FootCol title="Legal" links={footer.legal} />
          <FootCol title="Connect" links={footer.connect} />
        </div>
        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span className="mono" style={{ fontSize: "0.78rem" }}>
            Built with Next.js · TypeScript · Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
