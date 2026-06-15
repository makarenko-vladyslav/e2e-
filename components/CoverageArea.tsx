"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function CoverageArea() {
  const { t } = useLocale();
  const areas = t("coverage.areas") as string[];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("coverage.badge")}
          title={t("coverage.title")}
          subtitle={t("coverage.subtitle")}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {areas.map((area, i) => (
              <div key={i} className="px-5 py-2.5 bg-bg-light border border-border rounded-full text-primary font-medium flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {area}
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border bg-bg-light relative"
          >
            {/* Placeholder for Map - In real project, use Google Maps iframe */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md text-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-bold text-primary text-lg">Івано-Франківськ</p>
                <p className="text-text-muted text-sm">+ передмістя</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
