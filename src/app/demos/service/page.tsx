'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function ServiceBusinessDemo() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    {
      id: 1,
      icon: '🎯',
      title: 'Strategic Consulting',
      shortDesc: 'Data-driven strategies to accelerate your growth',
      longDesc: 'We help businesses identify opportunities, overcome challenges, and create actionable roadmaps for sustainable growth.',
      features: ['Market Analysis', 'Competitive Research', 'Growth Strategy', 'Performance Metrics'],
      deliverables: ['Strategic Roadmap', 'Market Analysis Report', 'Implementation Plan', '90-Day Action Items'],
      timeline: '4-6 weeks',
      investment: 'Starting at $5,000'
    },
    {
      id: 2,
      icon: '💼',
      title: 'Business Development',
      shortDesc: 'Scale your business with proven frameworks',
      longDesc: 'From process optimization to team building, we provide the expertise you need to scale efficiently and profitably.',
      features: ['Process Optimization', 'Team Structure', 'Systems & Automation', 'Scalability Planning'],
      deliverables: ['Operations Manual', 'Org Chart & Roles', 'Automation Roadmap', 'Scaling Strategy'],
      timeline: '6-8 weeks',
      investment: 'Starting at $7,500'
    },
    {
      id: 3,
      icon: '🚀',
      title: 'Digital Transformation',
      shortDesc: 'Modernize your operations for the digital age',
      longDesc: 'Transform legacy processes into efficient digital workflows that save time, reduce costs, and improve customer experience.',
      features: ['Technology Assessment', 'Digital Strategy', 'Tool Selection', 'Change Management'],
      deliverables: ['Tech Stack Recommendations', 'Implementation Timeline', 'Training Materials', 'Support Plan'],
      timeline: '8-12 weeks',
      investment: 'Starting at $10,000'
    },
    {
      id: 4,
      icon: '📊',
      title: 'Data & Analytics',
      shortDesc: 'Turn your data into actionable insights',
      longDesc: 'We help you collect, analyze, and visualize your business data to make informed decisions and track what matters.',
      features: ['KPI Definition', 'Dashboard Setup', 'Reporting Systems', 'Predictive Analytics'],
      deliverables: ['Custom Dashboards', 'Reporting Framework', 'Analytics Training', 'Monthly Reports'],
      timeline: '4-6 weeks',
      investment: 'Starting at $6,000'
    },
    {
      id: 5,
      icon: '👥',
      title: 'Leadership Coaching',
      shortDesc: 'Develop leaders who drive results',
      longDesc: 'One-on-one and group coaching to develop executive presence, strategic thinking, and high-performance leadership skills.',
      features: ['1:1 Coaching', 'Leadership Assessment', 'Goal Setting', 'Accountability'],
      deliverables: ['Personal Development Plan', 'Weekly Sessions', 'Progress Reports', 'Resource Library'],
      timeline: '3-6 months',
      investment: 'Starting at $3,000/month'
    },
    {
      id: 6,
      icon: '🎓',
      title: 'Workshop & Training',
      shortDesc: 'Upskill your team with custom workshops',
      longDesc: 'Interactive workshops and training programs tailored to your team\'s needs and your business goals.',
      features: ['Custom Curriculum', 'Interactive Sessions', 'Practical Exercises', 'Certification'],
      deliverables: ['Training Materials', 'Workshop Sessions', 'Completion Certificates', 'Follow-up Support'],
      timeline: '2-4 weeks',
      investment: 'Starting at $2,500'
    }
  ];

  const caseStudies = [
    {
      id: 1,
      client: 'TechStart Inc.',
      industry: 'SaaS',
      challenge: 'Scaling from $1M to $10M ARR without sacrificing culture',
      solution: 'Implemented scalable processes, hired key leadership, and established clear metrics',
      results: [
        '312% revenue growth in 18 months',
        'Team scaled from 12 to 45 employees',
        '98% employee satisfaction maintained',
        'Reduced operational costs by 23%'
      ],
      testimonial: '"The strategic roadmap completely transformed how we operate. We finally have clarity and systems that scale."',
      name: 'Sarah Chen',
      title: 'CEO, TechStart Inc.'
    },
    {
      id: 2,
      client: 'Heritage Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Outdated processes limiting growth and efficiency',
      solution: 'Digital transformation initiative with new tools, training, and change management',
      results: [
        '40% reduction in production time',
        '$250K annual cost savings',
        '85% faster order processing',
        'Customer satisfaction up 67%'
      ],
      testimonial: '"We were stuck in the past. This transformation brought us into the modern age while honoring our values."',
      name: 'Michael Roberts',
      title: 'COO, Heritage Manufacturing'
    },
    {
      id: 3,
      client: 'GrowthPath Ventures',
      industry: 'Investment',
      challenge: 'Needed data insights to make faster, better investment decisions',
      solution: 'Built custom analytics dashboard with real-time market data and predictive models',
      results: [
        '3x faster due diligence process',
        '24% improvement in ROI',
        'Real-time portfolio monitoring',
        '90% reduction in reporting time'
      ],
      testimonial: '"The analytics platform gives us an unfair advantage. We see opportunities others miss."',
      name: 'David Park',
      title: 'Managing Partner, GrowthPath Ventures'
    }
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'Managing Partner',
      bio: '15+ years transforming businesses. Former McKinsey consultant.',
      expertise: ['Strategy', 'M&A', 'Scaling'],
      image: '👨‍💼'
    },
    {
      name: 'Maria Garcia',
      role: 'Operations Director',
      bio: 'Process optimization expert. Led digital transformation at Fortune 500.',
      expertise: ['Operations', 'Technology', 'Change Management'],
      image: '👩‍💼'
    },
    {
      name: 'James Wilson',
      role: 'Data Analytics Lead',
      bio: 'Data scientist turned business consultant. Makes numbers tell stories.',
      expertise: ['Analytics', 'KPIs', 'Dashboards'],
      image: '👨‍💻'
    },
    {
      name: 'Priya Patel',
      role: 'Leadership Coach',
      bio: 'Executive coach with 200+ leaders transformed. ICF certified.',
      expertise: ['Coaching', 'Leadership', 'Culture'],
      image: '👩‍🏫'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowContactForm(false);
      setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 text-center">
        <p className="text-sm">
          🎯 <strong>Interactive Demo:</strong> Experience a professional service business website.{' '}
          <Link href="/demos" className="underline font-semibold hover:text-purple-200 transition-colors">
            ← Back to Demos
          </Link>
        </p>
      </div>

      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">💼</div>
              <div>
                <h1 className="text-xl font-bold text-white">Elevate Consulting</h1>
                <p className="text-xs text-blue-300">Strategic Business Solutions</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'services', 'case-studies', 'team', 'resources', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === section
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {/* Home Section */}
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero */}
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-6xl font-bold text-white mb-6"
                >
                  Transform Your Business
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Into Its Best Version
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
                >
                  Strategic consulting and hands-on support to help you scale, optimize, and lead with confidence.
                  We don't just advise—we partner with you to drive real results.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4 justify-center"
                >
                  <button
                    onClick={() => setActiveSection('services')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg"
                  >
                    Explore Services
                  </button>
                  <button
                    onClick={() => setActiveSection('case-studies')}
                    className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-all duration-200 font-semibold text-lg border border-slate-600"
                  >
                    View Case Studies
                  </button>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {[
                  { value: '150+', label: 'Clients Served' },
                  { value: '$50M+', label: 'Revenue Generated' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '15+', label: 'Years Experience' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Featured Services Preview */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">How We Help</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {services.slice(0, 3).map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      onClick={() => {
                        setSelectedService(service);
                        setActiveSection('services');
                      }}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-200 cursor-pointer group"
                    >
                      <div className="text-5xl mb-4">{service.icon}</div>
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-slate-400 mb-4">{service.shortDesc}</p>
                      <div className="text-blue-400 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                        Learn More →
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Business?</h3>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help you achieve your goals. Book a free 30-minute consultation.
                </p>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg"
                >
                  Schedule Free Consultation
                </button>
              </div>
            </motion.div>
          )}

          {/* Services Section */}
          {activeSection === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">Our Services</h2>
              <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
                Comprehensive solutions tailored to your business needs. Click any service to learn more.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedService(service)}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{service.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">{service.timeline}</span>
                      <span className="text-blue-400 font-semibold">{service.investment}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Case Studies Section */}
          {activeSection === 'case-studies' && (
            <motion.div
              key="case-studies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">Client Success Stories</h2>
              <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
                Real results from real businesses. See how we've helped companies transform and thrive.
              </p>

              <div className="space-y-8">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{study.client}</h3>
                        <span className="text-sm bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-3">Challenge</h4>
                        <p className="text-slate-300 mb-6">{study.challenge}</p>

                        <h4 className="text-lg font-semibold text-blue-400 mb-3">Solution</h4>
                        <p className="text-slate-300">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-3">Results</h4>
                        <ul className="space-y-2 mb-6">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300">
                              <span className="text-green-400 mt-1">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                          <p className="text-slate-300 italic mb-3">{study.testimonial}</p>
                          <div>
                            <div className="font-semibold text-white">{study.name}</div>
                            <div className="text-sm text-slate-400">{study.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Team Section */}
          {activeSection === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">Meet Our Team</h2>
              <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
                Experienced professionals dedicated to your success. Combined 50+ years of business transformation expertise.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-7xl">{member.image}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                        <p className="text-slate-300 mb-4">{member.bio}</p>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Want to Work With Us?</h3>
                <p className="text-slate-300 mb-6">
                  We're always looking for talented consultants and partners. If you're passionate about helping businesses grow, let's talk.
                </p>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
                >
                  Get In Touch
                </button>
              </div>
            </motion.div>
          )}

          {/* Resources Section */}
          {activeSection === 'resources' && (
            <motion.div
              key="resources"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">Free Resources</h2>
              <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
                Actionable insights and frameworks to help you grow. No strings attached.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    type: '📘 Guide',
                    title: 'The Scale-Up Playbook',
                    desc: '42-page guide on scaling from $1M to $10M',
                    downloads: '2.3K'
                  },
                  {
                    type: '📊 Template',
                    title: 'Strategic Planning Framework',
                    desc: 'Our proven template for annual planning',
                    downloads: '1.8K'
                  },
                  {
                    type: '🎯 Worksheet',
                    title: 'KPI Selection Guide',
                    desc: 'Choose the right metrics for your business',
                    downloads: '1.5K'
                  },
                  {
                    type: '📈 Calculator',
                    title: 'Growth Projection Tool',
                    desc: 'Model different growth scenarios',
                    downloads: '2.1K'
                  },
                  {
                    type: '📝 Checklist',
                    title: 'Digital Transformation Readiness',
                    desc: '50-point assessment for modernization',
                    downloads: '980'
                  },
                  {
                    type: '🎓 Course',
                    title: 'Leadership Fundamentals',
                    desc: '5-part email course on effective leadership',
                    downloads: '3.4K'
                  }
                ].map((resource, index) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="text-sm text-blue-400 font-semibold mb-2">{resource.type}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{resource.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{resource.downloads} downloads</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                        Download Free
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">📬 Weekly Insights Newsletter</h3>
                <p className="text-slate-300 mb-6">
                  Join 5,000+ business leaders getting actionable strategies every Tuesday. No fluff, just practical advice you can implement immediately.
                </p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">Let's Talk</h2>
              <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
                Ready to transform your business? Schedule a free consultation to discuss your goals and challenges.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-slate-300 mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Interested In</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select a service</option>
                        {services.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="<5k">Less than $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k+">$25,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Message *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 h-32"
                        placeholder="Tell us about your business and goals..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">📧</div>
                        <div>
                          <div className="text-slate-400 text-sm">Email</div>
                          <div className="text-white">contact@elevateconsulting.com</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">📱</div>
                        <div>
                          <div className="text-slate-400 text-sm">Phone</div>
                          <div className="text-white">(555) 123-4567</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">📍</div>
                        <div>
                          <div className="text-slate-400 text-sm">Office</div>
                          <div className="text-white">123 Business Plaza, Suite 400<br />San Francisco, CA 94105</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">🕐</div>
                        <div>
                          <div className="text-slate-400 text-sm">Hours</div>
                          <div className="text-white">Mon-Fri: 9:00 AM - 6:00 PM PST</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-3">Free 30-Minute Consultation</h3>
                    <p className="text-slate-300 mb-4">
                      Not sure where to start? Book a free consultation to discuss your business challenges and explore how we can help.
                    </p>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold">
                      Schedule Free Call
                    </button>
                  </div>

                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-3">Follow Us</h3>
                    <div className="flex gap-3">
                      {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social) => (
                        <button
                          key={social}
                          className="bg-slate-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          {social}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{selectedService.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{selectedService.title}</h3>
                    <p className="text-slate-400">{selectedService.shortDesc}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              <p className="text-slate-300 mb-6 text-lg">{selectedService.longDesc}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">What's Included</h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature: string) => (
                      <li key={feature} className="flex items-start gap-2 text-slate-300">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Deliverables</h4>
                  <ul className="space-y-2">
                    {selectedService.deliverables.map((item: string) => (
                      <li key={item} className="flex items-start gap-2 text-slate-300">
                        <span className="text-purple-400 mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-slate-400 mb-1">Timeline</div>
                    <div className="text-2xl font-bold text-white">{selectedService.timeline}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">Investment</div>
                    <div className="text-2xl font-bold text-blue-400">{selectedService.investment}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setShowContactForm(true);
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
                >
                  Get Started
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && !formSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-3xl font-bold text-white">Let's Get Started</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Service Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    {services.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="<5k">Less than $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k+">$25,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Tell us about your goals *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 h-32"
                    placeholder="What challenges are you facing? What are your goals?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg"
                >
                  Schedule Free Consultation
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}

        {formSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-12 max-w-md w-full text-center"
            >
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
              <p className="text-slate-300 mb-6">
                Thank you for reaching out. We'll get back to you within 24 hours to schedule your free consultation.
              </p>
              <div className="text-sm text-slate-400">
                Check your email for confirmation
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
