'use client';

import Logo, { CodeLogo, ShieldLogo, HexLogo, LineLogo } from '@/components/Logo';
import {
  OrbitLogo,
  WindowLogo,
  BoltLogo,
  CubeLogo,
  InfinityLogo,
  RocketLogo,
  PeakLogo,
  StackLogo,
  SignalLogo,
  CompassLogo
} from '@/components/IconLogos';

export default function LogoShowcase() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            JG Services Logo Variations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose your favorite logo design. All logos are scalable SVG and work in light/dark mode.
          </p>
        </div>

        {/* Main Logo - All Variants */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Primary Logo (Recommended)
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Icon Only */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Icon Only</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Perfect for favicons, app icons, social media avatars
              </p>
              <div className="flex items-center gap-6 p-8 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <Logo variant="icon" size="sm" />
                <Logo variant="icon" size="md" />
                <Logo variant="icon" size="lg" />
                <Logo variant="icon" size="xl" />
              </div>
            </div>

            {/* Horizontal */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Horizontal</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Best for navigation bars, headers, email signatures
              </p>
              <div className="space-y-4 p-8 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <Logo variant="horizontal" size="sm" />
                <Logo variant="horizontal" size="md" />
                <Logo variant="horizontal" size="lg" />
              </div>
            </div>

            {/* Vertical */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Vertical</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Great for business cards, letterheads, square spaces
              </p>
              <div className="flex items-start gap-8 p-8 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <Logo variant="vertical" size="md" />
                <Logo variant="vertical" size="lg" />
              </div>
            </div>

            {/* Wordmark */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Wordmark Only</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Clean text-based logo for minimal designs
              </p>
              <div className="space-y-4 p-8 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <Logo variant="wordmark" size="sm" />
                <Logo variant="wordmark" size="md" />
              </div>
            </div>
          </div>
        </div>

        {/* Symbol/Icon Based Logos (No Letters) */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Symbol/Icon Based Logos
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Pure symbols with no letters - memorable, scalable, and timeless
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Orbiting Nodes */}
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <OrbitLogo size={80} />
              </div>
              <h3 className="text-center font-semibold text-gray-700 dark:text-gray-300">Orbiting Nodes</h3>
              <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                Connectivity & networks
              </p>
            </div>

            {/* Code Window */}
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <WindowLogo size={80} />
              </div>
              <h3 className="text-center font-semibold text-gray-700 dark:text-gray-300">Code Window</h3>
              <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                Development & coding
              </p>
            </div>

            {/* Lightning Bolt */}
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <BoltLogo size={80} />
              </div>
              <h3 className="text-center font-semibold text-gray-700 dark:text-gray-300">Lightning Bolt</h3>
              <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                Speed & power
              </p>
            </div>

            {/* 3D Cube */}
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <CubeLogo size={80} />
              </div>
              <h3 className="text-center font-semibold text-gray-700 dark:text-gray-300">3D Cube</h3>
              <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                Building & structure
              </p>
            </div>

            {/* Infinity Loop */}
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <InfinityLogo size={80} />
              </div>
              <h3 className="text-center font-semibold text-gray-700 dark:text-gray-300">Infinity Loop</h3>
              <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                Continuous service
              </p>
            </div>

            {/* Rocket */}
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <RocketLogo size={80} />
              </div>
              <h3 className="text-center font-semibold text-gray-700 dark:text-gray-300">Rocket</h3>
              <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                Growth & launch
              </p>
            </div>

            {/* Mountain Peak */}
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <PeakLogo size={80} />
              </div>
              <h3 className="text-center font-semibold text-gray-700 dark:text-gray-300">Mountain Peak</h3>
              <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                Achievement & heights
              </p>
            </div>

            {/* Layered Stack */}
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <StackLogo size={80} />
              </div>
              <h3 className="text-center font-semibold text-gray-700 dark:text-gray-300">Layered Stack</h3>
              <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                Tech stack & layers
              </p>
            </div>

            {/* Signal Waves */}
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <SignalLogo size={80} />
              </div>
              <h3 className="text-center font-semibold text-gray-700 dark:text-gray-300">Signal Waves</h3>
              <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                Broadcasting & reach
              </p>
            </div>

            {/* Compass */}
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <CompassLogo size={80} />
              </div>
              <h3 className="text-center font-semibold text-gray-700 dark:text-gray-300">Compass</h3>
              <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                Direction & guidance
              </p>
            </div>
          </div>
        </div>

        {/* Dark Background Test */}
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 rounded-2xl shadow-lg p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Dark Background Test
          </h2>
          <p className="text-blue-200 mb-8">
            All logos look great on dark backgrounds with gradients
          </p>

          <div className="flex flex-wrap items-center justify-center gap-12">
            <OrbitLogo size={80} />
            <WindowLogo size={80} />
            <BoltLogo size={80} />
            <CubeLogo size={80} />
            <RocketLogo size={80} />
            <StackLogo size={80} />
            <CompassLogo size={80} />
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Usage Examples
          </h2>

          <div className="space-y-8">
            {/* Navigation Bar Example */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Navigation Bar
              </h3>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <Logo variant="horizontal" size="sm" />
                  <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Card Example */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Business Card
              </h3>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg p-8 max-w-md">
                <Logo variant="vertical" size="md" />
                <div className="mt-6 space-y-1 text-sm">
                  <p className="font-semibold">James Gault</p>
                  <p className="text-blue-100">Founder & Lead Developer</p>
                  <p className="text-blue-100 mt-2">info@jgservicesllc.com</p>
                  <p className="text-blue-100">(555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* App Icon Example */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                App Icon / Favicon
              </h3>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <Logo variant="icon" size="xl" />
                  <p className="text-xs text-gray-500 mt-2">96x96</p>
                </div>
                <div className="text-center">
                  <Logo variant="icon" size="lg" />
                  <p className="text-xs text-gray-500 mt-2">64x64</p>
                </div>
                <div className="text-center">
                  <Logo variant="icon" size="md" />
                  <p className="text-xs text-gray-500 mt-2">48x48</p>
                </div>
                <div className="text-center">
                  <Logo variant="icon" size="sm" />
                  <p className="text-xs text-gray-500 mt-2">32x32</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Code */}
        <div className="bg-gray-900 text-green-400 rounded-2xl shadow-lg p-12 mt-12">
          <h2 className="text-3xl font-bold mb-6 text-white">
            How to Use
          </h2>

          <div className="space-y-6 font-mono text-sm">
            <div>
              <p className="text-gray-400 mb-2">// Import the logo component:</p>
              <code className="text-green-400">
                import Logo from '@/components/Logo';
              </code>
            </div>

            <div>
              <p className="text-gray-400 mb-2">// Use in your components:</p>
              <div className="space-y-2">
                <code className="block">&lt;Logo variant="icon" size="md" /&gt;</code>
                <code className="block">&lt;Logo variant="horizontal" size="lg" /&gt;</code>
                <code className="block">&lt;Logo variant="vertical" size="md" /&gt;</code>
                <code className="block">&lt;Logo variant="wordmark" size="sm" /&gt;</code>
              </div>
            </div>

            <div>
              <p className="text-gray-400 mb-2">// Alternative logos:</p>
              <div className="space-y-2">
                <code className="block">import {'{ CodeLogo, ShieldLogo, HexLogo, LineLogo }'} from '@/components/Logo';</code>
                <code className="block">&lt;CodeLogo size={'{48}'} /&gt;</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
