import * as React from "react";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  description,
  children,
}) => (
  <div className="text-center mb-12 sm:mb-16 animate-fade-in">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
      {title}
    </h1>
    {subtitle && (
      <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 mb-4 font-medium">
        {subtitle}
      </p>
    )}
    {description && (
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
        {description}
      </p>
    )}
    {children && <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">{children}</div>}
  </div>
);

export default PageHero;
