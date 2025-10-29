'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';

export default function Schedule() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Schedule an Appointment
          </h1>
          <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
            Let's turn your vision into reality. Book a free 30-minute consultation to discuss your project.
          </p>
        </FadeIn>

        <ScaleIn delay={0.2}>
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center mb-8">
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Ready to discuss your project? Book a 30-minute consultation to explore
              how we can bring your ideas to life. No pressure, no obligation – just a friendly
              conversation about your goals.
            </p>

            <motion.a
              href="https://calendly.com/admin-jgservicesllc/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-primary text-lg mb-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📅 Book Your Free Consultation
            </motion.a>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="glass-sm rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-blue-400 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-white">Flexible Scheduling</h3>
                <p className="text-blue-100 text-sm">
                  Choose a time that works best for your schedule
                </p>
              </motion.div>

              <motion.div
                className="glass-sm rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-blue-400 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-white">Video Conference</h3>
                <p className="text-blue-100 text-sm">
                  Connect via your preferred video platform
                </p>
              </motion.div>

              <motion.div
                className="glass-sm rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-blue-400 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-white">Free Consultation</h3>
                <p className="text-blue-100 text-sm">
                  No obligation – just a friendly discussion
                </p>
              </motion.div>
            </div>
          </div>
        </ScaleIn>

        <FadeIn delay={0.4}>
          <div className="text-center">
            <p className="text-blue-100">
              Have questions before scheduling?{" "}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline font-semibold">
                Contact us directly
              </Link>
            </p>
          </div>
        </FadeIn>

        {/* What to Expect Section */}
        <FadeIn delay={0.5}>
          <div className="mt-12 glass-card rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              What to Expect
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-blue-400 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Discuss Your Vision</h3>
                  <p className="text-blue-100 text-sm">We'll talk about your goals, target audience, and what you want to achieve with your website.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-blue-400 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Explore Solutions</h3>
                  <p className="text-blue-100 text-sm">I'll share recommendations tailored to your needs and budget, with examples of what's possible.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-blue-400 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Get a Clear Roadmap</h3>
                  <p className="text-blue-100 text-sm">Leave with a clear understanding of timeline, pricing, and next steps – with zero pressure to commit.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
