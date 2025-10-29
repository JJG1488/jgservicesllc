"use client";

export default function GlassTestPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* Background with gradient for better glass visibility */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-sapphire-700 dark:via-amethyst-700 dark:to-sapphire-800" />

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Glass Effect Test
          </h1>
          <p className="text-xl text-white/90">
            Testing glassmorphism with your Sapphire-Amethyst theme
          </p>
        </div>

        {/* Glass Size Variants */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-white">Glass Sizes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Glass SM */}
            <div className="glass-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3 text-white">Glass SM</h3>
              <p className="text-white/80 mb-4">
                Subtle glass effect with light blur (8px) and minimal transparency.
              </p>
              <div className="text-sm text-white/60 space-y-1">
                <div>• Blur: 8px</div>
                <div>• Opacity: 8%</div>
                <div>• Border: 12%</div>
              </div>
            </div>

            {/* Glass Default */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3 text-white">Glass</h3>
              <p className="text-white/80 mb-4">
                Standard glass effect with medium blur (10px) and balanced transparency.
              </p>
              <div className="text-sm text-white/60 space-y-1">
                <div>• Blur: 10px</div>
                <div>• Opacity: 10%</div>
                <div>• Border: 18%</div>
              </div>
            </div>

            {/* Glass MD */}
            <div className="glass-md rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3 text-white">Glass MD</h3>
              <p className="text-white/80 mb-4">
                Enhanced glass effect with stronger blur (12px) and more pronounced transparency.
              </p>
              <div className="text-sm text-white/60 space-y-1">
                <div>• Blur: 12px</div>
                <div>• Opacity: 12%</div>
                <div>• Border: 20%</div>
              </div>
            </div>

            {/* Glass LG */}
            <div className="glass-lg rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3 text-white">Glass LG</h3>
              <p className="text-white/80 mb-4">
                Maximum glass effect with heavy blur (16px) and strongest transparency.
              </p>
              <div className="text-sm text-white/60 space-y-1">
                <div>• Blur: 16px</div>
                <div>• Opacity: 15%</div>
                <div>• Border: 25%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Glass Cards */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-white">Interactive Glass Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Fast</h3>
              <p className="text-white/80">
                Hover to see the glass card effect with smooth transitions and elevation.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Beautiful</h3>
              <p className="text-white/80">
                The glass effect creates depth and modern aesthetics with jewel tone glows.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Smooth</h3>
              <p className="text-white/80">
                Backdrop blur creates that frosted glass look that&apos;s so popular in modern UI.
              </p>
            </div>
          </div>
        </section>

        {/* Glass with Content */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-white">Glass Content Sections</h2>

          {/* Hero Section */}
          <div className="glass-lg rounded-3xl p-12 mb-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Welcome to JG Services LLC
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Professional web development with modern glassmorphism design.
                This glass effect works beautifully with your Sapphire-Amethyst theme.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="glass-md rounded-xl px-6 py-3 text-white font-semibold hover:glass-lg transition-all">
                  Get Started
                </button>
                <button className="glass-sm rounded-xl px-6 py-3 text-white font-semibold hover:glass-md transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Dark Mode Support</h3>
              <p className="text-white/80 mb-4">
                The glass effect automatically adapts to your dark mode with beautiful
                Sapphire and Amethyst jewel tone glows.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>✓ Automatic theme detection</li>
                <li>✓ Jewel tone shadows in dark mode</li>
                <li>✓ Perfect contrast ratios</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Browser Optimized</h3>
              <p className="text-white/80 mb-4">
                Includes both standard and WebKit backdrop filters for maximum
                browser compatibility.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>✓ Chrome, Firefox, Safari support</li>
                <li>✓ Graceful degradation</li>
                <li>✓ Hardware-accelerated blur</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Nested Glass */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-white">Nested Glass</h2>
          <div className="glass-lg rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-6 text-white">Outer Container</h3>
            <p className="text-white/90 mb-8">
              You can nest glass elements to create layered depth effects.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-md rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-3 text-white">Nested Card 1</h4>
                <p className="text-white/80">
                  This creates interesting depth with multiple layers of glass.
                </p>
              </div>
              <div className="glass-md rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-3 text-white">Nested Card 2</h4>
                <p className="text-white/80">
                  The blur effect stacks to create more pronounced frosting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section className="glass rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-8 text-white">How to Use</h2>
          <div className="space-y-6 text-white/90">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Basic Usage</h3>
              <code className="block bg-black/20 rounded-lg p-4 text-sm">
                &lt;div className=&quot;glass rounded-xl p-8&quot;&gt;<br />
                &nbsp;&nbsp;Your content here<br />
                &lt;/div&gt;
              </code>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Available Classes</h3>
              <ul className="space-y-2 text-white/80">
                <li><code className="bg-black/20 px-2 py-1 rounded">.glass-sm</code> - Subtle effect</li>
                <li><code className="bg-black/20 px-2 py-1 rounded">.glass</code> - Standard effect</li>
                <li><code className="bg-black/20 px-2 py-1 rounded">.glass-md</code> - Enhanced effect</li>
                <li><code className="bg-black/20 px-2 py-1 rounded">.glass-lg</code> - Maximum effect</li>
                <li><code className="bg-black/20 px-2 py-1 rounded">.glass-card</code> - Interactive card with hover</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
