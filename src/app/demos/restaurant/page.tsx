'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function RestaurantDemo() {
  const [activeSection, setActiveSection] = useState('home');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showReservation, setShowReservation] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Fresh mozzarella, basil, and tomato sauce',
      price: 14.99,
      category: 'Pizza',
      image: '🍕',
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      description: 'Creamy sauce with pancetta and parmesan',
      price: 16.99,
      category: 'Pasta',
      image: '🍝',
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Romaine, croutons, parmesan, classic dressing',
      price: 10.99,
      category: 'Salads',
      image: '🥗',
    },
    {
      id: 4,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with espresso',
      price: 8.99,
      category: 'Desserts',
      image: '🍰',
    },
    {
      id: 5,
      name: 'Pepperoni Pizza',
      description: 'Loaded with pepperoni and mozzarella',
      price: 15.99,
      category: 'Pizza',
      image: '🍕',
    },
    {
      id: 6,
      name: 'Fettuccine Alfredo',
      description: 'Rich and creamy parmesan sauce',
      price: 15.99,
      category: 'Pasta',
      image: '🍝',
    },
  ];

  const addToCart = (item: any) => {
    setCartItems([...cartItems, item]);
    setShowCart(true);
    setTimeout(() => setShowCart(false), 3000);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 text-center text-sm sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/demos" className="hover:underline flex items-center gap-2">
            ← Back to Demos
          </Link>
          <span className="font-bold">🎭 INTERACTIVE DEMO - Try all the features!</span>
          <Link href="/contact" className="hover:underline">
            Build Your Own →
          </Link>
        </div>
      </div>

      {/* Restaurant Header */}
      <header className="bg-white shadow-md sticky top-12 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-3xl font-bold text-orange-600 font-serif">
              Bella Vista
            </div>

            <nav className="hidden md:flex gap-8">
              {['home', 'menu', 'reservations', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize font-semibold transition-colors ${
                    activeSection === section
                      ? 'text-orange-600 border-b-2 border-orange-600'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setShowCart(!showCart)}
              className="relative bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              🛒 Cart ({cartItems.length})
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {activeSection === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero */}
            <section className="relative h-[500px] bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
              <div className="text-center">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-6xl font-bold text-gray-900 mb-4 font-serif"
                >
                  Welcome to Bella Vista
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl text-gray-700 mb-8"
                >
                  Authentic Italian Cuisine in the Heart of Downtown
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4 justify-center"
                >
                  <button
                    onClick={() => setActiveSection('menu')}
                    className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition transform hover:scale-105"
                  >
                    View Menu
                  </button>
                  <button
                    onClick={() => setShowReservation(true)}
                    className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition transform hover:scale-105"
                  >
                    Make Reservation
                  </button>
                </motion.div>
              </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-5xl mb-4">👨</div>
                    <h3 className="text-xl font-bold mb-2">Expert Chefs</h3>
                    <p className="text-gray-600">
                      20+ years of Italian culinary expertise
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl mb-4">🍷</div>
                    <h3 className="text-xl font-bold mb-2">Fine Wines</h3>
                    <p className="text-gray-600">
                      Curated selection from Italian vineyards
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl mb-4">🌿</div>
                    <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
                    <p className="text-gray-600">
                      Locally sourced, organic produce daily
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {activeSection === 'menu' && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16"
          >
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Our Menu
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-gradient-to-br from-orange-100 to-red-100 h-48 flex items-center justify-center">
                      <div className="text-8xl">{item.image}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.name}
                        </h3>
                        <span className="text-xl font-bold text-orange-600">
                          ${item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">
                        {item.description}
                      </p>
                      <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                        {item.category}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeSection === 'reservations' && (
          <motion.div
            key="reservations"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16"
          >
            <div className="container mx-auto px-4 max-w-2xl">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Make a Reservation
              </h2>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Time
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                        <option>5:00 PM</option>
                        <option>6:00 PM</option>
                        <option>7:00 PM</option>
                        <option>8:00 PM</option>
                        <option>9:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Party Size
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option>2 people</option>
                      <option>3 people</option>
                      <option>4 people</option>
                      <option>5 people</option>
                      <option>6+ people</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Allergies, dietary restrictions, special occasions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition"
                  >
                    Confirm Reservation
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}

        {activeSection === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16"
          >
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Our Story
              </h2>

              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 1995, Bella Vista has been serving authentic Italian cuisine to the community for over 25 years. Our family recipes have been passed down through generations, bringing the taste of Italy to your table.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Chef Marco Rossi, trained in the culinary schools of Rome and Florence, leads our kitchen with passion and expertise. Every dish is crafted with care using traditional techniques and the finest ingredients.
                </p>
                <p className="text-lg text-gray-700">
                  We believe in creating not just meals, but memorable dining experiences. Whether you're celebrating a special occasion or enjoying a casual dinner, Bella Vista welcomes you with open arms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-orange-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
                  <div className="text-gray-700">Years in Business</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">50K+</div>
                  <div className="text-gray-700">Happy Customers</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">4.8★</div>
                  <div className="text-gray-700">Average Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeSection === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16"
          >
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Visit Us
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Location & Hours</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Main Street<br />
                        Downtown, CA 90210
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@bellavista.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                      <p className="text-gray-600">
                        Mon-Thu: 11am - 10pm<br />
                        Fri-Sat: 11am - 11pm<br />
                        Sunday: 12pm - 9pm
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Your Cart</h3>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-600">${item.price}</p>
                      </div>
                      <button
                        onClick={() => setCartItems(cartItems.filter((_, i) => i !== index))}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-orange-600 text-white py-4 rounded-lg font-bold hover:bg-orange-700 transition">
                  Checkout
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4 font-serif">Bella Vista</h3>
          <p className="text-gray-400 mb-4">Authentic Italian Cuisine</p>
          <p className="text-sm text-gray-500">
            © 2025 Bella Vista Restaurant. This is a demo website by JG Services LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}
