import * as React from "react";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  accent?: "primary" | "accent" | "violet";
}

const circleColor: Record<string, string> = {
  primary: "bg-primary-500",
  accent: "bg-accent-500",
  violet: "bg-violet-500",
};

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  accent = "primary",
}) => (
  <div
    className="flex flex-col items-center text-center p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-pop hover:-translate-y-1.5 transition-all duration-300 animate-slide-up"
    style={{ animationDelay: `${(step - 1) * 100}ms` }}
  >
    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-display font-bold mb-5 text-white shadow-pop ${circleColor[accent]}`}
    >
      {step}
    </div>
    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

export default ProcessStep;
