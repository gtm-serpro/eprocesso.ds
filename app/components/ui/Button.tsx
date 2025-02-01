import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { Link } from "react-router";
import clsx from "clsx"; // ✅ Utility for conditional classNames

type ButtonVariants = "primary" | "secondary" | "tertiary";
type ButtonSizes = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean; // ✅ Ensure disabled state
  "aria-label"?: string; // ✅ Improve screen reader support
}

// ✅ Define separate types for <button> and <a>
type ButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type AnchorProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    to: string;
  };

// ✅ Use a union type to properly type "Props"
type Props = ButtonProps | AnchorProps;

export default function Button({
  as = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  ...props
}: Props) {
  const baseStyles =
    "font-semibold rounded transition duration-300 focus:outline-none focus:ring";
  const variantStyles = {
    primary:
      "btn-primary",
    secondary:
      "btn-secondary",
    tertiary:
      "btn-tertiary", // ✅ Transparent style
 };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  // ✅ If "as" is "a", ensure we only pass valid anchor props
  if (as === "a") {
    const { to, ...anchorProps } = props as AnchorProps;
    return (
      <Link
        to={to}
        className={clsx(classes, "focus-visible:ring-2")}
        role="button" // ✅ Ensures it acts as a button for screen readers
        tabIndex={disabled ? -1 : 0} // ✅ Removes focus from disabled links
        aria-disabled={disabled} // ✅ Informative for screen readers
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  // ✅ Otherwise, render a button
  return (
    <button
      className={classes}
      disabled={disabled}
      aria-disabled={disabled} // ✅ Ensures screen readers recognize disabled state
      {...(props as ButtonProps)}
    >
      {children}
    </button>
  );
}
