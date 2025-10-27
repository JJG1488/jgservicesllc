import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - JGServicesLLC",
  description: "Get in touch with JGServicesLLC for your custom web development needs.",
};

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 dark:from-sapphire-950 dark:via-amethyst-950 dark:to-sapphire-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 dark:from-sapphire-400 dark:via-amethyst-400 dark:to-amethyst-500 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <p className="text-center text-gray-600 dark:text-amethyst-200 mb-12 max-w-2xl mx-auto">
          Let's bring your vision to life with stunning web solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gradient-to-br dark:from-sapphire-950 dark:to-amethyst-950 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-sapphire-800">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-sapphire-400 dark:to-amethyst-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-gray-700 dark:text-sapphire-100 mb-6">
              Whether you have questions, ideas, or are ready to get started on
              your custom website, send me a message and I'll get back to you
              promptly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-sapphire-600 dark:to-amethyst-600 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <strong className="block text-gray-900 dark:text-sapphire-50 mb-1">Phone:</strong>
                  <a
                    href="tel:+15862765646"
                    className="text-blue-600 dark:text-amethyst-400 hover:text-purple-600 dark:hover:text-sapphire-300 transition font-medium"
                  >
                    +1 (586) 276-5646
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 dark:from-amethyst-600 dark:to-sapphire-600 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <strong className="block text-gray-900 dark:text-sapphire-50 mb-1">Email:</strong>
                  <a
                    href="mailto:info@jgservicesllc.com"
                    className="text-blue-600 dark:text-amethyst-400 hover:text-purple-600 dark:hover:text-sapphire-300 transition font-medium"
                  >
                    info@jgservicesllc.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gradient-to-br dark:from-sapphire-950 dark:to-amethyst-950 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-amethyst-800">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-sapphire-50">Send a Message</h3>
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 text-center bg-white dark:bg-gradient-to-br dark:from-amethyst-950 dark:via-sapphire-950 dark:to-amethyst-950 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-sapphire-800">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 dark:from-sapphire-400 dark:via-amethyst-400 dark:to-amethyst-500 bg-clip-text text-transparent">
            Or Schedule a Consultation
          </h3>
          <p className="text-gray-600 dark:text-amethyst-200 mb-6 max-w-2xl mx-auto">
            Prefer a live conversation? Book a free 30-minute consultation to discuss your project.
          </p>
          <Link
            href="/schedule"
            className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 dark:from-sapphire-600 dark:via-amethyst-600 dark:to-amethyst-700 hover:from-blue-700 hover:via-purple-700 hover:to-purple-800 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Schedule Now
          </Link>
        </div>
      </div>
    </div>
  );
}
