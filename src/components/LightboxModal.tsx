import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag, BookOpen } from 'lucide-react';
import { ImageMapItem } from '../data/imageMap';

interface LightboxModalProps {
  images: ImageMapItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onSelectIndex
}) => {
  const total = images.length;
  const isOpen = currentIndex !== null && !!images[currentIndex];

  // Keyboard navigation - hook called unconditionally at top of component
  useEffect(() => {
    if (!isOpen || currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % total);
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + total) % total);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, total, onClose, onSelectIndex]);

  if (!isOpen || currentIndex === null) {
    return null;
  }

  const currentImage = images[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + total) % total);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % total);
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'elektrikal':
        return 'bg-blue-600 text-white';
      case 'mekanikal':
        return 'bg-cyan-600 text-white';
      case 'awam':
        return 'bg-amber-600 text-white';
      case 'keselamatan':
        return 'bg-emerald-600 text-white';
      default:
        return 'bg-slate-700 text-white';
    }
  };

  return (
    <div
      id="project-lightbox-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Paparan Imej Projek Terperinci"
    >
      {/* Lightbox Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-slate-900/95 border-b border-slate-800 text-white">
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider ${getCategoryColor(
                currentImage.category
              )}`}
            >
              {currentImage.category}
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-mono">
              Foto {currentIndex + 1} daripada {total}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-300 bg-slate-800 px-2.5 py-1 rounded-lg">
              <BookOpen className="w-4 h-4" />
              Muka Surat Profil: {currentImage.page}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Tutup Paparan"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Image Stage */}
        <div className="relative flex-1 min-h-[300px] max-h-[68vh] sm:max-h-[72vh] flex items-center justify-center bg-black/40 overflow-hidden p-2 sm:p-4">
          <img
            src={`/${currentImage.file}`}
            alt={currentImage.alt_ms}
            referrerPolicy="no-referrer"
            className="max-h-full max-w-full object-contain rounded shadow-lg transition-all duration-300"
          />

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white backdrop-blur-sm border border-slate-700/60 shadow-lg transition-all focus:outline-none"
            aria-label="Imej Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white backdrop-blur-sm border border-slate-700/60 shadow-lg transition-all focus:outline-none"
            aria-label="Imej Seterusnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer Info Bar */}
        <div className="px-4 sm:px-6 py-4 bg-slate-900 border-t border-slate-800 text-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="font-bold text-base sm:text-lg text-white">
                {currentImage.featuredTitle || currentImage.alt_ms}
              </p>
              <p className="text-sm sm:text-base text-slate-300 mt-1">
                {currentImage.alt_ms}
              </p>
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-mono shrink-0">
              Dimensi Fail: {currentImage.dimensions.width} × {currentImage.dimensions.height}px
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
