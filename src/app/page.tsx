'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
// import FloatingIntakeButton from "@/components/FloatingIntakeButton";
import ZapierChatbot from "@/components/ZapierChatbot";



export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="section-container text-center relative z-10">
          <FadeIn duration={0.8}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Transforming{" "}
              <span className="gradient-text">Everyday Ideas</span>
              <br />
              into Digital Reality
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} duration={0.8}>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Custom web applications and professional websites that work for your business.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </FadeIn>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container">
        <ScaleIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Our Process
          </h2>
        </ScaleIn>
        <FadeIn delay={0.2}>
          <p className="text-center text-blue-100 text-lg mb-16 max-w-2xl mx-auto">
            A proven three-step approach to bring your vision to life
          </p>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              number: 1,
              title: "Idea Generation",
              description: "We begin by understanding your vision and turning everyday ideas into concrete project plans.",
              image: "/images/idea_generation.png",
              color: "from-blue-500 to-blue-600"
            },
            {
              number: 2,
              title: "Design & Development",
              description: "Our experts design intuitive interfaces and develop robust applications tailored to your needs.",
              image: "/images/design_and_development.png",
              color: "from-purple-500 to-purple-600"
            },
            {
              number: 3,
              title: "Launch & Support",
              description: "We ensure a smooth launch and provide ongoing support to keep your application running at peak performance.",
              image: "/images/launch_and_support.png",
              color: "from-blue-600 to-purple-600"
            }
          ].map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="glass-card rounded-2xl p-8 h-full hero-gradient">
                {/* <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-white/5">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                </div> */}
                <div className={`w-14 h-14 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl shadow-lg`}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white text-center">
                  {step.title}
                </h3>
                <p className="text-blue-100 text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center hero-gradient rounded-3xl">
          <FadeIn direction="left">
            <div className="glass-lg rounded-2xl p-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Custom Web Development
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Our web development process integrates creative design, cutting-edge technology,
                and business insight to produce solutions that drive results. Whether you need a
                brand new website or an upgrade to an existing platform, we deliver a product that
                enhances your online presence.
              </p>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                From responsive design to secure backend development, we handle every aspect
                with precision and care.
              </p>
              <Link href="/services" className="btn-primary inline-block">
                View All Services
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative h-96 rounded-2xl overflow-hidden glass-lg">
              <Image
                src="/images/custom_web_development.png"
                alt="Web Development"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container">
        <div className="glass-md rounded-3xl p-12 hero-gradient">
          <ScaleIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text ">
              Results That Speak
            </h2>
          </ScaleIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Websites Delivered", icon: "🚀" },
              { value: "100%", label: "Client Satisfaction", icon: "⭐" },
              { value: "<2.8s", label: "Average Load Time", icon: "⚡" },
              { value: "95+", label: "Lighthouse Score", icon: "💯" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="glass-lg rounded-3xl p-16 text-center hero-gradient">
          <ScaleIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
          </ScaleIn>
          <FadeIn delay={0.2}>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Let's turn your ideas into reality. Get in touch today and see what we can build together.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/intake" className="btn-primary">
                Start Your Journey
              </Link>
              
              <Link href="/process" className="btn-secondary">
                Learn Our Process
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      <ZapierChatbot chatbotId="cmhb5x5nh00awbrhjoqwao638" />
    </div>
  );
}
