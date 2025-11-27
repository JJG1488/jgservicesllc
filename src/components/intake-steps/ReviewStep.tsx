'use client';

import { ProjectIntake } from '@/types/intake';
import { motion } from 'framer-motion';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

export default function ReviewStep({ intake }: StepProps) {
  // Calculate all costs
  const calculateCosts = () => {
    let oneTimeCosts = intake.baseType.basePrice;
    let monthlyCosts = 0;
    let annualCosts = 0;

    // Design & Branding
    oneTimeCosts += intake.design.customDesignPrice || 0;
    oneTimeCosts += intake.design.premiumDesignPrice || 0;
    oneTimeCosts += intake.design.logoPrice || 0;
    oneTimeCosts += intake.design.brandIdentityPrice || 0;
    oneTimeCosts += intake.design.illustrationsPrice || 0;
    oneTimeCosts += intake.design.darkModePrice || 0;

    // Content
    oneTimeCosts += intake.content.stockImageryPrice || 0;
    oneTimeCosts += intake.content.copywritingPrice || 0;
    oneTimeCosts += intake.content.videoEditingPrice || 0;

    // Pages & Sections
    oneTimeCosts += intake.pages.heroPrice || 0;
    oneTimeCosts += intake.pages.aboutPrice || 0;
    oneTimeCosts += intake.pages.servicesPrice || 0;
    oneTimeCosts += intake.pages.portfolioPrice || 0;
    oneTimeCosts += intake.pages.testimonialsPrice || 0;
    oneTimeCosts += intake.pages.faqPrice || 0;
    oneTimeCosts += intake.pages.caseStudiesPrice || 0;
    oneTimeCosts += intake.pages.pricingTablePrice || 0;
    oneTimeCosts += intake.pages.blogPrice || 0;
    oneTimeCosts += intake.pages.careersPrice || 0;
    oneTimeCosts += intake.pages.additionalPages.reduce((sum, page) => sum + page.price, 0);

    // Forms
    oneTimeCosts += intake.forms.multiStepPrice || 0;
    oneTimeCosts += intake.forms.calculatorPrice || 0;
    oneTimeCosts += intake.forms.fileUploadPrice || 0;
    oneTimeCosts += intake.forms.newsletterPrice || 0;
    oneTimeCosts += intake.forms.popupPrice || 0;
    oneTimeCosts += intake.forms.exitIntentPrice || 0;

    // Booking
    oneTimeCosts += intake.booking.calendlyPrice || 0;
    oneTimeCosts += intake.booking.customBookingPrice || 0;
    oneTimeCosts += intake.booking.dashboardPrice || 0;
    oneTimeCosts += intake.booking.remindersPrice || 0;

    // E-commerce
    oneTimeCosts += intake.ecommerce.catalogPrice || 0;
    oneTimeCosts += intake.ecommerce.paymentPrice || 0;
    oneTimeCosts += intake.ecommerce.subscriptionPrice || 0;
    oneTimeCosts += intake.ecommerce.accountsPrice || 0;
    oneTimeCosts += intake.ecommerce.inventoryPrice || 0;
    oneTimeCosts += intake.ecommerce.discountPrice || 0;
    oneTimeCosts += intake.ecommerce.shippingPrice || 0;
    oneTimeCosts += intake.ecommerce.taxPrice || 0;
    oneTimeCosts += intake.ecommerce.currencyPrice || 0;
    oneTimeCosts += intake.ecommerce.reviewsPrice || 0;
    oneTimeCosts += intake.ecommerce.wishlistPrice || 0;
    oneTimeCosts += intake.ecommerce.abandonedCartPrice || 0;

    // User Systems
    oneTimeCosts += intake.userSystems.authPrice || 0;
    oneTimeCosts += intake.userSystems.socialLoginPrice || 0;
    oneTimeCosts += intake.userSystems.dashboardPrice || 0;
    oneTimeCosts += intake.userSystems.profilesPrice || 0;
    oneTimeCosts += intake.userSystems.rolesPrice || 0;
    oneTimeCosts += intake.userSystems.memberContentPrice || 0;
    oneTimeCosts += intake.userSystems.subscriptionPrice || 0;

    // Integrations
    oneTimeCosts += intake.integrations.analyticsPrice || 0;
    oneTimeCosts += intake.integrations.tagManagerPrice || 0;
    oneTimeCosts += intake.integrations.metaPixelPrice || 0;
    oneTimeCosts += intake.integrations.mapsPrice || 0;
    oneTimeCosts += intake.integrations.emailMarketingPrice || 0;
    oneTimeCosts += intake.integrations.crmPrice || 0;
    oneTimeCosts += intake.integrations.socialFeedsPrice || 0;
    oneTimeCosts += intake.integrations.liveChatPrice || 0;
    oneTimeCosts += intake.integrations.zapierPrice || 0;
    oneTimeCosts += intake.integrations.customApiPrice || 0;
    oneTimeCosts += intake.integrations.accountingPrice || 0;

    // SEO
    oneTimeCosts += intake.seo.basicSEOPrice || 0;
    oneTimeCosts += intake.seo.advancedSEOPrice || 0;
    oneTimeCosts += intake.seo.coreWebVitalsPrice || 0;
    oneTimeCosts += intake.seo.imageOptimizationPrice || 0;
    oneTimeCosts += intake.seo.pageSpeedPrice || 0;

    // CMS
    oneTimeCosts += intake.cms.cmsPrice || 0;
    oneTimeCosts += intake.cms.adminDashboardPrice || 0;
    oneTimeCosts += intake.cms.trainingDocsPrice || 0;
    oneTimeCosts += intake.cms.videoTrainingPrice || 0;

    // Security
    oneTimeCosts += intake.security.sslPrice || 0;
    oneTimeCosts += intake.security.gdprPrice || 0;
    oneTimeCosts += intake.security.cookieBannerPrice || 0;
    oneTimeCosts += intake.security.termsPrice || 0;
    oneTimeCosts += intake.security.privacyPolicyPrice || 0;
    oneTimeCosts += intake.security.securityPrice || 0;
    oneTimeCosts += intake.security.twoFactorPrice || 0;

    // Ongoing Services
    oneTimeCosts += intake.ongoingServices.hostingSetupPrice || 0;
    annualCosts += intake.ongoingServices.domainPrice || 0;
    monthlyCosts += intake.ongoingServices.hostingManagementPrice || 0;
    monthlyCosts += intake.ongoingServices.maintenancePrice || 0;
    monthlyCosts += intake.ongoingServices.analyticsPrice || 0;
    monthlyCosts += intake.ongoingServices.securityMonitoringPrice || 0;
    monthlyCosts += intake.ongoingServices.backupsPrice || 0;
    monthlyCosts += intake.ongoingServices.prioritySupportPrice || 0;

    // Apply timeline multiplier to one-time costs only
    const oneTimeWithMultiplier = oneTimeCosts * intake.timeline.multiplier;
    const grandTotal = oneTimeWithMultiplier + (monthlyCosts * 12) + annualCosts;

    return {
      oneTime: oneTimeWithMultiplier,
      monthly: monthlyCosts,
      annual: annualCosts,
      grandTotal,
    };
  };

  const costs = calculateCosts();

  const getSelectedFeatures = () => {
    const features: { category: string; items: string[] }[] = [];

    // Base Type
    if (intake.baseType.type) {
      const typeNames: Record<string, string> = {
        landing: 'Single Page / Landing Page',
        brochure: 'Multi-page Brochure (3-5 pages)',
        business: 'Multi-page Business (6-10 pages)',
        ecommerce: 'E-commerce',
        webapp: 'Web Application / SaaS MVP',
      };
      features.push({
        category: 'Base Site Type',
        items: [`${typeNames[intake.baseType.type]} - $${intake.baseType.basePrice.toLocaleString()}`],
      });
    }

    // Design & Branding
    const design: string[] = [];
    if (intake.design.customDesign !== 'none') design.push(`Custom Design (${intake.design.customDesign})`);
    if (intake.design.premiumDesign !== 'none') design.push(`Premium Design (${intake.design.premiumDesign})`);
    if (intake.design.logoDesign) design.push('Logo Design');
    if (intake.design.brandIdentity) design.push('Full Brand Identity');
    if (intake.design.customIllustrations > 0) design.push(`Custom Illustrations (${intake.design.customIllustrations} sets)`);
    if (intake.design.darkModeToggle) design.push('Dark Mode Toggle');
    if (design.length > 0) features.push({ category: 'Design & Branding', items: design });

    // Content Creation
    const content: string[] = [];
    if (intake.content.stockImagery !== 'none') content.push(`Stock Imagery (${intake.content.stockImagery})`);
    if (intake.content.copywriting.perPage > 0) content.push(`Copywriting (${intake.content.copywriting.perPage} pages)`);
    if (intake.content.copywriting.fullSite5Pages) content.push('Full Site Copywriting (5 pages)');
    if (intake.content.copywriting.fullSite10Pages) content.push('Full Site Copywriting (10 pages)');
    if (intake.content.copywriting.seoOptimized > 0) content.push(`SEO Copywriting (${intake.content.copywriting.seoOptimized} pages)`);
    if (intake.content.copywriting.blogPosts > 0) content.push(`Blog Posts (${intake.content.copywriting.blogPosts})`);
    if (intake.content.videoEditing > 0) content.push(`Video Editing (${intake.content.videoEditing} videos)`);
    if (content.length > 0) features.push({ category: 'Content Creation', items: content });

    // Pages & Sections
    const pages: string[] = [];
    if (intake.pages.additionalPages.length > 0) pages.push(`Additional Pages (${intake.pages.additionalPages.length})`);
    if (intake.pages.heroSections > 0) pages.push(`Custom Hero Sections (${intake.pages.heroSections})`);
    if (intake.pages.aboutTeamSection) pages.push('About/Team Section');
    if (intake.pages.servicesSection) pages.push('Services/Features Section');
    if (intake.pages.portfolio !== 'none') pages.push('Portfolio/Gallery');
    if (intake.pages.testimonials !== 'none') pages.push('Testimonials Section');
    if (intake.pages.faqSection !== 'none') pages.push('FAQ Section');
    if (intake.pages.caseStudies > 0) pages.push(`Case Studies (${intake.pages.caseStudies})`);
    if (intake.pages.pricingTable !== 'none') pages.push('Pricing Table');
    if (intake.pages.blogSection !== 'none') pages.push('Blog/News Section');
    if (intake.pages.careersPage !== 'none') pages.push('Careers/Job Listings');
    if (pages.length > 0) features.push({ category: 'Pages & Sections', items: pages });

    // Forms
    const forms: string[] = [];
    if (intake.forms.advancedMultiStep) forms.push('Advanced Multi-Step Form');
    if (intake.forms.quoteCalculator) forms.push('Quote Request Calculator');
    if (intake.forms.fileUpload) forms.push('File Upload Form');
    if (intake.forms.newsletter) forms.push('Newsletter Signup');
    if (intake.forms.popupModal) forms.push('Popup/Modal Lead Capture');
    if (intake.forms.exitIntent) forms.push('Exit-Intent Popup');
    if (forms.length > 0) features.push({ category: 'Forms & Lead Capture', items: forms });

    // Booking
    const booking: string[] = [];
    if (intake.booking.calendlyEmbed) booking.push('Calendly/Cal.com Embed');
    if (intake.booking.customBooking) booking.push('Custom Booking System');
    if (intake.booking.appointmentDashboard) booking.push('Appointment Dashboard');
    if (intake.booking.automatedReminders) booking.push('Automated Reminders');
    if (booking.length > 0) features.push({ category: 'Booking & Scheduling', items: booking });

    // E-commerce
    const ecommerce: string[] = [];
    if (intake.ecommerce.productCatalogSize !== '0') ecommerce.push(`Product Catalog (${intake.ecommerce.productCatalogSize})`);
    if (intake.ecommerce.paymentProcessing) ecommerce.push('Payment Processing');
    if (intake.ecommerce.subscriptionBilling) ecommerce.push('Subscription Billing');
    if (intake.ecommerce.customerAccounts) ecommerce.push('Customer Accounts');
    if (intake.ecommerce.inventoryManagement) ecommerce.push('Inventory Management');
    if (intake.ecommerce.discountCodes) ecommerce.push('Discount Codes');
    if (intake.ecommerce.shippingCalculator) ecommerce.push('Shipping Calculator');
    if (intake.ecommerce.taxAutomation) ecommerce.push('Tax Automation');
    if (intake.ecommerce.multiCurrency) ecommerce.push('Multi-Currency Support');
    if (intake.ecommerce.productReviews) ecommerce.push('Product Reviews');
    if (intake.ecommerce.wishlist) ecommerce.push('Wishlist');
    if (intake.ecommerce.abandonedCart) ecommerce.push('Abandoned Cart Recovery');
    if (ecommerce.length > 0) features.push({ category: 'E-Commerce', items: ecommerce });

    // User Systems
    const userSystems: string[] = [];
    if (intake.userSystems.authentication) userSystems.push('User Authentication');
    if (intake.userSystems.socialLogin) userSystems.push('Social Login');
    if (intake.userSystems.userDashboard) userSystems.push('User Dashboard');
    if (intake.userSystems.userProfiles) userSystems.push('User Profiles');
    if (intake.userSystems.roleBasedAccess) userSystems.push('Role-Based Access');
    if (intake.userSystems.memberContent) userSystems.push('Member-Only Content');
    if (intake.userSystems.subscriptionGating) userSystems.push('Subscription Gating');
    if (userSystems.length > 0) features.push({ category: 'User Systems', items: userSystems });

    // Integrations
    const integrations: string[] = [];
    if (intake.integrations.googleAnalytics) integrations.push('Google Analytics 4');
    if (intake.integrations.googleTagManager) integrations.push('Google Tag Manager');
    if (intake.integrations.metaPixel) integrations.push('Meta Pixel');
    if (intake.integrations.googleMaps) integrations.push('Google Maps');
    if (intake.integrations.emailMarketing) integrations.push(`Email Marketing (${intake.integrations.emailMarketingService || 'TBD'})`);
    if (intake.integrations.crmIntegration) integrations.push(`CRM Integration (${intake.integrations.crmService || 'TBD'})`);
    if (intake.integrations.socialMediaFeeds) integrations.push('Social Media Feeds');
    if (intake.integrations.liveChatWidget) integrations.push(`Live Chat (${intake.integrations.liveChatService || 'TBD'})`);
    if (intake.integrations.zapierWorkflows > 0) integrations.push(`Zapier Workflows (${intake.integrations.zapierWorkflows})`);
    if (intake.integrations.customApiIntegrations > 0) integrations.push(`Custom API Integrations (${intake.integrations.customApiIntegrations})`);
    if (intake.integrations.accountingSoftware) integrations.push(`Accounting Software (${intake.integrations.accountingService || 'TBD'})`);
    if (integrations.length > 0) features.push({ category: 'Integrations', items: integrations });

    // SEO & Performance
    const seo: string[] = [];
    if (intake.seo.basicSEO) seo.push('Basic SEO Setup');
    if (intake.seo.advancedSEO) seo.push('Advanced SEO');
    if (intake.seo.coreWebVitals) seo.push('Core Web Vitals Optimization');
    if (intake.seo.imageOptimization) seo.push('Image Optimization & CDN');
    if (intake.seo.pageSpeedOptimization) seo.push('Page Speed Optimization');
    if (seo.length > 0) features.push({ category: 'SEO & Performance', items: seo });

    // CMS
    const cms: string[] = [];
    if (intake.cms.cmsSetup) cms.push('CMS Setup');
    if (intake.cms.customAdminDashboard) cms.push('Custom Admin Dashboard');
    if (intake.cms.trainingDocumentation) cms.push('Training Documentation');
    if (intake.cms.videoTraining) cms.push('Video Training');
    if (cms.length > 0) features.push({ category: 'Content Management', items: cms });

    // Security & Legal
    const security: string[] = [];
    if (intake.security.sslCertificate) security.push('SSL Certificate');
    if (intake.security.gdprCompliance !== 'none') security.push(`GDPR/CCPA Compliance (${intake.security.gdprCompliance})`);
    if (intake.security.cookieBanner !== 'none') security.push(`Cookie Banner (${intake.security.cookieBanner})`);
    if (intake.security.termsOfService !== 'none') security.push(`Terms of Service (${intake.security.termsOfService})`);
    if (intake.security.privacyPolicy !== 'none') security.push(`Privacy Policy (${intake.security.privacyPolicy})`);
    if (intake.security.securityHardening) security.push('Security Hardening');
    if (intake.security.twoFactorAuth) security.push('Two-Factor Authentication');
    if (security.length > 0) features.push({ category: 'Security & Legal', items: security });

    // Ongoing Services
    const ongoing: string[] = [];
    if (intake.ongoingServices.domainRegistration) ongoing.push('Domain Registration ($25/year)');
    if (intake.ongoingServices.hostingSetup) ongoing.push('Hosting Setup ($200 one-time)');
    if (intake.ongoingServices.hostingManagement) ongoing.push('Hosting Management ($50/month)');
    if (intake.ongoingServices.maintenanceRetainer !== 'none') {
      const price = intake.ongoingServices.maintenanceRetainer === 'basic' ? '$200' : '$500';
      ongoing.push(`Maintenance Retainer - ${intake.ongoingServices.maintenanceRetainer} (${price}/month)`);
    }
    if (intake.ongoingServices.contentUpdates) ongoing.push('Content Updates ($75/hour)');
    if (intake.ongoingServices.monthlyAnalytics) ongoing.push('Monthly Analytics Report ($150/month)');
    if (intake.ongoingServices.securityMonitoring) ongoing.push('Security Monitoring ($100/month)');
    if (intake.ongoingServices.dailyBackups) ongoing.push('Daily Backups ($50/month)');
    if (intake.ongoingServices.prioritySupport) ongoing.push('Priority Support ($300/month)');
    if (ongoing.length > 0) features.push({ category: 'Ongoing Services', items: ongoing });

    return features;
  };

  const selectedFeatures = getSelectedFeatures();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Review Your Project
        </h3>
        <p className="text-blue-200">
          Review all selected features and pricing before submitting.
        </p>
      </div>

      {/* Pricing Summary */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30">
        <h4 className="text-lg font-semibold text-white mb-4">Project Investment</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 rounded-lg bg-white/10">
            <div className="text-sm text-blue-200 mb-1">One-Time Project Cost</div>
            <div className="text-3xl font-bold text-white">
              ${costs.oneTime.toLocaleString()}
            </div>
            {intake.timeline.multiplier > 1.0 && (
              <div className="text-xs text-blue-300 mt-1">
                Includes {intake.timeline.multiplier}x {intake.timeline.deliverySpeed} delivery
              </div>
            )}
          </div>

          {costs.monthly > 0 && (
            <div className="p-4 rounded-lg bg-white/10">
              <div className="text-sm text-blue-200 mb-1">Monthly Recurring</div>
              <div className="text-3xl font-bold text-blue-300">
                ${costs.monthly.toLocaleString()}/mo
              </div>
              <div className="text-xs text-blue-300 mt-1">
                ${(costs.monthly * 12).toLocaleString()}/year
              </div>
            </div>
          )}
        </div>

        {costs.annual > 0 && (
          <div className="p-4 rounded-lg bg-white/10 mb-4">
            <div className="text-sm text-blue-200 mb-1">Annual Costs</div>
            <div className="text-2xl font-bold text-purple-300">
              ${costs.annual.toLocaleString()}/year
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-white/20">
          <div className="flex justify-between items-center">
            <span className="text-white font-medium">Total First Year Investment:</span>
            <span className="text-3xl font-bold text-purple-300">
              ${costs.grandTotal.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Selected Features */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Selected Features</h4>

        {selectedFeatures.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-4 rounded-lg bg-white/5 border border-white/10"
          >
            <h5 className="text-white font-medium mb-2">{section.category}</h5>
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-blue-200 flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Client Info */}
      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
        <h5 className="text-white font-medium mb-3">Contact Information</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-blue-200">Name:</span>
            <span className="text-white ml-2">{intake.clientInfo.name}</span>
          </div>
          <div>
            <span className="text-blue-200">Email:</span>
            <span className="text-white ml-2">{intake.clientInfo.email}</span>
          </div>
          <div>
            <span className="text-blue-200">Phone:</span>
            <span className="text-white ml-2">{intake.clientInfo.phone}</span>
          </div>
          {intake.clientInfo.companyName && (
            <div>
              <span className="text-blue-200">Company:</span>
              <span className="text-white ml-2">{intake.clientInfo.companyName}</span>
            </div>
          )}
        </div>
      </div>

      {/* Project Description */}
      {intake.projectDescription.businessDescription && (
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <h5 className="text-white font-medium mb-3">Project Details</h5>
          <div className="space-y-3 text-sm">
            <div>
              <div className="text-blue-300 font-medium mb-1">Business Description:</div>
              <div className="text-blue-200">{intake.projectDescription.businessDescription}</div>
            </div>
            <div>
              <div className="text-blue-300 font-medium mb-1">Target Audience:</div>
              <div className="text-blue-200">{intake.projectDescription.targetAudience}</div>
            </div>
            <div>
              <div className="text-blue-300 font-medium mb-1">Main Goals:</div>
              <div className="text-blue-200">{intake.projectDescription.mainGoals}</div>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-400/30">
        <p className="text-sm text-blue-200">
          <strong className="text-white">Ready to submit?</strong> Once you submit this intake form, we'll review
          your project details and get back to you within 1-2 business days with next steps.
        </p>
      </div>
    </div>
  );
}
