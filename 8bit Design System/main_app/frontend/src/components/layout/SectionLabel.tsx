import * as React from "react";

type LabelAccent = "primary" | "accent" | "violet" | "light";

interface SectionLabelProps {
  children: React.ReactNode;
  accent?: LabelAccent;
}

const accentClass: Record<LabelAccent, string> = {
  primary: "section-label--primary",
  accent: "section-label--accent",
  violet: "section-label--violet",
  light: "section-label--light",
};

const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  accent = "primary",
}) => <span className={accentClass[accent]}>{children}</span>;

export default SectionLabel;
