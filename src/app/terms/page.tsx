'use client'

import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="section-container text-center">
        <ScaleIn>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Terms of Service
          </h1>
        </ScaleIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-blue-100">
            Last Updated: January 28, 2025
          </p>
        </FadeIn>
      </section>

      <section className="section-container">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 space-y-8">
          <p className="text-blue-100">
            These Terms of Service govern your use of JG Services LLC's website and services.
          </p>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-blue-100 mb-4">By accessing our website or using our services, you agree to be bound by these terms.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">2. Services</h2>
            <p className="text-blue-100 mb-4">We provide web development, design, and related technical services as described on our website.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">3. Payment Terms</h2>
            <p className="text-blue-100 mb-4">Payment terms are agreed upon in individual service contracts. A deposit is typically required to begin work.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">4. Intellectual Property</h2>
            <p className="text-blue-100 mb-4">Upon full payment, clients own the code and designs created specifically for their project.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">5. Limitation of Liability</h2>
            <p className="text-blue-100 mb-4">JG Services LLC is not liable for indirect, incidental, or consequential damages arising from the use of our services.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">6. Termination</h2>
            <p className="text-blue-100 mb-4">Either party may terminate services with written notice as outlined in individual service agreements.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">7. Changes to Terms</h2>
            <p className="text-blue-100 mb-4">We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">8. Contact</h2>
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
          <h2 className="text-3xl font-bold mb-4 text-white">Questions About Our Terms?</h2>
          <p className="text-lg mb-8 text-blue-100">We're happy to discuss any questions you may have.</p>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
