'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function PortfolioDemo() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'design',
      image: '🎨',
      description: 'Complete brand identity for tech startup',
      tags: ['Branding', 'Logo', 'UI/UX']
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'development',
      image: '💻',
      description: 'Full-stack online shopping experience',
      tags: ['React', 'Node.js', 'Stripe']
    },
    {
      id: 3,
      title: 'Mobile App Design',
      category: 'design',
      image: '📱',
      description: 'Fitness tracking app with social features',
      tags: ['Mobile', 'UI/UX', 'Prototyping']
    },
    {
      id: 4,
      title: 'Marketing Website',
      category: 'development',
      image: '🚀',
      description: 'High-converting SaaS landing page',
      tags: ['Next.js', 'SEO', 'Performance']
    },
    {
      id: 5,
      title: 'Photo Series',
      category: 'photography',
      image: '📸',
      description: 'Urban architecture collection',
      tags: ['Photography', 'Editorial', 'Architecture']
    },
    {
      id: 6,
      title: 'Dashboard Design',
      category: 'design',
      image: '📊',
      description: 'Analytics platform for enterprises',
      tags: ['Data Viz', 'Dashboard', 'Enterprise']
    },
  ];

  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Web Development', level: 90 },
    { name: 'Brand Strategy', level: 85 },
    { name: 'Photography', level: 80 },
  ];

  const testimonials = [
    {
      quote: "Working with this creative professional transformed our brand. Exceptional attention to detail!",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5
    },
    {
      quote: "Delivered ahead of schedule and exceeded all expectations. Highly recommended!",
      author: "Michael Chen",
      role: "Founder, StartupXYZ",
      rating: 5
    },
    {
      quote: "A true professional with incredible talent. Our website conversion rate doubled!",
      author: "Emily Rodriguez",
      role: "Marketing Director",
      rating: 5
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Demo Banner */}
      <div className="fixed top-16 left-0 right-0 z-40 glass-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-sm text-blue-100">
            <span className="font-semibold text-white">Demo:</span> Creative Portfolio
          </div>
          <Link href="/demos" className="text-sm text-blue-300 hover:text-white transition">
            ← Back to Demos
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32">
        {/* Background */}
        <motion.div
          className="absolute top-32 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="section-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 glass-lg rounded-full flex items-center justify-center text-6xl">
              👨‍💻
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Alex Morgan
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-blue-100">
              Creative Designer & Developer
            </p>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
              Crafting beautiful digital experiences that drive results.
              Specializing in UI/UX design, web development, and brand identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#portfolio" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-container">
        <h2 className="text-5xl font-bold text-center mb-4 gradient-text">
          Featured Work
        </h2>
        <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
          A selection of recent projects showcasing my expertise
        </p>

        {/* Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'design', 'development', 'photography'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeFilter === filter
                  ? 'btn-primary'
                  : 'glass-sm text-blue-100 hover:glass-md'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="h-64 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <div className="text-8xl">{project.image}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-100 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 glass-sm rounded-full text-xs text-blue-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-container">
        <div className="glass-md rounded-3xl p-12">
          <h2 className="text-5xl font-bold text-center mb-12 gradient-text">
            Skills & Expertise
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-blue-200">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-emerald-400 to-teal-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container">
        <h2 className="text-5xl font-bold text-center mb-12 gradient-text">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-blue-100 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-blue-200 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-container">
        <div className="glass-lg rounded-3xl p-16 text-center hero-gradient">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Download Resume
            </button>
            <button className="btn-secondary">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
