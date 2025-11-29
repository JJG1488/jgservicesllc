/**
 * Footer Data Configuration
 *
 * Centralized footer links, contact info, and branding configuration.
 * Separate data from component logic for easy customization.
 *
 * @see /src/components/Footer.tsx for usage
 */

/**
 * Footer Link Type
 */
export interface FooterLink {
  /** Display name */
  name: string;
  /** Link URL */
  href: string;
  /** External link (opens in new tab) */
  external?: boolean;
}

/**
 * Footer Links by Category
 */
export const footerLinks = {
  company: [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'Projects', href: '/projects' },
  ],
  resources: [
    { name: 'Interactive Demos', href: '/demos' },
    { name: 'Free Resources', href: '/resources' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ],
  connect: [
    { name: 'Contact', href: '/contact' },
    { name: 'Schedule a Call', href: '/schedule' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jamesgault1488', external: true },
    { name: 'GitHub', href: 'https://github.com/JJG1488', external: true },
  ],
} as const;

/**
 * Company Contact Information
 */
export const contactInfo = {
  /** Company name */
  companyName: 'JGServicesLLC',
  /** Tagline/description */
  description: 'Professional web development services tailored to your business needs. From concept to launch and beyond, we build websites that drive results.',
  /** Email address */
  email: 'info@jgservicesllc.com',
  /** Phone number (display format) */
  phone: '(586) 276-5646',
  /** Phone number (tel: link format) */
  phoneLink: '+15862765646',
  /** Emojis for contact methods */
  icons: {
    email: '📧',
    phone: '📱',
  },
} as const;

/**
 * Footer CTA Configuration
 */
export const footerCTA = {
  /** Heading text */
  heading: 'Ready to Start Your Project?',
  /** Description text */
  description: 'Get a free consultation and see how we can help your business grow online.',
  /** Button text */
  buttonText: 'Get Started Today',
  /** Button link */
  buttonHref: '/intake',
} as const;

/**
 * Legal Links
 */
export const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
] as const;

/**
 * Footer Credits
 */
export const footerCredits = {
  /** Copyright holder */
  copyrightHolder: 'JGServicesLLC',
  /** Built with text */
  builtWith: 'Built with',
  /** Technologies used */
  technologies: 'Next.js, TypeScript & Tailwind CSS',
  /** Heart emoji */
  heart: '♥',
} as const;

/**
 * Footer Styling Configuration
 */
export const footerStyles = {
  /** Footer background */
  background: 'glass-md',
  /** Top border */
  border: 'border-t border-white/10',
  /** Top margin */
  margin: 'mt-20',
  /** Container padding */
  padding: 'py-12',
  /** Grid layout */
  gridLayout: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
  /** Grid gap */
  gridGap: 'gap-8',
} as const;

/**
 * Footer Animation Delays
 */
export const animationDelays = {
  companyInfo: 0,
  companyLinks: 0.1,
  resourcesLinks: 0.2,
  connectLinks: 0.3,
  bottomBar: 0.4,
  cta: 0.5,
} as const;

/**
 * Complete footer configuration
 */
export const footerConfig = {
  footerLinks,
  contactInfo,
  footerCTA,
  legalLinks,
  footerCredits,
  footerStyles,
  animationDelays,
} as const;

export default footerConfig;
