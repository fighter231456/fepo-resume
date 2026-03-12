'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <footer id="contact" className="w-full mt-20 pt-24 pb-12 border-t border-slate-200 dark:border-slate-800/50 bg-white dark:bg-slate-950/50">
      <div className="max-w-5xl mx-auto px-5">
        
        {/* หัวข้อ Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">
            {lang === 'en' ? 'Get In Touch ' : 'ช่องทางการติดต่อ '}
            <span className="text-emerald-500">📬</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
            {lang === 'en' 
              ? "I'm currently open for new opportunities as a Software Engineer / Full-stack Developer. Whether you have a question or just want to say hi, I'll try my best to get back to you!" 
              : 'ผมกำลังเปิดรับโอกาสใหม่ๆ ในตำแหน่ง Software Engineer / Full-stack Developer หากคุณมีคำถาม ข้อเสนอแนะ หรือโปรเจกต์ที่น่าสนใจ สามารถติดต่อผมได้ตลอดเวลาครับ'}
          </p>
        </div>

        {/* Contact Cards (อีเมล, LinkedIn, GitHub) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          {/* 1. Email Card */}
          <a 
            href="mailto:fighter231456@gmail.com" 
            className="group flex flex-col items-center p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 dark:hover:border-blue-800"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-3xl mb-4 group-hover:scale-110 transition-transform">
              📧
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Email</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">fighter231456@gmail.com</p>
          </a>

          {/* 2. LinkedIn Card */}
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 dark:hover:border-blue-800"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-3xl mb-4 group-hover:scale-110 transition-transform">
              💼
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">LinkedIn</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Connect with me</p>
          </a>

          {/* 3. GitHub Card */}
          <a 
            href="https://github.com/fighter231456" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-800"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 text-3xl mb-4 group-hover:scale-110 transition-transform">
              💻
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">GitHub</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">View my repositories</p>
          </a>
          
        </div>

        {/* --- Footer (ส่วนล่างสุดของเว็บ) --- */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} Pattaraphol Weingkham. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            {lang === 'en' ? 'Built with' : 'พัฒนาด้วย'} 
            <span className="font-semibold text-slate-700 dark:text-slate-300">Next.js</span> 
            & 
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}