import * as React from "react";

interface SectionDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
}

type FillDef = { solid: string } | { gradient: string[] };

const SECTION_FILL: Record<string, FillDef> = {
  white: { solid: "#ffffff" },
  soft: { solid: "#f0fdfa" },
  mint: { solid: "#14b8a6" },
  sky: { solid: "#0ea5e9" },
  violet: { solid: "#8b5cf6" },
  hero: { gradient: ["#14b8a6", "#0ea5e9", "#8b5cf6"] },
  warm: { gradient: ["#fb923c", "#ec4899"] },
  cool: { gradient: ["#0ea5e9", "#8b5cf6"] },
};

const cssGradient = (stops: string[]) =>
  `linear-gradient(90deg, ${stops
    .map((c, i) => `${c} ${Math.round((i / (stops.length - 1)) * 100)}%`)
    .join(", ")})`;

const SectionDivider: React.FC<SectionDividerProps> = ({
  from = "white",
  to = "mint",
  flip = false,
}) => {
  const reactId = React.useId();
  const gradId = `divider-grad-${reactId.replace(/:/g, "")}`;

  const fromFill = SECTION_FILL[from] ?? { solid: "#ffffff" };
  const toFill = SECTION_FILL[to] ?? { solid: "#14b8a6" };

  const topStyle: React.CSSProperties =
    "gradient" in fromFill
      ? { backgroundImage: cssGradient(fromFill.gradient) }
      : { backgroundColor: fromFill.solid };

  const pathFill = "gradient" in toFill ? `url(#${gradId})` : toFill.solid;

  return (
    <div
      className="w-full overflow-hidden leading-none -mt-px -mb-px"
      style={topStyle}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`w-full h-16 sm:h-24 block ${flip ? "rotate-180" : ""}`}
      >
        {"gradient" in toFill && (
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
              {toFill.gradient.map((c, i) => (
                <stop
                  key={i}
                  offset={`${Math.round((i / (toFill.gradient.length - 1)) * 100)}%`}
                  stopColor={c}
                />
              ))}
            </linearGradient>
          </defs>
        )}
        <path
          fill={pathFill}
          d="M0,64 C240,128 480,16 720,48 C960,80 1200,128 1440,72 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
