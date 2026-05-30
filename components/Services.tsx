
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Services() {
  const { t } = useLocale();
  const categories = t("services.categories") as { name: string; items: { name: string; desc: string; price: string; time: string }[] }[];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("services.badge")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left: Sticky Image/Graphic */}
          <div className="hidden lg:block">
            <div className="sticky top-32 h-[500px] bg-bg-light border border-slate-200 p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-tech-grid opacity-30" />
              <img 
                src="https://picsum.photos/seed/barber-tools/600/800" 
                alt="Tools" 
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 border border-slate-200">
                <div className="text-accent font-mono text-xs mb-2">SYS.MSG</div>
                <div className="font-display font-bold text-primary">Усі послуги включають миття голови та преміум стайлінг. Без прихованих доплат.</div>
              </div>
            </div>
          </div>

          {/* Right: Directory List */}
          <div className="space-y-16">
            {categories.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-accent" />
                  {category.name}
                </h3>
                
                <div className="flex flex-col">
                  {category.items.map((item, itemIdx) => (
                    <motion.div 
                      key={itemIdx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.1 }}
                      className="group border-b border-slate-100 py-6 hover:bg-slate-50 transition-colors px-4 -mx-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-1">{item.name}</h4>
                        <p className="text-sm text-text-muted max-w-md">{item.desc}</p>
                      </div>
                      
                      <div className="flex items-center gap-6 shrink-0">
                        <div className="text-right">
                          <div className="font-mono text-sm text-slate-400 mb-1">{item.time}</div>
                          <div className="font-display font-bold text-xl text-primary">{item.price}</div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all text-slate-400">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
