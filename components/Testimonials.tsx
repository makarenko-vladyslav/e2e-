"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const { t } = useLocale();
  const data = t('testimonials') as any;
  const items = [...data.items, ...data.items]; // Duplicate for infinite scroll

  return (
    <section id="reviews" className="py-24 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          centered
        />
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-6 px-3 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {items.map((item: any, idx: number) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[400px] shrink-0 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 whitespace-normal"
            >
              <div className="flex text-accent mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-text-main leading-relaxed mb-6 italic">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={`https://picsum.photos/seed/${item.name}/100/100`} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-primary">{item.name}</div>
                  <div className="text-sm text-text-muted">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
