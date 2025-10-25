import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - JGServicesLLC',
  description: 'Terms of Service for JGServicesLLC web development services.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last Updated: January 2025
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By accessing and using the JGServicesLLC website ("Service"), you accept and agree to be bound
              by the terms and provision of this agreement. If you do not agree to these Terms of Service,
              please do not use our Service.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Services Provided
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              JGServicesLLC provides professional web development services including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Custom website design and development</li>
              <li>Web application development</li>
              <li>Website maintenance and support</li>
              <li>Consulting and strategic planning</li>
              <li>SEO and performance optimization</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Specific services, deliverables, timelines, and pricing will be outlined in individual
              service contracts or agreements.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              When using our Service, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use the Service only for lawful purposes</li>
              <li>Not attempt to interfere with or compromise the system integrity or security</li>
              <li>Not use the Service to transmit any harmful or malicious code</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Payment Terms
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  4.1 Pricing
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Pricing for services will be provided in writing via proposal, quote, or service contract.
                  All prices are in USD unless otherwise specified.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  4.2 Payment Schedule
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Unless otherwise specified in your service contract, standard payment terms are:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                  <li>50% deposit required before work begins</li>
                  <li>Remaining 50% due upon project completion</li>
                  <li>Monthly retainer clients will be billed on the 1st of each month</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  4.3 Late Payments
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Late payments may be subject to a 1.5% monthly interest charge. We reserve the right to
                  suspend services for accounts with overdue balances.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Intellectual Property Rights
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  5.1 Client Ownership
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Upon full payment, clients receive ownership of custom code, design assets, and content
                  created specifically for their project. This does not include third-party libraries,
                  frameworks, or tools used in development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  5.2 Portfolio Rights
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  JGServicesLLC reserves the right to showcase completed work in our portfolio and marketing
                  materials unless otherwise agreed in writing. Client confidentiality will be maintained
                  when requested.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  5.3 Pre-existing Materials
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Clients retain ownership of any materials, content, or assets provided to JGServicesLLC
                  for use in the project.
                </p>
              </div>
            </div>
          </section>

          {/* Project Timeline and Delivery */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Project Timeline and Delivery
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              Project timelines are estimates and may be affected by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Delays in receiving required materials from the client</li>
              <li>Scope changes or additional feature requests</li>
              <li>Technical challenges or third-party service issues</li>
              <li>Force majeure events</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We will communicate any anticipated delays promptly and work to minimize impact.
            </p>
          </section>

          {/* Revisions and Changes */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Revisions and Scope Changes
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Each project includes a specified number of revision rounds as outlined in the service contract.
              Additional revisions or changes to the project scope may incur additional charges. All scope
              changes will be documented and require written approval before implementation.
            </p>
          </section>

          {/* Warranties and Disclaimers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Warranties and Disclaimers
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We warrant that all work will be performed in a professional manner consistent with industry
              standards. However:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>We cannot guarantee specific search engine rankings or traffic levels</li>
              <li>We are not responsible for changes made by the client after delivery</li>
              <li>Website performance may vary based on hosting environment and user devices</li>
              <li>Third-party services and integrations are subject to their respective terms</li>
            </ul>
          </section>

          {/* Support and Maintenance */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              9. Support and Maintenance
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Post-launch support and maintenance services are available and will be outlined in separate
              agreements. Bug fixes for issues directly caused by our code will be provided free of charge
              for 30 days after project delivery. After this period, support is available on an hourly or
              retainer basis.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To the maximum extent permitted by law, JGServicesLLC shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
              whether incurred directly or indirectly. Our total liability shall not exceed the amount paid
              by the client for the specific service in question.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              11. Termination
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              Either party may terminate the agreement under the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Written notice provided according to the service contract terms</li>
              <li>Material breach of these Terms by the other party</li>
              <li>Mutual agreement to terminate</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Upon termination, the client is responsible for payment of all services rendered up to the
              termination date.
            </p>
          </section>

          {/* Confidentiality */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              12. Confidentiality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Both parties agree to maintain confidentiality of any proprietary or sensitive information
              shared during the course of the project. This obligation continues after project completion
              or termination of services.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              13. Indemnification
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Client agrees to indemnify and hold JGServicesLLC harmless from any claims arising from
              content provided by the client, client's use of the delivered work, or client's violation
              of these Terms.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              14. Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page
              with an updated revision date. Continued use of our Service after changes constitutes
              acceptance of the modified Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              15. Governing Law
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of
              Michigan, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              16. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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

          {/* Agreement */}
          <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>By using our Service, you acknowledge that you have read, understood, and agree to
              be bound by these Terms of Service.</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              For project-specific agreements, please see our{' '}
              <Link href="/contract" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                Service Contract
              </Link>{' '}
              page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
