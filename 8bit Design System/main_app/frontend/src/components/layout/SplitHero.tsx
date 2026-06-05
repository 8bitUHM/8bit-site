import * as React from "react";
import StatChip from "./StatChip";

interface SplitHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  stats?: { label: string; value: string }[];
  showLogo?: boolean;
}

const SplitHero: React.FC<SplitHeroProps> = ({
  title,
  subtitle,
  children,
  stats,
  showLogo = true,
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
    <div className="animate-fade-in">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.05] drop-shadow-sm">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-xl leading-relaxed mb-8 font-semibold">
          {subtitle}
        </p>
      )}
      {children && (
        <div className="flex flex-wrap items-center gap-4">{children}</div>
      )}
    </div>

    <div className="relative flex flex-col items-center justify-center animate-slide-up">
      {showLogo && (
        <div className="relative">
          <span className="blob w-64 h-64 bg-white/30 -top-10 -left-6 animate-float" />
          <span className="blob w-56 h-56 bg-bubble-400/40 bottom-0 -right-6 animate-float-slow" />
          <div className="relative bg-white rounded-[2rem] p-8 sm:p-10 shadow-pop -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="/static/main_app/assets/8bit-long-logo.png"
              alt="8bit @ UH Manoa"
              className="h-20 sm:h-24 w-auto mx-auto"
            />
            <div className="mt-5 flex justify-center gap-2.5">
              <span className="w-3 h-3 bg-primary-500 rounded-full" />
              <span className="w-3 h-3 bg-accent-500 rounded-full" />
              <span className="w-3 h-3 bg-violet-500 rounded-full" />
              <span className="w-3 h-3 bg-bubble-500 rounded-full" />
              <span className="w-3 h-3 bg-sunset-500 rounded-full" />
            </div>
          </div>
        </div>
      )}
      {stats && stats.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {stats.map((stat) => (
            <StatChip key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default SplitHero;
