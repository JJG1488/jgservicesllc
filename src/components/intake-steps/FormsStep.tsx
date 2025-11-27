'use client';

import { ProjectIntake } from '@/types/intake';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

export default function FormsStep({ intake, onUpdate }: StepProps) {
  const updateForms = (updates: Partial<ProjectIntake['forms']>) => {
    onUpdate({
      ...intake,
      forms: { ...intake.forms, ...updates },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Forms & Lead Capture
        </h3>
        <p className="text-blue-200">
          Choose the forms and lead capture tools you need to connect with your audience.
        </p>
      </div>

      <div className="space-y-6">
        {/* Basic Contact Form - Always Included */}
        <div className="glass-sm rounded-lg p-4 border border-green-400/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center text-white text-xs">
                ✓
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Basic Contact Form</h4>
                <p className="text-xs text-blue-200 mt-1">
                  Standard contact form with name, email, message fields
                </p>
              </div>
            </div>
            <span className="text-green-400 font-medium">Included</span>
          </div>
        </div>

        {/* Advanced Multi-Step Form */}
        <div className="glass-sm rounded-lg p-4">
          <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={intake.forms.advancedMultiStep}
                onChange={(e) => updateForms({
                  advancedMultiStep: e.target.checked,
                  multiStepPrice: e.target.checked ? 400 : 0
                })}
                className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">Advanced Multi-Step Form</div>
                <div className="text-xs text-blue-300 mt-1">
                  Complex forms with multiple pages, conditional logic, and progress tracking
                </div>
              </div>
            </div>
            <span className="text-blue-300 font-medium">+$400</span>
          </label>
        </div>

        {/* Quote Request Calculator */}
        <div className="glass-sm rounded-lg p-4">
          <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={intake.forms.quoteCalculator}
                onChange={(e) => updateForms({
                  quoteCalculator: e.target.checked,
                  calculatorPrice: e.target.checked ? 1500 : 0
                })}
                className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">Quote Request Calculator</div>
                <div className="text-xs text-blue-300 mt-1">
                  Interactive tool that calculates pricing based on user selections
                </div>
              </div>
            </div>
            <span className="text-blue-300 font-medium">+$1,500</span>
          </label>
        </div>

        {/* File Upload Form */}
        <div className="glass-sm rounded-lg p-4">
          <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={intake.forms.fileUpload}
                onChange={(e) => updateForms({
                  fileUpload: e.target.checked,
                  fileUploadPrice: e.target.checked ? 250 : 0
                })}
                className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">File Upload Form</div>
                <div className="text-xs text-blue-300 mt-1">
                  Allow users to upload documents, images, or other files
                </div>
              </div>
            </div>
            <span className="text-blue-300 font-medium">+$250</span>
          </label>
        </div>

        {/* Newsletter Signup */}
        <div className="glass-sm rounded-lg p-4">
          <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={intake.forms.newsletter}
                onChange={(e) => updateForms({
                  newsletter: e.target.checked,
                  newsletterPrice: e.target.checked ? 150 : 0
                })}
                className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">Newsletter Signup</div>
                <div className="text-xs text-blue-300 mt-1">
                  Email capture form for newsletter subscriptions
                </div>
              </div>
            </div>
            <span className="text-blue-300 font-medium">+$150</span>
          </label>
        </div>

        {/* Popup/Modal Lead Capture */}
        <div className="glass-sm rounded-lg p-4">
          <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={intake.forms.popupModal}
                onChange={(e) => updateForms({
                  popupModal: e.target.checked,
                  popupPrice: e.target.checked ? 200 : 0
                })}
                className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">Popup/Modal Lead Capture</div>
                <div className="text-xs text-blue-300 mt-1">
                  Timed or scroll-triggered popup to capture leads
                </div>
              </div>
            </div>
            <span className="text-blue-300 font-medium">+$200</span>
          </label>
        </div>

        {/* Exit-Intent Popup */}
        <div className="glass-sm rounded-lg p-4">
          <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={intake.forms.exitIntent}
                onChange={(e) => updateForms({
                  exitIntent: e.target.checked,
                  exitIntentPrice: e.target.checked ? 250 : 0
                })}
                className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">Exit-Intent Popup</div>
                <div className="text-xs text-blue-300 mt-1">
                  Captures leads when user is about to leave the site
                </div>
              </div>
            </div>
            <span className="text-blue-300 font-medium">+$250</span>
          </label>
        </div>

        {/* Forms Total */}
        {(intake.forms.multiStepPrice + intake.forms.calculatorPrice +
          intake.forms.fileUploadPrice + intake.forms.newsletterPrice +
          intake.forms.popupPrice + intake.forms.exitIntentPrice) > 0 && (
          <div className="glass rounded-lg p-4 border border-blue-400/30">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">Forms & Lead Capture Total</span>
              <span className="text-2xl font-bold text-blue-300">
                ${(
                  intake.forms.multiStepPrice +
                  intake.forms.calculatorPrice +
                  intake.forms.fileUploadPrice +
                  intake.forms.newsletterPrice +
                  intake.forms.popupPrice +
                  intake.forms.exitIntentPrice
                ).toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
