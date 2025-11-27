'use client';

import { ProjectIntake } from '@/types/intake';
import { motion } from 'framer-motion';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

export default function OngoingServicesStep({ intake, onUpdate }: StepProps) {
  const toggleDomain = () => {
    onUpdate((prev) => ({
      ...prev,
      ongoingServices: {
        ...prev.ongoingServices,
        domainRegistration: !prev.ongoingServices.domainRegistration,
        domainPrice: !prev.ongoingServices.domainRegistration ? 25 : 0,
      },
    }));
  };

  const toggleHostingSetup = () => {
    onUpdate((prev) => ({
      ...prev,
      ongoingServices: {
        ...prev.ongoingServices,
        hostingSetup: !prev.ongoingServices.hostingSetup,
        hostingSetupPrice: !prev.ongoingServices.hostingSetup ? 200 : 0,
      },
    }));
  };

  const toggleHostingManagement = () => {
    onUpdate((prev) => ({
      ...prev,
      ongoingServices: {
        ...prev.ongoingServices,
        hostingManagement: !prev.ongoingServices.hostingManagement,
        hostingManagementPrice: !prev.ongoingServices.hostingManagement ? 50 : 0,
      },
    }));
  };

  const selectMaintenance = (tier: 'none' | 'basic' | 'priority') => {
    const price = tier === 'none' ? 0 : tier === 'basic' ? 200 : 500;
    onUpdate((prev) => ({
      ...prev,
      ongoingServices: {
        ...prev.ongoingServices,
        maintenanceRetainer: tier,
        maintenancePrice: price,
      },
    }));
  };

  const toggleContentUpdates = () => {
    onUpdate((prev) => ({
      ...prev,
      ongoingServices: {
        ...prev.ongoingServices,
        contentUpdates: !prev.ongoingServices.contentUpdates,
      },
    }));
  };

  const toggleAnalytics = () => {
    onUpdate((prev) => ({
      ...prev,
      ongoingServices: {
        ...prev.ongoingServices,
        monthlyAnalytics: !prev.ongoingServices.monthlyAnalytics,
        analyticsPrice: !prev.ongoingServices.monthlyAnalytics ? 150 : 0,
      },
    }));
  };

  const toggleSecurityMonitoring = () => {
    onUpdate((prev) => ({
      ...prev,
      ongoingServices: {
        ...prev.ongoingServices,
        securityMonitoring: !prev.ongoingServices.securityMonitoring,
        securityMonitoringPrice: !prev.ongoingServices.securityMonitoring ? 100 : 0,
      },
    }));
  };

  const toggleBackups = () => {
    onUpdate((prev) => ({
      ...prev,
      ongoingServices: {
        ...prev.ongoingServices,
        dailyBackups: !prev.ongoingServices.dailyBackups,
        backupsPrice: !prev.ongoingServices.dailyBackups ? 50 : 0,
      },
    }));
  };

  const togglePrioritySupport = () => {
    onUpdate((prev) => ({
      ...prev,
      ongoingServices: {
        ...prev.ongoingServices,
        prioritySupport: !prev.ongoingServices.prioritySupport,
        prioritySupportPrice: !prev.ongoingServices.prioritySupport ? 300 : 0,
      },
    }));
  };

  const oneTimeTotal = (intake.ongoingServices.hostingSetupPrice || 0);
  const annualTotal = (intake.ongoingServices.domainPrice || 0);
  const monthlyTotal =
    (intake.ongoingServices.hostingManagementPrice || 0) +
    (intake.ongoingServices.maintenancePrice || 0) +
    (intake.ongoingServices.analyticsPrice || 0) +
    (intake.ongoingServices.securityMonitoringPrice || 0) +
    (intake.ongoingServices.backupsPrice || 0) +
    (intake.ongoingServices.prioritySupportPrice || 0);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Ongoing Services
        </h3>
        <p className="text-blue-200">
          Keep your website running smoothly with hosting, maintenance, and support services.
        </p>
      </div>

      {(oneTimeTotal > 0 || monthlyTotal > 0 || annualTotal > 0) && (
        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-blue-200 mb-1">One-time</div>
              <div className="text-2xl font-bold text-white">
                ${oneTimeTotal.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-blue-200 mb-1">Monthly</div>
              <div className="text-2xl font-bold text-blue-300">
                ${monthlyTotal.toLocaleString()}/mo
              </div>
            </div>
            <div>
              <div className="text-sm text-blue-200 mb-1">Annual</div>
              <div className="text-2xl font-bold text-purple-300">
                ${annualTotal.toLocaleString()}/yr
              </div>
            </div>
          </div>
          {monthlyTotal > 0 && (
            <div className="mt-3 pt-3 border-t border-white/20">
              <div className="text-sm text-blue-200">
                Total recurring: <span className="text-white font-semibold">${(monthlyTotal * 12 + annualTotal).toLocaleString()}/year</span>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="space-y-4">
        {/* Hosting */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Domain & Hosting
          </h4>

          <motion.button
            onClick={toggleDomain}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              intake.ongoingServices.domainRegistration
                ? 'border-purple-400 bg-purple-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 ${
                  intake.ongoingServices.domainRegistration ? 'bg-purple-400 border-purple-400' : 'border-white/30'
                }`}>
                  {intake.ongoingServices.domainRegistration && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="text-white font-medium">Domain Registration/Transfer</div>
                  <div className="text-sm text-blue-200">Annual domain name cost</div>
                </div>
              </div>
              <div className="text-purple-300 font-semibold">$25/year</div>
            </div>
          </motion.button>

          <motion.button
            onClick={toggleHostingSetup}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              intake.ongoingServices.hostingSetup
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 ${
                  intake.ongoingServices.hostingSetup ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.ongoingServices.hostingSetup && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="text-white font-medium">Hosting Setup & Configuration</div>
                  <div className="text-sm text-blue-200">One-time server and hosting setup</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">$200 one-time</div>
            </div>
          </motion.button>

          <motion.button
            onClick={toggleHostingManagement}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              intake.ongoingServices.hostingManagement
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 ${
                  intake.ongoingServices.hostingManagement ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.ongoingServices.hostingManagement && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="text-white font-medium">Hosting Management</div>
                  <div className="text-sm text-blue-200">Monthly server maintenance and monitoring</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">$50/month</div>
            </div>
          </motion.button>
        </div>

        {/* Maintenance */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Maintenance & Updates
          </h4>

          <div className="p-4 rounded-lg border-2 border-white/10 bg-white/5">
            <div className="mb-3">
              <div className="text-white font-medium mb-1">Monthly Maintenance Retainer</div>
              <div className="text-sm text-blue-200">Regular updates, bug fixes, and minor improvements</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => selectMaintenance('none')}
                className={`px-4 py-3 rounded-lg border-2 transition-all ${
                  intake.ongoingServices.maintenanceRetainer === 'none'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                <div className="font-medium">None</div>
                <div className="text-xs text-blue-300">Pay per update</div>
              </button>
              <button
                onClick={() => selectMaintenance('basic')}
                className={`px-4 py-3 rounded-lg border-2 transition-all ${
                  intake.ongoingServices.maintenanceRetainer === 'basic'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                <div className="font-medium">Basic</div>
                <div className="text-xs text-blue-300">$200/month</div>
              </button>
              <button
                onClick={() => selectMaintenance('priority')}
                className={`px-4 py-3 rounded-lg border-2 transition-all ${
                  intake.ongoingServices.maintenanceRetainer === 'priority'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                <div className="font-medium">Priority</div>
                <div className="text-xs text-blue-300">$500/month</div>
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-lg border-2 transition-all ${
            intake.ongoingServices.contentUpdates
              ? 'border-blue-400 bg-blue-500/20'
              : 'border-white/10 bg-white/5'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleContentUpdates}
                  className={`w-5 h-5 rounded border-2 ${
                    intake.ongoingServices.contentUpdates ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                  }`}
                >
                  {intake.ongoingServices.contentUpdates && <span className="text-white text-xs">✓</span>}
                </button>
                <div>
                  <div className="text-white font-medium">Content Updates (On-Demand)</div>
                  <div className="text-sm text-blue-200">Hourly rate for content changes</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">$75/hour</div>
            </div>
            {intake.ongoingServices.contentUpdates && (
              <div className="mt-2 text-xs text-blue-300">
                Billed only when you request updates. Not a monthly charge.
              </div>
            )}
          </div>
        </div>

        {/* Monitoring & Support */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Monitoring & Support
          </h4>

          <motion.button
            onClick={toggleAnalytics}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              intake.ongoingServices.monthlyAnalytics
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 ${
                  intake.ongoingServices.monthlyAnalytics ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.ongoingServices.monthlyAnalytics && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="text-white font-medium">Monthly Analytics Report</div>
                  <div className="text-sm text-blue-200">Detailed traffic and performance report</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">$150/month</div>
            </div>
          </motion.button>

          <motion.button
            onClick={toggleSecurityMonitoring}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              intake.ongoingServices.securityMonitoring
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 ${
                  intake.ongoingServices.securityMonitoring ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.ongoingServices.securityMonitoring && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="text-white font-medium">Security Monitoring</div>
                  <div className="text-sm text-blue-200">24/7 threat detection and alerts</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">$100/month</div>
            </div>
          </motion.button>

          <motion.button
            onClick={toggleBackups}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              intake.ongoingServices.dailyBackups
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 ${
                  intake.ongoingServices.dailyBackups ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.ongoingServices.dailyBackups && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="text-white font-medium">Daily Backups</div>
                  <div className="text-sm text-blue-200">Automated daily backups with 30-day retention</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">$50/month</div>
            </div>
          </motion.button>

          <motion.button
            onClick={togglePrioritySupport}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              intake.ongoingServices.prioritySupport
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 ${
                  intake.ongoingServices.prioritySupport ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.ongoingServices.prioritySupport && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="text-white font-medium">Priority Support</div>
                  <div className="text-sm text-blue-200">Same-day response, dedicated support line</div>
                </div>
              </div>
              <div className="text-blue-300 font-semibold">$300/month</div>
            </div>
          </motion.button>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
        <p className="text-sm text-blue-200">
          <strong className="text-white">Note:</strong> These are optional ongoing services. You can also manage hosting
          independently or purchase these services separately after launch.
        </p>
      </div>
    </div>
  );
}
