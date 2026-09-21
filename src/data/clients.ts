export interface ClientRecord {
  source_no: number;
  name_as_printed: string;
}

// May 2026 company profile, PDF pages 48–49. Preserve printed order and spelling.
export const rawClientsData: ClientRecord[] = [
  { source_no: 1, name_as_printed: 'RAYA AIRWAYS SDN BHD' },
  { source_no: 2, name_as_printed: 'TALEEM (M) SDN BHD' },
  { source_no: 3, name_as_printed: 'THRUSTMARINE (MALAYSIA) SDN BHD' },
  { source_no: 4, name_as_printed: 'AEGIS BPO MALAYSIA SDN BHD' },
  { source_no: 5, name_as_printed: 'SELANGOR INDUSTRIAL CORPORATION SDN BHD' },
  { source_no: 6, name_as_printed: 'JAKEL PROPERTIES SDN BHD' },
  { source_no: 7, name_as_printed: 'HOSEMAN SDN BHD' },
  { source_no: 8, name_as_printed: 'JINGGA ANGGUN SDN BHD' },
  { source_no: 9, name_as_printed: 'GCM TECHNOLOGIES SDN BHD' },
  { source_no: 10, name_as_printed: 'TGOOD SOUTHEAST ASIAN SDN BHD' },
  { source_no: 11, name_as_printed: 'VISTA JINGGA' },
  { source_no: 12, name_as_printed: 'QISQAID ENTREPRISE' },
  { source_no: 13, name_as_printed: 'TENSAI RESOURCES SDN BHD' },
  { source_no: 14, name_as_printed: 'AMANAH IKTHIAR MALAYSIA' },
  { source_no: 15, name_as_printed: 'SPIROLITE (M) SDN BHD' },
  { source_no: 16, name_as_printed: 'GUAN LEE ELECTRICAL ENGINEERING' },
  { source_no: 17, name_as_printed: 'EVAL RESOURCES' },
  { source_no: 18, name_as_printed: 'NHS INTEGRATED SDN BHD' },
  { source_no: 19, name_as_printed: 'PASTI IMTIYAZ WANGSA MAJU' },
  { source_no: 20, name_as_printed: 'AQI DESIGN SDN BHD' },
  { source_no: 21, name_as_printed: 'SAND CASTLE RESOURCE' },
  { source_no: 22, name_as_printed: 'RAMUNIATEC SDN BHD' },
  { source_no: 23, name_as_printed: 'METRALINE ELECTRIC SDN BHD' },
  { source_no: 24, name_as_printed: 'DR, NIK & ASSOCIATED SDN BHD' },
  { source_no: 25, name_as_printed: 'PIMA TECH SERVICES SDN BHD' },
  { source_no: 26, name_as_printed: 'DUTA TECHNIC SDN BHD' },
  { source_no: 27, name_as_printed: 'EVAL RESOURCES' },
  { source_no: 28, name_as_printed: 'AKADEMI KHAIRIAH' },
  { source_no: 29, name_as_printed: 'VSMS SDN BHD' },
  { source_no: 30, name_as_printed: 'ENCORP STRAND MALL SDN BHD' },
  { source_no: 31, name_as_printed: 'OASIS BLENDS SDN BHD' },
  { source_no: 32, name_as_printed: 'AZTECH POWER SDN BHD' },
  { source_no: 33, name_as_printed: 'F&H TREND RESOUCES' },
  { source_no: 34, name_as_printed: 'ASIANIX BINA SDN BHD' },
  { source_no: 35, name_as_printed: 'SENANG GLOBAL ENGINEERING SDN BHD' },
  { source_no: 36, name_as_printed: 'KHALIFAH GLOBAL SERVICES (M) SDN BHD' },
  { source_no: 37, name_as_printed: 'ASI SYNERGY SDN BHD' }
];

export interface DeduplicatedClient {
  id: number;
  name: string;
  category: 'swasta' | 'kerajaan' | 'institusi' | 'pendidikan';
  count: number; // Occurrences in the printed client list, NOT projects.
}

const clientCategories: Record<string, DeduplicatedClient['category']> = {
  'SELANGOR INDUSTRIAL CORPORATION SDN BHD': 'kerajaan',
  'AMANAH IKTHIAR MALAYSIA': 'institusi',
  'PASTI IMTIYAZ WANGSA MAJU': 'pendidikan',
  'AKADEMI KHAIRIAH': 'pendidikan'
};

// Derive both membership and occurrence counts from the printed source only.
export const uniqueClients = rawClientsData.reduce<DeduplicatedClient[]>((clients, record) => {
  const existing = clients.find(client => client.name === record.name_as_printed);
  if (existing) existing.count += 1;
  else clients.push({
    id: record.source_no,
    name: record.name_as_printed,
    category: clientCategories[record.name_as_printed] ?? 'swasta',
    count: 1
  });
  return clients;
}, []);
