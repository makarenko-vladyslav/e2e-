
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t("socialProof.items") as string[];

  return (
    <section className="py-8 bg-primary border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-xs font-display text-slate-500 uppercase tracking-widest whitespace-nowrap mr-8">
          Технологічний стек:
        </div>
        
        {/* Marquee */}
        <div className="flex-1 relative overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...items, ...items].map((item, i) => (
              <div key={i} className="text-slate-400 font-display font-medium tracking-wider uppercase flex items-center gap-2">
                <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
