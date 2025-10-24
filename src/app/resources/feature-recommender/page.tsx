'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';

interface Feature {
  id: string;
  name: string;
  description: string;
  priority: 'essential' | 'recommended' | 'optional';
  estimatedCost: string;
  developmentTime: string;
  icon: string;
  benefits: string[];
}

export default function FeatureRecommender() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    businessType: '',
    primaryGoal: '',
    hasProducts: '',
    needsBooking: '',
    targetAudience: '',
    budget: '',
    timeline: '',
  });
  const [showResults, setShowResults] = useState(false);

  const allFeatures: Feature[] = [
    {
      id: 'responsive-design',
      name: 'Responsive Design',
      description: 'Your website adapts perfectly to all devices - phones, tablets, and desktops',
      priority: 'essential',
      estimatedCost: 'Included',
      developmentTime: 'Built-in',
      icon: '📱',
      benefits: [
        '60%+ of traffic comes from mobile devices',
        'Google prioritizes mobile-friendly sites',
        'Better user experience across all devices',
      ]
    },
    {
      id: 'contact-form',
      name: 'Contact Form',
      description: 'Simple form for visitors to reach out with questions or inquiries',
      priority: 'essential',
      estimatedCost: 'Included',
      developmentTime: '1-2 days',
      icon: '📧',
      benefits: [
        'Easy way for customers to reach you',
        'Captures lead information automatically',
        'Reduces spam with validation',
      ]
    },
    {
      id: 'seo-optimization',
      name: 'SEO Optimization',
      description: 'On-page SEO to help your site rank in Google search results',
      priority: 'essential',
      estimatedCost: 'Included',
      developmentTime: 'Ongoing',
      icon: '🔍',
      benefits: [
        'Get found by customers searching online',
        'Increase organic traffic',
        'Long-term growth without ads',
      ]
    },
    {
      id: 'cms',
      name: 'Content Management System',
      description: 'Easy-to-use interface to update your website content without coding',
      priority: 'recommended',
      estimatedCost: '$500-1500',
      developmentTime: '3-5 days',
      icon: '✏️',
      benefits: [
        'Update content anytime without developer help',
        'Add new pages and blog posts easily',
        'Control your own website',
      ]
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce System',
      description: 'Full online store with shopping cart, payment processing, and order management',
      priority: 'recommended',
      estimatedCost: '$2000-5000',
      developmentTime: '2-3 weeks',
      icon: '🛒',
      benefits: [
        'Sell products 24/7 automatically',
        'Accept credit cards securely',
        'Manage inventory and orders',
      ]
    },
    {
      id: 'booking-system',
      name: 'Booking & Scheduling',
      description: 'Allow customers to book appointments or reserve services online',
      priority: 'recommended',
      estimatedCost: '$1500-3000',
      developmentTime: '1-2 weeks',
      icon: '📅',
      benefits: [
        'Reduce phone calls and admin time',
        'Accept bookings 24/7',
        'Automated confirmations and reminders',
      ]
    },
    {
      id: 'blog',
      name: 'Blog Section',
      description: 'Regularly updated blog to share news, tips, and establish authority',
      priority: 'recommended',
      estimatedCost: '$300-800',
      developmentTime: '2-4 days',
      icon: '📝',
      benefits: [
        'Improves SEO with fresh content',
        'Establishes you as an expert',
        'Keeps visitors coming back',
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics Dashboard',
      description: 'Track visitor behavior, traffic sources, and conversion metrics',
      priority: 'recommended',
      estimatedCost: '$200-600',
      developmentTime: '1-2 days',
      icon: '📊',
      benefits: [
        'Understand how visitors use your site',
        'Make data-driven improvements',
        'Track ROI of marketing efforts',
      ]
    },
    {
      id: 'email-marketing',
      name: 'Email Marketing Integration',
      description: 'Collect emails and send newsletters to build your audience',
      priority: 'optional',
      estimatedCost: '$400-1000',
      developmentTime: '2-3 days',
      icon: '📬',
      benefits: [
        'Build a list of interested customers',
        'Send targeted marketing campaigns',
        'Stay top-of-mind with your audience',
      ]
    },
    {
      id: 'live-chat',
      name: 'Live Chat Support',
      description: 'Real-time chat widget to answer customer questions instantly',
      priority: 'optional',
      estimatedCost: '$300-800',
      developmentTime: '1-2 days',
      icon: '💬',
      benefits: [
        'Immediate customer support',
        'Increase conversions with real-time help',
        'Capture leads who have questions',
      ]
    },
    {
      id: 'customer-portal',
      name: 'Customer Portal',
      description: 'Secure area where customers can log in to view their account, orders, or data',
      priority: 'optional',
      estimatedCost: '$2000-4000',
      developmentTime: '1-2 weeks',
      icon: '🔐',
      benefits: [
        'Self-service reduces support requests',
        'Customers can track orders/bookings',
        'Professional experience',
      ]
    },
    {
      id: 'multi-language',
      name: 'Multi-Language Support',
      description: 'Serve content in multiple languages to reach global audiences',
      priority: 'optional',
      estimatedCost: '$1500-3000',
      developmentTime: '1-2 weeks',
      icon: '🌍',
      benefits: [
        'Reach international customers',
        'Expand into new markets',
        'Better local SEO in multiple regions',
      ]
    },
  ];

  const getRecommendedFeatures = (): Feature[] => {
    let recommended: Feature[] = [];

    // Always include essentials
    recommended = allFeatures.filter(f => f.priority === 'essential');

    // E-commerce
    if (answers.hasProducts === 'yes-ecommerce') {
      recommended.push(allFeatures.find(f => f.id === 'ecommerce')!);
      recommended.push(allFeatures.find(f => f.id === 'customer-portal')!);
      recommended.push(allFeatures.find(f => f.id === 'email-marketing')!);
    }

    // Booking/appointments
    if (answers.needsBooking === 'yes') {
      recommended.push(allFeatures.find(f => f.id === 'booking-system')!);
      recommended.push(allFeatures.find(f => f.id === 'email-marketing')!);
    }

    // Content marketing focus
    if (answers.primaryGoal === 'brand-awareness' || answers.primaryGoal === 'education') {
      recommended.push(allFeatures.find(f => f.id === 'blog')!);
      recommended.push(allFeatures.find(f => f.id === 'email-marketing')!);
      recommended.push(allFeatures.find(f => f.id === 'cms')!);
    }

    // Lead generation focus
    if (answers.primaryGoal === 'lead-generation') {
      recommended.push(allFeatures.find(f => f.id === 'live-chat')!);
      recommended.push(allFeatures.find(f => f.id === 'email-marketing')!);
      recommended.push(allFeatures.find(f => f.id === 'analytics')!);
    }

    // Service business
    if (answers.businessType === 'service') {
      recommended.push(allFeatures.find(f => f.id === 'booking-system')!);
      recommended.push(allFeatures.find(f => f.id === 'cms')!);
    }

    // Retail/restaurant
    if (answers.businessType === 'retail' || answers.businessType === 'restaurant') {
      recommended.push(allFeatures.find(f => f.id === 'ecommerce')!);
    }

    // B2B
    if (answers.targetAudience === 'b2b') {
      recommended.push(allFeatures.find(f => f.id === 'customer-portal')!);
      recommended.push(allFeatures.find(f => f.id === 'blog')!);
    }

    // Always add these as recommended if not already there
    const cmsDuplicate = recommended.find(f => f.id === 'cms');
    if (!cmsDuplicate) {
      recommended.push(allFeatures.find(f => f.id === 'cms')!);
    }
    const analyticsDuplicate = recommended.find(f => f.id === 'analytics');
    if (!analyticsDuplicate) {
      recommended.push(allFeatures.find(f => f.id === 'analytics')!);
    }

    // Remove duplicates
    return Array.from(new Set(recommended));
  };

  const handleNext = () => {
    if (step < 7) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const recommendedFeatures = getRecommendedFeatures();
  const optionalFeatures = allFeatures.filter(
    f => !recommendedFeatures.includes(f) && f.priority !== 'essential'
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 text-white py-20 mb-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Link href="/resources" className="inline-flex items-center gap-2 text-white hover:text-blue-100 mb-6">
              ← Back to Resources
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Feature Recommendation Tool
            </h1>
            <p className="text-xl max-w-3xl text-blue-50">
              Answer a few questions and get a customized list of recommended website features for your business.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Step {step} of 7</span>
                    <span>{Math.round((step / 7) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(step / 7) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Questions */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                      What type of business do you have?
                    </h2>
                    <div className="space-y-3">
                      {[
                        { value: 'service', label: 'Service Business', desc: 'Consulting, agency, professional services' },
                        { value: 'retail', label: 'Retail/E-commerce', desc: 'Selling physical products online' },
                        { value: 'restaurant', label: 'Restaurant/Food', desc: 'Restaurant, cafe, food delivery' },
                        { value: 'saas', label: 'SaaS/Software', desc: 'Software or web application' },
                        { value: 'other', label: 'Other', desc: 'Something else' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setAnswers({ ...answers, businessType: option.value });
                            setTimeout(handleNext, 300);
                          }}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                            answers.businessType === option.value
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-400 hover:bg-gray-50'
                          }`}
                        >
                          <p className="font-semibold text-gray-900">{option.label}</p>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                      What's your primary goal for the website?
                    </h2>
                    <div className="space-y-3">
                      {[
                        { value: 'sales', label: 'Generate Sales', desc: 'Sell products or services directly' },
                        { value: 'lead-generation', label: 'Generate Leads', desc: 'Collect contacts for follow-up' },
                        { value: 'brand-awareness', label: 'Build Brand Awareness', desc: 'Establish online presence' },
                        { value: 'education', label: 'Educate & Inform', desc: 'Share knowledge and build authority' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setAnswers({ ...answers, primaryGoal: option.value });
                            setTimeout(handleNext, 300);
                          }}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                            answers.primaryGoal === option.value
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-400 hover:bg-gray-50'
                          }`}
                        >
                          <p className="font-semibold text-gray-900">{option.label}</p>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                      Will you sell products online?
                    </h2>
                    <div className="space-y-3">
                      {[
                        { value: 'yes-ecommerce', label: 'Yes, I need a full online store', desc: 'Shopping cart, payments, inventory' },
                        { value: 'yes-simple', label: 'Yes, but just a few products', desc: 'Simple buy buttons or forms' },
                        { value: 'no', label: 'No, not selling products', desc: 'Information or lead generation only' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setAnswers({ ...answers, hasProducts: option.value });
                            setTimeout(handleNext, 300);
                          }}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                            answers.hasProducts === option.value
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-400 hover:bg-gray-50'
                          }`}
                        >
                          <p className="font-semibold text-gray-900">{option.label}</p>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                      Do you need appointment/booking functionality?
                    </h2>
                    <div className="space-y-3">
                      {[
                        { value: 'yes', label: 'Yes, essential for my business', desc: 'Customers book appointments online' },
                        { value: 'nice-to-have', label: 'Nice to have, but not critical', desc: 'Would be convenient' },
                        { value: 'no', label: 'No, not needed', desc: 'Not applicable to my business' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setAnswers({ ...answers, needsBooking: option.value });
                            setTimeout(handleNext, 300);
                          }}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                            answers.needsBooking === option.value
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-400 hover:bg-gray-50'
                          }`}
                        >
                          <p className="font-semibold text-gray-900">{option.label}</p>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                      Who is your primary target audience?
                    </h2>
                    <div className="space-y-3">
                      {[
                        { value: 'b2c', label: 'Consumers (B2C)', desc: 'Selling to individual customers' },
                        { value: 'b2b', label: 'Businesses (B2B)', desc: 'Selling to other companies' },
                        { value: 'both', label: 'Both', desc: 'Mix of consumers and businesses' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setAnswers({ ...answers, targetAudience: option.value });
                            setTimeout(handleNext, 300);
                          }}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                            answers.targetAudience === option.value
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-400 hover:bg-gray-50'
                          }`}
                        >
                          <p className="font-semibold text-gray-900">{option.label}</p>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 6 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                      What's your approximate budget?
                    </h2>
                    <div className="space-y-3">
                      {[
                        { value: 'under-5k', label: 'Under $5,000', desc: 'Essential features only' },
                        { value: '5k-10k', label: '$5,000 - $10,000', desc: 'Good feature set' },
                        { value: '10k-20k', label: '$10,000 - $20,000', desc: 'Comprehensive solution' },
                        { value: 'over-20k', label: 'Over $20,000', desc: 'Premium, feature-rich website' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setAnswers({ ...answers, budget: option.value });
                            setTimeout(handleNext, 300);
                          }}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                            answers.budget === option.value
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-400 hover:bg-gray-50'
                          }`}
                        >
                          <p className="font-semibold text-gray-900">{option.label}</p>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 7 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                      What's your ideal timeline?
                    </h2>
                    <div className="space-y-3">
                      {[
                        { value: 'asap', label: 'ASAP (4-6 weeks)', desc: 'Need to launch quickly' },
                        { value: 'normal', label: 'Normal (8-12 weeks)', desc: 'Standard timeline' },
                        { value: 'flexible', label: 'Flexible (3+ months)', desc: 'No rush, want it done right' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setAnswers({ ...answers, timeline: option.value });
                            setTimeout(handleNext, 300);
                          }}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                            answers.timeline === option.value
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-400 hover:bg-gray-50'
                          }`}
                        >
                          <p className="font-semibold text-gray-900">{option.label}</p>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation */}
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    className="mt-6 text-gray-600 hover:text-gray-900 flex items-center gap-2"
                  >
                    ← Back
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl p-8 text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h2 className="text-3xl font-bold mb-2">
                    Your Custom Feature Recommendations
                  </h2>
                  <p className="text-blue-50">
                    Based on your answers, here's what we recommend for your website
                  </p>
                </div>

                {/* Recommended Features */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Recommended Features
                  </h3>
                  <div className="space-y-4">
                    {recommendedFeatures.map((feature, index) => (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{feature.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-xl font-bold text-gray-900">
                                {feature.name}
                              </h4>
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                feature.priority === 'essential'
                                  ? 'bg-red-100 text-red-700'
                                  : 'bg-blue-100 text-blue-700'
                              }`}>
                                {feature.priority === 'essential' ? 'ESSENTIAL' : 'RECOMMENDED'}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-3">{feature.description}</p>
                            <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                              <div>
                                <span className="text-gray-600">Cost: </span>
                                <span className="font-semibold">{feature.estimatedCost}</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Time: </span>
                                <span className="font-semibold">{feature.developmentTime}</span>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-700 mb-1">Benefits:</p>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {feature.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-blue-500">✓</span>
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Optional Features */}
                {optionalFeatures.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      Consider Adding Later
                    </h3>
                    <p className="text-gray-600 mb-6">
                      These features aren't critical for launch but could enhance your website as you grow.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {optionalFeatures.map((feature, index) => (
                        <motion.div
                          key={feature.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + (index * 0.1) }}
                          className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="text-2xl">{feature.icon}</div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 mb-1">{feature.name}</h4>
                              <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                              <p className="text-xs text-gray-500">
                                {feature.estimatedCost} • {feature.developmentTime}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Build Your Perfect Website?
                  </h3>
                  <p className="text-blue-50 mb-8">
                    Let's discuss these features and create a custom proposal for your project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition"
                    >
                      Get Your Custom Quote
                    </Link>
                    <Link
                      href="/resources"
                      className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition"
                    >
                      Explore More Resources
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
