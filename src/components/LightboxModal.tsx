import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageMapItem, categoryLabels, orderGalleryImages } from '../data/imageMap';

interface LightboxModalProps {
  images: ImageMapItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images, currentIndex, onClose, onSelectIndex
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const selected = currentIndex === null ? undefined : images[currentIndex];
  // Legacy consumers may still open a duplicate record; show its original instead.
  const currentImage = selected?.duplicate_of
    ? images.find((image) => image.file === selected.duplicate_of) || selected
    : selected;
  const isOpen = !!currentImage;
  const gallery = orderGalleryImages(images);
  const position = gallery.findIndex((image) => image.file === currentImage?.file);
  const navigate = (step: number) => {
    if (!gallery.length) return;
    const next = gallery[(position + step + gallery.length) % gallery.length];
    onSelectIndex(images.findIndex((image) => image.file === next.file));
  };

  // This lifecycle deliberately depends only on open/closed state: changing photos
  // must not reset focus or replace the original trigger saved for restoration.
  useEffect(() => {
    if (!isOpen) return;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const containFocus = (event: FocusEvent) => {
      if (event.target instanceof Node && !dialogRef.current?.contains(event.target)) {
        closeRef.current?.focus();
      }
    };
    document.addEventListener('focusin', containFocus);
    return () => {
      document.removeEventListener('focusin', containFocus);
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected) trigger.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        navigate(event.key === 'ArrowRight' ? 1 : -1);
      } else if (event.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), [tabindex="0"]'
        );
        if (!controls?.length) { event.preventDefault(); return; }
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  if (!currentImage) return null;

  const controlClass = 'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-white hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:opacity-40';

  return (
    <div
      id="project-lightbox-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-2 sm:p-6"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-lightbox-title"
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-5xl h-[94dvh] flex flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-800 px-3 py-2 sm:px-6 sm:py-3 text-white">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="font-bold text-blue-200">{categoryLabels[currentImage.category]}</span>
            <span className="text-slate-300">Foto {position + 1} daripada {gallery.length}</span>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} className={controlClass} aria-label="Tutup paparan foto">
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Explicit flex stage and absolute image prevent intrinsic portrait dimensions
            from overflowing the available viewport, including mobile browser chrome. */}
        <div className="relative flex-1 min-h-0 bg-black/40">
          <img
            src={`/${currentImage.file}`}
            alt={currentImage.alt_ms}
            className="absolute inset-0 h-full w-full object-contain p-2 sm:p-4"
          />
        </div>

        <div className="shrink-0 max-h-[40dvh] overflow-y-auto border-t border-slate-800 px-4 py-3 sm:px-6 text-slate-200">
          <div aria-live="polite" aria-atomic="true">
            <h2 id="project-lightbox-title" className="text-base sm:text-xl font-bold leading-snug text-white">
              {currentImage.featuredTitle || currentImage.alt_ms}
            </h2>
            <p className="mt-1 text-sm sm:text-base leading-relaxed text-slate-300">{currentImage.alt_ms}</p>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-slate-400">Muka surat profil {currentImage.page}<span className="hidden sm:inline"> · Gunakan kekunci ← → untuk foto, Esc untuk tutup</span></p>
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={() => navigate(-1)} disabled={gallery.length < 2} className={controlClass} aria-label="Foto sebelumnya">
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => navigate(1)} disabled={gallery.length < 2} className={controlClass} aria-label="Foto seterusnya">
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
