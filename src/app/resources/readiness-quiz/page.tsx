'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
    explanation: string;
  }[];
}

export default function ReadinessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "Do you have a clear understanding of who your target customers are?",
      options: [
        { text: "Yes, I have detailed customer personas", points: 3, explanation: "Perfect! Knowing your audience is crucial for effective website design." },
        { text: "I have a general idea", points: 2, explanation: "Good start! We can help you refine this during our discovery phase." },
        { text: "Not really sure yet", points: 1, explanation: "No problem! This is something we'll work on together before designing your site." },
      ]
    },
    {
      id: 2,
      question: "What is your primary goal for having a website?",
      options: [
        { text: "Generate leads and sales", points: 3, explanation: "Excellent! A conversion-focused website will be perfect for you." },
        { text: "Build brand awareness", points: 2, explanation: "Great goal! We'll create a site that showcases your brand effectively." },
        { text: "Just to have an online presence", points: 1, explanation: "Every business needs a website. Let's make yours work hard for you!" },
      ]
    },
    {
      id: 3,
      question: "Do you have your branding elements (logo, colors, fonts) ready?",
      options: [
        { text: "Yes, everything is finalized", points: 3, explanation: "Perfect! We can jump right into website design." },
        { text: "I have some ideas but need help", points: 2, explanation: "We can help refine your branding as part of the design process." },
        { text: "I need a complete branding package", points: 1, explanation: "We can create a cohesive brand identity before building your website." },
      ]
    },
    {
      id: 4,
      question: "How much content (text, images, etc.) do you have prepared for your website?",
      options: [
        { text: "All content is ready to go", points: 3, explanation: "Excellent! Having content ready speeds up the development process." },
        { text: "Some content, but need help organizing it", points: 2, explanation: "We'll help you structure and optimize your content for web." },
        { text: "I need help creating all content", points: 1, explanation: "No problem! We can guide you through content creation or recommend copywriters." },
      ]
    },
    {
      id: 5,
      question: "What is your monthly marketing budget for your online presence?",
      options: [
        { text: "$500+ per month", points: 3, explanation: "Great budget for ongoing SEO, ads, and growth strategies." },
        { text: "$100-$500 per month", points: 2, explanation: "Good starting budget for basic marketing and optimization." },
        { text: "Under $100 or unsure", points: 1, explanation: "We'll focus on organic growth strategies that don't require large budgets." },
      ]
    },
    {
      id: 6,
      question: "Do you have products/services ready to sell or showcase?",
      options: [
        { text: "Yes, ready to launch immediately", points: 3, explanation: "Perfect! We can create an immediate sales channel for you." },
        { text: "Almost ready, within a few months", points: 2, explanation: "We'll time the website launch with your product/service readiness." },
        { text: "Still in planning stages", points: 1, explanation: "Let's build a foundation website that you can expand as you grow." },
      ]
    },
    {
      id: 7,
      question: "How involved do you want to be in the website design process?",
      options: [
        { text: "Very involved - I want to approve everything", points: 3, explanation: "We love collaborative clients! You'll be involved in every decision." },
        { text: "Moderately - review key milestones", points: 2, explanation: "Perfect balance! We'll show you progress at each major phase." },
        { text: "Not much - trust the experts", points: 2, explanation: "We'll handle the details and present you with a polished result." },
      ]
    },
    {
      id: 8,
      question: "Do you have someone to manage your website after launch?",
      options: [
        { text: "Yes, I have tech-savvy staff", points: 3, explanation: "Great! We'll provide training so your team can maintain the site." },
        { text: "I'll learn to manage it myself", points: 2, explanation: "We'll make it user-friendly and provide comprehensive training." },
        { text: "I need ongoing support", points: 2, explanation: "Our maintenance packages ensure your site stays updated and secure." },
      ]
    },
    {
      id: 9,
      question: "What's your timeline for launching the website?",
      options: [
        { text: "As soon as possible (1-2 months)", points: 3, explanation: "We can prioritize your project for a fast-track launch." },
        { text: "Within 3-4 months", points: 3, explanation: "Perfect timeline for a well-planned, comprehensive website." },
        { text: "No rush, 6+ months", points: 2, explanation: "We can plan carefully and build something truly exceptional." },
      ]
    },
    {
      id: 10,
      question: "Have you researched your competitors' websites?",
      options: [
        { text: "Yes, I know what works in my industry", points: 3, explanation: "Excellent! This insight helps us create something even better." },
        { text: "Looked at a few", points: 2, explanation: "We'll do comprehensive competitive analysis together." },
        { text: "Haven't had time yet", points: 1, explanation: "We'll analyze your competition and identify opportunities to stand out." },
      ]
    },
  ];

  const totalPoints = answers.reduce((sum, points) => sum + points, 0);
  const maxPoints = questions.length * 3;

  const getRecommendation = () => {
    const percentage = (totalPoints / maxPoints) * 100;

    if (percentage >= 80) {
      return {
        title: "You're Ready to Launch! 🚀",
        level: "Highly Prepared",
        color: "from-green-600 to-emerald-600",
        description: "You're in an excellent position to start your website project immediately. You have a clear vision, resources in place, and understand what you want to achieve. Let's turn your preparation into a stunning website!",
        nextSteps: [
          "Schedule a consultation to discuss your project timeline",
          "Review our portfolio for design inspiration",
          "We can start within 1-2 weeks with a fast-track development plan",
        ],
        timeline: "6-8 weeks to launch",
        investmentRange: "$5,000 - $15,000+",
      };
    } else if (percentage >= 60) {
      return {
        title: "Almost There! 💪",
        level: "Well Prepared",
        color: "from-blue-600 to-cyan-600",
        description: "You have a solid foundation and are nearly ready to begin. A few areas need clarification, but you're on the right track. With a little planning, you'll be set for success.",
        nextSteps: [
          "Schedule a strategy session to refine your goals",
          "We'll help you fill in the gaps during our discovery phase",
          "Download our Website Planning Workbook to organize your ideas",
        ],
        timeline: "8-10 weeks to launch",
        investmentRange: "$4,000 - $12,000+",
      };
    } else if (percentage >= 40) {
      return {
        title: "Good Start, More Planning Needed 📋",
        level: "Partially Prepared",
        color: "from-yellow-600 to-orange-600",
        description: "You have some pieces in place, but would benefit from additional planning before diving into development. Don't worry - this is normal! Many successful websites started here.",
        nextSteps: [
          "Download our 'Complete Guide to Starting Your Online Business'",
          "Book a free consultation to discuss your vision",
          "We'll create a custom roadmap for getting you fully prepared",
          "Consider our Website Planning Package to organize everything",
        ],
        timeline: "10-14 weeks (including planning)",
        investmentRange: "$3,500 - $10,000+",
      };
    } else {
      return {
        title: "Let's Build Your Foundation First 🏗️",
        level: "Early Stage",
        color: "from-purple-600 to-pink-600",
        description: "You're at the beginning of your journey - and that's perfectly fine! Every successful business started here. The key is having the right guidance and taking strategic steps forward.",
        nextSteps: [
          "Download our free resources to understand the process",
          "Join our email newsletter for weekly tips and guidance",
          "Book a free strategy call to create your business roadmap",
          "Consider our Business Foundation Package (branding + website planning + initial site)",
        ],
        timeline: "12-16 weeks (includes business planning)",
        investmentRange: "$5,000 - $15,000+ (includes branding & planning)",
      };
    }
  };

  const handleAnswer = (points: number) => {
    setSelectedOption(points);
    setTimeout(() => {
      setAnswers([...answers, points]);
      setSelectedOption(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 500);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedOption(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const recommendation = getRecommendation();

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white py-20 mb-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Link href="/resources" className="inline-flex items-center gap-2 text-white hover:text-blue-100 mb-6">
              ← Back to Resources
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Readiness Assessment
            </h1>
            <p className="text-xl max-w-3xl text-blue-50">
              Take our 10-question quiz to determine if your business is ready for a website and get personalized recommendations.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h2 className="text-2xl font-bold mb-8 text-gray-900">
                  {questions[currentQuestion].question}
                </h2>

                {/* Options */}
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option.points)}
                      className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                        selectedOption === option.points
                          ? 'border-blue-600 bg-blue-50 scale-95'
                          : 'border-gray-200 hover:border-blue-400 hover:bg-gray-50'
                      }`}
                      whileHover={{ scale: selectedOption === null ? 1.02 : 1 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={selectedOption !== null}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                          {String.fromCharCode(65 + index)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">
                            {option.text}
                          </p>
                          {selectedOption === option.points && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="text-sm text-gray-600"
                            >
                              {option.explanation}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Navigation hint */}
                <p className="text-center text-gray-500 text-sm mt-8">
                  Select an answer to continue
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                {/* Results Header */}
                <div className={`bg-gradient-to-r ${recommendation.color} text-white rounded-2xl shadow-xl p-8 text-center`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="text-6xl mb-4"
                  >
                    {totalPoints >= 24 ? '🚀' : totalPoints >= 18 ? '💪' : totalPoints >= 12 ? '📋' : '🏗️'}
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-2">
                    {recommendation.title}
                  </h2>
                  <p className="text-xl text-blue-50 mb-4">
                    Readiness Level: {recommendation.level}
                  </p>
                  <div className="inline-block bg-white bg-opacity-20 px-6 py-2 rounded-full">
                    <span className="font-bold">Your Score: {totalPoints} / {maxPoints}</span>
                  </div>
                </div>

                {/* Analysis */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    What This Means For You
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    {recommendation.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span>📅</span> Estimated Timeline
                      </h4>
                      <p className="text-gray-700">{recommendation.timeline}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span>💰</span> Investment Range
                      </h4>
                      <p className="text-gray-700">{recommendation.investmentRange}</p>
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Recommended Next Steps
                  </h3>
                  <div className="space-y-4">
                    {recommendation.nextSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 flex-1">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Let's Take the Next Step Together
                  </h3>
                  <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
                    Schedule a free consultation to discuss your results and create a custom plan for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Link
                      href="/contact"
                      className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
                    >
                      Schedule Free Consultation
                    </Link>
                    <Link
                      href="/resources"
                      className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
                    >
                      Download Guides
                    </Link>
                  </div>
                  <button
                    onClick={handleRestart}
                    className="text-blue-100 hover:text-white underline"
                  >
                    Retake the Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
