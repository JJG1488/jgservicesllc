'use client';

import { ProjectIntake } from '@/types/intake';
import { motion } from 'framer-motion';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

const deliveryOptions = [
  {
    speed: 'standard' as const,
    name: 'Standard Delivery',
    timeline: '4-8 weeks',
    multiplier: 1.0,
    description: 'Normal development timeline with standard priority',
    features: [
      'Regular communication',
      'Standard turnaround',
      'Quality assured',
      'No rush charges',
    ],
  },
  {
    speed: 'expedited' as const,
    name: 'Expedited Delivery',
    timeline: '2-3 weeks',
    multiplier: 1.5,
    description: 'Faster delivery with elevated priority',
    features: [
      'Higher priority',
      'Faster turnaround',
      'More frequent updates',
      '+50% total cost',
    ],
  },
  {
    speed: 'rush' as const,
    name: 'Rush Delivery',
    timeline: 'Under 2 weeks',
    multiplier: 2.0,
    description: 'Maximum priority for urgent projects',
    features: [
      'Top priority',
      'Immediate start',
      'Daily updates',
      '+100% total cost',
    ],
  },
];

export default function TimelineStep({ intake, onUpdate }: StepProps) {
  const selectSpeed = (speed: 'standard' | 'expedited' | 'rush', multiplier: number) => {
    onUpdate((prev) => ({
      ...prev,
      timeline: {
        deliverySpeed: speed,
        multiplier: multiplier,
      },
    }));
  };

  // Calculate estimated base cost (without timeline multiplier)
  const calculateBaseCost = () => {
    let total = intake.baseType.basePrice;

    // Add all feature costs
    total += intake.design.customDesignPrice || 0;
    total += intake.design.premiumDesignPrice || 0;
    total += intake.design.logoPrice || 0;
    total += intake.design.brandIdentityPrice || 0;
    total += intake.design.illustrationsPrice || 0;
    total += intake.design.darkModePrice || 0;

    total += intake.content.stockImageryPrice || 0;
    total += intake.content.copywritingPrice || 0;
    total += intake.content.videoEditingPrice || 0;

    total += intake.pages.heroPrice || 0;
    total += intake.pages.aboutPrice || 0;
    total += intake.pages.servicesPrice || 0;
    total += intake.pages.portfolioPrice || 0;
    total += intake.pages.testimonialsPrice || 0;
    total += intake.pages.faqPrice || 0;
    total += intake.pages.caseStudiesPrice || 0;
    total += intake.pages.pricingTablePrice || 0;
    total += intake.pages.blogPrice || 0;
    total += intake.pages.careersPrice || 0;
    total += intake.pages.additionalPages.reduce((sum, page) => sum + page.price, 0);

    total += intake.forms.multiStepPrice || 0;
    total += intake.forms.calculatorPrice || 0;
    total += intake.forms.fileUploadPrice || 0;
    total += intake.forms.newsletterPrice || 0;
    total += intake.forms.popupPrice || 0;
    total += intake.forms.exitIntentPrice || 0;

    total += intake.booking.calendlyPrice || 0;
    total += intake.booking.customBookingPrice || 0;
    total += intake.booking.dashboardPrice || 0;
    total += intake.booking.remindersPrice || 0;

    total += intake.ecommerce.catalogPrice || 0;
    total += intake.ecommerce.paymentPrice || 0;
    total += intake.ecommerce.subscriptionPrice || 0;
    total += intake.ecommerce.accountsPrice || 0;
    total += intake.ecommerce.inventoryPrice || 0;
    total += intake.ecommerce.discountPrice || 0;
    total += intake.ecommerce.shippingPrice || 0;
    total += intake.ecommerce.taxPrice || 0;
    total += intake.ecommerce.currencyPrice || 0;
    total += intake.ecommerce.reviewsPrice || 0;
    total += intake.ecommerce.wishlistPrice || 0;
    total += intake.ecommerce.abandonedCartPrice || 0;

    total += intake.userSystems.authPrice || 0;
    total += intake.userSystems.socialLoginPrice || 0;
    total += intake.userSystems.dashboardPrice || 0;
    total += intake.userSystems.profilesPrice || 0;
    total += intake.userSystems.rolesPrice || 0;
    total += intake.userSystems.memberContentPrice || 0;
    total += intake.userSystems.subscriptionPrice || 0;

    total += intake.integrations.analyticsPrice || 0;
    total += intake.integrations.tagManagerPrice || 0;
    total += intake.integrations.metaPixelPrice || 0;
    total += intake.integrations.mapsPrice || 0;
    total += intake.integrations.emailMarketingPrice || 0;
    total += intake.integrations.crmPrice || 0;
    total += intake.integrations.socialFeedsPrice || 0;
    total += intake.integrations.liveChatPrice || 0;
    total += intake.integrations.zapierPrice || 0;
    total += intake.integrations.customApiPrice || 0;
    total += intake.integrations.accountingPrice || 0;

    total += intake.seo.basicSEOPrice || 0;
    total += intake.seo.advancedSEOPrice || 0;
    total += intake.seo.coreWebVitalsPrice || 0;
    total += intake.seo.imageOptimizationPrice || 0;
    total += intake.seo.pageSpeedPrice || 0;

    total += intake.cms.cmsPrice || 0;
    total += intake.cms.adminDashboardPrice || 0;
    total += intake.cms.trainingDocsPrice || 0;
    total += intake.cms.videoTrainingPrice || 0;

    total += intake.security.sslPrice || 0;
    total += intake.security.gdprPrice || 0;
    total += intake.security.cookieBannerPrice || 0;
    total += intake.security.termsPrice || 0;
    total += intake.security.privacyPolicyPrice || 0;
    total += intake.security.securityPrice || 0;
    total += intake.security.twoFactorPrice || 0;

    total += intake.ongoingServices.hostingSetupPrice || 0;

    return total;
  };

  const baseCost = calculateBaseCost();
  const finalCost = baseCost * intake.timeline.multiplier;
  const additionalCost = finalCost - baseCost;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Project Timeline
        </h3>
        <p className="text-blue-200">
          Choose your preferred delivery speed. Rush delivery requires additional resources.
        </p>
      </div>

      {baseCost > 0 && (
        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-blue-200 mb-1">Base Project Cost</div>
              <div className="text-2xl font-bold text-white">
                ${baseCost.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-blue-200 mb-1">Timeline Multiplier</div>
              <div className="text-2xl font-bold text-blue-300">
                {intake.timeline.multiplier}x
              </div>
            </div>
            <div>
              <div className="text-sm text-blue-200 mb-1">Final Project Cost</div>
              <div className="text-2xl font-bold text-purple-300">
                ${finalCost.toLocaleString()}
              </div>
            </div>
          </div>
          {additionalCost > 0 && (
            <div className="mt-3 pt-3 border-t border-white/20">
              <div className="text-sm text-blue-200">
                Rush fee: <span className="text-white font-semibold">+${additionalCost.toLocaleString()}</span>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {deliveryOptions.map((option) => {
          const isSelected = intake.timeline.deliverySpeed === option.speed;

          return (
            <motion.button
              key={option.speed}
              onClick={() => selectSpeed(option.speed, option.multiplier)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`text-left p-6 rounded-xl border-2 transition-all ${
                isSelected
                  ? 'border-blue-400 bg-blue-500/20'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? 'bg-blue-400 border-blue-400'
                          : 'border-white/30'
                      }`}
                    >
                      {isSelected && (
                        <div className="w-3 h-3 rounded-full bg-white" />
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {option.name}
                    </h4>
                  </div>
                  <p className="text-sm text-blue-200 mb-3">
                    {option.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {option.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm text-blue-300 mb-1">Timeline</div>
                  <div className="text-xl font-bold text-white mb-2">
                    {option.timeline}
                  </div>
                  {option.multiplier > 1.0 && (
                    <div className="text-lg font-semibold text-blue-300">
                      {option.multiplier}x cost
                    </div>
                  )}
                  {option.multiplier === 1.0 && (
                    <div className="text-sm text-green-300">
                      No extra charge
                    </div>
                  )}
                </div>
              </div>

              {isSelected && baseCost > 0 && (
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Your project total with this timeline:</span>
                    <span className="text-xl font-bold text-blue-300">
                      ${finalCost.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
        <h5 className="text-white font-medium mb-2">How timeline affects pricing:</h5>
        <ul className="space-y-1 text-sm text-blue-200">
          <li>• <strong className="text-white">Standard:</strong> Normal development pace, no additional cost</li>
          <li>• <strong className="text-white">Expedited:</strong> Higher priority, more resources allocated (+50%)</li>
          <li>• <strong className="text-white">Rush:</strong> Top priority, immediate start, extended hours (+100%)</li>
        </ul>
      </div>
    </div>
  );
}
