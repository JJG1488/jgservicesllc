'use client'

import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

interface CountUpStatProps {
  end: number;
  label: string;
  icon?: string;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

export default function CountUpStat({
  end,
  label,
  icon,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = '',
  delay = 0,
}: CountUpStatProps) {
  const { ref, value } = useCountUp({
    end,
    duration,
    decimals,
    suffix,
    prefix,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      className="text-center"
    >
      {icon && (
        <motion.div
          className="text-5xl mb-2"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay
          }}
        >
          {icon}
        </motion.div>
      )}
      <motion.div
        className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"
        whileHover={{ scale: 1.1 }}
      >
        {value}
      </motion.div>
      <div className="text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </motion.div>
  );
}
