'use client'

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";

// Project case studies data
const projectsData: { [key: string]: any } = {
  "wannaburger": {
    id: "wannaburger",
    title: "WannaBurger Restaurant Website",
    subtitle: "Modern Restaurant Website with Online Ordering",
    client: "WannaBurger Local Restaurant",
    industry: "Food & Hospitality",
    timeline: "8 weeks",
    year: "2024",
    heroImage: "/images/wannaBurger.png",

    challenge: "WannaBurger needed a modern, mobile-friendly website to showcase their menu and enable online ordering. Their previous site was outdated, slow, and not mobile-responsive. They were losing customers to competitors with better online experiences.",

    solution: "We built a custom React-based website with a beautiful, appetite-inducing design, integrated with a third-party online ordering system, and optimized for mobile devices where most of their traffic comes from.",

    results: [
      { metric: "150%", description: "Increase in online orders" },
      { metric: "3.2s", description: "Average page load time" },
      { metric: "68%", description: "Mobile traffic conversion" },
      { metric: "95", description: "Google Lighthouse score" }
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Stripe API",
      "Google Maps API"
    ],

    features: [
      {
        title: "Interactive Menu",
        description: "Beautiful, photo-rich menu with categorization, search, and dietary filters (vegetarian, gluten-free, etc.)",
        icon: "📋"
      },
      {
        title: "Online Ordering System",
        description: "Complete cart functionality with customization options, special instructions, and real-time order tracking",
        icon: "🛒"
      },
      {
        title: "Location & Hours",
        description: "Google Maps integration with directions, hours of operation, and holiday schedule updates",
        icon: "📍"
      },
      {
        title: "Admin Dashboard",
        description: "Easy-to-use interface for staff to update menu items, prices, availability, and manage orders",
        icon: "⚙️"
      },
      {
        title: "Mobile-First Design",
        description: "Optimized for phones and tablets where 75% of their customers browse",
        icon: "📱"
      },
      {
        title: "SEO Optimization",
        description: "Structured data for local business, menu items, and reviews to improve search visibility",
        icon: "🔍"
      }
    ],

    process: [
      {
        phase: "Discovery",
        duration: "1 week",
        activities: [
          "Interviewed restaurant owners and staff about pain points",
          "Analyzed competitor websites and ordering systems",
          "Created customer personas and user journey maps",
          "Defined menu structure and categorization"
        ]
      },
      {
        phase: "Design",
        duration: "2 weeks",
        activities: [
          "Created wireframes focusing on mobile experience first",
          "Designed custom UI with food photography",
          "Developed brand colors and typography matching their logo",
          "Built interactive prototype for user testing"
        ]
      },
      {
        phase: "Development",
        duration: "4 weeks",
        activities: [
          "Built responsive frontend with React and Next.js",
          "Integrated online ordering API with payment processing",
          "Created admin panel for menu management",
          "Implemented real-time order notifications",
          "Set up analytics and tracking"
        ]
      },
      {
        phase: "Testing & Launch",
        duration: "1 week",
        activities: [
          "Tested ordering flow with real customers",
          "Cross-browser and device testing",
          "Performance optimization (image compression, lazy loading)",
          "Staff training on admin dashboard",
          "Soft launch with limited menu, then full launch"
        ]
      }
    ],

    testimonial: {
      quote: "Our online orders have more than doubled since launching the new website. The mobile experience is fantastic, and our customers love how easy it is to order. The admin panel makes updating our menu a breeze. Best investment we've made!",
      author: "Sarah Martinez",
      role: "Owner, WannaBurger",
      avatar: "/images/avatar-placeholder.png"
    },

    images: [
      { url: "/images/wannaBurger.png", caption: "Homepage with hero image and featured items" },
      { url: "/images/wannaBurger.png", caption: "Mobile menu view with filters" },
      { url: "/images/wannaBurger.png", caption: "Checkout process" }
    ],

    lessonsLearned: [
      "Mobile users want large, tappable buttons - we increased button size by 50% after initial testing",
      "Food photography is critical - professional photos increased order value by 30%",
      "Real-time order status updates significantly reduced support calls",
      "Simple admin interface meant staff adoption was immediate"
    ],

    nextSteps: [
      "Add loyalty rewards program integration",
      "Implement email marketing automation for repeat customers",
      "Create catering order form with custom pricing",
      "Add customer reviews and ratings system"
    ]
  },

  "weather-dashboard": {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    subtitle: "Real-Time Weather Application with Forecasts",
    client: "Personal Project / Portfolio Piece",
    industry: "Web Application",
    timeline: "3 weeks",
    year: "2024",
    heroImage: "/images/weather-dashboard.png",

    challenge: "Build a clean, fast weather application that provides accurate real-time weather data, 5-day forecasts, and geolocation features. The app needed to handle API rate limits gracefully and work offline.",

    solution: "Created a responsive web app using React with weather API integration, geolocation, local caching, and beautiful data visualization. Implemented smart caching to reduce API calls and improve performance.",

    results: [
      { metric: "<1s", description: "Load time for cached data" },
      { metric: "100%", description: "Mobile responsive" },
      { metric: "5K+", description: "Daily API calls handled" },
      { metric: "PWA", description: "Works offline" }
    ],

    technologies: [
      "React",
      "TypeScript",
      "Weather API",
      "Geolocation API",
      "Chart.js",
      "LocalStorage",
      "CSS Grid",
      "Service Workers"
    ],

    features: [
      {
        title: "Real-Time Weather Data",
        description: "Current conditions including temperature, humidity, wind speed, UV index, and air quality",
        icon: "🌡️"
      },
      {
        title: "5-Day Forecast",
        description: "Detailed hourly and daily forecasts with temperature charts and precipitation probability",
        icon: "📅"
      },
      {
        title: "Geolocation",
        description: "Automatic location detection with manual city search and favorite locations",
        icon: "📍"
      },
      {
        title: "Interactive Maps",
        description: "Weather radar, precipitation, clouds, and temperature overlay maps",
        icon: "🗺️"
      },
      {
        title: "Smart Caching",
        description: "Caches data for 10 minutes to reduce API calls and improve load times",
        icon: "⚡"
      },
      {
        title: "Offline Support",
        description: "Progressive Web App that works offline with last cached data",
        icon: "📴"
      }
    ],

    process: [
      {
        phase: "Planning",
        duration: "3 days",
        activities: [
          "Researched weather APIs and chose OpenWeatherMap for reliability",
          "Sketched UI layouts focusing on data hierarchy",
          "Planned data caching strategy to stay within API limits",
          "Created component architecture diagram"
        ]
      },
      {
        phase: "Development",
        duration: "2 weeks",
        activities: [
          "Built reusable weather components (cards, charts, maps)",
          "Implemented API integration with error handling",
          "Created caching layer with LocalStorage",
          "Added geolocation with fallback to IP-based location",
          "Integrated Chart.js for temperature visualization"
        ]
      },
      {
        phase: "Optimization",
        duration: "4 days",
        activities: [
          "Implemented service worker for offline functionality",
          "Optimized images and icons",
          "Added loading skeletons for better UX",
          "Wrote unit tests for data transformations"
        ]
      }
    ],

    testimonial: null,

    images: [
      { url: "/images/weather-dashboard.png", caption: "Main dashboard view" },
      { url: "/images/weather-dashboard.png", caption: "5-day forecast" },
      { url: "/images/weather-dashboard.png", caption: "Mobile responsive design" }
    ],

    lessonsLearned: [
      "API rate limiting requires smart caching strategies - reduced calls by 80%",
      "Users prefer visual weather data (icons, charts) over text descriptions",
      "Geolocation permissions can be denied - always have a fallback",
      "Service workers are tricky but worth it for offline support"
    ],

    nextSteps: [
      "Add weather alerts and severe weather warnings",
      "Implement user accounts to save favorite locations",
      "Add weather history and trends",
      "Create weather widgets for embedding on other sites"
    ]
  },

  "travel-logger": {
    id: "travel-logger",
    title: "Travel Logger",
    subtitle: "Full-Stack Travel Experience Sharing Platform",
    client: "Personal Project",
    industry: "Social / Travel",
    timeline: "10 weeks",
    year: "2024",
    heroImage: "/images/travel-logger.png",

    challenge: "Build a full-stack application where travelers can document their trips, upload photos, mark locations on maps, and share experiences with friends. Needed secure authentication, file uploads, and real-time features.",

    solution: "Created a comprehensive MERN stack application with user authentication, cloud photo storage, interactive maps, and social features. Used modern best practices for security and scalability.",

    results: [
      { metric: "500+", description: "Test users registered" },
      { metric: "2K+", description: "Photos uploaded" },
      { metric: "50+", description: "Countries logged" },
      { metric: "A", description: "Security grade" }
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT Auth",
      "AWS S3",
      "Mapbox GL",
      "Socket.io",
      "Docker"
    ],

    features: [
      {
        title: "Trip Planning & Logging",
        description: "Create trips, add destinations, track dates, budgets, and travel companions",
        icon: "✈️"
      },
      {
        title: "Photo Uploads & Gallery",
        description: "Upload photos with automatic EXIF data extraction for location and date, organized by trip",
        icon: "📸"
      },
      {
        title: "Interactive Maps",
        description: "Pin locations visited, draw routes, see travel statistics by country and continent",
        icon: "🗺️"
      },
      {
        title: "Social Features",
        description: "Follow friends, like and comment on trips, share recommendations",
        icon: "👥"
      },
      {
        title: "Secure Authentication",
        description: "JWT-based auth with password hashing, email verification, and password reset",
        icon: "🔒"
      },
      {
        title: "Travel Stats Dashboard",
        description: "Visualize countries visited, total miles traveled, photos taken, and travel timeline",
        icon: "📊"
      }
    ],

    process: [
      {
        phase: "Architecture & Planning",
        duration: "1 week",
        activities: [
          "Designed database schema for users, trips, photos, and social relationships",
          "Planned REST API endpoints and data models",
          "Created user flow diagrams for key features",
          "Chose tech stack based on scalability needs"
        ]
      },
      {
        phase: "Backend Development",
        duration: "4 weeks",
        activities: [
          "Built Express API with PostgreSQL database",
          "Implemented JWT authentication and authorization",
          "Set up AWS S3 for photo storage with image optimization",
          "Created middleware for error handling and validation",
          "Wrote API tests with Jest and Supertest"
        ]
      },
      {
        phase: "Frontend Development",
        duration: "4 weeks",
        activities: [
          "Built React components for trips, photos, and maps",
          "Integrated Mapbox for interactive mapping",
          "Created responsive layouts for mobile and desktop",
          "Implemented real-time notifications with Socket.io",
          "Added photo upload with drag-and-drop"
        ]
      },
      {
        phase: "Deployment & Testing",
        duration: "1 week",
        activities: [
          "Containerized app with Docker",
          "Deployed to AWS with automated CI/CD",
          "Load testing and performance optimization",
          "Security audit and penetration testing",
          "Beta testing with 50 users"
        ]
      }
    ],

    testimonial: {
      quote: "This is exactly what I've been looking for! I love seeing all my travels on a map and being able to relive trips through my photos. The social features make it easy to get recommendations from friends. Can't wait to see what new features are added!",
      author: "Mike Chen",
      role: "Beta Tester & Travel Enthusiast",
      avatar: "/images/avatar-placeholder.png"
    },

    images: [
      { url: "/images/travel-logger.png", caption: "Dashboard with trip overview" },
      { url: "/images/travel-logger.png", caption: "Interactive map view" },
      { url: "/images/travel-logger.png", caption: "Photo gallery" }
    ],

    lessonsLearned: [
      "Image optimization is crucial - used Sharp to resize and compress photos, reducing storage costs by 70%",
      "PostgreSQL's GIS extensions made location queries much faster",
      "Real-time features add complexity but significantly improve UX",
      "Proper database indexing reduced query times from 500ms to 20ms"
    ],

    nextSteps: [
      "Add trip planning AI assistant for itinerary suggestions",
      "Implement collaborative trip planning for groups",
      "Create mobile apps for iOS and Android",
      "Add travel expense tracking and budget management",
      "Build travel blog/journal feature with markdown support"
    ]
  }
};

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white py-20 mb-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-sm font-medium mb-2 text-blue-200">CASE STUDY</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">{project.subtitle}</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <div className="text-blue-200">Client</div>
                <div className="font-semibold">{project.client}</div>
              </div>
              <div>
                <div className="text-blue-200">Industry</div>
                <div className="font-semibold">{project.industry}</div>
              </div>
              <div>
                <div className="text-blue-200">Timeline</div>
                <div className="font-semibold">{project.timeline}</div>
              </div>
              <div>
                <div className="text-blue-200">Year</div>
                <div className="font-semibold">{project.year}</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-4 mb-16">
        <ScaleIn>
          <div className="relative w-full h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>
        </ScaleIn>
      </section>

      {/* Challenge & Solution */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-red-600">The Challenge</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-green-600">The Solution</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Results */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <ScaleIn>
            <h2 className="text-3xl font-bold text-center mb-12">Results That Matter</h2>
          </ScaleIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.results.map((result: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{result.metric}</div>
                <div className="text-blue-100">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 mb-16">
        <ScaleIn>
          <h2 className="text-3xl font-bold text-center mb-12">Key Features Delivered</h2>
        </ScaleIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.features.map((feature: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 mb-16">
        <div className="container mx-auto px-4">
          <ScaleIn>
            <h2 className="text-3xl font-bold text-center mb-8">Technologies Used</h2>
          </ScaleIn>

          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech: string, index: number) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 mb-16">
        <ScaleIn>
          <h2 className="text-3xl font-bold text-center mb-12">Development Process</h2>
        </ScaleIn>

        <div className="space-y-8">
          {project.process.map((phase: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{phase.phase}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{phase.duration}</p>
                </div>
              </div>

              <ul className="space-y-2 ml-16">
                {phase.activities.map((activity: string, aIndex: number) => (
                  <li key={aIndex} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 mb-16">
          <div className="container mx-auto px-4">
            <ScaleIn>
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-6xl mb-6">"</div>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                  {project.testimonial.quote}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                    <Image
                      src={project.testimonial.avatar}
                      alt={project.testimonial.author}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">{project.testimonial.author}</div>
                    <div className="text-blue-200">{project.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </section>
      )}

      {/* Lessons Learned */}
      <section className="container mx-auto px-4 mb-16">
        <ScaleIn>
          <h2 className="text-3xl font-bold text-center mb-12">Lessons Learned</h2>
        </ScaleIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {project.lessonsLearned.map((lesson: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 rounded"
            >
              <p className="text-gray-800 dark:text-gray-200">💡 {lesson}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <section className="container mx-auto px-4 mb-16">
        <ScaleIn>
          <h2 className="text-3xl font-bold text-center mb-12">Future Enhancements</h2>
        </ScaleIn>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3">
            {project.nextSteps.map((step: string, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
              >
                <span className="text-green-500 mt-1">→</span>
                <span className="text-gray-700 dark:text-gray-300">{step}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl text-center">
          <ScaleIn>
            <h2 className="text-3xl font-bold mb-6">Want Similar Results?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can build something amazing for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
              >
                View More Projects
              </Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
