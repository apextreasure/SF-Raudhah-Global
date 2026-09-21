export interface ImageMapItem {
  file: string;
  page: number;
  alt_ms: string;
  category: 'elektrikal' | 'mekanikal' | 'awam' | 'ict' | 'keselamatan' | 'am';
  placements: string[];
  dimensions: {
    width: number;
    height: number;
  };
  duplicate_of?: string;
  featuredTitle?: string;
}

export const categoryLabels: Record<ImageMapItem['category'], string> = {
  elektrikal: 'Elektrikal',
  mekanikal: 'Mekanikal & Penyaman Udara',
  awam: 'Awam & Struktur',
  ict: 'ICT & CCTV',
  keselamatan: 'Keselamatan',
  am: 'Am',
};

export const imageMapData: ImageMapItem[] = [
  {
    file: "assets/projects/p30-01-site-scaffolding.jpg",
    page: 30,
    alt_ms: "Perancah tapak projek pembinaan dan penyelenggaraan",
    category: "awam",
    placements: ["portfolio", "civil"],
    dimensions: { width: 734, height: 1300 },
    featuredTitle: "Pemasangan Perancah Tapak Industri"
  },
  {
    file: "assets/projects/p30-02-metal-cutting.jpg",
    page: 30,
    alt_ms: "Kerja pemotongan dan fabrikasi logam di tapak",
    category: "awam",
    placements: ["portfolio", "civil"],
    dimensions: { width: 778, height: 755 },
    featuredTitle: "Fabrikasi & Pemotongan Logam Struktur"
  },
  {
    file: "assets/projects/p30-03-interior-led-lighting.jpg",
    page: 30,
    alt_ms: "Pemasangan lampu LED dalaman siling komersial",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 779, height: 563 },
    featuredTitle: "Pencahayaan LED Siling Komersial"
  },
  {
    file: "assets/projects/p30-04-illuminated-walkway.jpg",
    page: 30,
    alt_ms: "Laluan pejalan kaki berlampu projek Saloma Link",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 735, height: 709 },
    featuredTitle: "Pencahayaan Laluan Pejalan Kaki Saloma Link"
  },
  {
    file: "assets/projects/p30-05-elevated-walkway-construction.jpg",
    page: 30,
    alt_ms: "Pembinaan struktur jejantas pejalan kaki bertingkat",
    category: "awam",
    placements: ["portfolio", "civil"],
    dimensions: { width: 783, height: 651 },
    featuredTitle: "Struktur Jejantas Pejalan Kaki Bertingkat"
  },
  {
    file: "assets/projects/p31-01-overhead-installation.jpg",
    page: 31,
    alt_ms: "Pemasangan perkhidmatan atas kepala di kemudahan perindustrian",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 782, height: 567 },
    featuredTitle: "Pemasangan Kabel Atas Kepala Industri"
  },
  {
    file: "assets/projects/p31-02-industrial-cable-containment.jpg",
    page: 31,
    alt_ms: "Sistem pembendungan kabel dan dulang kabel industri",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 740, height: 714 },
    featuredTitle: "Sistem Pembendungan Kabel Industri"
  },
  {
    file: "assets/projects/p31-03-technicians-elevated-platform.jpg",
    page: 31,
    alt_ms: "Juruteknik bertugas di atas platform angkat hidraulik",
    category: "keselamatan",
    placements: ["about", "portfolio"],
    dimensions: { width: 782, height: 591 },
    featuredTitle: "Operasi Platform Bertingkat & Keselamatan Tapak"
  },
  {
    file: "assets/projects/p31-04-warehouse-installation.jpg",
    page: 31,
    alt_ms: "Pemasangan kemudahan elektrik dan pencahayaan gudang",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 740, height: 683 },
    featuredTitle: "Pemasangan Pendawaian & Pencahayaan Gudang"
  },
  {
    file: "assets/projects/p31-05-distribution-board-termination.jpg",
    page: 31,
    alt_ms: "Penamatan kabel dan pengagihan kuasa pada papan agihan elektrik (DB)",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 783, height: 821 },
    featuredTitle: "Penamatan Papan Agihan Elektrik (DB)"
  },
  {
    file: "assets/projects/p31-06-electrical-components.jpg",
    page: 31,
    alt_ms: "Komponen dan aksesori pepasangan elektrik",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 740, height: 574 },
    featuredTitle: "Komponen Kawalan Elektrik Berkualiti"
  },
  {
    file: "assets/projects/p32-01-industrial-conduits.jpg",
    page: 32,
    alt_ms: "Rangkaian paip air di kawasan industri",
    category: "mekanikal",
    placements: ["portfolio", "mechanical"],
    dimensions: { width: 735, height: 709 },
    featuredTitle: "Rangkaian Paip Air"
  },
  {
    file: "assets/projects/p32-02-switchboard-testing.jpg",
    page: 32,
    alt_ms: "Pemeriksaan dan pengujian papan suis utama (MSB)",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 779, height: 709 },
    featuredTitle: "Pengujian Papan Suis Utama (MSB)"
  },
  {
    file: "assets/projects/p32-03-industrial-access-area.jpg",
    page: 32,
    alt_ms: "Kemudahan pencuci mata kecemasan di kawasan kerja",
    category: "keselamatan",
    placements: ["portfolio", "safety"],
    dimensions: { width: 735, height: 688 },
    featuredTitle: "Pencuci Mata Kecemasan"
  },
  {
    file: "assets/projects/p32-04-overhead-services.jpg",
    page: 32,
    alt_ms: "Laluan perkhidmatan paip dan kabel atas siling",
    category: "mekanikal",
    placements: ["portfolio", "mechanical"],
    dimensions: { width: 778, height: 688 },
    featuredTitle: "Laluan Paip & Perkhidmatan Mekanikal Overhead"
  },
  {
    file: "assets/projects/p32-05-vertical-cable-tray.jpg",
    page: 32,
    alt_ms: "Dulang kabel menegak pada dinding bangunan industri",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 735, height: 571 },
    featuredTitle: "Dulang Kabel Menegak Dinding Bangunan"
  },
  {
    file: "assets/projects/p32-06-indoor-air-conditioning.jpg",
    page: 32,
    alt_ms: "Pemasangan unit pendingin hawa dalaman komersial",
    category: "mekanikal",
    placements: ["portfolio", "mechanical"],
    dimensions: { width: 777, height: 571 },
    featuredTitle: "Pemasangan Unit Pendingin Hawa Dalaman (VRF/Split)"
  },
  {
    file: "assets/projects/p33-01-metal-fabrication.jpg",
    page: 33,
    alt_ms: "Fabrikasi struktur keluli dan kerja besi keselamatan",
    category: "awam",
    placements: ["civil", "portfolio"],
    dimensions: { width: 923, height: 854 },
    featuredTitle: "Fabrikasi Struktur Keluli & Pagar Keselamatan"
  },
  {
    file: "assets/projects/p33-02-outdoor-air-conditioning.jpg",
    page: 33,
    alt_ms: "Unit luar pemampat pendingin hawa luaran komersial",
    category: "mekanikal",
    placements: ["portfolio", "mechanical"],
    dimensions: { width: 593, height: 854 },
    featuredTitle: "Pemasangan Unit Pemampat Pendingin Hawa Luaran"
  },
  {
    file: "assets/projects/p33-03-industrial-doorway.jpg",
    page: 33,
    alt_ms: "Pengesan logam untuk pemeriksaan keselamatan di laluan masuk",
    category: "keselamatan",
    placements: ["portfolio", "safety"],
    dimensions: { width: 737, height: 716 },
    featuredTitle: "Pengesan Logam Keselamatan"
  },
  {
    file: "assets/projects/p33-04-warehouse-cable-tray.jpg",
    page: 33,
    alt_ms: "Pemasangan dulang kabel dan laluan bekalan kuasa gudang industri berkapasiti tinggi",
    category: "elektrikal",
    placements: ["hero", "portfolio", "electrical"],
    dimensions: { width: 779, height: 561 },
    featuredTitle: "Dulang Kabel Gudang Industri Skala Besar"
  },
  {
    file: "assets/projects/p33-05-industrial-mesh-partition.jpg",
    page: 33,
    alt_ms: "Pemisah keselamatan dawai keluli kawasan peralatan industri",
    category: "awam",
    placements: ["portfolio", "civil"],
    dimensions: { width: 778, height: 560 },
    featuredTitle: "Pemisah Dawai Keluli Keselamatan Mesin"
  },
  {
    file: "assets/projects/p33-06-interior-fitout.jpg",
    page: 33,
    alt_ms: "Kerja pengubahsuaian dalaman dan siling gantung komersial",
    category: "awam",
    placements: ["portfolio", "civil"],
    dimensions: { width: 737, height: 407 },
    featuredTitle: "Kerja Pengubahsuaian Dalaman & Siling Gantung"
  },
  {
    file: "assets/projects/p34-01-electrical-panel-conduits.jpg",
    page: 34,
    alt_ms: "Laluan konduit elektrik bersambung ke panel kawalan",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 626, height: 860 },
    featuredTitle: "Penyusunan Konduit Menuju Panel Kawalan"
  },
  {
    file: "assets/projects/p34-02-wiring-installation.jpg",
    page: 34,
    alt_ms: "Kerja pemasangan dan penarikan pendawaian elektrik industri teratur",
    category: "elektrikal",
    placements: ["electrical", "portfolio"],
    dimensions: { width: 905, height: 1049 },
    featuredTitle: "Kerja Penarikan Pendawaian Elektrik Berkuasa Tinggi"
  },
  {
    file: "assets/projects/p34-03-wall-cable-routing.jpg",
    page: 34,
    alt_ms: "Laluan pendawaian kabel kemas di sepanjang dinding bangunan",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 626, height: 472 },
    featuredTitle: "Laluan Pendawaian Kemas Dinding Bangunan"
  },
  {
    file: "assets/projects/p34-04-metering-equipment.jpg",
    page: 34,
    alt_ms: "Monitor paparan CCTV dan rak peralatan pemantauan",
    category: "ict",
    placements: ["portfolio", "ict"],
    dimensions: { width: 904, height: 440 },
    featuredTitle: "Monitor CCTV & Rak Peralatan"
  },
  {
    file: "assets/projects/p34-05-control-panel.jpg",
    page: 34,
    alt_ms: "Panel kawalan automasi dan instrumentasi industri",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 627, height: 648 },
    featuredTitle: "Panel Kawalan & Automasi Industri"
  },
  {
    file: "assets/projects/p34-06-power-cable-tray.jpg",
    page: 34,
    alt_ms: "Pemasangan kabel kuasa voltan rendah pada dulang sokongan keluli",
    category: "elektrikal",
    placements: ["cable", "portfolio", "electrical"],
    dimensions: { width: 905, height: 501 },
    featuredTitle: "Pemasangan Kabel Kuasa Voltan Rendah Atas Trunking"
  },
  {
    file: "assets/projects/p35-01-ceiling-scaffolding.jpg",
    page: 35,
    alt_ms: "Kerja pemasangan lampu dan kabel pada perancah siling tinggi",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 624, height: 888 },
    featuredTitle: "Pemasangan Siling Tinggi Melalui Perancah"
  },
  {
    file: "assets/projects/p35-02-architectural-lighting.jpg",
    page: 35,
    alt_ms: "Pencahayaan seni bina moden ikonik di Saloma Link Kuala Lumpur",
    category: "elektrikal",
    placements: ["featured", "portfolio", "electrical"],
    dimensions: { width: 905, height: 649 },
    featuredTitle: "Pencahayaan Seni Bina Ikonik Saloma Link KL"
  },
  {
    file: "assets/projects/p35-03-warehouse-cable-tray-repeat.jpg",
    page: 35,
    alt_ms: "Dulang kabel gudang industri (cetakan ulang buku profil)",
    category: "elektrikal",
    placements: ["portfolio"],
    dimensions: { width: 905, height: 565 },
    duplicate_of: "assets/projects/p33-04-warehouse-cable-tray.jpg",
    featuredTitle: "Laluan Dulang Kabel Gudang Simpanan"
  },
  {
    file: "assets/projects/p35-04-technician-conduit-work.jpg",
    page: 35,
    alt_ms: "Juruteknik memasang konduit elektrik dengan peralatan keselamatan lengkap",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 628, height: 537 },
    featuredTitle: "Juruteknik Memasang Konduit Elektrik"
  },
  {
    file: "assets/projects/p35-05-technician-panel-work.jpg",
    page: 35,
    alt_ms: "Juruteknik membuat kerja pendawaian dan penentukuran panel kuasa",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 446, height: 793 },
    featuredTitle: "Penentukuran & Pendawaian Panel Kuasa"
  },
  {
    file: "assets/projects/p35-06-utility-room.jpg",
    page: 35,
    alt_ms: "Bilik utiliti dan suis utama suis kawalan bangunan",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 423, height: 794 },
    featuredTitle: "Bilik Utiliti Suis Utama Bangunan"
  },
  {
    file: "assets/projects/p35-07-cable-drums.jpg",
    page: 35,
    alt_ms: "Gelendong drum kabel kuasa berperisai sedia untuk pemasangan",
    category: "elektrikal",
    placements: ["portfolio", "electrical"],
    dimensions: { width: 628, height: 558 },
    featuredTitle: "Gelendong Kabel Berperisai Kuasa Voltan Rendah"
  },
  {
    file: "assets/projects/p36-01-industrial-pipework.jpg",
    page: 36,
    alt_ms: "Rangkaian paip perindustrian dan penyejukan cecair loji",
    category: "mekanikal",
    placements: ["portfolio", "mechanical"],
    dimensions: { width: 623, height: 655 },
    featuredTitle: "Rangkaian Paip Perindustrian & Penyejukan"
  },
  {
    file: "assets/projects/p36-02-valve-installation.jpg",
    page: 36,
    alt_ms: "Pemasangan injap kawalan tekanan dan sistem paip mekanikal",
    category: "mekanikal",
    placements: ["portfolio", "mechanical"],
    dimensions: { width: 910, height: 655 },
    featuredTitle: "Pemasangan Injap Kawalan & Tekanan Cecair"
  },
  {
    file: "assets/projects/p36-03-plant-equipment.jpg",
    page: 36,
    alt_ms: "Peralatan loji industri dan sistem mekanikal sokongan berat",
    category: "mekanikal",
    placements: ["portfolio", "mechanical"],
    dimensions: { width: 1560, height: 543 },
    featuredTitle: "Peralatan Loji Industri & Sistem Mekanikal Berat"
  },
  {
    file: "assets/projects/p36-04-pipework-technician.jpg",
    page: 36,
    alt_ms: "Juruteknik memeriksa saluran dan sambungan paip pam",
    category: "mekanikal",
    placements: ["portfolio", "mechanical"],
    dimensions: { width: 623, height: 783 },
    featuredTitle: "Pemeriksaan Sambungan Paip Mekanikal"
  },
  {
    file: "assets/projects/p36-05-pump-system.jpg",
    page: 36,
    alt_ms: "Sistem pam industri, manifold tekanan dan paip saliran mekanikal",
    category: "mekanikal",
    placements: ["mechanical", "portfolio"],
    dimensions: { width: 911, height: 784 },
    featuredTitle: "Sistem Rumah Pam Industri & Manifold Tekanan"
  }
];

// Keep source records and indices intact for existing page consumers.
const featuredFiles = [
  'assets/projects/p35-02-architectural-lighting.jpg',
  'assets/projects/p33-04-warehouse-cable-tray.jpg',
  'assets/projects/p36-05-pump-system.jpg',
  'assets/projects/p33-01-metal-fabrication.jpg',
];

export const orderGalleryImages = (images: ImageMapItem[]) =>
  images.filter((image) => !image.duplicate_of).sort((a, b) => {
    const rank = (file: string) => {
      const index = featuredFiles.indexOf(file);
      return index === -1 ? featuredFiles.length : index;
    };
    return rank(a.file) - rank(b.file);
  });

export const galleryImages = orderGalleryImages(imageMapData);
