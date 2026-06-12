import type { Project } from "@/types";

/**
 * Real, current portfolio. Order matters: the home bento reads `size`
 * in this sequence — ["lg", "", "", "wide", "", ""].
 */
export const projects: Project[] = [
  {
    id: "brandforge-ai",
    title: "BrandForge AI",
    category: "SaaS",
    description:
      "An AI-powered recommendation engine for instant branding and logo creation — logos and voice in under a minute.",
    image: "/images/brandforgeai.png",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    liveUrl: "https://brandforgeai.pro",
    featured: true,
    size: "lg",
  },
  {
    id: "greencare-professionals",
    title: "Greencare Professionals",
    category: "Marketplace",
    description:
      "A lawncare platform that connects lawn-care professionals with local clients.",
    image: null,
    tags: ["Next.js", "Vercel", "TypeScript"],
    liveUrl: "https://greencareprofessionals.com",
    size: "",
  },
  {
    id: "luxe-e-commerce",
    title: "LUXE — E-Commerce",
    category: "E-Commerce",
    description:
      "A premium direct-to-consumer store for watches, jewelry, and accessories: catalog, cart, checkout, and wishlist.",
    image: "/images/nextjscomponent.png",
    tags: ["JavaScript", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://nextjs-premium-components-template.vercel.app",
    size: "",
  },
  {
    id: "a-and-m-construction",
    title: "A&M Construction",
    category: "Local Business",
    description:
      "A modern, responsive marketing site for a construction company, built to generate leads.",
    image: "/images/a_and_m_construction.png",
    tags: ["Next.js", "Node.js", "Tailwind CSS"],
    liveUrl: "https://a-and-m-construction-tw21.vercel.app/",
    size: "wide",
  },
  {
    id: "cornerstone-plumbing-electric",
    title: "Cornerstone Plumbing & Electric",
    category: "Local Business",
    description:
      "A modern, responsive website for a plumbing and electrical services company.",
    image: "/images/cornerstone.png",
    tags: ["Next.js", "Node.js", "Tailwind"],
    liveUrl: "https://conerstone-plumbing.vercel.app",
    size: "",
  },
  {
    id: "a-family-venture-express",
    title: "A Family Venture Express",
    category: "Logistics",
    description:
      "Shipping and logistics company website with service pages and quote capture.",
    image: "/images/A_FAMILY_VENTURE.png",
    tags: ["Next.js", "JavaScript", "UI/UX"],
    liveUrl: "https://www.afamilyventureexpress.com/",
    size: "",
  },
];
