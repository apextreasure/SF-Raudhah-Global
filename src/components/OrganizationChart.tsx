import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { organizationStructure } from '../data/companyContent';
import './OrganizationChart.css';

export function OrganizationChart() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="organization-chart" aria-labelledby="organization-heading" className="org-section">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <span className="text-sm font-bold uppercase tracking-wider text-blue-700">Struktur Pengurusan</span>
        <h2 id="organization-heading" className="text-2xl sm:text-4xl font-extrabold text-slate-900">Carta Organisasi Syarikat</h2>
        <p className="text-base text-slate-700">Barisan pengurusan dan tenaga kerja seperti dalam profil syarikat Mei 2026, halaman 9.</p>
      </div>
      <ol className="org-grid" aria-label="Hierarki organisasi">
        {organizationStructure.map((person, index) => {
          const parent = organizationStructure.find(item => item.id === person.reportsTo);
          return (
            <li key={person.id} className={`org-position org-${person.id}`} data-person={person.id} data-reports-to={person.reportsTo ?? ''}>
              <motion.div
                className={`org-card ${index < 2 ? 'org-card-lead' : ''}`}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.045 }}
              >
                <p className="org-role">{person.role}</p>
                <h3 className="org-name">{person.name}</h3>
                {parent && <p className="org-report">Di bawah: <span>{parent.role}</span></p>}
              </motion.div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
