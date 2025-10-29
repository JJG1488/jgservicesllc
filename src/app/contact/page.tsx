'use client'

import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container max-w-6xl">
        <ScaleIn>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
            Contact Us
          </h1>
        </ScaleIn>
        <FadeIn delay={0.2}>
          <p className="text-center text-blue-100 text-lg mb-16 max-w-2xl mx-auto">
            Let's bring your vision to life with stunning web solutions
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Card */}
          <FadeIn delay={0.3}>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Get in Touch
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Whether you have questions, ideas, or are ready to get started on
                your custom website, send us a message and we'll get back to you
                promptly.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-white mb-1">Phone:</strong>
                    <a
                      href="tel:+15862765646"
                      className="text-blue-300 hover:text-purple-300 transition font-medium"
                    >
                      +1 (586) 276-5646
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-white mb-1">Email:</strong>
                    <a
                      href="mailto:info@jgservicesllc.com"
                      className="text-blue-300 hover:text-purple-300 transition font-medium"
                    >
                      info@jgservicesllc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form Card */}
          <FadeIn delay={0.4}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
              <ContactForm />
            </div>
          </FadeIn>
        </div>

        {/* Schedule Consultation CTA */}
        <FadeIn delay={0.5}>
          <div className="glass-lg rounded-3xl p-12 text-center hero-gradient">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Or Schedule a Consultation
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Prefer a live conversation? Book a free 30-minute consultation to discuss your project.
            </p>
            <Link
              href="/schedule"
              className="btn-primary inline-block"
            >
              Schedule Now
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
