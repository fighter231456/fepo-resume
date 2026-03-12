'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
// 👇 1. Import ไอคอนที่ต้องใช้ทั้งหมด
import { 
  SiNextdotjs, SiReact, SiTailwindcss, SiHtml5, 
  SiNodedotjs, SiPython, SiMysql, SiDocker, 
  SiGit, SiPandas 
} from 'react-icons/si';
import { TbBrandCSharp, TbApi } from 'react-icons/tb';
import { FaRobot, FaChartPie, FaNetworkWired, FaServer } from 'react-icons/fa';

export default function Skills() {
  const { lang } = useLanguage();

  // 👇 2. เปลี่ยนโครงสร้าง skills ให้เก็บ Icon และ Color ด้วย
  const skillCategories = [
    {
      id: 'frontend',
      title: { en: 'Frontend Development', th: 'การพัฒนาส่วนหน้าบ้าน' },
      icon: '🎨',
      description: { 
        en: 'Building responsive and interactive user interfaces.', 
        th: 'สร้าง UI ที่ตอบสนองรวดเร็วและใช้งานง่าย' 
      },
      skills: [
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
        { name: 'React.js', icon: SiReact, color: 'text-[#61DAFB]' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
        { name: 'HTML5/CSS3', icon: SiHtml5, color: 'text-[#E34F26]' },
      ],
      accentColor: 'bg-blue-500', 
    },
    {
      id: 'backend',
      title: { en: 'Backend & Database', th: 'ระบบหลังบ้านและฐานข้อมูล' },
      icon: '⚙️',
      description: { 
        en: 'Designing robust APIs and managing data architecture.', 
        th: 'ออกแบบ API ที่แข็งแกร่งและจัดการโครงสร้างข้อมูล' 
      },
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
        { name: 'C#', icon: TbBrandCSharp, color: 'text-[#239120]' },
        { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
        { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]' },
        { name: 'RESTful API', icon: TbApi, color: 'text-emerald-500' },
      ],
      accentColor: 'bg-green-500',
    },
    {
      id: 'ai_data',
      title: { en: 'AI & Data Science', th: 'ปัญญาประดิษฐ์และข้อมูล' },
      icon: '🧠',
      description: { 
        en: 'Integrating machine learning and data processing models.', 
        th: 'ผสานการทำงานของโมเดลอัจฉริยะและการประมวลผลข้อมูล' 
      },
      skills: [
        { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
        { name: 'Data Analysis', icon: FaChartPie, color: 'text-orange-500' },
        { name: 'OCR Integration', icon: FaRobot, color: 'text-purple-500' },
        { name: 'Pandas', icon: SiPandas, color: 'text-[#150458] dark:text-white' },
      ],
      accentColor: 'bg-purple-500',
    },
    {
      id: 'devops',
      title: { en: 'DevOps & Architecture', th: 'โครงสร้างพื้นฐานและเครื่องมือ' },
      icon: '🛠️',
      description: { 
        en: 'Deploying scalable solutions and version control.', 
        th: 'จัดการระบบที่ขยายตัวได้และควบคุมเวอร์ชันโค้ด' 
      },
      skills: [
        { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
        { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
        { name: 'System Design', icon: FaNetworkWired, color: 'text-slate-600 dark:text-slate-400' },
        { name: 'Architecture', icon: FaServer, color: 'text-slate-600 dark:text-slate-400' },
      ],
      accentColor: 'bg-orange-500',
    }
  ];

  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-5 py-24 scroll-mt-24">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">
          {lang === 'en' ? 'Tech Stack & Skills ' : 'ทักษะและเทคโนโลยี '}
          <span className="text-blue-600 dark:text-blue-400">⚡</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
          {lang === 'en' 
            ? 'I leverage a diverse set of modern technologies to build scalable full-stack applications and integrate intelligent AI solutions.' 
            : 'ผมเลือกใช้เทคโนโลยีที่ทันสมัยและหลากหลาย เพื่อสร้างระบบ Full-stack ที่มีประสิทธิภาพ และผสานการทำงานกับระบบ AI อย่างลงตัว'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div 
            key={category.id} 
            className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${category.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl bg-slate-100 dark:bg-slate-800 p-3 rounded-xl">
                {category.icon}
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {lang === 'en' ? category.title.en : category.title.th}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {lang === 'en' ? category.description.en : category.description.th}
                </p>
              </div>
            </div>

            {/* 👇 3. อัปเดตส่วน Badges ให้ดึง Icon มาโชว์ */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">
              {category.skills.map((skill) => (
                <span 
                  key={skill.name} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-50 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 transition-all hover:bg-white dark:hover:bg-slate-700 hover:shadow-md hover:-translate-y-0.5 cursor-default"
                >
                  {/* เรียกใช้ Component ไอคอน และยัดคลาสสีเข้าไป */}
                  <skill.icon className={`text-base ${skill.color}`} />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-100 dark:border-blue-900/30 text-center">
        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
          {lang === 'en' ? 'Soft Skills & Mindset 🤝' : 'ทักษะด้านการทำงานและกรอบความคิด 🤝'}
        </h3>
        <p className="text-slate-700 dark:text-slate-300">
          {lang === 'en' 
            ? 'Beyond writing code, I excel in teamwork and strategic planning. I believe that understanding the business domain is just as important as the technology itself.' 
            : 'นอกจากการเขียนโค้ด ผมยังมีทักษะการทำงานเป็นทีมและการวางแผนกลยุทธ์ที่ดีเยี่ยม ผมเชื่อว่าความเข้าใจในธุรกิจสำคัญพอๆ กับเทคโนโลยีที่เลือกใช้'}
        </p>
      </div>

    </section>
  );
}