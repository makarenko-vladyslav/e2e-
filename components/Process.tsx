"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Process() {
  const { t } = useLocale();
  const steps = t("process.steps") as Array<{ title: string; description: string }>;

  return (
    <section id="process" className="section-padding bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("process.badge")}
          title={t("process.title")}
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-white border-4 border-bg-light rounded-full flex items-center justify-center -translate-x-1/2 shadow-sm z-10">
                  <span className="font-display font-bold text-xl text-accent">{i + 1}</span>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-24 md:pl-0">
                  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-border ${
                    i % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}>
                    <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-text-muted">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
