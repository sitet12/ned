import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { NavItem } from '../types';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Accueil', href: '#' },
    { label: 'Gammes', href: '#gammes' },
    { label: 'Produits', href: '#products' },
    { label: 'Avantages', href: '#advantages' },
    { label: 'Mission', href: '#mission' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
            <Sun className="w-6 h-6 animate-[spin_10s_linear_infinite]" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
            NEDISUN
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#quote"
            className={`px-5 py-2 rounded-full font-semibold transition-all hover:scale-105 ${
              isScrolled 
                ? 'bg-primary text-white hover:bg-secondary' 
                : 'bg-white text-primary hover:bg-slate-100'
            }`}
          >
            Devis Gratuit
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#quote"
            className="w-full text-center bg-primary text-white py-3 rounded-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Obtenir un devis
          </a>
        </div>
      )}
    </header>
  );
};