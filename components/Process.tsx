"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const data = t('process') as any;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          centered
        />

        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />

          <div className="space-y-12">
            {data.steps.map((step: any, idx: number) => (
              <div key={idx} className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Number Node */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white border-4 border-bg-light rounded-full flex items-center justify-center text-xl font-display font-bold text-accent shadow-lg md:-translate-x-1/2 z-10">
                  {idx + 1}
                </div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, x: idx % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`ml-20 md:ml-0 w-full md:w-[45%] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}
                >
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed">{step.desc}</p>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
