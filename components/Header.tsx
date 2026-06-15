"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: t('nav.services') as string, href: "#services" },
    { name: t('nav.calculator') as string, href: "#calculator" },
    { name: t('nav.advantages') as string, href: "#advantages" },
    { name: t('nav.reviews') as string, href: "#reviews" },
    { name: t('nav.faq') as string, href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className={`flex items-center gap-2 font-display font-bold text-2xl tracking-tight z-50 ${scrolled ? "text-primary" : "text-white"}`}>
          <svg className={`w-8 h-8 ${scrolled ? "text-accent" : "text-accent-light"}`} viewBox="0 0 32 32" fill="none">
            <path d="M16 8C16 8 10 14 10 19C10 22.3137 12.6863 25 16 25C19.3137 25 22 22.3137 22 19C22 14 16 8 16 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 15L16 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M13 18L15 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          Клінінг Лев
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-text-main" : "text-white/90"}`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-2 ml-4 border-l border-white/20 pl-6">
            <button 
              onClick={() => setLocale('uk')} 
              className={`text-sm font-bold transition-colors ${locale === 'uk' ? (scrolled ? 'text-accent' : 'text-white') : (scrolled ? 'text-text-muted' : 'text-white/50')}`}
            >
              UK
            </button>
            <span className={scrolled ? "text-text-muted" : "text-white/50"}>/</span>
            <button 
              onClick={() => setLocale('en')} 
              className={`text-sm font-bold transition-colors ${locale === 'en' ? (scrolled ? 'text-accent' : 'text-white') : (scrolled ? 'text-text-muted' : 'text-white/50')}`}
            >
              EN
            </button>
          </div>

          <a 
            href="tel:+380000000000" 
            className={`px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 ${
              scrolled ? "bg-primary text-white hover:bg-primary-light shadow-lg" : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            +38 000 000 00 00
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 p-2 ${scrolled || mobileMenuOpen ? "text-primary" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-40"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-primary"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 mt-4">
              <button onClick={() => { setLocale('uk'); setMobileMenuOpen(false); }} className={`text-xl font-bold ${locale === 'uk' ? 'text-accent' : 'text-text-muted'}`}>UK</button>
              <button onClick={() => { setLocale('en'); setMobileMenuOpen(false); }} className={`text-xl font-bold ${locale === 'en' ? 'text-accent' : 'text-text-muted'}`}>EN</button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
