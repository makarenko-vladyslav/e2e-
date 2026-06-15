"use client";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  const logos = t("socialProof.logos") as string[];

  return (
    <section className="py-12 bg-white border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-sm font-bold text-text-muted uppercase tracking-widest">
          {t("socialProof.title") as string}
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center justify-center px-12">
              <span className="text-xl md:text-2xl font-display font-bold text-primary/30 hover:text-primary transition-colors duration-300">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
