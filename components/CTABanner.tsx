"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              {t("ctaBanner.title") as string}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              {t("ctaBanner.subtitle") as string}
            </p>
            <a 
              href="#calculator"
              className="inline-block px-10 py-5 bg-accent hover:bg-accent-hover text-white rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              {t("ctaBanner.button") as string}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
