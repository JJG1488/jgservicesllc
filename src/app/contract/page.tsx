'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ContractPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Client Information
    clientName: '',
    companyName: '',
    email: '',
    phone: '',
    address: '',

    // Project Details
    projectType: '',
    projectDescription: '',
    websiteUrl: '',
    targetLaunchDate: '',

    // Service Package
    servicePackage: '',
    customFeatures: '',
    budget: '',

    // Agreement
    agreeToTerms: false,
    agreeToPrivacy: false,
    signature: '',
    signatureDate: new Date().toLocaleDateString(),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Firebase
      await addDoc(collection(db, 'contracts'), {
        ...formData,
        status: 'pending_review',
        submittedAt: serverTimestamp(),
        approved: false,
      });

      setSubmitSuccess(true);
      setStep(5);
    } catch (error) {
      console.error('Error submitting contract:', error);
      alert('There was an error submitting your contract. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const servicePackages = [
    { value: 'starter', label: 'Starter Website ($2,500 - $5,000)', description: '5-10 pages, responsive design, contact form' },
    { value: 'professional', label: 'Professional Website ($5,000 - $10,000)', description: '10-20 pages, CMS, SEO optimization, analytics' },
    { value: 'enterprise', label: 'Enterprise Website ($10,000+)', description: 'Custom features, integrations, scalable architecture' },
    { value: 'ecommerce', label: 'E-Commerce ($8,000 - $20,000)', description: 'Online store, payment processing, inventory management' },
    { value: 'webapp', label: 'Web Application (Custom Quote)', description: 'Complex functionality, user authentication, databases' },
    { value: 'custom', label: 'Custom Project (Quote Required)', description: 'Tell us about your unique requirements' },
  ];

  const projectTypes = [
    'New Website',
    'Website Redesign',
    'E-Commerce Store',
    'Web Application',
    'Landing Page',
    'Blog/Content Site',
    'Portfolio Site',
    'Booking/Reservation System',
    'Other'
  ];

  if (submitSuccess) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center"
          >
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Contract Submitted Successfully!
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Thank you, <strong>{formData.clientName}</strong>! Your service contract has been received and
              is being reviewed. I'll contact you within 1-2 business days to discuss next steps.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What Happens Next?</h3>
              <ol className="text-left space-y-2 text-gray-700 dark:text-gray-300">
                <li>1. I'll review your project details and requirements</li>
                <li>2. I'll prepare a detailed proposal with timeline and pricing</li>
                <li>3. We'll schedule a call to discuss the project</li>
                <li>4. Upon agreement, you'll receive an invoice for the deposit</li>
                <li>5. Work begins once deposit is received!</li>
              </ol>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A confirmation email has been sent to: <strong>{formData.email}</strong>
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  Return Home
                </a>
                <a
                  href="/resources"
                  className="inline-block bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  Browse Resources
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Service Contract
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Let's formalize your project! Fill out this contract to get started.
        </p>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step >= s
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
            <span>Client Info</span>
            <span>Project Details</span>
            <span>Service Package</span>
            <span>Review & Sign</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Client Information */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Client Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Business Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="123 Main St, City, State ZIP"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    Next: Project Details →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Details */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Project Details
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select project type...</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Describe your project, goals, target audience, and any specific requirements..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Current Website URL (if applicable)
                    </label>
                    <input
                      type="url"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="https://example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Target Launch Date
                    </label>
                    <input
                      type="date"
                      name="targetLaunchDate"
                      value={formData.targetLaunchDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    Next: Service Package →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Service Package */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Service Package
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Select Service Package *
                  </label>
                  <div className="space-y-3">
                    {servicePackages.map(pkg => (
                      <label
                        key={pkg.value}
                        className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.servicePackage === pkg.value
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-300 dark:border-gray-600 hover:border-blue-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="servicePackage"
                          value={pkg.value}
                          checked={formData.servicePackage === pkg.value}
                          onChange={handleInputChange}
                          className="mr-3"
                          required
                        />
                        <span className="font-semibold text-gray-900 dark:text-white">{pkg.label}</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400 ml-6 mt-1">
                          {pkg.description}
                        </p>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Custom Features or Special Requirements
                  </label>
                  <textarea
                    name="customFeatures"
                    value={formData.customFeatures}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Any specific features, integrations, or requirements not covered above..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select budget range...</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-20k">$10,000 - $20,000</option>
                    <option value="20k-50k">$20,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="flexible">Flexible / Open to Recommendations</option>
                  </select>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    Review & Sign →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Review & Sign */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Review & Sign Contract
                </h2>

                {/* Summary */}
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Contract Summary</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Client:</span>
                      <p className="font-semibold text-gray-900 dark:text-white">{formData.clientName}</p>
                    </div>
                    {formData.companyName && (
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Company:</span>
                        <p className="font-semibold text-gray-900 dark:text-white">{formData.companyName}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Email:</span>
                      <p className="font-semibold text-gray-900 dark:text-white">{formData.email}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Phone:</span>
                      <p className="font-semibold text-gray-900 dark:text-white">{formData.phone}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Project Type:</span>
                      <p className="font-semibold text-gray-900 dark:text-white">{formData.projectType}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Service Package:</span>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {servicePackages.find(p => p.value === formData.servicePackage)?.label || formData.servicePackage}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Agreement Checkboxes */}
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      I have read and agree to the{' '}
                      <a href="/terms" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Terms of Service
                      </a>{' '}
                      *
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      I have read and agree to the{' '}
                      <a href="/privacy" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Privacy Policy
                      </a>{' '}
                      *
                    </span>
                  </label>
                </div>

                {/* Digital Signature */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Digital Signature *
                  </label>
                  <input
                    type="text"
                    name="signature"
                    value={formData.signature}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-['Brush_Script_MT',cursive] text-2xl"
                    placeholder="Type your full name as signature"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    By typing your name above, you agree that this constitutes a legal digital signature.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Date:</strong> {formData.signatureDate}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    This contract is legally binding and will be reviewed by JGServicesLLC.
                    You will receive a detailed proposal and invoice within 1-2 business days.
                  </p>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeToTerms || !formData.agreeToPrivacy || !formData.signature}
                    className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : '✓ Submit Contract'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
