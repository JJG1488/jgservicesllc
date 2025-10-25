'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import AnimatedButton from "@/components/ui/AnimatedButton";
import FloatingCard from "@/components/ui/FloatingCard";
import Testimonials from "@/components/Testimonials";
import CountUpStat from "@/components/CountUpStat";
import MagneticButton from "@/components/ui/MagneticButton";
import GlowCard from "@/components/ui/GlowCard";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  // Stagger animation for grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 pt-32 pb-20 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn duration={0.8}>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Transforming{" "}
              <motion.span
                className="text-yellow-300"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(253, 224, 71, 0.5)",
                    "0 0 30px rgba(253, 224, 71, 0.8)",
                    "0 0 20px rgba(253, 224, 71, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Everyday Ideas
              </motion.span>{" "}
              into Digital Reality
            </motion.h1>
          </FadeIn>

          <FadeIn delay={0.3} duration={0.8}>
            <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-3xl mx-auto">
              At JGServicesLLC, we take your everyday ideas and turn them into
              custom web applications that work for your business.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <MagneticButton strength={0.4}>
              <AnimatedButton href="/services">
                <motion.span
                  className="relative z-20"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Discover Our Services 🚀
                </motion.span>
              </AnimatedButton>
            </MagneticButton>
          </FadeIn>

          {/* Floating scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <ScaleIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Process
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We follow a proven three-step approach to bring your vision to life
            </p>
          </FadeIn>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <GlowCard glowColor="rgba(59, 130, 246, 0.4)">
                <FloatingCard className="text-center p-6 h-full">
                  <motion.div
                    className="relative w-full h-48 mb-4 bg-gray-50"
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/images/portfolio_idea_generation.png"
                      alt="Idea Generation"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                      quality={75}
                    />
                  </motion.div>
                  <motion.div
                    className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    1
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">
                    Idea Generation
                  </h4>
                  <p className="text-gray-600">
                    We begin by understanding your vision and turning everyday ideas
                    into concrete project plans.
                  </p>
                </FloatingCard>
              </GlowCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowCard glowColor="rgba(168, 85, 247, 0.4)">
                <FloatingCard className="text-center p-6 h-full">
                  <motion.div
                    className="relative w-full h-48 mb-4 bg-gray-50"
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/images/portfolio_design_and_development.png"
                      alt="Design & Development"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                      quality={75}
                    />
                  </motion.div>
                  <motion.div
                    className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    2
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">
                    Design & Development
                  </h4>
                  <p className="text-gray-600">
                    Our experts design intuitive interfaces and develop robust
                    applications tailored to your needs.
                  </p>
                </FloatingCard>
              </GlowCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowCard glowColor="rgba(34, 197, 94, 0.4)">
                <FloatingCard className="text-center p-6 h-full">
                  <motion.div
                    className="relative w-full h-48 mb-4 bg-gray-50"
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/images/portoflio_launch_and_support.png"
                      alt="Launch & Support"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                      quality={75}
                    />
                  </motion.div>
                  <motion.div
                    className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    3
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">
                    Launch & Support
                  </h4>
                  <p className="text-gray-600">
                    We ensure a smooth launch and provide ongoing support to keep
                    your application running at peak performance.
                  </p>
                </FloatingCard>
              </GlowCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Custom Web Development Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 -z-10" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <ParallaxSection speed={0.3} direction="up">
                <motion.div
                  className="relative w-full h-96 bg-gray-50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-20"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <Image
                    src="/images/portfolio_custom_web_development.png"
                    alt="Web Development In Action"
                    fill
                    className="object-contain rounded-lg relative z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    quality={85}
                  />
                </motion.div>
              </ParallaxSection>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  whileInView={{ opacity: [0, 1], x: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Custom Web Development
                </motion.h2>

                <motion.p
                  className="text-gray-700 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Our web development process integrates creative design,
                  cutting-edge technology, and business insight to produce
                  solutions that drive results. Whether you need a brand new
                  website or an upgrade to an existing platform, we deliver a
                  product that enhances your online presence and engages your
                  customers.
                </motion.p>

                <motion.p
                  className="text-gray-700 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  From responsive design to secure backend development, we handle
                  every aspect with precision and care. Let us help you create a
                  digital platform that not only looks great but also performs
                  exceptionally.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <AnimatedButton href="/contact">
                    Get in Touch ✨
                  </AnimatedButton>
                </motion.div>

                {/* Stats showcase */}
                <motion.div
                  className="grid grid-cols-3 gap-4 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    { value: "100%", label: "Client Satisfaction" },
                    { value: "Fast", label: "Turnaround Time" },
                    { value: "Modern", label: "Technologies" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-2xl font-bold text-blue-600">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats/Metrics Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <ScaleIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Results That Speak for Themselves
            </h2>
          </ScaleIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUpStat
              end={50}
              suffix="+"
              label="Websites Delivered"
              icon="🚀"
              delay={0}
            />
            <CountUpStat
              end={100}
              suffix="%"
              label="Client Satisfaction"
              icon="⭐"
              delay={0.1}
            />
            <CountUpStat
              end={2.8}
              suffix="s"
              prefix="<"
              decimals={1}
              label="Average Load Time"
              icon="⚡"
              delay={0.2}
            />
            <CountUpStat
              end={95}
              suffix="+"
              label="Lighthouse Score"
              icon="💯"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScaleIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Clients Say
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Don't just take my word for it - here's what real clients have to say about working together.
            </p>
          </FadeIn>

          <Testimonials limit={3} />

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScaleIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              Let's turn your ideas into reality. Get in touch today and see what
              we can build together.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatedButton href="/contact" variant="secondary">
                Start Your Journey 🎯
              </AnimatedButton>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
