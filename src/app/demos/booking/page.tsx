'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function BookingSystemDemo() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const services = [
    {
      id: 1,
      icon: '💆',
      name: 'Swedish Massage',
      duration: '60 min',
      price: '$95',
      description: 'Relaxing full-body massage to reduce tension and improve circulation',
      benefits: ['Stress relief', 'Pain reduction', 'Better sleep', 'Improved circulation']
    },
    {
      id: 2,
      icon: '💪',
      name: 'Deep Tissue Massage',
      duration: '60 min',
      price: '$115',
      description: 'Targeted pressure to release chronic muscle tension and knots',
      benefits: ['Chronic pain relief', 'Muscle recovery', 'Improved mobility', 'Injury rehabilitation']
    },
    {
      id: 3,
      icon: '🤰',
      name: 'Prenatal Massage',
      duration: '60 min',
      price: '$105',
      description: 'Gentle massage designed for expecting mothers',
      benefits: ['Reduces swelling', 'Relieves back pain', 'Improves sleep', 'Reduces stress']
    },
    {
      id: 4,
      icon: '🔥',
      name: 'Hot Stone Therapy',
      duration: '75 min',
      price: '$135',
      description: 'Heated stones and massage to deeply relax muscles',
      benefits: ['Deep relaxation', 'Muscle tension relief', 'Better circulation', 'Mental calmness']
    },
    {
      id: 5,
      icon: '🌿',
      name: 'Aromatherapy Massage',
      duration: '60 min',
      price: '$105',
      description: 'Massage with essential oils for holistic wellness',
      benefits: ['Stress reduction', 'Mood enhancement', 'Pain relief', 'Immune support']
    },
    {
      id: 6,
      icon: '🏃',
      name: 'Sports Massage',
      duration: '60 min',
      price: '$110',
      description: 'Performance-focused massage for athletes',
      benefits: ['Injury prevention', 'Faster recovery', 'Enhanced performance', 'Flexibility']
    }
  ];

  const therapists = [
    {
      id: 1,
      name: 'Sarah Martinez',
      image: '👩‍⚕️',
      specialty: 'Deep Tissue & Sports',
      experience: '12 years',
      certifications: ['Licensed Massage Therapist', 'Sports Massage Certified', 'Trigger Point Therapy'],
      bio: 'Specializes in helping athletes and active individuals recover and perform at their best.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: '👨‍⚕️',
      specialty: 'Swedish & Relaxation',
      experience: '8 years',
      certifications: ['Licensed Massage Therapist', 'Aromatherapy Certified', 'Reiki Practitioner'],
      bio: 'Creates deeply relaxing experiences that calm both body and mind.'
    },
    {
      id: 3,
      name: 'Jennifer Lopez',
      image: '👩‍⚕️',
      specialty: 'Prenatal & Wellness',
      experience: '15 years',
      certifications: ['Licensed Massage Therapist', 'Prenatal Massage Certified', 'Doula Certified'],
      bio: 'Passionate about supporting women through all stages of life with compassionate care.'
    },
    {
      id: 4,
      name: 'David Thompson',
      image: '👨‍⚕️',
      specialty: 'Hot Stone & Therapeutic',
      experience: '10 years',
      certifications: ['Licensed Massage Therapist', 'Hot Stone Certified', 'Myofascial Release'],
      bio: 'Uses heat therapy and advanced techniques to address chronic pain and tension.'
    }
  ];

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const availableDates = generateDates();

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const formatDate = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setShowCalendar(false);
      setBookingStep(1);
      setSelectedService(null);
      setSelectedDate('');
      setSelectedTime('');
      setBookingData({ name: '', email: '', phone: '', notes: '' });
    }, 5000);
  };

  const startBooking = (service: any) => {
    setSelectedService(service);
    setShowCalendar(true);
    setBookingStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-6 text-center">
        <p className="text-sm">
          📅 <strong>Interactive Demo:</strong> Experience a booking system for appointment-based businesses.{' '}
          <Link href="/demos" className="underline font-semibold hover:text-teal-200 transition-colors">
            ← Back to Demos
          </Link>
        </p>
      </div>

      {/* Navigation */}
      <nav className="bg-emerald-900/80 backdrop-blur-sm border-b border-emerald-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🌿</div>
              <div>
                <h1 className="text-xl font-bold text-white">Serenity Spa & Wellness</h1>
                <p className="text-xs text-teal-300">Your Path to Relaxation</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'services', 'therapists', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === section
                      ? 'bg-teal-600 text-white'
                      : 'text-emerald-100 hover:text-white hover:bg-emerald-800'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            <button
              onClick={() => setActiveSection('services')}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {/* Home Section */}
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero */}
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-6xl font-bold text-white mb-6"
                >
                  Find Your Peace
                  <br />
                  <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    One Session at a Time
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8"
                >
                  Professional massage therapy in a tranquil setting. Expert therapists, flexible scheduling,
                  and treatments designed around your wellness goals.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setActiveSection('services')}
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold text-lg"
                >
                  Browse Services & Book
                </motion.button>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-4 gap-6 mb-16">
                {[
                  { icon: '⭐', title: 'Licensed Therapists', desc: 'All therapists are certified and experienced' },
                  { icon: '📅', title: 'Easy Booking', desc: 'Online scheduling 24/7 with instant confirmation' },
                  { icon: '💆', title: 'Premium Experience', desc: 'Luxury amenities and tranquil environment' },
                  { icon: '💯', title: 'Satisfaction Guaranteed', desc: 'Love your session or we'll make it right' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 rounded-xl p-6 text-center"
                  >
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-emerald-200 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Popular Services */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Most Popular Services</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {services.slice(0, 3).map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 rounded-xl p-6 hover:border-teal-500 transition-all duration-200"
                    >
                      <div className="text-5xl mb-4">{service.icon}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                      <p className="text-emerald-200 text-sm mb-4">{service.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-emerald-300">{service.duration}</span>
                        <span className="text-2xl font-bold text-teal-300">{service.price}</span>
                      </div>
                      <button
                        onClick={() => startBooking(service)}
                        className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
                      >
                        Book This Service
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 border border-teal-500/30 rounded-2xl p-12">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">What Our Clients Say</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Emily R.',
                      text: '"Best massage I\'ve ever had! The online booking made it so easy to find a time that worked for me."',
                      rating: 5
                    },
                    {
                      name: 'Mark T.',
                      text: '"Sarah helped me recover from a running injury. Her sports massage expertise is incredible!"',
                      rating: 5
                    },
                    {
                      name: 'Lisa M.',
                      text: '"The prenatal massage was exactly what I needed. Jennifer was so caring and knowledgeable."',
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="bg-emerald-900/50 border border-emerald-700 rounded-xl p-6"
                    >
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                      <p className="text-emerald-100 mb-4">{testimonial.text}</p>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Services Section */}
          {activeSection === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">Our Services</h2>
              <p className="text-xl text-emerald-100 text-center mb-12 max-w-3xl mx-auto">
                Choose from our range of therapeutic massage services. Each session is customized to your needs.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 rounded-xl p-6"
                  >
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-emerald-200 mb-4">{service.description}</p>

                    <div className="mb-4">
                      <div className="text-sm text-teal-300 font-semibold mb-2">Benefits:</div>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2 text-sm text-emerald-200">
                            <span className="text-teal-400 mt-0.5">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-emerald-700">
                      <div>
                        <div className="text-sm text-emerald-300">Duration</div>
                        <div className="text-lg font-semibold text-white">{service.duration}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-emerald-300">Price</div>
                        <div className="text-2xl font-bold text-teal-300">{service.price}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => startBooking(service)}
                      className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-3 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
                    >
                      Book Now
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-emerald-800/30 border border-emerald-700 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">First Time Here?</h3>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                  Get 20% off your first session! Use code <span className="font-bold text-teal-300">FIRST20</span> at checkout.
                  Not sure which service is right for you? Call us at (555) 123-4567 for a free consultation.
                </p>
              </div>
            </motion.div>
          )}

          {/* Therapists Section */}
          {activeSection === 'therapists' && (
            <motion.div
              key="therapists"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">Meet Our Therapists</h2>
              <p className="text-xl text-emerald-100 text-center mb-12 max-w-3xl mx-auto">
                Licensed, experienced professionals who are passionate about your wellness.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {therapists.map((therapist, index) => (
                  <motion.div
                    key={therapist.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 rounded-xl p-8"
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <div className="text-7xl">{therapist.image}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{therapist.name}</h3>
                        <p className="text-teal-300 font-semibold mb-2">{therapist.specialty}</p>
                        <p className="text-emerald-200 text-sm">{therapist.experience} experience</p>
                      </div>
                    </div>

                    <p className="text-emerald-100 mb-4">{therapist.bio}</p>

                    <div className="mb-4">
                      <div className="text-sm text-teal-300 font-semibold mb-2">Certifications:</div>
                      <div className="flex flex-wrap gap-2">
                        {therapist.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="text-xs bg-teal-900/30 text-teal-200 px-3 py-1 rounded-full"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveSection('services')}
                      className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
                    >
                      Book with {therapist.name.split(' ')[0]}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* About Section */}
          {activeSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">About Serenity Spa</h2>
              <p className="text-xl text-emerald-100 text-center mb-12 max-w-3xl mx-auto">
                Your wellness destination since 2015
              </p>

              <div className="space-y-8">
                <div className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                  <div className="text-emerald-100 space-y-4">
                    <p>
                      Founded in 2015, Serenity Spa & Wellness was born from a simple belief: everyone deserves access
                      to professional therapeutic care in a peaceful, welcoming environment.
                    </p>
                    <p>
                      What started as a small two-room studio has grown into a full-service wellness center with four
                      licensed therapists and thousands of satisfied clients. But our mission remains the same—to help
                      you feel your best, one session at a time.
                    </p>
                    <p>
                      We've invested in creating a space that truly supports healing. From our heated massage tables
                      to our curated aromatherapy selections, every detail is designed to enhance your experience.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-emerald-800/50 border border-emerald-700 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2">10,000+</div>
                    <div className="text-emerald-200">Sessions Completed</div>
                  </div>
                  <div className="bg-emerald-800/50 border border-emerald-700 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2">4.9/5</div>
                    <div className="text-emerald-200">Average Rating</div>
                  </div>
                  <div className="bg-emerald-800/50 border border-emerald-700 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-teal-300 mb-2">95%</div>
                    <div className="text-emerald-200">Return Client Rate</div>
                  </div>
                </div>

                <div className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">What to Expect</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        step: '1. Arrival',
                        desc: 'Arrive 10 minutes early to relax in our waiting area with complimentary tea'
                      },
                      {
                        step: '2. Consultation',
                        desc: 'Your therapist will discuss your goals, concerns, and any areas of focus'
                      },
                      {
                        step: '3. Your Session',
                        desc: 'Enjoy your customized massage in a private, tranquil treatment room'
                      },
                      {
                        step: '4. After Care',
                        desc: 'Receive personalized recommendations and easily book your next visit'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-white mb-1">{item.step}</div>
                          <div className="text-emerald-200 text-sm">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 text-center">Visit Us</h2>
              <p className="text-xl text-emerald-100 text-center mb-12 max-w-3xl mx-auto">
                We're here to answer your questions and help you book the perfect session
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">📍</div>
                      <div>
                        <div className="text-emerald-300 text-sm mb-1">Location</div>
                        <div className="text-white">
                          456 Wellness Way, Suite 200
                          <br />
                          Portland, OR 97205
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">📞</div>
                      <div>
                        <div className="text-emerald-300 text-sm mb-1">Phone</div>
                        <div className="text-white">(555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">✉️</div>
                      <div>
                        <div className="text-emerald-300 text-sm mb-1">Email</div>
                        <div className="text-white">hello@serenityspa.com</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">🕐</div>
                      <div>
                        <div className="text-emerald-300 text-sm mb-1">Hours</div>
                        <div className="text-white">
                          Mon-Fri: 9:00 AM - 8:00 PM
                          <br />
                          Sat-Sun: 10:00 AM - 6:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-emerald-200 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full bg-emerald-900/50 border border-emerald-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-emerald-200 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full bg-emerald-900/50 border border-emerald-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-emerald-200 mb-2">Message</label>
                      <textarea
                        className="w-full bg-emerald-900/50 border border-emerald-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 h-32"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 border border-teal-500/30 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Parking & Accessibility</h3>
                <p className="text-emerald-100 max-w-2xl mx-auto">
                  Free parking available in our building's garage (entrance on Oak Street). Our facility is fully
                  wheelchair accessible with an elevator to the second floor. Street parking also available.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showCalendar && !bookingConfirmed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowCalendar(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-emerald-800 border border-emerald-700 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Step 1: Select Date & Time */}
              {bookingStep === 1 && (
                <>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Book Your Session</h3>
                      <p className="text-emerald-200">
                        {selectedService?.name} - {selectedService?.duration} - {selectedService?.price}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowCalendar(false)}
                      className="text-emerald-400 hover:text-white text-2xl"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Select Date</h4>
                    <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
                      {availableDates.map((date) => {
                        const dateStr = date.toISOString().split('T')[0];
                        return (
                          <button
                            key={dateStr}
                            onClick={() => setSelectedDate(dateStr)}
                            className={`p-3 rounded-lg border transition-all ${
                              selectedDate === dateStr
                                ? 'bg-teal-600 border-teal-500 text-white'
                                : 'bg-emerald-900/50 border-emerald-700 text-emerald-200 hover:border-teal-500'
                            }`}
                          >
                            <div className="text-xs">{formatDate(date).split(',')[0]}</div>
                            <div className="font-bold">{date.getDate()}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {selectedDate && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Select Time</h4>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-lg border transition-all ${
                              selectedTime === time
                                ? 'bg-teal-600 border-teal-500 text-white'
                                : 'bg-emerald-900/50 border-emerald-700 text-emerald-200 hover:border-teal-500'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedDate && selectedTime && (
                    <button
                      onClick={() => setBookingStep(2)}
                      className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-4 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold text-lg"
                    >
                      Continue to Details
                    </button>
                  )}
                </>
              )}

              {/* Step 2: Enter Details */}
              {bookingStep === 2 && (
                <>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Your Information</h3>
                      <p className="text-emerald-200">
                        {selectedService?.name} on {selectedDate} at {selectedTime}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowCalendar(false)}
                      className="text-emerald-400 hover:text-white text-2xl"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-emerald-200 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        className="w-full bg-emerald-900/50 border border-emerald-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-emerald-200 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        className="w-full bg-emerald-900/50 border border-emerald-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-emerald-200 mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        className="w-full bg-emerald-900/50 border border-emerald-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-emerald-200 mb-2">Special Requests or Health Notes</label>
                      <textarea
                        value={bookingData.notes}
                        onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                        className="w-full bg-emerald-900/50 border border-emerald-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 h-24"
                        placeholder="Any injuries, preferences, or areas to focus on..."
                      />
                    </div>

                    <div className="bg-emerald-900/50 border border-emerald-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Booking Summary</h4>
                      <div className="space-y-1 text-emerald-200 text-sm">
                        <div className="flex justify-between">
                          <span>Service:</span>
                          <span className="text-white">{selectedService?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Date:</span>
                          <span className="text-white">{selectedDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span className="text-white">{selectedTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="text-white">{selectedService?.duration}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-emerald-700">
                          <span className="font-semibold">Total:</span>
                          <span className="text-white font-bold text-lg">{selectedService?.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setBookingStep(1)}
                        className="flex-1 bg-emerald-700 text-white px-6 py-4 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-4 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 font-semibold text-lg"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Booking Confirmation */}
        {bookingConfirmed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-emerald-800 border border-emerald-700 rounded-2xl p-12 max-w-md w-full text-center"
            >
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h3>
              <p className="text-emerald-200 mb-6">
                You're all set for your {selectedService?.name} on {selectedDate} at {selectedTime}.
              </p>
              <div className="bg-emerald-900/50 border border-emerald-700 rounded-lg p-4 mb-6">
                <div className="text-sm text-emerald-300 mb-2">Confirmation sent to:</div>
                <div className="text-white font-semibold">{bookingData.email}</div>
              </div>
              <p className="text-sm text-emerald-300">
                We'll send you a reminder 24 hours before your appointment. See you soon!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
