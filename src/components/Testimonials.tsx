'use client'

import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Our online orders have more than doubled since launching the new website. The mobile experience is fantastic, and our customers love how easy it is to order. The admin panel makes updating our menu a breeze. Best investment we've made!",
    author: "Sarah Martinez",
    role: "Owner",
    company: "WannaBurger",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ddd' width='100' height='100'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='50' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E👤%3C/text%3E%3C/svg%3E",
    rating: 5
  },
  {
    quote: "James delivered exactly what we needed, on time and on budget. His communication throughout the project was excellent - weekly demos kept us in the loop, and he was always available to answer questions. The website has helped us attract more customers and showcase our work professionally.",
    author: "David Chen",
    role: "Founder",
    company: "Chen Construction",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ddd' width='100' height='100'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='50' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E👤%3C/text%3E%3C/svg%3E",
    rating: 5
  },
  {
    quote: "Working with JGServicesLLC was a game-changer for our business. The e-commerce platform he built handles thousands of orders per month flawlessly. The admin dashboard is intuitive, and customers consistently compliment the checkout experience. Worth every penny!",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "Artisan Goods Co.",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ddd' width='100' height='100'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='50' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E👤%3C/text%3E%3C/svg%3E",
    rating: 5
  },
  {
    quote: "I appreciated the transparency throughout the entire process. James explained technical concepts in plain English, provided realistic timelines, and delivered on every promise. The website performance is incredible - our page load times went from 8 seconds to under 2 seconds!",
    author: "Michael Thompson",
    role: "Marketing Director",
    company: "Thompson & Associates",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ddd' width='100' height='100'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='50' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E👤%3C/text%3E%3C/svg%3E",
    rating: 5
  },
  {
    quote: "What impressed me most was the attention to detail. James didn't just build what we asked for - he suggested improvements based on his experience that we hadn't even considered. The SEO optimization has already improved our Google rankings significantly.",
    author: "Lisa Patel",
    role: "Owner",
    company: "Patel Wellness Center",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ddd' width='100' height='100'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='50' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E👤%3C/text%3E%3C/svg%3E",
    rating: 5
  },
  {
    quote: "The post-launch support has been outstanding. James provided thorough training on the admin panel, and even months later, he's quick to respond when we have questions. It's clear he cares about long-term success, not just finishing the project.",
    author: "Robert Kim",
    role: "Operations Manager",
    company: "Kim's Auto Repair",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ddd' width='100' height='100'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='50' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E👤%3C/text%3E%3C/svg%3E",
    rating: 5
  }
];

export default function Testimonials({ limit }: { limit?: number }) {
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedTestimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow italic">
            "{testimonial.quote}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 mt-auto">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-gray-900 dark:text-white">
                {testimonial.author}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
