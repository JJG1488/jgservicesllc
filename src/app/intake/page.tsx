'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import IntakeWizard from '@/components/IntakeWizard';

export default function IntakePage() {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full glass-sm mb-6">
            <span className="text-blue-300 text-sm font-semibold">Client Intake</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Build Your</span>
            <br />
            <span className="text-white">Perfect Website</span>
          </h1>

          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
            A guided, step-by-step process to help us understand your needs and create
            a detailed project proposal tailored to your business goals.
          </p>

          <button
            onClick={() => setShowWizard(true)}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Project Intake
          </button>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Answer Questions
              </h3>
              <p className="text-blue-200 text-sm">
                Walk through 17 guided steps covering every aspect of your website project
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Select Features
              </h3>
              <p className="text-blue-200 text-sm">
                Choose from our comprehensive menu of features, design options, and services
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Get Your Proposal
              </h3>
              <p className="text-blue-200 text-sm">
                We'll review your intake and create a detailed proposal with timeline and pricing
              </p>
            </div>
          </div>
        </motion.div>

        {/* What You'll Choose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            What You'll Choose
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '🏗️', title: 'Site Type & Base Package', desc: 'Landing page, brochure, business, e-commerce, or web app' },
              { icon: '🎨', title: 'Design & Branding', desc: 'Custom design, logo creation, brand identity, and dark mode' },
              { icon: '✍️', title: 'Content Creation', desc: 'Copywriting, imagery, video editing, and SEO optimization' },
              { icon: '📄', title: 'Pages & Sections', desc: 'About, services, portfolio, testimonials, blog, and more' },
              { icon: '📝', title: 'Forms & Lead Capture', desc: 'Contact forms, calculators, popups, and file uploads' },
              { icon: '📅', title: 'Booking & Scheduling', desc: 'Calendar integration, custom booking, and reminders' },
              { icon: '🛒', title: 'E-Commerce Features', desc: 'Product catalog, shopping cart, payments, and subscriptions' },
              { icon: '👤', title: 'User Systems', desc: 'Authentication, profiles, dashboards, and member areas' },
              { icon: '🔌', title: 'Integrations', desc: 'Analytics, CRM, email marketing, social media, and APIs' },
              { icon: '🔍', title: 'SEO & Performance', desc: 'Technical SEO, speed optimization, and Core Web Vitals' },
              { icon: '⚙️', title: 'Content Management', desc: 'CMS setup, admin dashboard, and training' },
              { icon: '🔒', title: 'Security & Legal', desc: 'SSL, GDPR compliance, privacy policy, and 2FA' },
              { icon: '🔄', title: 'Ongoing Services', desc: 'Hosting, maintenance, backups, and support' },
              { icon: '⚡', title: 'Timeline & Delivery', desc: 'Standard, expedited, or rush delivery options' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-blue-200">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Time Estimate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-8 text-center"
        >
          <div className="text-4xl mb-3">⏱️</div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Takes About 15-20 Minutes
          </h3>
          <p className="text-blue-200 mb-6">
            The more detail you provide, the more accurate your proposal will be.
            You can save progress and come back anytime.
          </p>

          <button
            onClick={() => setShowWizard(true)}
            className="btn-primary text-lg px-8 py-4"
          >
            Get Started Now
          </button>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl mb-3">💎</div>
            <h4 className="font-semibold text-white mb-2">Transparent Pricing</h4>
            <p className="text-sm text-blue-200">
              See exactly what each feature costs as you build your project
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-semibold text-white mb-2">Tailored Solutions</h4>
            <p className="text-sm text-blue-200">
              Only pay for features you need, nothing you don't
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="font-semibold text-white mb-2">Fast Turnaround</h4>
            <p className="text-sm text-blue-200">
              Get your detailed proposal within 24-48 hours
            </p>
          </div>
        </motion.div>
      </div>

      {/* Wizard Modal */}
      {showWizard && <IntakeWizard onClose={() => setShowWizard(false)} />}
    </div>
  );
}
