import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../config/company';
import { MapPin, Navigation, ExternalLink, Instagram, Phone, Copy, Check } from 'lucide-react';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_CONFIG.address.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#0D0E12] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#DC2626] font-bold">
            Localização & Acesso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight mt-2">
            Encontre a Lava Car Líder
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Venha conhecer nossa estrutura em Marechal Mallet, Paraná.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Info & Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Address Box */}
            <div className="p-7 bg-[#090A0C] border border-zinc-800 rounded-sm">
              <div className="flex items-center gap-3 text-[#DC2626] mb-4">
                <MapPin className="w-6 h-6 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Endereço Oficial
                </span>
              </div>

              <div className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                {COMPANY_CONFIG.address.street}
              </div>
              <div className="text-zinc-300 text-base mt-1">
                {COMPANY_CONFIG.address.city} - {COMPANY_CONFIG.address.stateShort}
              </div>
              <div className="text-zinc-400 text-sm mt-0.5 font-mono">
                CEP {COMPANY_CONFIG.address.cep} · Brasil
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={COMPANY_CONFIG.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-sm transition-colors shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Como Chegar</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-sm transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Contact & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* WhatsApp Card */}
              <div className="p-5 bg-[#090A0C] border border-zinc-800 rounded-sm">
                <div className="flex items-center gap-2 text-[#DC2626] mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">WhatsApp</span>
                </div>
                <div className="text-base font-bold text-white font-mono">
                  {COMPANY_CONFIG.whatsappFormatted}
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  Atendimento ágil para orçamentos
                </div>
              </div>

              {/* Instagram Card */}
              <a
                href={COMPANY_CONFIG.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-[#090A0C] border border-zinc-800 hover:border-zinc-700 rounded-sm transition-colors block"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-[#DC2626]">
                    <Instagram className="w-4 h-4" />
                    <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Instagram</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                  {COMPANY_CONFIG.social.instagram.display}
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  Acompanhe fotos e novidades
                </div>
              </a>

            </div>

            {/* Factual schedule note */}
            <div className="p-4 bg-zinc-950 border border-zinc-850 rounded-sm text-xs text-zinc-400">
              <span className="text-zinc-300 font-semibold">Agendamentos & Consultas:</span> Entre em contato pelo WhatsApp para verificar disponibilidade de horários e prazos de entrega para o seu veículo.
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 h-full min-h-[360px] sm:min-h-[420px] rounded-sm overflow-hidden border border-zinc-800 bg-zinc-950 relative shadow-xl">
            <iframe
              title="Localização da Lava Car Líder - Marechal Mallet PR"
              src="https://maps.google.com/maps?q=Rua%20Santos%20Dumont%2C%20391%2C%20Marechal%20Mallet%20-%20PR&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] lg:min-h-[440px] border-0 filter invert-[0.9] hue-rotate-180 contrast-[1.1] grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Direct Map Overlay bar */}
            <div className="absolute top-3 left-3 bg-[#090A0C]/90 backdrop-blur-md px-3.5 py-2 border border-zinc-800 rounded-sm shadow text-xs">
              <span className="font-bold text-white">Lava Car Líder</span>
              <span className="text-zinc-400 block text-[11px]">Rua Santos Dumont, 391 · Mallet - PR</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
