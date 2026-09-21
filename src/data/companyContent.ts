export const companyInfo = {
  name: "SF RAUDHAH GLOBAL",
  tagline: "Penyelesaian Kejuruteraan Mekanikal, Elektrikal & Ubah Suai Bangunan Bersepadu",
  // Company profile, May 2026, pages 4 and 7. Founding and registration are distinct.
  registrationNo: "201903331960 (SA0535460-D)",
  registrationDate: "29 November 2019",
  foundedDate: "25 Julai 2016",
  foundedYear: 2016,
  businessType: "Milikan tunggal",
  ownership: "100% Milik Bumiputera",
  address: "No. 1, Jalan Niaga Bestari 7, Puncak Bestari, 42300 Bandar Puncak Alam, Selangor Darul Ehsan",
  phones: [
    { label: "Panggilan & WhatsApp 1", number: "+60166000127", display: "+60 16-600 0127" },
    { label: "Panggilan & WhatsApp 2", number: "+601110820127", display: "+60 11-1082 0127" },
    { label: "Talian Pejabat", number: "+60333964016", display: "03-3396 4016" }
  ],
  whatsappPrimary: "+60166000127",
  email: "sfraudhahglobal@gmail.com",
  website: "www.sfraudhahglobal.com",
  // Banking details withheld until the owner verifies conflicting sources.
  // Verbatim wording from page 5; PDF line wraps removed.
  mission: "Sedia berkhidmat, berdaya maju dan berdaya saing dalam bidang yang kami ceburi,menyediakan perkhidmatan yang berkualiti dan fleksibel bagi mencapai tahap kepuasan pelanggan kami.",
  vision: "Ingin membawa nama dan produk syarikat kami lebih maju kedepan agar menjadi sebuah syarikat yang terulung dan dinamik menerusi pakatan berpasukan yang teguh dan mantap.",
  objectives: [
    "Menyampaikan setiap projek mengikut jadual yang dipersetujui tanpa menjejaskan piawaian kualiti.",
    "Mematuhi piawaian Keselamatan, Kesihatan dan Alam Sekitar (HSE) secara ketat di semua tapak kerja.",
    "Membina hubungan jangka panjang berasaskan kepercayaan, integriti dan ketelusan bersama pelanggan serta rakan strategik.",
    "Mengukuhkan kepakaran tenaga mahir tempatan dalam bidang teknologi kejuruteraan M&E terkini."
  ],
  serviceAreas: [
    "Selangor (Subang Jaya, Shah Alam, Petaling Jaya, Klang, Sepang, Cyberjaya, Rawang, Gombak)",
    "Wilayah Persekutuan Kuala Lumpur & Putrajaya",
    "Negeri Sembilan (Seremban, Senawang)",
    "Pahang (Kuantan, Bentong, Jengka)",
    "Johor (Batu Pahat, Pagoh)",
    "Kedah (Sik)",
    "Seluruh Semenanjung Malaysia untuk projek berskala komersial & industri"
  ]
};

// Names, roles and reporting lines transcribed visually from PDF page 9.
export const organizationStructure = [
  { id: 'director', role: 'Pengarah Urusan', name: 'Pn Siti Zabedah Binti Abdul Wahab', reportsTo: null },
  { id: 'manager', role: 'Pengurus', name: 'En Mohamed Fairus Bin K.M Ameer Sultan', reportsTo: 'director' },
  { id: 'assistant', role: 'Penolong Pengurus', name: 'Mohd Ashraf Bin Johari', reportsTo: 'manager' },
  { id: 'admin', role: 'Pembantu Pentadbiran / Sumber Manusia', name: 'Pn Salwani Hakiim Binti Rahim', reportsTo: 'manager' },
  { id: 'engineer', role: 'Jurutera', name: 'En Kamaludin Bin Abdillah', reportsTo: 'assistant' },
  { id: 'supervisor', role: 'Penyelia', name: 'Saravana a/l Murugese', reportsTo: 'assistant' },
  { id: 'technician', role: 'Juruteknik Elektrikal', name: 'Muhammad Aidil Fikri Bin Mohamad', reportsTo: 'supervisor' },
  { id: 'worker-1', role: 'General Worker', name: 'Prakash a/l R.Murugese', reportsTo: 'technician' },
  { id: 'worker-2', role: 'General Worker', name: 'Balajhee a/l Periasamy', reportsTo: 'technician' },
  { id: 'worker-3', role: 'General Worker', name: 'Tamilarasan a/l Balasegaran', reportsTo: 'technician' },
  { id: 'worker-4', role: 'General Worker', name: 'Karthik a/l Ragunathan', reportsTo: 'technician' }
];

// Founders identified on page 4; current titles are those printed on page 9.
export const leadershipData = [
  {
    name: organizationStructure[0].name,
    role: organizationStructure[0].role,
    description: 'Puan Siti Zabedah merupakan pengasas bersama SF Raudhah Global, yang ditubuhkan pada 25 Julai 2016.',
    initials: 'SZ'
  },
  {
    name: organizationStructure[1].name,
    role: organizationStructure[1].role,
    description: 'Encik Fairus Ameer merupakan pengasas bersama SF Raudhah Global. Penubuhan perniagaan ini adalah hasil buah fikiran beliau dan Puan Siti Zabedah.',
    initials: 'MF'
  }
];

