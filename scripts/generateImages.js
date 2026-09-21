import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Import image list from imageMapData
const imageList = [
  { file: "assets/projects/p30-01-site-scaffolding.jpg", w: 734, h: 1300, cat: "awam", label: "Perancah Tapak Industri", bg1: "#1e293b", bg2: "#334155", accent: "#f59e0b" },
  { file: "assets/projects/p30-02-metal-cutting.jpg", w: 778, h: 755, cat: "awam", label: "Fabrikasi & Pemotongan Logam", bg1: "#312e81", bg2: "#1e1b4b", accent: "#ef4444" },
  { file: "assets/projects/p30-03-interior-led-lighting.jpg", w: 779, h: 563, cat: "elektrikal", label: "Pencahayaan LED Siling Komersial", bg1: "#0f172a", bg2: "#1e3a8a", accent: "#38bdf8" },
  { file: "assets/projects/p30-04-illuminated-walkway.jpg", w: 735, h: 709, cat: "elektrikal", label: "Laluan Pejalan Kaki Berlampu Saloma Link", bg1: "#022c22", bg2: "#064e3b", accent: "#10b981" },
  { file: "assets/projects/p30-05-elevated-walkway-construction.jpg", w: 783, h: 651, cat: "awam", label: "Struktur Jejantas Bertingkat", bg1: "#1e293b", bg2: "#0f172a", accent: "#f59e0b" },
  { file: "assets/projects/p31-01-overhead-installation.jpg", w: 782, h: 567, cat: "elektrikal", label: "Pemasangan Atas Kepala Industri", bg1: "#0f172a", bg2: "#1e293b", accent: "#38bdf8" },
  { file: "assets/projects/p31-02-industrial-cable-containment.jpg", w: 740, h: 714, cat: "elektrikal", label: "Sistem Pembendungan Kabel Industri", bg1: "#1e1b4b", bg2: "#1e3a8a", accent: "#60a5fa" },
  { file: "assets/projects/p31-03-technicians-elevated-platform.jpg", w: 782, h: 591, cat: "keselamatan", label: "Platform Angkat & Keselamatan Tapak", bg1: "#064e3b", bg2: "#0f172a", accent: "#22c55e" },
  { file: "assets/projects/p31-04-warehouse-installation.jpg", w: 740, h: 683, cat: "elektrikal", label: "Pemasangan Elektrik Gudang Simpanan", bg1: "#0f172a", bg2: "#1e3a8a", accent: "#38bdf8" },
  { file: "assets/projects/p31-05-distribution-board-termination.jpg", w: 783, h: 821, cat: "elektrikal", label: "Penamatan Papan Agihan Elektrik (DB)", bg1: "#111827", bg2: "#1f2937", accent: "#eab308" },
  { file: "assets/projects/p31-06-electrical-components.jpg", w: 740, h: 574, cat: "elektrikal", label: "Komponen & Aksesori Elektrikal", bg1: "#1f2937", bg2: "#374151", accent: "#38bdf8" },
  { file: "assets/projects/p32-01-industrial-conduits.jpg", w: 735, h: 709, cat: "elektrikal", label: "Pemasangan Konduit Logam Industri", bg1: "#0f172a", bg2: "#1e293b", accent: "#94a3b8" },
  { file: "assets/projects/p32-02-switchboard-testing.jpg", w: 779, h: 709, cat: "elektrikal", label: "Pengujian Papan Suis Utama (MSB)", bg1: "#1e1b4b", bg2: "#312e81", accent: "#a855f7" },
  { file: "assets/projects/p32-03-industrial-access-area.jpg", w: 735, h: 688, cat: "awam", label: "Zon Servis & Ruang Utiliti Loji", bg1: "#1e293b", bg2: "#0f172a", accent: "#f59e0b" },
  { file: "assets/projects/p32-04-overhead-services.jpg", w: 778, h: 688, cat: "mekanikal", label: "Laluan Servis Paip & Kabel Overhead", bg1: "#082f49", bg2: "#0c4a6e", accent: "#38bdf8" },
  { file: "assets/projects/p32-05-vertical-cable-tray.jpg", w: 735, h: 571, cat: "elektrikal", label: "Dulang Kabel Menegak Dinding", bg1: "#0f172a", bg2: "#1e293b", accent: "#60a5fa" },
  { file: "assets/projects/p32-06-indoor-air-conditioning.jpg", w: 777, h: 571, cat: "mekanikal", label: "Unit Pendingin Hawa Dalaman VRF", bg1: "#082f49", bg2: "#0284c7", accent: "#7dd3fc" },
  { file: "assets/projects/p33-01-metal-fabrication.jpg", w: 923, h: 854, cat: "awam", label: "Fabrikasi Logam & Jeriji Keselamatan", bg1: "#1c1917", bg2: "#292524", accent: "#f97316" },
  { file: "assets/projects/p33-02-outdoor-air-conditioning.jpg", w: 593, h: 854, cat: "mekanikal", label: "Unit Pemampat Pendingin Hawa Luaran", bg1: "#0c4a6e", bg2: "#082f49", accent: "#38bdf8" },
  { file: "assets/projects/p33-03-industrial-doorway.jpg", w: 737, h: 716, cat: "awam", label: "Pintu Industri & Partition Kawalan", bg1: "#1e293b", bg2: "#0f172a", accent: "#f59e0b" },
  { file: "assets/projects/p33-04-warehouse-cable-tray.jpg", w: 779, h: 561, cat: "elektrikal", label: "Dulang Kabel Gudang Industri Skala Besar", bg1: "#0f172a", bg2: "#1e3a8a", accent: "#38bdf8" },
  { file: "assets/projects/p33-05-industrial-mesh-partition.jpg", w: 778, h: 560, cat: "awam", label: "Pemisah Dawai Keluli Keselamatan Mesin", bg1: "#1e293b", bg2: "#334155", accent: "#94a3b8" },
  { file: "assets/projects/p33-06-interior-fitout.jpg", w: 737, h: 407, cat: "awam", label: "Ubah Suai Dalaman & Siling Gantung", bg1: "#1c1917", bg2: "#44403c", accent: "#d97706" },
  { file: "assets/projects/p34-01-electrical-panel-conduits.jpg", w: 626, h: 860, cat: "elektrikal", label: "Laluan Konduit Menuju Panel Kawalan", bg1: "#0f172a", bg2: "#1e293b", accent: "#38bdf8" },
  { file: "assets/projects/p34-02-wiring-installation.jpg", w: 905, h: 1049, cat: "elektrikal", label: "Penarikan Pendawaian Elektrik Berkuasa Tinggi", bg1: "#090d16", bg2: "#1e3a8a", accent: "#60a5fa" },
  { file: "assets/projects/p34-03-wall-cable-routing.jpg", w: 626, h: 472, cat: "elektrikal", label: "Laluan Pendawaian Kemas Dinding Bangunan", bg1: "#0f172a", bg2: "#1e293b", accent: "#60a5fa" },
  { file: "assets/projects/p34-04-metering-equipment.jpg", w: 904, h: 440, cat: "elektrikal", label: "Peralatan Meter & Pengukuran TNB", bg1: "#111827", bg2: "#1f2937", accent: "#eab308" },
  { file: "assets/projects/p34-05-control-panel.jpg", w: 627, h: 648, cat: "elektrikal", label: "Panel Kawalan & Automasi Industri", bg1: "#0f172a", bg2: "#1e293b", accent: "#22c55e" },
  { file: "assets/projects/p34-06-power-cable-tray.jpg", w: 905, h: 501, cat: "elektrikal", label: "Pemasangan Kabel Kuasa Voltan Rendah Atas Trunking", bg1: "#0f172a", bg2: "#1e3a8a", accent: "#38bdf8" },
  { file: "assets/projects/p35-01-ceiling-scaffolding.jpg", w: 624, h: 888, cat: "elektrikal", label: "Pemasangan Siling Tinggi Melalui Perancah", bg1: "#1e293b", bg2: "#0f172a", accent: "#f59e0b" },
  { file: "assets/projects/p35-02-architectural-lighting.jpg", w: 905, h: 649, cat: "elektrikal", label: "Pencahayaan Seni Bina Ikonik Saloma Link KL", bg1: "#022c22", bg2: "#064e3b", accent: "#34d399" },
  { file: "assets/projects/p35-03-warehouse-cable-tray-repeat.jpg", w: 905, h: 565, cat: "elektrikal", label: "Laluan Dulang Kabel Gudang Simpanan", bg1: "#0f172a", bg2: "#1e3a8a", accent: "#38bdf8" },
  { file: "assets/projects/p35-04-technician-conduit-work.jpg", w: 628, h: 537, cat: "elektrikal", label: "Juruteknik Memasang Konduit Elektrik", bg1: "#0f172a", bg2: "#1e293b", accent: "#38bdf8" },
  { file: "assets/projects/p35-05-technician-panel-work.jpg", w: 446, h: 793, cat: "elektrikal", label: "Penentukuran & Pendawaian Panel Kuasa", bg1: "#111827", bg2: "#1e293b", accent: "#eab308" },
  { file: "assets/projects/p35-06-utility-room.jpg", w: 423, h: 794, cat: "elektrikal", label: "Bilik Utiliti Suis Utama Bangunan", bg1: "#0f172a", bg2: "#1e293b", accent: "#60a5fa" },
  { file: "assets/projects/p35-07-cable-drums.jpg", w: 628, h: 558, cat: "elektrikal", label: "Gelendong Kabel Berperisai Kuasa Voltan Rendah", bg1: "#1e293b", bg2: "#334155", accent: "#f59e0b" },
  { file: "assets/projects/p36-01-industrial-pipework.jpg", w: 623, h: 655, cat: "mekanikal", label: "Rangkaian Paip Perindustrian & Penyejukan", bg1: "#042f2e", bg2: "#115e59", accent: "#2dd4bf" },
  { file: "assets/projects/p36-02-valve-installation.jpg", w: 910, h: 655, cat: "mekanikal", label: "Pemasangan Injap Kawalan & Tekanan Cecair", bg1: "#450a0a", bg2: "#7f1d1d", accent: "#f87171" },
  { file: "assets/projects/p36-03-plant-equipment.jpg", w: 1560, h: 543, cat: "mekanikal", label: "Peralatan Loji Industri & Sistem Mekanikal Berat", bg1: "#082f49", bg2: "#0c4a6e", accent: "#38bdf8" },
  { file: "assets/projects/p36-04-pipework-technician.jpg", w: 623, h: 783, cat: "mekanikal", label: "Pemeriksaan Sambungan Paip Mekanikal", bg1: "#042f2e", bg2: "#0f766e", accent: "#2dd4bf" },
  { file: "assets/projects/p36-05-pump-system.jpg", w: 911, h: 784, cat: "mekanikal", label: "Sistem Rumah Pam Industri & Manifold Tekanan", bg1: "#082f49", bg2: "#0369a1", accent: "#38bdf8" }
];

