import { siteConfig } from "../../../../site.config";

/* Company contact card used in the closing "Contact" section of both
   legal pages. Pulls real contact details from siteConfig. */
export function LegalContactCard() {
  return (
    <div className="surface" style={{ padding: "1.4rem", marginTop: ".6rem" }}>
      <p style={{ color: "var(--ink-100)", fontWeight: 600, margin: "0 0 .5rem" }}>
        {siteConfig.name}
      </p>
      <p style={{ margin: 0 }}>
        Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
      <p style={{ margin: ".3rem 0 0" }}>
        Phone: <a href={siteConfig.phoneHref}>+1 {siteConfig.phone}</a>
      </p>
    </div>
  );
}
