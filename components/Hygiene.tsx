
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Hygiene() {
  const { t } = useLocale();
  const steps = t("hygiene.steps") as { title: string; desc: string }[];

  // Custom SVGs for technical feel
  const icons = [
    // Ultrasound
    <svg key="1" className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01" strokeWidth="3" strokeLinecap="round" />
      <path d="M4 6v-2h16v2" />
    </svg>,
    // Chemical
    <svg key="2" className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 3h6v4l4 10v4H5v-4l4-10V3z" />
      <path d="M9 13h6" />
      <path d="M5 17h14" />
    </svg>,
    // Dry Heat (Suxozhar)
    <svg key="3" className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 10v4M10 12h4" />
      <path d="M7 8h.01M17 8h.01" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ];

  return (
    <section id="hygiene" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("hygiene.badge")}
          title={t("hygiene.title")}
          subtitle={t("hygiene.subtitle")}
          light={true}
        />

        <div className="grid md:grid-cols-3 gap-8 relative mt-16">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="w-24 h-24 bg-bg-dark border border-white/10 flex items-center justify-center mb-8 relative z-10 mx-auto md:mx-0">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent text-white text-xs font-mono flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                {icons[i]}
              </div>
              
              <h3 className="text-xl font-display font-bold mb-3 text-center md:text-left">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed text-center md:text-left">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
