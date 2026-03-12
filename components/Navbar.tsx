'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from 'next-themes'; // 1. Import useTheme
import { useEffect, useState } from 'react';

type NavItemType = {
    id: string;
    icon: string;
    en: string;
    th: string;
};

export default function Navbar() {
    const { lang, toggleLanguage } = useLanguage();
    const { theme, setTheme, resolvedTheme } = useTheme(); // 2. ดึงค่าธีมมาใช้
    const [mounted, setMounted] = useState(false); // 3. สร้าง State เช็คการโหลด

    // 4. รอให้ Component โหลดเสร็จก่อนค่อยแสดงปุ่มธีม ป้องกัน Hydration Error
    useEffect(() => {
        setMounted(true);
    }, []);

    const leftItems: NavItemType[] = [
        { id: 'about', icon: '👨‍💻', en: 'About', th: 'เกี่ยวกับฉัน' },
        { id: 'skills', icon: '⚡', en: 'Skills', th: 'ทักษะ' },
        { id: 'projects', icon: '🚀', en: 'Projects', th: 'ผลงาน' },
    ];

    const rightItems: NavItemType[] = [
        { id: 'experience', icon: '🎓', en: 'Experience', th: 'ประสบการณ์' },
        { id: 'contact', icon: '📬', en: 'Contact', th: 'ติดต่อ' },
    ];
    // ใน components/Navbar.tsx (ส่วนฟังก์ชันด้านบน)
    const handleThemeToggle = () => {
        const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';

        if (!document.startViewTransition) {
            setTheme(newTheme);
            return;
        }

        // 1. แอบใส่คลาสเพื่อบอกให้ CSS รู้ว่า "นี่คือการเปลี่ยนธีมนะ สไลด์ได้เลย!"
        document.documentElement.classList.add('theme-transition');

        const transition = document.startViewTransition(() => {
            setTheme(newTheme);
        });

        // 2. พอสไลด์เสร็จ ก็ลบคลาสออก เพื่อไม่ให้ไปกวนตอนเปลี่ยนภาษา
        transition.finished.finally(() => {
            document.documentElement.classList.remove('theme-transition');
        });
    };

    return (
        <nav className="fixed top-0 left-1/2 z-50 -translate-x-1/2 drop-shadow-md transition-all duration-300 hover:drop-shadow-lg">
            <div
                className="flex items-center gap-1 sm:gap-2 bg-white/85 px-8 sm:px-12 pt-2 pb-3 backdrop-blur-md dark:bg-slate-900/85 border-b border-slate-200/50 dark:border-slate-700/50"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, calc(100% - 24px) 100%, 24px 100%)'
                }}
            >

                {leftItems.map((item) => (
                    <NavItem key={item.id} item={item} lang={lang} />
                ))}

                <a
                    href="#top"
                    className="mx-3 sm:mx-6 transform text-2xl sm:text-3xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 transition-transform hover:scale-110"
                >
                    {lang === 'en' ? 'ME' : 'ฉัน'}
                </a>

                {rightItems.map((item) => (
                    <NavItem key={item.id} item={item} lang={lang} />
                ))}

                {/* --- ส่วนแผงควบคุมด้านขวาสุด (ภาษา + ธีม) --- */}
                <div className="ml-2 pl-3 border-l-2 border-slate-200 dark:border-slate-700 h-6 flex items-center gap-1 sm:gap-2">

                    {/* ปุ่มสลับภาษา */}
                    <button
                        onClick={toggleLanguage}
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-xs font-bold text-slate-700 transition-colors hover:bg-blue-100 hover:text-blue-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-900/50 dark:hover:text-blue-300"
                        aria-label="Toggle Language"
                    >
                        {lang === 'en' ? 'TH' : 'EN'}
                    </button>

                    {/* ปุ่มสลับ Light/Dark Mode */}
                    {mounted && (
                        <button
                            onClick={handleThemeToggle} // <--- เรียกใช้ฟังก์ชันที่เราเพิ่งสร้าง
                            className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-sm transition-colors hover:bg-yellow-100 hover:text-yellow-600 dark:bg-slate-800 dark:hover:bg-indigo-900/50 dark:hover:text-indigo-300"
                            aria-label="Toggle Theme"
                        >
                            {resolvedTheme === 'dark' ? '🌙' : '☀️'}
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

function NavItem({ item, lang }: { item: NavItemType; lang: 'en' | 'th' }) {
    return (
        <a
            href={`#${item.id}`}
            className="group flex items-center justify-center rounded-lg bg-transparent px-2 py-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
            <span className="text-lg sm:text-xl drop-shadow-sm transition-transform group-hover:scale-110 group-hover:-rotate-6">
                {item.icon}
            </span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-slate-700 opacity-0 transition-all duration-500 ease-in-out group-hover:ml-2 group-hover:max-w-[120px] group-hover:opacity-100 dark:text-slate-200">
                {lang === 'en' ? item.en : item.th}
            </span>
        </a>
    );
}