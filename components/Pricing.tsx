"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import pricing from "@/lib/pricing.json";

export default function Pricing() {
  const mainServices = pricing.services.filter(s => 
    ['haircut', 'beard', 'machine', 'shave'].includes(s.id)
  );
  const combo = pricing.combos[0];
  
  let comboPrice = 0;
  combo.ids.forEach(id => {
    const s = pricing.services.find(x => x.id === id);
    if (s) comboPrice += s.price;
  });
  comboPrice -= combo.discount;

  return (
    <section className="py-24 bg-bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
      
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge="ПРАЙС-ЛИСТ"
          title="Основні послуги"
          subtitle="Прозоре ціноутворення без прихованих доплат. Миття та преміум-стайлінг включено у вартість."
          centered={true}
          light={true}
        />

        <div className="mt-16 max-w-3xl mx-auto space-y-6">
          {mainServices.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-end justify-between group cursor-default"
            >
              <div className="flex-1 flex items-end gap-4">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-accent transition-colors">{service.name}</h3>
                <div className="flex-1 border-b border-white/20 border-dashed mb-2 opacity-50 group-hover:opacity-100 group-hover:border-accent/50 transition-all" />
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-accent ml-4 shrink-0">
                {service.price} <span className="text-lg text-accent/70">{pricing.currency}</span>
              </div>
            </motion.div>
          ))}
          
          {/* Combo */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-end justify-between group mt-10 pt-10 border-t border-white/10 cursor-default"
          >
            <div className="flex-1 flex items-end gap-4">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-accent transition-colors">{combo.name}</h3>
              <div className="flex-1 border-b border-white/20 border-dashed mb-2 opacity-50 group-hover:opacity-100 group-hover:border-accent/50 transition-all" />
            </div>
            <div className="text-2xl md:text-3xl font-display font-bold text-accent ml-4 shrink-0">
              {comboPrice} <span className="text-lg text-accent/70">{pricing.currency}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
