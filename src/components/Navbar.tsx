import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_CONFIG, buildWhatsAppUrl } from '../config/company';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090A0C]/95 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-[#090A0C]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#inicio"
            aria-label="Lava Car Líder - Início"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-zinc-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-zinc-300 hover:text-white transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DC2626] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#DC2626] hover:bg-[#B91C1C] active:bg-[#991B1B] rounded-sm transition-all duration-150 shadow-md shadow-red-950/30 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#0F1015] border-b border-zinc-800 px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800/40 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="w-full text-center px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-sm transition-colors"
              >
                Solicitar Orçamento
              </button>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-2.5 text-xs font-semibold tracking-wide text-zinc-300 border border-zinc-700 hover:border-zinc-500 rounded-sm transition-colors"
              >
                WhatsApp Direto: {COMPANY_CONFIG.whatsappFormatted}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
