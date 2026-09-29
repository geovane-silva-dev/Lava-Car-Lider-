import React from 'react';
import { COMPANY_CONFIG } from '../config/company';
import { ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import heroImage from '../assets/images/hero_car_detailing_1790713345452.jpg';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#090A0C]"
    >
      {/* Background Image with Optical Scrim */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={heroImage}
          alt="Estética automotiva e polimento técnico detalhado - Lava Car Líder"
          className="w-full h-full object-cover object-center filter brightness-90 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrims for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0C] via-[#090A0C]/80 to-[#090A0C]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-[#090A0C]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#090A0C]/40 to-[#090A0C]/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Trust Marker (Unboxed metadata with typographic separator) */}
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-widest text-zinc-300 mb-6 font-semibold">
            <span className="text-[#DC2626] font-bold">Desde 1992</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-300">Carros e Caminhões</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-400">Marechal Mallet - PR</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-white uppercase leading-[1.08] mb-6 drop-shadow-sm">
            Seu veículo no <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
              Padrão Líder
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal mb-8 max-w-2xl">
            {COMPANY_CONFIG.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#DC2626] hover:bg-[#B91C1C] active:bg-[#991B1B] rounded-sm transition-all duration-150 shadow-xl shadow-red-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 group"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-7 py-4 text-sm font-semibold uppercase tracking-wider text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-zinc-500 rounded-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              Conheça Nossos Serviços
            </a>
          </div>

          {/* Quick Credibility Features */}
          <div className="mt-12 pt-8 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-zinc-300">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wide">Tradição & Solidez</div>
                <div className="text-xs text-zinc-400 mt-0.5">Mais de 30 anos no mercado</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wide">Linha Completa</div>
                <div className="text-xs text-zinc-400 mt-0.5">Veículos leves e pesados</div>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-start gap-3">
              <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wide">Cuidado Sustentável</div>
                <div className="text-xs text-zinc-400 mt-0.5">Uso responsável de água e insumos</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
