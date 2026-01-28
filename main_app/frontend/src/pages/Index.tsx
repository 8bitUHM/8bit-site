import * as React from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import "../styles/styles.css";

const Index = () => {
  React.useEffect(() => {
    initFlowbite();
  });

  return (
    <>
      <div
        className="container sm:mx-auto px-4 sm:px-6 max-w-screen-xl"
        style={{ paddingTop: 120, paddingBottom: 100 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
            We are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              8bit
            </span>{" "}
            @ UH Manoa
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 mb-6">
            We empower our members through immersive multi-team experiences.
          </p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            8bit is a group of students from the University of Hawaii at Manoa
            passionate about software development and creating impactful
            software solutions. Specializing in full-stack website development,
            we collaborate with clients and contribute to open source software,
            bringing digital visions to life. With dedicated teams in software
            development, design, and business, we offer a holistic experience,
            fostering multi-disciplinary collaboration and professional growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 p-6 sm:p-8 animate-slide-up">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-lg">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  Digital Solutions
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  We aim to bring our software to life through innovative development and creative problem-solving.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-accent-200 dark:hover:border-accent-700 p-6 sm:p-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
                  Unique Experiences
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  We believe in teaching real life software development experience through hands-on projects and mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 360 View Section */}
        <div className="my-8 sm:my-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-soft overflow-hidden border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
              <iframe
                className="w-full aspect-video"
                allowFullScreen={true}
                allow="accelerometer; magnetometer; gyroscope"
                src="https://panoraven.com/en/embed/WOfnSPPfuM"
              ></iframe>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
              Experience an interactive 360° view of one of 8bit's team meetings with Oppkey.
            </p>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mt-12 sm:mt-16 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl sm:rounded-2xl shadow-soft border border-primary-200/50 dark:border-primary-700/50 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Connect with us on Discord to chat with our team, explore our open source projects on GitHub, or reach out via email to learn more about joining 8bit. We're always looking for passionate students who want to grow their skills and make an impact.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
              <a
                href="https://discord.gg/T7Eu75fpAf"
                target="_blank"
                className="group relative flex items-center space-x-2 px-6 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-soft hover:shadow-glow transition-all duration-200"
                aria-label="Join Discord"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                <svg
                  className="relative w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="relative text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  Join Discord
                </span>
              </a>

              <a
                href="https://github.com/8bituhm"
                target="_blank"
                className="group relative flex items-center space-x-2 px-6 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 shadow-soft hover:shadow-glow transition-all duration-200"
                aria-label="View GitHub"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                <svg
                  className="relative w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                <span className="relative text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200">
                  View GitHub
                </span>
              </a>

              <a
                href="mailto:8bituhmanoa@gmail.com"
                target="_blank"
                className="group relative flex items-center space-x-2 px-6 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 shadow-soft hover:shadow-glow transition-all duration-200"
                aria-label="Contact Us"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                <svg
                  className="relative w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                <span className="relative text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  Contact Us
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Index />);
