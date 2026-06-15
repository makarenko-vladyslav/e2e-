"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Testimonials() {
  const { t } = useLocale();
  const items = t("testimonials.items") as Array<{ name: string; role: string; quote: string; rating: number; imageUrl: string }>;

  return (
    <section id="reviews" className="section-padding bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("testimonials.badge")}
          title={t("testimonials.title")}
        />
      </div>

      <div className="relative flex overflow-hidden py-4">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-light to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-light to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] gap-6 px-6">
          {[...items, ...items].map((item, i) => (
            <div 
              key={i} 
              className="w-[350px] shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-border flex flex-col"
            >
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} viewBox="0 0 20 20" fill={j < item.rating ? "currentColor" : "none"} stroke="currentColor" className="w-5 h-5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-main leading-relaxed mb-8 flex-grow">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover bg-bg-light"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-primary">{item.name}</h4>
                  <p className="text-sm text-text-muted">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
