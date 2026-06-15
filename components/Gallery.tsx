"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Gallery() {
  const { t } = useLocale();
  const items = t("gallery.items") as Array<{ url: string; alt: string }>;

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("gallery.badge")}
          title={t("gallery.title")}
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={item.url} 
                alt={item.alt} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('img-fallback') }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
