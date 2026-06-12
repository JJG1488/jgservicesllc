import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "custom-web-applications",
    icon: "code",
    title: "Custom Web Applications",
    shortDescription:
      "Full-stack products engineered around your exact workflow — not a template bent to fit it.",
    features: [
      "React / Next.js front-ends with typed, testable code",
      "Secure Node.js APIs and data models that scale",
      "Authentication, roles, and audit-ready access control",
      "Third-party + payment integrations",
    ],
    timeline: "6–12 weeks",
    pricing: "Scoped per build",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
  },
  {
    id: "responsive-websites",
    icon: "phone",
    title: "Responsive Websites",
    shortDescription:
      "Mobile-first marketing sites that load fast, rank well, and convert visitors into clients.",
    features: [
      "Mobile-first design across every breakpoint",
      "Sub-3-second loads and Core Web Vitals tuned",
      "Accessible, semantic, cross-browser markup",
      "CMS so you can edit content yourself",
    ],
    timeline: "3–6 weeks",
    pricing: "from $3,000",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "e-commerce",
    icon: "cart",
    title: "E-Commerce",
    shortDescription:
      "Stores with secure checkout, real inventory, and an admin you'll actually want to use.",
    features: [
      "Searchable catalog + frictionless checkout",
      "PCI-compliant payments via Stripe",
      "Inventory, orders, and fulfilment tracking",
      "Conversion-focused product pages",
    ],
    timeline: "8–14 weeks",
    pricing: "from $8,000",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: "seo-performance",
    icon: "gauge",
    title: "SEO & Performance",
    shortDescription:
      "Technical audits and Core Web Vitals work that move you up the page — measurably.",
    features: [
      "Full technical SEO + crawl audit",
      "Core Web Vitals and bundle optimization",
      "Structured data and rich-result markup",
      "Image, caching, and edge delivery tuning",
    ],
    timeline: "2–4 weeks",
    pricing: "from $1,500",
    tech: ["Lighthouse", "Search Console", "Cloudflare"],
  },
  {
    id: "apis-integrations",
    icon: "plug",
    title: "APIs & Integrations",
    shortDescription:
      "Connect the tools you already run with reliable, documented APIs and webhooks.",
    features: [
      "REST and GraphQL API design",
      "Clear, versioned documentation",
      "Webhooks and real-time event flows",
      "Hardened against abuse and rate-limited",
    ],
    timeline: "4–8 weeks",
    pricing: "from $4,000",
    tech: ["Node.js", "Express", "REST", "GraphQL"],
  },
  {
    id: "care-maintenance",
    icon: "shield",
    title: "Care & Maintenance",
    shortDescription:
      "Keep what we built secure, fast, and current — with a human who knows your codebase.",
    features: [
      "Security patches and dependency updates",
      "Automated backups + uptime monitoring",
      "Priority bug fixes from your developer",
      "Plain-English monthly reports",
    ],
    timeline: "Ongoing",
    pricing: "from $300/mo",
    tech: ["Monitoring", "Backups", "Patching"],
  },
];
