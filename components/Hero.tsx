"use client";
import { useLocale } from "@/lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const stats = t("hero.stats") as { value: string; label: string }[];

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img 
          src={t("hero.imageUrl")} 
          alt="Barber precision" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Typography & Data */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-accent/30 bg-accent/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-display text-xs tracking-widest uppercase">{t("hero.badge")}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
              {t("hero.title").split('.').map((part: string, i: number, arr: any[]) => (
                <span key={i}>
                  {part}{i < arr.length - 1 ? <span className="text-accent">.</span> : ''}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-xl font-light leading-relaxed">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="primary">
                {t("hero.cta")}
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/5">
                {t("hero.secondaryCta")}
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                >
                  <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Technical Visual (Hidden on mobile for cleaner look) */}
        <div className="hidden lg:block relative h-[450px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute inset-0 border border-white/10 bg-white/5 backdrop-blur-sm p-4"
          >
            <div className="w-full h-full border border-accent/20 relative overflow-hidden">
              {/* Scanning line animation */}
              <motion.div 
                animate={{ y: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_15px_hsl(215_90%_45%)] z-20"
              />
              <img 
                src="https://picsum.photos/seed/barber-close/600/800" 
                alt="Precision cut" 
                className="w-full h-full object-cover opacity-60 grayscale"
              />
              {/* UI Overlays */}
              <div className="absolute top-4 left-4 text-[10px] font-mono text-accent">
                [TRG: LOCKED]<br/>
                [ANG: 45.2°]
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-accent text-right">
                SYS.OP: OREST<br/>
                LVL: MASTER
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
