import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  accent?: "primary" | "accent";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
  accent = "primary",
}) => {
  const hoverBorder =
    accent === "accent"
      ? "hover:border-accent-200 dark:hover:border-accent-700"
      : "hover:border-primary-200 dark:hover:border-primary-700";
  const hoverTitle =
    accent === "accent"
      ? "group-hover:text-accent-600 dark:group-hover:text-accent-400"
      : "group-hover:text-primary-600 dark:group-hover:text-primary-400";
  const iconGradient =
    accent === "accent"
      ? "from-accent-400 to-primary-400"
      : "from-primary-400 to-accent-400";
  const iconBg =
    accent === "accent"
      ? "from-accent-500 to-primary-500"
      : "from-primary-500 to-accent-500";

  return (
    <div
      className={`group card-surface card-surface-hover p-6 sm:p-8 animate-slide-up ${hoverBorder}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="relative">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${iconGradient} rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
            />
            <div className={`relative bg-gradient-to-r ${iconBg} p-3 rounded-lg text-white`}>
              {icon}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2
            className={`text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-200 ${hoverTitle}`}
          >
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
