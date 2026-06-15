"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#calculator", label: t("nav.calculator") },
    { href: "#why-us", label: t("nav.whyUs") },
    { href: "#process", label: t("nav.process") },
    { href: "#reviews", label: t("nav.reviews") },
    { href: "#faq", label: t("nav.faq") },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
            scrolled ? "bg-accent" : "bg-white"
          }`}>
            <svg viewBox="0 0 32 32" className={`w-6 h-6 ${scrolled ? "stroke-white" : "stroke-accent"}`}>
              <path d="M16 8L24 14V24H8V14L16 8Z" fill="none" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M16 12V20M12 16H20" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${
            scrolled ? "text-primary" : "text-white drop-shadow-md"
          }`}>
            Прибирання Карпати
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-text-main" : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              {link.label as string}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => setLocale(locale === 'uk' ? 'en' : 'uk')}
            className={`text-sm font-bold uppercase px-2 py-1 rounded transition-colors ${
              scrolled ? "text-text-muted hover:bg-bg-light" : "text-white/80 hover:bg-white/10"
            }`}
          >
            {locale}
          </button>
          <a 
            href="#calculator"
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              scrolled 
                ? "bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg" 
                : "bg-white text-primary hover:bg-bg-light shadow-lg"
            }`}
          >
            {t("nav.cta") as string}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg viewBox="0 0 24 24" className={`w-6 h-6 ${scrolled ? "stroke-primary" : "stroke-white"}`} fill="none" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border lg:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-primary py-2 border-b border-border/50"
                >
                  {link.label as string}
                </a>
              ))}
              <div className="flex items-center justify-between mt-4">
                <button 
                  onClick={() => setLocale(locale === 'uk' ? 'en' : 'uk')}
                  className="text-primary font-bold uppercase px-4 py-2 bg-bg-light rounded-lg"
                >
                  {locale === 'uk' ? 'English' : 'Українська'}
                </button>
                <a 
                  href="#calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 bg-accent text-white rounded-full font-medium text-center"
                >
                  {t("nav.cta") as string}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
