"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const icons: Record<string, React.ReactNode> = {
  tag: <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01" strokeLinecap="round" strokeLinejoin="round"/>,
  zap: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>,
  users: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>,
  check: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
};

export default function WhyUs() {
  const { t } = useLocale();
  const items = t("whyUs.items") as Array<{ title: string; description: string; icon: string }>;

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("whyUs.badge")}
          title={t("whyUs.title")}
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 p-6 lg:p-8 rounded-2xl bg-bg-light border border-border/50 hover:border-accent/30 transition-colors"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-white shadow-sm border border-border flex items-center justify-center text-accent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  {icons[item.icon]}
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
