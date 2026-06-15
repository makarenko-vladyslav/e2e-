"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const icons: Record<string, React.ReactNode> = {
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 5L6 7L8 8L6 9L5 11L4 9L2 8L4 7L5 5Z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  brush: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M7 15L12 10L17 15" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 10V3" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="4" y="15" width="16" height="6" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 18H16" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  broom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M16 3L8 21" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 16.5L14 18M11 14L15 15.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 21C5 19.8954 5.89543 19 7 19H17C18.1046 19 19 19.8954 19 21" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  sofa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M4 16V8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 16H22" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 16V20M18 16V20" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6V11C8 12.1046 8.89543 13 10 13H14C15.1046 13 16 12.1046 16 11V6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  window: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12H21" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 3V21" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 7L9 9M15 7L17 9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16C14 16 16 14 16 12" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

export default function Services() {
  const { t } = useLocale();
  const items = t("services.items") as Array<{ id: string; title: string; description: string; icon: string }>;

  return (
    <section id="services" className="section-padding bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("services.badge")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden border border-border"
            >
              <div className="w-16 h-16 rounded-xl bg-bg-light text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {icons[item.icon]}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-primary mb-3">
                {item.title}
              </h3>
              
              <p className="text-text-muted leading-relaxed mb-6">
                {item.description}
              </p>
              
              <a href="#calculator" className="inline-flex items-center gap-2 text-primary font-bold group-hover:text-accent transition-colors">
                <span>{t("nav.cta")}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
