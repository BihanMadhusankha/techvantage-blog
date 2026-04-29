'use client';

import { useEffect, useState } from 'react';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'ru', name: 'Русский' },
  { code: 'uk', name: 'Українська' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'si', name: 'සිංහල' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'zh-TW', name: '繁體中文' },
];

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    // Check if googtrans cookie exists
    const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]*)/);
    if (match && match[1]) {
      const parts = match[1].split('/');
      if (parts.length > 2) {
        setCurrentLang(parts[2]);
      }
    }
  }, []);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setCurrentLang(lang);
    
    if (lang === 'en') {
      // Clear cookies
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${window.location.hostname}; path=/;`;
    } else {
      // Set new translation cookie
      document.cookie = `googtrans=/en/${lang}; path=/`;
      document.cookie = `googtrans=/en/${lang}; domain=.${window.location.hostname}; path=/`;
    }
    
    window.location.reload();
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-800 rounded-md px-2 py-1 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
        <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
        <select 
          value={currentLang} 
          onChange={changeLanguage}
          className="bg-transparent text-sm font-medium focus:outline-none appearance-none pr-4 cursor-pointer text-neutral-700 dark:text-neutral-300"
          style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
        >
          {LANGUAGES.map(lang => (
            <option key={lang.code} value={lang.code} className="bg-white dark:bg-neutral-900">
              {lang.name}
            </option>
          ))}
        </select>
        {/* Custom arrow for select since we removed default appearance */}
        <svg className="w-3 h-3 text-neutral-400 absolute right-2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
}
