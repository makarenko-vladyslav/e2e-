"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Trust() {
  const { t } = useLocale();
  const data = t('trust') as any;

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              badge={data.badge}
              title={data.title}
              subtitle={data.subtitle}
              light
            />
            
            <div className="space-y-6 mt-8">
              {[
                { c: "bg-red-500", l: "Санвузол (унітаз)" },
                { c: "bg-yellow-500", l: "Санвузол (раковина, ванна)" },
                { c: "bg-blue-500", l: "Скло та дзеркала" },
                { c: "bg-green-500", l: "Кухня та житлові кімнати" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10"
                >
                  <div className={`w-10 h-10 rounded-full ${item.c} shadow-[0_0_15px_currentColor] opacity-80`} />
                  <span className="font-medium text-lg">{item.l}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[2rem] overflow-hidden"
          >
            <img src={data.imageUrl} alt="Eco cleaning tools" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
            
            {/* Floating Badges */}
            <div className="absolute bottom-10 left-10 right-10 flex gap-4">
              <div className="glass-panel p-4 rounded-2xl flex-1">
                <div className="text-accent font-bold mb-1">Sutter Professional</div>
                <div className="text-primary text-sm font-medium">Сертифіковано в ЄС</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl flex-1">
                <div className="text-accent font-bold mb-1">Kiehl</div>
                <div className="text-primary text-sm font-medium">Гіпоалергенно</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
