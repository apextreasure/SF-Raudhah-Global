import React from 'react';
import { Phone, Mail, MapPin, Building, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyContent';
import { PageId } from './Header';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner: Service Areas Strip */}
      <div className="bg-blue-950/70 border-b border-blue-900/40 py-4 px-4 sm:px-8 text-sm sm:text-base">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center gap-2 text-cyan-300 font-bold">
            <Building className="w-5 h-5 shrink-0 text-cyan-400" />
            <span>Kawasan Operasi & Liputan Perkhidmatan:</span>
          </div>
          <p className="text-slate-200 text-sm sm:text-base font-medium">
            Selangor • Wilayah Persekutuan KL & Putrajaya • Negeri Sembilan • Pahang • Johor • Kedah & Seluruh Semenanjung Malaysia
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Logo & Company Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Same Logo in white panel with 320x56px centered overflow-hidden wrapper */}
            <div
              id="footer-logo-panel"
              onClick={() => handleNav('utama')}
              className="cursor-pointer inline-block bg-white rounded-lg px-3 py-1.5 border border-slate-200 shadow-sm"
              title="SF Raudhah Global"
            >
              <div className="w-[260px] sm:w-[320px] h-[52px] sm:h-[58px] overflow-hidden flex items-center justify-center relative bg-white">
                <img
                  src="/assets/brand/sf-raudhah-logo-horizontal.png"
                  alt="SF Raudhah Global"
                  className="w-full h-full object-contain select-none"
                />
              </div>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2 font-normal">
              SF RAUDHAH GLOBAL ialah kontraktor kejuruteraan 100% milik Bumiputera yang beribu pejabat di Bandar Puncak Alam, Selangor. Ditubuhkan pada {companyInfo.foundedDate} dan didaftarkan sebagai perniagaan milikan tunggal pada {companyInfo.registrationDate}, kami pakar dalam penyelesaian menyeluruh Elektrikal, Mekanikal & HVAC, ICT/ELV, dan Pengubahsuaian Bangunan komersial serta industri.
            </p>

            <div className="space-y-2 pt-3 text-sm sm:text-base text-slate-300 border-t border-slate-800">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white">No. Pendaftaran SSM:</span>
                <span className="font-mono text-cyan-300 font-bold">{companyInfo.registrationNo}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="font-semibold text-white">Taraf Syarikat:</span>
                <span className="text-slate-200 font-bold">{companyInfo.ownership}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigasi & Teras Servis (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-wide uppercase border-b border-slate-800 pb-2">
              Navigasi Laman
            </h3>
            <ul className="space-y-3 text-base sm:text-lg">
              <li>
                <button
                  onClick={() => handleNav('utama')}
                  className="text-slate-300 hover:text-cyan-400 flex items-center gap-2.5 transition-colors font-medium text-left"
                >
                  <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Utama (Home)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('profil')}
                  className="text-slate-300 hover:text-cyan-400 flex items-center gap-2.5 transition-colors font-medium text-left"
                >
                  <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Profil Korporat & Pengasas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('servis')}
                  className="text-slate-300 hover:text-cyan-400 flex items-center gap-2.5 transition-colors font-medium text-left"
                >
                  <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Perkhidmatan M&E & Awam</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="text-slate-300 hover:text-cyan-400 flex items-center gap-2.5 transition-colors font-medium text-left"
                >
                  <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Portfolio 54 Projek & Galeri</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('hubungi')}
                  className="text-slate-300 hover:text-cyan-400 flex items-center gap-2.5 transition-colors font-medium text-left"
                >
                  <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Hubungi & Lokasi Pejabat</span>
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <h4 className="text-sm uppercase font-bold text-slate-300 tracking-wider mb-2">
                4 Bidang Kejuruteraan
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Kejuruteraan Elektrik • Mekanikal & HVAC • ICT & Sistem ELV • Kejuruteraan Awam & Ubah Suai
              </p>
            </div>
          </div>

          {/* Column 3: Maklumat Hubungan & Pejabat (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-wide uppercase border-b border-slate-800 pb-2">
              Hubungi Pejabat
            </h3>
            <div className="space-y-4 text-base">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-base">Alamat Pejabat Berdaftar:</p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-1">
                    {companyInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-white font-bold text-base">Talian Perhubungan:</p>
                  <div className="text-slate-200 text-sm sm:text-base space-y-1">
                    <a href="tel:+60166000127" className="hover:text-cyan-300 transition-colors block font-semibold text-emerald-300">
                      +60 16-600 0127 (Pertanyaan)
                    </a>
                    <a href="tel:+601110820127" className="hover:text-cyan-300 transition-colors block font-semibold text-slate-300">
                      +60 11-1082 0127 (Operasi)
                    </a>
                    <a href="tel:+60333964016" className="hover:text-cyan-300 transition-colors block font-semibold text-slate-300">
                      03-3396 4016 (Pejabat)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                <div className="min-w-0 break-words">
                  <p className="text-white font-bold text-base">Emel Rasmi:</p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-slate-300 text-sm sm:text-base hover:text-cyan-300 transition-colors font-semibold"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>


            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-slate-300">
            © {currentYear} SF RAUDHAH GLOBAL ({companyInfo.registrationNo}). Hak Cipta Terpelihara.
          </p>
          <p className="text-slate-400">
            Penyedia Perkhidmatan Kejuruteraan Elektrikal, Mekanikal, Sivil & ICT Berkualiti Tinggi di Malaysia.
          </p>
        </div>
      </div>
    </footer>
  );
};
