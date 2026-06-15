"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as Array<{title: string, desc: string, price: string, imageUrl: string}>;

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('services.badge') as string}
          title={t('services.title') as string}
          centered
        />

        {/* Pattern 8: Action Photo Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold rounded-full mb-4">
                  {item.price}
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 line-clamp-2 mb-4">{item.desc}</p>
                
                <a href="#calculator" className="inline-flex items-center gap-2 text-accent-light font-bold hover:text-white transition-colors">
                  Розрахувати <span className="text-xl">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
