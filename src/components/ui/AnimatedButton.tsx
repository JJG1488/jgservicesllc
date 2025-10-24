'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function AnimatedButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const baseStyles =
    'inline-block font-bold py-3 px-8 rounded-lg transition-all duration-300 relative overflow-hidden group'
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
  }

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
      {/* Animated background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%' }}
        whileHover={{ x: '0%' }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
}