const targetDir = path.resolve('public/assets/projects');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log(`Generating ${imageList.length} project image files...`);

for (const img of imageList) {
  const filename = path.basename(img.file);
  const outPath = path.join(targetDir, filename);

  // Generate clean, high-contrast engineering illustration card as JPEG
  const cmd = `convert -size ${img.w}x${img.h} gradient:"${img.bg1}"-"${img.bg2}" \
    -stroke "${img.accent}" -strokewidth 2 -fill none -draw "rectangle 20,20 ${img.w - 20},${img.h - 20}" \
    -stroke "${img.accent}44" -strokewidth 1 -fill none -draw "line 20,${Math.floor(img.h / 2)} ${img.w - 20},${Math.floor(img.h / 2)}" \
    -stroke "${img.accent}44" -strokewidth 1 -fill none -draw "line ${Math.floor(img.w / 2)},20 ${Math.floor(img.w / 2)},${img.h - 20}" \
    -fill "${img.accent}" -draw "circle ${Math.floor(img.w / 2)},${Math.floor(img.h / 2)} ${Math.floor(img.w / 2)},${Math.floor(img.h / 2) - 40}" \
    -fill "#ffffff" -font Helvetica-Bold -pointsize ${Math.max(20, Math.floor(img.w / 30))} -gravity center -draw "text 0,${Math.floor(img.h * 0.18)} '${img.label}'" \
    -fill "${img.accent}" -font Helvetica -pointsize ${Math.max(14, Math.floor(img.w / 45))} -gravity center -draw "text 0,${Math.floor(img.h * 0.28)} 'SF RAUDHAH GLOBAL • ${img.cat.toUpperCase()}'" \
    "${outPath}"`;

  try {
    execSync(cmd);
  } catch (err) {
    console.error(`Error generating ${filename}:`, err.message);
  }
}

console.log('All project images generated successfully.');
