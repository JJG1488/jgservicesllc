/* JG Services LLC — content model. Fresh, sharpened copy. */
window.JG = (function () {
  const IMG = "../public/images/";

  // Cross-page nav (sourced from the shared site config)
  const navLinks = (window.SITE ? window.SITE.nav : []).map(function (l) { return { href: l.href, label: l.label }; });

  const tech = [
    "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
    "Tailwind CSS", "Stripe", "Framer Motion", "GraphQL", "Vercel",
  ];

  const trust = [
    { value: "50+", label: "sites shipped" },
    { value: "95+", label: "Lighthouse score" },
    { value: "<2.8s", label: "avg load time" },
  ];

  const services = [
    {
      icon: "code",
      name: "Custom Web Applications",
      desc: "Full-stack products engineered around your exact workflow — not a template bent to fit it.",
      timeline: "6–12 weeks",
      price: "Scoped per build",
      features: [
        "React / Next.js front-ends with typed, testable code",
        "Secure Node.js APIs and data models that scale",
        "Authentication, roles, and audit-ready access control",
        "Third-party + payment integrations",
      ],
      chips: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    },
    {
      icon: "phone",
      name: "Responsive Websites",
      desc: "Mobile-first marketing sites that load fast, rank well, and convert visitors into clients.",
      timeline: "3–6 weeks",
      price: "from $3,000",
      features: [
        "Mobile-first design across every breakpoint",
        "Sub-3-second loads and Core Web Vitals tuned",
        "Accessible, semantic, cross-browser markup",
        "CMS so you can edit content yourself",
      ],
      chips: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      icon: "cart",
      name: "E-Commerce",
      desc: "Stores with secure checkout, real inventory, and an admin you'll actually want to use.",
      timeline: "8–14 weeks",
      price: "from $8,000",
      features: [
        "Searchable catalog + frictionless checkout",
        "PCI-compliant payments via Stripe",
        "Inventory, orders, and fulfilment tracking",
        "Conversion-focused product pages",
      ],
      chips: ["Next.js", "Stripe", "PostgreSQL"],
    },
    {
      icon: "gauge",
      name: "SEO & Performance",
      desc: "Technical audits and Core Web Vitals work that move you up the page — measurably.",
      timeline: "2–4 weeks",
      price: "from $1,500",
      features: [
        "Full technical SEO + crawl audit",
        "Core Web Vitals and bundle optimization",
        "Structured data and rich-result markup",
        "Image, caching, and edge delivery tuning",
      ],
      chips: ["Lighthouse", "Search Console", "Cloudflare"],
    },
    {
      icon: "plug",
      name: "APIs & Integrations",
      desc: "Connect the tools you already run with reliable, documented APIs and webhooks.",
      timeline: "4–8 weeks",
      price: "from $4,000",
      features: [
        "REST and GraphQL API design",
        "Clear, versioned documentation",
        "Webhooks and real-time event flows",
        "Hardened against abuse and rate-limited",
      ],
      chips: ["Node.js", "Express", "REST", "GraphQL"],
    },
    {
      icon: "shield",
      name: "Care & Maintenance",
      desc: "Keep what we built secure, fast, and current — with a human who knows your codebase.",
      timeline: "Ongoing",
      price: "from $300/mo",
      features: [
        "Security patches and dependency updates",
        "Automated backups + uptime monitoring",
        "Priority bug fixes from your developer",
        "Plain-English monthly reports",
      ],
      chips: ["Monitoring", "Backups", "Patching"],
    },
  ];

  const process = [
    {
      n: "01",
      title: "Idea & Blueprint",
      tag: "Week 1",
      blurb: "We pin down the real problem before a line of code.",
      detail: "We start with your goals, your users, and your constraints — then turn the fuzzy idea into a concrete, scoped plan with fixed deliverables and a timeline you can hold us to.",
      points: [
        "Discovery session + goal mapping",
        "Scope, milestones, and fixed quote",
        "Architecture and tech decisions, explained",
        "No surprises — you approve before we build",
      ],
    },
    {
      n: "02",
      title: "Design & Development",
      tag: "Weeks 2–N",
      blurb: "Intuitive interfaces, robust engineering, weekly demos.",
      detail: "We design the interface and build the system in parallel, shipping working previews every week. You see real progress on a real URL — not status emails.",
      points: [
        "Interactive design you can click through",
        "Typed, tested, documented code you own",
        "Weekly demo builds on a live preview link",
        "Direct line to the developer — no account managers",
      ],
    },
    {
      n: "03",
      title: "Launch & Support",
      tag: "Launch + 30 days",
      blurb: "A clean launch, then we stick around.",
      detail: "We handle deployment, monitoring, and a careful go-live — then back it with 30 days of free fixes and an optional care plan so it keeps performing.",
      points: [
        "Zero-downtime deployment + monitoring",
        "Performance and SEO verified post-launch",
        "30 days of free bug fixes, guaranteed",
        "Optional ongoing care plan",
      ],
    },
  ];

  // Real, current portfolio — sourced from the shared site config.
  const SIZE = ["lg", "", "", "wide", "", ""];
  const work = (window.SITE ? window.SITE.projects : []).map(function (p, i) {
    return { img: p.image, tag: p.category, title: p.title, desc: p.description, liveUrl: p.liveUrl, size: SIZE[i] || "" };
  });

  const stats = [
    { value: 50, suffix: "+", label: "Websites delivered" },
    { value: 100, suffix: "%", label: "Client satisfaction" },
    { value: 2.8, prefix: "<", suffix: "s", label: "Average load time", decimals: 1 },
    { value: 95, suffix: "+", label: "Lighthouse score" },
  ];

  const why = [
    { icon: "tag", title: "Transparent pricing", desc: "A clear quote with a line-item breakdown. No hidden fees, no scope-creep invoices." },
    { icon: "chat", title: "Talk to your developer", desc: "Weekly updates and a direct line to the person writing the code — never a call center." },
    { icon: "sparkle", title: "Code you own", desc: "Clean, documented, maintainable code handed over in full. It's yours, forever." },
    { icon: "clock", title: "On-time delivery", desc: "Realistic timelines with buffer built in, and early word the moment anything shifts." },
    { icon: "hands", title: "Post-launch support", desc: "Thirty days of free bug fixes after launch, plus an optional care plan." },
    { icon: "rocket", title: "Modern, lasting stack", desc: "Current, widely-supported tech chosen to age well — not the framework of the month." },
  ];

  const testimonial = {
    quote: "James took a vague idea and turned it into a product our customers actually use every day. Fast, communicative, and the code was spotless when he handed it over.",
    name: "A&M Construction",
    role: "Owner, A&M Construction",
  };

  const company = window.SITE ? window.SITE.company : {};
  const footer = window.SITE ? window.SITE.footer : {};

  return { navLinks, tech, trust, services, process, work, stats, why, testimonial, company, footer };
})();
