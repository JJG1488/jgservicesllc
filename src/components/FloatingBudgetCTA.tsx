'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingBudgetCTA() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-3 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 max-w-xs border-2 border-green-500"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <h3 className="font-bold text-gray-900 dark:text-white">Budget-Friendly!</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Professional website for just <strong className="text-green-600 dark:text-green-400">$300</strong>
              </p>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>✓ Full creative control</li>
                <li>✓ Perfect for tight budgets</li>
                <li>✓ Fast turnaround</li>
                <li>✓ Professional quality</li>
              </ul>
              <Link
                href="/contract"
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started →
              </Link>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-full text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='relative inset-x-x-x-0 right-15.5'
        // className="relative justify-baseline left-0 bottom-0 top-0 right-0 text-gray-400 hover:text-white transition px-3 py-1 rounded hover:bg-gray-700"
        // className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full shadow-2xl transition-all overflow-hidden"
        style={{
          width: isHovered ? '180px' : '64px',
          height: '64px',
          transition: 'width 0.3s ease-in-out'
        }}
        aria-label="Budget-Friendly Package"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.span
                key="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm font-bold whitespace-nowrap"
              >
                Only $300! 💰
              </motion.span>
            ) : (
              <motion.span
                key="icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-3xl"
              >
                💰
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-0 animate-ping" style={{ animationDuration: '2s' }}></span>

        {/* Badge for "New" or "$300" */}
        <span className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
          $300
        </span>
      </motion.button>
    </div>
  );
}
