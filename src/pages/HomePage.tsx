import React from 'react';
import { ProjectPhoto } from '../components/ProjectPhoto';
import { uniqueClients } from '../data/clients';
import { imageMapData, categoryLabels } from '../data/imageMap';
import {
  Zap,
  Wrench,
  Wifi,
  Hammer,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Layers,
  MapPin
} from 'lucide-react';
import { companyInfo, detailedServices, processSteps } from '../data/companyContent';
import { PageId } from '../components/Header';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsAppQuote: (service?: string) => void;
  onOpenLightboxByFile: (file: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenWhatsAppQuote,
  onOpenLightboxByFile
}) => {
  const serviceIcons = {
    elektrikal: Zap,
    mekanikal: Wrench,
    ict: Wifi,
    awam: Hammer
  };

  return (
    <div id="home-page" className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative overflow-hidden bg-slate-950 text-white pt-10 sm:pt-16 pb-20 sm:pb-28"
      >
        {/* Original warehouse photograph restored behind the ambient gradient. */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none" aria-hidden="true">
          <img
            data-hero-background
            src="/assets/projects/p33-04-warehouse-cable-tray.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Ambient gradients with royal blue, teal and cyan */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/80 z-0" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-7 text-left">
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base font-semibold">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/70 border border-blue-400/40 text-blue-200">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>100% Milik Bumiputera</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-200">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Beroperasi Sejak 2016</span>
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Bandar Puncak Alam, Selangor</span>
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Pakar Kejuruteraan <span className="text-blue-400">Elektrikal</span>,{' '}
                <span className="text-cyan-300">Mekanikal</span> &{' '}
                <span className="text-emerald-400">Ubah Suai</span> Bangunan
              </h1>

              {/* Tagline / Subtitle */}
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
                Menyediakan perkhidmatan kontraktor komprehensif bagi fasiliti komersial, kilang perindustrian, stesen rel serta infrastruktur awam. Kualiti kerja berkemahiran tinggi dengan pematuhan keselamatan (HSE) tanpa kompromi.
              </p>

              {/* Key Value Points */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2 text-sm sm:text-base text-slate-200 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>54+ Projek Siap</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{uniqueClients.length} Klien & Rakan Kerjasama</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Sebut Harga Telus</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  id="hero-whatsapp-btn"
                  onClick={() => onOpenWhatsAppQuote()}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-base sm:text-lg rounded-xl shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                  <span>Minta Sebut Harga Projek</span>
                </button>
                <button
                  id="hero-portfolio-btn"
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-base sm:text-lg rounded-xl border border-slate-700 transition-all hover:scale-[1.02]"
                >
                  <span>Lihat 54 Projek Kami</span>
                  <ArrowRight className="w-5 h-5 text-blue-400" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 min-w-0">
              <figure className="project-photo project-photo--hero" data-hero-illustration>
                <a
                  href="/assets/illustrations/warehouse-hero-1536.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-photo__open block"
                  aria-label="Lihat ilustrasi gudang penuh (tab baharu)"
                >
                  <img
                    src="/assets/illustrations/warehouse-hero-1536.webp"
                    srcSet="/assets/illustrations/warehouse-hero-768.webp 768w, /assets/illustrations/warehouse-hero-1536.webp 1536w"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    width={1536}
                    height={864}
                    fetchPriority="high"
                    decoding="async"
                    alt="Ilustrasi AI pemasangan dulang kabel dan kabel kuasa di gudang industri, dengan platform kerja hijau dan jentera angkat jingga."
                    className="project-photo__image"
                  />
                </a>
                <figcaption className="project-photo__caption">
                  <span className="project-photo__label">Pepasangan industri · Ilustrasi AI</span>
                  <p className="project-photo__title">Sistem Dulang Kabel & Laluan Kuasa Gudang Industri</p>
                  <span className="project-photo__hint">Visual konsep berasaskan foto tapak; bukan foto projek sebenar.</span>
                  <button
                    type="button"
                    onClick={() => onOpenLightboxByFile('assets/projects/p33-04-warehouse-cable-tray.jpg')}
                    className="mt-3 text-sm font-bold text-cyan-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                  >
                    Lihat foto tapak asal
                  </button>
                </figcaption>
              </figure>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm">
                <div className="bg-slate-900 p-4 rounded-xl border border-blue-900">
                  <span className="text-slate-300 block">Kategori Kerja</span>
                  <span className="text-white font-bold">M&E, ELV & Sivil</span>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-blue-900">
                  <span className="text-slate-300 block">Kawasan Operasi</span>
                  <span className="text-cyan-300 font-bold">Seluruh Semenanjung</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS & KEY METRICS (High Contrast & Clear) */}
      <section id="metrics-strip" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card p-6 sm:p-7 rounded-2xl text-center border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
            <div className="text-4xl sm:text-5xl font-black text-blue-700">54+</div>
            <div className="text-base sm:text-lg font-extrabold text-slate-900 mt-1.5">Projek Terlaksana</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1">Komersial, industri & awam</div>
          </div>
          <div className="glass-card p-6 sm:p-7 rounded-2xl text-center border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
            <div className="text-4xl sm:text-5xl font-black text-teal-700">{uniqueClients.length}</div>
            <div className="text-base sm:text-lg font-extrabold text-slate-900 mt-1.5">Klien & Rakan Kerjasama</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1">Merentas pelbagai sektor</div>
          </div>
          <div className="glass-card p-6 sm:p-7 rounded-2xl text-center border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
            <div className="text-4xl sm:text-5xl font-black text-emerald-700">100%</div>
            <div className="text-base sm:text-lg font-extrabold text-slate-900 mt-1.5">Milik Bumiputera</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1">Berdaftar SSM & berkelayakan</div>
          </div>
          <div className="glass-card p-6 sm:p-7 rounded-2xl text-center border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
            <div className="text-4xl sm:text-5xl font-black text-indigo-700">8+</div>
            <div className="text-base sm:text-lg font-extrabold text-slate-900 mt-1.5">Tahun Pengalaman</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1">Bermula 2016 hingga kini</div>
          </div>
        </div>
      </section>

      {/* 3. EMPAT TERAS PERKHIDMATAN (Services Pillars) - Specifically enlarged for older users */}
      <section id="services-summary-section" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            Skop Keupayaan Kejuruteraan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Empat Teras Perkhidmatan Utama
          </h2>
          <p className="text-slate-700 text-base sm:text-xl leading-relaxed">
            Menghubungkan kepakaran teknikal dengan peralatan canggih bagi memastikan setiap pepasangan berfungsi pada tahap kecekapan maksimum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {detailedServices.map((svc) => {
            const Icon = serviceIcons[svc.id as keyof typeof serviceIcons] || Zap;
            return (
              <div
                key={svc.id}
                id={`service-card-${svc.id}`}
                className="group glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Service Icon Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {svc.title}
                  </h3>

                  {/* Card Description - Enlarged, high contrast, no cutoff */}
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    {svc.shortDesc}
                  </p>

                  {/* Bullet points - Clearly readable, full text without truncation */}
                  <ul className="space-y-2.5 pt-3.5 border-t border-slate-200 text-sm sm:text-base text-slate-800 font-medium">
                    {svc.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-snug">
                        <span className="text-blue-600 font-black text-lg leading-none mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-5 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('servis')}
                    className="text-base sm:text-lg font-extrabold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all py-1"
                  >
                    <span>Ketahui Lanjut</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onOpenWhatsAppQuote(svc.id)}
                    className="p-2 sm:p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                    title={`Minta Sebut Harga untuk ${svc.title}`}
                    aria-label={`WhatsApp sebut harga ${svc.title}`}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. PROJEK BERIMPAK TINGGI / FEATURED WORK */}
      <section id="featured-work-section" className="bg-slate-900 text-white py-16 sm:py-20 rounded-3xl mx-4 sm:mx-8 px-6 sm:px-12 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3.5 py-1.5 rounded-full border border-cyan-800">
                Galeri Kerja
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
                Sorotan Kerja Kami
              </h2>
              <p className="text-slate-300 text-base sm:text-xl mt-2 max-w-2xl font-normal">
                Pencahayaan seni bina, pemasangan penyaman udara dan kerja fabrikasi logam di tapak.
              </p>
            </div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg rounded-xl transition-colors shrink-0"
            >
              <span>Semua 54 Projek</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {['p35-02-architectural-lighting.jpg', 'p33-02-outdoor-air-conditioning.jpg', 'p33-01-metal-fabrication.jpg'].map(file => imageMapData.find(photo => photo.file === `assets/projects/${file}`)!).map((item, idx) => (
              <div
                key={idx}
                className="group bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between hover:border-blue-500 transition-all duration-300"
              >
                <ProjectPhoto
                  src={`/${item.file}`}
                  label={categoryLabels[item.category]}
                  variant="featured"
                  onOpen={onOpenLightboxByFile}
                />

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.featuredTitle || item.alt_ms}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-300 mt-3.5 leading-relaxed">
                      {item.alt_ms}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-sm sm:text-base">
                    <button
                      onClick={() => onNavigate('portfolio')}
                      className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1.5"
                    >
                      <span>Lihat Galeri Kerja</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. NILAI & PRINSIP TERAS KEJURUTERAAN */}
      <section id="values-section" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
            Prinsip Amalan Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Mengapa Memilih SF Raudhah Global?
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Komitmen kami dizahirkan melalui amalan kejuruteraan terbaik dan kawalan kualiti yang ketat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Integriti & Pematuhan</h3>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Memastikan setiap bahan pendawaian, peralatan mekanikal dan struktur binaan menepati piawaian SIRIM, Suruhanjaya Tenaga (ST) dan JKR.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Keselamatan Tapak (HSE)</h3>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Prosedur keselamatan ketat bagi kerja tempat tinggi (perancah), penutupan litar voltan hidup, dan peralatan perlindungan diri (PPE) lengkap.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-3.5">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Ketepatan Masa Projek</h3>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Perancangan jadual kerja rapi (CPM / Gantt chart) bagi memastikan penyerahan tapak berjalan lancar mengikut jadual kontrak pelanggan.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-3.5">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Penyelesaian Satu Hentian</h3>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Gabungan lengkap kejuruteraan elektrik, mekanikal, sistem data gentian optik dan binaan sivil tanpa perlu mengurus subkontraktor berasingan.
            </p>
          </div>
        </div>
      </section>

      {/* 6. LANGKAH PENGLIBATAN & PERTANYAAN PROJEK */}
      <section id="workflow-section" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-100/80 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              Aliran Kerja Profesional
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              4 Langkah Mudah Melantik Kami
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Proses telus dari perbincangan awal hingga penyerahan ujian pentauliahan lengkap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs relative">
                <span className="text-4xl sm:text-5xl font-black text-blue-100 absolute top-4 right-4 select-none">
                  {step.step}
                </span>
                <span className="inline-block px-3 py-1 rounded bg-blue-50 text-blue-700 font-extrabold text-sm mb-3">
                  Langkah {step.step}
                </span>
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl mb-2">{step.title}</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA BANNER */}
      <section id="closing-cta" className="max-w-7xl mx-auto px-4 sm:px-8 pb-8">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-xl flex flex-col items-center justify-between gap-8 text-center">
          <div className="space-y-3.5 max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-300">
              Perbincangan Projek Tanpa Sebarang Kewajipan
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
              Ada Keperluan Kejuruteraan Elektrikal, Mekanikal atau Ubah Suai Bangunan?
            </h2>
            <p className="text-slate-200 text-base sm:text-xl leading-relaxed font-normal">
              Pasukan jurutera SF Raudhah Global sedia membincangkan spesifikasi lukisan pelan, lawatan pemeriksaan tapak, serta menyediakan sebut harga rasmi dengan segera.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
            <button
              onClick={() => onOpenWhatsAppQuote()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-slate-950 font-black text-lg rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 text-slate-950" />
              <span>WhatsApp Sekarang</span>
            </button>
            <button
              onClick={() => onNavigate('hubungi')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-xl border border-white/20 transition-colors"
            >
              <span>Hubungi Pejabat</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
