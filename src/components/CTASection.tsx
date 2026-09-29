import React from 'react';
import { COMPANY_CONFIG, buildWhatsAppUrl } from '../config/company';
import { MessageCircle, ShieldCheck, Phone } from 'lucide-react';

interface CTASectionProps {
  onOpenQuoteModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-b from-[#090A0C] via-[#0F1015] to-[#090A0C] border-t border-zinc-900 overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Unboxed Badge / Marker */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#DC2626] font-bold mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>Atendimento Direto & Personalizado</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight max-w-3xl mx-auto leading-tight">
          Pronto para deixar seu veículo no Padrão Líder?
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Entre em contato com a nossa equipe e consulte as opções disponíveis para o seu veículo.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de falar com a equipe da Lava Car Líder para tirar dúvidas e solicitar orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#DC2626] hover:bg-[#B91C1C] active:bg-[#991B1B] rounded-sm transition-all duration-150 shadow-xl shadow-red-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Lava Car Líder</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700/80 hover:border-zinc-500 rounded-sm transition-colors"
          >
            Simular Orçamento Rápido
          </button>
        </div>

        {/* Phone info */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono">
          <Phone className="w-3.5 h-3.5 text-zinc-400" />
          <span>WhatsApp Oficial: {COMPANY_CONFIG.whatsappFormatted}</span>
        </div>

      </div>
    </section>
  );
};
