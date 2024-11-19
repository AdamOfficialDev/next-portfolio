// components/ui/Button.tsx
import { motion } from "framer-motion";
import { classNames } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classNames(
        "rounded-lg font-medium transition-colors",
        variant === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "",
        variant === "secondary"
          ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
          : "",
        variant === "outline"
          ? "border border-gray-300 hover:border-gray-400"
          : "",
        size === "sm" ? "px-3 py-1.5 text-sm" : "",
        size === "md" ? "px-4 py-2" : "",
        size === "lg" ? "px-6 py-3 text-lg" : "",
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className !== undefined ? className : ""
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
