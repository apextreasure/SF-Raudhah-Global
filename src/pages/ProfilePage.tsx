import React, { useState } from 'react';
import { ProjectPhoto } from '../components/ProjectPhoto';
import { OrganizationChart } from '../components/OrganizationChart';
import {
  Target,
  Eye,
  ShieldCheck,
  Search,
  CheckCircle2,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { companyInfo, leadershipData } from '../data/companyContent';
import { uniqueClients } from '../data/clients';

interface ProfilePageProps {
  onOpenLightboxByFile: (file: string) => void;
  onOpenWhatsAppQuote: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  onOpenLightboxByFile,
  onOpenWhatsAppQuote
}) => {
  const [clientCategory, setClientCategory] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter clients
  const filteredUniqueClients = uniqueClients.filter((client) => {
    const matchesCategory =
      clientCategory === 'semua' || client.category === clientCategory;
    const matchesSearch = client.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="profile-page" className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 1. HERO HEADER */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4 text-left">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3.5 py-1.5 rounded-full border border-cyan-800">
            Mengenai SF Raudhah Global
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Profil Korporat & Struktur Kepimpinan
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-normal">
            Membina legasi kejuruteraan berasaskan integriti teknikal, kemahiran tenaga kerja tempatan dan komitmen terhadap standard kualiti industri sejak 2016.
          </p>
        </div>
      </section>

      {/* 2. LATAR BELAKANG & GAMBAR JURUTEKNIK KESELAMATAN (p31-03) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-left">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Latar Belakang & Sejarah Penubuhan
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Pengalaman Luas Bermula Sejak 2016
          </h2>
          <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
            <strong>{companyInfo.name}</strong> ditubuhkan pada <strong>{companyInfo.foundedDate}</strong>, hasil buah fikiran Encik Fairus Ameer dan Puan Siti Zabedah. Perniagaan ini berstatus <strong>{companyInfo.businessType.toLowerCase()}</strong>, dengan tarikh mula berniaga dan pendaftaran SSM pada <strong>{companyInfo.registrationDate}</strong>, serta nombor pendaftaran <strong>{companyInfo.registrationNo}</strong>.
          </p>
          <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
            Berpangkalan di <strong>Bandar Puncak Alam, Selangor</strong>, syarikat kami memiliki taraf <strong>100% Milik Bumiputera</strong>. Kami beroperasi merentasi pelbagai disiplin kejuruteraan dengan keupayaan menyeluruh merangkumi pendawaian voltan rendah, panel suis kawalan elektrik, sistem pendingin hawa komersial (HVAC), rangkaian rumah pam cecair, telekomunikasi gentian optik FTTH, sistem kamera ELV/CCTV, serta kerja pembinaan struktur keluli dan ubah suai fasiliti.
          </p>

          <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center">
              <span className="text-xs sm:text-sm text-slate-600 font-semibold block mb-1">Pendaftaran SSM</span>
              <span className="font-extrabold text-slate-900 text-base sm:text-lg">{companyInfo.registrationDate}</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center">
              <span className="text-xs sm:text-sm text-slate-600 font-semibold block mb-1">Pemilikan</span>
              <span className="font-extrabold text-emerald-700 text-base sm:text-lg">100% Bumiputera</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center col-span-2 sm:col-span-1">
              <span className="text-xs sm:text-sm text-slate-600 font-semibold block mb-1">Ibu Pejabat</span>
              <span className="font-extrabold text-blue-700 text-base sm:text-lg">Bandar Puncak Alam</span>
            </div>
          </div>
        </div>

        {/* Dedicated photo p31-03-technicians-elevated-platform.jpg */}
        <div className="lg:col-span-6 min-w-0">
          <ProjectPhoto
            src="/assets/projects/p31-03-technicians-elevated-platform.jpg"
            title="Juruteknik di Platform Angkat"
            label="Pasukan di tapak · Foto projek"
            variant="profile"
            onOpen={onOpenLightboxByFile}
          />
        </div>
      </section>

      {/* 3. MISI, VISI & OBJEKTIF */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="glass-card p-8 rounded-2xl border border-slate-200 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
            <Eye className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">Visi Syarikat</h3>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {companyInfo.vision}
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl border border-slate-200 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
            <Target className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">Misi Syarikat</h3>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {companyInfo.mission}
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl border border-slate-200 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">Objektif Kualiti</h3>
          <ul className="space-y-3 text-base sm:text-lg text-slate-800 font-medium">
            {companyInfo.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <span className="leading-snug">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. PROFIL PENGASAS & PENGARAH */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Kepimpinan Strategik
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Pengasas & Kepimpinan
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-normal">
            Didorong oleh individu berwawasan dengan kepakaran operasi dan komitmen teknikal tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leadershipData.map((leader, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-blue-400 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-blue-700 to-slate-900 text-white font-extrabold text-xl flex items-center justify-center shadow-md">
                    {leader.initials}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{leader.name}</h3>
                    <p className="text-sm sm:text-base text-blue-700 font-bold">{leader.role}</p>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-2 border-t border-slate-100 font-normal">
                  {leader.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-600 font-semibold">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span>Pengurusan Eksekutif SF Raudhah Global</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <OrganizationChart />

      {/* 6. Printed client list; counts derived from PDF records. */}
      <section id="clients-section" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Rakan Kerjasama & Klien
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Klien & Rakan Korporat
            </h2>
            <p className="text-slate-700 text-base sm:text-lg mt-1 font-normal">
              Kenali klien dan rakan kerjasama kami merentas sektor korporat, kerajaan, pendidikan dan institusi.
            </p>
          </div>

          <span className="text-blue-700 font-bold">{uniqueClients.length} Klien & Rakan Kerjasama</span>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {[
                { id: 'semua', label: 'Semua Kategori' },
                { id: 'swasta', label: 'Swasta / Korporat' },
                { id: 'kerajaan', label: 'Kerajaan / GLC' },
                { id: 'pendidikan', label: 'Pendidikan' },
                { id: 'institusi', label: 'Institusi' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setClientCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-sm font-bold transition-colors ${
                    clientCategory === cat.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          <div className="relative w-full sm:w-80">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama klien / agensi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
        </div>

        {/* Clients Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredUniqueClients.map((client) => (
              <div
                key={client.id}
                className="glass-card p-5 rounded-2xl border border-slate-200 flex items-center justify-between hover:border-blue-400 transition-colors"
              >
                <div className="space-y-1 pr-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    {client.category.toUpperCase()}
                  </span>
                  <h4 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                    {client.name}
                  </h4>
                </div>

              </div>
            ))}
          </div>

      </section>

      {/* CTA Strip */}
      <section className="bg-blue-50 rounded-2xl p-6 sm:p-10 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-extrabold text-slate-900 text-xl sm:text-2xl">
            Ingin Mengesahkan Kelayakan & Pengalaman Projek Kami?
          </h3>
          <p className="text-slate-700 text-base sm:text-lg font-normal">
            Sila semak senarai 54 projek terperinci berserta tarikh penyelesaian di bahagian portfolio.
          </p>
        </div>
        <button
          onClick={onOpenWhatsAppQuote}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base rounded-xl transition-colors shrink-0"
        >
          <span>Hubungi Pasukan Kami</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

    </div>
  );
};
