'use client'

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import GlowCard from "@/components/ui/GlowCard";

export default function ThemeShowcase() {
  const jewelTones = [
    {
      name: "Emerald Green",
      description: "Deep, rich emerald tones for growth and prosperity",
      shades: [
        { name: "50", color: "#ecfdf5", var: "--color-emerald-50" },
        { name: "100", color: "#d1fae5", var: "--color-emerald-100" },
        { name: "200", color: "#a7f3d0", var: "--color-emerald-200" },
        { name: "300", color: "#6ee7b7", var: "--color-emerald-300" },
        { name: "500", color: "#10b981", var: "--color-emerald-500" },
        { name: "700", color: "#047857", var: "--color-emerald-700" },
        { name: "900", color: "#064e3b", var: "--color-emerald-900" },
        { name: "950", color: "#022c22", var: "--color-emerald-950" },
      ],
    },
    {
      name: "Sapphire Blue",
      description: "Luxurious sapphire blues for trust and stability",
      shades: [
        { name: "50", color: "#eff6ff", var: "--color-sapphire-50" },
        { name: "100", color: "#dbeafe", var: "--color-sapphire-100" },
        { name: "200", color: "#bfdbfe", var: "--color-sapphire-200" },
        { name: "300", color: "#93c5fd", var: "--color-sapphire-300" },
        { name: "500", color: "#3b82f6", var: "--color-sapphire-500" },
        { name: "700", color: "#1e40af", var: "--color-sapphire-700" },
        { name: "900", color: "#172554", var: "--color-sapphire-900" },
        { name: "950", color: "#0c1838", var: "--color-sapphire-950" },
      ],
    },
    {
      name: "Ruby Red",
      description: "Vibrant ruby reds for passion and energy",
      shades: [
        { name: "50", color: "#fef2f2", var: "--color-ruby-50" },
        { name: "100", color: "#fee2e2", var: "--color-ruby-100" },
        { name: "200", color: "#fecaca", var: "--color-ruby-200" },
        { name: "300", color: "#fca5a5", var: "--color-ruby-300" },
        { name: "500", color: "#ef4444", var: "--color-ruby-500" },
        { name: "700", color: "#b91c1c", var: "--color-ruby-700" },
        { name: "900", color: "#7f1d1d", var: "--color-ruby-900" },
        { name: "950", color: "#450a0a", var: "--color-ruby-950" },
      ],
    },
    {
      name: "Amethyst Purple",
      description: "Royal amethyst purples for creativity and wisdom",
      shades: [
        { name: "50", color: "#faf5ff", var: "--color-amethyst-50" },
        { name: "100", color: "#f3e8ff", var: "--color-amethyst-100" },
        { name: "200", color: "#e9d5ff", var: "--color-amethyst-200" },
        { name: "300", color: "#d8b4fe", var: "--color-amethyst-300" },
        { name: "500", color: "#a855f7", var: "--color-amethyst-500" },
        { name: "700", color: "#7e22ce", var: "--color-amethyst-700" },
        { name: "900", color: "#581c87", var: "--color-amethyst-900" },
        { name: "950", color: "#3b0764", var: "--color-amethyst-950" },
      ],
    },
  ];

  const darkBackgrounds = [
    { name: "Primary", color: "#0a0e17", var: "--color-dark-bg-primary" },
    { name: "Secondary", color: "#111827", var: "--color-dark-bg-secondary" },
    { name: "Tertiary", color: "#1f2937", var: "--color-dark-bg-tertiary" },
    { name: "Elevated", color: "#242d3d", var: "--color-dark-bg-elevated" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-sapphire-400 to-purple-400 bg-clip-text text-transparent">
              Jewel Tone Dark Theme
            </h1>
            <p className="text-lg text-gray-600 dark:text-emerald-200 max-w-3xl mx-auto">
              Experience our luxurious dark mode palette featuring deep emerald greens,
              sapphire blues, ruby reds, and amethyst purples. These rich jewel tones
              add depth and sophistication to the dark theme.
            </p>
          </div>
        </FadeIn>

        {/* Dark Backgrounds Section */}
        <section className="mb-16">
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-emerald-50">
              Rich Dark Backgrounds
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {darkBackgrounds.map((bg, index) => (
                <motion.div
                  key={bg.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  style={{ backgroundColor: bg.color }}
                >
                  <div className="p-6 h-40 flex flex-col justify-end">
                    <p className="text-white font-semibold">{bg.name}</p>
                    <p className="text-gray-300 text-sm font-mono">{bg.color}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Jewel Tone Palettes */}
        {jewelTones.map((tone, toneIndex) => (
          <section key={tone.name} className="mb-16">
            <FadeIn delay={toneIndex * 0.1}>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-emerald-50">
                {tone.name}
              </h2>
              <p className="text-gray-600 dark:text-emerald-200 mb-8">
                {tone.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {tone.shades.map((shade, index) => (
                  <motion.div
                    key={shade.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (toneIndex * 0.2) + (index * 0.05) }}
                    className="relative group cursor-pointer"
                  >
                    <div
                      className="w-full h-24 rounded-lg shadow-md transition-transform group-hover:scale-105"
                      style={{ backgroundColor: shade.color }}
                    />
                    <div className="mt-2">
                      <p className="text-sm font-semibold text-gray-900 dark:text-emerald-50">
                        {shade.name}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-emerald-200 font-mono">
                        {shade.color}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </section>
        ))}

        {/* Example Components */}
        <section className="mt-20">
          <FadeIn delay={0.4}>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-emerald-50">
              Components with Jewel Tones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Emerald Card */}
              <GlowCard glowColor="rgba(5, 150, 105, 0.4)">
                <motion.div
                  className="p-6 bg-white dark:bg-gradient-to-br dark:from-emerald-950 dark:to-emerald-900 rounded-lg"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-emerald-50">
                    Emerald Growth
                  </h3>
                  <p className="text-gray-600 dark:text-emerald-200">
                    Rich emerald tones symbolize growth, prosperity, and natural beauty.
                  </p>
                </motion.div>
              </GlowCard>

              {/* Sapphire Card */}
              <GlowCard glowColor="rgba(30, 64, 175, 0.4)">
                <motion.div
                  className="p-6 bg-white dark:bg-gradient-to-br dark:from-sapphire-950 dark:to-sapphire-900 rounded-lg"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-sapphire-50">
                    Sapphire Trust
                  </h3>
                  <p className="text-gray-600 dark:text-sapphire-200">
                    Deep sapphire blues convey trust, stability, and professional excellence.
                  </p>
                </motion.div>
              </GlowCard>

              {/* Ruby Card */}
              <GlowCard glowColor="rgba(185, 28, 28, 0.4)">
                <motion.div
                  className="p-6 bg-white dark:bg-gradient-to-br dark:from-ruby-950 dark:to-ruby-900 rounded-lg"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-ruby-50">
                    Ruby Passion
                  </h3>
                  <p className="text-gray-600 dark:text-ruby-200">
                    Vibrant ruby reds express passion, energy, and bold statements.
                  </p>
                </motion.div>
              </GlowCard>

              {/* Amethyst Card */}
              <GlowCard glowColor="rgba(126, 34, 206, 0.4)">
                <motion.div
                  className="p-6 bg-white dark:bg-gradient-to-br dark:from-amethyst-950 dark:to-amethyst-900 rounded-lg"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-amethyst-50">
                    Amethyst Wisdom
                  </h3>
                  <p className="text-gray-600 dark:text-amethyst-200">
                    Royal amethyst purples represent creativity, wisdom, and luxury.
                  </p>
                </motion.div>
              </GlowCard>

              {/* Mixed Gradient Card */}
              <GlowCard glowColor="rgba(5, 150, 105, 0.4)">
                <motion.div
                  className="p-6 bg-white dark:bg-gradient-to-br dark:from-emerald-950 dark:via-sapphire-950 dark:to-amethyst-950 rounded-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-emerald-50">
                    Jewel Harmony
                  </h3>
                  <p className="text-gray-600 dark:text-emerald-200">
                    Combining all jewel tones creates a harmonious, luxurious experience.
                  </p>
                </motion.div>
              </GlowCard>

              {/* Shadow Showcase */}
              <GlowCard glowColor="rgba(147, 51, 234, 0.4)">
                <motion.div
                  className="p-6 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-amethyst-50">
                    Enhanced Shadows
                  </h3>
                  <p className="text-gray-600 dark:text-amethyst-200">
                    Notice the jewel-toned shadows adding depth and dimension.
                  </p>
                </motion.div>
              </GlowCard>
            </div>
          </FadeIn>
        </section>

        {/* Text Examples */}
        <section className="mt-20">
          <FadeIn delay={0.5}>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-emerald-50">
              Text with Jewel Tones
            </h2>
            <div className="space-y-6 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-sapphire-950 p-8 rounded-lg">
              <p className="text-2xl text-gray-900 dark:text-emerald-50">
                Heading text uses emerald-50 for brightness
              </p>
              <p className="text-lg text-gray-700 dark:text-sapphire-100">
                Body text uses sapphire-100 for readability
              </p>
              <p className="text-gray-600 dark:text-emerald-200">
                Secondary text uses emerald-200 for subtle contrast
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="px-4 py-2 bg-emerald-500 text-white rounded-lg">
                  Emerald Button
                </span>
                <span className="px-4 py-2 bg-sapphire-600 text-white rounded-lg">
                  Sapphire Button
                </span>
                <span className="px-4 py-2 bg-ruby-600 text-white rounded-lg">
                  Ruby Button
                </span>
                <span className="px-4 py-2 bg-amethyst-600 text-white rounded-lg">
                  Amethyst Button
                </span>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
}
