
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Process() {
  const { t } = useLocale();
  const steps = t("process.steps") as { title: string; desc: string }[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("process.badge")}
          title={t("process.title")}
          subtitle={t("process.subtitle")}
          centered={true}
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 md:-translate-x-1/2" />

          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center mb-12 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white border-2 border-accent rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 shadow-lg">
                  <span className="font-mono font-bold text-primary text-lg">0{i + 1}</span>
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <div className="bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-primary mb-2">{step.title}</h4>
                    <p className="text-text-muted text-sm">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
