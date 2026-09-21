import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/companyContent';

export type PageId = 'utama' | 'profil' | 'servis' | 'portfolio' | 'hubungi';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'utama', label: 'Utama' },
    { id: 'profil', label: 'Profil' },
    { id: 'servis', label: 'Servis' },
    { id: 'portfolio', label: 'Portfolio' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Salam SF Raudhah Global, saya ingin bertanyakan mengenai perkhidmatan kejuruteraan M&E / Ubah Suai."
    );
    window.open(`https://wa.me/${companyInfo.whatsappPrimary.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-header shadow-md border-b border-slate-200/80'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-200/60'
      }`}
    >
      {/* Top micro-bar for company and contact information */}
      <div className="bg-slate-900 text-slate-200 text-sm py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2 text-slate-200">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-white">100% Milik Bumiputera</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300 font-medium">No. Pendaftaran: {companyInfo.registrationNo}</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-sm">
            <a
              href="tel:+60166000127"
              className="flex items-center gap-1.5 text-white font-bold hover:text-cyan-300 transition-colors"
              title="Hubungi talian terus"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="tracking-wide">+60 16-600 0127</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Exact supplied brand logo in white panel with 320x56px centered overflow-hidden wrapper */}
        <div
          id="brand-logo-panel"
          onClick={() => handleNavClick('utama')}
          className="cursor-pointer bg-white rounded-lg px-2 py-1 border border-slate-200/90 shadow-xs hover:border-blue-400 transition-colors shrink-0"
          title="SF Raudhah Global - Laman Utama"
        >
          {/* Centered overflow-hidden CSS wrapper: image width 320px, wrapper about 320x56px, adjusting responsively */}
          <div className="w-[200px] xs:w-[260px] sm:w-[320px] h-[48px] sm:h-[58px] overflow-hidden flex items-center justify-center relative bg-white">
            <img
              src="/assets/brand/sf-raudhah-logo-horizontal.png"
              alt="SF Raudhah Global"
              className="w-full h-full object-contain select-none"
              style={{ display: 'block' }}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.tried) {
                  target.dataset.tried = 'true';
                  target.src = '/assets/brand/sf-raudhah-logo-horizontal.png';
                }
              }}
            />
          </div>
        </div>

        {/* Desktop Navigation Links: ONLY Utama / Profil / Servis / Portfolio */}
        <nav className="hidden xl:flex items-center gap-2" aria-label="Navigasi Utama">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-xl text-lg font-bold transition-all duration-200 relative ${
                  isActive
                    ? 'text-blue-700 bg-blue-50/90 font-extrabold shadow-2xs'
                    : 'text-slate-800 hover:text-blue-700 hover:bg-slate-100/80'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* WhatsApp CTA button on desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="header-hubungi-btn"
            onClick={() => handleNavClick('hubungi')}
            className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2.5 text-base font-bold text-slate-800 hover:text-blue-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <span>Hubungi Pejabat</span>
          </button>
          <button
            id="header-whatsapp-cta"
            onClick={openWhatsApp}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-base font-bold rounded-xl shadow-sm hover:shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <MessageCircle className="w-5 h-5 text-white fill-white/20" />
            <span className="whitespace-nowrap">WhatsApp Kami</span>
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Buka Menu Navigasi"
          className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-5 space-y-4 animate-fadeIn"
        >
          <div className="flex flex-col space-y-1 pb-3 border-b border-slate-100">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-xl font-bold transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('hubungi')}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-xl font-bold transition-colors ${
                currentPage === 'hubungi'
                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm text-lg"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              <span>WhatsApp Kami (+60 16-600 0127)</span>
            </button>
            <div className="text-center text-sm text-slate-600 pt-1 font-medium">
              Pejabat: 03-3396 4016 • Puncak Bestari, Bandar Puncak Alam
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
