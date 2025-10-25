import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - JGServicesLLC",
  description: "Get in touch with JGServicesLLC for your custom web development needs.",
};

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-700 mb-6">
              Whether you have questions, ideas, or are ready to get started on
              your custom website, send me a message and I'll get back to you
              promptly.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 mr-3"
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
                <div>
                  <strong className="block text-gray-900">Phone:</strong>
                  <a
                    href="tel:+15862765646"
                    className="text-blue-600 hover:text-blue-700 transition"
                  >
                    +1 (586) 276-5646
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 mr-3"
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
                <div>
                  <strong className="block text-gray-900">Email:</strong>
                  <a
                    href="mailto:info@jgservicesllc.com"
                    className="text-blue-600 hover:text-blue-700 transition"
                  >
                    info@jgservicesllc.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Or Schedule a Consultation</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Prefer a live conversation? Book a free 30-minute consultation to discuss your project.
          </p>
          <Link
            href="/schedule"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Schedule Now
          </Link>
        </div>
      </div>
    </div>
  );
}
