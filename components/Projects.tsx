'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-5 py-24 scroll-mt-24 border-t border-slate-200 dark:border-slate-800/50">
      
      {/* ส่วนหัวข้อ Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">
          {lang === 'en' ? 'Featured Projects ' : 'ผลงานที่โดดเด่น '}
          <span className="text-purple-600 dark:text-purple-400">🚀</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
          {lang === 'en' 
            ? 'A showcase of my full-stack capabilities, system design architecture, and AI integrations solving real business needs.' 
            : 'รวบรวมผลงานที่แสดงถึงทักษะ Full-stack, การออกแบบสถาปัตยกรรมระบบ และการนำ AI มาประยุกต์ใช้เพื่อแก้ปัญหาธุรกิจจริง'}
        </p>
      </div>

      <div className="flex flex-col gap-8">
        
        {/* 🏆 FEATURED PROJECT (ตัวท็อป: AccountingWebsite + OCR) */}
        <div className="group relative flex flex-col md:flex-row rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
          
          {/* พื้นที่ใส่รูปภาพ (ฝั่งซ้าย) */}
          <div className="w-full md:w-5/12 bg-slate-100 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center min-h-[250px] md:min-h-full">
            {/* สีพื้นหลัง Gradient สวยๆ รอใส่รูปจริง */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-900/40 dark:to-blue-900/40 group-hover:scale-105 transition-transform duration-500"></div>
            <span className="text-5xl drop-shadow-md relative z-10">📄🤖</span>
            {/* โค้ชแนะนำ: เปลี่ยน 2 div ด้านบนเป็น <img src="/accounting-mockup.png" /> ในอนาคตครับ */}
          </div>

          {/* พื้นที่เนื้อหา (ฝั่งขวา) */}
          <div className="w-full md:w-7/12 p-8 sm:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              {lang === 'en' ? 'Core Highlight' : 'โปรเจกต์ไฮไลต์'}
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Accounting & HR Intelligence Platform
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {lang === 'en' 
                ? 'A comprehensive platform for accountants. Features include an automated document generation system (Quotations, Invoices, Receipts, Credit Notes) and an innovative HR Assistance module utilizing AI (OCR) to automatically extract and manage employee data from physical documents.' 
                : 'แพลตฟอร์มสำหรับนักบัญชีครบวงจร โดดเด่นด้วยระบบออกเอกสารอัตโนมัติ (QT, IV, RE, CN) พร้อมระบบผู้ช่วย HR อัจฉริยะที่ดึงเทคโนโลยี AI (OCR) มาใช้สกัดและจัดเก็บข้อมูลพนักงานจากเอกสารจริงได้โดยอัตโนมัติ'}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Next.js', 'Python (OCR)', 'Node.js', 'MySQL', 'Docker'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm font-medium rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

            {/* ปุ่ม Link ไปดูผลงาน (ถ้ามี) */}
            <div className="mt-auto">
              <a href="#" className="inline-flex items-center gap-2 font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                {lang === 'en' ? 'View Details ➔' : 'ดูรายละเอียด ➔'}
              </a>
            </div>
          </div>
        </div>

        {/* --- Grid สำหรับโปรเจกต์ที่ 2 และ 3 --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 💻 PROJECT 2: FlexiPOS */}
          <div className="group flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="w-full bg-slate-100 dark:bg-slate-800 relative h-[200px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 dark:from-blue-900/40 dark:to-teal-900/40 group-hover:scale-105 transition-transform duration-500"></div>
              <span className="text-5xl drop-shadow-md relative z-10">🛒</span>
            </div>
            
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                FlexiPOS System
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base flex-grow">
                {lang === 'en'
                  ? 'A robust full-stack Point of Sale (POS) system engineered for retail environments. Includes real-time data synchronization and scalable backend architecture.'
                  : 'ระบบจัดการจุดขาย (POS) แบบ Full-stack สำหรับธุรกิจค้าปลีก รองรับการซิงค์ข้อมูลแบบเรียลไทม์ และมีสถาปัตยกรรมหลังบ้านที่ยืดหยุ่น'}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['React.js', 'C#', 'Node.js', 'Full-stack'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 🏫 PROJECT 3: School Website */}
          <div className="group flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="w-full bg-slate-100 dark:bg-slate-800 relative h-[200px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 dark:from-orange-900/40 dark:to-yellow-900/40 group-hover:scale-105 transition-transform duration-500"></div>
              <span className="text-5xl drop-shadow-md relative z-10">🏫</span>
            </div>
            
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-[10px] font-bold uppercase tracking-wider mb-3 w-fit">
                {lang === 'en' ? 'Freelance Work' : 'โปรเจกต์ฟรีแลนซ์'}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                School Management Portal
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base flex-grow">
                {lang === 'en'
                  ? 'A tailored web application developed as a freelance project to streamline school administrative tasks, digitalize student records, and improve communication.'
                  : 'แอปพลิเคชันเว็บไซต์ระบบโรงเรียนที่พัฒนาขึ้นเพื่อจัดการงานเอกสาร แปลงข้อมูลนักเรียนให้อยู่ในระบบดิจิทัล และเพิ่มประสิทธิภาพการบริหารงาน'}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['Next.js', 'Tailwind CSS', 'Database'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}