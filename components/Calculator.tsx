"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Calculator() {
  const { t } = useLocale();
  const [area, setArea] = useState(50);
  const [type, setType] = useState<"maintenance" | "general" | "post-repair">("general");
  const [extras, setExtras] = useState<Record<string, number>>({
    windows: 0,
    fridge: 0,
    oven: 0,
    "dry-cleaning": 0
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cost = area * pricing.basePrices[type];
    
    Object.entries(extras).forEach(([key, count]) => {
      cost += count * pricing.extras[key as keyof typeof pricing.extras];
    });

    setTotal(Math.max(cost, pricing.minPrice));
  }, [area, type, extras]);

  const handleExtraChange = (key: string, delta: number) => {
    setExtras(prev => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta)
    }));
  };

  const types = t("calculator.types") as Record<string, string>;
  const extrasLabels = t("calculator.extras") as Record<string, string>;

  return (
    <section id="calculator" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("calculator.badge")}
          title={t("calculator.title")}
          subtitle={t("calculator.subtitle")}
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-5">
              
              {/* Controls */}
              <div className="md:col-span-3 p-8 md:p-10 border-b md:border-b-0 md:border-r border-border">
                
                {/* Area Slider */}
                <div className="mb-10">
                  <div className="flex justify-between items-end mb-4">
                    <label className="font-bold text-primary">{t("calculator.areaLabel")}</label>
                    <span className="text-2xl font-display font-bold text-accent">{area} м²</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="200" 
                    step="5"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full h-2 bg-bg-light rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between text-sm text-text-muted mt-2">
                    <span>20 м²</span>
                    <span>200 м²</span>
                  </div>
                </div>

                {/* Type Selection */}
                <div className="mb-10">
                  <label className="block font-bold text-primary mb-4">{t("calculator.typeLabel")}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {(Object.keys(types) as Array<keyof typeof types>).map((tKey) => (
                      <button
                        key={tKey}
                        onClick={() => setType(tKey as any)}
                        className={`py-3 px-4 rounded-xl font-medium text-sm transition-all border ${
                          type === tKey 
                            ? "bg-primary text-white border-primary shadow-md" 
                            : "bg-white text-text-main border-border hover:border-accent hover:text-accent"
                        }`}
                      >
                        {types[tKey]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Extras */}
                <div>
                  <label className="block font-bold text-primary mb-4">{t("calculator.extrasLabel")}</label>
                  <div className="space-y-4">
                    {Object.keys(extrasLabels).map((key) => (
                      <div key={key} className="flex items-center justify-between p-4 rounded-xl border border-border bg-bg-light/30">
                        <span className="font-medium text-text-main">{extrasLabels[key]}</span>
                        <div className="flex items-center gap-2 bg-white border border-border rounded-lg p-1.5">
                          <button 
                            onClick={() => handleExtraChange(key, -1)}
                            className="w-11 h-11 flex items-center justify-center rounded-md text-text-muted hover:bg-bg-light hover:text-primary transition-colors text-xl"
                          >
                            -
                          </button>
                          <span className="w-6 text-center font-bold text-primary">{extras[key]}</span>
                          <button 
                            onClick={() => handleExtraChange(key, 1)}
                            className="w-11 h-11 flex items-center justify-center rounded-md text-text-muted hover:bg-bg-light hover:text-primary transition-colors text-xl"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Result Panel */}
              <div className="md:col-span-2 bg-bg-light p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-text-muted font-medium mb-2">{t("calculator.totalLabel")}</p>
                  <div className="flex items-baseline gap-2 mb-8">
                    <motion.span 
                      key={total}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-5xl md:text-6xl font-display font-bold text-primary"
                    >
                      {total}
                    </motion.span>
                    <span className="text-2xl font-bold text-text-muted">{pricing.currency}</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-sm text-text-muted">
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-accent shrink-0">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Фіксована ціна за договором
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-accent shrink-0">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Професійна хімія включена
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-accent shrink-0">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Виїзд по місту безкоштовно
                    </li>
                  </ul>

                  <button className="w-full py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold text-lg transition-colors shadow-md">
                    {t("calculator.cta")}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
