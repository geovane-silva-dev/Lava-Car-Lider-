import React from 'react';
import { ShieldCheck, Truck, Clock, Sparkles, Leaf, Award } from 'lucide-react';
import truckImage from '../assets/images/truck_detailing_lider_1790713375941.jpg';

export const Differentials: React.FC = () => {
  const differentials = [
    {
      icon: Clock,
      title: 'Desde 1992',
      description: 'Mais de 30 anos de atuação sólida e contínua no mercado de estética automotiva no Sul do Brasil.',
      highlight: 'Tradição Comprovada',
    },
    {
      icon: Truck,
      title: 'Carros e Caminhões',
      description: 'Estrutura e conhecimento técnico dimensionados tanto para veículos leves quanto para veículos pesados e cavalos mecânicos.',
      highlight: 'Versatilidade Real',
    },
    {
      icon: Award,
      title: 'Padrão Líder',
      description: 'Rigor e metodologia em cada etapa do atendimento, garantindo proteção e excelência no resultado.',
      highlight: 'Critério Exigente',
    },
    {
      icon: Leaf,
      title: 'Abordagem Sustentável',
      description: 'Compromisso com o consumo consciente de água e utilização de insumos adequados para menor impacto ambiental.',
      highlight: 'Sustentabilidade',
    },
    {
      icon: Sparkles,
      title: 'Estética Automotiva de Precisão',
      description: 'Técnicas de polimento, descontaminação e higienização voltadas para a valorização patrimonial do veículo.',
      highlight: 'Cuidado ao Detalhe',
    },
    {
      icon: ShieldCheck,
      title: 'Compromisso com a Qualidade',
      description: 'Respeito irrestrito ao seu veículo com processos limpos, organizados e transparentes.',
      highlight: 'Confiança',
    },
  ];

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-[#0D0E12] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#DC2626] font-bold">
            Diferenciais de Mercado
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight mt-2">
            Por que escolher a Lava Car Líder?
          </h2>
          <p className="text-zinc-400 text-base mt-3">
            Pilares construídos em mais de três décadas de dedicação ao setor automotivo e de transporte.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#090A0C] border border-zinc-800 rounded-sm hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-sm text-[#DC2626]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-900 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                  <span className="text-[11px] uppercase tracking-widest text-zinc-400">
                    Padrão Líder Garantido
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Visual Feature Card for Trucks & Heavy Fleet */}
        <div className="mt-12 relative overflow-hidden rounded-sm border border-zinc-800 bg-[#090A0C]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 z-10">
              <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
                Especialidade Regional
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase tracking-tight mt-2 mb-4">
                Estrutura Completa para Caminhões e Veículos Pesados
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Sabemos da importância que um caminhão tem como ferramenta de trabalho e patrimônio. Oferecemos lavagem de chassi, tratamento de cabine, polimento e cuidados para quem roda estradas diariamente.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  Cavalos Mecânicos
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  Carretas e Baús
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  Pick-ups e Utilitários
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full min-h-[280px] relative">
              <img
                src={truckImage}
                alt="Detalhamento e estética de caminhão na Lava Car Líder"
                className="w-full h-full object-cover object-center filter contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#090A0C] via-transparent to-transparent" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
