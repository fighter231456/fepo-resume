'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-5 py-24 scroll-mt-24 border-t border-slate-200 dark:border-slate-800/50">
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* 📸 ฝั่งซ้าย: รูปโปรไฟล์แบบมืออาชีพ */}
        <div className="w-full md:w-5/12 relative">
          {/* กรอบรูปภาพ */}
          <div className="relative aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/30 ring-1 ring-slate-200 dark:ring-slate-800">
            {/* 💡 คำแนะนำ: เมื่อคุณมีรูปถ่ายใส่สูทหรือเสื้อเชิ้ตดูโปรๆ ให้นำมาใส่ตรงนี้แทน div สีเทานะครับ */}
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
              {/* <span className="text-6xl">👨‍💼</span> */}
              <img src="/mypic4.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* กล่องตกแต่งด้านหลัง (ลอยอยู่หลังรูป) */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-[2.5rem] -z-10 transform rotate-3"></div>
        </div>

        {/* ✍️ ฝั่งขวา: เนื้อหาแบบ Professional */}
        <div className="w-full md:w-7/12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white">
            {lang === 'en' ? 'About Me ' : 'เกี่ยวกับฉัน '}
            <span className="text-blue-600 dark:text-blue-400">👨‍💻</span>
          </h2>

          <div className="space-y-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              {lang === 'en' 
                ? 'I am a Full-stack Developer with a Bachelor of Engineering in Computer Engineering from Rajamangala University of Technology Phra Nakhon (RMUTP).' 
                : 'ผมคือ Full-stack Developer ที่สำเร็จการศึกษาระดับปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์ จากมหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร (มทร.พระนคร)'}
            </p>
            <p>
              {lang === 'en' 
                ? 'My expertise lies at the intersection of robust software architecture and artificial intelligence. Having engineered complex solutions like enterprise-level POS systems and AI-driven OCR platforms, I specialize in bridging the gap between Data Science models and functional web applications to solve real-world business challenges.' 
                : 'ความเชี่ยวชาญของผมคือการผสานสถาปัตยกรรมซอฟต์แวร์ที่แข็งแกร่งเข้ากับเทคโนโลยีปัญญาประดิษฐ์ (AI) จากประสบการณ์พัฒนาระบบระดับองค์กร เช่น ระบบ POS และแพลตฟอร์ม OCR ผมมุ่งเน้นที่การนำโมเดล Data Science มาประยุกต์ใช้กับ Web Application เพื่อแก้ปัญหาและเพิ่มประสิทธิภาพให้ธุรกิจอย่างแท้จริง'}
            </p>
            <p className="font-medium text-slate-800 dark:text-slate-300">
              {lang === 'en' 
                ? 'Beyond writing clean and scalable code, I am a strategic thinker who thrives in collaborative environments. I believe that understanding the overarching business domain is just as critical as the technology stack itself.' 
                : 'นอกเหนือจากการเขียนโค้ดที่มีประสิทธิภาพ ผมยังให้ความสำคัญกับการทำงานเป็นทีมและการวางแผนเชิงกลยุทธ์ ผมเชื่อเสมอว่าความเข้าใจในเป้าหมายขององค์กรนั้น สำคัญพอๆ กับเทคโนโลยีที่เลือกใช้'}
            </p>
          </div>

          {/* Quick Facts (โชว์จุดเด่นแบบกระชับ) */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-900/50 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">🎓 Education</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">B.Eng Computer Engineering, RMUTP</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-900/50 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">🎯 Core Focus</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Full-stack, AI Integration & Data</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}