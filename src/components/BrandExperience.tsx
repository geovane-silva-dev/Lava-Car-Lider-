import React from 'react';

export const BrandExperience: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#090A0C] border-y border-zinc-900 overflow-hidden">
      {/* Subtle background glow effect centered */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle decorative line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#DC2626]" />
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-bold">
            Tradição & Padrão Líder
          </span>
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#DC2626]" />
        </div>

        {/* Large Typographic Impact */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-zinc-500 font-display font-black text-2xl sm:text-3xl tracking-[0.4em] uppercase">
            DESDE
          </div>
          <div className="text-6xl sm:text-8xl md:text-9xl font-black font-display tracking-tight text-white uppercase select-none leading-none my-2 drop-shadow-2xl">
            1992
          </div>
        </div>

        <p className="mt-6 text-lg sm:text-2xl text-zinc-300 font-light max-w-2xl mx-auto tracking-wide">
          Experiência construída ao longo de décadas cuidando de veículos.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 text-xs sm:text-sm text-zinc-400 uppercase tracking-widest font-medium">
          <span>Estética Automotiva Sustentável</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>Marechal Mallet, Paraná</span>
        </div>

      </div>
    </section>
  );
};
