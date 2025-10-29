'use client'

import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="section-container text-center">
        <ScaleIn>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Privacy Policy
          </h1>
        </ScaleIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-blue-100">
            Last Updated: Octorber 28, 2025
          </p>
        </FadeIn>
      </section>

      <section className="section-container">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 space-y-8">
          <p className="text-blue-100">
            JG Services LLC is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
          </p>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">1. Information We Collect</h2>
            <p className="text-blue-100 mb-4">We collect information you provide when you contact us, download resources, or use our services.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">2. How We Use Your Information</h2>
            <p className="text-blue-100 mb-4">We use your information to provide services, communicate with you, and improve our offerings.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">3. Data Security</h2>
            <p className="text-blue-100 mb-4">We implement appropriate security measures to protect your personal information.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">4. Your Rights</h2>
            <p className="text-blue-100 mb-4">You have the right to access, correct, or delete your personal information.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">5. Contact Us</h2>
            <div className="glass-sm rounded-lg p-6">
              <p className="text-white font-semibold mb-2">JG Services LLC</p>
              <p className="text-blue-100">
                Email: <a href="mailto:info@jgservicesllc.com" className="text-blue-300 hover:text-blue-200 underline">info@jgservicesllc.com</a>
              </p>
              <p className="text-blue-100">
                Phone: <a href="tel:+15862765646" className="text-blue-300 hover:text-blue-200 underline">+1 (586) 276-5646</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="glass-lg rounded-3xl p-12 text-center hero-gradient max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Have Questions?</h2>
          <p className="text-lg mb-8 text-blue-100">We're committed to protecting your data.</p>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
