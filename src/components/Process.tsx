import React from 'react';
import { PhoneCall, CalendarCheck, Car, Sparkles, ArrowRight } from 'lucide-react';
import { ProcessStep } from '../types';

export const Process: React.FC<{ onOpenQuoteModal: () => void }> = ({ onOpenQuoteModal }) => {
  const steps: (ProcessStep & { icon: React.ComponentType<{ className?: string }> })[] = [
    {
      step: '01',
      title: 'Entre em Contato',
      description: 'Envie uma mensagem pelo WhatsApp informando o modelo do veículo e o cuidado pretendido.',
      icon: PhoneCall,
    },
    {
      step: '02',
      title: 'Escolha o Serviço',
      description: 'Orientamos sobre os procedimentos mais indicados para o estado da lataria, vidros ou interior.',
      icon: CalendarCheck,
    },
    {
      step: '03',
      title: 'Leve seu Veículo',
      description: 'Traga seu carro ou caminhão ao nosso endereço na Rua Santos Dumont, em Marechal Mallet.',
      icon: Car,
    },
    {
      step: '04',
      title: 'Receba seu Veículo Renovado',
      description: 'Retire seu veículo com acabamento impecável dentro do Padrão Líder de qualidade.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0D0E12] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#DC2626] font-bold">
            Passo a Passo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight mt-2">
            Como funciona
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Processo transparente, prático e sem complicações do primeiro contato até a entrega.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative p-7 bg-[#090A0C] border border-zinc-800 rounded-sm hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-display text-zinc-600">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-sm text-[#DC2626]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold font-display text-white uppercase tracking-tight mb-2.5">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400">
                  <span>Etapa {index + 1} de 4</span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-500 hidden lg:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 px-6 py-3 rounded-sm transition-colors"
          >
            <span>Iniciar Atendimento Agora</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#DC2626]" />
          </button>
        </div>

      </div>
    </section>
  );
};
