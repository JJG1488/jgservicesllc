'use client';

import { ProjectIntake } from '@/types/intake';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

export default function ClientInfoStep({ intake, onUpdate }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Let's start with your information
        </h3>
        <p className="text-blue-200">
          Tell us about yourself and your business so we can create the perfect website for you.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={intake.clientInfo.name}
            onChange={(e) =>
              onUpdate({
                ...intake,
                clientInfo: { ...intake.clientInfo, name: e.target.value },
              })
            }
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={intake.clientInfo.email}
            onChange={(e) =>
              onUpdate({
                ...intake,
                clientInfo: { ...intake.clientInfo, email: e.target.value },
              })
            }
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
            placeholder="john@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={intake.clientInfo.phone}
            onChange={(e) =>
              onUpdate({
                ...intake,
                clientInfo: { ...intake.clientInfo, phone: e.target.value },
              })
            }
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
            placeholder="(555) 123-4567"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">
            Company/Business Name
          </label>
          <input
            type="text"
            value={intake.clientInfo.companyName || ''}
            onChange={(e) =>
              onUpdate({
                ...intake,
                clientInfo: {
                  ...intake.clientInfo,
                  companyName: e.target.value,
                },
              })
            }
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
            placeholder="Acme Inc."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">
            Current Website (if any)
          </label>
          <input
            type="url"
            value={intake.clientInfo.website || ''}
            onChange={(e) =>
              onUpdate({
                ...intake,
                clientInfo: { ...intake.clientInfo, website: e.target.value },
              })
            }
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
            placeholder="https://example.com"
          />
        </div>
      </div>
    </div>
  );
}
