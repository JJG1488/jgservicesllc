'use client';

import { ProjectIntake } from '@/types/intake';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

export default function ProjectDescriptionStep({ intake, onUpdate }: StepProps) {
  const updateField = (field: keyof ProjectIntake['projectDescription'], value: string) => {
    onUpdate((prev) => ({
      ...prev,
      projectDescription: {
        ...prev.projectDescription,
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Tell Us About Your Project
        </h3>
        <p className="text-blue-200">
          Help us understand your business, goals, and vision for your website.
        </p>
      </div>

      <div className="space-y-5">
        {/* Business Description */}
        <div>
          <label className="block mb-2">
            <span className="text-white font-medium flex items-center gap-2">
              Business Description
              <span className="text-red-400">*</span>
            </span>
            <span className="text-sm text-blue-200">
              What does your business do? What products or services do you offer?
            </span>
          </label>
          <textarea
            value={intake.projectDescription.businessDescription}
            onChange={(e) => updateField('businessDescription', e.target.value)}
            placeholder="e.g., We're a boutique coffee roastery specializing in ethically-sourced, small-batch coffee beans. We offer both wholesale and direct-to-consumer sales..."
            rows={5}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
            required
          />
        </div>

        {/* Target Audience */}
        <div>
          <label className="block mb-2">
            <span className="text-white font-medium flex items-center gap-2">
              Target Audience
              <span className="text-red-400">*</span>
            </span>
            <span className="text-sm text-blue-200">
              Who are your ideal customers? Demographics, interests, pain points?
            </span>
          </label>
          <textarea
            value={intake.projectDescription.targetAudience}
            onChange={(e) => updateField('targetAudience', e.target.value)}
            placeholder="e.g., Coffee enthusiasts aged 25-45 who value sustainability and quality over price. They're willing to pay premium for ethically-sourced products..."
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
            required
          />
        </div>

        {/* Main Goals */}
        <div>
          <label className="block mb-2">
            <span className="text-white font-medium flex items-center gap-2">
              Main Goals
              <span className="text-red-400">*</span>
            </span>
            <span className="text-sm text-blue-200">
              What do you want to achieve with this website? What defines success?
            </span>
          </label>
          <textarea
            value={intake.projectDescription.mainGoals}
            onChange={(e) => updateField('mainGoals', e.target.value)}
            placeholder="e.g., Increase online sales by 40%, build brand awareness in the Pacific Northwest, create an engaging customer experience that tells our story..."
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
            required
          />
        </div>

        {/* Competitors */}
        <div>
          <label className="block mb-2">
            <span className="text-white font-medium">
              Competitors (Optional)
            </span>
            <span className="text-sm text-blue-200">
              Who are your main competitors? What do they do well or poorly?
            </span>
          </label>
          <textarea
            value={intake.projectDescription.competitors || ''}
            onChange={(e) => updateField('competitors', e.target.value)}
            placeholder="e.g., Blue Bottle Coffee (great branding but too corporate), Stumptown (love their storytelling), local competitor Joe's Roastery (outdated website)..."
            rows={3}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
          />
        </div>

        {/* Brand Personality */}
        <div>
          <label className="block mb-2">
            <span className="text-white font-medium">
              Brand Personality (Optional)
            </span>
            <span className="text-sm text-blue-200">
              How should your brand feel? Professional, playful, luxury, eco-friendly?
            </span>
          </label>
          <textarea
            value={intake.projectDescription.brandPersonality || ''}
            onChange={(e) => updateField('brandPersonality', e.target.value)}
            placeholder="e.g., Warm and approachable, like a neighborhood café. Sophisticated but not pretentious. Earthy tones, handcrafted feel, sustainability-focused..."
            rows={3}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
          />
        </div>

        {/* Inspiration Sites */}
        <div>
          <label className="block mb-2">
            <span className="text-white font-medium">
              Inspiration Websites (Optional)
            </span>
            <span className="text-sm text-blue-200">
              Share links to websites you admire. What do you like about them?
            </span>
          </label>
          <textarea
            value={intake.projectDescription.inspirationSites || ''}
            onChange={(e) => updateField('inspirationSites', e.target.value)}
            placeholder="e.g., https://example.com - Love their clean layout and product photography&#10;https://another.com - Great storytelling on their About page&#10;https://site3.com - Like their checkout flow"
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block mb-2">
            <span className="text-white font-medium">
              Additional Notes (Optional)
            </span>
            <span className="text-sm text-blue-200">
              Anything else we should know? Special requirements, concerns, questions?
            </span>
          </label>
          <textarea
            value={intake.projectDescription.additionalNotes || ''}
            onChange={(e) => updateField('additionalNotes', e.target.value)}
            placeholder="e.g., We're planning to launch a subscription service in 6 months, so keep that in mind. We have existing brand guidelines. Need to integrate with our POS system..."
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
          />
        </div>
      </div>

      <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-400/30">
        <p className="text-sm text-blue-200">
          <strong className="text-white">Tip:</strong> The more detail you provide, the better we can tailor
          your website to your specific needs. Don't worry about being too thorough - we love learning about
          your business!
        </p>
      </div>
    </div>
  );
}
