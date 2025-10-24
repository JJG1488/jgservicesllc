'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function EcommerceDemo() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 129.99,
      category: 'Audio',
      rating: 4.5,
      reviews: 234,
      image: '🎧',
      inStock: true,
      features: ['Noise Canceling', 'Bluetooth 5.0', '30hr Battery'],
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 299.99,
      category: 'Wearables',
      rating: 4.8,
      reviews: 567,
      image: '⌚',
      inStock: true,
      features: ['Heart Rate Monitor', 'GPS', 'Water Resistant'],
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 49.99,
      category: 'Accessories',
      rating: 4.3,
      reviews: 123,
      image: '💻',
      inStock: true,
      features: ['Adjustable Height', 'Aluminum', 'Ergonomic'],
    },
    {
      id: 4,
      name: 'USB-C Hub',
      price: 79.99,
      category: 'Accessories',
      rating: 4.6,
      reviews: 345,
      image: '🔌',
      inStock: true,
      features: ['8 Ports', '4K HDMI', '100W Power Delivery'],
    },
    {
      id: 5,
      name: 'Mechanical Keyboard',
      price: 159.99,
      category: 'Peripherals',
      rating: 4.9,
      reviews: 892,
      image: '⌨️',
      inStock: true,
      features: ['RGB Backlight', 'Cherry MX Keys', 'Wireless'],
    },
    {
      id: 6,
      name: 'Webcam 4K',
      price: 89.99,
      category: 'Peripherals',
      rating: 4.4,
      reviews: 456,
      image: '📷',
      inStock: false,
      features: ['4K Resolution', 'Auto Focus', 'Built-in Mic'],
    },
  ];

  const categories = ['all', 'Audio', 'Wearables', 'Accessories', 'Peripherals'];

  const filteredProducts = products.filter(
    p => selectedCategory === 'all' || p.category === selectedCategory
  );

  const addToCart = (product: any) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    setShowCart(true);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 text-center text-sm sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/demos" className="hover:underline flex items-center gap-2">
            ← Back to Demos
          </Link>
          <span className="font-bold">🎭 INTERACTIVE DEMO - Try shopping!</span>
          <Link href="/contact" className="hover:underline">
            Build Your Store →
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-12 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechGear Store
            </div>

            <div className="flex items-center gap-6">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>

              <button
                onClick={() => setShowCart(!showCart)}
                className="relative bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                🛒 Cart ({cart.length})
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    {cart.length}
                  </span>
                )}
              </button>

              <button className="hidden md:block text-gray-700 hover:text-blue-600 transition">
                👤 Account
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white mb-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Tech Gear Sale</h1>
            <p className="text-xl mb-6">Up to 40% off on select items. Limited time offer!</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Filters & Sort */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Categories:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-semibold capitalize transition ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mr-3">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 h-64 flex items-center justify-center relative">
                <div className="text-8xl">{product.image}</div>
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Out of Stock
                  </div>
                )}
                {product.inStock && product.rating >= 4.7 && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Bestseller
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-1">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600 mb-1">
                      <span className="text-green-500">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`px-6 py-3 rounded-lg font-semibold transition ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-xl shadow-md p-8">
          <div className="text-center">
            <div className="text-4xl mb-2">🚚</div>
            <h4 className="font-bold text-gray-900 mb-1">Free Shipping</h4>
            <p className="text-sm text-gray-600">On orders over $50</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">↩️</div>
            <h4 className="font-bold text-gray-900 mb-1">Easy Returns</h4>
            <p className="text-sm text-gray-600">30-day return policy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🔒</div>
            <h4 className="font-bold text-gray-900 mb-1">Secure Payment</h4>
            <p className="text-sm text-gray-600">SSL encrypted checkout</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">💬</div>
            <h4 className="font-bold text-gray-900 mb-1">24/7 Support</h4>
            <p className="text-sm text-gray-600">Always here to help</p>
          </div>
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCart(false)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Shopping Cart</h3>
                  <button
                    onClick={() => setShowCart(false)}
                    className="text-gray-500 hover:text-gray-700 text-3xl"
                  >
                    ×
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-gray-500">Your cart is empty</p>
                    <button
                      onClick={() => setShowCart(false)}
                      className="mt-4 text-blue-600 hover:underline"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item, index) => (
                        <div key={index} className="flex gap-4 border-b pb-4">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center text-3xl">
                            {item.image}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-600">${item.price}</p>
                            <button
                              onClick={() => removeFromCart(index)}
                              className="text-sm text-red-500 hover:text-red-700 mt-1"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-semibold">${total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Shipping:</span>
                        <span className="font-semibold text-green-600">FREE</span>
                      </div>
                      <div className="flex justify-between text-xl font-bold pt-2 border-t">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition mb-3">
                      Proceed to Checkout
                    </button>
                    <button
                      onClick={() => setShowCart(false)}
                      className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                    >
                      Continue Shopping
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li>All Products</li>
                <li>New Arrivals</li>
                <li>Best Sellers</li>
                <li>Sale</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Contact Us</li>
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Get updates on new products and offers
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
            © 2025 TechGear Store. This is a demo website by JG Services LLC.
          </div>
        </div>
      </footer>
    </div>
  );
}
