'use client';

import { useEffect, useState } from 'react';
import TechBackground from '@/components/TechBackground';

type Variant = 'grid' | 'particles' | 'circuit' | 'waves';

interface DynamicTechBackgroundProps {
  mode?: 'random' | 'rotate' | 'page-specific';
  specificVariant?: Variant;
}

/**
 * Dynamic Tech Background Component
 *
 * Modes:
 * - 'random': Randomly selects a background on each page load
 * - 'rotate': Cycles through backgrounds every 30 seconds
 * - 'page-specific': Uses route-based selection (default)
 */
export default function DynamicTechBackground({
  mode = 'rotate',
  specificVariant
}: DynamicTechBackgroundProps) {
  const variants: Variant[] = ['grid', 'particles', 'circuit', 'waves'];
  const [currentVariant, setCurrentVariant] = useState<Variant>('grid');

  useEffect(() => {
    // If specific variant is provided, use it
    if (specificVariant) {
      setCurrentVariant(specificVariant);
      return;
    }

    if (mode === 'random') {
      // Random selection on mount
      const randomVariant = variants[Math.floor(Math.random() * variants.length)];
      setCurrentVariant(randomVariant);
    } else if (mode === 'rotate') {
      // Rotate through variants every 30 seconds
      let index = 0;
      setCurrentVariant(variants[index]);

      const interval = setInterval(() => {
        index = (index + 1) % variants.length;
        setCurrentVariant(variants[index]);
      }, 10000); // 10 seconds

      return () => clearInterval(interval);
    } else if (mode === 'page-specific') {
      // Map different pages to different backgrounds
      const path = window.location.pathname;

      if (path === '/' || path === '/home') {
        setCurrentVariant('grid'); // Homepage gets grid
      } else if (path.startsWith('/services')) {
        setCurrentVariant('circuit'); // Services gets circuit
      } else if (path.startsWith('/projects')) {
        setCurrentVariant('particles'); // Projects gets particles
      } else if (path.startsWith('/contact') || path.startsWith('/schedule')) {
        setCurrentVariant('waves'); // Contact gets waves
      } else if (path.startsWith('/resources')) {
        setCurrentVariant('particles'); // Resources gets particles
      } else if (path.startsWith('/admin')) {
        setCurrentVariant('circuit'); // Admin gets circuit
      } else if (path.startsWith('/blog')) {
        setCurrentVariant('waves'); // Blog gets waves
      } else if (path.startsWith('/faq') || path.startsWith('/process')) {
        setCurrentVariant('grid'); // FAQ/Process gets grid
      } else {
        // Default: random for any other page
        const randomVariant = variants[Math.floor(Math.random() * variants.length)];
        setCurrentVariant(randomVariant);
      }
    }
  }, [mode, specificVariant]);

  return <TechBackground variant={currentVariant} />;
}
