'use client';

import { ProjectIntake } from '@/types/intake';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

export default function IntegrationsStep({ intake, onUpdate }: StepProps) {
  const toggleIntegration = (key: keyof ProjectIntake['integrations'], priceKey: keyof ProjectIntake['integrations'], price: number) => {
    onUpdate((prev) => ({
      ...prev,
      integrations: {
        ...prev.integrations,
        [key]: !prev.integrations[key],
        [priceKey]: !prev.integrations[key] ? price : 0,
      },
    }));
  };

  const updateServiceName = (key: keyof ProjectIntake['integrations'], value: string) => {
    onUpdate((prev) => ({
      ...prev,
      integrations: {
        ...prev.integrations,
        [key]: value,
      },
    }));
  };

  const updateNumber = (key: keyof ProjectIntake['integrations'], priceKey: keyof ProjectIntake['integrations'], value: number, pricePerUnit: number) => {
    onUpdate((prev) => ({
      ...prev,
      integrations: {
        ...prev.integrations,
        [key]: value,
        [priceKey]: value * pricePerUnit,
      },
    }));
  };

  const totalCost =
    (intake.integrations.analyticsPrice || 0) +
    (intake.integrations.tagManagerPrice || 0) +
    (intake.integrations.metaPixelPrice || 0) +
    (intake.integrations.mapsPrice || 0) +
    (intake.integrations.emailMarketingPrice || 0) +
    (intake.integrations.crmPrice || 0) +
    (intake.integrations.socialFeedsPrice || 0) +
    (intake.integrations.liveChatPrice || 0) +
    (intake.integrations.zapierPrice || 0) +
    (intake.integrations.customApiPrice || 0) +
    (intake.integrations.accountingPrice || 0);

  const selectedCount = [
    intake.integrations.googleAnalytics,
    intake.integrations.googleTagManager,
    intake.integrations.metaPixel,
    intake.integrations.googleMaps,
    intake.integrations.emailMarketing,
    intake.integrations.crmIntegration,
    intake.integrations.socialMediaFeeds,
    intake.integrations.liveChatWidget,
    intake.integrations.zapierWorkflows > 0,
    intake.integrations.customApiIntegrations > 0,
    intake.integrations.accountingSoftware,
  ].filter(Boolean).length;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Third-Party Integrations
        </h3>
        <p className="text-blue-200">
          Connect your website to analytics, marketing, and business tools.
        </p>
      </div>

      {selectedCount > 0 && (
        <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-400/30">
          <div className="flex justify-between items-center">
            <div className="text-sm text-blue-200">
              {selectedCount} integration{selectedCount !== 1 ? 's' : ''} selected
            </div>
            <div className="text-lg font-semibold text-blue-300">
              +${totalCost.toLocaleString()}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {/* Analytics & Tracking */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Analytics & Tracking
          </h4>

          <motion.button
            onClick={() => toggleIntegration('googleAnalytics', 'analyticsPrice', 100)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              intake.integrations.googleAnalytics
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 ${
                  intake.integrations.googleAnalytics ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.integrations.googleAnalytics && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="text-white font-medium">Google Analytics 4</div>
                  <div className="text-sm text-blue-200">Track visitor behavior and site performance</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">+$100</div>
            </div>
          </motion.button>

          <motion.button
            onClick={() => toggleIntegration('googleTagManager', 'tagManagerPrice', 150)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              intake.integrations.googleTagManager
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 ${
                  intake.integrations.googleTagManager ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.integrations.googleTagManager && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="text-white font-medium">Google Tag Manager</div>
                  <div className="text-sm text-blue-200">Manage all tracking tags in one place</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">+$150</div>
            </div>
          </motion.button>

          <motion.button
            onClick={() => toggleIntegration('metaPixel', 'metaPixelPrice', 100)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              intake.integrations.metaPixel
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 ${
                  intake.integrations.metaPixel ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.integrations.metaPixel && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="text-white font-medium">Meta Pixel (Facebook)</div>
                  <div className="text-sm text-blue-200">Track conversions for Facebook ads</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">+$100</div>
            </div>
          </motion.button>
        </div>

        {/* Maps & Location */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Maps & Location
          </h4>

          <motion.button
            onClick={() => toggleIntegration('googleMaps', 'mapsPrice', 100)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              intake.integrations.googleMaps
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 ${
                  intake.integrations.googleMaps ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.integrations.googleMaps && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="text-white font-medium">Google Maps</div>
                  <div className="text-sm text-blue-200">Embedded map with your location</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">+$100</div>
            </div>
          </motion.button>
        </div>

        {/* Marketing & CRM */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Marketing & CRM
          </h4>

          <div className={`p-4 rounded-lg border-2 transition-all ${
            intake.integrations.emailMarketing
              ? 'border-blue-400 bg-blue-500/20'
              : 'border-white/10 bg-white/5'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleIntegration('emailMarketing', 'emailMarketingPrice', 250)}
                  className={`w-5 h-5 rounded border-2 ${
                    intake.integrations.emailMarketing ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                  }`}
                >
                  {intake.integrations.emailMarketing && <span className="text-white text-xs">✓</span>}
                </button>
                <div>
                  <div className="text-white font-medium">Email Marketing Integration</div>
                  <div className="text-sm text-blue-200">Mailchimp, ConvertKit, etc.</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">+$250</div>
            </div>
            {intake.integrations.emailMarketing && (
              <input
                type="text"
                placeholder="Which service? (e.g., Mailchimp)"
                value={intake.integrations.emailMarketingService || ''}
                onChange={(e) => updateServiceName('emailMarketingService', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50"
              />
            )}
          </div>

          <div className={`p-4 rounded-lg border-2 transition-all ${
            intake.integrations.crmIntegration
              ? 'border-blue-400 bg-blue-500/20'
              : 'border-white/10 bg-white/5'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleIntegration('crmIntegration', 'crmPrice', 500)}
                  className={`w-5 h-5 rounded border-2 ${
                    intake.integrations.crmIntegration ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                  }`}
                >
                  {intake.integrations.crmIntegration && <span className="text-white text-xs">✓</span>}
                </button>
                <div>
                  <div className="text-white font-medium">CRM Integration</div>
                  <div className="text-sm text-blue-200">HubSpot, Salesforce, etc.</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">+$500</div>
            </div>
            {intake.integrations.crmIntegration && (
              <input
                type="text"
                placeholder="Which CRM? (e.g., HubSpot)"
                value={intake.integrations.crmService || ''}
                onChange={(e) => updateServiceName('crmService', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50"
              />
            )}
          </div>
        </div>

        {/* Communication */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Communication
          </h4>

          <motion.button
            onClick={() => toggleIntegration('socialMediaFeeds', 'socialFeedsPrice', 200)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              intake.integrations.socialMediaFeeds
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 ${
                  intake.integrations.socialMediaFeeds ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.integrations.socialMediaFeeds && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="text-white font-medium">Social Media Feeds</div>
                  <div className="text-sm text-blue-200">Display Instagram, Twitter, etc. feeds</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">+$200</div>
            </div>
          </motion.button>

          <div className={`p-4 rounded-lg border-2 transition-all ${
            intake.integrations.liveChatWidget
              ? 'border-blue-400 bg-blue-500/20'
              : 'border-white/10 bg-white/5'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleIntegration('liveChatWidget', 'liveChatPrice', 150)}
                  className={`w-5 h-5 rounded border-2 ${
                    intake.integrations.liveChatWidget ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                  }`}
                >
                  {intake.integrations.liveChatWidget && <span className="text-white text-xs">✓</span>}
                </button>
                <div>
                  <div className="text-white font-medium">Live Chat Widget</div>
                  <div className="text-sm text-blue-200">Intercom, Crisp, etc.</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">+$150</div>
            </div>
            {intake.integrations.liveChatWidget && (
              <input
                type="text"
                placeholder="Which service? (e.g., Intercom)"
                value={intake.integrations.liveChatService || ''}
                onChange={(e) => updateServiceName('liveChatService', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50"
              />
            )}
          </div>
        </div>

        {/* Automation & Custom */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Automation & Custom Integrations
          </h4>

          <div className="p-4 rounded-lg border-2 border-white/10 bg-white/5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-white font-medium">Zapier/Make Workflows</div>
                <div className="text-sm text-blue-200">$300 per workflow</div>
              </div>
              <div className="text-blue-300 font-semibold">
                ${(intake.integrations.zapierPrice || 0).toLocaleString()}
              </div>
            </div>
            <input
              type="number"
              min="0"
              value={intake.integrations.zapierWorkflows || 0}
              onChange={(e) => updateNumber('zapierWorkflows', 'zapierPrice', parseInt(e.target.value) || 0, 300)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
            />
          </div>

          <div className="p-4 rounded-lg border-2 border-white/10 bg-white/5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-white font-medium">Custom API Integrations</div>
                <div className="text-sm text-blue-200">$800 per integration</div>
              </div>
              <div className="text-blue-300 font-semibold">
                ${(intake.integrations.customApiPrice || 0).toLocaleString()}
              </div>
            </div>
            <input
              type="number"
              min="0"
              value={intake.integrations.customApiIntegrations || 0}
              onChange={(e) => updateNumber('customApiIntegrations', 'customApiPrice', parseInt(e.target.value) || 0, 800)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
            />
          </div>

          <div className={`p-4 rounded-lg border-2 transition-all ${
            intake.integrations.accountingSoftware
              ? 'border-blue-400 bg-blue-500/20'
              : 'border-white/10 bg-white/5'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleIntegration('accountingSoftware', 'accountingPrice', 600)}
                  className={`w-5 h-5 rounded border-2 ${
                    intake.integrations.accountingSoftware ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                  }`}
                >
                  {intake.integrations.accountingSoftware && <span className="text-white text-xs">✓</span>}
                </button>
                <div>
                  <div className="text-white font-medium">Accounting Software</div>
                  <div className="text-sm text-blue-200">QuickBooks, Xero, etc.</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">+$600</div>
            </div>
            {intake.integrations.accountingSoftware && (
              <input
                type="text"
                placeholder="Which software? (e.g., QuickBooks)"
                value={intake.integrations.accountingService || ''}
                onChange={(e) => updateServiceName('accountingService', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
