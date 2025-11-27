// Client Intake Types based on PRICING.md

export interface ProjectIntake {
  // Metadata
  id?: string;
  submittedAt?: any;
  status: 'draft' | 'submitted' | 'reviewed' | 'in_progress' | 'completed';

  // Client Information
  clientInfo: {
    name: string;
    email: string;
    phone: string;
    companyName?: string;
    website?: string;
  };

  // Base Site Type
  baseType: {
    type: 'landing' | 'brochure' | 'business' | 'ecommerce' | 'webapp' | '';
    basePrice: number;
  };

  // Design & Branding
  design: {
    templateBased: boolean;
    customDesign: 'none' | 'client-directs' | 'developer-decides';
    customDesignPrice: number;
    premiumDesign: 'none' | 'client-directs' | 'developer-decides';
    premiumDesignPrice: number;
    logoDesign: boolean;
    logoPrice: number;
    brandIdentity: boolean;
    brandIdentityPrice: number;
    customIllustrations: number; // number of sets
    illustrationsPrice: number;
    darkModeToggle: boolean;
    darkModePrice: number;
    responsiveDesign: boolean; // always included
  };

  // Content Creation
  content: {
    providedBy: 'client' | 'developer' | 'mixed';
    stockImagery: 'none' | 'basic' | 'premium';
    stockImageryPrice: number;
    copywriting: {
      perPage: number;
      fullSite5Pages: boolean;
      fullSite10Pages: boolean;
      seoOptimized: number; // number of SEO-optimized pages
      blogPosts: number;
    };
    copywritingPrice: number;
    videoEditing: number; // number of videos
    videoEditingPrice: number;
    contentNotes: string; // Text input for content ideas/requirements
  };

  // Pages & Sections
  pages: {
    additionalPages: Array<{
      name: string;
      contentBy: 'client' | 'developer';
      price: number;
    }>;
    heroSections: number;
    heroPrice: number;
    aboutTeamSection: boolean;
    aboutPrice: number;
    servicesSection: boolean;
    servicesPrice: number;
    portfolio: 'none' | 'client-content' | 'developer-content';
    portfolioPrice: number;
    testimonials: 'none' | 'client-content' | 'developer-content';
    testimonialsPrice: number;
    faqSection: 'none' | 'client-content' | 'developer-content';
    faqPrice: number;
    caseStudies: number;
    caseStudiesPrice: number;
    pricingTable: 'none' | 'client-content' | 'developer-content';
    pricingTablePrice: number;
    blogSection: 'none' | 'client-content' | 'developer-content';
    blogPrice: number;
    careersPage: 'none' | 'client-content' | 'developer-content';
    careersPrice: number;
    sectionsNotes: string; // Text input for section ideas
  };

  // Forms & Lead Capture
  forms: {
    basicContact: boolean; // always included
    advancedMultiStep: boolean;
    multiStepPrice: number;
    quoteCalculator: boolean;
    calculatorPrice: number;
    fileUpload: boolean;
    fileUploadPrice: number;
    newsletter: boolean;
    newsletterPrice: number;
    popupModal: boolean;
    popupPrice: number;
    exitIntent: boolean;
    exitIntentPrice: number;
  };

  // Booking & Scheduling
  booking: {
    calendlyEmbed: boolean;
    calendlyPrice: number;
    customBooking: boolean;
    customBookingPrice: number;
    appointmentDashboard: boolean;
    dashboardPrice: number;
    automatedReminders: boolean;
    remindersPrice: number;
  };

  // E-Commerce
  ecommerce: {
    enabled: boolean;
    productCatalogSize: '0' | '1-25' | '26-100' | '100+';
    catalogPrice: number;
    shoppingCart: boolean; // included with ecommerce
    paymentProcessing: boolean;
    paymentPrice: number;
    subscriptionBilling: boolean;
    subscriptionPrice: number;
    customerAccounts: boolean;
    accountsPrice: number;
    inventoryManagement: boolean;
    inventoryPrice: number;
    discountCodes: boolean;
    discountPrice: number;
    shippingCalculator: boolean;
    shippingPrice: number;
    taxAutomation: boolean;
    taxPrice: number;
    multiCurrency: boolean;
    currencyPrice: number;
    productReviews: boolean;
    reviewsPrice: number;
    wishlist: boolean;
    wishlistPrice: number;
    abandonedCart: boolean;
    abandonedCartPrice: number;
    ecommerceNotes: string; // Product descriptions, categories, etc.
  };

  // User Systems
  userSystems: {
    authentication: boolean;
    authPrice: number;
    socialLogin: boolean;
    socialLoginPrice: number;
    userDashboard: boolean;
    dashboardPrice: number;
    userProfiles: boolean;
    profilesPrice: number;
    roleBasedAccess: boolean;
    rolesPrice: number;
    memberContent: boolean;
    memberContentPrice: number;
    subscriptionGating: boolean;
    subscriptionPrice: number;
  };

