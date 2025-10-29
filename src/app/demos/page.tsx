'use client'

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';
import Link from 'next/link';

export default function DemosPage() {
  const demos = [
    {
      id: 'restaurant',
      name: 'Bella Vista Restaurant',
      type: 'Restaurant & Food Service',
      description: 'Experience a full-featured restaurant website with online ordering, menu display, reservations, and more.',
      icon: '🍽️',
      color: 'from-red-500 to-orange-600',
      features: [
        'Online Menu with Photos',
        'Table Reservations',
        'Online Ordering & Delivery',
        'Special Events Calendar',
        'Photo Gallery',
        'Customer Reviews',
      ],
      metrics: {
        performance: 95,
        accessibility: 98,
        seo: 92,
      },
      liveUrl: '/demos/restaurant',
      testimonial: '"This type of website increased our online orders by 300%"',
    },
    {
      id: 'ecommerce',
      name: 'TechGear Store',
      type: 'E-Commerce',
      description: 'Explore a fully functional online store with shopping cart, checkout, product filtering, and customer accounts.',
      icon: '🛍️',
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Product Catalog with Search',
        'Shopping Cart',
        'Secure Checkout',
        'Customer Accounts',
        'Order Tracking',
        'Inventory Management',
      ],
      metrics: {
        performance: 93,
        accessibility: 96,
        seo: 90,
      },
      liveUrl: '/demos/ecommerce',
      testimonial: '"Our conversion rate improved from 2% to 8% with this design"',
    },
    {
      id: 'service',
      name: 'Apex Consulting',
      type: 'Professional Services',
      description: 'See how a service-based business can showcase expertise, capture leads, and book consultations.',
      icon: '💼',
      color: 'from-purple-500 to-pink-600',
      features: [
        'Service Portfolio',
        'Lead Capture Forms',
        'Case Studies',
        'Blog & Resources',
        'Team Profiles',
        'Contact & Inquiry System',
      ],
      metrics: {
        performance: 97,
        accessibility: 99,
        seo: 94,
      },
      liveUrl: '/demos/service',
      testimonial: '"Lead generation increased 5x with this professional website"',
    },
    {
      id: 'portfolio',
      name: 'Creative Portfolio',
      type: 'Portfolio & Personal Brand',
      description: 'A stunning portfolio website for creatives, freelancers, and professionals to showcase their work.',
      icon: '🎨',
      color: 'from-emerald-500 to-teal-600',
      features: [
        'Project Showcase Gallery',
        'About & Bio Section',
        'Skills & Expertise',
        'Testimonials & Reviews',
        'Contact Form',
        'Downloadable Resume',
      ],
      metrics: {
        performance: 98,
        accessibility: 97,
        seo: 93,
      },
      liveUrl: '/demos/portfolio',
      testimonial: '"This portfolio helped me land 3 major clients in the first month"',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="section-container text-center">
        <ScaleIn>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Interactive Website Demos
          </h1>
        </ScaleIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Don't just imagine your website — experience it! Click through our fully functional demos
            to see exactly what we can build for your business.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { value: '100%', label: 'Interactive' },
              { value: '4', label: 'Live Demos' },
              { value: 'Real', label: 'Functionality' },
            ].map((stat, index) => (
              <div key={index} className="glass-md rounded-xl px-8 py-4 text-center min-w-32">
                <p className="text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-blue-100 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Demo Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Preview Header */}
              <div className={`relative h-48 bg-gradient-to-br ${demo.color} flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-8xl mb-2">{demo.icon}</div>
                </div>
                {/* Performance Badge */}
                <div className="absolute top-4 right-4 glass-sm px-4 py-2 rounded-full text-sm font-bold text-white">
                  {demo.metrics.performance} Score
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <span className="text-sm font-semibold text-blue-300 uppercase tracking-wide">
                    {demo.type}
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-2 mb-3">
                    {demo.name}
                  </h3>
                  <p className="text-blue-100">
                    {demo.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3 text-sm">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {demo.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-green-400 flex-shrink-0">✓</span>
                        <span className="text-blue-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-6 glass-sm rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-3 text-sm">
                    Performance Metrics:
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(demo.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-blue-200 capitalize">{key}</span>
                          <span className="font-bold text-green-400">{value}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mb-6 glass-sm border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-sm italic text-blue-100">
                    {demo.testimonial}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={demo.liveUrl}
                  className="block w-full btn-primary text-center"
                >
                  Explore Live Demo →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Try Our Demos */}
      <section className="section-container">
        <div className="glass-md rounded-3xl p-12">
          <ScaleIn>
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Why Experience Our Demos?
            </h2>
          </ScaleIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '🎯',
                title: 'See Real Quality',
                description: "Don't imagine what your site could look like — click through and experience the actual user journey, design, and functionality."
              },
              {
                icon: '💡',
                title: 'Get Ideas',
                description: "Discover features you didn't know you needed. See how other businesses solve problems similar to yours."
              },
              {
                icon: '✅',
                title: 'Confident Decision',
                description: "Make an informed choice. You'll know exactly what you're getting before we start your project."
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-2xl mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-blue-100">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-container">
        <ScaleIn>
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            What Happens After You See the Demos
          </h2>
        </ScaleIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: '💬',
              title: '"I knew exactly what I wanted"',
              quote: "After clicking through the restaurant demo, I could point to specific features and say 'I want this.' Made the planning process so much easier.",
              author: 'Sarah M., Restaurant Owner',
              color: 'border-green-500'
            },
            {
              icon: '🎨',
              title: '"The quality spoke for itself"',
              quote: "I tried other developers who showed me mockups. JG Services let me actually use a demo. The attention to detail sold me immediately.",
              author: 'Mark T., E-commerce Store',
              color: 'border-blue-500'
            },
            {
              icon: '⚡',
              title: '"Faster project kickoff"',
              quote: "Because I explored the demos first, we skipped weeks of back-and-forth. I knew what was possible and what I wanted right away.",
              author: 'Lisa K., Consultant',
              color: 'border-purple-500'
            },
            {
              icon: '🚀',
              title: '"ROI was clear immediately"',
              quote: "Seeing the features in action made me realize how much time and money it would save. The investment made perfect sense.",
              author: 'James R., Creative Professional',
              color: 'border-orange-500'
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`glass-card rounded-xl p-6 border-l-4 ${testimonial.color}`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{testimonial.icon}</div>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    {testimonial.title}
                  </h4>
                  <p className="text-blue-100 text-sm mb-3">
                    {testimonial.quote}
                  </p>
                  <p className="text-xs text-blue-200">— {testimonial.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="glass-lg rounded-3xl p-16 text-center hero-gradient">
          <ScaleIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Your Own?
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Now that you've seen what's possible, let's create something amazing for your business.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Start Your Project
              </Link>
              <Link
                href="/resources"
                className="btn-secondary"
              >
                Explore Resources
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
