'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Pricing & Budget
  {
    category: "Pricing & Budget",
    question: "How much does a website cost?",
    answer: "It depends on the complexity and features you need. A simple 5-page business website starts around $3,000-5,000. A custom web application with user accounts, database, and complex features can range from $8,000-25,000+. E-commerce sites typically start at $8,000. I provide detailed quotes after our initial consultation so there are no surprises."
  },
  {
    category: "Pricing & Budget",
    question: "Do you require a deposit?",
    answer: "Yes, I require a 50% deposit to start work, with the remaining 50% due upon project completion and before launch. For larger projects (over $15,000), we can break payments into milestones tied to specific deliverables."
  },
  {
    category: "Pricing & Budget",
    question: "Are there any ongoing costs after the website is built?",
    answer: "Yes, you'll need to budget for: (1) Domain registration (~$15/year), (2) Hosting (~$20-100/month depending on traffic), (3) SSL certificate (often free with hosting), and (4) Optional maintenance plan ($300-500/month) for updates, security patches, and support. I can help set up hosting on Vercel (free tier available) or AWS."
  },
  {
    category: "Pricing & Budget",
    question: "Do you offer payment plans?",
    answer: "For projects over $10,000, I can offer milestone-based payments. For example: 30% to start, 30% at design approval, 30% at development completion, and 10% at launch. I don't offer monthly payment plans, as I'm a solo developer, not a financing company."
  },

  // Timeline & Process
  {
    category: "Timeline & Process",
    question: "How long does it take to build a website?",
    answer: "Timeline depends on project complexity: Simple 5-page website: 3-4 weeks, Custom web application: 6-12 weeks, E-commerce site: 8-14 weeks, Complex SaaS platform: 12-20+ weeks. These timelines assume you can provide content (text, images) promptly and give feedback within 2-3 business days during design reviews."
  },
  {
    category: "Timeline & Process",
    question: "What is your development process?",
    answer: "I follow a 7-phase process: (1) Discovery & Planning: Requirements gathering, wireframes, project roadmap (1-2 weeks), (2) Design & Prototyping: Mockups and interactive prototypes (2-3 weeks), (3) Development: Code development with weekly demos (4-8 weeks), (4) Testing & QA: Cross-browser, performance, accessibility testing (1-2 weeks), (5) Launch: Deployment and go-live (1 week), (6) Training: Admin training and documentation handoff (1 week), (7) Support: 30 days of free bug fixes. View the full process details on my /process page."
  },
  {
    category: "Timeline & Process",
    question: "Can you rush my project?",
    answer: "I can sometimes accelerate timelines for an additional 25-50% rush fee, but I never compromise on quality. Rushing typically means I'll need to decline other projects to focus exclusively on yours. However, some phases (like design iteration and client review) can't be rushed - you need time to review and provide thoughtful feedback."
  },
  {
    category: "Timeline & Process",
    question: "What if the project takes longer than estimated?",
    answer: "If delays are due to scope changes you request, we'll discuss timeline and cost adjustments. If delays are my fault (rare, but I'm human!), I don't charge extra - that's on me. I build buffer time into estimates to account for unknowns, so most projects finish on or ahead of schedule."
  },

  // Technical Questions
  {
    category: "Technical Questions",
    question: "What technologies do you use?",
    answer: "My primary stack is: Frontend: React, Next.js, TypeScript, Tailwind CSS, Backend: Node.js, Express, Databases: PostgreSQL (relational data) or MongoDB (flexible schemas), Deployment: Vercel, AWS, CloudFlare, Authentication: JWT, OAuth, Payment Processing: Stripe, PayPal. I choose technologies based on your project needs, not trends. Everything I use is well-documented, widely-supported, and won't become obsolete next year."
  },
  {
    category: "Technical Questions",
    question: "Will my website work on mobile devices?",
    answer: "Absolutely! All websites I build are mobile-first and fully responsive. I test on real iPhones, iPads, and Android devices to ensure everything works perfectly. With 60%+ of web traffic coming from mobile devices, it's non-negotiable."
  },
  {
    category: "Technical Questions",
    question: "Will my website be fast?",
    answer: "Yes! I optimize for Core Web Vitals and aim for 90+ Google Lighthouse scores. Techniques include: Image optimization (WebP format, lazy loading, responsive images), Code splitting and minification, CDN for static assets, Database query optimization, Caching strategies. I provide performance reports during development and after launch."
  },
  {
    category: "Technical Questions",
    question: "Is SEO included?",
    answer: "Technical SEO is included in all projects: Semantic HTML structure, Meta tags (title, description, Open Graph), XML sitemaps, Structured data (Schema.org), Fast page load times, Mobile-friendliness, Accessibility. However, content SEO (keyword research, blog strategy, link building) is not included - that's a separate service or something you'd hire an SEO specialist for."
  },
  {
    category: "Technical Questions",
    question: "Will I own the code and design?",
    answer: "Yes! Upon final payment, you own 100% of the code, design files, and all project assets. I'll transfer the GitHub repository to your account and provide all source files. The only exception is reusable components/libraries I use across multiple projects - but that doesn't affect your ownership or ability to modify your site."
  },

  // Content & Design
  {
    category: "Content & Design",
    question: "Do you provide content writing?",
    answer: "I don't write long-form content (blog posts, detailed service descriptions), but I can write short copy for buttons, headers, and calls-to-action. For content-heavy sites, I recommend hiring a professional copywriter. I can provide referrals. If you want to write your own content, I'll give you a content template with guidelines."
  },
  {
    category: "Content & Design",
    question: "Do you provide photography?",
    answer: "No, I don't take photos, but I can source stock photos that fit your brand. For businesses where authenticity matters (restaurants, healthcare, personal brands), I strongly recommend professional photography. I can provide photographer referrals in most markets."
  },
  {
    category: "Content & Design",
    question: "Can you work with my existing brand/logo?",
    answer: "Absolutely! If you have a logo, brand colors, and fonts, I'll match them exactly. If you have full brand guidelines, even better. If you don't have a logo yet, I can refer you to graphic designers I trust, or we can use a temporary logo while you work with a designer."
  },
  {
    category: "Content & Design",
    question: "How many design revisions do I get?",
    answer: "You get 2 rounds of design revisions included in the base price. Each round can include multiple changes. Additional revision rounds are $500 each. In practice, most clients are happy after 1-2 rounds. The key is providing specific, consolidated feedback rather than drip-feeding changes over many rounds."
  },

  // Post-Launch Support
  {
    category: "Post-Launch Support",
    question: "Do you offer ongoing maintenance?",
    answer: "Yes! I offer monthly maintenance plans starting at $300/month that include: Security updates and patches, Dependency updates, Monthly backups, Uptime monitoring, Bug fixes, Minor content updates, Priority support, Monthly performance reports. Plans are month-to-month with no long-term commitment required."
  },
  {
    category: "Post-Launch Support",
    question: "What if something breaks after launch?",
    answer: "You get 30 days of free bug fixes after launch. If I wrote bad code that breaks, I fix it for free - no time limit. If something breaks due to third-party service changes, hosting issues, or modifications you made, that would be billable support. I charge $150/hour for post-launch support outside the 30-day window."
  },
  {
    category: "Post-Launch Support",
    question: "Can you train my team to use the website?",
    answer: "Yes! Training is included in all projects. I'll schedule a 1-hour video call to walk through the admin panel, content management, and any other backend features. I record the training so your team can reference it later. I also provide written documentation and video tutorials."
  },
  {
    category: "Post-Launch Support",
    question: "Can I make updates myself after the site is built?",
    answer: "It depends on the site. For sites with a CMS (Content Management System), yes - you can add/edit pages, blog posts, products, etc. without touching code. For custom-coded sites, you'd need a developer to make changes (could be me or anyone else). I'll recommend the best approach based on your technical comfort level and budget."
  },

  // Working Together
  {
    category: "Working Together",
    question: "Do you work with clients outside your local area?",
    answer: "Yes! I work with clients across the United States and internationally. All communication is via video calls, email, and project management tools (I use ClickUp or Notion). I've successfully delivered projects for clients I've never met in person. Time zone differences are usually not an issue as long as we can find overlapping hours for weekly calls."
  },
  {
    category: "Working Together",
    question: "How involved do I need to be during the project?",
    answer: "You should expect to spend: Week 1-2 (Discovery): 2-3 hours for initial consultation and requirements review, Week 3-4 (Design): 1-2 hours per week reviewing mockups and providing feedback, Week 5+ (Development): 30 minutes per week for demo calls, Final Week: 2-3 hours for UAT (user acceptance testing) and training. If you're too busy to be involved, the project will suffer. Good outcomes require collaboration."
  },
  {
    category: "Working Together",
    question: "What if I'm not happy with the work?",
    answer: "My goal is 100% client satisfaction. If you're unhappy at any stage: During design: We iterate until you're satisfied (within the included revision rounds). During development: Weekly demos mean you catch issues early, not at launch. At launch: The 30-day bug fix period ensures everything works as expected. If we're truly at an impasse, I'll refund the portion of work not completed. This has never happened because I over-communicate and set realistic expectations."
  },
  {
    category: "Working Together",
    question: "Do you sign NDAs?",
    answer: "Yes, I'm happy to sign a reasonable NDA before we discuss confidential business details. Just send it over before our initial consultation. I keep all client information confidential by default, even without an NDA."
  },

  // Specific Features
  {
    category: "Specific Features",
    question: "Can you integrate with my existing systems?",
    answer: "Probably! I've integrated with CRMs (Salesforce, HubSpot), payment processors (Stripe, PayPal, Square), email marketing (Mailchimp, SendGrid), scheduling tools (Calendly), and many other systems. If there's an API, I can likely integrate it. Some integrations are complex and add time to the project, which we'll discuss in the planning phase."
  },
  {
    category: "Specific Features",
    question: "Can you build a mobile app?",
    answer: "I build web applications that work great on mobile browsers (responsive web apps). I don't build native iOS/Android apps. However, I can build Progressive Web Apps (PWAs) that can be installed on phones and work offline - these are often a great middle ground and much cheaper than native apps."
  },
  {
    category: "Specific Features",
    question: "Can you help with email marketing?",
    answer: "I can set up email capture forms and integrate with email marketing platforms (Mailchimp, ConvertKit, SendGrid). I can also set up automated transactional emails (order confirmations, password resets). However, I don't do email marketing strategy, campaign management, or copywriting - you'd hire a marketing specialist for that."
  },
  {
    category: "Specific Features",
    question: "Do you build e-commerce websites?",
    answer: "Yes! I've built several e-commerce sites with: Product catalogs, Shopping cart, Secure checkout (Stripe integration), Inventory management, Order tracking, Customer accounts, Admin dashboard for managing products/orders. E-commerce projects typically start at $8,000 and take 8-14 weeks depending on complexity."
  }
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredFAQs = activeCategory === "All"
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="section-container text-center">
        <ScaleIn>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h1>
        </ScaleIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Everything you need to know about working with us, from pricing to process to post-launch support.
          </p>
        </FadeIn>
      </section>

      {/* Category Filter */}
      <section className="section-container">
        <div className="flex flex-wrap justify-center gap-3">
          <motion.button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeCategory === "All"
                ? "btn-primary"
                : "glass-sm text-blue-100 hover:glass-md"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All ({faqs.length})
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                activeCategory === category
                  ? "btn-primary"
                  : "glass-sm text-blue-100 hover:glass-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category} ({faqs.filter(f => f.category === category).length})
            </motion.button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition"
              >
                <span className="font-semibold text-lg text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-300 transform transition-transform flex-shrink-0 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 glass-sm border-t border-white/10">
                      <p className="text-blue-100 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section-container">
        <div className="glass-lg rounded-3xl p-16 text-center hero-gradient">
          <ScaleIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Still Have Questions?
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Don't see your question answered here? Let's chat! I'm happy to discuss your specific situation.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/process"
                className="btn-secondary"
              >
                Learn About My Process
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
