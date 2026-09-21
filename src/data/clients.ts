export interface ClientRecord {
  source_no: number;
  name_as_printed: string;
}

export const rawClientsData: ClientRecord[] = [
  { source_no: 1, name_as_printed: "GENTING MALAYSIA BERHAD" },
  { source_no: 2, name_as_printed: "AEGIS BPO MALAYSIA SDN. BHD" },
  { source_no: 3, name_as_printed: "PIMA TECH SERVICES SDN BHD" },
  { source_no: 4, name_as_printed: "DUTA TECHNIC SDN BHD" },
  { source_no: 5, name_as_printed: "SAND CASTLE RESOURCES SDN BHD" },
  { source_no: 6, name_as_printed: "BUTIK EXCLUSIVE AQI DESIGN SDN BHD" },
  { source_no: 7, name_as_printed: "TEMPLER PARK INTERNATIONAL SCHOOL" },
  { source_no: 8, name_as_printed: "SELANGOR INDUSTRIAL CORPORATION SDN BHD" },
  { source_no: 9, name_as_printed: "PASTI IMTIYAZ WANGSA MAJU" },
  { source_no: 10, name_as_printed: "AMANAH IKHTIAR MALAYSIA" },
  { source_no: 11, name_as_printed: "TGOOD SOUTHEAST ASIA SDN. BHD" },
  { source_no: 12, name_as_printed: "RAYA AIRWAYS SDN BHD" },
  { source_no: 13, name_as_printed: "MY WIREMAN SDN. BHD." },
  { source_no: 14, name_as_printed: "METRALINE ELECTRIC SDN BHD" },
  { source_no: 15, name_as_printed: "TEMPLER PARK INTERNATIONAL SCHOOL" },
  { source_no: 16, name_as_printed: "SEKOLAH KEBANGSAAN SERI KUNDANG" },
  { source_no: 17, name_as_printed: "D BILUT AGROFARM & RETREAT SDN BHD" },
  { source_no: 18, name_as_printed: "SELANGOR INDUSTRIAL CORPORATION SDN BHD" },
  { source_no: 19, name_as_printed: "SELANGOR INDUSTRIAL CORPORATION SDN BHD" },
  { source_no: 20, name_as_printed: "SEKOLAH KEBANGSAAN ULU YAM LAMA" },
  { source_no: 21, name_as_printed: "RAYA AIRWAYS SDN BHD" },
  { source_no: 22, name_as_printed: "HOSPITAL JENGKA" },
  { source_no: 23, name_as_printed: "FIMA INSTANCO SDN BHD" },
  { source_no: 24, name_as_printed: "TETUAN PERCETAKAN KESELAMATAN NEGARA SDN. BHD." },
  { source_no: 25, name_as_printed: "TETUAN PERCETAKAN KESELAMATAN NEGARA SDN. BHD." },
  { source_no: 26, name_as_printed: "TETUAN PERCETAKAN KESELAMATAN NEGARA SDN. BHD." },
  { source_no: 27, name_as_printed: "TETUAN PERCETAKAN KESELAMATAN NEGARA SDN. BHD." },
  { source_no: 28, name_as_printed: "TETUAN PERCETAKAN KESELAMATAN NEGARA SDN. BHD." },
  { source_no: 29, name_as_printed: "RAYA AIRWAYS SDN BHD" },
  { source_no: 30, name_as_printed: "RAYA AIRWAYS SDN BHD" },
  { source_no: 31, name_as_printed: "TETUAN PERCETAKAN KESELAMATAN NEGARA SDN. BHD." },
  { source_no: 32, name_as_printed: "TETUAN PERCETAKAN KESELAMATAN NEGARA SDN. BHD." },
  { source_no: 33, name_as_printed: "RAYA AIRWAYS SDN BHD" },
  { source_no: 34, name_as_printed: "PUSAT AKUATIK DARUL EHSAN" },
  { source_no: 35, name_as_printed: "JABATAN KEBAJIKAN MASYARAKAT NEGERI (JKMN) PAHANG" },
  { source_no: 36, name_as_printed: "JABATAN AGAMA ISLAM SELANGOR (JAIS)" },
  { source_no: 37, name_as_printed: "LEMBAGA ZAKAT SELANGOR (LZS)" }
];

export interface DeduplicatedClient {
  id: number;
  name: string;
  category: 'swasta' | 'kerajaan' | 'institusi' | 'pendidikan';
  count: number;
}

// Normalized deduplicated list (26 unique entities)
export const uniqueClients: DeduplicatedClient[] = [
  { id: 1, name: "Genting Malaysia Berhad", category: "swasta", count: 1 },
  { id: 2, name: "Aegis BPO Malaysia Sdn. Bhd", category: "swasta", count: 1 },
  { id: 3, name: "Pima Tech Services Sdn Bhd", category: "swasta", count: 1 },
  { id: 4, name: "Duta Technic Sdn Bhd", category: "swasta", count: 1 },
  { id: 5, name: "Sand Castle Resources Sdn Bhd", category: "swasta", count: 1 },
  { id: 6, name: "Butik Exclusive AQI Design Sdn Bhd", category: "swasta", count: 1 },
  { id: 7, name: "Templer Park International School", category: "pendidikan", count: 2 },
  { id: 8, name: "Selangor Industrial Corporation Sdn Bhd (SIC)", category: "kerajaan", count: 3 },
  { id: 9, name: "Pasti Imtiyaz Wangsa Maju", category: "pendidikan", count: 1 },
  { id: 10, name: "Amanah Ikhtiar Malaysia (AIM)", category: "institusi", count: 1 },
  { id: 11, name: "TGOOD Southeast Asia Sdn. Bhd", category: "swasta", count: 1 },
  { id: 12, name: "Raya Airways Sdn Bhd", category: "swasta", count: 5 },
  { id: 13, name: "My Wireman Sdn. Bhd.", category: "swasta", count: 1 },
  { id: 14, name: "Metraline Electric Sdn Bhd", category: "swasta", count: 1 },
  { id: 15, name: "Sekolah Kebangsaan Seri Kundang", category: "pendidikan", count: 1 },
  { id: 16, name: "D Bilut Agrofarm & Retreat Sdn Bhd", category: "swasta", count: 1 },
  { id: 17, name: "Sekolah Kebangsaan Ulu Yam Lama", category: "pendidikan", count: 1 },
  { id: 18, name: "Hospital Jengka", category: "kerajaan", count: 1 },
  { id: 19, name: "Fima Instanco Sdn Bhd", category: "swasta", count: 1 },
  { id: 20, name: "Tetuan Percetakan Keselamatan Negara Sdn. Bhd. (PKN)", category: "kerajaan", count: 7 },
  { id: 21, name: "Pusat Akuatik Darul Ehsan", category: "kerajaan", count: 1 },
  { id: 22, name: "Jabatan Kebajikan Masyarakat Negeri (JKMN) Pahang", category: "kerajaan", count: 1 },
  { id: 23, name: "Jabatan Agama Islam Selangor (JAIS)", category: "kerajaan", count: 1 },
  { id: 24, name: "Lembaga Zakat Selangor (LZS)", category: "institusi", count: 1 },
  { id: 25, name: "Hoseman Sdn Bhd", category: "swasta", count: 1 },
  { id: 26, name: "MP Image Solution Sdn Bhd", category: "swasta", count: 1 }
];