  // Integrations
  integrations: {
    googleAnalytics: boolean;
    analyticsPrice: number;
    googleTagManager: boolean;
    tagManagerPrice: number;
    metaPixel: boolean;
    metaPixelPrice: number;
    googleMaps: boolean;
    mapsPrice: number;
    emailMarketing: boolean;
    emailMarketingService?: string; // Mailchimp, ConvertKit, etc.
    emailMarketingPrice: number;
    crmIntegration: boolean;
    crmService?: string; // HubSpot, Salesforce, etc.
    crmPrice: number;
    socialMediaFeeds: boolean;
    socialFeedsPrice: number;
    liveChatWidget: boolean;
    liveChatService?: string;
    liveChatPrice: number;
    zapierWorkflows: number;
    zapierPrice: number;
    customApiIntegrations: number;
    customApiPrice: number;
    accountingSoftware: boolean;
    accountingService?: string;
    accountingPrice: number;
  };

  // SEO & Performance
  seo: {
    basicSEO: boolean;
    basicSEOPrice: number;
    advancedSEO: boolean;
    advancedSEOPrice: number;
    coreWebVitals: boolean;
    coreWebVitalsPrice: number;
    imageOptimization: boolean;
    imageOptimizationPrice: number;
    pageSpeedOptimization: boolean;
    pageSpeedPrice: number;
    seoNotes: string; // Keywords, target audience, etc.
  };

  // Content Management
  cms: {
    cmsSetup: boolean;
    cmsPrice: number;
    customAdminDashboard: boolean;
    adminDashboardPrice: number;
    trainingDocumentation: boolean;
    trainingDocsPrice: number;
    videoTraining: boolean;
    videoTrainingPrice: number;
  };

  // Security & Legal
  security: {
    sslCertificate: boolean;
    sslPrice: number;
    gdprCompliance: 'none' | 'client-content' | 'developer-content';
    gdprPrice: number;
    cookieBanner: 'none' | 'client-content' | 'developer-content';
    cookieBannerPrice: number;
    termsOfService: 'none' | 'client-content' | 'developer-content';
    termsPrice: number;
    privacyPolicy: 'none' | 'client-content' | 'developer-content';
    privacyPolicyPrice: number;
    securityHardening: boolean;
    securityPrice: number;
    twoFactorAuth: boolean;
    twoFactorPrice: number;
  };

  // Ongoing Services
  ongoingServices: {
    domainRegistration: boolean;
    domainPrice: number; // annual
    hostingSetup: boolean;
    hostingSetupPrice: number;
    hostingManagement: boolean;
    hostingManagementPrice: number; // monthly
    maintenanceRetainer: 'none' | 'basic' | 'priority';
    maintenancePrice: number; // monthly
    contentUpdates: boolean;
    contentUpdatesHourlyRate: number;
    monthlyAnalytics: boolean;
    analyticsPrice: number; // monthly
    securityMonitoring: boolean;
    securityMonitoringPrice: number; // monthly
    dailyBackups: boolean;
    backupsPrice: number; // monthly
    prioritySupport: boolean;
    prioritySupportPrice: number; // monthly
  };

  // Timeline
  timeline: {
    deliverySpeed: 'standard' | 'expedited' | 'rush';
    multiplier: number;
  };

  // Project Description
  projectDescription: {
    businessDescription: string;
    targetAudience: string;
    mainGoals: string;
    competitors?: string;
    brandPersonality?: string;
    inspirationSites?: string;
    additionalNotes?: string;
  };

  // Calculated totals
  pricing: {
    subtotal: number;
    timelineMultiplier: number;
    total: number;
    oneTimeTotal: number;
    monthlyTotal: number;
    annualTotal: number;
  };
}

