import React, { useState } from 'react';
import { 
  Sparkles, 
  Shield, 
  Truck, 
  Droplets, 
  Disc, 
  Car, 
  ArrowUpRight,
  Info
} from 'lucide-react';
import { ServiceItem } from '../types';
import { buildWhatsAppUrl } from '../config/company';

/**
 * =========================================================================
 * LISTA DE SERVIÇOS - LAVA CAR LÍDER
 * =========================================================================
 * NOTA PARA PUBLICAÇÃO / CLIENTE:
 * Os serviços abaixo são SUGESTÕES ESTRUTURADAS com base no segmento de
 * estética automotiva (carros e caminhões) para visualização do layout.
 * Podem ser facilmente alterados, removidos ou complementados com os nomes
 * e descrições oficiais fornecidos pela empresa.
 * =========================================================================
 */
export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: 'lavagem-detalhada',
    title: 'Lavagem Detalhada & Chassi', // [Nome do Serviço]
    shortDescription: 'Limpeza minuciosa com descontaminação e cuidado com o uso sustentável de insumos.', // [Breve descrição]
    category: 'geral',
    iconName: 'droplets',
    isPlaceholderSuggestion: true,
  },
  {
    id: 'polimento-tecnico',
    title: 'Polimento Técnico & Correção', // [Nome do Serviço]
    shortDescription: 'Eliminação de micro-riscos, restauração de brilho e correção do verniz original.', // [Breve descrição]
    category: 'detalhamento',
    iconName: 'disc',
    isPlaceholderSuggestion: true,
  },
  {
    id: 'estetica-caminhoes',
    title: 'Estética para Caminhões', // [Nome do Serviço]
    shortDescription: 'Cuidado especializado para cavalos mecânicos e frotas: cabine, chassis, rodas e tanques.', // [Breve descrição]
    category: 'caminhoes',
    iconName: 'truck',
    isPlaceholderSuggestion: true,
  },
  {
    id: 'higienizacao-interna',
    title: 'Higienização Interna Completa', // [Nome do Serviço]
    shortDescription: 'Limpeza profunda de estofados, carpetes, teto, painel e higienização do sistema de ar.', // [Breve descrição]
    category: 'carros',
    iconName: 'car',
    isPlaceholderSuggestion: true,
  },
  {
    id: 'protecao-pintura',
    title: 'Proteção & Selamento de Pintura', // [Nome do Serviço]
    shortDescription: 'Aplicação de selantes e vitrificadores para proteção contra intempéries e raios UV.', // [Breve descrição]
    category: 'detalhamento',
    iconName: 'shield',
    isPlaceholderSuggestion: true,
  },
  {
    id: 'revitalizacao-plasticos',
    title: 'Revitalização de Faróis & Plásticos', // [Nome do Serviço]
    shortDescription: 'Recuperação óptica dos faróis e condicionamento duradouro de acabamentos externos.', // [Breve descrição]
    category: 'detalhamento',
    iconName: 'sparkles',
    isPlaceholderSuggestion: true,
  },
];

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'carros' | 'caminhoes' | 'detalhamento'>('todos');

  const filteredServices = selectedCategory === 'todos'
    ? SERVICES_CATALOG
    : SERVICES_CATALOG.filter(s => s.category === selectedCategory || s.category === 'geral');

  const renderIcon = (iconName: ServiceItem['iconName']) => {
    const props = { className: "w-6 h-6 text-[#DC2626]" };
    switch (iconName) {
      case 'droplets': return <Droplets {...props} />;
      case 'disc': return <Disc {...props} />;
      case 'truck': return <Truck {...props} />;
      case 'car': return <Car {...props} />;
      case 'shield': return <Shield {...props} />;
      case 'sparkles': return <Sparkles {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#090A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#DC2626] font-bold">
              Cuidados Especializados
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight mt-2">
              Serviços
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Processos estruturados para a conservação e valorização de veículos leves e pesados.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-sm overflow-x-auto max-w-full">
            {[
              { id: 'todos', label: 'Todos os Serviços' },
              { id: 'carros', label: 'Carros' },
              { id: 'caminhoes', label: 'Caminhões' },
              { id: 'detalhamento', label: 'Detalhamento' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? 'bg-[#DC2626] text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative p-7 bg-[#0F1015] border border-zinc-800/90 hover:border-zinc-700 rounded-sm transition-all duration-200 flex flex-col justify-between hover:bg-[#12131A]"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-sm group-hover:border-zinc-700 transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-mono">
                    Padrão Líder
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight mb-2.5 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-zinc-850 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectService) {
                      onSelectService(service.title);
                    } else {
                      window.open(
                        buildWhatsAppUrl(`Olá! Gostaria de um orçamento para o serviço: ${service.title}`),
                        '_blank'
                      );
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#DC2626]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note regarding customizable services */}
        <div className="mt-10 p-4 bg-zinc-950/80 border border-zinc-850 rounded-sm flex items-start gap-3 text-xs text-zinc-400">
          <Info className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-zinc-300">Catálogo Personalizado:</strong> Dispomos de pacotes sob medida para veículos de passeio, frotas comerciais e caminhões. Entre em contato pelo WhatsApp para consultar a disponibilidade do serviço desejado.
          </p>
        </div>

      </div>
    </section>
  );
};
