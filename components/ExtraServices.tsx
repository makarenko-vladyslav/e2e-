"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function ExtraServices() {
  const { t } = useLocale();
  const items = t('extraServices.items') as string[];

  return (
    <section className="py-24 bg-bg-light border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 sticky top-32">
            <SectionHeading 
              badge={t('extraServices.badge') as string}
              title={t('extraServices.title') as string}
            />
            <p className="text-text-muted mb-8">
              Додайте ці послуги до основного прибирання в нашому калькуляторі для ідеального результату.
            </p>
            <a href="#calculator" className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
              Перейти до калькулятора
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {items.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-0 md:[&:nth-last-child(-n+2)]:border-0"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-primary">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
