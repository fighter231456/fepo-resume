// context/LanguageContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { flushSync } from 'react-dom';

type Language = 'en' | 'th';

type LanguageContextType = {
  lang: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const toggleLanguage = () => {
    if (!document.startViewTransition) {
      setLang((prev) => (prev === 'en' ? 'th' : 'en'));
      return;
    }

    // 1. แอบใส่คลาส lang-transition ก่อนเริ่มแอนิเมชัน
    document.documentElement.classList.add('lang-transition');

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setLang((prev) => (prev === 'en' ? 'th' : 'en'));
      });
    });

    // 2. พอแอนิเมชันจบ ก็ลบคลาสออกเพื่อทำความสะอาด
    transition.finished.finally(() => {
      document.documentElement.classList.remove('lang-transition');
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}