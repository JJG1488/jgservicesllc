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
      image: "/images/portfolio_custom_development.png",
      icon: "💻",
      features: [
        "Custom user interfaces built with React/Next.js",
        "Robust backend APIs with Node.js/Express",
        "Database design and optimization (PostgreSQL/MongoDB)",
        "Third-party integrations (payments, email, analytics)",
        "User authentication and authorization systems",
        "Admin dashboards and content management"
      ],
      process: [
        "Requirements analysis and technical planning",
        "Database schema and API design",
        "Iterative development with weekly demos",
        "Code reviews and quality assurance",
        "Performance optimization and security hardening"
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
      timeline: "6-12 weeks",
      startingPrice: "Contact for quote",
      idealFor: "Businesses needing custom functionality, SaaS platforms, internal tools, and complex user workflows"
    },
    {
      title: "Responsive Website Design & Development",
      shortDesc: "Beautiful, mobile-first websites that work flawlessly on all devices.",
      image: "/images/portfolio_responsive_design.png",
      icon: "📱",
      features: [
        "Mobile-first design approach (60%+ of traffic is mobile)",
        "Cross-browser compatibility (Chrome, Safari, Firefox, Edge)",
        "Optimized for all screen sizes (phones, tablets, desktops)",
        "Touch-friendly interfaces and gestures",
        "Fast page load times (<3 seconds)",
        "Progressive Web App (PWA) capabilities"
      ],
      process: [
        "Mobile wireframes and prototypes first",
        "Design system creation for consistency",
        "Component-based development for reusability",
        "Testing on real devices and browsers",
        "Performance optimization for mobile networks"
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Images"],
      timeline: "3-6 weeks",
      startingPrice: "$3,000+",
      idealFor: "Small businesses, portfolios, marketing sites, and content-heavy websites"
    },
    {
      title: "E-Commerce Solutions",
      shortDesc: "Complete online stores with secure payments and inventory management.",
      image: "/images/portfolio_custom_development.png",
      icon: "🛒",
      features: [
        "Product catalog with categories and search",
        "Shopping cart and checkout flow",
        "Secure payment processing (Stripe, PayPal)",
        "Inventory management system",
        "Order tracking and management",
        "Customer accounts and order history",
        "Email notifications (order confirmation, shipping)",
        "Admin dashboard for managing products and orders"
      ],
      process: [
        "E-commerce strategy and UX planning",
        "Product catalog structure and taxonomy",
        "Payment gateway integration and testing",
        "Shipping and tax calculation setup",
        "Security audit and PCI compliance review"
      ],
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Email APIs"],
      timeline: "8-14 weeks",
      startingPrice: "$8,000+",
      idealFor: "Online retailers, B2C businesses, subscription services, and digital product sellers"
    },
    {
      title: "SEO & Performance Optimization",
      shortDesc: "Technical SEO, Core Web Vitals optimization, and search engine visibility.",
      image: "/images/portfolio_SEO_Optimization.png",
      icon: "🔍",
      features: [
        "Technical SEO audit and implementation",
        "Core Web Vitals optimization (LCP, FID, CLS)",
        "Structured data and rich snippets (Schema.org)",
        "XML sitemaps and robots.txt configuration",
        "Meta tags, Open Graph, and Twitter Cards",
        "Image optimization and lazy loading",
        "Code splitting and lazy loading",
        "CDN setup and caching strategies",
        "Mobile-friendliness and responsive images",
        "Accessibility (WCAG) compliance"
      ],
      process: [
        "Initial SEO and performance audit",
        "Identify and prioritize optimization opportunities",
        "Implement technical improvements",
        "Monitor and measure results",
        "Ongoing optimization and reporting"
      ],
      technologies: ["Lighthouse", "Google Search Console", "Schema.org", "CloudFlare"],
      timeline: "2-4 weeks (initial), Ongoing",
      startingPrice: "$1,500+",
      idealFor: "Existing websites needing better rankings, slow-loading sites, and businesses focused on organic traffic"
    },
    {
      title: "Website Maintenance & Support",
      shortDesc: "Keep your website secure, updated, and performing at its best.",
      image: "/images/portfolio_custom_development.png",
      icon: "🛠️",
      features: [
        "Security updates and vulnerability patches",
        "Dependency and framework updates",
        "Regular backups and disaster recovery",
        "Uptime and performance monitoring",
        "Bug fixes and troubleshooting",
        "Content updates and minor changes",
        "Monthly performance and security reports",
        "Priority support for urgent issues"
      ],
      process: [
        "Monthly security and dependency audits",
        "Performance monitoring and optimization",
        "Regular backups to secure cloud storage",
        "Proactive issue detection and resolution",
        "Quarterly strategy and improvement consultations"
      ],
      technologies: ["Monitoring Tools", "Backup Systems", "Security Scanners"],
      timeline: "Ongoing monthly service",
      startingPrice: "$300/month",
      idealFor: "Businesses that need reliable website upkeep without hiring in-house developers"
    },
    {
      title: "API Development & Integration",
      shortDesc: "Connect your systems with custom APIs and third-party integrations.",
      image: "/images/portfolio_custom_development.png",
      icon: "🔌",
      features: [
        "RESTful API design and development",
        "API documentation with interactive examples",
        "Third-party service integrations (CRM, email, payments)",
        "Webhook setup and event handling",
        "API authentication and rate limiting",
        "Data transformation and ETL pipelines",
        "Real-time features with WebSockets",
        "API versioning and backward compatibility"
      ],
      process: [
        "API requirements and endpoint planning",
        "Data modeling and schema design",
        "API development with comprehensive testing",
        "Documentation and developer guides",
        "Integration testing and error handling"
      ],
      technologies: ["Node.js", "Express", "REST", "GraphQL", "WebSockets"],
      timeline: "4-8 weeks",
      startingPrice: "$4,000+",
      idealFor: "Businesses needing system integrations, mobile app backends, and data synchronization"
    }
  ];

  const whyChooseUs = [
    {
      title: "Transparent Pricing",
      description: "No hidden fees. Clear project quotes with detailed breakdowns of time and deliverables.",
      icon: "💰"
    },
    {
      title: "Regular Communication",
      description: "Weekly progress updates, demos, and direct access to your developer via Slack or email.",
      icon: "💬"
    },
    {
      title: "Quality Code",
      description: "Clean, documented, maintainable code following industry best practices. You own the code.",
      icon: "✨"
    },
    {
      title: "On-Time Delivery",
      description: "Realistic timelines with buffer time. We communicate early if adjustments are needed.",
      icon: "⏰"
    },
    {
      title: "Post-Launch Support",
      description: "30 days of free bug fixes after launch, plus affordable maintenance plans.",
      icon: "🤝"
    },
    {
      title: "Modern Tech Stack",
      description: "We use current, widely-supported technologies that won't become obsolete next year.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white py-20 mb-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Our Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-center max-w-3xl mx-auto text-blue-50">
              From custom web applications to ongoing maintenance, we offer comprehensive
              web development services to help your business thrive online.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-20">
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative h-80 lg:h-96">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                  quality={85}
                />
                <div className="absolute top-4 left-4 text-6xl bg-white dark:bg-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  {service.shortDesc}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">What's Included:</h3>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-blue-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="font-bold text-sm text-gray-600 dark:text-gray-400 mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline & Price */}
                <div className="flex gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 rounded-lg">
                    <div className="text-xs text-gray-600 dark:text-gray-400">Timeline</div>
                    <div className="font-bold text-gray-900 dark:text-white">{service.timeline}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 rounded-lg">
                    <div className="text-xs text-gray-600 dark:text-gray-400">Starting At</div>
                    <div className="font-bold text-gray-900 dark:text-white">{service.startingPrice}</div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 mb-16">
        <div className="container mx-auto px-4">
          <ScaleIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Choose JGServicesLLC?
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
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
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl text-center">
          <ScaleIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              Let's discuss your project and provide a detailed quote. No obligation, no sales pressure.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/process"
                className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
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
