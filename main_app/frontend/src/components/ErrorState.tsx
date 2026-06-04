import * as React from "react";

interface ErrorStateProps {
  title?: string;
  message?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Oops! Something went wrong",
  message = "We couldn't load the content. Please refresh and try again.",
}) => (
  <div className="text-center py-16 sm:py-20">
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-6 sm:p-8 max-w-md mx-4 sm:mx-auto">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-red-800 dark:text-red-200 mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-red-600 dark:text-red-400 mb-4">{message}</p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="px-4 py-2 text-sm sm:text-base bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

export default ErrorState;
