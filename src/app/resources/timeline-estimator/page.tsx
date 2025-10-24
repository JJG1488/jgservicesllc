'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';

interface Feature {
  id: string;
  name: string;
  category: string;
  weeks: number;
  baseCost: number;
  icon: string;
  description: string;
}

export default function TimelineEstimator() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'responsive-design',
    'seo',
    'contact-form',
  ]);
  const [complexity, setComplexity] = useState<'simple' | 'moderate' | 'complex'>('moderate');
  const [designCustomization, setDesignCustomization] = useState<'template' | 'semi-custom' | 'fully-custom'>('semi-custom');

  const features: Feature[] = [
    {
      id: 'responsive-design',
      name: 'Responsive Design',
      category: 'Essential',
      weeks: 0,
      baseCost: 0,
      icon: '📱',
      description: 'Included in every project',
    },
    {
      id: 'seo',
      name: 'SEO Optimization',
      category: 'Essential',
      weeks: 0,
      baseCost: 0,
      icon: '🔍',
      description: 'Included in every project',
    },
    {
      id: 'contact-form',
      name: 'Contact Form',
      category: 'Essential',
      weeks: 0,
      baseCost: 0,
      icon: '📧',
      description: 'Included in every project',
    },
    {
      id: 'cms',
      name: 'Content Management',
      category: 'Content',
      weeks: 1,
      baseCost: 1200,
      icon: '✏️',
      description: 'Edit content without coding',
    },
    {
      id: 'blog',
      name: 'Blog System',
      category: 'Content',
      weeks: 0.5,
      baseCost: 600,
      icon: '📝',
      description: 'Publish articles and news',
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce',
      category: 'Business',
      weeks: 3,
      baseCost: 3500,
      icon: '🛒',
      description: 'Full online store',
    },
    {
      id: 'booking',
      name: 'Booking System',
      category: 'Business',
      weeks: 2,
      baseCost: 2200,
      icon: '📅',
      description: 'Appointment scheduling',
    },
    {
      id: 'customer-portal',
      name: 'Customer Portal',
      category: 'Business',
      weeks: 2.5,
      baseCost: 3000,
      icon: '🔐',
      description: 'User accounts and dashboard',
    },
    {
      id: 'analytics',
      name: 'Analytics Dashboard',
      category: 'Marketing',
      weeks: 0.5,
      baseCost: 400,
      icon: '📊',
      description: 'Track visitors and conversions',
    },
    {
      id: 'email-marketing',
      name: 'Email Marketing',
      category: 'Marketing',
      weeks: 0.75,
      baseCost: 700,
      icon: '📬',
      description: 'Newsletter integration',
    },
    {
      id: 'live-chat',
      name: 'Live Chat',
      category: 'Support',
      weeks: 0.5,
      baseCost: 500,
      icon: '💬',
      description: 'Real-time customer support',
    },
    {
      id: 'multi-language',
      name: 'Multi-Language',
      category: 'Advanced',
      weeks: 2,
      baseCost: 2400,
      icon: '🌍',
      description: 'Multiple language support',
    },
    {
      id: 'api-integration',
      name: 'API Integrations',
      category: 'Advanced',
      weeks: 1.5,
      baseCost: 1800,
      icon: '🔌',
      description: 'Connect external services',
    },
    {
      id: 'custom-animations',
      name: 'Custom Animations',
      category: 'Design',
      weeks: 1,
      baseCost: 1200,
      icon: '✨',
      description: 'Advanced interactions',
    },
  ];

  const categories = ['All', 'Essential', 'Content', 'Business', 'Marketing', 'Support', 'Advanced', 'Design'];

  const toggleFeature = (featureId: string) => {
    // Don't allow removing essential features
    const feature = features.find(f => f.id === featureId);
    if (feature?.category === 'Essential') return;

    if (selectedFeatures.includes(featureId)) {
      setSelectedFeatures(selectedFeatures.filter(id => id !== featureId));
    } else {
      setSelectedFeatures([...selectedFeatures, featureId]);
    }
  };

  // Calculate totals
  const baseWeeks = 4; // Base development time
  const selectedFeaturesList = features.filter(f => selectedFeatures.includes(f.id));
  const additionalWeeks = selectedFeaturesList.reduce((sum, f) => sum + f.weeks, 0);

  // Complexity multiplier
  const complexityMultiplier = {
    simple: 0.8,
    moderate: 1,
    complex: 1.3,
  }[complexity];

  // Design multiplier
  const designMultiplier = {
    'template': 0.7,
    'semi-custom': 1,
    'fully-custom': 1.4,
  }[designCustomization];

  const totalWeeks = Math.ceil((baseWeeks + additionalWeeks) * complexityMultiplier * designMultiplier);

  const baseCost = 3000; // Base website cost
  const featureCosts = selectedFeaturesList.reduce((sum, f) => sum + f.baseCost, 0);
  const totalCost = Math.round((baseCost + featureCosts) * complexityMultiplier * designMultiplier);

  const costRange = {
    min: Math.round(totalCost * 0.85),
    max: Math.round(totalCost * 1.15),
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white py-20 mb-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Link href="/resources" className="inline-flex items-center gap-2 text-white hover:text-blue-100 mb-6">
              ← Back to Resources
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Timeline & Budget Estimator
            </h1>
            <p className="text-xl max-w-3xl text-blue-50">
              Select the features you want and get an estimated timeline and budget for your website project.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Complexity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">Project Complexity</h3>
              <div className="grid grid-cols-3 gap-4">
                {['simple', 'moderate', 'complex'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setComplexity(level as any)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      complexity === level
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <p className="font-bold text-gray-900 capitalize">{level}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      {level === 'simple' && '1-5 pages'}
                      {level === 'moderate' && '6-15 pages'}
                      {level === 'complex' && '15+ pages'}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Design Customization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">Design Level</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'template', label: 'Template Based', desc: 'Pre-designed theme' },
                  { value: 'semi-custom', label: 'Semi-Custom', desc: 'Customized design' },
                  { value: 'fully-custom', label: 'Fully Custom', desc: 'Built from scratch' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setDesignCustomization(option.value as any)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      designCustomization === option.value
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <p className="font-bold text-gray-900 text-sm">{option.label}</p>
                    <p className="text-xs text-gray-600 mt-1">{option.desc}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Feature Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">Select Features</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Essential features are included in every project. Click to add optional features.
              </p>

              <div className="space-y-6">
                {categories.filter(cat => cat !== 'All').map((category) => {
                  const categoryFeatures = features.filter(f => f.category === category);
                  if (categoryFeatures.length === 0) return null;

                  return (
                    <div key={category}>
                      <h4 className="font-bold text-gray-700 mb-3">{category}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {categoryFeatures.map((feature) => {
                          const isSelected = selectedFeatures.includes(feature.id);
                          const isEssential = feature.category === 'Essential';

                          return (
                            <button
                              key={feature.id}
                              onClick={() => toggleFeature(feature.id)}
                              disabled={isEssential}
                              className={`p-4 rounded-xl border-2 transition-all text-left ${
                                isSelected
                                  ? isEssential
                                    ? 'border-blue-500 bg-blue-50 cursor-default'
                                    : 'border-purple-600 bg-purple-50'
                                  : 'border-gray-200 hover:border-purple-300'
                              } ${isEssential ? 'opacity-75' : ''}`}
                            >
                              <div className="flex items-start gap-3">
                                <div className="text-2xl">{feature.icon}</div>
                                <div className="flex-1">
                                  <div className="flex items-start justify-between mb-1">
                                    <p className="font-bold text-gray-900 text-sm">
                                      {feature.name}
                                    </p>
                                    {isEssential && (
                                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                        Included
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-600 mb-2">
                                    {feature.description}
                                  </p>
                                  {!isEssential && (
                                    <div className="flex gap-3 text-xs text-gray-500">
                                      <span>+{feature.weeks} {feature.weeks === 1 ? 'week' : 'weeks'}</span>
                                      <span>+${feature.baseCost.toLocaleString()}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Estimate Panel (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl shadow-xl p-6"
              >
                <h3 className="text-2xl font-bold mb-6">Your Estimate</h3>

                {/* Timeline */}
                <div className="bg-white bg-opacity-20 rounded-xl p-4 mb-4 backdrop-blur">
                  <p className="text-blue-100 text-sm mb-2">Estimated Timeline</p>
                  <p className="text-4xl font-bold">
                    {totalWeeks} {totalWeeks === 1 ? 'week' : 'weeks'}
                  </p>
                  <p className="text-blue-100 text-sm mt-2">
                    Approximately {Math.ceil(totalWeeks / 4)} {Math.ceil(totalWeeks / 4) === 1 ? 'month' : 'months'}
                  </p>
                </div>

                {/* Budget */}
                <div className="bg-white bg-opacity-20 rounded-xl p-4 mb-6 backdrop-blur">
                  <p className="text-blue-100 text-sm mb-2">Estimated Investment</p>
                  <p className="text-4xl font-bold">
                    ${costRange.min.toLocaleString()}
                  </p>
                  <p className="text-blue-100 text-sm mt-2">
                    to ${costRange.max.toLocaleString()}
                  </p>
                </div>

                {/* Breakdown */}
                <div className="border-t border-white border-opacity-30 pt-4 mb-6">
                  <h4 className="font-bold mb-3 text-lg">Includes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>{selectedFeatures.length} selected features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Testing & quality assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Deployment & launch support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Training & documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>30 days post-launch support</span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="block w-full bg-white text-purple-600 font-bold py-4 px-6 rounded-lg text-center hover:bg-blue-50 transition transform hover:scale-105"
                >
                  Get Detailed Quote
                </Link>

                <p className="text-xs text-blue-100 text-center mt-4">
                  * Estimates are approximate. Final pricing depends on specific requirements.
                </p>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 mt-6"
              >
                <h4 className="font-bold text-gray-900 mb-3">Why Choose Us?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Fixed pricing - no surprises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Weekly progress updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Unlimited revisions during development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>100% satisfaction guarantee</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Timeline Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Detailed Timeline Breakdown</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Discovery & Planning</h4>
                <p className="text-sm text-gray-600">Requirements gathering, sitemap, and wireframes</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-600">1-2 weeks</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Design</h4>
                <p className="text-sm text-gray-600">UI/UX design, mockups, and client review</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-purple-600">
                  {designCustomization === 'template' ? '1 week' : designCustomization === 'semi-custom' ? '2 weeks' : '3-4 weeks'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Development</h4>
                <p className="text-sm text-gray-600">Building features and functionality</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">
                  {Math.ceil((baseWeeks + additionalWeeks) * complexityMultiplier)} weeks
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Testing & Launch</h4>
                <p className="text-sm text-gray-600">QA testing, revisions, and deployment</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-orange-600">1-2 weeks</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-8 rounded-2xl text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Let's turn this estimate into a detailed proposal customized for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/resources"
              className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
            >
              Explore More Tools
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
