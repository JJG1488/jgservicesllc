'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', business: '', newsletter: false });

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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
  ];

  const tools = [
    {
      id: 'roi-calculator',
      title: 'Website ROI Calculator',
      description: 'Calculate the potential return on investment for your website project. See how increased visibility and customer conversion can impact your revenue.',
      icon: '🧮',
      link: '/resources/roi-calculator'
    },
    {
      id: 'readiness-quiz',
      title: 'Business Readiness Assessment',
      description: 'Take our 10-question quiz to determine if your business is ready for a website and get personalized recommendations.',
      icon: '📊',
      link: '/resources/readiness-quiz'
    },
    {
      id: 'feature-recommender',
      title: 'Feature Recommendation Tool',
      description: 'Answer a few questions about your business and get a customized list of recommended website features with priority rankings.',
      icon: '🎯',
      link: '/resources/feature-recommender'
    },
    {
      id: 'timeline-estimator',
      title: 'Timeline & Budget Estimator',
      description: 'Select the features you want and get an estimated timeline and budget range for your website project.',
      icon: '📅',
      link: '/resources/timeline-estimator'
    },
  ];

  const filteredGuides = selectedCategory === 'all'
    ? guides
    : guides.filter(guide => guide.category === selectedCategory);

  const handleDownload = (guide: any) => {
    setSelectedGuide(guide);
    setShowDownloadModal(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Save to Firebase Firestore (if configured)
      if (db) {
        await addDoc(collection(db, 'leads'), {
          ...formData,
          guide: selectedGuide?.id,
          guideTitle: selectedGuide?.title,
          timestamp: serverTimestamp(),
          source: 'resources-page',
          userAgent: navigator.userAgent,
        });
      }

      // Also save to localStorage as backup
      const leads = JSON.parse(localStorage.getItem('jg-leads') || '[]');
      leads.push({
        ...formData,
        guide: selectedGuide?.id,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('jg-leads', JSON.stringify(leads));

      // Generate and download the guide
      downloadGuide(selectedGuide);

      // Reset form and close modal
      setFormData({ name: '', email: '', business: '', newsletter: false });
      setShowDownloadModal(false);

      // Show success message
      alert(`🎉 Download started! Check your downloads folder for "${selectedGuide?.title}"`);
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('There was an issue saving your information. Your download will still proceed.');

      // Still download the guide even if Firebase fails
      downloadGuide(selectedGuide);
      setFormData({ name: '', email: '', business: '', newsletter: false });
      setShowDownloadModal(false);
    }
  };

  const downloadGuide = (guide: any) => {
    // Generate a simple PDF-style text document
    const content = generateGuideContent(guide);
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${guide.id}-guide.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generateGuideContent = (guide: any) => {
    return `
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║                      JG SERVICES LLC                              ║
║                   WEB DEVELOPMENT SERVICES                        ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝

${guide.title}
${'='.repeat(guide.title.length)}

${guide.description}

📄 ${guide.pages} | ⏱️ ${guide.downloadTime}

TABLE OF CONTENTS
─────────────────

${guide.topics.map((topic: string, i: number) => `${i + 1}. ${topic}`).join('\n')}

───────────────────────────────────────────────────────────────────

INTRODUCTION
────────────

Thank you for downloading "${guide.title}" from JG Services LLC!

This guide is designed to help you ${guide.description.toLowerCase()}

We've compiled industry best practices, real-world examples, and
actionable strategies that you can implement immediately.

${guide.topics.map((topic: string, i: number) => `

CHAPTER ${i + 1}: ${topic.toUpperCase()}
${'─'.repeat(60)}

This comprehensive chapter covers everything you need to know about
${topic.toLowerCase()}, including:

• Key concepts and definitions
• Step-by-step implementation guide
• Common mistakes to avoid
• Expert tips and best practices
• Real-world examples and case studies
• Actionable next steps

[Content for this chapter would go here in the full guide]

`).join('\n')}

───────────────────────────────────────────────────────────────────

CONCLUSION
──────────

Congratulations on taking the first step toward ${guide.topics[0].toLowerCase()}!

Remember: Success doesn't happen overnight. Take what you've learned
here and implement it step by step. Focus on progress, not perfection.

───────────────────────────────────────────────────────────────────

NEED HELP IMPLEMENTING THESE STRATEGIES?
─────────────────────────────────────────

JG Services LLC specializes in helping businesses like yours succeed
online. Whether you need:

✓ A professional website that converts visitors into customers
✓ Strategic consulting to maximize your online presence
✓ Technical implementation of the strategies in this guide
✓ Ongoing support and maintenance

We're here to help!

📧 Email: info@jgservicesllc.com
📱 Phone: (586) 276-5646
🌐 Website: https://jgservicesllc.com
📅 Schedule a free consultation: https://jgservicesllc.com/contact

───────────────────────────────────────────────────────────────────

MORE FREE RESOURCES
───────────────────

Visit https://jgservicesllc.com/resources for:

• Interactive ROI Calculator
• Business Readiness Quiz
• Feature Recommender Tool
• Timeline & Budget Estimator
• More downloadable guides
• Video tutorials and webinars

───────────────────────────────────────────────────────────────────

© ${new Date().getFullYear()} JG Services LLC. All rights reserved.

This guide is provided for educational purposes. You're free to use
these strategies in your business. Please don't redistribute this
guide without permission.

Questions? Feedback? We'd love to hear from you!
Email: contact@jgservicesllc.com

Thank you for trusting JG Services LLC with your business growth!

───────────────────────────────────────────────────────────────────
    `.trim();
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="section-container text-center">
        <ScaleIn>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Free Resources & Tools
          </h1>
        </ScaleIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Everything you need to know about starting, planning, and growing your online business.
            Download our comprehensive guides and use our interactive tools — completely free.
          </p>
        </FadeIn>
      </section>

      {/* Category Filter */}
      <section className="section-container">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'btn-primary'
                  : 'glass-sm text-blue-100 hover:glass-md'
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
        <section className="section-container">
          <ScaleIn>
            <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
              Downloadable Guides
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
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
                  className="glass-card rounded-xl p-6 h-full flex flex-col hover:scale-105 transition-transform duration-300"
                >
                  {/* Icon */}
                  <div className="text-6xl mb-4 text-center">
                    {guide.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {guide.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex gap-4 mb-4 text-sm text-blue-200">
                    <span className="flex items-center gap-1">
                      📄 {guide.pages}
                    </span>
                    <span className="flex items-center gap-1">
                      ⏱️ {guide.downloadTime}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-blue-100 mb-4 flex-grow">
                    {guide.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-white mb-2">
                      What you'll learn:
                    </p>
                    <ul className="text-sm text-blue-100 space-y-1">
                      {guide.topics.slice(0, 3).map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-0.5">✓</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                      {guide.topics.length > 3 && (
                        <li className="text-blue-200 italic">
                          + {guide.topics.length - 3} more topics
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Download Button */}
                  <motion.button
                    onClick={() => handleDownload(guide)}
                    className="w-full btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Download Free Guide
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* Interactive Tools */}
      {(selectedCategory === 'all' || selectedCategory === 'tools') && (
        <section className="section-container">
          <ScaleIn>
            <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
              Interactive Tools
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
              Use our free tools to calculate ROI, assess your readiness, and plan your website project.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <FadeIn key={tool.id} delay={index * 0.1}>
                <Link href={tool.link}>
                  <div className="glass-card rounded-xl p-8 h-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="text-6xl mb-4 text-center">
                      {tool.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white text-center">
                      {tool.title}
                    </h3>
                    <p className="text-blue-100 text-center mb-6">
                      {tool.description}
                    </p>
                    <div className="text-center">
                      <span className="inline-flex items-center gap-2 text-blue-300 font-semibold">
                        Try it now
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Why We Offer Free Resources */}
      <section className="section-container">
        <div className="glass-md rounded-3xl p-12">
          <ScaleIn>
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Why We Offer These Resources for Free
            </h2>
          </ScaleIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScaleIn delay={0.1}>
              <div className="text-center">
                <div className="text-5xl mb-3">🎓</div>
                <h3 className="font-bold text-xl mb-2 text-white">
                  Education First
                </h3>
                <p className="text-blue-100">
                  We believe informed clients make the best decisions. Understanding the process helps us work together better.
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <div className="text-center">
                <div className="text-5xl mb-3">🤝</div>
                <h3 className="font-bold text-xl mb-2 text-white">
                  Building Trust
                </h3>
                <p className="text-blue-100">
                  By sharing our knowledge freely, we demonstrate our expertise and commitment to your success beyond just building websites.
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.3}>
              <div className="text-center">
                <div className="text-5xl mb-3">💡</div>
                <h3 className="font-bold text-xl mb-2 text-white">
                  Better Outcomes
                </h3>
                <p className="text-blue-100">
                  When you understand the value and process, you're ready to invest properly in your online presence and see real results.
                </p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="glass-lg rounded-3xl p-16 text-center hero-gradient">
          <ScaleIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Now that you're armed with knowledge, let's talk about building your perfect website.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/process"
                className="btn-secondary"
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDownloadModal(false)}
          >
            <motion.div
              className="glass-lg rounded-2xl p-8 max-w-md w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{selectedGuide.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Download: {selectedGuide.title}
                </h3>
                <p className="text-blue-100">
                  Get instant access to this comprehensive guide
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-white placeholder-blue-200/50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-white placeholder-blue-200/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Business Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-white placeholder-blue-200/50"
                    placeholder="Your Business"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                    className="mt-1"
                  />
                  <label htmlFor="newsletter" className="text-sm text-blue-100">
                    Send me occasional tips and updates about web development and digital marketing (you can unsubscribe anytime)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Download Guide
                </button>

                <button
                  type="button"
                  onClick={() => setShowDownloadModal(false)}
                  className="w-full text-blue-200 py-2 hover:text-white transition"
                >
                  Cancel
                </button>
              </form>

              <p className="text-xs text-blue-200 text-center mt-4">
                We respect your privacy. Your information will never be shared.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
