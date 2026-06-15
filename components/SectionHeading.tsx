"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block font-display font-bold tracking-wider uppercase text-sm mb-4 px-4 py-1.5 rounded-full ${
          light ? "bg-white/10 text-accent-light" : "bg-accent/10 text-accent"
        }`}
      >
        {badge}
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-5xl font-display font-bold mb-6 ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`h-1 w-16 bg-accent rounded-full mb-6 ${centered ? "mx-auto" : ""}`}
      />
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-text-muted"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
