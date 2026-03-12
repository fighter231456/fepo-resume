'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
// Import โลโก้แบรนด์ต่างๆ สำหรับ Tech Stack
import { SiNextdotjs, SiPython, SiNodedotjs, SiMysql, SiDocker } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb'; // เปลี่ยนมาดึงโลโก้ C# จากหมวด tb
import { FaBrain } from 'react-icons/fa';

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section 
      id="top" 
      className="relative w-full max-w-5xl mx-auto px-5 min-h-[85vh] flex flex-col justify-center mb-10 pt-32 sm:pt-40"
    >
      {/* Background Glow Effect (แสงฟุ้งๆ ด้านหลัง) */}
      <div className="absolute top-20 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* 📸 1. ส่วนบน: รูปโปรไฟล์ (ซ้ายบน) + ทักทาย */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-10">
        
        {/* รูปโปรไฟล์วงกลมแบบมีขอบ Gradient */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-purple-600 shadow-xl transition-transform hover:scale-105">
          <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center overflow-hidden">
            {/* 💡 โค้ชแนะนำ: เมื่อมีรูปตัวเอง ให้นำมาใส่ในโฟลเดอร์ public แล้วเปลี่ยนบรรทัดล่างเป็น <img src="/your-profile.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
            <img src="/mypic3.jpg" alt="Profile" className="w-full h-full object-cover" /> 
            {/* <span className="text-4xl sm:text-5xl">👨‍💻</span> */}
          </div>
        </div>

        {/* ข้อความทักทายและสถานะ */}
        <div className="flex flex-col items-start gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-sm text-sm font-medium text-slate-700 dark:text-slate-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            {lang === 'en' ? 'Open to Work (New Grad)' : 'พร้อมเริ่มงาน (เด็กจบใหม่)'}
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            {lang === 'en' ? 'Hi, I engineer' : 'สวัสดีครับ ผมพัฒนา'} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
              {lang === 'en' ? 'Full-stack & AI' : 'ระบบ Full-stack & AI'}
            </span>
          </h1>
        </div>
      </div>

      {/* 📋 2. ส่วนกลาง: สรุปข้อมูลทั้งหมด (Quick Summary Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        
        {/* สรุป: การศึกษา (Background) */}
        <div className="flex gap-4 items-start p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors w-full">
          <span className="text-2xl mt-1">🎓</span>
          <div className="w-full">
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">
              {lang === 'en' ? 'Background' : 'ประวัติการศึกษา'}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {lang === 'en' ? 'B.Eng. in Computer Engineering from RMUTP.' : 'ปริญญาตรี วิศวกรรมคอมพิวเตอร์ จาก มทร.พระนคร'}
            </p>
          </div>
        </div>

        {/* สรุป: ทักษะ (Skills) พร้อม Icons แบบสวยงาม */}
        <div className="flex gap-4 items-start p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors w-full">
          <span className="text-2xl mt-1">⚡</span>
          <div className="w-full">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">
              {lang === 'en' ? 'Core Tech Stack' : 'ทักษะความเชี่ยวชาญ'}
            </h3>
            
            {/* พื้นที่โชว์ Icon (จัดเรียงแบบ Flex Wrap ให้ปัดบรรทัดอัตโนมัติ) */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1 hover:border-black dark:hover:border-white">
                <SiNextdotjs className="text-black dark:text-white text-sm" />
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Next.js</span>
              </div>

              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1 hover:border-[#3776AB]">
                <SiPython className="text-[#3776AB] text-sm" />
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Python</span>
              </div>

              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1 hover:border-[#339933]">
                <SiNodedotjs className="text-[#339933] text-sm" />
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Node.js</span>
              </div>

              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1 hover:border-[#239120]">
                {/* 🎯 ใช้ไอคอน C# ตัวใหม่ที่ทำงานได้ 100% */}
                <TbBrandCSharp className="text-[#239120] text-base" />
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">C#</span>
              </div>

              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1 hover:border-[#4479A1]">
                <SiMysql className="text-[#4479A1] text-sm" />
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">MySQL</span>
              </div>

              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1 hover:border-[#2496ED]">
                <SiDocker className="text-[#2496ED] text-sm" />
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Docker</span>
              </div>

              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1 hover:border-purple-500">
                <FaBrain className="text-purple-500 text-sm" />
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Data & AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* สรุป: ผลงาน (Projects) */}
        <div className="flex gap-4 items-start p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors w-full">
          <span className="text-2xl mt-1">🚀</span>
          <div className="w-full">
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">
              {lang === 'en' ? 'Key Projects' : 'ผลงานระดับองค์กร'}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {lang === 'en' ? 'Enterprise POS systems & AI-driven Accounting/HR platforms (OCR).' : 'ระบบ POS ร้านค้า และแพลตฟอร์มบัญชี+HR อัจฉริยะ (AI/OCR)'}
            </p>
          </div>
        </div>

        {/* สรุป: Soft Skills */}
        <div className="flex gap-4 items-start p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors w-full">
          <span className="text-2xl mt-1">🤝</span>
          <div className="w-full">
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">
              {lang === 'en' ? 'Soft Skills' : 'จุดเด่นด้านการทำงาน'}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {lang === 'en' ? 'Strategic planning, teamwork, and bridging business needs with code.' : 'ทำงานเป็นทีมยอดเยี่ยม วางแผนกลยุทธ์ และเข้าใจตรรกะธุรกิจ'}
            </p>
          </div>
        </div>

      </div>

      {/* 🎯 3. ส่วนล่าง: ปุ่ม Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a 
          href="#projects" 
          className="group relative px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-900 shadow-xl shadow-slate-900/20 text-center"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          <span className="relative flex items-center justify-center gap-2">
            {lang === 'en' ? 'Deep Dive My Projects ➔' : 'เจาะลึกผลงานของผม ➔'}
          </span>
        </a>
        
        <a 
          href="/resume.pdf" 
          target="_blank" 
          className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold transition-all hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 hover:scale-105 active:scale-95 text-center"
        >
          {lang === 'en' ? 'Download Full Resume 📄' : 'ดาวน์โหลดเรซูเม่ 📄'}
        </a>
      </div>
      
    </section>
  );
} 