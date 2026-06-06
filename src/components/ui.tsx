import { motion, HTMLMotionProps } from "motion/react";
import React from "react";

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: HTMLMotionProps<"button"> & { variant?: "primary" | "secondary" }) {
  const base = "inline-flex items-center justify-center px-8 py-4 uppercase tracking-[0.1em] font-sans text-xs md:text-sm transition-all duration-500 ease-out sm:px-12 w-full sm:w-auto";
  const variants = {
    primary:
      "bg-temple-gold text-temple-white hover:bg-temple-black hover:text-temple-white",
    secondary:
      "bg-transparent border border-temple-black text-temple-black hover:bg-temple-black hover:text-temple-white",
  };

  return (
    <motion.button
      className={`${base} ${variants[variant]} rounded-full ${className || ""}`}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
