export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
  ext?: boolean;
}

export interface SiteConfig {
  name: string;
  owner: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  phoneHref: string;
  nav: NavItem[];
  footer: {
    explore: FooterLink[];
    resources: FooterLink[];
    legal: FooterLink[];
    connect: FooterLink[];
  };
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

/** Icon names map to the stroke icon set in @/components/ui/icons. */
export type ServiceIcon = "code" | "phone" | "cart" | "gauge" | "plug" | "shield";

export interface Service {
  id: string;
  icon: ServiceIcon;
  title: string;
  shortDescription: string;
  features: string[];
  timeline: string;
  pricing: string;
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  /** Path under /public (e.g. "/images/brandforgeai.png"), or null when no shot exists (use gradient placeholder). */
  image: string | null;
  tags: string[];
  liveUrl: string;
  featured?: boolean;
  /** Home bento sizing: "lg" (2x2), "wide" (2x1), or "" (1x1). */
  size?: "lg" | "wide" | "";
}

export interface ProcessPhase {
  /** Zero-padded phase number, e.g. "01". */
  n: string;
  title: string;
  /** Timeline tag, e.g. "Week 1". */
  tag: string;
  blurb: string;
  detail: string;
  points: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export interface TechItem {
  name: string;
  icon?: string;
  category?: string;
}

export interface HomeStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
}

export interface WhyItem {
  icon: string;
  title: string;
  desc: string;
}

export interface TrustItem {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/** Lifecycle of a captured lead in the admin inbox. */
export type InquiryStatus = "new" | "warn" | "won" | "muted";

/** Which public form produced the lead. */
export type InquirySource = "contact" | "intake";

/**
 * A persisted lead (contact form or intake wizard), as read back from
 * Firestore and serialized for the admin UI. Timestamps are ISO strings so
 * the object is a plain, client-serializable payload (no Firestore types
 * cross the server→client boundary).
 */
export interface Inquiry {
  id: string;
  source: InquirySource;
  name: string;
  email: string;
  company?: string;
  /** Contact: project-type label. Intake: chosen project-type name. */
  type: string;
  /** Contact: budget range. Intake: estimate range string (e.g. "$8,000–$10,400"). */
  budget: string;
  /** Contact: the message. Intake: the optional "anything else" details. */
  message: string;
  status: InquiryStatus;
  /** ISO 8601 — when the lead was captured. */
  createdAt: string;
  /** Short label for table cells, e.g. "Jun 2" (formatted server-side, ET). */
  dateLabel: string;
  /** Full label for the detail panel, e.g. "Jun 2, 2026, 3:14 PM" (ET). */
  dateFull: string;
  /** Intake only: selected feature names. */
  features?: string[];
  /** Intake only: chosen timeline name. */
  timeline?: string;
  /** Intake only: numeric ballpark (low end of the range). */
  estimate?: number;
  /** Originating IP (best-effort, from x-forwarded-for). */
  ip?: string;
}
