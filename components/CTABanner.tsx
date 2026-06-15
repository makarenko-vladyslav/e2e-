"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function CTABanner() {
  const { t } = useLocale();
  const data = t('ctaBanner') as any;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-40 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-20 translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {data.title}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {data.subtitle}
            </p>
            <a 
              href="#calculator" 
              className="inline-block px-10 py-5 bg-accent hover:bg-accent-hover text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_hsl(185_80%_40%/0.4)]"
            >
              {data.button}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
