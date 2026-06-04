import * as React from "react";

type BentoVariant = "mint" | "sky" | "violet" | "warm" | "white";
type BentoSize = "default" | "wide" | "tall";

interface BentoTileProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant?: BentoVariant;
  size?: BentoSize;
  delay?: number;
  href?: string;
}

const solidFill: Record<BentoVariant, string> = {
  mint: "bg-primary-500 text-white",
  sky: "bg-accent-500 text-white",
  violet: "bg-violet-500 text-white",
  warm: "bg-gradient-warm text-white",
  white: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
};

const iconFill: Record<BentoVariant, string> = {
  mint: "bg-white/25",
  sky: "bg-white/25",
  violet: "bg-white/25",
  warm: "bg-white/25",
  white: "bg-gradient-cool",
};

const descColor: Record<BentoVariant, string> = {
  mint: "text-white/90",
  sky: "text-white/90",
  violet: "text-white/90",
  warm: "text-white/90",
  white: "text-gray-600 dark:text-gray-400",
};

const hoverShadow: Record<BentoVariant, string> = {
  mint: "hover:shadow-pop-primary",
  sky: "hover:shadow-pop-accent",
  violet: "hover:shadow-pop-violet",
  warm: "hover:shadow-pop-warm",
  white: "hover:shadow-pop-primary",
};

const sizeClass: Record<BentoSize, string> = {
  default: "",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
};

const BentoTile: React.FC<BentoTileProps> = ({
  title,
  description,
  icon,
  variant = "mint",
  size = "default",
  delay = 0,
  href,
}) => {
  const content = (
    <>
      <div className={`icon-blob mb-5 ${iconFill[variant]}`}>{icon}</div>
      <h3 className="text-xl sm:text-2xl font-display font-bold mb-2">{title}</h3>
      <p className={`text-sm sm:text-base leading-relaxed ${descColor[variant]}`}>
        {description}
      </p>
    </>
  );

  const className = `rounded-3xl shadow-pop transition-all duration-300 hover:-translate-y-1.5 ${hoverShadow[variant]} ${solidFill[variant]} ${sizeClass[size]} p-7 sm:p-8 animate-slide-up`;

  if (href) {
    return (
      <a href={href} className={`${className} block`} style={{ animationDelay: `${delay}ms` }}>
        {content}
      </a>
    );
  }

  return (
    <div className={className} style={{ animationDelay: `${delay}ms` }}>
      {content}
    </div>
  );
};

export default BentoTile;
