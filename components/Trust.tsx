"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const icons: Record<string, React.ReactNode> = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path d="M12 22S8 18 8 12V6L12 2L16 6V12C16 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12L11 14L15 10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  machine: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <rect x="4" y="14" width="16" height="8" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 14V10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V14" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6V2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 2H14" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path d="M9 3H15" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 3V8L5 18C4.44772 19.1046 5.25 20.5 6.5 20.5H17.5C18.75 20.5 19.5523 19.1046 19 18L14 8V3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 15H17.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6V12L16 14" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

export default function Trust() {
  const { t } = useLocale();
  const items = t("trust.items") as Array<{ title: string; description: string; icon: string }>;

  return (
    <section className="section-padding bg-bg-light border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("trust.badge")}
          title={t("trust.title")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm border border-border flex items-center justify-center text-accent mb-6 relative">
                <div className="absolute inset-0 bg-accent/5 rounded-2xl scale-110 -z-10" />
                {icons[item.icon]}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
