import * as React from "react";

export type SectionVariant =
  | "white"
  | "soft"
  | "mint"
  | "sky"
  | "violet"
  | "hero"
  | "warm"
  | "cool";

interface SectionBandProps {
  variant?: SectionVariant;
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  hero?: boolean;
  blobs?: boolean;
}

const variantClass: Record<SectionVariant, string> = {
  white: "section-band--white",
  soft: "section-band--soft",
  mint: "section-band--mint",
  sky: "section-band--sky",
  violet: "section-band--violet",
  hero: "section-band--hero",
  warm: "section-band--warm",
  cool: "section-band--cool",
};

const SectionBand: React.FC<SectionBandProps> = ({
  variant = "white",
  children,
  id,
  className = "",
  innerClassName = "",
  hero = false,
  blobs = false,
}) => (
  <section
    id={id}
    className={`section-band ${variantClass[variant]} ${className}`}
  >
    {blobs && (
      <>
        <span className="blob w-72 h-72 bg-white/20 -top-20 -left-10 animate-float" />
        <span className="blob w-80 h-80 bg-white/10 bottom-0 right-0 animate-float-slow" />
      </>
    )}
    <div
      className={`section-inner ${hero ? "section-inner--hero" : ""} ${innerClassName}`}
      data-aos="fade-up"
    >
      {children}
    </div>
  </section>
);

export default SectionBand;
