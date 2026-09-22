import React, { useState } from 'react';
import {
  Search,
  Image as ImageIcon,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Layers,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { imageMapData, galleryImages, categoryLabels } from '../data/imageMap';

interface PortfolioPageProps {
  onOpenLightboxByIndex: (index: number) => void;
  onOpenWhatsAppQuote: (service?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onOpenLightboxByIndex,
  onOpenWhatsAppQuote
}) => {
  const [activeMainTab, setActiveMainTab] = useState<'gallery' | 'projects'>('gallery');
  
  // Gallery states
  const [galleryCategory, setGalleryCategory] = useState<string>('semua');
  const [gallerySearch, setGallerySearch] = useState<string>('');

  // Projects table states
  const [projectStatus, setProjectStatus] = useState<string>('semua');
  const [projectLocation, setProjectLocation] = useState<string>('semua');
  const [projectSearch, setProjectSearch] = useState<string>('');
  const [displayCount, setDisplayCount] = useState<number>(15);

  // Filtered gallery items
  const filteredGallery = galleryImages.filter((item) => {
    const matchesCategory =
      galleryCategory === 'semua' || item.category === galleryCategory;
    const matchesSearch =
      categoryLabels[item.category].toLowerCase().includes(gallerySearch.trim().toLowerCase()) ||
      item.alt_ms.toLowerCase().includes(gallerySearch.trim().toLowerCase()) ||
      (item.featuredTitle &&
        item.featuredTitle.toLowerCase().includes(gallerySearch.trim().toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Filtered projects
  const filteredProjects = projectsData.filter((p) => {
    const matchesStatus =
      projectStatus === 'semua' ||
      (projectStatus === 'selesai' && p.status_as_printed === 'Selesai') ||
      (projectStatus === 'pelaksanaan' && p.status_as_printed === 'Sedang Dilaksanakan');

    const matchesLocation =
      projectLocation === 'semua' ||
      p.location_as_printed.toLowerCase().includes(projectLocation.toLowerCase());

    const matchesSearch =
      p.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
      p.location_as_printed.toLowerCase().includes(projectSearch.toLowerCase());

    return matchesStatus && matchesLocation && matchesSearch;
  });

  const getCategoryBadgeColor = (cat: string) => {
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
    <div id="portfolio-page" className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      
      {/* 1. HERO HEADER */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4 text-left">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3.5 py-1.5 rounded-full border border-cyan-800">
            Bukti Rekod & Galeri Tapak
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Portfolio {projectsData.length} Projek & {galleryImages.length} Foto Tapak
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-normal">
            Semua rekod pelaksanaan projek rasmi syarikat bermula daripada projek berskala infrastruktur rel nasional, hab kargo lapangan terbang, hingga fasiliti komersial dan industri.
          </p>
        </div>
      </section>

      {/* 2. MAIN SECTION SWITCHER TABS */}
      <section className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-2.5 bg-slate-100 p-2 rounded-2xl border border-slate-200 w-full sm:w-auto">
          <button
            onClick={() => setActiveMainTab('gallery')}
            aria-pressed={activeMainTab === 'gallery'}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-base sm:text-lg transition-all ${
              activeMainTab === 'gallery'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-800 hover:text-slate-950 hover:bg-white'
            }`}
          >
            <ImageIcon className="w-5 h-5" />
            <span>Galeri Foto Tapak ({galleryImages.length})</span>
          </button>
          <button
            onClick={() => setActiveMainTab('projects')}
            aria-pressed={activeMainTab === 'projects'}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-base sm:text-lg transition-all ${
              activeMainTab === 'projects'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-800 hover:text-slate-950 hover:bg-white'
            }`}
          >
            <Layers className="w-5 h-5" />
            <span>Senarai Penuh {projectsData.length} Projek</span>
          </button>
        </div>

        <div role="status" aria-live="polite" className="text-sm sm:text-base text-slate-700 font-bold">
          {activeMainTab === 'gallery'
            ? `Menampilkan ${filteredGallery.length} daripada ${galleryImages.length} foto rekod`
            : `Menampilkan ${filteredProjects.length} daripada ${projectsData.length} rekod kontrak`}
        </div>
      </section>

      {/* 3. VIEW A: GALERI FOTO PROJEK */}
      {activeMainTab === 'gallery' && (
        <section id="gallery-view" className="space-y-8">
          
          {/* Gallery Filter & Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {[
                { id: 'semua', label: 'Semua Kategori' },
                ...Object.entries(categoryLabels)
                  .filter(([id]) => galleryImages.some((item) => item.category === id))
                  .map(([id, label]) => ({ id, label }))
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setGalleryCategory(cat.id)}
                  aria-pressed={galleryCategory === cat.id}
                  className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-colors ${
                    galleryCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-800 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat.label} ({cat.id === 'semua' ? galleryImages.length : galleryImages.filter((item) => item.category === cat.id).length})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80 md:shrink-0">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                aria-label="Cari foto tapak"
                placeholder="Cari foto: kabel, paip, suis…"
                value={gallerySearch}
                onChange={(e) => setGallerySearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
          </div>

          {(gallerySearch || galleryCategory !== 'semua') && (
            <button
              type="button"
              onClick={() => { setGallerySearch(''); setGalleryCategory('semua'); }}
              className="min-h-11 px-4 rounded-xl text-blue-700 font-bold hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Set semula carian & kategori
            </button>
          )}
          <p className="text-slate-600 text-base leading-relaxed">
            Dari pencahayaan seni bina hingga kerja di tapak industri. Pilih foto untuk melihat paparan penuh dan keterangannya.
          </p>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredGallery.map((item) => {
              // find absolute index in imageMapData for lightbox
              const originalIndex = imageMapData.findIndex((img) => img.file === item.file);
              return (
                <button
                  type="button"
                  aria-label={`Buka foto: ${item.featuredTitle || item.alt_ms}`}
                  aria-haspopup="dialog"
                  key={item.file}
                  onClick={() => onOpenLightboxByIndex(originalIndex >= 0 ? originalIndex : 0)}
                  className="group glass-card rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  {/* Image container */}
                  <div className="relative h-60 sm:h-64 w-full bg-slate-950 overflow-hidden">
                    <img
                      src={`/${item.file}`}
                      alt={item.alt_ms}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Category pill */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${getCategoryBadgeColor(
                          item.category
                        )}`}
                      >
                        {categoryLabels[item.category]}
                      </span>
                    </div>

                    {/* Magnify hover hint */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity p-2 bg-slate-900/80 rounded-lg text-white">
                      <Maximize2 className="w-5 h-5" />
                    </div>


                  </div>

                  {/* Caption & Metadata */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3 text-left">
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                        {item.featuredTitle || item.alt_ms}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-700 mt-1.5 leading-relaxed font-medium">
                        {item.alt_ms}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-500">
                      <span className="text-blue-700 font-bold group-hover:underline inline-flex items-center gap-1.5">
                        <span>Buka Paparan Penuh</span>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                      <span className="font-mono">{item.dimensions.width}×{item.dimensions.height}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <p className="text-slate-700 text-base font-semibold">Tiada imej sepadan dengan carian anda.</p>
              <button
                onClick={() => {
                  setGalleryCategory('semua');
                  setGallerySearch('');
                }}
                className="text-sm text-blue-600 font-extrabold hover:underline"
              >
                Set semula penapis
              </button>
            </div>
          )}
        </section>
      )}

      {/* 4. VIEW B: SENARAI LENGKAP PROJEK */}
      {activeMainTab === 'projects' && (
        <section id="projects-table-view" className="space-y-6">
          
          {/* Controls Bar: Status, Location & Search */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
            {/* Status Filter */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase text-slate-700 mb-1.5">
                Status Projek
              </label>
              <select
                value={projectStatus}
                onChange={(e) => setProjectStatus(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              >
                <option value="semua">Semua Status (54)</option>
                <option value="selesai">Selesai (52)</option>
                <option value="pelaksanaan">Sedang Dilaksanakan (2)</option>
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase text-slate-700 mb-1.5">
                Lokasi / Negeri
              </label>
              <select
                value={projectLocation}
                onChange={(e) => setProjectLocation(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              >
                <option value="semua">Semua Lokasi</option>
                <option value="selangor">Selangor</option>
                <option value="kuala lumpur">Kuala Lumpur / WP</option>
                <option value="pahang">Pahang</option>
                <option value="johor">Johor</option>
                <option value="kedah">Kedah</option>
                <option value="negeri sembilan">Negeri Sembilan</option>
              </select>
            </div>

            {/* Keyword Search */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase text-slate-700 mb-1.5">
                Carian Pantas
              </label>
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari tajuk projek, klien..."
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                  className="w-full pl-11 pr-3.5 py-3 rounded-xl border border-slate-300 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
              </div>
            </div>
          </div>

          {/* Projects Cards List */}
          <div className="space-y-4">
            {filteredProjects.slice(0, displayCount).map((p) => {
              const isCompleted = p.status_as_printed === 'Selesai';
              return (
                <div
                  key={p.id}
                  className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
                >
                  {/* Left info */}
                  <div className="space-y-2 flex-1 pr-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-mono font-extrabold text-sm flex items-center justify-center shrink-0 border border-blue-100">
                        #{p.id}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-extrabold ${
                          isCompleted
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Clock className="w-4 h-4 text-amber-600" />
                        )}
                        <span>{p.status_as_printed}</span>
                      </span>
                      <span className="text-sm text-slate-600 font-semibold flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-500" />
                        {p.location_as_printed}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg lg:text-xl leading-snug">
                      {p.title}
                    </h3>
                  </div>

                  {/* Right metadata / action */}
                  <div className="flex items-center justify-between md:flex-col md:items-end gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="text-sm text-slate-600 font-mono font-bold flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>{p.completion_as_printed}</span>
                    </div>
                    <button
                      onClick={() => onOpenWhatsAppQuote()}
                      className="text-sm sm:text-base font-extrabold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                    >
                      <span>Pertanyaan Projek</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load more / Pagination button */}
          {filteredProjects.length > displayCount && (
            <div className="text-center pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setDisplayCount((prev) => prev + 15)}
                className="px-6 py-3.5 bg-white hover:bg-slate-100 border border-slate-300 font-bold text-slate-800 text-sm sm:text-base rounded-xl shadow-xs transition-colors"
              >
                Papar 15 Lagi Projek (Tinggal {filteredProjects.length - displayCount})
              </button>
              <button
                onClick={() => setDisplayCount(filteredProjects.length)}
                className="px-5 py-3.5 text-sm sm:text-base text-blue-700 font-extrabold hover:underline"
              >
                Papar Semua Sekaligus
              </button>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <p className="text-slate-700 text-base font-semibold">Tiada projek sepadan dengan kriteria tapisan anda.</p>
              <button
                onClick={() => {
                  setProjectStatus('semua');
                  setProjectLocation('semua');
                  setProjectSearch('');
                }}
                className="text-sm text-blue-600 font-extrabold hover:underline"
              >
                Set semula penapis carian
              </button>
            </div>
          )}
        </section>
      )}

      {/* 5. CTA BOTTOM */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-extrabold text-xl sm:text-2xl text-white">
            Perlukan Senarai Profil Lengkap Dalam Format Dokumen?
          </h3>
          <p className="text-slate-200 text-base sm:text-lg font-normal">
            Pasukan kami boleh membekalkan dokumentasi syarikat bagi urusan pra-kelayakan atau tender vendor anda.
          </p>
        </div>
        <button
          onClick={() => onOpenWhatsAppQuote()}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base rounded-xl transition-all shrink-0"
        >
          <span>Mohon Dokumen Vendor</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

    </div>
  );
};
