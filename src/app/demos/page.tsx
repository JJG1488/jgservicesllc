'use client'

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import GlowCard from '@/components/ui/GlowCard';
import Link from 'next/link';
import Image from 'next/image';

export default function DemosPage() {
  const demos = [
    {
      id: 'restaurant',
      name: 'Bella Vista Restaurant',
      type: 'Restaurant & Food Service',
      description: 'Experience a full-featured restaurant website with online ordering, menu display, reservations, and more.',
      image: '/images/demo-restaurant.jpg',
      color: 'rgba(239, 68, 68, 0.4)', // red
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
      image: '/images/demo-ecommerce.jpg',
      color: 'rgba(59, 130, 246, 0.4)', // blue
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
      image: '/images/demo-service.jpg',
      color: 'rgba(168, 85, 247, 0.4)', // purple
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
      id: 'booking',
      name: 'Serenity Spa & Wellness',
      type: 'Booking & Scheduling',
      description: 'Test a complete booking system with calendar, staff selection, service packages, and automated reminders.',
      image: '/images/demo-booking.jpg',
      color: 'rgba(34, 197, 94, 0.4)', // green
      features: [
        'Real-time Availability',
        'Staff Selection',
        'Service Packages',
        'Customer Profiles',
        'Email Reminders',
        'Payment Processing',
      ],
      metrics: {
        performance: 94,
        accessibility: 97,
        seo: 91,
      },
      liveUrl: '/demos/booking',
      testimonial: '"Booking automation saved us 15 hours per week"',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white py-20 mb-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Interactive Website Demos
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-center max-w-3xl mx-auto text-blue-50 mb-8">
              Don't just imagine your website — experience it! Click through our fully functional demos
              to see exactly what we can build for your business.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg px-6 py-3 text-center">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm text-blue-100">Interactive</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg px-6 py-3 text-center">
                <p className="text-3xl font-bold">4</p>
                <p className="text-sm text-blue-100">Live Demos</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg px-6 py-3 text-center">
                <p className="text-3xl font-bold">Real</p>
                <p className="text-sm text-blue-100">Functionality</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <GlowCard glowColor={demo.color}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
                  {/* Preview Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">
                          {demo.id === 'restaurant' && '🍽️'}
                          {demo.id === 'ecommerce' && '🛍️'}
                          {demo.id === 'service' && '💼'}
                          {demo.id === 'booking' && '📅'}
                        </div>
                        <p className="text-gray-500 text-sm">Preview Coming Soon</p>
                      </div>
                    </div>
                    {/* Performance Badge */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {demo.metrics.performance} Performance Score
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        {demo.type}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-2">
                        {demo.name}
                      </h3>
                      <p className="text-gray-600">
                        {demo.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {demo.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 flex-shrink-0">✓</span>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="mb-4 bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                        Performance Metrics:
                      </h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-600">Performance</span>
                            <span className="font-bold text-green-600">{demo.metrics.performance}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${demo.metrics.performance}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-600">Accessibility</span>
                            <span className="font-bold text-green-600">{demo.metrics.accessibility}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${demo.metrics.accessibility}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-600">SEO</span>
                            <span className="font-bold text-green-600">{demo.metrics.seo}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${demo.metrics.seo}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                      <p className="text-sm italic text-gray-700">
                        {demo.testimonial}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Link
                        href={demo.liveUrl}
                        className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 rounded-lg font-bold hover:shadow-lg transition-shadow"
                      >
                        Explore Live Demo →
                      </Link>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Try Our Demos */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Why Experience Our Demos?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">
                  See Real Quality
                </h3>
                <p className="text-gray-600">
                  Don't imagine what your site could look like — click through and experience the actual user journey, design, and functionality.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">
                  Get Ideas
                </h3>
                <p className="text-gray-600">
                  Discover features you didn't know you needed. See how other businesses solve problems similar to yours.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">
                  Confident Decision
                </h3>
                <p className="text-gray-600">
                  Make an informed choice. You'll know exactly what you're getting before we start your project.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What Clients Say */}
      <section className="container mx-auto px-4 mb-20">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Happens After You See the Demos
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">💬</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  "I knew exactly what I wanted"
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  "After clicking through the restaurant demo, I could point to specific features and say 'I want this.' Made the planning process so much easier."
                </p>
                <p className="text-xs text-gray-500">— Sarah M., Restaurant Owner</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎨</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  "The quality spoke for itself"
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  "I tried other developers who showed me mockups. JG Services let me actually use a demo. The attention to detail sold me immediately."
                </p>
                <p className="text-xs text-gray-500">— Mark T., E-commerce Store</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚡</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  "Faster project kickoff"
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  "Because I explored the demos first, we skipped weeks of back-and-forth. I knew what was possible and what I wanted right away."
                </p>
                <p className="text-xs text-gray-500">— Lisa K., Consultant</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚀</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  "ROI was clear immediately"
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  "Seeing the booking system in action made me realize how much time and money it would save. The investment made perfect sense."
                </p>
                <p className="text-xs text-gray-500">— James R., Spa Owner</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-8 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Own?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Now that you've seen what's possible, let's create something amazing for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              href="/resources/roi-calculator"
              className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
            >
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
