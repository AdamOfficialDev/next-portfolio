// components/ui/Card.tsx
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
