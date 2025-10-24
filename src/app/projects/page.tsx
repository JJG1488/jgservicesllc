import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects - JGServicesLLC",
  description: "Explore our portfolio of custom web development projects and case studies.",
};

const projects = [
  {
    id: 1,
    title: "WannaBurger Restaurant Website",
    description: "A modern, responsive website for a local burger restaurant featuring online ordering and menu management.",
    image: "/images/wannaBurger.png",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudySlug: "wannaburger",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather application with 5-day forecasts, geolocation, and interactive maps.",
    image: "/images/weather-dashboard.png",
    tags: ["JavaScript", "API Integration", "Responsive"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudySlug: "weather-dashboard",
  },
  {
    id: 3,
    title: "Travel Logger",
    description: "Full-stack application for tracking and sharing travel experiences with photo uploads and interactive maps.",
    image: "/images/travel-logger.png",
    tags: ["React", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudySlug: "travel-logger",
  },
  {
    id: 4,
    title: "Find Your Movie",
    description: "Movie discovery platform with advanced search, ratings, and personalized recommendations.",
    image: "/images/find-your-movie.png",
    tags: ["React", "API", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Workday Scheduler",
    description: "Dynamic workday planner with color-coded time blocks and local storage persistence.",
    image: "/images/workday-scheduler copy.png",
    tags: ["JavaScript", "jQuery", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Password Generator",
    description: "Secure password generator with customizable length and character types.",
    image: "/images/password-gen-screenshot copy.png",
    tags: ["JavaScript", "Security", "UI/UX"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore a selection of projects we've built for clients and as
            demonstrations of our capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={project.id <= 2 ? "eager" : "lazy"}
                  priority={project.id <= 2}
                  quality={85}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.caseStudySlug ? (
                    <Link
                      href={`/projects/${project.caseStudySlug}`}
                      className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 text-sm"
                    >
                      Case Study
                    </Link>
                  ) : (
                    <a
                      href={project.liveUrl}
                      className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 text-sm"
                    >
                      View Live
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    className="flex-1 text-center border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 py-2 px-4 rounded-lg transition duration-300 text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Let's discuss how we can bring your ideas to life with custom web
            development solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