// Helper function to create empty intake
export const createEmptyIntake = (): ProjectIntake => ({
  status: 'draft',
  clientInfo: {
    name: '',
    email: '',
    phone: '',
  },
  baseType: {
    type: '',
    basePrice: 0,
  },
  design: {
    templateBased: true,
    customDesign: 'none',
    customDesignPrice: 0,
    premiumDesign: 'none',
    premiumDesignPrice: 0,
    logoDesign: false,
    logoPrice: 0,
    brandIdentity: false,
    brandIdentityPrice: 0,
    customIllustrations: 0,
    illustrationsPrice: 0,
    darkModeToggle: false,
    darkModePrice: 0,
    responsiveDesign: true,
  },
  content: {
    providedBy: 'client',
    stockImagery: 'none',
    stockImageryPrice: 0,
    copywriting: {
      perPage: 0,
      fullSite5Pages: false,
      fullSite10Pages: false,
      seoOptimized: 0,
      blogPosts: 0,
    },
    copywritingPrice: 0,
    videoEditing: 0,
    videoEditingPrice: 0,
    contentNotes: '',
  },
  pages: {
    additionalPages: [],
    heroSections: 0,
    heroPrice: 0,
    aboutTeamSection: false,
    aboutPrice: 0,
    servicesSection: false,
    servicesPrice: 0,
    portfolio: 'none',
    portfolioPrice: 0,
    testimonials: 'none',
    testimonialsPrice: 0,
    faqSection: 'none',
    faqPrice: 0,
    caseStudies: 0,
    caseStudiesPrice: 0,
    pricingTable: 'none',
    pricingTablePrice: 0,
    blogSection: 'none',
    blogPrice: 0,
    careersPage: 'none',
    careersPrice: 0,
    sectionsNotes: '',
  },
  forms: {
    basicContact: true,
    advancedMultiStep: false,
    multiStepPrice: 0,
    quoteCalculator: false,
    calculatorPrice: 0,
    fileUpload: false,
    fileUploadPrice: 0,
    newsletter: false,
    newsletterPrice: 0,
    popupModal: false,
    popupPrice: 0,
    exitIntent: false,
    exitIntentPrice: 0,
  },
  booking: {
    calendlyEmbed: false,
    calendlyPrice: 0,
    customBooking: false,
    customBookingPrice: 0,
    appointmentDashboard: false,
    dashboardPrice: 0,
    automatedReminders: false,
    remindersPrice: 0,
  },
  ecommerce: {
    enabled: false,
    productCatalogSize: '0',
    catalogPrice: 0,
    shoppingCart: false,
    paymentProcessing: false,
    paymentPrice: 0,
    subscriptionBilling: false,
    subscriptionPrice: 0,
    customerAccounts: false,
    accountsPrice: 0,
    inventoryManagement: false,
    inventoryPrice: 0,
    discountCodes: false,
    discountPrice: 0,
    shippingCalculator: false,
    shippingPrice: 0,
    taxAutomation: false,
    taxPrice: 0,
    multiCurrency: false,
    currencyPrice: 0,
    productReviews: false,
    reviewsPrice: 0,
    wishlist: false,
    wishlistPrice: 0,
    abandonedCart: false,
    abandonedCartPrice: 0,
    ecommerceNotes: '',
  },
  userSystems: {
    authentication: false,
    authPrice: 0,
    socialLogin: false,
    socialLoginPrice: 0,
    userDashboard: false,
    dashboardPrice: 0,
    userProfiles: false,
    profilesPrice: 0,
    roleBasedAccess: false,
    rolesPrice: 0,
    memberContent: false,
    memberContentPrice: 0,
    subscriptionGating: false,
    subscriptionPrice: 0,
  },
  integrations: {
    googleAnalytics: false,
    analyticsPrice: 0,
    googleTagManager: false,
    tagManagerPrice: 0,
    metaPixel: false,
    metaPixelPrice: 0,
    googleMaps: false,
    mapsPrice: 0,
    emailMarketing: false,
    emailMarketingPrice: 0,
    crmIntegration: false,
    crmPrice: 0,
    socialMediaFeeds: false,
    socialFeedsPrice: 0,
    liveChatWidget: false,
    liveChatPrice: 0,
    zapierWorkflows: 0,
    zapierPrice: 0,
    customApiIntegrations: 0,
    customApiPrice: 0,
    accountingSoftware: false,
    accountingPrice: 0,
  },
  seo: {
    basicSEO: false,
    basicSEOPrice: 0,
    advancedSEO: false,
    advancedSEOPrice: 0,
    coreWebVitals: false,
    coreWebVitalsPrice: 0,
    imageOptimization: false,
    imageOptimizationPrice: 0,
    pageSpeedOptimization: false,
    pageSpeedPrice: 0,
    seoNotes: '',
  },
  cms: {
    cmsSetup: false,
    cmsPrice: 0,
    customAdminDashboard: false,
    adminDashboardPrice: 0,
    trainingDocumentation: false,
    trainingDocsPrice: 0,
    videoTraining: false,
    videoTrainingPrice: 0,
  },
  security: {
    sslCertificate: false,
    sslPrice: 0,
    gdprCompliance: 'none',
    gdprPrice: 0,
    cookieBanner: 'none',
    cookieBannerPrice: 0,
    termsOfService: 'none',
    termsPrice: 0,
    privacyPolicy: 'none',
    privacyPolicyPrice: 0,
    securityHardening: false,
    securityPrice: 0,
    twoFactorAuth: false,
    twoFactorPrice: 0,
  },
  ongoingServices: {
    domainRegistration: false,
    domainPrice: 0,
    hostingSetup: false,
    hostingSetupPrice: 0,
    hostingManagement: false,
    hostingManagementPrice: 0,
    maintenanceRetainer: 'none',
    maintenancePrice: 0,
    contentUpdates: false,
    contentUpdatesHourlyRate: 75,
    monthlyAnalytics: false,
    analyticsPrice: 0,
    securityMonitoring: false,
    securityMonitoringPrice: 0,
    dailyBackups: false,
    backupsPrice: 0,
    prioritySupport: false,
    prioritySupportPrice: 0,
  },
  timeline: {
    deliverySpeed: 'standard',
    multiplier: 1.0,
  },
  projectDescription: {
    businessDescription: '',
    targetAudience: '',
    mainGoals: '',
  },
  pricing: {
    subtotal: 0,
    timelineMultiplier: 1.0,
    total: 0,
    oneTimeTotal: 0,
    monthlyTotal: 0,
    annualTotal: 0,
  },
});
