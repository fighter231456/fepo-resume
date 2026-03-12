'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Experience() {
  const { lang } = useLanguage();

  // ข้อมูล Timeline (เรียงจากปัจจุบันย้อนกลับไปอดีต)
  const timelineData = [
    {
      id: 1,
      year: '2023 - Present',
      type: 'work',
      icon: '💻',
      title: { en: 'Freelance Software Engineer', th: 'นักพัฒนาซอฟต์แวร์อิสระ' },
      organization: { en: 'Independent / Freelance', th: 'รับงานอิสระ' },
      description: { 
        en: 'Designed and developed end-to-end web applications for various clients, including a comprehensive School Management Portal. Managed the entire software lifecycle from gathering requirements and designing databases to deployment and maintenance.', 
        th: 'ออกแบบและพัฒนาระบบ Web Application แบบครบวงจรให้กับลูกค้า (เช่น แพลตฟอร์มจัดการระบบโรงเรียน) ดูแลตั้งแต่การรับ Requirement จากลูกค้า, ออกแบบฐานข้อมูล, เขียนโค้ด ไปจนถึงการนำระบบขึ้นใช้งานจริง (Deployment)' 
      },
    },
    {
      id: 2,
      year: 'Apr 2025 - Apr 2026',
      type: 'work',
      icon: '📊',
      title: { en: 'Full-stack Web Developer', th: 'นักพัฒนาเว็บไซต์ (Full-stack)' },
      organization: { en: 'Ornanong Accounting and Auditing Office Co., Ltd.', th: 'บริษัท สำนักงานอรอนงค์การบัญชีและสอบบัญชี จำกัด' },
      description: { 
        en: 'Developed a modern financial dashboard and a multi-site ecosystem comprising a Node.js REST API, React Admin app, and public-facing sites (OA Audit, Thai Tax & Law). Integrated AI capabilities including OCR-assisted document parsing and an AI assistant. Engineered for fast, secure, and responsive experiences across both web and mobile platforms.', 
        th: 'พัฒนาระบบ Modern Financial Dashboard และสถาปัตยกรรมระบบแบบหลายเว็บไซต์ (Node.js REST API, Admin React App, OA Audit, Thai Tax & Law) ผสานการทำงานของ AI ทั้งระบบผู้ช่วยอัจฉริยะ (AI Assistant), การแยกแยะเอกสารด้วย OCR และระบบจับคู่ยอดชำระเงิน (Payment Matching) โดยออกแบบสถาปัตยกรรมให้รวดเร็ว ปลอดภัย และรองรับทั้ง Web/Mobile' 
      },
    },
    {
      id: 3,
      year: 'Feb 2024 - May 2026',
      type: 'work',
      icon: '🖥️',
      title: { en: 'Part-time Visual Jockey (VJ)', th: 'Visual Jockey (พาร์ทไทม์)' },
      organization: { en: 'SubscribeRama 7', th: 'ร้าน Subscribe พระราม 7' },
      description: { 
        en: 'Managed live visual displays and screen systems for the venue. Operated visual jockey software and handled the real-time photo donation system, displaying customer images on the main screens.', 
        th: 'ดูแลระบบหน้าจอและเล่นภาพวิชวลภายในร้าน ควบคุมการแสดงผลภาพเคลื่อนไหว (Visual) และดูแลระบบโดเนทรูปภาพเพื่อนำภาพของลูกค้าขึ้นแสดงบนหน้าจอหลักแบบเรียลไทม์' 
      },
    },
    {
      id: 4,
      year: 'Graduated', // หรือใส่ปี เช่น '2020 - 2024'
      type: 'education',
      icon: '🎓',
      title: { en: 'B.Eng. in Computer Engineering', th: 'ปริญญาตรี วิศวกรรมคอมพิวเตอร์' },
      organization: { en: 'Rajamangala University of Technology Phra Nakhon (RMUTP)', th: 'มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร (มทร.พระนคร)' },
      description: { 
        en: 'Graduated with a strong focus on Software Architecture, Data Science, and Artificial Intelligence. Built foundational knowledge through rigorous coursework and hands-on projects like enterprise POS systems and AI-driven OCR applications.', 
        th: 'สำเร็จการศึกษาโดยมุ่งเน้นที่สถาปัตยกรรมซอฟต์แวร์, วิทยาการข้อมูล (Data Science) และ AI ได้ลงมือทำโปรเจกต์สเกลใหญ่จริง เช่น ระบบ POS ระดับองค์กร และแอปพลิเคชันที่มีการประมวลผล OCR' 
      },
    }
  ];

  return (
    <section id="experience" className="w-full max-w-4xl mx-auto px-5 py-24 scroll-mt-24 border-t border-slate-200 dark:border-slate-800/50">
      
      {/* หัวข้อ Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">
          {lang === 'en' ? 'Experience & Education ' : 'ประสบการณ์และการศึกษา '}
          <span className="text-amber-500">🎓</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
          {lang === 'en' 
            ? 'My academic journey and professional experience.' 
            : 'เส้นทางการศึกษาและประสบการณ์การทำงาน'}
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6">
        
        {timelineData.map((item) => (
          <div key={item.id} className="mb-12 ml-8 md:ml-12 relative group">
            
            {/* จุดวงกลมบนเส้น Timeline (Timeline Dot) */}
            <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[53px] md:-left-[69px] ring-4 ring-slate-50 dark:ring-slate-950 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-blue-500 dark:group-hover:border-blue-500 text-lg">
              {item.icon}
            </span>

            {/* กล่องเนื้อหา (Content Card) */}
            <div className="flex flex-col p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              
              {/* ป้ายบอกปี (Year Badge) */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                {item.year}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {lang === 'en' ? item.title.en : item.title.th}
              </h3>
              
              <h4 className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                {lang === 'en' ? item.organization.en : item.organization.th}
              </h4>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {lang === 'en' ? item.description.en : item.description.th}
              </p>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}