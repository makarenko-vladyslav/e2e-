"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const data = t('footer') as any;

  return (
    <footer className="bg-primary text-white/80 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 font-display font-bold text-2xl text-white mb-6">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 32 32" fill="none">
                <path d="M16 8C16 8 10 14 10 19C10 22.3137 12.6863 25 16 25C19.3137 25 22 22.3137 22 19C22 14 16 8 16 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 15L16 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M13 18L15 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              Клінінг Лев
            </a>
            <p className="max-w-sm text-white/60 leading-relaxed mb-6">
              {data.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('nav.services')}</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-accent transition-colors">Підтримуюче прибирання</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Генеральне прибирання</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Після ремонту</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Хімчистка</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{data.contacts}</h4>
            <ul className="space-y-3">
              <li><a href="mailto:ishop.inform@gmail.com" className="hover:text-accent transition-colors">ishop.inform@gmail.com</a></li>
              <li><a href="tel:+380000000000" className="hover:text-accent transition-colors text-xl font-bold text-white">+38 000 000 00 00</a></li>
              <li className="pt-2 text-white/60">{data.address}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>© {new Date().getFullYear()} Клінінг Лев. {data.rights}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