export const keyAchievements = [
  {
    title: "Pencahayaan Seni Bina Saloma Link",
    location: "Kuala Lumpur",
    client: "Pima Tech Services Sdn Bhd",
    category: "Elektrikal & Seni Bina",
    highlight: "Pepasangan lampu seni bina berteknologi tinggi pada mercu tanda jambatan ikonik ibu negara.",
    image: "/assets/projects/p35-02-architectural-lighting.jpg"
  },
  {
    title: "MRT Laluan 2 (Laluan Putrajaya) — Stesen UPM",
    location: "Serdang / Shah Alam",
    client: "Duta Technic Sdn Bhd",
    category: "Infrastruktur Pengangkutan Rel",
    highlight: "Pembekalan, pemasangan dan pengujian sistem elektrik stesen MRT, TPSS, BSS dan bangunan utiliti rel.",
    image: "/assets/projects/p31-04-warehouse-installation.jpg"
  },
  {
    title: "Terminal Kargo Udara KLIA (KACT1) & Kompleks Raya Airways",
    location: "KLIA, Sepang",
    client: "Raya Airways Sdn Bhd",
    category: "Komersial & Penerbangan",
    highlight: "Kontrak berulang pengubahsuaian, elektrikal, IT dan pendawaian kemudahan gudang kargo zon terhad udara.",
    image: "/assets/projects/p33-04-warehouse-cable-tray.jpg"
  },
  {
    title: "Loji Kilang Percetakan Keselamatan Negara (PKN)",
    location: "Bandar Baru Bangi, Selangor",
    client: "Tetuan Percetakan Keselamatan Negara Sdn. Bhd.",
    category: "Industri Keselamatan Negara",
    highlight: "7 fasa projek menaik taraf submain kuasa, pemasangan mesin berkuasa tinggi (Phoenix IV), modifikasi panel 800A dan HVAC.",
    image: "/assets/projects/p34-02-wiring-installation.jpg"
  },
  {
    title: "Ladang Solar Skala Besar 30MW AC",
    location: "Sik, Kedah",
    client: "Penyedia Tenaga Boleh Baharu",
    category: "Tenaga Boleh Baharu (Solar)",
    highlight: "Pembangunan ladang solar fotovoltaik seluas 100 ekar berkapasiti 30MW AC.",
    image: "/assets/projects/p31-02-industrial-cable-containment.jpg"
  },
  {
    title: "Pusat Akuatik Darul Ehsan — Sistem ELV",
    location: "Shah Alam, Selangor",
    client: "Pusat Akuatik Darul Ehsan",
    category: "Kemudahan Awam & Sukan",
    highlight: "Kerja baik pulih dan naik taraf sistem voltan ekstra rendah (ELV) kompleks akuatik antarabangsa.",
    image: "/assets/projects/p30-03-interior-led-lighting.jpg"
  }
];

