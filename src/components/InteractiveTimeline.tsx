'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelinePhase {
  number: string;
  title: string;
  duration: string;
  description: string;
  color: string;
  icon: string;
}

interface InteractiveTimelineProps {
  phases: TimelinePhase[];
}

export default function InteractiveTimeline({ phases }: InteractiveTimelineProps) {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

      {/* Timeline items */}
      <div className="space-y-12">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-row`}
            onMouseEnter={() => setActivePhase(index)}
            onMouseLeave={() => setActivePhase(null)}
          >
            {/* Content */}
            <motion.div
              className={`flex-1 ml-20 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer"
                animate={{
                  boxShadow:
                    activePhase === index
                      ? '0 20px 60px rgba(59, 130, 246, 0.3)'
                      : '0 10px 30px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {phase.title}
                  </h3>
                  <span className="text-4xl">{phase.icon}</span>
                </div>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {phase.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {phase.description}
                </p>

                <AnimatePresence>
                  {activePhase === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        Click to learn more about this phase →
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Circle indicator */}
            <motion.div
              className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10"
              whileHover={{ scale: 1.3 }}
              animate={{
                scale: activePhase === index ? 1.2 : 1,
              }}
            >
              <motion.div
                className={`w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg cursor-pointer`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {phase.number}
              </motion.div>

              {/* Pulse effect when active */}
              {activePhase === index && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-500"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>

      {/* Progress indicator */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        {phases.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              activePhase === index
                ? 'bg-blue-500 scale-150'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            whileHover={{ scale: 1.5 }}
            onClick={() => {
              const element = document.querySelectorAll('[data-phase]')[index];
              element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            animate={{
              scale: activePhase === index ? 1.5 : 1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
