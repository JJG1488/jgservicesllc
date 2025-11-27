'use client';

import { ProjectIntake } from '@/types/intake';
import { motion } from 'framer-motion';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

const cmsFeatures = [
  {
    key: 'cmsSetup' as const,
    priceKey: 'cmsPrice' as const,
    name: 'CMS Setup',
    price: 500,
    description: 'Content Management System so you can edit your site content yourself',
    details: 'Edit text, images, and basic content without coding knowledge',
  },
  {
    key: 'customAdminDashboard' as const,
    priceKey: 'adminDashboardPrice' as const,
    name: 'Custom Admin Dashboard',
    price: 2000,
    description: 'Full-featured custom admin panel with advanced content management',
    details: 'Manage users, analytics, custom data, and complex workflows',
  },
  {
    key: 'trainingDocumentation' as const,
    priceKey: 'trainingDocsPrice' as const,
    name: 'Training Documentation',
    price: 300,
    description: 'Written guides and documentation for managing your site',
    details: 'Step-by-step instructions with screenshots',
  },
  {
    key: 'videoTraining' as const,
    priceKey: 'videoTrainingPrice' as const,
    name: 'Video Training Walkthrough',
    price: 400,
    description: 'Screen-recorded video tutorials showing how to use your CMS',
    details: 'Personalized training videos for your specific site',
  },
];

export default function CMSStep({ intake, onUpdate }: StepProps) {
  const toggleFeature = (key: keyof ProjectIntake['cms'], priceKey: keyof ProjectIntake['cms'], price: number) => {
    onUpdate((prev) => ({
      ...prev,
      cms: {
        ...prev.cms,
        [key]: !prev.cms[key],
        [priceKey]: !prev.cms[key] ? price : 0,
      },
    }));
  };

  const selectedCount = cmsFeatures.filter(
    (feature) => intake.cms[feature.key]
  ).length;

  const totalCost = cmsFeatures.reduce((sum, feature) => {
    return sum + (intake.cms[feature.priceKey] || 0);
  }, 0);

  const hasCMS = intake.cms.cmsSetup || intake.cms.customAdminDashboard;
  const hasTraining = intake.cms.trainingDocumentation || intake.cms.videoTraining;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Content Management System
        </h3>
        <p className="text-blue-200">
          Give yourself the power to update and manage your website content independently.
        </p>
      </div>

      {selectedCount > 0 && (
        <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-400/30">
          <div className="flex justify-between items-center">
            <div className="text-sm text-blue-200">
              {selectedCount} feature{selectedCount !== 1 ? 's' : ''} selected
            </div>
            <div className="text-lg font-semibold text-blue-300">
              +${totalCost.toLocaleString()}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {/* CMS Options */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Content Management
          </h4>

          {cmsFeatures.slice(0, 2).map((feature) => {
            const isSelected = intake.cms[feature.key];

            return (
              <motion.button
                key={feature.key}
                onClick={() => toggleFeature(feature.key, feature.priceKey, feature.price)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                  isSelected
                    ? 'border-blue-400 bg-blue-500/20'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-blue-400 border-blue-400'
                          : 'border-white/30'
                      }`}
                    >
                      {isSelected && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-1">
                        {feature.name}
                      </h4>
                      <p className="text-sm text-blue-200 mb-2">
                        {feature.description}
                      </p>
                      <p className="text-xs text-blue-300">
                        {feature.details}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-lg font-bold text-blue-300">
                      +${feature.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}

          {!hasCMS && (
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-400/30">
              <p className="text-sm text-amber-200">
                Without a CMS, you'll need to contact your developer for all content updates.
              </p>
            </div>
          )}
        </div>

        {/* Training Options */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Training & Documentation
          </h4>

          {cmsFeatures.slice(2).map((feature) => {
            const isSelected = intake.cms[feature.key];

            return (
              <motion.button
                key={feature.key}
                onClick={() => toggleFeature(feature.key, feature.priceKey, feature.price)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                  isSelected
                    ? 'border-blue-400 bg-blue-500/20'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-blue-400 border-blue-400'
                          : 'border-white/30'
                      }`}
                    >
                      {isSelected && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-1">
                        {feature.name}
                      </h4>
                      <p className="text-sm text-blue-200 mb-2">
                        {feature.description}
                      </p>
                      <p className="text-xs text-blue-300">
                        {feature.details}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-lg font-bold text-blue-300">
                      +${feature.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}

          {hasCMS && !hasTraining && (
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-400/30">
              <p className="text-sm text-blue-200">
                <strong className="text-white">Tip:</strong> Training helps you get the most out of your CMS and reduces
                support requests.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
        <h5 className="text-white font-medium mb-2">What's included in the CMS?</h5>
        <ul className="space-y-1 text-sm text-blue-200">
          <li>• Edit text content, images, and media</li>
          <li>• Add/edit/delete pages and blog posts</li>
          <li>• Update product information (for e-commerce)</li>
          <li>• User-friendly interface, no coding required</li>
          <li>• Role-based permissions (if you add user systems)</li>
        </ul>
      </div>
    </div>
  );
}
