"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const { t } = useLocale();
  const items = t("faq.items") as Array<{ question: string; answer: string }>;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-bg-light border-y border-border">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading 
          badge={t("faq.badge")}
          title={t("faq.title")}
        />

        <div className="space-y-4">
          {items.map((item, i) => (
            <div 
              key={i}
              className={`bg-white rounded-2xl border transition-colors duration-300 overflow-hidden ${
                openIndex === i ? "border-accent shadow-md" : "border-border hover:border-accent/50"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:bg-bg-light"
              >
                <span className="font-bold text-primary pr-8">{item.question}</span>
                <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                  openIndex === i ? "bg-accent border-accent text-white" : "border-border text-text-muted"
                }`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-4 h-4 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-text-muted leading-relaxed border-t border-border/50 pt-4">
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
