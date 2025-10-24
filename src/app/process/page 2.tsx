'use client'

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import Image from "next/image";

export default function Process() {
  const phases = [
    {
      number: "01",
      title: "Discovery & Planning",
      duration: "1-2 weeks",
      description: "We start by deeply understanding your business, goals, and target audience. This foundation is critical for project success.",
      steps: [
        {
          name: "Initial Consultation",
          details: "Free 30-60 minute call to discuss your vision, goals, and requirements. We ask detailed questions about your business model, target users, and success metrics."
        },
        {
          name: "Requirements Gathering",
          details: "We create a comprehensive document outlining all functional and technical requirements. This includes user stories, feature specifications, and technical constraints."
        },
        {
          name: "Competitive Analysis",
          details: "We analyze your competitors and industry leaders to identify best practices and opportunities for differentiation."
        },
        {
          name: "Technical Architecture Planning",
          details: "We design the system architecture, choose the technology stack, plan database schema, and identify third-party integrations needed."
        },
        {
          name: "Project Roadmap",
          details: "We create a detailed timeline with milestones, deliverables, and review points. This includes sprint planning and resource allocation."
        }
      ],
      deliverables: [
        "Project Requirements Document (PRD)",
        "Technical Specification",
        "Sitemap & Information Architecture",
        "Project Timeline & Milestones",
        "Initial Budget & Resource Plan"
      ],
      color: "blue"
    },
    {
      number: "02",
      title: "Design & Prototyping",
      duration: "2-3 weeks",
      description: "We transform requirements into visual designs and interactive prototypes, ensuring the user experience is intuitive and aligned with your brand.",
      steps: [
        {
          name: "Wireframing",
          details: "Low-fidelity wireframes map out the layout and structure of each page, focusing on information hierarchy and user flow without visual styling."
        },
        {
          name: "UI Design",
          details: "High-fidelity mockups with your brand colors, typography, imagery, and visual elements. We create a complete design system with reusable components."
        },
        {
          name: "Interactive Prototypes",
          details: "Clickable prototypes using Figma or similar tools allow you to experience the user journey before development begins."
        },
        {
          name: "Design Review Sessions",
          details: "We present designs and gather feedback in structured review sessions, iterating based on your input until you're 100% satisfied."
        },
        {
          name: "Responsive Design Planning",
          details: "We design for all screen sizes (mobile, tablet, desktop) ensuring a consistent experience across devices."
        }
      ],
      deliverables: [
        "Wireframes for all key pages",
        "High-fidelity UI mockups",
        "Interactive prototype",
        "Design system & style guide",
        "Responsive design specifications"
      ],
      color: "purple"
    },
    {
      number: "03",
      title: "Development",
      duration: "4-8 weeks",
      description: "This is where the magic happens. We write clean, maintainable code following industry best practices and modern development standards.",
      steps: [
        {
          name: "Environment Setup",
          details: "We configure development, staging, and production environments with proper CI/CD pipelines, version control (Git), and deployment automation."
        },
        {
          name: "Frontend Development",
          details: "Building responsive, interactive interfaces using modern frameworks like React/Next.js. We implement pixel-perfect designs with smooth animations and transitions."
        },
        {
          name: "Backend Development",
          details: "Creating robust APIs, database schemas, authentication systems, and business logic. We use Node.js, Express, and databases like PostgreSQL or MongoDB."
        },
        {
          name: "Integration & Testing",
          details: "Connecting frontend to backend, integrating third-party services (payments, analytics, email), and writing comprehensive tests (unit, integration, e2e)."
        },
        {
          name: "Code Review & Optimization",
          details: "Regular code reviews ensure quality and maintainability. We optimize for performance, accessibility, and SEO throughout development."
        },
        {
          name: "Weekly Progress Updates",
          details: "You receive weekly demos of completed features and can provide feedback. We work in 1-2 week sprints with clear deliverables."
        }
      ],
      deliverables: [
        "Fully functional web application",
        "Clean, documented codebase",
        "API documentation",
        "Test suite with coverage reports",
        "Performance optimization reports"
      ],
      color: "green"
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      duration: "1-2 weeks",
      description: "Rigorous testing ensures your application works flawlessly across all devices, browsers, and edge cases before launch.",
      steps: [
        {
          name: "Functional Testing",
          details: "We test every feature against requirements to ensure it works as expected. This includes user flows, forms, authentication, and all interactive elements."
        },
        {
          name: "Cross-Browser Testing",
          details: "Testing on Chrome, Firefox, Safari, Edge, and mobile browsers to ensure consistent behavior and appearance across platforms."
        },
        {
          name: "Responsive Testing",
          details: "Testing on various screen sizes and devices (phones, tablets, desktops) to verify the design adapts properly and remains usable."
        },
        {
          name: "Performance Testing",
          details: "Measuring page load times, Core Web Vitals, and optimizing for speed. We use tools like Lighthouse, GTmetrix, and WebPageTest."
        },
        {
          name: "Security Testing",
          details: "Checking for common vulnerabilities (XSS, CSRF, SQL injection), ensuring proper authentication/authorization, and securing sensitive data."
        },
        {
          name: "Accessibility Testing",
          details: "Ensuring WCAG compliance for users with disabilities. Testing with screen readers, keyboard navigation, and color contrast tools."
        },
        {
          name: "User Acceptance Testing (UAT)",
          details: "You and your team test the application in a staging environment, providing feedback on any issues or desired adjustments."
        }
      ],
      deliverables: [
        "Comprehensive test reports",
        "Bug tracking and resolution log",
        "Performance audit results",
        "Accessibility compliance report",
        "UAT sign-off document"
      ],
      color: "orange"
    },
    {
      number: "05",
      title: "Deployment & Launch",
      duration: "1 week",
      description: "We handle the entire launch process, from domain setup to production deployment, ensuring a smooth go-live.",
      steps: [
        {
          name: "Pre-Launch Checklist",
          details: "Final verification of all features, content, SEO metadata, analytics tracking, error monitoring, and backup systems."
        },
        {
          name: "Domain & Hosting Setup",
          details: "Configuring your domain, DNS settings, SSL certificates (HTTPS), and deploying to production hosting (Vercel, AWS, etc.)."
        },
        {
          name: "Database Migration",
          details: "Safely migrating data from staging to production, ensuring data integrity and setting up automated backups."
        },
        {
          name: "Monitoring Setup",
          details: "Implementing error tracking (Sentry), uptime monitoring, analytics (Google Analytics), and performance monitoring."
        },
        {
          name: "Soft Launch",
          details: "We often do a soft launch to a limited audience first, monitoring for any issues before the full public launch."
        },
        {
          name: "Go-Live Support",
          details: "We're on standby during launch day to address any immediate issues and ensure everything runs smoothly."
        }
      ],
      deliverables: [
        "Live production website",
        "Domain & hosting configuration",
        "SSL certificate setup",
        "Monitoring dashboards",
        "Launch announcement support"
      ],
      color: "red"
    },
    {
      number: "06",
      title: "Training & Handoff",
      duration: "1 week",
      description: "We ensure you and your team are fully equipped to manage and maintain your new website.",
      steps: [
        {
          name: "CMS Training",
          details: "If applicable, we provide comprehensive training on your content management system, showing you how to add/edit content, upload images, and manage users."
        },
        {
          name: "Admin Panel Walkthrough",
          details: "Detailed guide through any admin features, dashboard analytics, user management, and other backend functionality."
        },
        {
          name: "Documentation Handover",
          details: "We provide complete documentation including setup guides, API references, deployment procedures, and troubleshooting tips."
        },
        {
          name: "Video Tutorials",
          details: "Screen recordings demonstrating common tasks and workflows for future reference."
        },
        {
          name: "Q&A Session",
          details: "Dedicated time for you to ask questions and clarify anything about managing your site."
        }
      ],
      deliverables: [
        "Administrator training materials",
        "Video tutorial library",
        "Complete technical documentation",
        "Codebase access & repository",
        "Ongoing support plan details"
      ],
      color: "indigo"
    },
    {
      number: "07",
      title: "Ongoing Support & Maintenance",
      duration: "Ongoing",
      description: "Your website is never truly 'done'. We provide continuous support to keep it secure, updated, and performing optimally.",
      steps: [
        {
          name: "Regular Updates",
          details: "We keep dependencies, frameworks, and libraries up to date with the latest security patches and improvements."
        },
        {
          name: "Performance Monitoring",
          details: "Continuous monitoring of site speed, uptime, and user experience with monthly performance reports."
        },
        {
          name: "Security Monitoring",
          details: "Regular security audits, vulnerability scanning, and immediate response to any security threats."
        },
        {
          name: "Bug Fixes",
          details: "Quick resolution of any bugs or issues that arise post-launch, with priority support for critical issues."
        },
        {
          name: "Feature Enhancements",
          details: "As your business grows, we can add new features, optimize existing ones, and scale your application."
        },
        {
          name: "Analytics & Insights",
          details: "Monthly reports on site performance, user behavior, and recommendations for improvements."
        },
        {
          name: "Backup & Recovery",
          details: "Automated daily backups with disaster recovery plans to protect your data."
        }
      ],
      deliverables: [
        "Monthly maintenance reports",
        "Performance optimization updates",
        "Security patches & updates",
        "Priority support access",
        "Quarterly strategy consultations"
      ],
      color: "teal"
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      icon: "🔄",
      description: "We work in iterative sprints, allowing for flexibility and continuous improvement based on your feedback."
    },
    {
      title: "Mobile-First Design",
      icon: "📱",
      description: "With 60%+ of web traffic from mobile devices, we design for mobile first, then scale up to larger screens."
    },
    {
      title: "Performance Focused",
      icon: "⚡",
      description: "Fast-loading websites rank better in search and convert better. We optimize for Core Web Vitals from day one."
    },
    {
      title: "SEO Best Practices",
      icon: "🔍",
      description: "We build SEO into the foundation: semantic HTML, meta tags, structured data, fast loading, and accessibility."
    },
    {
      title: "Security First",
      icon: "🔒",
      description: "HTTPS, secure authentication, input validation, CSRF protection, and regular security audits are standard."
    },
    {
      title: "Accessibility (WCAG)",
      icon: "♿",
      description: "We build inclusive websites that work for everyone, including users with disabilities. It's the right thing to do."
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "DevOps",
      technologies: ["Vercel", "AWS", "Docker", "GitHub Actions", "CloudFlare"]
    },
    {
      category: "Tools",
      technologies: ["Git", "Figma", "Postman", "Jest", "Playwright"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white py-20 mb-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Our Development Process
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-center max-w-3xl mx-auto text-blue-50">
              Transparency and collaboration are at the heart of everything we do.
              Here's exactly how we transform your ideas into exceptional digital experiences.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process Phases */}
      <section className="container mx-auto px-4 mb-20">
        <div className="space-y-16">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12"
            >
              {/* Phase Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <span className={`text-5xl font-bold text-${phase.color}-500`}>
                    {phase.number}
                  </span>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {phase.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {phase.description}
                    </p>
                  </div>
                </div>
                <div className={`px-4 py-2 bg-${phase.color}-100 dark:bg-${phase.color}-900 text-${phase.color}-800 dark:text-${phase.color}-200 rounded-lg font-semibold whitespace-nowrap`}>
                  {phase.duration}
                </div>
              </div>

              {/* Steps */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  What We Do:
                </h3>
                <div className="space-y-4">
                  {phase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex gap-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-${phase.color}-500 text-white flex items-center justify-center font-bold`}>
                        {stepIndex + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {step.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  You Receive:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {phase.deliverables.map((deliverable, delIndex) => (
                    <li key={delIndex} className="flex items-start gap-2">
                      <span className={`text-${phase.color}-500 mt-1`}>✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Methodologies */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 mb-20">
        <div className="container mx-auto px-4">
          <ScaleIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Core Principles
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              These principles guide every decision we make throughout the development process.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologies.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 mb-20">
        <ScaleIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Technology Stack
          </h2>
        </ScaleIn>
        <FadeIn delay={0.2}>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            We use modern, proven technologies that are actively maintained and widely supported.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {stack.category}
              </h3>
              <ul className="space-y-2">
                {stack.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-gray-700 dark:text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl mx-4">
        <div className="container mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              Let's discuss your project and how our process can bring your vision to life.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
            >
              Schedule a Free Consultation
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
