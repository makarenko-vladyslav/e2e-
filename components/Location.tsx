
"use client";
import { useLocale } from "@/lib/i18n";

export default function Location() {
  const { t } = useLocale();
  const contact = t("contact");

  return (
    <section className="py-24 bg-bg-light border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Info */}
          <div>
            <span className="text-accent font-display font-bold tracking-[0.1em] uppercase text-xs mb-4 block">
              {contact.badge}
            </span>
            <h2 className="text-4xl font-display font-bold text-primary mb-12">
              {contact.title}
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center shrink-0 text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="square" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="square" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-mono mb-1">АДРЕСА</div>
                  <div className="font-bold text-primary text-lg">{contact.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center shrink-0 text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="square" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-mono mb-1">ГРАФІК РОБОТИ</div>
                  <div className="font-bold text-primary text-lg">{contact.hours}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center shrink-0 text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="square" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-mono mb-1">ТЕЛЕФОН</div>
                  <a href={`tel:${contact.phone}`} className="font-bold text-primary text-lg hover:text-accent transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto border border-slate-200 bg-white p-2 relative">
            <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-mono font-bold text-primary z-10 border border-slate-200 shadow-sm">
              GPS: 49.8397, 24.0297
            </div>
            <iframe 
              src={contact.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
