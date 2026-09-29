import React from 'react';
import { Star, MessageSquareQuote, User } from 'lucide-react';
import { TestimonialItem } from '../types';

/**
 * =========================================================================
 * DEPOIMENTOS DE CLIENTES - LAVA CAR LÍDER
 * =========================================================================
 * REQUISITO MANDATÓRIO:
 * Não foram fornecidos depoimentos reais da empresa. Os cards abaixo
 * funcionam estritamente como placeholders estruturados no layout para
 * que os depoimentos e avaliações reais de clientes de Marechal Mallet
 * e região possam ser adicionados aqui posteriormente.
 * =========================================================================
 */
export const TESTIMONIAL_PLACEHOLDERS: TestimonialItem[] = [
  {
    id: 'depoimento-1',
    clientNamePlaceholder: '[Nome do Cliente]',
    vehicleType: 'Proprietário de Veículo de Passeio',
    quotePlaceholder: 'Depoimento real do cliente será inserido aqui após autorização.',
    rating: 5,
    datePlaceholder: '[Data da Avaliação]',
  },
  {
    id: 'depoimento-2',
    clientNamePlaceholder: '[Nome do Motorista / Transportador]',
    vehicleType: 'Proprietário de Caminhão / Frota',
    quotePlaceholder: 'Depoimento real do cliente será inserido aqui após autorização.',
    rating: 5,
    datePlaceholder: '[Data da Avaliação]',
  },
  {
    id: 'depoimento-3',
    clientNamePlaceholder: '[Nome do Cliente]',
    vehicleType: 'Serviço de Polimento e Proteção',
    quotePlaceholder: 'Depoimento real do cliente será inserido aqui após autorização.',
    rating: 5,
    datePlaceholder: '[Data da Avaliação]',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#090A0C] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#DC2626] font-bold">
            Avaliações & Reconhecimento
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight mt-2">
            Depoimentos
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            A satisfação e a confiança dos nossos clientes ao longo de mais de 30 anos.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIAL_PLACEHOLDERS.map((item) => (
            <div
              key={item.id}
              className="p-7 bg-[#0F1015] border border-zinc-800/80 rounded-sm flex flex-col justify-between"
            >
              <div>
                {/* Header of review: Stars & Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#DC2626]" aria-label={`${item.rating} de 5 estrelas`}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#DC2626]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-5 h-5 text-zinc-600" />
                </div>

                {/* Quote Text (Explicit Placeholder) */}
                <p className="text-zinc-300 text-sm sm:text-base italic leading-relaxed mb-6">
                  &ldquo;{item.quotePlaceholder}&rdquo;
                </p>
              </div>

              {/* Author Area */}
              <div className="pt-4 border-t border-zinc-850 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white tracking-wide">
                    {item.clientNamePlaceholder}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {item.vehicleType}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-8 text-center text-xs text-zinc-400">
          <span>* Espaço reservado para inserção de avaliações coletadas com clientes reais da Lava Car Líder.</span>
        </div>

      </div>
    </section>
  );
};
