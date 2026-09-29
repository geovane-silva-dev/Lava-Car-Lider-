import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

import imgCarDetailing from '../assets/images/hero_car_detailing_1790713345452.jpg';
import imgPolishing from '../assets/images/about_detailing_craft_1790713362045.jpg';
import imgTruck from '../assets/images/truck_detailing_lider_1790713375941.jpg';
import imgInterior from '../assets/images/interior_detailing_craft_1790713386307.jpg';
import imgFoamWash from '../assets/images/gallery_foam_wash_1790713503726.jpg';
import imgWheel from '../assets/images/gallery_wheel_detailing_1790713518287.jpg';

/**
 * =========================================================================
 * GALERIA DE TRABALHOS - LAVA CAR LÍDER
 * =========================================================================
 * NOTA PARA O CLIENTE / DESENVOLVEDOR:
 * As fotos abaixo representam a curadoria de padrões estéticos de referência
 * (Carros, Caminhões, Polimento, Espuma, Rodas e Interior).
 * Para substituir pelas fotos reais tiradas no pátio ou oficina da Lava Car Líder,
 * basta atualizar as propriedades `imageSrc` de cada item abaixo.
 * =========================================================================
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'galeria-1',
    title: 'Acabamento Espelhado e Correção de Verniz',
    category: 'carros',
    categoryLabel: 'Carros · Polimento Técnico',
    imageSrc: imgCarDetailing,
    altText: 'Acabamento espelhado e vitrificação de carro premium na Lava Car Líder',
    description: 'Reflexo de alta definição e remoção de marcas holográficas em pintura automotiva.',
  },
  {
    id: 'galeria-2',
    title: 'Estética Pesada e Lavagem de Caminhão',
    category: 'caminhoes',
    categoryLabel: 'Caminhões · Linha Pesada',
    imageSrc: imgTruck,
    altText: 'Caminhão com cabine e acabamento polido na Lava Car Líder',
    description: 'Tratamento de grade cromada, cabine, tanques e vidros para veículos de carga.',
  },
  {
    id: 'galeria-3',
    title: 'Processo de Polimento com Máquina Rotativa',
    category: 'detalhamento',
    categoryLabel: 'Detalhamento · Artesanal',
    imageSrc: imgPolishing,
    altText: 'Profissional executando corte e refino com politriz automotiva',
    description: 'Controle de temperatura e compostos abrasivos de alta performance.',
  },
  {
    id: 'galeria-4',
    title: 'Pré-Lavagem com Snow Foam Ativo',
    category: 'carros',
    categoryLabel: 'Lavagem · Sustentável',
    imageSrc: imgFoamWash,
    altText: 'Aplicação de espuma ativa densa para desprendimento de sujidade',
    description: 'Elimina partículas de sujeira sem atrito para preservar a pintura contra riscos.',
  },
  {
    id: 'galeria-5',
    title: 'Higienização e Cuidado com Couro',
    category: 'detalhamento',
    categoryLabel: 'Interior · Cabine',
    imageSrc: imgInterior,
    altText: 'Detalhamento de bancos de couro e painel automotivo',
    description: 'Limpeza profunda, hidratação de couro e acabamento acetinado sem resíduos oleosos.',
  },
  {
    id: 'galeria-6',
    title: 'Descontaminação e Proteção de Rodas',
    category: 'carros',
    categoryLabel: 'Rodas & Acabamento',
    imageSrc: imgWheel,
    altText: 'Limpeza técnica de roda de liga leve e pinça de freio',
    description: 'Remoção de fuligem de freio, condicionamento de pneus e selamento cerâmico.',
  },
];

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'carros' | 'caminhoes' | 'detalhamento'>('todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#090A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#DC2626] font-bold">
              Portfólio & Resultados
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight mt-2">
              Nosso trabalho fala por si
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              Registros visuais do padrão de acabamento entregue em cada veículo.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-sm">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'carros', label: 'Carros' },
              { id: 'caminhoes', label: 'Caminhões' },
              { id: 'detalhamento', label: 'Detalhamento' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#DC2626] text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            // First item or heavy truck can span 2 cols on certain breakpoints if wanted
            const isFeatured = index === 0;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950 cursor-pointer ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 h-[380px] sm:h-[440px]' : 'h-[320px] sm:h-[360px]'
                }`}
              >
                {/* Image */}
                <img
                  src={item.imageSrc}
                  alt={item.altText}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-95 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#DC2626]">
                      {item.categoryLabel}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-zinc-700/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice for photo replacement */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <Camera className="w-3.5 h-3.5 text-zinc-400" />
          <span>Galeria preparada para receber atualizações contínuas de fotos dos serviços executados.</span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 p-2.5 bg-zinc-900/80 hover:bg-zinc-800 text-white rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            aria-label="Fechar ampliação"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 z-20 p-3 bg-zinc-900/80 hover:bg-zinc-800 text-white rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Lightbox Main Content Container */}
          <div
            className="max-w-5xl w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-auto overflow-hidden rounded border border-zinc-800 bg-zinc-950">
              <img
                src={filteredItems[lightboxIndex].imageSrc}
                alt={filteredItems[lightboxIndex].altText}
                className="max-h-[75vh] max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption bar */}
            <div className="w-full mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
                {filteredItems[lightboxIndex].categoryLabel}
              </span>
              <h3 className="text-xl font-bold font-display text-white mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-zinc-300 mt-1 max-w-xl mx-auto">
                {filteredItems[lightboxIndex].description}
              </p>
              <div className="text-xs text-zinc-400 mt-2 font-mono">
                {lightboxIndex + 1} de {filteredItems.length}
              </div>
            </div>
          </div>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 z-20 p-3 bg-zinc-900/80 hover:bg-zinc-800 text-white rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
