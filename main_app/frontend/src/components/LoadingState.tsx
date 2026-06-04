import * as React from "react";

interface LoadingStateProps {
  message?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  message = "Loading...",
}) => (
  <div className="flex flex-col items-center justify-center py-16 sm:py-20">
    <div className="relative">
      <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
      <div
        className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 border-4 border-transparent border-t-accent-500 rounded-full animate-spin"
        style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
      />
    </div>
    <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400">
      {message}
    </p>
    <div className="mt-2 flex space-x-1">
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
  </div>
);

export default LoadingState;
