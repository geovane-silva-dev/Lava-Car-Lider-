import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BrandExperience } from './components/BrandExperience';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('');

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName || '');
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceForModal('');
  };

  return (
    <div className="min-h-screen bg-[#090A0C] text-zinc-100 flex flex-col font-sans selection:bg-[#DC2626] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 3. Sobre a Lava Car Líder */}
        <About onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 4. Pausa de Marca / Experiência (DESDE 1992) */}
        <BrandExperience />

        {/* 5. Serviços */}
        <Services onSelectService={(service) => handleOpenQuoteModal(service)} />

        {/* 6. Diferenciais */}
        <Differentials />

        {/* 7. Galeria */}
        <Gallery />

        {/* 8. Processo de Atendimento */}
        <Process onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 9. Depoimentos */}
        <Testimonials />

        {/* 10. CTA Final */}
        <CTASection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 11. Localização */}
        <Location />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* 14. Interactive Quote / Agendamento Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedService={selectedServiceForModal}
      />
    </div>
  );
}
