"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Team() {
  const { t } = useLocale();
  const items = t("team.items") as Array<{ name: string; role: string; bio: string; imageUrl: string }>;

  return (
    <section className="section-padding bg-bg-light border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("team.badge")}
          title={t("team.title")}
          subtitle={t("team.subtitle")}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                <p className="text-text-muted text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
