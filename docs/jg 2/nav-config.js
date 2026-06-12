/* JG Services LLC — shared site config (nav, footer, company). Loaded on every page. */
window.SITE = (function () {
  const nav = [
    { label: "Services", href: "services.html" },
    { label: "Process", href: "process.html" },
    { label: "Projects", href: "projects.html" },
    { label: "Resources", href: "resources.html" },
    { label: "FAQ", href: "faq.html" },
    { label: "Contact", href: "contact.html" },
  ];

  const company = {
    name: "JG Services LLC",
    owner: "James Gault",
    tagline: "Custom web development",
    email: "info@jgservicesllc.com",
    phone: "(586) 276-5646",
    phoneHref: "tel:+15862765646",
    linkedin: "https://www.linkedin.com/in/jamesgault1488",
    github: "https://github.com/JJG1488",
  };

  const footer = {
    explore: [
      { label: "Services", href: "services.html" },
      { label: "Process", href: "process.html" },
      { label: "Projects", href: "projects.html" },
      { label: "Why Us", href: "index.html#why" },
    ],
    resources: [
      { label: "Start a Project", href: "intake.html" },
      { label: "Schedule a Call", href: "schedule.html" },
      { label: "Resources", href: "resources.html" },
      { label: "Demos", href: "demos.html" },
      { label: "Blog", href: "blog.html" },
    ],
    legal: [
      { label: "Privacy Policy", href: "privacy.html" },
      { label: "Terms of Service", href: "terms.html" },
      { label: "Service Agreement", href: "contract.html" },
      { label: "FAQ", href: "faq.html" },
    ],
    connect: [
      { label: "Email", href: "mailto:info@jgservicesllc.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jamesgault1488", ext: true },
      { label: "GitHub", href: "https://github.com/JJG1488", ext: true },
    ],
  };

  // Real, current portfolio (from the live repo's projects data)
  const IMG = "../public/images/";
  const projects = [
    { title: "BrandForge AI", category: "SaaS", description: "An AI-powered recommendation engine for instant branding and logo creation — logos and voice in under a minute.", image: IMG + "brandforgeai.png", tags: ["Next.js", "Stripe", "Tailwind CSS"], liveUrl: "https://brandforgeai.pro", featured: true },
    { title: "Greencare Professionals", category: "Marketplace", description: "A lawncare platform that connects lawn-care professionals with local clients.", image: IMG + "greencareprofessionals.png", tags: ["Next.js", "Vercel", "TypeScript"], liveUrl: "https://greencareprofessionals.com" },
    { title: "LUXE — E-Commerce", category: "E-Commerce", description: "A premium direct-to-consumer store for watches, jewelry, and accessories: catalog, cart, checkout, and wishlist.", image: IMG + "nextjscomponent.png", tags: ["JavaScript", "Framer Motion", "Tailwind CSS"], liveUrl: "https://nextjs-premium-components-template.vercel.app" },
    { title: "A&M Construction", category: "Local Business", description: "A modern, responsive marketing site for a construction company, built to generate leads.", image: IMG + "a_and_m_construction.png", tags: ["Next.js", "Node.js", "Tailwind CSS"], liveUrl: "https://a-and-m-construction-tw21.vercel.app/" },
    { title: "Cornerstone Plumbing & Electric", category: "Local Business", description: "A modern, responsive website for a plumbing and electrical services company.", image: null, tags: ["Next.js", "Node.js", "Tailwind"], liveUrl: "https://conerstone-plumbing.vercel.app" },
    { title: "A Family Venture Express", category: "Logistics", description: "Shipping and logistics company website with service pages and quote capture.", image: IMG + "A_FAMILY_VENTURE.png", tags: ["Next.js", "JavaScript", "UI/UX"], liveUrl: "https://www.afamilyventureexpress.com/" },
  ];

  const tech = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe", "Framer Motion", "GraphQL", "Vercel"];

  return { nav, company, footer, projects, tech };
})();
