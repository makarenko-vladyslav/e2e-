
"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-2 text-accent font-display font-bold tracking-[0.1em] uppercase text-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          {badge}
        </span>
        <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 ${light ? 'text-white' : 'text-primary'} tracking-tight`}>
          {title}
        </h2>
        <div className={`w-16 h-1 bg-accent mb-6 ${centered ? 'mx-auto' : ''}`} />
        {subtitle && (
          <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-text-muted'}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
