import React from 'react';
import { Logo } from './Logo';
import { COMPANY_CONFIG } from '../config/company';
import { Instagram, MapPin, ArrowUp, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060709] border-t border-zinc-900 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-zinc-850">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Logo size="md" showSubtitle />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mt-3">
              Estética Automotiva Sustentável do Sul do Brasil. Cuidado técnico de alta precisão para carros e caminhões desde 1992.
            </p>
            <div className="text-xs font-mono text-zinc-400 pt-1">
              Fundação: <strong className="text-zinc-200">1992</strong> · Marechal Mallet - PR
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wide">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre a Empresa</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Galeria de Trabalhos</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato & Localização</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Localização & Endereço */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              Localização
            </h4>
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{COMPANY_CONFIG.address.street}</div>
                  <div className="text-zinc-400">{COMPANY_CONFIG.address.city} - {COMPANY_CONFIG.address.stateShort}</div>
                  <div className="text-zinc-400 font-mono">CEP {COMPANY_CONFIG.address.cep}</div>
                  <div className="text-zinc-400">{COMPANY_CONFIG.address.country}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contato & Redes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              Canais Oficiais
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={COMPANY_CONFIG.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#DC2626] group-hover:border-zinc-700">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Instagram</div>
                  <div className="text-zinc-400">{COMPANY_CONFIG.social.instagram.display}</div>
                </div>
              </a>

              <div className="flex items-center gap-2.5 text-zinc-300">
                <div className="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#DC2626]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">WhatsApp</div>
                  <div className="text-zinc-400 font-mono">{COMPANY_CONFIG.whatsappFormatted}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © 2026 Lava Car Líder. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Padrão Líder em Carros e Caminhões</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors focus-visible:outline-none"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
