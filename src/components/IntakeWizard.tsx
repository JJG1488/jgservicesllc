'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectIntake, createEmptyIntake } from '@/types/intake';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Import step components
import ClientInfoStep from './intake-steps/ClientInfoStep';
import BaseTypeStep from './intake-steps/BaseTypeStep';
import DesignStep from './intake-steps/DesignStep';
import ContentStep from './intake-steps/ContentStep';
import PagesStep from './intake-steps/PagesStep';
import FormsStep from './intake-steps/FormsStep';
import BookingStep from './intake-steps/BookingStep';
import EcommerceStep from './intake-steps/EcommerceStep';
import UserSystemsStep from './intake-steps/UserSystemsStep';
import IntegrationsStep from './intake-steps/IntegrationsStep';
import SEOStep from './intake-steps/SEOStep';
import CMSStep from './intake-steps/CMSStep';
import SecurityStep from './intake-steps/SecurityStep';
import OngoingServicesStep from './intake-steps/OngoingServicesStep';
import TimelineStep from './intake-steps/TimelineStep';
import ProjectDescriptionStep from './intake-steps/ProjectDescriptionStep';
import ReviewStep from './intake-steps/ReviewStep';

interface IntakeWizardProps {
  onClose: () => void;
}

export default function IntakeWizard({ onClose }: IntakeWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [intake, setIntake] = useState<ProjectIntake>(createEmptyIntake());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const steps = [
    { title: 'Client Info', component: ClientInfoStep },
    { title: 'Site Type', component: BaseTypeStep },
    { title: 'Design', component: DesignStep },
    { title: 'Content', component: ContentStep },
    { title: 'Pages & Sections', component: PagesStep },
    { title: 'Forms', component: FormsStep },
    { title: 'Booking', component: BookingStep },
    { title: 'E-Commerce', component: EcommerceStep },
    { title: 'User Systems', component: UserSystemsStep },
    { title: 'Integrations', component: IntegrationsStep },
    { title: 'SEO', component: SEOStep },
    { title: 'CMS', component: CMSStep },
    { title: 'Security', component: SecurityStep },
    { title: 'Ongoing Services', component: OngoingServicesStep },
    { title: 'Timeline', component: TimelineStep },
    { title: 'Project Description', component: ProjectDescriptionStep },
    { title: 'Review', component: ReviewStep },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculatePricing = (data: ProjectIntake): ProjectIntake => {
    // Calculate subtotal from all features
    let oneTimeTotal = data.baseType.basePrice;
    let monthlyTotal = 0;
    let annualTotal = 0;

    // Add design costs
    oneTimeTotal += data.design.customDesignPrice;
    oneTimeTotal += data.design.premiumDesignPrice;
    oneTimeTotal += data.design.logoPrice;
    oneTimeTotal += data.design.brandIdentityPrice;
    oneTimeTotal += data.design.illustrationsPrice;
    oneTimeTotal += data.design.darkModePrice;

    // Add content costs
    oneTimeTotal += data.content.stockImageryPrice;
    oneTimeTotal += data.content.copywritingPrice;
    oneTimeTotal += data.content.videoEditingPrice;

    // Add pages costs
    data.pages.additionalPages.forEach(page => oneTimeTotal += page.price);
    oneTimeTotal += data.pages.heroPrice;
    oneTimeTotal += data.pages.aboutPrice;
    oneTimeTotal += data.pages.servicesPrice;
    oneTimeTotal += data.pages.portfolioPrice;
    oneTimeTotal += data.pages.testimonialsPrice;
    oneTimeTotal += data.pages.faqPrice;
    oneTimeTotal += data.pages.caseStudiesPrice;
    oneTimeTotal += data.pages.pricingTablePrice;
    oneTimeTotal += data.pages.blogPrice;
    oneTimeTotal += data.pages.careersPrice;

    // Add forms costs
    oneTimeTotal += data.forms.multiStepPrice;
    oneTimeTotal += data.forms.calculatorPrice;
    oneTimeTotal += data.forms.fileUploadPrice;
    oneTimeTotal += data.forms.newsletterPrice;
    oneTimeTotal += data.forms.popupPrice;
    oneTimeTotal += data.forms.exitIntentPrice;

    // Add booking costs
    oneTimeTotal += data.booking.calendlyPrice;
    oneTimeTotal += data.booking.customBookingPrice;
    oneTimeTotal += data.booking.dashboardPrice;
    oneTimeTotal += data.booking.remindersPrice;

    // Add ecommerce costs
    oneTimeTotal += data.ecommerce.catalogPrice;
    oneTimeTotal += data.ecommerce.paymentPrice;
    oneTimeTotal += data.ecommerce.subscriptionPrice;
    oneTimeTotal += data.ecommerce.accountsPrice;
    oneTimeTotal += data.ecommerce.inventoryPrice;
    oneTimeTotal += data.ecommerce.discountPrice;
    oneTimeTotal += data.ecommerce.shippingPrice;
    oneTimeTotal += data.ecommerce.taxPrice;
    oneTimeTotal += data.ecommerce.currencyPrice;
    oneTimeTotal += data.ecommerce.reviewsPrice;
    oneTimeTotal += data.ecommerce.wishlistPrice;
    oneTimeTotal += data.ecommerce.abandonedCartPrice;

    // Add user systems costs
    oneTimeTotal += data.userSystems.authPrice;
    oneTimeTotal += data.userSystems.socialLoginPrice;
    oneTimeTotal += data.userSystems.dashboardPrice;
    oneTimeTotal += data.userSystems.profilesPrice;
    oneTimeTotal += data.userSystems.rolesPrice;
    oneTimeTotal += data.userSystems.memberContentPrice;
    oneTimeTotal += data.userSystems.subscriptionPrice;

    // Add integrations costs
    oneTimeTotal += data.integrations.analyticsPrice;
    oneTimeTotal += data.integrations.tagManagerPrice;
    oneTimeTotal += data.integrations.metaPixelPrice;
    oneTimeTotal += data.integrations.mapsPrice;
    oneTimeTotal += data.integrations.emailMarketingPrice;
    oneTimeTotal += data.integrations.crmPrice;
    oneTimeTotal += data.integrations.socialFeedsPrice;
    oneTimeTotal += data.integrations.liveChatPrice;
    oneTimeTotal += data.integrations.zapierPrice;
    oneTimeTotal += data.integrations.customApiPrice;
    oneTimeTotal += data.integrations.accountingPrice;

    // Add SEO costs
    oneTimeTotal += data.seo.basicSEOPrice;
    oneTimeTotal += data.seo.advancedSEOPrice;
    oneTimeTotal += data.seo.coreWebVitalsPrice;
    oneTimeTotal += data.seo.imageOptimizationPrice;
    oneTimeTotal += data.seo.pageSpeedPrice;

    // Add CMS costs
    oneTimeTotal += data.cms.cmsPrice;
    oneTimeTotal += data.cms.adminDashboardPrice;
    oneTimeTotal += data.cms.trainingDocsPrice;
    oneTimeTotal += data.cms.videoTrainingPrice;

    // Add security costs
    oneTimeTotal += data.security.sslPrice;
    oneTimeTotal += data.security.gdprPrice;
    oneTimeTotal += data.security.cookieBannerPrice;
    oneTimeTotal += data.security.termsPrice;
    oneTimeTotal += data.security.privacyPolicyPrice;
    oneTimeTotal += data.security.securityPrice;
    oneTimeTotal += data.security.twoFactorPrice;

    // Add ongoing services one-time costs
    oneTimeTotal += data.ongoingServices.hostingSetupPrice;

    // Add monthly costs
    monthlyTotal += data.ongoingServices.hostingManagementPrice;
    monthlyTotal += data.ongoingServices.maintenancePrice;
    monthlyTotal += data.ongoingServices.analyticsPrice;
    monthlyTotal += data.ongoingServices.securityMonitoringPrice;
    monthlyTotal += data.ongoingServices.backupsPrice;
    monthlyTotal += data.ongoingServices.prioritySupportPrice;

    // Add annual costs
    annualTotal += data.ongoingServices.domainPrice;

    // Apply timeline multiplier
    const multiplier = data.timeline.multiplier;
    const total = oneTimeTotal * multiplier;

    return {
      ...data,
      pricing: {
        subtotal: oneTimeTotal,
        timelineMultiplier: multiplier,
        total: total,
        oneTimeTotal: total,
        monthlyTotal,
        annualTotal,
      },
    };
  };

  // Helper function to remove undefined values (Firestore doesn't accept them)
  const sanitizeForFirestore = (obj: any): any => {
    if (obj === null || obj === undefined) {
      return null;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => sanitizeForFirestore(item));
    }

    if (typeof obj === 'object') {
      const cleaned: any = {};
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (value !== undefined) {
          cleaned[key] = sanitizeForFirestore(value);
        }
      });
      return cleaned;
    }

    return obj;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      if (!db) {
        throw new Error('Firebase is not configured');
      }

      // Calculate final pricing
      const finalIntake = calculatePricing({
        ...intake,
        status: 'submitted',
      });

      // Sanitize data to remove undefined values
      const sanitizedIntake = sanitizeForFirestore(finalIntake);

      // Add to Firestore
      const docRef = await addDoc(collection(db, 'intakes'), {
        ...sanitizedIntake,
        submittedAt: serverTimestamp(),
      });

      console.log('Intake submitted with ID:', docRef.id);

      // Close wizard and show success
      onClose();
      // You could add a success toast/notification here
      alert('Your project intake has been submitted successfully! We will review it and get back to you soon.');
    } catch (error) {
      console.error('Error submitting intake:', error);
      setSubmitError(`Failed to submit intake. Please try again. Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass-lg rounded-2xl max-w-4xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold gradient-text">
              New Project Intake
            </h2>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors text-2xl w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-blue-200">
                Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
              </span>
              <span className="text-blue-300 font-semibold">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CurrentStepComponent
                intake={intake}
                onUpdate={(updater) => {
                  if (typeof updater === 'function') {
                    setIntake(updater);
                  } else {
                    setIntake(updater);
                  }
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="btn-secondary disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Back
          </button>

          <div className="hidden sm:flex items-center gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentStep
                    ? 'bg-blue-400 w-8'
                    : index < currentStep
                    ? 'bg-blue-600'
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          {currentStep < steps.length - 1 ? (
            <button onClick={handleNext} className="btn-primary">
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Intake'}
            </button>
          )}
        </div>

        {submitError && (
          <div className="px-4 sm:px-6 pb-4">
            <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg">
              {submitError}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