export const detailedServices = [
  {
    id: "elektrikal",
    title: "Kejuruteraan Elektrik",
    slug: "elektrikal",
    shortDesc: "Penyelesaian voltan rendah (LV) menyeluruh merangkumi papan suis, pendawaian industri, kabel berperisai, pencahayaan dan perlindungan kilat.",
    heroImage: "/assets/projects/p34-02-wiring-installation.jpg",
    features: [
      "Pemasangan & Penamatan Papan Suis Utama (MSB) & Papan Agihan (DB)",
      "Pemasangan Kabel Kuasa Berperisai (Armoured Cable 4 x 300mm sq) & Penarikan Bawah Tanah",
      "Sistem Dulang Kabel (Cable Tray), Trunking Logam & Konduit Industri",
      "Pendawaian Premis Komersial, Kilang, Pejabat & Institusi",
      "Pencahayaan LED Industri, Ruang Niaga & Pencahayaan Seni Bina",
      "Sistem Pembumian (Earthing) & Perlindungan Kilat Bangunan",
      "Pengubahsuaian Panel Kawalan Pam & Mesin Industri",
      "Permohonan Bekalan Baru & Naik Taraf Sub-Meter TNB"
    ],
    sampleProjects: [
      "MRT Laluan 2 Pakej S20 Stesen UPM",
      "Saloma Link M&E & Architectural Lighting",
      "Selangor Industrial Corporation — ACDB & Pencahayaan LED",
      "Percetakan Keselamatan Negara (PKN) — Panel 800A & Mesin Phoenix IV"
    ]
  },
  {
    id: "mekanikal",
    title: "Kejuruteraan Mekanikal & HVAC",
    slug: "mekanikal",
    shortDesc: "Sistem pendingin hawa komersial, rangkaian paip industri, loji pam, sistem saliran cecair dan pengudaraan mekanikal terancang.",
    heroImage: "/assets/projects/p36-05-pump-system.jpg",
    features: [
      "Pemasangan & Penyelenggaraan Sistem Pendingin Hawa Komersial (Split, VRF, Chiller)",
      "Rangkaian Paip Industri & Paip Penyejuk Cecair Loji",
      "Pemasangan Sistem Rumah Pam, Manifold Tekanan & Injap Kawalan (Valve)",
      "Sistem Saliran Mekanikal & Perpaipan Utiliti Bangunan",
      "Sistem Pengudaraan Mekanikal (Mechanical Ventilation) Kilang & Gudang",
      "Pengujian Tekanan & Pemeriksaan Integriti Saluran Paip"
    ],
    sampleProjects: [
      "Sistem Rumah Pam & Saliran Fima Instanco Sdn Bhd",
      "Sistem Pendingin Hawa Blok 5 Percetakan Keselamatan Negara",
      "Saluran Paip Utiliti & Penyejukan Loji Industri",
      "Sistem Rawatan & Paip Sokongan Pusat Akuatik"
    ]
  },
  {
    id: "ict",
    title: "ICT & Sistem Ekstra Rendah (ELV)",
    slug: "ict",
    shortDesc: "Infrastruktur telekomunikasi gentian optik FTTH, rangkaian kabel berstruktur, kamera litar tertutup (CCTV) dan keselamatan premis.",
    heroImage: "/assets/projects/p34-04-metering-equipment.jpg", // Original CCTV monitor photo; verified in the gallery asset map.
    features: [
      "Pemasangan & Pengujian Kabel Gentian Optik (FTTH Drop Cable Deployment)",
      "Kabel Berstruktur Rangkaian Dalaman (Structured Cabling Cat6/Cat6A)",
      "Sistem Kamera Litar Tertutup (CCTV) Analog & IP Berdefinisi Tinggi",
      "Sistem Kawalan Akses Pintu Keselamatan (Access Control System)",
      "Sistem Panggilan Kecemasan & Interkom Premis",
      "Sistem Extra Low Voltage (ELV) Bersepadu untuk Kompleks Awam & Stadium"
    ],
    sampleProjects: [
      "FTTH Broadband Deployment Aurora 300 Unit Cyberjaya",
      "Naik Taraf CCTV Soccer Inc Training Centre (Selangor Industrial Corporation)",
      "Sistem Extra Low Voltage (ELV) Pusat Akuatik Darul Ehsan",
      "Pemasangan Kabel Rangkaian IT Airside Cargo Terminal KLIA"
    ]
  },
  {
    id: "awam",
    title: "Kejuruteraan Awam & Ubah Suai",
    slug: "awam",
    shortDesc: "Kerja-kerja struktur keluli, fabrikasi logam, pemasangan perancah (scaffolding), ubah suai dalaman komersial dan penurapan tapak.",
    heroImage: "/assets/projects/p33-01-metal-fabrication.jpg",
    features: [
      "Fabrikasi & Pemasangan Struktur Keluli, Jeriji dan Pagar Keselamatan",
      "Penyediaan Perancah (Scaffolding) Mengikut Piawaian DOSH/JKKP",
      "Kerja Ubah Suai Dalaman (Fit-out) Ruang Pejabat, Butik & Fasiliti",
      "Pemasangan Dinding Partisi Kering, Partition Jaring Logam & Siling Gantung",
      "Kerja-kerja Pemotongan Jalan (Road Cutting), Parit Kabel & Kerja Penurapan",
      "Kerja-kerja IBS (Industrialised Building System) Bangunan Sekolah"
    ],
    sampleProjects: [
      "Pengubahsuaian Jabatan Kebajikan Masyarakat Negeri (JKMN) Pahang",
      "Pembinaan Sekolah Secara IBS SK Ulu Yam Lama",
      "Builder Works Spirit Aerosystem Lapangan Terbang Subang",
      "Ubah Suai & Pembaikan Kilang Percetakan Keselamatan Negara"
    ]
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Konsultasi & Penilaian",
    desc: "Hubungi kami melalui WhatsApp atau talian pejabat. Kami membincangkan keperluan skop kerja, spesifikasi lukisan pelan atau lawatan tapak awal secara terperinci."
  },
  {
    step: "02",
    title: "Cadangan Teknikal & Sebut Harga",
    desc: "Pasukan jurutera kami menyediakan cadangan kaedah kerja (method statement), pemilihan material berspesifikasi piawaian, dan sebut harga terperinci yang telus."
  },
  {
    step: "03",
    title: "Pelaksanaan & Keselamatan Tapak",
    desc: "Kerja dilaksanakan oleh juruteknik kompeten dengan pematuhan ketat terhadap piawaian keselamatan (HSE), kawalan kualiti, dan jadual masa yang dipersetujui."
  },
  {
    step: "04",
    title: "Pengujian, Pentauliahan & Penyerahan",
    desc: "Ujian menyeluruh (Testing & Commissioning) dijalankan bagi memastikan sistem beroperasi sempurna sebelum penyerahan dokumentasi siap kerja kepada klien."
  }
];
