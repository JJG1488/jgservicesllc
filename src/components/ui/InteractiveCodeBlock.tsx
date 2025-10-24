'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveCodeBlockProps {
  title: string;
  code: string;
  language: string;
  description?: string;
}

export default function InteractiveCodeBlock({
  title,
  code,
  language,
  description,
}: InteractiveCodeBlockProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-300 font-mono text-sm">{title}</span>
          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
            {language}
          </span>
        </div>

        <div className="flex gap-2">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition px-3 py-1 rounded hover:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? '−' : '+'}
          </motion.button>
          <motion.button
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-white transition px-3 py-1 rounded hover:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? '✓ Copied!' : '📋 Copy'}
          </motion.button>
        </div>
      </div>

      {/* Code */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <pre className="p-6 overflow-x-auto">
              <code className="text-gray-300 font-mono text-sm leading-relaxed">
                {code}
              </code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && (
        <div className="px-6 py-4">
          <pre className="overflow-x-auto">
            <code className="text-gray-300 font-mono text-sm">
              {code.split('\n')[0]}...
            </code>
          </pre>
        </div>
      )}

      {/* Description */}
      {description && isExpanded && (
        <div className="px-6 py-4 bg-gray-800 border-t border-gray-700">
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      )}
    </motion.div>
  );
}
