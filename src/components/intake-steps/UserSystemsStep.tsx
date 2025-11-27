'use client';

import { ProjectIntake } from '@/types/intake';
import { motion } from 'framer-motion';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

interface UserSystemFeature {
  key: keyof ProjectIntake['userSystems'];
  priceKey: keyof ProjectIntake['userSystems'];
  name: string;
  price: number;
  description: string;
}

const userSystemFeatures: UserSystemFeature[] = [
  {
    key: 'authentication',
    priceKey: 'authPrice',
    name: 'User Authentication',
    price: 800,
    description: 'Email/password login system with secure password hashing',
  },
  {
    key: 'socialLogin',
    priceKey: 'socialLoginPrice',
    name: 'Social Login',
    price: 400,
    description: 'Login with Google, Facebook, Apple, or other social providers',
  },
  {
    key: 'userDashboard',
    priceKey: 'dashboardPrice',
    name: 'User Dashboard',
    price: 1200,
    description: 'Personalized dashboard for logged-in users',
  },
  {
    key: 'userProfiles',
    priceKey: 'profilesPrice',
    name: 'User Profiles',
    price: 600,
    description: 'User profile pages with editable information',
  },
  {
    key: 'roleBasedAccess',
    priceKey: 'rolesPrice',
    name: 'Role-Based Access',
    price: 800,
    description: 'Admin, user, moderator roles with different permissions',
  },
  {
    key: 'memberContent',
    priceKey: 'memberContentPrice',
    name: 'Member-Only Content',
    price: 600,
    description: 'Restricted content areas accessible only to logged-in members',
  },
  {
    key: 'subscriptionGating',
    priceKey: 'subscriptionPrice',
    name: 'Subscription Gating',
    price: 1000,
    description: 'Content gated by subscription tier or payment status',
  },
];

export default function UserSystemsStep({ intake, onUpdate }: StepProps) {
  const toggleFeature = (key: keyof ProjectIntake['userSystems'], priceKey: keyof ProjectIntake['userSystems'], price: number) => {
    onUpdate((prev) => ({
      ...prev,
      userSystems: {
        ...prev.userSystems,
        [key]: !prev.userSystems[key],
        [priceKey]: !prev.userSystems[key] ? price : 0,
      },
    }));
  };

  const selectedCount = userSystemFeatures.filter(
    (feature) => intake.userSystems[feature.key as keyof typeof intake.userSystems]
  ).length;

  const totalCost = userSystemFeatures.reduce((sum, feature) => {
    return sum + (intake.userSystems[feature.priceKey as keyof typeof intake.userSystems] as number || 0);
  }, 0);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          User Systems
        </h3>
        <p className="text-blue-200">
          Add user authentication, accounts, and member features to your site.
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

      <div className="grid grid-cols-1 gap-4">
        {userSystemFeatures.map((feature) => {
          const isSelected = intake.userSystems[feature.key as keyof typeof intake.userSystems];

          return (
            <motion.button
              key={feature.key}
              onClick={() => toggleFeature(feature.key, feature.priceKey, feature.price)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`text-left p-5 rounded-xl border-2 transition-all ${
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
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">
                      {feature.name}
                    </h4>
                    <p className="text-sm text-blue-200">
                      {feature.description}
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
      </div>

      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
        <p className="text-sm text-blue-200">
          <strong className="text-white">Note:</strong> User systems require ongoing maintenance and security updates.
          Consider adding security monitoring and regular updates in the Ongoing Services step.
        </p>
      </div>
    </div>
  );
}
