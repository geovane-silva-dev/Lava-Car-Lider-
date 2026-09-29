import React, { useState, useEffect } from 'react';
import { X, Send, Car, Truck, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG, buildWhatsAppUrl } from '../config/company';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [vehicleType, setVehicleType] = useState<'carro' | 'suv' | 'caminhao'>('carro');
  const [selectedService, setSelectedService] = useState(preselectedService || 'Lavagem Detalhada');
  const [vehicleModel, setVehicleModel] = useState('');
  const [clientName, setClientName] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const vehicleLabels: Record<string, string> = {
      carro: 'Carro de Passeio / Sedã / Hatch',
      suv: 'SUV / Caminhonete / Pick-up',
      caminhao: 'Caminhão / Cavalo Mecânico / Veículo Pesado',
    };

    let msg = `Olá! Gostaria de solicitar um orçamento na Lava Car Líder.`;
    if (clientName.trim()) {
      msg += `\n\nNome: ${clientName.trim()}`;
    }
    msg += `\nTipo de Veículo: ${vehicleLabels[vehicleType]}`;
    if (vehicleModel.trim()) {
      msg += `\nModelo/Ano: ${vehicleModel.trim()}`;
    }
    msg += `\nServiço de Interesse: ${selectedService}`;
    if (notes.trim()) {
      msg += `\nObservações: ${notes.trim()}`;
    }
    msg += `\n\nAguardo orientações sobre disponibilidade e valores.`;

    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0F1015] border border-zinc-800 rounded-sm shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          aria-label="Fechar modal de orçamento"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
            Simulação de Atendimento
          </span>
          <h3 className="text-2xl font-black font-display text-white uppercase tracking-tight mt-1">
            Solicitar Orçamento
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Selecione as opções do seu veículo para ser atendido diretamente no WhatsApp da Lava Car Líder.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Step 1: Vehicle Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              1. Tipo de Veículo
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setVehicleType('carro')}
                className={`flex flex-col items-center justify-center p-3 rounded-sm border text-xs font-semibold transition-colors ${
                  vehicleType === 'carro'
                    ? 'bg-zinc-800 border-[#DC2626] text-white'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-850'
                }`}
              >
                <Car className="w-5 h-5 mb-1 text-zinc-300" />
                <span>Carro</span>
              </button>

              <button
                type="button"
                onClick={() => setVehicleType('suv')}
                className={`flex flex-col items-center justify-center p-3 rounded-sm border text-xs font-semibold transition-colors ${
                  vehicleType === 'suv'
                    ? 'bg-zinc-800 border-[#DC2626] text-white'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-850'
                }`}
              >
                <Sparkles className="w-5 h-5 mb-1 text-zinc-300" />
                <span>SUV / Pick-up</span>
              </button>

              <button
                type="button"
                onClick={() => setVehicleType('caminhao')}
                className={`flex flex-col items-center justify-center p-3 rounded-sm border text-xs font-semibold transition-colors ${
                  vehicleType === 'caminhao'
                    ? 'bg-zinc-800 border-[#DC2626] text-white'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-850'
                }`}
              >
                <Truck className="w-5 h-5 mb-1 text-[#DC2626]" />
                <span>Caminhão</span>
              </button>
            </div>
          </div>

          {/* Step 2: Desired Service */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              2. Serviço Desejado
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-sm text-sm text-white focus:outline-none focus:border-[#DC2626]"
            >
              <option value="Lavagem Detalhada & Chassi">Lavagem Detalhada & Chassi</option>
              <option value="Polimento Técnico & Correção de Pintura">Polimento Técnico & Correção de Pintura</option>
              <option value="Estética para Caminhões / Linha Pesada">Estética para Caminhões / Linha Pesada</option>
              <option value="Higienização Interna Completa">Higienização Interna Completa</option>
              <option value="Proteção & Selamento de Pintura">Proteção & Selamento de Pintura</option>
              <option value="Revitalização de Faróis & Plásticos">Revitalização de Faróis & Plásticos</option>
              <option value="Avaliação Geral e Orçamento Customizado">Outro serviço / Avaliação no local</option>
            </select>
          </div>

          {/* Step 3: Vehicle Model & Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                Modelo do Veículo (opcional)
              </label>
              <input
                type="text"
                placeholder="Ex: Hilux 2022 ou Scania R450"
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-sm text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                Seu Nome (opcional)
              </label>
              <input
                type="text"
                placeholder="Ex: João Silva"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-sm text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
              />
            </div>
          </div>

          {/* Step 4: Notes */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
              Observações ou Detalhes adicionais (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Necessidade de remoção de riscos na porta, urgência para o fim de semana..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-sm text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 resize-none"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#DC2626] hover:bg-[#B91C1C] active:bg-[#991B1B] rounded-sm transition-colors shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Enviar e Conversar no WhatsApp</span>
            </button>
            <p className="text-[11px] text-zinc-400 text-center mt-2 font-mono">
              Destinatário: {COMPANY_CONFIG.whatsappFormatted}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
