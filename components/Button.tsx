
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const baseStyle = "relative inline-flex items-center justify-center px-8 py-4 font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-dark shadow-[0_0_20px_hsl(210_100%_45%/0.3)] hover:shadow-[0_0_30px_hsl(210_100%_45%/0.5)]",
    outline: "border border-accent text-accent hover:bg-accent/10",
    ghost: "text-primary hover:text-accent"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
