'use client';

import { ProjectIntake } from '@/types/intake';
import { motion } from 'framer-motion';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

const seoFeatures = [
  {
    key: 'basicSEO' as const,
    priceKey: 'basicSEOPrice' as const,
    name: 'Basic SEO Setup',
    price: 200,
    description: 'Meta tags, sitemap, robots.txt, and basic optimization',
  },
  {
    key: 'advancedSEO' as const,
    priceKey: 'advancedSEOPrice' as const,
    name: 'Advanced SEO',
    price: 600,
    description: 'Schema markup, technical audit, advanced optimization',
  },
  {
    key: 'coreWebVitals' as const,
    priceKey: 'coreWebVitalsPrice' as const,
    name: 'Core Web Vitals Optimization',
    price: 400,
    description: 'Optimize LCP, FID, CLS for better Google rankings',
  },
  {
    key: 'imageOptimization' as const,
    priceKey: 'imageOptimizationPrice' as const,
    name: 'Image Optimization & CDN',
    price: 300,
    description: 'Compress images, lazy loading, CDN setup',
  },
  {
    key: 'pageSpeedOptimization' as const,
    priceKey: 'pageSpeedPrice' as const,
    name: 'Page Speed Optimization',
    price: 500,
    description: 'Code splitting, caching, performance tuning',
  },
];

export default function SEOStep({ intake, onUpdate }: StepProps) {
  const toggleFeature = (key: keyof ProjectIntake['seo'], priceKey: keyof ProjectIntake['seo'], price: number) => {
    onUpdate((prev) => ({
      ...prev,
      seo: {
        ...prev.seo,
        [key]: !prev.seo[key],
        [priceKey]: !prev.seo[key] ? price : 0,
      },
    }));
  };

  const updateNotes = (value: string) => {
    onUpdate((prev) => ({
      ...prev,
      seo: {
        ...prev.seo,
        seoNotes: value,
      },
    }));
  };

  const selectedCount = seoFeatures.filter(
    (feature) => intake.seo[feature.key]
  ).length;

  const totalCost = seoFeatures.reduce((sum, feature) => {
    return sum + (intake.seo[feature.priceKey] || 0);
  }, 0);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          SEO & Performance
        </h3>
        <p className="text-blue-200">
          Optimize your site for search engines and fast loading times.
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
        {seoFeatures.map((feature) => {
          const isSelected = intake.seo[feature.key];

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

      <div className="space-y-3">
        <label className="block">
          <span className="text-white font-medium mb-2 block">
            SEO Notes & Requirements
          </span>
          <span className="text-sm text-blue-200 mb-3 block">
            Share target keywords, audience demographics, competitors, or any specific SEO goals
          </span>
          <textarea
            value={intake.seo.seoNotes}
            onChange={(e) => updateNotes(e.target.value)}
            placeholder="e.g., Target keywords: 'web design seattle', 'custom websites'&#10;Target audience: Small business owners, 30-50 years old&#10;Competitors: acme-web.com, designstudio.com"
            rows={6}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
          />
        </label>
      </div>

      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
        <p className="text-sm text-blue-200">
          <strong className="text-white">Recommendation:</strong> For best results, combine Basic SEO with
          Advanced SEO and at least one performance optimization. Good performance directly impacts search rankings.
        </p>
      </div>
    </div>
  );
}
