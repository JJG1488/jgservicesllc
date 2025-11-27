'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";

export default function Services() {
  const services = [
    {
      title: "Custom Web Application Development",
      shortDesc: "Full-stack web applications tailored to your unique business needs.",
      image: "/images/custom_web_application_development.png",
      icon: "💻",
      features: [
        "Custom user interfaces built with React/Next.js",
        "Robust backend APIs with Node.js/Express",
        "Database design and optimization",
        "Third-party integrations",
        "User authentication systems",
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
      timeline: "6-12 weeks",
      startingPrice: "Contact for quote",
    },
    {
      title: "Responsive Website Design",
      shortDesc: "Beautiful, mobile-first websites that work flawlessly on all devices.",
      image: "/images/responsive_web_development.png",
      icon: "📱",
      features: [
        "Mobile-first design approach",
        "Cross-browser compatibility",
        "Optimized for all screen sizes",
        "Touch-friendly interfaces",
        "Fast page load times",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      timeline: "3-6 weeks",
      startingPrice: "$3,000+",
    },
    {
      title: "E-Commerce Solutions",
      shortDesc: "Complete online stores with secure payments and inventory management.",
      image: "/images/ecommerce_website.png",
      icon: "🛒",
      features: [
        "Product catalog with search",
        "Shopping cart and checkout",
        "Secure payment processing",
        "Inventory management",
        "Order tracking",
      ],
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      timeline: "8-14 weeks",
      startingPrice: "$8,000+",
    },
    {
      title: "SEO & Performance",
      shortDesc: "Technical SEO, Core Web Vitals optimization, and search visibility.",
      image: "/images/SEO_Performance_Optimization.png",
      icon: "🔍",
      features: [
        "Technical SEO audit",
        "Core Web Vitals optimization",
        "Structured data implementation",
        "Image optimization",
        "Code splitting and caching",
      ],
      technologies: ["Lighthouse", "Google Search Console", "CloudFlare"],
      timeline: "2-4 weeks",
      startingPrice: "$1,500+",
    },
    {
      title: "Website Maintenance",
      shortDesc: "Keep your website secure, updated, and performing at its best.",
      image: "/images/website_maintenance_and_support.png",
      icon: "🛠️",
      features: [
        "Security updates and patches",
        "Regular backups",
        "Uptime monitoring",
        "Bug fixes",
        "Monthly reports",
      ],
      technologies: ["Monitoring Tools", "Backup Systems"],
      timeline: "Ongoing",
      startingPrice: "$300/month",
    },
    {
      title: "API Development",
      shortDesc: "Connect your systems with custom APIs and integrations.",
      image: "/images/API_development.png",
      icon: "🔌",
      features: [
        "RESTful API design",
        "API documentation",
        "Third-party integrations",
        "Webhook setup",
        "Real-time features",
      ],
      technologies: ["Node.js", "Express", "REST", "GraphQL"],
      timeline: "4-8 weeks",
      startingPrice: "$4,000+",
    }
  ];

  const whyChooseUs = [
    {
      title: "Transparent Pricing",
      description: "No hidden fees. Clear project quotes with detailed breakdowns.",
      icon: "💰"
    },
    {
      title: "Regular Communication",
      description: "Weekly progress updates and direct access to your developer.",
      icon: "💬"
    },
    {
      title: "Quality Code",
      description: "Clean, documented, maintainable code. You own the code.",
      icon: "✨"
    },
    {
      title: "On-Time Delivery",
      description: "Realistic timelines with buffer time and early communication.",
      icon: "⏰"
    },
    {
      title: "Post-Launch Support",
      description: "30 days of free bug fixes after launch.",
      icon: "🤝"
    },
    {
      title: "Modern Tech Stack",
      description: "Current, widely-supported technologies that won't become obsolete.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="section-container text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Our Services
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From custom web applications to ongoing maintenance, we offer comprehensive
            web development services to help your business thrive online.
          </p>
        </FadeIn>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300 hero-gradient"
            >
              {/* Icon */}
              <div className="text-6xl mb-6">{service.icon}</div>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-3 text-white">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-blue-100 mb-6">
                {service.shortDesc}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-white text-sm">What's Included:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-blue-100">
                      <span className="text-blue-400 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-white text-xs">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline & Price */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="glass-sm rounded-lg px-3 py-2">
                  <div className="text-xs text-blue-200">Timeline</div>
                  <div className="font-bold text-white text-sm">{service.timeline}</div>
                </div>
                <div className="glass-sm rounded-lg px-3 py-2">
                  <div className="text-xs text-blue-200">Starting At</div>
                  <div className="font-bold text-white text-sm">{service.startingPrice}</div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="block text-center btn-primary w-full"
              >
                Get a Quote
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container">
        <div className="glass-md rounded-3xl p-12 hero-gradient">
          <ScaleIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
              Why Choose JGServicesLLC?
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
              We're not just developers—we're your partners in building something great.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-sm rounded-xl p-6"
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {reason.title}
                </h3>
                <p className="text-blue-100">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="glass-lg rounded-3xl p-16 text-center hero-gradient">
          <ScaleIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's discuss your project and provide a detailed quote. No obligation, no sales pressure.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/process"
                className="btn-secondary"
              >
                Learn About Our Process
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
