import React, { useState } from 'react';
import { COMPANY_CONFIG, buildWhatsAppUrl } from '../config/company';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#090A0C] border border-zinc-700 text-white text-xs px-3.5 py-2 rounded-sm shadow-xl animate-in fade-in slide-in-from-right-2 duration-150">
          <span>Falar no WhatsApp da Líder</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-white"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20BD5A] active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40"
        aria-label="Abrir conversa no WhatsApp com a Lava Car Líder"
      >
        {/* Subtle breathing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-40 duration-1000 pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
