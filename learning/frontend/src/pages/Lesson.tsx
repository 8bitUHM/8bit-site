import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

interface Lesson {
  name: string;
  skills: string;
  image: string;
  slug: string;
  lesson_videos: Video[];
  description: string;
}

interface Video {
  title: string;
  video_embed_link: string;
  short_description: string;
  type: "follow_along" | "concept";
}

function getYouTubeEmbedSrc(embedLink: string): string {
  try {
    const url = embedLink.trim();
    let videoId: string | null = null;
    let existingParams = "";

    // Match youtube.com/embed/VIDEO_ID or youtube-nocookie.com/embed/VIDEO_ID
    const embedMatch = url.match(/(?:youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9_-]+)(\?[^#]*)?/);
    if (embedMatch) {
      videoId = embedMatch[1];
      existingParams = (embedMatch[2] || "").replace(/^\?/, "");
    }

    // Match youtube.com/watch?v=VIDEO_ID
    if (!videoId) {
      const watchMatch = url.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/);
      if (watchMatch) videoId = watchMatch[1];
    }

    // Match youtu.be/VIDEO_ID
    if (!videoId) {
      const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
      if (shortMatch) videoId = shortMatch[1];
    }

    if (!videoId) return embedLink;

    const base = "https://www.youtube-nocookie.com/embed/" + videoId;
    const params = new URLSearchParams(existingParams);
    if (typeof window !== "undefined" && window.location?.origin) {
      params.set("origin", window.location.origin);
    }
    const query = params.toString();
    return query ? `${base}?${query}` : base;
  } catch {
    return embedLink;
  }
}

const Lesson = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [lesson, setLessonData] = useState<Lesson>();

  useEffect(() => {
    try {
      const lessons = (window as any).lesson_data as Lesson[];
      console.log(lessons);
      setLessonData(lessons[0]);

      setCanMap(true);

      setPageReady(true);
    } catch (e: any) {
      setPageReady(true);
    }
  }, []);

  const backToLessonsButton = () => {
    return (
      <a 
        href="/learning" 
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 group mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Back to lessons
      </a>
    );
  };

  const getVideoTypeBadge = (vid: Video): React.JSX.Element => {
    let ret = <></>;
    switch (vid.type) {
      case "concept":
        ret = (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 mb-3">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Concept Video
          </span>
        );
        break;

      case "follow_along":
        ret = (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 mb-3">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Follow Along
          </span>
        );
        break;
      default:
        ret = <></>;
    }
    return ret;
  };

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
                {lesson.lesson_videos.length > 0 ? (
                  <>
                    {backToLessonsButton()}
                    
                    {/* Lesson Header */}
                    <div className="mb-8 sm:mb-12 animate-fade-in">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
                        {lesson.name}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl px-2">
                        {lesson.description}
                      </p>
                    </div>

                    {/* Video Sections */}
                    <div className="space-y-12 sm:space-y-16">
                      {lesson.lesson_videos
                        .sort((a, b) => {
                          // Sort concept videos first, then follow-along videos
                          if (a.type === 'concept' && b.type === 'follow_along') return -1;
                          if (a.type === 'follow_along' && b.type === 'concept') return 1;
                          return 0;
                        })
                        .map((vid, key) => (
                        <div key={key} className="animate-slide-up" style={{ animationDelay: `${key * 200}ms` }}>
                          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 overflow-hidden">
                            {/* Video Header */}
                            <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-700">
                              {getVideoTypeBadge(vid)}
                              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                                Section {key + 1}: {vid.title}
                              </h2>
                              {vid.short_description.length > 0 && (
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {vid.short_description}
                                </p>
                              )}
                            </div>

                            {/* Video Container */}
                            <div className="relative bg-gray-900">
                              <div className="aspect-video">
                                <iframe
                                  className="w-full h-full"
                                  allowFullScreen={true}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  referrerPolicy="strict-origin-when-cross-origin"
                                  src={getYouTubeEmbedSrc(vid.video_embed_link)}
                                  title={`${vid.title} - Section ${key + 1}`}
                                ></iframe>
                              </div>
                              
                              {/* Video Overlay Effects */}
                              <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/50 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 py-1 text-white text-xs sm:text-sm font-medium">
                                  Section {key + 1}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Navigation Footer */}
                    <div className="mt-12 sm:mt-16 text-center">
                      <a
                        href="/learning"
                        className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg sm:rounded-xl hover:from-primary-600 hover:to-accent-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-medium hover:shadow-glow"
                      >
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Back to All Lessons
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    {backToLessonsButton()}
                    <div className="text-center py-16 sm:py-20">
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-md mx-4 sm:mx-auto">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Content Coming Soon</h3>
                        <p className="text-sm sm:text-base text-yellow-600 dark:text-yellow-400">This lesson is currently being prepared. Please check back later!</p>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                {backToLessonsButton()}
                <div className="text-center py-16 sm:py-20">
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-md mx-4 sm:mx-auto">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Oops! Something went wrong</h3>
                    <p className="text-sm sm:text-base text-red-600 dark:text-red-400 mb-4">We couldn't load the lesson content. Please refresh and try again.</p>
                    <button 
                      onClick={() => window.location.reload()} 
                      className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                    >
                      Refresh Page
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 sm:py-20">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 border-4 border-transparent border-t-accent-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400">Loading lesson content...</p>
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
createRoot(root).render(<Lesson />);
