'use client';

import { ProjectIntake } from '@/types/intake';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

export default function DesignStep({ intake, onUpdate }: StepProps) {
  const updateDesign = (updates: Partial<ProjectIntake['design']>) => {
    onUpdate({
      ...intake,
      design: { ...intake.design, ...updates },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Design & Branding
        </h3>
        <p className="text-blue-200">
          Choose your design approach and branding needs. Template-based and responsive design are included by default.
        </p>
      </div>

      <div className="space-y-6">
        {/* Included by Default */}
        <div className="glass-sm rounded-lg p-4 border border-white/10">
          <h4 className="text-sm font-semibold text-blue-300 mb-3">Included by Default</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-100">Template-based design</span>
              <span className="text-green-400 font-medium">Included</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-100">Mobile-first responsive design</span>
              <span className="text-green-400 font-medium">Included</span>
            </div>
          </div>
        </div>

        {/* Custom Design */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Custom Design (Unique Layout)</h4>
          <p className="text-xs text-blue-200 mb-4">
            Custom layouts tailored to your brand and business needs
          </p>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="customDesign"
                  checked={intake.design.customDesign === 'none'}
                  onChange={() => updateDesign({ customDesign: 'none', customDesignPrice: 0 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">No custom design</span>
              </div>
              <span className="text-blue-300 font-medium">$0</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="customDesign"
                  checked={intake.design.customDesign === 'client-directs'}
                  onChange={() => updateDesign({ customDesign: 'client-directs', customDesignPrice: 1000 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Client provides direction</span>
              </div>
              <span className="text-blue-300 font-medium">+$1,000</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="customDesign"
                  checked={intake.design.customDesign === 'developer-decides'}
                  onChange={() => updateDesign({ customDesign: 'developer-decides', customDesignPrice: 1500 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Developer decides design</span>
              </div>
              <span className="text-blue-300 font-medium">+$1,500</span>
            </label>
          </div>
        </div>

        {/* Premium Design */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Premium Design</h4>
          <p className="text-xs text-blue-200 mb-4">
            Advanced animations, parallax effects, and sophisticated micro-interactions
          </p>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="premiumDesign"
                  checked={intake.design.premiumDesign === 'none'}
                  onChange={() => updateDesign({ premiumDesign: 'none', premiumDesignPrice: 0 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">No premium design</span>
              </div>
              <span className="text-blue-300 font-medium">$0</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="premiumDesign"
                  checked={intake.design.premiumDesign === 'client-directs'}
                  onChange={() => updateDesign({ premiumDesign: 'client-directs', premiumDesignPrice: 2500 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Client provides direction</span>
              </div>
              <span className="text-blue-300 font-medium">+$2,500</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="premiumDesign"
                  checked={intake.design.premiumDesign === 'developer-decides'}
                  onChange={() => updateDesign({ premiumDesign: 'developer-decides', premiumDesignPrice: 3500 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Developer decides design</span>
              </div>
              <span className="text-blue-300 font-medium">+$3,500</span>
            </label>
          </div>
        </div>

        {/* Branding Options */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-4">Branding Options</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={intake.design.logoDesign}
                  onChange={(e) => updateDesign({
                    logoDesign: e.target.checked,
                    logoPrice: e.target.checked ? 500 : 0
                  })}
                  className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                />
                <span className="text-blue-100">Logo design</span>
              </div>
              <span className="text-blue-300 font-medium">+$500</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={intake.design.brandIdentity}
                  onChange={(e) => updateDesign({
                    brandIdentity: e.target.checked,
                    brandIdentityPrice: e.target.checked ? 1500 : 0
                  })}
                  className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                />
                <div>
                  <div className="text-blue-100">Full brand identity</div>
                  <div className="text-xs text-blue-300">Logo + colors + typography + guidelines</div>
                </div>
              </div>
              <span className="text-blue-300 font-medium">+$1,500</span>
            </label>
          </div>
        </div>

        {/* Custom Illustrations */}
        <div className="glass-sm rounded-lg p-4">
          <label className="block">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-sm font-semibold text-white">Custom Illustrations</h4>
                <p className="text-xs text-blue-200 mt-1">Sets of 5 custom icons or illustrations</p>
              </div>
              <span className="text-blue-300 font-medium">+$400 per set</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                max="10"
                value={intake.design.customIllustrations}
                onChange={(e) => {
                  const sets = parseInt(e.target.value) || 0;
                  updateDesign({
                    customIllustrations: sets,
                    illustrationsPrice: sets * 400
                  });
                }}
                className="w-24 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <span className="text-blue-200 text-sm">sets</span>
              {intake.design.customIllustrations > 0 && (
                <span className="text-blue-300 font-medium ml-auto">
                  = ${(intake.design.customIllustrations * 400).toLocaleString()}
                </span>
              )}
            </div>
          </label>
        </div>

        {/* Dark Mode Toggle */}
        <div className="glass-sm rounded-lg p-4">
          <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={intake.design.darkModeToggle}
                onChange={(e) => updateDesign({
                  darkModeToggle: e.target.checked,
                  darkModePrice: e.target.checked ? 300 : 0
                })}
                className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">Dark mode toggle</div>
                <div className="text-xs text-blue-300">Allow users to switch between light and dark themes</div>
              </div>
            </div>
            <span className="text-blue-300 font-medium">+$300</span>
          </label>
        </div>

        {/* Design Total */}
        {(intake.design.customDesignPrice + intake.design.premiumDesignPrice +
          intake.design.logoPrice + intake.design.brandIdentityPrice +
          intake.design.illustrationsPrice + intake.design.darkModePrice) > 0 && (
          <div className="glass rounded-lg p-4 border border-blue-400/30">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">Design & Branding Total</span>
              <span className="text-2xl font-bold text-blue-300">
                ${(
                  intake.design.customDesignPrice +
                  intake.design.premiumDesignPrice +
                  intake.design.logoPrice +
                  intake.design.brandIdentityPrice +
                  intake.design.illustrationsPrice +
                  intake.design.darkModePrice
                ).toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
