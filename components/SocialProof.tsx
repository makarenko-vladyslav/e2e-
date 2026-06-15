"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  const stats = t('socialProof.stats') as Array<{value: string, label: string}>;

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="w-full md:w-1/3">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">
              {t('socialProof.title') as string}
            </p>
            <div className="flex gap-6 opacity-60 grayscale">
              {/* Fake logos for residential complexes */}
              <div className="font-display font-bold text-xl">AVALON</div>
              <div className="font-display font-bold text-xl">СЕМИЦВІТ</div>
              <div className="font-display font-bold text-xl">ПАРУС</div>
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-wrap md:flex-nowrap gap-6 justify-between">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex-1 min-w-[120px] p-6 rounded-2xl bg-bg-light border border-gray-100"
              >
                <div className="text-4xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-text-muted font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
