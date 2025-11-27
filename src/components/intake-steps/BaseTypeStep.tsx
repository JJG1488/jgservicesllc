'use client';

import { ProjectIntake } from '@/types/intake';
import { motion } from 'framer-motion';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

const siteTypes = [
  {
    type: 'landing' as const,
    name: 'Single Page / Landing Page',
    price: 500,
    description: 'Perfect for simple campaigns, promotions, or single-purpose sites',
    features: ['1 page', 'Contact form', 'Responsive design', 'Basic SEO'],
  },
  {
    type: 'brochure' as const,
    name: 'Multi-page Brochure (3-5 pages)',
    price: 1500,
    description: 'Ideal for small businesses showcasing services and information',
    features: ['3-5 pages', 'Contact form', 'Gallery/Portfolio', 'Mobile responsive'],
  },
  {
    type: 'business' as const,
    name: 'Multi-page Business (6-10 pages)',
    price: 3500,
    description: 'Comprehensive business website with multiple sections',
    features: ['6-10 pages', 'Advanced forms', 'Blog integration', 'SEO optimization'],
  },
  {
    type: 'ecommerce' as const,
    name: 'E-commerce',
    price: 5000,
    description: 'Full online store with shopping cart and payment processing',
    features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Customer accounts'],
  },
  {
    type: 'webapp' as const,
    name: 'Web Application / SaaS MVP',
    price: 15000,
    description: 'Custom web application or SaaS minimum viable product',
    features: ['User authentication', 'Dashboard', 'Database', 'Custom features'],
  },
];

export default function BaseTypeStep({ intake, onUpdate }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          What type of website do you need?
        </h3>
        <p className="text-blue-200">
          Choose the base package that best fits your project. You can customize features in the next steps.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {siteTypes.map((site) => (
          <motion.button
            key={site.type}
            onClick={() =>
              onUpdate({
                ...intake,
                baseType: { type: site.type, basePrice: site.price },
              })
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`text-left p-6 rounded-xl border-2 transition-all ${
              intake.baseType.type === site.type
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {site.name}
                </h4>
                <p className="text-sm text-blue-200">{site.description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-300">
                  ${site.price.toLocaleString()}
                </div>
                <div className="text-xs text-blue-200">starting price</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {site.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs"
                >
                  {feature}
                </span>
              ))}
            </div>

            {intake.baseType.type === site.type && (
              <div className="mt-3 flex items-center gap-2 text-blue-300 text-sm">
                <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                Selected
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
