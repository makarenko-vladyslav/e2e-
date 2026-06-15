"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

function ComparisonSlider({ before, after, label }: { before: string, after: string, label: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const pos = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
    setPosition(pos);
  };

  return (
    <div className="relative">
      <div 
        ref={containerRef}
        className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden cursor-ew-resize select-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* After (Bottom Layer) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        
        {/* Before (Top Layer) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img src={before} alt="Before" className="absolute top-0 left-0 w-full h-full object-cover max-w-none pointer-events-none" style={{ width: containerRef.current?.clientWidth || '100%' }} />
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" /></svg>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 font-bold text-primary text-lg">{label}</div>
    </div>
  );
}

export default function BeforeAfter() {
  const { t } = useLocale();
  const data = t('beforeAfter') as any;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {data.items.map((item: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <ComparisonSlider before={item.before} after={item.after} label={item.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
