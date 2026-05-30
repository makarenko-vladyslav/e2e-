
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Philosophy() {
  const { t } = useLocale();
  const cards = t("philosophy.cards") as { title: string; desc: string; solution: string }[];

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-tech-grid opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("philosophy.badge")}
          title={t("philosophy.title")}
          subtitle={t("philosophy.subtitle")}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-accent transition-colors" />
              
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 text-primary">
                <span className="font-mono text-sm font-bold">0{i + 1}</span>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-3">{card.title}</h3>
              <p className="text-text-muted mb-6 text-sm leading-relaxed">{card.desc}</p>
              
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="square" />
                  </svg>
                  <p className="text-sm font-medium text-primary">{card.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
