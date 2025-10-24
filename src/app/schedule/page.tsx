export const metadata = {
  title: "Schedule an Appointment - JGServicesLLC",
  description: "Schedule a consultation with JGServicesLLC to discuss your web development needs.",
};

export default function Schedule() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">
          Schedule an Appointment
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to discuss your project? Book a 30-minute consultation to explore
            how we can bring your ideas to life.
          </p>

          <a
            href="https://calendly.com/admin-jgservicesllc/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-lg"
          >
            Book Your Consultation
          </a>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="text-blue-600 mb-3">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm">
                Choose a time that works best for your schedule
              </p>
            </div>

            <div className="p-4">
              <div className="text-blue-600 mb-3">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Video Conference</h3>
              <p className="text-gray-600 text-sm">
                Connect via your preferred video platform
              </p>
            </div>

            <div className="p-4">
              <div className="text-blue-600 mb-3">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-gray-600 text-sm">
                No obligation - just a friendly discussion
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>
            Have questions before scheduling?{" "}
            <a href="/contact" className="text-blue-600 hover:text-blue-700 underline">
              Contact us directly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
