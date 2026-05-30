
"use client";
import { useLocale } from "@/lib/i18n";
import Button from "./Button";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary text-white p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{t("ctaBanner.title")}</h2>
            <p className="text-xl text-slate-300">{t("ctaBanner.subtitle")}</p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <Button variant="primary" className="text-lg px-10 py-5">
              {t("ctaBanner.btn")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
