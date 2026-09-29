import React from 'react';
import aboutImage from '../assets/images/about_detailing_craft_1790713362045.jpg';
import { COMPANY_CONFIG } from '../config/company';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#0D0E12] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header / Unboxed Kicker */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#DC2626] font-bold">
            Sobre a Lava Car Líder
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight mt-2">
            Experiência que faz a diferença
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Photography Asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950 shadow-2xl">
              <img
                src={aboutImage}
                alt="Profissional realizando polimento técnico e acabamento de pintura na Lava Car Líder"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center filter contrast-105 hover:scale-102 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent opacity-60" />
              
              {/* Corner badge highlight */}
              <div className="absolute bottom-5 left-5 bg-[#090A0C]/90 backdrop-blur-md border-l-4 border-[#DC2626] px-4 py-3 text-left">
                <div className="text-xs uppercase tracking-wider text-zinc-400">Padrão de Precisão</div>
                <div className="text-sm font-bold text-white uppercase tracking-tight">Carros e Veículos Pesados</div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Copy & Indicators */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="text-zinc-300 text-lg leading-relaxed space-y-4">
              <p>
                A <strong className="text-white font-semibold">Lava Car Líder</strong> atua desde <span className="text-[#DC2626] font-bold">1992</span> no segmento de estética automotiva, oferecendo um padrão de cuidado voltado para carros e caminhões.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed">
                Ao longo de mais de três décadas de história em Marechal Mallet e região, consolidamos processos que combinam técnica profissional, produtos selecionados e respeito ao patrimônio de cada cliente — do veículo de passeio ao caminhão de carga pesada.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed">
                Nossa atuação valoriza o cuidado sustentável com uso consciente de recursos, elevando a durabilidade da pintura, dos plásticos e do interior automotivo.
              </p>
            </div>

            {/* Factual Indicators Grid (No fake counts or hallucinated metrics) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-zinc-800">
              <div className="p-4 bg-[#090A0C] border border-zinc-800/80 rounded-sm">
                <div className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                  1992
                </div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1 font-medium">
                  Ano de Fundação
                </div>
              </div>

              <div className="p-4 bg-[#090A0C] border border-zinc-800/80 rounded-sm">
                <div className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                  Carros
                </div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1 font-medium">
                  Atendimento Leve
                </div>
              </div>

              <div className="p-4 bg-[#090A0C] border border-zinc-800/80 rounded-sm col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                  Caminhões
                </div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1 font-medium">
                  Veículos Pesados
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-8">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#DC2626] hover:text-white transition-colors group"
              >
                <span>Consulte atendimento para seu veículo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
