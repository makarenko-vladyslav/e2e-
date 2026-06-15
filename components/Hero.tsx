"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <img 
          src={t('hero.imageUrl') as string} 
          alt="Clean interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/95 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
          >
            ✨ {t('hero.badge') as string}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            {t('hero.title') as string}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
          >
            {t('hero.subtitle') as string}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#calculator" className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_30px_hsl(185_80%_40%/0.3)]">
              {t('hero.ctaPrimary') as string}
            </a>
            <a href="#services" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 rounded-full font-bold transition-all">
              {t('hero.ctaSecondary') as string}
            </a>
          </motion.div>
        </div>

        {/* Floating Trust Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="dark-glass p-8 rounded-3xl shadow-2xl relative animate-float">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-accent-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">{(t('hero.floatingCard') as any).title}</h3>
                <p className="text-white/70 leading-relaxed">{(t('hero.floatingCard') as any).desc}</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/avatar${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-primary object-cover" alt="Client" />
                ))}
              </div>
              <div className="text-right">
                <div className="flex text-accent-light text-sm">★★★★★</div>
                <span className="text-white/60 text-xs font-medium">500+ відгуків</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
