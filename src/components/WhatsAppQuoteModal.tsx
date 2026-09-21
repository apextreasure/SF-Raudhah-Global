import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { companyInfo } from '../data/companyContent';

interface WhatsAppQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const WhatsAppQuoteModal: React.FC<WhatsAppQuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'elektrikal'
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState(defaultService);
  const [notes, setNotes] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState(companyInfo.whatsappPrimary);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabels: Record<string, string> = {
      elektrikal: 'Kejuruteraan Elektrik (LV/MSB/Pendawaian/Pencahayaan)',
      mekanikal: 'Kejuruteraan Mekanikal & HVAC (Pendingin Hawa/Paip/Pam)',
      ict: 'ICT & Sistem ELV (Gentian Optik FTTH/Kabel/CCTV)',
      awam: 'Kejuruteraan Awam & Ubah Suai (Fabrikasi/Perancah/Fit-out)',
      lain: 'Pertanyaan Kejuruteraan Umum'
    };

    const serviceName = serviceLabels[service] || service;

    const messageLines = [
      `*PERTANYAAN SEBUT HARGA PROJEK — SF RAUDHAH GLOBAL*`,
      `----------------------------------------`,
      `*Nama / Wakil:* ${name.trim() || 'Pelanggan'}`,
      company.trim() ? `*Syarikat / Organisasi:* ${company.trim()}` : null,
      phone.trim() ? `*No Telefon:* ${phone.trim()}` : null,
      location.trim() ? `*Lokasi Tapak Projek:* ${location.trim()}` : null,
      `*Kategori Servis:* ${serviceName}`,
      `*Skop / Butiran Keperluan:*`,
      `${notes.trim() || 'Sila hubungi saya bagi perbincangan lanjut mengenai sebut harga & lawatan tapak.'}`,
      `----------------------------------------`,
      `_Dihantar melalui Laman Web Rasmi SF Raudhah Global_`
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const cleanNumber = selectedRecipient.replace(/\D/g, '');
    const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(fullMessage)}`;

    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div
      id="whatsapp-quote-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-xl text-white">Borang Pertanyaan & WhatsApp</h3>
              <p className="text-sm text-slate-300">Respons pantas daripada jurutera & pengurusan projek</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-800 uppercase mb-1.5">
                Nama Penuh <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="cth: Ir. Ahmad / En. Azman"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-800 uppercase mb-1.5">
                Syarikat / Agensi (Pilihan)
              </label>
              <input
                type="text"
                placeholder="cth: Tetuan Bina Maju Sdn Bhd"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-800 uppercase mb-1.5">
                Nombor Telefon <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="cth: 012-3456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-800 uppercase mb-1.5">
                Lokasi Tapak Projek
              </label>
              <input
                type="text"
                placeholder="cth: Shah Alam, Subang, KL, dsb."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-800 uppercase mb-1.5">
              Kategori Servis Diperlukan
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-white"
            >
              <option value="elektrikal">Kejuruteraan Elektrik (LV, Panel Suis, Pendawaian, Pencahayaan)</option>
              <option value="mekanikal">Kejuruteraan Mekanikal & HVAC (Pendingin Hawa, Paip, Rumah Pam)</option>
              <option value="ict">ICT & Sistem ELV (Gentian Optik FTTH, Kabel Cat6, CCTV)</option>
              <option value="awam">Kejuruteraan Awam & Ubah Suai (Fabrikasi, Siling, Perancah, Fit-out)</option>
              <option value="lain">Lain-lain / Konsultasi M&E Menyeluruh</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-800 uppercase mb-1.5">
              Keterangan Ringkas Skop Kerja
            </label>
            <textarea
              rows={3}
              placeholder="Nyatakan secara ringkas keperluan projek, saiz premis, atau tarikh jangkaan pelaksanaan..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            ></textarea>
          </div>

          {/* Contact Person selector */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <span className="block text-sm font-bold text-slate-800 mb-2">Hantar WhatsApp Terus Kepada:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-blue-400 transition-colors">
                <input
                  type="radio"
                  name="recipient"
                  checked={selectedRecipient === '+60166000127'}
                  onChange={() => setSelectedRecipient('+60166000127')}
                  className="text-blue-600 w-4 h-4"
                />
                <div>
                  <span className="font-extrabold text-slate-900 block text-base">Pertanyaan Utama</span>
                  <span className="text-slate-600 text-sm font-medium">+60 16-600 0127 (WhatsApp)</span>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-blue-400 transition-colors">
                <input
                  type="radio"
                  name="recipient"
                  checked={selectedRecipient === '+601110820127'}
                  onChange={() => setSelectedRecipient('+601110820127')}
                  className="text-blue-600 w-4 h-4"
                />
                <div>
                  <span className="font-extrabold text-slate-900 block text-base">Talian Operasi</span>
                  <span className="text-slate-600 text-sm font-medium">+60 11-1082 0127 (Projek)</span>
                </div>
              </label>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-3 flex items-center justify-end gap-3.5">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 text-base font-bold text-slate-700 hover:text-slate-900"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-base rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Buka Mesej di WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
