import * as React from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import "../styles/styles.css";

const Services = () => {
  React.useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <div
        className="container sm:mx-auto px-4 sm:px-6 max-w-screen-xl"
        style={{ paddingTop: 120, paddingBottom: 100 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Services
            </span>
          </h1>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              We charge nothing for our services.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed px-4">
              At 8bit, we take the time to assess your unique needs and goals.
              Through a personalized consultation, we analyze how we can best
              support your vision, then customize our services to deliver the
              right solutions.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Static Website */}
          <div className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 p-6 sm:p-8 animate-slide-up">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                      viewBox="0 0 24 20"
                    >
                      <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                      <path d="M2.375 1A2.366 2.366 0 0 0 0 3.357v9.286A2.366 2.366 0 0 0 2.375 15h11.25A2.366 2.366 0 0 0 16 12.643V3.357A2.366 2.366 0 0 0 13.625 1zM1 3.357C1 2.612 1.611 2 2.375 2h11.25C14.389 2 15 2.612 15 3.357V4H1zM1 5h14v7.643c0 .745-.611 1.357-1.375 1.357H2.375A1.366 1.366 0 0 1 1 12.643z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  Static Website
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our static website service offers clients a sleek and polished
                  online presence that caters to the client's needs. With the help
                  of our organization design team and the use of cutting-edge
                  industry-standard technologies, we create static websites that
                  showcase your brand and message effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic Web App */}
          <div className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-accent-200 dark:hover:border-accent-700 p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                      viewBox="0 0 24 20"
                    >
                      <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                      <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1m1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
                  Dynamic Web App
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Utilizing the latest in web development frameworks and
                  technologies, we build web applications that will engage your
                  audience. With a powerful backend driving dynamic content and an
                  intuitive administrator portal for easy content management, we
                  empower you to keep your website fresh and relevant.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="mb-12 sm:mb-16 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 p-6 sm:p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                      viewBox="0 0 24 20"
                    >
                      <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143m-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z" />
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  Infrastructure
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Along with the rest of our services, we handle site deployment and
                  hosting on platforms like AWS or UH-hosted servers. Whether you're
                  launching a new static website or upgrading to a dynamic web
                  application, we take care of the infrastructure from deployment to
                  domain management, allowing you to focus on what matters most.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 p-8 sm:p-12 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4 text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white">
              Are you interested in 8bit services?
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Get in touch with us to discuss how we can help bring your vision to life.
            </p>
            <a
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg hover:from-primary-600 hover:to-accent-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-soft hover:shadow-glow"
              href="mailto:8bituhmanoa@gmail.com"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              Send us an Email
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Services />);
