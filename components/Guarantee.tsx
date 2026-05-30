
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Guarantee() {
  const { t } = useLocale();
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border border-slate-200 p-8 md:p-12 relative overflow-hidden bg-bg-light">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-tr-full" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0">
              <div className="w-32 h-32 rounded-full border-4 border-accent flex items-center justify-center bg-white shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-primary leading-none">72</div>
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mt-1">Години</div>
                </div>
              </div>
            </div>
            
            <div>
              <span className="text-accent font-display font-bold tracking-[0.1em] uppercase text-xs mb-2 block">
                {t("guarantee.badge")}
              </span>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">
                {t("guarantee.title")}
              </h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                {t("guarantee.desc")}
              </p>
              <Button variant="outline">{t("guarantee.cta")}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
