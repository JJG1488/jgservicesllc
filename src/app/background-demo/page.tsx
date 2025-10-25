'use client';

import { useState } from 'react';
import TechBackground from '@/components/TechBackground';
import { motion } from 'framer-motion';

export default function BackgroundDemo() {
  const [variant, setVariant] = useState<'grid' | 'particles' | 'circuit' | 'waves'>('grid');

  const variants = [
    { value: 'grid' as const, label: 'Tech Grid', description: 'Animated Matrix-style grid with glowing intersections' },
    { value: 'particles' as const, label: 'Particles', description: 'Floating particles with network connections' },
    { value: 'circuit' as const, label: 'Circuit Board', description: 'Circuit patterns with animated data flow' },
    { value: 'waves' as const, label: 'Gradient Waves', description: 'Smooth animated gradient waves' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      {/* Tech Background */}
      <TechBackground variant={variant} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Tech Background Variants
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore different animated tech-themed backgrounds using JGServicesLLC brand colors
          </p>
        </div>

        {/* Variant Selector */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Choose Background Style
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {variants.map((v) => (
                <motion.button
                  key={v.value}
                  onClick={() => setVariant(v.value)}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    variant === v.value
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-700'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        variant === v.value
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {v.label}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">
                    {v.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Current Selection: {variants.find(v => v.value === variant)?.label}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {variants.find(v => v.value === variant)?.description}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Brand Colors Used:
                </h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-blue-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Blue (#2563eb)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-purple-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Purple (#7c3aed)
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Features:
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Animated canvas-based background</li>
                  <li>Non-blocking (pointer-events: none)</li>
                  <li>Positioned behind all content (z-index: -10)</li>
                  <li>Fully responsive and performant</li>
                  <li>Works in light and dark mode</li>
                </ul>
              </div>

              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mt-6">
                <h3 className="font-semibold text-white mb-2">
                  To Use This Background:
                </h3>
                <code className="text-green-400 text-sm">
                  {`import TechBackground from '@/components/TechBackground';

// Add to your layout or page:
<TechBackground variant="${variant}" />`}
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Content Cards */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Sample Card {i}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                These cards demonstrate how content looks with the tech background behind it.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
