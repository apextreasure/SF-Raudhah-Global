import React, { useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { LightboxModal } from './components/LightboxModal';
import { WhatsAppQuoteModal } from './components/WhatsAppQuoteModal';
import { imageMapData } from './data/imageMap';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('utama');
  
  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // WhatsApp Quote Modal state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteDefaultService, setQuoteDefaultService] = useState<string>('elektrikal');

  // Sync with URL hash for browser back/forward and direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['utama', 'profil', 'servis', 'portfolio', 'hubungi'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightboxByIndex = (index: number) => {
    if (index >= 0 && index < imageMapData.length) {
      setLightboxIndex(index);
    }
  };

  const handleOpenLightboxByFile = (filePath: string) => {
    // Normalise leading slash
    const cleanPath = filePath.replace(/^\//, '');
    const index = imageMapData.findIndex(
      (img) => img.file === cleanPath || img.file.includes(cleanPath)
    );
    if (index !== -1) {
      setLightboxIndex(index);
    } else {
      setLightboxIndex(0);
    }
  };

  const handleOpenWhatsAppQuote = (service?: string) => {
    if (service) {
      setQuoteDefaultService(service);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white antialiased">
      {/* 1. STICKY GLASS HEADER */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-grow">
        {currentPage === 'utama' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenWhatsAppQuote={handleOpenWhatsAppQuote}
            onOpenLightboxByFile={handleOpenLightboxByFile}
          />
        )}

        {currentPage === 'profil' && (
          <ProfilePage
            onOpenLightboxByFile={handleOpenLightboxByFile}
            onOpenWhatsAppQuote={() => handleOpenWhatsAppQuote()}
          />
        )}

        {currentPage === 'servis' && (
          <ServicesPage
            initialServiceId={quoteDefaultService}
            onOpenWhatsAppQuote={handleOpenWhatsAppQuote}
            onOpenLightboxByFile={handleOpenLightboxByFile}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onOpenLightboxByIndex={handleOpenLightboxByIndex}
            onOpenWhatsAppQuote={handleOpenWhatsAppQuote}
          />
        )}

        {currentPage === 'hubungi' && <ContactPage />}
      </main>

      {/* 3. FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* 4. MODALS & OVERLAYS */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={imageMapData}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onSelectIndex={(idx) => setLightboxIndex(idx)}
        />
      )}

      {quoteModalOpen && (
        <WhatsAppQuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultService={quoteDefaultService}
        />
      )}
    </div>
  );
}
