
"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.hygiene"), href: "#hygiene" },
    { name: t("nav.gallery"), href: "#gallery" },
    { name: t("nav.faq"), href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <svg className={`w-8 h-8 ${scrolled ? 'text-accent' : 'text-accent'}`} viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="currentColor" fillOpacity="0.1" />
            <path d="M10 22 L22 10 M18 10 L22 10 L22 14 M10 22 L14 22 M10 22 L10 18" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
            <circle cx="16" cy="16" r="2" fill="currentColor" />
          </svg>
          <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
            OREST<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-main' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button variant={scrolled ? 'primary' : 'primary'} className="py-3 px-6">
              {t("nav.book")}
            </Button>
          </div>
          <button 
            className={`md:hidden p-2 ${scrolled ? 'text-primary' : 'text-primary'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-primary py-2 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-4">{t("nav.book")}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
