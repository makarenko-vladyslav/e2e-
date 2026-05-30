
"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 32 32">
                <rect width="32" height="32" rx="6" fill="currentColor" fillOpacity="0.1" />
                <path d="M10 22 L22 10 M18 10 L22 10 L22 14 M10 22 L14 22 M10 22 L10 18" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
                <circle cx="16" cy="16" r="2" fill="currentColor" />
              </svg>
              <span className="font-display font-bold text-xl tracking-tight">
                OREST<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold tracking-wider uppercase text-sm mb-6">Навігація</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-accent transition-colors">Послуги та ціни</a></li>
              <li><a href="#hygiene" className="hover:text-accent transition-colors">Стандарт гігієни</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Портфоліо</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">База знань</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold tracking-wider uppercase text-sm mb-6">Соціальні мережі</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2">Instagram ↗</a></li>
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2">Facebook ↗</a></li>
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2">Google Maps ↗</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>&copy; {currentYear} Барбершоп Орест. {t("footer.rights")}</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a>
            <a href="#" className="hover:text-white transition-colors">Договір оферти</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
