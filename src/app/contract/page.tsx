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

    // Budget Package Specific Fields
    domainName: '',
    primaryColor: '',
    secondaryColor: '',
    accentColor: '',
    businessEmail: '',

    // Agreement
    agreeToTerms: false,
    agreeToPrivacy: false,
    agreeToBudgetTerms: false, // Special agreement for budget package
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
      // Check if Firebase is configured
      if (!db) {
        throw new Error('Firebase is not configured');
      }

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
    {
      value: 'budget',
      label: 'Budget-Friendly Package ($300 Fixed)',
      description: 'Perfect for tight budgets - I have full creative control. You provide: domain, colors, business info. Any changes outside scope require upgrade to custom contract.',
      highlight: true
    },
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
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-2xl p-12 text-center"
          >
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Contract Submitted Successfully!
            </h1>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Thank you, <strong className="text-white">{formData.clientName}</strong>! Your service contract has been received and
              is being reviewed. I'll contact you within 1-2 business days to discuss next steps.
            </p>
            <div className="glass-sm p-6 rounded-xl mb-8">
              <h3 className="font-semibold text-white mb-3">What Happens Next?</h3>
              <ol className="text-left space-y-2 text-blue-100">
                <li>1. I'll review your project details and requirements</li>
                <li>2. I'll prepare a detailed proposal with timeline and pricing</li>
                <li>3. We'll schedule a call to discuss the project</li>
                <li>4. Upon agreement, you'll receive an invoice for the deposit</li>
                <li>5. Work begins once deposit is received!</li>
              </ol>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-blue-200">
                A confirmation email has been sent to: <strong className="text-white">{formData.email}</strong>
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/"
                  className="btn-primary"
                >
                  Return Home
                </a>
                <a
                  href="/resources"
                  className="glass-sm px-6 py-3 rounded-lg font-semibold text-white hover:bg-white/10 transition-all"
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
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-4">
          Service Contract
        </h1>
        <p className="text-center text-blue-100 mb-8">
          Let's formalize your project! Fill out this contract to get started.
        </p>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step >= s
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                      : 'glass-sm text-blue-200'
                  }`}
                >
                  {s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 mx-2 rounded-full ${step > s ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'glass-sm'}`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-blue-200">
            <span>Client Info</span>
            <span>Project Details</span>
            <span>Service Package</span>
            <span>Review & Sign</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
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
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Client Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300/50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300/50"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300/50"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300/50"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Business Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300/50"
                    placeholder="123 Main St, City, State ZIP"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-primary"
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
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Project Details
                </h2>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                  >
                    <option value="">Select project type...</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300/50"
                    placeholder="Describe your project, goals, target audience, and any specific requirements..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Current Website URL (if applicable)
                    </label>
                    <input
                      type="url"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300/50"
                      placeholder="https://example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Target Launch Date
                    </label>
                    <input
                      type="date"
                      name="targetLaunchDate"
                      value={formData.targetLaunchDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="glass-sm px-8 py-3 rounded-lg font-semibold text-white hover:bg-white/10 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="btn-primary"
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
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Service Package
                </h2>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-3">
                    Select Service Package *
                  </label>
                  <div className="space-y-3">
                    {servicePackages.map(pkg => (
                      <label
                        key={pkg.value}
                        className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.servicePackage === pkg.value
                            ? pkg.value === 'budget'
                              ? 'border-green-400 bg-green-500/10 ring-2 ring-green-400/50'
                              : 'border-blue-400 glass-sm ring-2 ring-blue-400/50'
                            : pkg.value === 'budget'
                            ? 'border-green-400/30 bg-green-500/5 hover:border-green-400/50'
                            : 'border-white/10 glass-sm hover:border-blue-400/50'
                        }`}
                      >
                        <div className="flex items-start">
                          <input
                            type="radio"
                            name="servicePackage"
                            value={pkg.value}
                            checked={formData.servicePackage === pkg.value}
                            onChange={handleInputChange}
                            className="mr-3 mt-1"
                            required
                          />
                          <div>
                            <span className="font-semibold text-white">
                              {pkg.label}
                              {pkg.value === 'budget' && (
                                <span className="ml-2 px-2 py-1 text-xs font-bold rounded-full bg-green-500 text-white">
                                  BUDGET-FRIENDLY
                                </span>
                              )}
                            </span>
                            <p className="text-sm text-blue-100 mt-1">
                              {pkg.description}
                            </p>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Budget Package Specific Fields */}
                {formData.servicePackage === 'budget' && (
                  <div className="bg-green-500/10 p-6 rounded-lg border-2 border-green-400/50 space-y-4">
                    <h3 className="font-semibold text-white mb-4">
                      Budget Package Requirements
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-blue-100 mb-2">
                          Domain Name *
                        </label>
                        <input
                          type="text"
                          name="domainName"
                          value={formData.domainName}
                          onChange={handleInputChange}
                          required={formData.servicePackage === 'budget'}
                          className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-green-500 text-white placeholder-blue-300/50"
                          placeholder="yourdomain.com"
                        />
                        <p className="text-xs text-blue-200 mt-1">
                          You must purchase and provide your own domain
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-blue-100 mb-2">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          name="businessEmail"
                          value={formData.businessEmail}
                          onChange={handleInputChange}
                          required={formData.servicePackage === 'budget'}
                          className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-green-500 text-white placeholder-blue-300/50"
                          placeholder="contact@yourdomain.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-blue-100 mb-2">
                          Primary Color *
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            name="primaryColor"
                            value={formData.primaryColor}
                            onChange={handleInputChange}
                            required={formData.servicePackage === 'budget'}
                            className="h-12 w-16 border border-white/20 rounded cursor-pointer bg-black/30"
                          />
                          <input
                            type="text"
                            value={formData.primaryColor}
                            onChange={(e) => setFormData(prev => ({ ...prev, primaryColor: e.target.value }))}
                            className="flex-1 px-4 py-3 glass-sm rounded-lg text-white"
                            placeholder="#000000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-blue-100 mb-2">
                          Secondary Color
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            name="secondaryColor"
                            value={formData.secondaryColor}
                            onChange={handleInputChange}
                            className="h-12 w-16 border border-white/20 rounded cursor-pointer bg-black/30"
                          />
                          <input
                            type="text"
                            value={formData.secondaryColor}
                            onChange={(e) => setFormData(prev => ({ ...prev, secondaryColor: e.target.value }))}
                            className="flex-1 px-4 py-3 glass-sm rounded-lg text-white"
                            placeholder="#000000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-blue-100 mb-2">
                          Accent Color
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            name="accentColor"
                            value={formData.accentColor}
                            onChange={handleInputChange}
                            className="h-12 w-16 border border-white/20 rounded cursor-pointer bg-black/30"
                          />
                          <input
                            type="text"
                            value={formData.accentColor}
                            onChange={(e) => setFormData(prev => ({ ...prev, accentColor: e.target.value }))}
                            className="flex-1 px-4 py-3 glass-sm rounded-lg text-white"
                            placeholder="#000000"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-400/50">
                      <p className="text-sm text-blue-100">
                        <strong className="text-yellow-300">⚠️ Important Terms:</strong> By selecting the Budget Package, you agree that:
                      </p>
                      <ul className="text-sm text-blue-100 mt-2 space-y-1 ml-4 list-disc">
                        <li>The $300 fixed price includes full creative control by the developer</li>
                        <li>You are responsible for purchasing and providing your domain name</li>
                        <li>Any requested changes outside the initial requirements will void this contract</li>
                        <li>Additional changes will require upgrading to a custom development contract</li>
                        <li>Custom contract pricing: Per Feature, Weekly, Monthly, or Yearly basis</li>
                      </ul>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Custom Features or Special Requirements
                  </label>
                  <textarea
                    name="customFeatures"
                    value={formData.customFeatures}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300/50"
                    placeholder="Any specific features, integrations, or requirements not covered above..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
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
                    className="glass-sm px-8 py-3 rounded-lg font-semibold text-white hover:bg-white/10 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="btn-primary"
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
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Review & Sign Contract
                </h2>

                {/* Summary */}
                <div className="glass-sm p-6 rounded-xl space-y-4">
                  <h3 className="font-semibold text-white mb-3">Contract Summary</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-blue-200">Client:</span>
                      <p className="font-semibold text-white">{formData.clientName}</p>
                    </div>
                    {formData.companyName && (
                      <div>
                        <span className="text-blue-200">Company:</span>
                        <p className="font-semibold text-white">{formData.companyName}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-blue-200">Email:</span>
                      <p className="font-semibold text-white">{formData.email}</p>
                    </div>
                    <div>
                      <span className="text-blue-200">Phone:</span>
                      <p className="font-semibold text-white">{formData.phone}</p>
                    </div>
                    <div>
                      <span className="text-blue-200">Project Type:</span>
                      <p className="font-semibold text-white">{formData.projectType}</p>
                    </div>
                    <div>
                      <span className="text-blue-200">Service Package:</span>
                      <p className="font-semibold text-white">
                        {servicePackages.find(p => p.value === formData.servicePackage)?.label || formData.servicePackage}
                      </p>
                    </div>
                    {formData.servicePackage === 'budget' && formData.domainName && (
                      <>
                        <div>
                          <span className="text-blue-200">Domain:</span>
                          <p className="font-semibold text-white">{formData.domainName}</p>
                        </div>
                        <div>
                          <span className="text-blue-200">Colors:</span>
                          <div className="flex gap-2 mt-1">
                            {formData.primaryColor && (
                              <div className="flex items-center gap-1">
                                <div className="w-6 h-6 rounded border border-white/20" style={{ backgroundColor: formData.primaryColor }}></div>
                                <span className="text-xs text-blue-200">Primary</span>
                              </div>
                            )}
                            {formData.secondaryColor && (
                              <div className="flex items-center gap-1">
                                <div className="w-6 h-6 rounded border border-white/20" style={{ backgroundColor: formData.secondaryColor }}></div>
                                <span className="text-xs text-blue-200">Secondary</span>
                              </div>
                            )}
                            {formData.accentColor && (
                              <div className="flex items-center gap-1">
                                <div className="w-6 h-6 rounded border border-white/20" style={{ backgroundColor: formData.accentColor }}></div>
                                <span className="text-xs text-blue-200">Accent</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}
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
                    <span className="text-sm text-blue-100">
                      I have read and agree to the{' '}
                      <a href="/terms" target="_blank" className="text-blue-400 hover:text-blue-300 underline">
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
                    <span className="text-sm text-blue-100">
                      I have read and agree to the{' '}
                      <a href="/privacy" target="_blank" className="text-blue-400 hover:text-blue-300 underline">
                        Privacy Policy
                      </a>{' '}
                      *
                    </span>
                  </label>

                  {formData.servicePackage === 'budget' && (
                    <label className="flex items-start gap-3 cursor-pointer bg-yellow-500/10 p-4 rounded-lg border border-yellow-400/50">
                      <input
                        type="checkbox"
                        name="agreeToBudgetTerms"
                        checked={formData.agreeToBudgetTerms}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                      <span className="text-sm text-blue-100">
                        <strong className="text-yellow-300">I understand and agree to the Budget Package terms:</strong> I acknowledge that this $300 fixed-price contract grants full creative control to the developer. I am responsible for providing my own domain name. Any changes requested outside the initial requirements will void this contract and require upgrading to a custom development contract with pricing based on features (per feature, weekly, monthly, or yearly). *
                      </span>
                    </label>
                  )}
                </div>

                {/* Digital Signature */}
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Digital Signature *
                  </label>
                  <input
                    type="text"
                    name="signature"
                    value={formData.signature}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-sm rounded-lg focus:ring-2 focus:ring-blue-500 text-white font-['Brush_Script_MT',cursive] text-2xl placeholder-blue-300/50"
                    placeholder="Type your full name as signature"
                  />
                  <p className="text-xs text-blue-200 mt-2">
                    By typing your name above, you agree that this constitutes a legal digital signature.
                  </p>
                </div>

                <div className="glass-sm p-6 rounded-xl">
                  <p className="text-sm text-blue-100">
                    <strong className="text-white">Date:</strong> {formData.signatureDate}
                  </p>
                  <p className="text-sm text-blue-100 mt-2">
                    This contract is legally binding and will be reviewed by JGServicesLLC.
                    You will receive a detailed proposal and invoice within 1-2 business days.
                  </p>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="glass-sm px-8 py-3 rounded-lg font-semibold text-white hover:bg-white/10 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !formData.agreeToTerms ||
                      !formData.agreeToPrivacy ||
                      !formData.signature ||
                      (formData.servicePackage === 'budget' && !formData.agreeToBudgetTerms)
                    }
                    className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
