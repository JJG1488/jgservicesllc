'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";

const projects = [
  {
    id: 1,
    title: "Brandforge AI",
    description: "A powerful AI-powered recommendation engine for instant branding and logo creation.",
    image: "/images/brandforgeai.png",
    tags: ["Next.js", "Stripe", "Talwind CSS"],
    liveUrl: "https://brandforgeai.pro",
    githubUrl: "#",
    
  },
  {
    id: 2,
    title: "Greencare Professionals",
    description: "Lawncare application that connects lawn care professionals with clients.",
    image: "/images/greencareprofessionals.png",
    tags: ["Next.js", "Vercel", "TypeScript"],
    liveUrl: "https://greencareprofessionals.com",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "This is a premium direct-to-consumer e-commerce application built with Next.js 15 and JavaScript (not TypeScript). It features Tailwind CSS v4, Framer Motion animations, and a complete e-commerce shopping experience including product catalog, shopping cart, checkout flow, and wishlist functionality. The brand is LUXE - a luxury retailer specializing in watches, jewelry, bags, and premium accessories.",
    image: "/images/nextjscomponent.png",
    tags: ["JavaScript", "Framer", "Tailwind CSS"],
    liveUrl: "https://nextjs-premium-components-template.vercel.app",
    githubUrl: "#",
    
  },
  {
    id: 4,
    title: "A and M Construction",
    description: "A modern, responsive website for a construction company.",
    image: "/images/a_and_m_construction.png",
    tags: ["Next.js", "Node.js", "Tailwind CSS"],
    liveUrl: "https://a-and-m-construction-tw21.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Cornerstone Plumbing and Electric",
    description: "A modern, responsive website for a plumbing and electric company.",
    image: "/images/cornerstone.png",
    tags: ["Next.js", "Node.js", "Tailwind"],
    liveUrl: "https://conerstone-plumbing.vercel.app",
    githubUrl: "#",
    
  },
  {
    id: 6,
    title: "A Family Venture Express",
    description: "Shipping and logistics company website built with Next.js and JavaScript.",
    image: "/images/A-FAMILY-VENTUREA-FAMILY-VENTURE.png",
    tags: ["Next.js", "JavaScript", "UI/UX"],
    liveUrl: "https://www.afamilyventureexpress.com/",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Projects</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Explore a selection of projects we've built for clients and as
              demonstrations of our capabilities.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScaleIn key={project.id} delay={index * 0.1}>
              <motion.div
                className="glass-card rounded-2xl overflow-hidden group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 glass-sm text-blue-200 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      className="flex-1 text-center btn-primary py-2 px-4 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Live
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex-1 text-center glass-sm border border-blue-400/50 text-blue-300 hover:bg-white/10 py-2 px-4 rounded-lg transition-all text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-16 text-center glass-lg rounded-2xl p-8 md:p-12 hero-gradient">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Have a Project in Mind?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with custom web
              development solutions.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block btn-primary"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
