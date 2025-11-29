/**
 * Navigation Data Configuration
 *
 * Centralized navigation links and branding configuration.
 * Separate data from component logic for easy customization.
 *
 * @see /src/components/Navigation.tsx for usage
 */

/**
 * Navigation Link Type
 */
export interface NavLink {
  /** Link URL */
  href: string;
  /** Display label */
  label: string;
  /** Hide from navigation (for future use) */
  hidden?: boolean;
  /** External link (opens in new tab) */
  external?: boolean;
}

/**
 * Main navigation links
 */
export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/projects', label: 'Projects' },
  { href: '/demos', label: 'Demos' },
  { href: '/resources', label: 'Resources' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

/**
 * Disabled navigation links (commented out in original)
 *
 * Uncomment to enable:
 *
 * export const disabledNavLinks: NavLink[] = [
 *   { href: '/blog', label: 'Blog' },
 *   { href: '/press', label: 'Press' },
 *   { href: '/careers', label: 'Careers' },
 *   { href: '/team', label: 'Team' },
 * ];
 */

/**
 * Site branding configuration
 */
export const siteBranding = {
  /** Site name */
  name: 'JGServicesLLC',
  /** Logo font class */
  logoFont: 'font-ephesis',
  /** Logo text color classes */
  logoColor: 'gradient-text',
  /** Home URL */
  homeUrl: '/',
} as const;

/**
 * Navigation styling configuration
 */
export const navigationStyles = {
  /** Desktop link spacing */
  desktopSpacing: 'space-x-8',
  /** Mobile link spacing */
  mobileSpacing: 'space-y-2',
  /** Navigation height */
  height: 'h-16',
  /** Navigation background */
  background: 'glass-md',
  /** Border style */
  border: 'border-b border-white/10',
  /** Z-index for fixed positioning */
  zIndex: 'z-50',
} as const;

/**
 * Navigation link states
 */
export const linkStates = {
  /** Active link classes */
  active: 'text-white border-b-2 border-blue-400 pb-1',
  /** Inactive link classes */
  inactive: 'text-blue-100 hover:text-white',
  /** Mobile active classes */
  mobileActive: 'bg-blue-500/30 text-white font-medium',
  /** Mobile inactive classes */
  mobileInactive: 'text-blue-100 hover:bg-white/10',
  /** Transition classes */
  transition: 'transition-all duration-300',
} as const;

/**
 * Mobile menu configuration
 */
export const mobileMenu = {
  /** Hamburger button classes */
  buttonClasses: 'md:hidden p-2 rounded-lg hover:bg-white/10 transition',
  /** Icon size */
  iconSize: 'w-6 h-6',
  /** Container padding */
  containerPadding: 'pb-4',
  /** Link padding */
  linkPadding: 'py-3 px-4',
  /** Link border radius */
  linkRounded: 'rounded-lg',
} as const;

/**
 * Complete navigation configuration
 */
export const navigationConfig = {
  navLinks,
  siteBranding,
  navigationStyles,
  linkStates,
  mobileMenu,
} as const;

export default navigationConfig;
