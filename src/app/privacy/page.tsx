import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - JGServicesLLC',
  description: 'Privacy Policy for JGServicesLLC web development services.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last Updated: January 2025
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              JGServicesLLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              and use our services. Please read this privacy policy carefully. If you do not agree with the terms
              of this privacy policy, please do not access the site.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  2.1 Personal Information
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Fill out contact forms</li>
                  <li>Download resources or guides</li>
                  <li>Sign up for our newsletter</li>
                  <li>Submit a project inquiry</li>
                  <li>Sign service contracts</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                  This information may include: name, email address, phone number, business name,
                  and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  2.2 Automatically Collected Information
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device,
                  including information about your web browser, IP address, time zone, and cookies installed on
                  your device. We use Google Analytics to help us understand how visitors use our site.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>To respond to your inquiries and provide customer service</li>
              <li>To send you requested resources and guides</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To process and fulfill service contracts</li>
              <li>To analyze website usage and trends</li>
              <li>To detect and prevent fraud or security issues</li>
            </ul>
          </section>

          {/* Data Storage and Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Data Storage and Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use Firebase (Google Cloud Platform) to securely store your information. We implement
              appropriate technical and organizational security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          {/* Sharing Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Sharing Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              We do not sell, trade, or rent your personal information to third parties. We may share your
              information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>When required by law or to respond to legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications at any time</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:info@jgservicesllc.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                info@jgservicesllc.com
              </a>
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and store
              certain information. You can instruct your browser to refuse all cookies or to indicate when
              a cookie is being sent. However, if you do not accept cookies, you may not be able to use
              some portions of our website.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Third-Party Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              Our website may use third-party services including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Google Analytics - for website analytics</li>
              <li>Firebase - for data storage and hosting</li>
              <li>Vercel - for website hosting</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              These third parties have their own privacy policies addressing how they use such information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children under 18. If you become aware that a child has provided us
              with personal information, please contact us.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the "Last Updated" date. You are
              advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@jgservicesllc.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  info@jgservicesllc.com
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Phone:</strong>{' '}
                <a href="tel:+15862765646" className="text-blue-600 dark:text-blue-400 hover:underline">
                  (586) 276-5646
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Website:</strong>{' '}
                <a href="https://jgservicesllc.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  https://jgservicesllc.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
