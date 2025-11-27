'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function FloatingIntakeButton() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/intake');
  };

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, type: 'spring', stiffness: 100 }}
    >
      <motion.button
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glowing pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main button */}
        <div className="relative glass-lg px-8 py-4 rounded-full flex items-center gap-3 border-2 border-white/20 hover:border-white/40 transition-all">
          {/* Animated icon */}
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="text-2xl"
          >
            📋
          </motion.div>

          {/* Text */}
          <div className="text-left">
            <div className="font-bold text-white text-lg whitespace-nowrap">
              Start Your Project
            </div>
            <div className="text-blue-200 text-xs">
              Free consultation & quote
            </div>
          </div>

          {/* Arrow */}
          <motion.div
            className="text-white text-xl"
            animate={{
              x: isHovered ? [0, 5, 0] : 0,
            }}
            transition={{
              duration: 0.6,
              repeat: isHovered ? Infinity : 0,
            }}
          >
            →
          </motion.div>
        </div>

        {/* Sparkle effects */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 1,
                  }}
                  animate={{
                    x: Math.cos((i * Math.PI) / 3) * 40,
                    y: Math.sin((i * Math.PI) / 3) * 40,
                    scale: [0, 1, 0],
                    opacity: [1, 1, 0],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                    delay: i * 0.1,
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Tooltip on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <div className="glass-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-sm text-white font-semibold">
                Click to start your project intake
              </p>
              <p className="text-xs text-blue-200">
                Takes 15-20 minutes • Get instant quote
              </p>
            </div>
            {/* Arrow pointing down */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
