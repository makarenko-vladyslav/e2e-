
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Testimonials() {
  const { t } = useLocale();
  const items = t("testimonials.items") as { name: string; role: string; quote: string; rating: number }[];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("testimonials.badge")}
          title={t("testimonials.title")}
          subtitle={t("testimonials.subtitle")}
          light={true}
        />

        {/* Marquee Container */}
        <div className="relative mt-12 -mx-6 px-6">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 w-max"
          >
            {[...items, ...items].map((item, i) => (
              <div 
                key={i} 
                className="w-[400px] bg-bg-dark border border-white/10 p-8 shrink-0 flex flex-col"
              >
                <div className="flex gap-1 mb-6 text-accent">
                  {[...Array(item.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-8 flex-1 leading-relaxed text-sm">"{item.quote}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-accent font-display font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{item.name}</div>
                    <div className="text-xs text-slate-500 font-mono">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
