
"use client";
import { useState, useEffect } from "react";
import pricing from "@/lib/pricing.json";
import { motion } from "framer-motion";

export default function Configurator() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['haircut']);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    let price = 0;
    let time = 0;
    let appliedCombo = false;

    // Check combos first
    for (const combo of pricing.combos) {
      const hasAllComboItems = combo.ids.every(id => selectedServices.includes(id));
      if (hasAllComboItems) {
        // Add all items price then subtract discount
        combo.ids.forEach(id => {
          const s = pricing.services.find(x => x.id === id);
          if (s) { price += s.price; time += s.time; }
        });
        price -= combo.discount;
        appliedCombo = true;
        
        // Add remaining non-combo items
        selectedServices.forEach(id => {
          if (!combo.ids.includes(id)) {
            const s = pricing.services.find(x => x.id === id);
            if (s) { price += s.price; time += s.time; }
          }
        });
        break; // Apply only one combo for simplicity
      }
    }

    if (!appliedCombo) {
      selectedServices.forEach(id => {
        const s = pricing.services.find(x => x.id === id);
        if (s) { price += s.price; time += s.time; }
      });
    }

    setTotalPrice(price);
    setTotalTime(time);
  }, [selectedServices]);

  return (
    <section className="py-24 bg-bg-light border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-display font-bold tracking-[0.1em] uppercase text-xs mb-4 block">КАЛЬКУЛЯТОР ВІЗИТУ</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Сконфігуруйте свій візит</h2>
          <p className="text-text-muted">Оберіть необхідні послуги для точного розрахунку часу та вартості.</p>
        </div>

        <div className="bg-white border border-slate-200 shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {pricing.services.map(service => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`flex items-center justify-between p-4 border transition-all text-left ${
                    isSelected 
                      ? 'border-accent bg-accent/5 shadow-[inset_2px_0_0_hsl(210_100%_45%)]' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 border flex items-center justify-center ${isSelected ? 'border-accent bg-accent' : 'border-slate-300'}`}>
                      {isSelected && <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" strokeLinecap="square" /></svg>}
                    </div>
                    <span className={`font-medium ${isSelected ? 'text-primary' : 'text-text-main'}`}>{service.name}</span>
                  </div>
                  <span className="font-mono text-sm text-slate-500">+{service.price}{pricing.currency}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-primary text-white p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">Прогнозовані дані:</div>
              <div className="flex items-end gap-6">
                <div>
                  <span className="text-4xl font-display font-bold">{totalPrice}</span>
                  <span className="text-accent ml-1">{pricing.currency}</span>
                </div>
                <div className="pb-1">
                  <span className="text-2xl font-display font-bold">{totalTime}</span>
                  <span className="text-slate-400 ml-1 text-sm">хв</span>
                </div>
              </div>
            </div>
            <button className="w-full md:w-auto bg-accent hover:bg-accent-dark text-white px-8 py-4 font-display font-bold uppercase tracking-wider transition-colors">
              Забронювати час
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
