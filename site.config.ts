import type { SiteConfig } from "@/types";

/* Single source of truth for nav, footer, and company info —
   ported from the redesign handoff's nav-config.js (real data). */
export const siteConfig: SiteConfig = {
  name: "JG Services LLC",
  owner: "James Gault",
  tagline: "Custom web development",
  description:
    "Custom web development, e-commerce, and SEO for businesses that want a site that actually works. Built on clean code and honest timelines.",
  url: "https://jgservicesllc.com",
  email: "info@jgservicesllc.com",
  phone: "(586) 276-5646",
  phoneHref: "tel:+15862765646",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Projects", href: "/projects" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    explore: [
      { label: "Services", href: "/services" },
      { label: "Process", href: "/process" },
      { label: "Projects", href: "/projects" },
      { label: "Why Us", href: "/#why" },
    ],
    resources: [
      { label: "Start a Project", href: "/intake" },
      { label: "Schedule a Call", href: "/schedule" },
      { label: "Resources", href: "/resources" },
      { label: "Demos", href: "/demos" },
      { label: "Blog", href: "/blog" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Service Agreement", href: "/contract" },
      { label: "FAQ", href: "/faq" },
    ],
    connect: [
      { label: "Email", href: "mailto:info@jgservicesllc.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jamesgault1488", ext: true },
      { label: "GitHub", href: "https://github.com/JJG1488", ext: true },
    ],
  },
  socials: {
    github: "https://github.com/JJG1488",
    linkedin: "https://www.linkedin.com/in/jamesgault1488",
  },
};
