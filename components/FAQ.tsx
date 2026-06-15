"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const { t } = useLocale();
  const data = t('faq') as any;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          centered
        />

        <div className="space-y-4 mt-12">
          {data.items.map((item: any, idx: number) => (
            <div 
              key={idx} 
              className={`border rounded-2xl transition-colors ${openIdx === idx ? 'border-accent bg-accent/5' : 'border-gray-200 bg-white hover:border-accent/50'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-display font-bold text-lg ${openIdx === idx ? 'text-primary' : 'text-text-main'}`}>
                  {item.question}
                </span>
                <span className={`ml-4 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIdx === idx ? 'bg-accent text-white' : 'bg-bg-light text-primary'}`}>
                  <svg className={`w-5 h-5 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-text-muted leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
