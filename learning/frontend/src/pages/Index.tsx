import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import LoadingImage from "../components/LoadingImage";
import "../styles/styles.css";

interface Tag {
  tag_name: string;
  color: string;
}

interface Lesson {
  name: string;
  skills: string;
  image: string;
  description: string;
  slug: string;
  tags: Tag[];
  core_lesson: boolean;
  required_lesson: boolean;
  extension_lesson: boolean;
  completion_time: string;
}

const Index = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [lessonData, setLessonData] = useState<Lesson[]>([]);

  useEffect(() => {
    try {
      const lessons = (window as any).data as Lesson[];
      setLessonData(lessons);
      // lessons.forEach((lesson: any) => {
      //   console.log(lesson);
      // });

      setCanMap(true);
      setPageReady(true);
    } catch (e: any) {
      setPageReady(true);
    }
  }, []);
  return (
    <>
      <div
        className="container sm:mx-auto px-4 sm:px-6 max-w-screen-xl"
        style={{ paddingTop: 100, paddingBottom: 100 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {pageReady ? (
          <>
            {canMap ? (
              <>
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 animate-fade-in">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">8bit Learning</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                    Master new skills with our comprehensive collection of interactive lessons and hands-on tutorials.
                  </p>
                </div>

                {/* Lessons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {lessonData.map((lesson, key) => {
                    return (
                      <div
                        key={key}
                        className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 animate-slide-up"
                        style={{ animationDelay: `${key * 100}ms` }}
                      >
                        {/* Image Container */}
                        <div className="relative overflow-hidden">
                          <a href={`/learning/lessons/${lesson.slug}`} className="block">
                            <LoadingImage
                              imageUri={lesson.image}
                              className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </a>
                          
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Lesson Number Badge */}
                          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                            Lesson {key + 1}
                          </div>
                          
                          {/* Time Badge */}
                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary-500 text-white text-xs font-medium px-2 sm:px-3 py-1 rounded-full shadow-lg">
                            {lesson.completion_time}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6">
                          <a href={`/learning/lessons/${lesson.slug}`}>
                            <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
                              {lesson.name}
                            </h3>
                          </a>
                          
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                            {lesson.description}
                          </p>

                          {/* Tags Container */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            {lesson.required_lesson && (
                              <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Required
                              </span>
                            )}
                            
                            {lesson.core_lesson && (
                              <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                                Core
                              </span>
                            )}
                            
                            {lesson.tags.map((tag, tagKey) => (
                              <span
                                key={tagKey}
                                className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-300"
                              >
                                {tag.tag_name}
                              </span>
                            ))}
                          </div>

                          {/* Action Button */}
                          <a
                            href={`/learning/lessons/${lesson.slug}`}
                            className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg sm:rounded-xl hover:from-primary-600 hover:to-accent-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 group-hover:shadow-glow"
                          >
                            <span>Start Learning</span>
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="text-center py-16 sm:py-20">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-md mx-4 sm:mx-auto">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Oops! Something went wrong</h3>
                  <p className="text-sm sm:text-base text-red-600 dark:text-red-400 mb-4">We couldn't load the lessons. Please refresh and try again.</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    Refresh Page
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 sm:py-20">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 border-4 border-transparent border-t-accent-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400">Loading amazing lessons...</p>
            <div className="mt-2 flex space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Index />);
