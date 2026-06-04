import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "white";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  href: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "text-white bg-gradient-warm shadow-pop-warm hover:-translate-y-0.5",
  secondary:
    "text-white bg-primary-500 shadow-pop-primary hover:-translate-y-0.5",
  ghost:
    "text-white bg-white/20 backdrop-blur-sm hover:bg-white/30",
  white:
    "text-primary-600 bg-white shadow-pop hover:-translate-y-0.5",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center px-7 py-3.5 text-base font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/40 ${variantClasses[variant]} ${className}`}
    {...props}
  >
    {children}
  </a>
);

export default Button;
