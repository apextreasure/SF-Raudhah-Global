import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Building,
  ShieldCheck,
  Send,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { companyInfo } from '../data/companyContent';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState('Kejuruteraan Elektrik');
  const [notes, setNotes] = useState('');
  const [copiedBank, setCopiedBank] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `*PERTANYAAN HUBUNGI RASMI — SF RAUDHAH GLOBAL*`,
      `----------------------------------------`,
      `*Nama / Pegawai:* ${name.trim() || 'Pelanggan'}`,
      company.trim() ? `*Syarikat / Agensi:* ${company.trim()}` : null,
      phone.trim() ? `*No Telefon:* ${phone.trim()}` : null,
      location.trim() ? `*Lokasi Premis:* ${location.trim()}` : null,
      `*Kategori Servis:* ${service}`,
      `*Butiran Keperluan:*`,
      `${notes.trim() || 'Mohon pihak SF Raudhah Global menghubungi saya bagi maklumat lanjut.'}`,
      `----------------------------------------`,
      `_Dihantar melalui Laman Web SF Raudhah Global_`
    ].filter(Boolean);

    const waUrl = `https://wa.me/60166000127?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(waUrl, '_blank');
  };

  const handleCopyBank = () => {
    navigator.clipboard.writeText(companyInfo.bankDetails.accountNo);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  return (
    <div id="contact-page" className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      
      {/* 1. HERO HEADER */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4 text-left">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3.5 py-1.5 rounded-full border border-cyan-800">
            Pusat Perhubungan Rasmi
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Hubungi SF Raudhah Global
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-normal">
            Sedia berkhidmat untuk perbincangan projek baharu, lawatan tapak, pelantikan kontraktor dan urusan perolehan tender di seluruh Semenanjung Malaysia.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & INTERACTIVE FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Contact Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          
          {/* Main Direct Lines */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-5">
            <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl uppercase tracking-wider flex items-center gap-2.5 border-b border-slate-100 pb-4">
              <Phone className="w-6 h-6 text-emerald-600" />
              <span>Talian Perhubungan Pantas</span>
            </h3>

            <div className="space-y-4 text-base">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <span className="text-xs sm:text-sm text-slate-600 font-semibold block">Pengarah Urusan:</span>
                <a
                  href="tel:+60166000127"
                  className="text-lg sm:text-xl font-extrabold text-slate-900 hover:text-blue-700 flex items-center justify-between mt-1"
                >
                  <span>+60 16-600 0127</span>
                  <span className="text-xs sm:text-sm px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-lg">WhatsApp / Panggilan</span>
                </a>
                <span className="text-xs sm:text-sm text-slate-600 font-medium block mt-1">En. Fakrul Redza Bin Fadzil</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <span className="text-xs sm:text-sm text-slate-600 font-semibold block">Operasi & Tapak:</span>
                <a
                  href="tel:+601110820127"
                  className="text-lg sm:text-xl font-extrabold text-slate-900 hover:text-blue-700 flex items-center justify-between mt-1"
                >
                  <span>+60 11-1082 0127</span>
                  <span className="text-xs sm:text-sm px-2.5 py-1 bg-blue-100 text-blue-800 font-bold rounded-lg">Projek</span>
                </a>
                <span className="text-xs sm:text-sm text-slate-600 font-medium block mt-1">Penyelarasan Projek & Tapak</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <span className="text-xs sm:text-sm text-slate-600 font-semibold block">Talian Pejabat Tetap:</span>
                <a
                  href="tel:+60333964016"
                  className="text-lg sm:text-xl font-extrabold text-slate-900 hover:text-blue-700 flex items-center justify-between mt-1"
                >
                  <span>03-3396 4016</span>
                  <span className="text-xs sm:text-sm px-2.5 py-1 bg-slate-200 text-slate-800 font-bold rounded-lg">Talian Am</span>
                </a>
              </div>
            </div>
          </div>

          {/* Office Address & Email */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-5">
            <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl uppercase tracking-wider flex items-center gap-2.5 border-b border-slate-100 pb-4">
              <Building className="w-6 h-6 text-blue-600" />
              <span>Ibu Pejabat Berdaftar</span>
            </h3>

            <div className="space-y-4 text-base text-slate-700">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900 text-base sm:text-lg">Alamat Surat-Menyurat:</p>
                  <p className="text-slate-700 text-base sm:text-lg mt-1 leading-relaxed font-normal">
                    {companyInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <Mail className="w-6 h-6 text-cyan-600 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900 text-base sm:text-lg">Emel Pertanyaan & Dokumen:</p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-blue-700 hover:underline text-base sm:text-lg font-bold block mt-0.5"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <Clock className="w-6 h-6 text-slate-500 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900 text-base sm:text-lg">Waktu Operasi Pejabat:</p>
                  <p className="text-slate-700 text-sm sm:text-base mt-1 leading-relaxed font-normal">
                    Isnin – Jumaat: 8:30 pagi – 5:30 petang<br />
                    Sabtu: 9:00 pagi – 1:00 petang (Urusan Temujanji)<br />
                    <span className="text-emerald-700 font-bold block mt-1">*Perkhidmatan Kecemasan Tapak M&E 24 Jam (Atas Panggilan)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Bank & SSM Box */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-cyan-400 font-extrabold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              Pendaftaran & Perbankan Sah
            </span>
            <div className="text-sm sm:text-base text-slate-300 space-y-2">
              <div>No. Pendaftaran SSM: <strong className="text-white font-mono text-base">{companyInfo.registrationNo}</strong></div>
              <div>Bank: <strong className="text-white">{companyInfo.bankDetails.bank}</strong></div>
              <div>Cawangan: {companyInfo.bankDetails.branch}</div>
              <div className="flex items-center justify-between pt-1">
                <div>No. Akaun: <strong className="text-cyan-300 font-mono text-base sm:text-lg">{companyInfo.bankDetails.accountNo}</strong></div>
                <button
                  onClick={handleCopyBank}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold"
                  title="Salin Nombor Akaun"
                >
                  {copiedBank ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedBank ? 'Disalin' : 'Salin'}</span>
                </button>
              </div>
              <div className="text-xs sm:text-sm text-slate-400 pt-1">Nama Akaun: {companyInfo.bankDetails.accountName}</div>
            </div>
          </div>

        </div>

        {/* Right Side: Interactive Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-5">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                Borang Sebut Harga Terus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5">
                Hantar Pertanyaan Projek Kepada Jurutera Kami
              </h2>
              <p className="text-slate-700 text-base sm:text-lg mt-1 font-normal leading-relaxed">
                Isi maklumat asas di bawah. Sistem akan menghasilkan draf mesej WhatsApp berstruktur untuk dihantar terus ke talian Pengarah Urusan kami.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-800 uppercase mb-1.5">
                    Nama Penuh Anda <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="cth: En. Razak / Ir. Tan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 uppercase mb-1.5">
                    Syarikat / Agensi (Jika Ada)
                  </label>
                  <input
                    type="text"
                    placeholder="cth: Perbadanan Pembangunan Sdn Bhd"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-800 uppercase mb-1.5">
                    Nombor Telefon / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="cth: 019-8765432"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 uppercase mb-1.5">
                    Lokasi Tapak Projek
                  </label>
                  <input
                    type="text"
                    placeholder="cth: Shah Alam / KL / Nilai / Kuantan"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 uppercase mb-1.5">
                  Kategori Perkhidmatan Diperlukan
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="Kejuruteraan Elektrik">Kejuruteraan Elektrik (LV, Panel Suis, Pendawaian, Dulang Kabel)</option>
                  <option value="Kejuruteraan Mekanikal & HVAC">Kejuruteraan Mekanikal & HVAC (Pendingin Hawa, Sistem Paip & Pam)</option>
                  <option value="ICT & Sistem ELV">ICT & Sistem ELV (Gentian Optik FTTH, Kabel Cat6, CCTV)</option>
                  <option value="Kejuruteraan Awam & Ubah Suai">Kejuruteraan Awam & Ubah Suai (Fabrikasi Keluli, Siling, Perancah)</option>
                  <option value="Pakej Kontraktor Penuh (M&E + Sivil)">Pakej Kontraktor Penuh (M&E + Ubah Suai Menyeluruh)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 uppercase mb-1.5">
                  Penerangan Skop / Catatan Projek
                </label>
                <textarea
                  rows={4}
                  placeholder="Terangkan secara ringkas spesifikasi kerja, anggaran saiz kawasan, atau sebarang pertanyaan berkaitan lukisan pelan..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-md transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                  <span>Hantar & Buka Mesej di WhatsApp Sekarang</span>
                </button>
                <p className="text-center text-xs sm:text-sm text-slate-600 mt-2.5 font-medium">
                  *Mesej akan dihantar terus ke talian rasmi WhatsApp Pengarah Urusan (+60 16-600 0127) untuk tindakan segera.
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* 3. PETA LOKASI PEJABAT (Google Maps Embed Subang Jaya USJ 1) */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Lokasi Pejabat Operasi: USJ 1, Subang Jaya
            </h3>
            <p className="text-sm sm:text-base text-slate-700 mt-0.5">
              No 33A, Jalan USJ 1/11, USJ 1, 47600 Subang Jaya, Selangor Darul Ehsan
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Jalan+USJ+1/11+Subang+Jaya+Selangor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base font-bold text-blue-700 hover:underline inline-flex items-center gap-1.5"
          >
            <span>Buka di Google Maps Aplikasi</span>
          </a>
        </div>

        <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-300 shadow-inner bg-slate-200">
          <iframe
            title="Lokasi SF Raudhah Global Subang Jaya"
            src="https://maps.google.com/maps?q=Jalan%20USJ%201%2F11%2C%2047600%20Subang%20Jaya%2C%20Selangor&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

    </div>
  );
};
