'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';
import GlowCard from '@/components/ui/GlowCard';
import Link from 'next/link';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Resources', icon: '📚' },
    { id: 'business', name: 'Starting a Business', icon: '🚀' },
    { id: 'website', name: 'Website Planning', icon: '💻' },
    { id: 'marketing', name: 'Marketing & Growth', icon: '📈' },
    { id: 'tools', name: 'Interactive Tools', icon: '🛠️' },
  ];

  const guides = [
    {
      id: 'complete-guide',
      title: 'The Complete Guide to Starting Your Online Business',
      description: 'A comprehensive 30+ page guide covering everything from business planning to online presence. Learn how to validate your idea, create a business plan, and establish your digital foundation.',
      category: 'business',
      pages: '32 pages',
      downloadTime: '5 min read',
      icon: '📘',
      topics: [
        'Validating your business idea',
        'Creating a business plan',
        'Legal requirements & structure',
        'Building your brand identity',
        'Online presence strategy',
        'Financial planning basics'
      ],
      color: 'rgba(59, 130, 246, 0.4)' // blue
    },
    {
      id: 'website-planning',
      title: 'Website Planning Workbook',
      description: 'An interactive workbook to help you plan your perfect website. Includes checklists, worksheets, and templates to organize your content, features, and goals.',
      category: 'website',
      pages: '24 pages',
      downloadTime: '15 min to complete',
      icon: '📋',
      topics: [
        'Defining your website goals',
        'Identifying your target audience',
        'Content planning templates',
        'Feature prioritization matrix',
        'Budget planning worksheet',
        'Timeline creation guide'
      ],
      color: 'rgba(168, 85, 247, 0.4)' // purple
    },
    {
      id: 'roi-guide',
      title: 'ROI of a Professional Website: A Data-Driven Guide',
      description: 'Discover the real return on investment of a professional website with industry statistics, case studies, and calculations showing how a website pays for itself.',
      category: 'business',
      pages: '18 pages',
      downloadTime: '10 min read',
      icon: '💰',
      topics: [
        'Industry ROI statistics',
        'Real client case studies',
        'Cost vs. value analysis',
        'Revenue projection models',
        'Customer acquisition metrics',
        'Long-term growth potential'
      ],
      color: 'rgba(34, 197, 94, 0.4)' // green
    },
    {
      id: 'marketing-basics',
      title: 'Digital Marketing Basics for Small Business Owners',
      description: 'Master the fundamentals of digital marketing without the jargon. Learn SEO, social media, email marketing, and content strategy in plain English.',
      category: 'marketing',
      pages: '26 pages',
      downloadTime: '12 min read',
      icon: '📱',
      topics: [
        'SEO fundamentals explained simply',
        'Social media strategy for beginners',
        'Email marketing best practices',
        'Content creation tips',
        'Analytics & measuring success',
        'Budget-friendly marketing tactics'
      ],
      color: 'rgba(236, 72, 153, 0.4)' // pink
    },
    {
      id: 'maintenance-checklist',
      title: 'Website Maintenance Checklist',
      description: 'Keep your website running smoothly with our comprehensive maintenance checklist. Includes daily, weekly, monthly, and annual tasks.',
      category: 'website',
      pages: '12 pages',
      downloadTime: '5 min read',
      icon: '✅',
      topics: [
        'Daily monitoring tasks',
        'Weekly content updates',
        'Monthly security checks',
        'Quarterly performance reviews',
        'Annual audits & upgrades',
        'Backup & recovery procedures'
      ],
      color: 'rgba(251, 146, 60, 0.4)' // orange
    },
    {
      id: 'feature-guide',
      title: 'Choosing the Right Features for Your Business Website',
      description: 'Not all websites need the same features. Learn which features are essential for your industry and business goals, and which ones you can add later.',
      category: 'website',
      pages: '20 pages',
      downloadTime: '8 min read',
      icon: '⚙️',
      topics: [
        'Essential vs. nice-to-have features',
        'Industry-specific recommendations',
        'E-commerce feature guide',
        'Booking & scheduling systems',
        'Customer portal features',
        'Scaling your website over time'
      ],
      color: 'rgba(14, 165, 233, 0.4)' // sky blue
    },
  ];

  const tools = [
    {
      id: 'roi-calculator',
      title: 'Website ROI Calculator',
      description: 'Calculate the potential return on investment for your website project. See how increased visibility and customer conversion can impact your revenue.',
      icon: '🧮',
      link: '/resources/roi-calculator',
      color: 'rgba(59, 130, 246, 0.4)'
    },
    {
      id: 'readiness-quiz',
      title: 'Business Readiness Assessment',
      description: 'Take our 10-question quiz to determine if your business is ready for a website and get personalized recommendations.',
      icon: '📊',
      link: '/resources/readiness-quiz',
      color: 'rgba(168, 85, 247, 0.4)'
    },
    {
      id: 'feature-recommender',
      title: 'Feature Recommendation Tool',
      description: 'Answer a few questions about your business and get a customized list of recommended website features with priority rankings.',
      icon: '🎯',
      link: '/resources/feature-recommender',
      color: 'rgba(34, 197, 94, 0.4)'
    },
    {
      id: 'timeline-estimator',
      title: 'Timeline & Budget Estimator',
      description: 'Select the features you want and get an estimated timeline and budget range for your website project.',
      icon: '📅',
      link: '/resources/timeline-estimator',
      color: 'rgba(236, 72, 153, 0.4)'
    },
  ];

  const filteredGuides = selectedCategory === 'all'
    ? guides
    : guides.filter(guide => guide.category === selectedCategory);

  const handleDownload = (guide: any) => {
    setSelectedGuide(guide);
    setShowDownloadModal(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 mb-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Free Resources & Tools
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-center max-w-3xl mx-auto text-blue-50">
              Everything you need to know about starting, planning, and growing your online business.
              Download our comprehensive guides and use our interactive tools — completely free.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Downloadable Guides */}
      {(selectedCategory === 'all' || selectedCategory !== 'tools') && (
        <section className="container mx-auto px-4 mb-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Downloadable Guides
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Comprehensive guides to help you understand every aspect of building and growing your online presence.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlowCard glowColor={guide.color}>
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
                      {/* Icon */}
                      <div className="text-6xl mb-4 text-center">
                        {guide.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        {guide.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="flex gap-4 mb-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          📄 {guide.pages}
                        </span>
                        <span className="flex items-center gap-1">
                          ⏱️ {guide.downloadTime}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 flex-grow">
                        {guide.description}
                      </p>

                      {/* Topics */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-700 mb-2">
                          What you'll learn:
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {guide.topics.slice(0, 3).map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-500 mt-0.5">✓</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                          {guide.topics.length > 3 && (
                            <li className="text-gray-500 italic">
                              + {guide.topics.length - 3} more topics
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Download Button */}
                      <motion.button
                        onClick={() => handleDownload(guide)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Download Free Guide
                      </motion.button>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* Interactive Tools */}
      {(selectedCategory === 'all' || selectedCategory === 'tools') && (
        <section className="container mx-auto px-4 mb-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Interactive Tools
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Use our free tools to calculate ROI, assess your readiness, and plan your website project.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <FadeIn key={tool.id} delay={index * 0.1}>
                <GlowCard glowColor={tool.color}>
                  <Link href={tool.link}>
                    <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow cursor-pointer">
                      <div className="text-6xl mb-4 text-center">
                        {tool.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 text-center">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 text-center mb-6">
                        {tool.description}
                      </p>
                      <div className="text-center">
                        <span className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                          Try it now
                          <span>→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </GlowCard>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Why We Offer Free Resources */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
              Why We Offer These Resources for Free
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScaleIn delay={0.1}>
              <div className="text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Education First
                </h3>
                <p className="text-gray-600 text-sm">
                  We believe informed clients make the best decisions. Understanding the process helps us work together better.
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Building Trust
                </h3>
                <p className="text-gray-600 text-sm">
                  By sharing our knowledge freely, we demonstrate our expertise and commitment to your success beyond just building websites.
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.3}>
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Better Outcomes
                </h3>
                <p className="text-gray-600 text-sm">
                  When you understand the value and process, you're ready to invest properly in your online presence and see real results.
                </p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl text-center">
          <ScaleIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              Now that you're armed with knowledge, let's talk about building your perfect website.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/process"
                className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
              >
                See Our Process
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Download Modal */}
      <AnimatePresence>
        {showDownloadModal && selectedGuide && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDownloadModal(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{selectedGuide.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Download: {selectedGuide.title}
                </h3>
                <p className="text-gray-600">
                  Get instant access to this comprehensive guide
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Name (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Business"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    Send me occasional tips and updates about web development and digital marketing (you can unsubscribe anytime)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold hover:shadow-lg transition-shadow"
                >
                  Download Guide
                </button>

                <button
                  type="button"
                  onClick={() => setShowDownloadModal(false)}
                  className="w-full text-gray-600 py-2 hover:text-gray-900"
                >
                  Cancel
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. Your information will never be shared.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
