"use client";
import { useLocale } from "@/lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const stats = t("hero.stats") as Array<{ value: string; label: string }>;

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={t("hero.imageUrl") as string} 
          alt="Cleaning" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          style={{ opacity }}
          className="lg:col-span-7 text-white"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium tracking-wide">{t("hero.badge") as string}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6 text-white"
          >
            {t("hero.title") as string}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
          >
            {t("hero.subtitle") as string}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#calculator"
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-bold text-lg text-center transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              {t("hero.ctaPrimary") as string}
            </a>
            <a 
              href="#services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-lg text-center transition-all backdrop-blur-sm"
            >
              {t("hero.ctaSecondary") as string}
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Stats Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="lg:col-span-5 hidden md:block"
        >
          <div className="bg-white rounded-3xl p-8 relative overflow-hidden shadow-xl border border-border">
            <div className="grid gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-bg-light flex items-center justify-center shrink-0">
                    <span className="text-2xl font-display font-bold text-accent">{stat.value}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{stat.label}</h3>
                    <div className="w-full h-1.5 bg-bg-light rounded-full mt-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.8 + (i * 0.2), duration: 1 }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
