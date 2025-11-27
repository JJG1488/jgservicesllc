'use client';

import { ProjectIntake } from '@/types/intake';
import { motion } from 'framer-motion';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

export default function SecurityStep({ intake, onUpdate }: StepProps) {
  const toggleSSL = () => {
    onUpdate((prev) => ({
      ...prev,
      security: {
        ...prev.security,
        sslCertificate: !prev.security.sslCertificate,
        sslPrice: !prev.security.sslCertificate ? 50 : 0,
      },
    }));
  };

  const selectGDPR = (option: 'none' | 'client-content' | 'developer-content') => {
    const price = option === 'none' ? 0 : option === 'client-content' ? 300 : 400;
    onUpdate((prev) => ({
      ...prev,
      security: {
        ...prev.security,
        gdprCompliance: option,
        gdprPrice: price,
      },
    }));
  };

  const selectCookieBanner = (option: 'none' | 'client-content' | 'developer-content') => {
    const price = option === 'none' ? 0 : option === 'client-content' ? 150 : 200;
    onUpdate((prev) => ({
      ...prev,
      security: {
        ...prev.security,
        cookieBanner: option,
        cookieBannerPrice: price,
      },
    }));
  };

  const selectTerms = (option: 'none' | 'client-content' | 'developer-content') => {
    const price = option === 'none' ? 0 : option === 'client-content' ? 100 : 300;
    onUpdate((prev) => ({
      ...prev,
      security: {
        ...prev.security,
        termsOfService: option,
        termsPrice: price,
      },
    }));
  };

  const selectPrivacy = (option: 'none' | 'client-content' | 'developer-content') => {
    const price = option === 'none' ? 0 : option === 'client-content' ? 100 : 300;
    onUpdate((prev) => ({
      ...prev,
      security: {
        ...prev.security,
        privacyPolicy: option,
        privacyPolicyPrice: price,
      },
    }));
  };

  const toggleSecurityHardening = () => {
    onUpdate((prev) => ({
      ...prev,
      security: {
        ...prev.security,
        securityHardening: !prev.security.securityHardening,
        securityPrice: !prev.security.securityHardening ? 400 : 0,
      },
    }));
  };

  const toggleTwoFactor = () => {
    onUpdate((prev) => ({
      ...prev,
      security: {
        ...prev.security,
        twoFactorAuth: !prev.security.twoFactorAuth,
        twoFactorPrice: !prev.security.twoFactorAuth ? 300 : 0,
      },
    }));
  };

  const totalCost =
    (intake.security.sslPrice || 0) +
    (intake.security.gdprPrice || 0) +
    (intake.security.cookieBannerPrice || 0) +
    (intake.security.termsPrice || 0) +
    (intake.security.privacyPolicyPrice || 0) +
    (intake.security.securityPrice || 0) +
    (intake.security.twoFactorPrice || 0);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Security & Legal
        </h3>
        <p className="text-blue-200">
          Protect your site and comply with legal requirements.
        </p>
      </div>

      {totalCost > 0 && (
        <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-400/30">
          <div className="flex justify-between items-center">
            <div className="text-sm text-blue-200">
              Total security & legal features
            </div>
            <div className="text-lg font-semibold text-blue-300">
              +${totalCost.toLocaleString()}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {/* SSL Certificate */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Essential Security
          </h4>

          <motion.button
            onClick={toggleSSL}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
              intake.security.sslCertificate
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  intake.security.sslCertificate ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.security.sslCertificate && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    SSL Certificate Setup
                  </h4>
                  <p className="text-sm text-blue-200">
                    HTTPS encryption for secure data transmission (strongly recommended)
                  </p>
                </div>
              </div>
              <div className="text-lg font-bold text-blue-300">+$50</div>
            </div>
          </motion.button>
        </div>

        {/* GDPR/CCPA Compliance */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Privacy Compliance
          </h4>

          <div className="p-4 rounded-lg border-2 border-white/10 bg-white/5">
            <div className="mb-3">
              <div className="text-white font-medium mb-1">GDPR/CCPA Compliance Setup</div>
              <div className="text-sm text-blue-200">Data privacy compliance for EU/California users</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => selectGDPR('none')}
                className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                  intake.security.gdprCompliance === 'none'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                None
              </button>
              <button
                onClick={() => selectGDPR('client-content')}
                className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                  intake.security.gdprCompliance === 'client-content'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                You Provide
                <div className="text-xs text-blue-300">+$300</div>
              </button>
              <button
                onClick={() => selectGDPR('developer-content')}
                className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                  intake.security.gdprCompliance === 'developer-content'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                We Create
                <div className="text-xs text-blue-300">+$400</div>
              </button>
            </div>
          </div>

          <div className="p-4 rounded-lg border-2 border-white/10 bg-white/5">
            <div className="mb-3">
              <div className="text-white font-medium mb-1">Cookie Consent Banner</div>
              <div className="text-sm text-blue-200">Required for GDPR compliance</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => selectCookieBanner('none')}
                className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                  intake.security.cookieBanner === 'none'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                None
              </button>
              <button
                onClick={() => selectCookieBanner('client-content')}
                className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                  intake.security.cookieBanner === 'client-content'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                You Provide
                <div className="text-xs text-blue-300">+$150</div>
              </button>
              <button
                onClick={() => selectCookieBanner('developer-content')}
                className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                  intake.security.cookieBanner === 'developer-content'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                We Create
                <div className="text-xs text-blue-300">+$200</div>
              </button>
            </div>
          </div>
        </div>

        {/* Legal Pages */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Legal Pages
          </h4>

          <div className="p-4 rounded-lg border-2 border-white/10 bg-white/5">
            <div className="mb-3">
              <div className="text-white font-medium mb-1">Terms of Service Page</div>
              <div className="text-sm text-blue-200">Legal terms and conditions for using your site</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => selectTerms('none')}
                className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                  intake.security.termsOfService === 'none'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                None
              </button>
              <button
                onClick={() => selectTerms('client-content')}
                className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                  intake.security.termsOfService === 'client-content'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                You Provide
                <div className="text-xs text-blue-300">+$100</div>
              </button>
              <button
                onClick={() => selectTerms('developer-content')}
                className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                  intake.security.termsOfService === 'developer-content'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                We Create
                <div className="text-xs text-blue-300">+$300</div>
              </button>
            </div>
          </div>

          <div className="p-4 rounded-lg border-2 border-white/10 bg-white/5">
            <div className="mb-3">
              <div className="text-white font-medium mb-1">Privacy Policy Page</div>
              <div className="text-sm text-blue-200">How you collect and use user data</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => selectPrivacy('none')}
                className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                  intake.security.privacyPolicy === 'none'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                None
              </button>
              <button
                onClick={() => selectPrivacy('client-content')}
                className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                  intake.security.privacyPolicy === 'client-content'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                You Provide
                <div className="text-xs text-blue-300">+$100</div>
              </button>
              <button
                onClick={() => selectPrivacy('developer-content')}
                className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                  intake.security.privacyPolicy === 'developer-content'
                    ? 'border-blue-400 bg-blue-500/20 text-white'
                    : 'border-white/20 text-blue-200 hover:border-white/40'
                }`}
              >
                We Create
                <div className="text-xs text-blue-300">+$300</div>
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Security */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Advanced Security
          </h4>

          <motion.button
            onClick={toggleSecurityHardening}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
              intake.security.securityHardening
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  intake.security.securityHardening ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.security.securityHardening && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">Security Hardening</h4>
                  <p className="text-sm text-blue-200">
                    Extra security measures: firewall, DDoS protection, secure headers
                  </p>
                </div>
              </div>
              <div className="text-lg font-bold text-blue-300">+$400</div>
            </div>
          </motion.button>

          <motion.button
            onClick={toggleTwoFactor}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
              intake.security.twoFactorAuth
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  intake.security.twoFactorAuth ? 'bg-blue-400 border-blue-400' : 'border-white/30'
                }`}>
                  {intake.security.twoFactorAuth && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">Two-Factor Authentication</h4>
                  <p className="text-sm text-blue-200">
                    Extra login security with SMS or authenticator app
                  </p>
                </div>
              </div>
              <div className="text-lg font-bold text-blue-300">+$300</div>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
