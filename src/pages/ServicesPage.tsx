import React, { useState } from 'react';
import { ProjectPhoto } from '../components/ProjectPhoto';
import {
  Zap,
  Wrench,
  Wifi,
  Hammer,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Cpu,
  Layers,
  FileCheck,
  Check,
  Info
} from 'lucide-react';
import { detailedServices } from '../data/companyContent';

interface ServicesPageProps {
  initialServiceId?: string;
  onOpenWhatsAppQuote: (service?: string) => void;
  onOpenLightboxByFile: (file: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialServiceId = 'elektrikal',
  onOpenWhatsAppQuote,
  onOpenLightboxByFile
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialServiceId);

  const currentService =
    detailedServices.find((s) => s.id === activeTab) || detailedServices[0];

  const serviceIcons = {
    elektrikal: Zap,
    mekanikal: Wrench,
    ict: Wifi,
    awam: Hammer
  };

  const IconComponent = serviceIcons[currentService.id as keyof typeof serviceIcons] || Zap;

  return (
    <div id="services-page" className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      
      {/* 1. HERO HEADER */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4 text-left">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3.5 py-1.5 rounded-full border border-cyan-800">
            Skop Perkhidmatan Kejuruteraan
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Penyelesaian M&E, ICT & Ubah Suai Bangunan
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-normal">
            Piawaian kejuruteraan tinggi berasaskan spesifikasi Suruhanjaya Tenaga, JKR dan undang-undang keselamatan industri di Malaysia.
          </p>
        </div>
      </section>

      {/* 2. TAB NAVIGATOR (All 4 core services) */}
      <section className="flex flex-wrap items-center gap-2.5 p-2 bg-slate-100 rounded-2xl border border-slate-200">
        {detailedServices.map((svc) => {
          const TabIcon = serviceIcons[svc.id as keyof typeof serviceIcons] || Zap;
          const isActive = activeTab === svc.id;
          return (
            <button
              key={svc.id}
              onClick={() => setActiveTab(svc.id)}
              className={`flex-1 min-w-[150px] sm:min-w-[190px] flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-extrabold text-base sm:text-lg transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-800 hover:bg-white hover:text-slate-950'
              }`}
            >
              <TabIcon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-blue-600'}`} />
              <span>{svc.title}</span>
            </button>
          );
        })}
      </section>

      {/* 3. ACTIVE SERVICE DEEP-DIVE CARD */}
      <section className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        
        {/* Top Header of Active Service */}
        <div className="flex flex-col items-start justify-between gap-5 border-b border-slate-200 pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100 shrink-0">
              <IconComponent className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs sm:text-sm uppercase font-bold tracking-wider text-blue-700">
                Disiplin Kejuruteraan
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                {currentService.title}
              </h2>
            </div>
          </div>

          <button
            onClick={() => onOpenWhatsAppQuote(currentService.id)}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-base sm:text-lg shadow-sm transition-all shrink-0"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Minta Sebut Harga {currentService.title}</span>
          </button>
        </div>

        {/* Two-Column Details & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Scope & features */}
          <div className="lg:col-span-6 space-y-7">
            <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-medium">
              {currentService.shortDesc}
            </p>

            <div className="space-y-3.5">
              <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-wide flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-blue-600" />
                <span>Skop Keupayaan & Kerja Berkaitan</span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {currentService.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 p-3.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-200 text-base sm:text-lg text-slate-900 font-medium"
                  >
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reference Projects */}
            <div className="p-5 bg-blue-50/80 rounded-2xl border border-blue-200/80 space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-900 block">
                Contoh Projek Sebenar Berkaitan:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-blue-950 font-semibold">
                {currentService.sampleProjects.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Original service photograph with caption below */}
          <div className="lg:col-span-6 min-w-0 space-y-4">
            <ProjectPhoto
              src={currentService.heroImage}
              label={`${currentService.title} · Foto projek`}
              variant="service"
              onOpen={onOpenLightboxByFile}
            />

            {/* Quick Contact Box for this Service */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-sm sm:text-base space-y-3">
              <span className="font-bold text-slate-900 block text-base sm:text-lg">
                Perlukan sebut harga segera bagi {currentService.title}?
              </span>
              <p className="text-slate-700 font-normal leading-relaxed">
                Hantarkan pelan susun atur atau senarai kuantiti (BQ) melalui WhatsApp kepada pasukan teknikal kami.
              </p>
              <button
                onClick={() => onOpenWhatsAppQuote(currentService.id)}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2.5 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Bincang Melalui WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. TIGA KELEBIHAN TAMBAHAN TEKNIKAL */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
            1
          </div>
          <h4 className="font-extrabold text-slate-900 text-lg sm:text-xl">Juruteknik Bertauliah</h4>
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            Setiap pepasangan dikendalikan oleh juruteknik kompeten yang memiliki sijil kemahiran berkaitan dan kad hijau CIDB sah.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg">
            2
          </div>
          <h4 className="font-extrabold text-slate-900 text-lg sm:text-xl">Bahan Piawaian Industri</h4>
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            Hanya menggunakan kabel SIRIM-approved, konduit berkualiti, keluli tahan lasak dan komponen daripada pengeluar bereputasi tinggi.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
            3
          </div>
          <h4 className="font-extrabold text-slate-900 text-lg sm:text-xl">Dokumentasi & Ujian (T&C)</h4>
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            Laporan ujian penebat (insulation test), rintangan pembumian, dan pentauliahan dibekalkan sepenuhnya bagi setiap penyerahan projek.
          </p>
        </div>
      </section>

    </div>
  );
};
