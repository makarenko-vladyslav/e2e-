"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function CalculatorSection() {
  const { t } = useLocale();
  const calcData = t('calculator') as any;
  
  const [area, setArea] = useState(50);
  const [type, setType] = useState<"standard" | "deep" | "repair">("standard");
  const [extras, setExtras] = useState({ windows: 0, oven: false, fridge: false });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let price = area * pricing.basePricePerSqm * pricing.multipliers[type];
    price += extras.windows * pricing.extras.windows;
    if (extras.oven) price += pricing.extras.oven;
    if (extras.fridge) price += pricing.extras.fridge;
    
    setTotal(Math.max(price, pricing.minPrice));
  }, [area, type, extras]);

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={calcData.badge}
          title={calcData.title}
          subtitle={calcData.subtitle}
          centered
        />

        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-5">
            
            {/* Inputs */}
            <div className="md:col-span-3 p-8 md:p-12 bg-bg-light">
              
              {/* Area Slider */}
              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <label className="font-bold text-primary text-lg">{calcData.areaLabel}</label>
                  <span className="text-3xl font-display font-bold text-accent">{area} м²</span>
                </div>
                <input 
                  type="range" 
                  min="20" max="200" step="5"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Type Selection */}
              <div className="mb-10">
                <label className="font-bold text-primary text-lg block mb-4">{calcData.typeLabel}</label>
                <div className="grid grid-cols-3 gap-3">
                  {(Object.keys(calcData.types) as Array<keyof typeof calcData.types>).map((tKey) => (
                    <button
                      key={tKey}
                      onClick={() => setType(tKey)}
                      className={`py-3 px-2 rounded-xl text-sm font-bold transition-all border-2 ${
                        type === tKey 
                          ? "border-accent bg-accent/5 text-accent" 
                          : "border-gray-200 bg-white text-text-muted hover:border-accent/50"
                      }`}
                    >
                      {calcData.types[tKey]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div>
                <label className="font-bold text-primary text-lg block mb-4">{calcData.extrasLabel}</label>
                <div className="space-y-4">
                  
                  {/* Windows Counter */}
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                    <span className="font-medium text-primary">{calcData.extras.windows}</span>
                    <div className="flex items-center gap-4 bg-bg-light rounded-lg p-1">
                      <button onClick={() => setExtras(p => ({...p, windows: Math.max(0, p.windows - 1)}))} className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-primary font-bold">-</button>
                      <span className="w-4 text-center font-bold">{extras.windows}</span>
                      <button onClick={() => setExtras(p => ({...p, windows: p.windows + 1}))} className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-primary font-bold">+</button>
                    </div>
                  </div>

                  {/* Toggles */}
                  {['oven', 'fridge'].map((ext) => (
                    <label key={ext} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 cursor-pointer hover:border-accent/30 transition-colors">
                      <span className="font-medium text-primary">{calcData.extras[ext as keyof typeof calcData.extras]}</span>
                      <div className={`w-12 h-6 rounded-full transition-colors relative ${extras[ext as keyof typeof extras] ? 'bg-accent' : 'bg-gray-200'}`}>
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${extras[ext as keyof typeof extras] ? 'translate-x-6' : ''}`} />
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden"
                        checked={extras[ext as keyof typeof extras] as boolean}
                        onChange={(e) => setExtras(p => ({...p, [ext]: e.target.checked}))}
                      />
                    </label>
                  ))}

                </div>
              </div>

            </div>

            {/* Result Panel */}
            <div className="md:col-span-2 bg-primary p-8 md:p-12 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-30 pointer-events-none" />
              
              <div className="relative z-10">
                <p className="text-white/70 font-medium mb-2">{calcData.totalLabel}</p>
                <div className="text-5xl font-display font-bold mb-8 flex items-baseline gap-2">
                  ~ {Math.round(total)} <span className="text-2xl text-white/70 font-body font-normal">грн</span>
                </div>
                
                <ul className="space-y-3 mb-10 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Фіксована ціна
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Еко-хімія у вартості
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Інвентар привозимо свій
                  </li>
                </ul>

                <button className="w-full py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold transition-all hover:scale-105 shadow-[0_0_20px_hsl(185_80%_40%/0.4)]">
                  {calcData.cta}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
